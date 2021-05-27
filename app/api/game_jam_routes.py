from flask import Blueprint, request
from app.models import GameJam, db
from app.forms import GameJamForm

bp = Blueprint('gamejams', __name__)

# GET all game jams.
@bp.route('/')
def get_game_jams():
    args = request.args
    games = True if args["getJoinedGames"] == 'true' else False
    teams = True if args["getJoinedTeams"] == 'true' else False
    tags = True if args["getJoinedTags"] == 'true' else False

    game_jams = GameJam.query \
        .filter(GameJam.name.ilike(f"%{args['searchTerm']}%")) \
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
