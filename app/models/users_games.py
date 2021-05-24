from .db import db

User_Game = db.Table('users_games',
                       db.Column('id', db.Integer, primary_key=True),
                       db.Column('userId', db.Integer, db.ForeignKey('User.id')),
                       db.Column('gameId', db.Integer, db.ForeignKey('Game.id')))
