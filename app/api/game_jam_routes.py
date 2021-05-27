from flask import Blueprint, request
from app.models import GameJam, tags_gamejams, Tag, db
from app.forms import GameJamForm
from datetime import datetime, time, timedelta

bp = Blueprint('gamejams', __name__)

# GET all game jams.
@bp.route('/')
def get_game_jams():
    args = request.args
    date_now = datetime.now()
    if args['date'] == "day":
        date_later = datetime.now() + timedelta(days=1)
    elif args['date'] == "week":
        date_later = datetime.now()+ timedelta(weeks=1)
    elif args['date'] =="month":
        date_later = datetime.now()+ timedelta(days=30)
    elif args['date'] == "year":
        date_later = datetime.now()+ timedelta(days=365)
    else:
        date_now = datetime.now() - timedelta(days=(365*100))
        date_later = datetime.now() + timedelta(days=(365*100))

    # print(date_later)

    games = True if args["getJoinedGames"] == 'true' else False
    teams = True if args["getJoinedTeams"] == 'true' else False
    tags = True if args["getJoinedTags"] == 'true' else False

       
    game_jams = GameJam.query.join(tags_gamejams).join(Tag) \
        .filter(
            GameJam.name.ilike(f"%{args['searchTerm']}%") |
            Tag.name.ilike(f"%{args['searchTerm']}%")
        ) \
        .filter((date_now != None), (GameJam.startDate > date_now), (GameJam.startDate < date_later)) \
        .limit(int(args['resultLimit'])) \
        .all()
    return {"game_jams": [game_jam.to_dict(games=games, teams=teams, tags=tags) for game_jam in game_jams]}

# GET game jam data for a single game jam.
@bp.route('/<int:id>')
def get_game_jam(id):
    game_jam = GameJam.query.get(id)
    return game_jam.to_dict()

# POST a new game jam.
@bp.route('/', methods=['POST'])
def post_game_jam():
    form = GameJamForm()
    form['csrf_token'].data = request.cookies['crsf_token']

    if form.validate_on_submit():
        data = form.data
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
        )
        db.session.add(new_game_jam)
        db.session.commit()
        return new_game_jam.to_dict()


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
def delete_game_jam(id):
    game_jam_to_delete = GameJam.query.get(id)
    db.session.delete(game_jam_to_delete)
    db.session.commit()
    return game_jam_to_delete.to_dict()
