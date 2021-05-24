from .db import db
from sqlalchemy.ext.declarative import declarative_base

# User_Game = db.Table('users_games',
#                        db.Column('id', db.Integer, primary_key=True),
#                        db.Column('userId', db.Integer, db.ForeignKey('User.id')),
#                        db.Column('gameId', db.Integer, db.ForeignKey('Game.id')))

users_games = db.Table(
    "users_games",
    db.Column('id', db.Integer, primary_key=True),
    db.Column("userId", db.Integer, db.ForeignKey("users.id")),
    db.Column("gameId", db.Integer, db.ForeignKey("games.id"))
)
