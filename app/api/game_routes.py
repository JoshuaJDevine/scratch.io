from flask import Blueprint
from app.models import Game

game_routes = Blueprint('games', __name__)


@game_routes.route('/')
def games():
    games = Game.query.all()
    return {"games": [game.to_dict() for game in games]}
