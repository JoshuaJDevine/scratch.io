from flask import Blueprint, jsonify, session, request
from app.models import Game, User, Tag, tags_games, db
from app.forms import NewGameForm


game_routes = Blueprint('games', __name__)


def validation_errors_to_error_messages(validation_errors):
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages


# Is login required to access any of the games api?
# GET /api/games/   ---------  Get all games
@game_routes.route('/')
def games():
    args = request.args
    tags = True if args["getJoinedTags"] == 'true' else False
    

    games = Game.query.join(tags_games).join(Tag) \
        .filter(
            Game.name.ilike(f"%{args['searchTerm']}%") |
            Tag.name.ilike(f"%{args['searchTerm']}%")
        ) \
        .limit(int(args['resultLimit'])) \
        .all()
    return {"games": [game.to_dict(tags=tags) for game in games]}


# POST /api/games/  ---------  Create game
@game_routes.route('/', methods=['POST'])
def create_new_game():
    form = NewGameForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    # Todo expand form functionality
    if form.validate_on_submit():
        newGame = Game(
            name=form.data['name'],
        )
        db.session.add(newGame)
        db.session.commit()
        return newGame.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


# GET /api/games/:id   ---------  Get game where id=id
@game_routes.route('/<int:id>')
def game(id):
    game = Game.query.get(id)
    print("GAM IN API ------>", game)
    return game.to_dict()


# POST /api/games/:id  ---------  Update game where id=id
@game_routes.route('/<int:id>', methods=['POST'])
def update_game(id):
    # Todo just reuse create game form?
    form = NewGameForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        game_to_update = Game.query.get(id)
        game_to_update.name = form.data['name']
        db.session.commit()
        return game_to_update.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


# DELETE /api/games/:id  ---------  Delete game where id=id
@game_routes.route('/<int:id>', methods=['DELETE'])
def delete_game(id):
    game_to_delete = Game.query.get(id)
    db.session.delete(game_to_delete)
    db.session.commit()
    return game_to_delete.to_dict()
