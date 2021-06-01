from flask import Blueprint, request
from app.models import GameJam, tags_gamejams, Tag, db
from app.forms import GameJamForm
from datetime import datetime, time, timedelta
from flask_login import current_user, login_user, logout_user, login_required

bp = Blueprint('gamejams', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages

# GET all game jams.
@bp.route('')
def get_game_jams():
    args = request.args
    date_now = datetime.now()
    if args['date'] == "day":
        date_later = datetime.now() + timedelta(days=1)
    elif args['date'] == "week":
        date_later = datetime.now()+ timedelta(weeks=1)
    elif args['date'] == "month":
        date_later = datetime.now()+ timedelta(days=30)
    elif args['date'] == "year":
        date_later = datetime.now()+ timedelta(days=365)
    else:
        date_now = datetime.now() - timedelta(days=(365*1000))
        date_later = datetime.now() + timedelta(days=(365*1000))

    games = True if args["getJoinedGames"] == 'true' else False
    teams = True if args["getJoinedTeams"] == 'true' else False
    tags = True if args["getJoinedTags"] == 'true' else False

    game_jams = GameJam.query.join(tags_gamejams).join(Tag) \
        .filter(
            GameJam.name.ilike(f"%{args['searchTerm']}%") |
            Tag.name.ilike(f"%{args['searchTerm']}%")
        ) \
        .filter((date_now != None), (GameJam.startDate > date_now), (GameJam.startDate < date_later)) \
        .all()[:int(args['resultLimit'])]

    return {"game_jams": [game_jam.to_dict(games=games, teams=teams, tags=tags) for game_jam in game_jams]}

# GET game jam data for a single game jam.
@bp.route('/<int:id>')
def get_game_jam(id):
    game_jam = GameJam.query.get(id)
    return game_jam.to_dict()

# POST a new game jam.
@bp.route('', methods=['POST'])
# @login_required
def post_game_jam():
    form = GameJamForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        print('data',data)
        new_game_jam = GameJam(
            name = data["name"],
            theme = data["theme"],
            blurb = data["blurb"],
            avatar = data["avatar"],
            website = data["website"],
            github = data["github"],
            userLimit = data["userLimit"],
            startDate = data["startDate"],
            endDate = data["endDate"],
            ownerId = data["ownerId"]
        )
        db.session.add(new_game_jam)

        new_game_jam.tags.append(Tag.query.get(1))

        db.session.commit()
        return new_game_jam.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


# PATCH a game jam.
@bp.route('/<int:id>', methods=['PATCH'])
def patch_game_jam(id):
    form = GameJamForm()
    form['csrf_token'].data = request.cookies['crsf_token']

    if form.validate_on_submit():
        data = form.data
        game_jam_to_patch = GameJam.query.get(id)
        for key in data:
            game_jam_to_patch[key] = data[key]
        db.session.commit()
        return game_jam_to_patch.to_dict()


# DELETE a game jam.
@bp.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_game_jam(id):
    game_jam_to_delete = GameJam.query.get(id)
    if (current_user.id == game_jam_to_delete.ownerId):
        db.session.delete(game_jam_to_delete)
        db.session.commit()
        return game_jam_to_delete.to_dict()
    else:
        print(f'\nError: User Id:{current_user.id} did not match Owner Id:{game_jam_to_delete.ownerId}\n',)
