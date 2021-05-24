from .db import db
from .users_games import users_games


# from .users_games import User_Game

# ItemDetail = db.Table('games_gamejams',
#                       db.Column('id', db.Integer, primary_key=True),
#                       db.Column('gameId', db.Integer, db.ForeignKey('Item.id')),
#                       db.Column('gamejamId', db.Integer, db.ForeignKey('Detail.id')),
#                       db.column('gamePlacement'))



class Game(db.Model):
    __tablename__ = 'games'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False, unique=True)
    blurb = db.Column(db.String(255))
    avatarUrl = db.Column(db.String(255))
    githubUrl = db.Column(db.String(255))
    websiteUrl = db.Column(db.String(255))
    users = db.relationship(
        "User",
        secondary=users_games,
        back_populates="games"
    )
    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "blurb": self.blurb,
            "avatarUrl": self.avatarUrl,
            "githubUrl": self.githubUrl,
            "websiteUrl": self.websiteUrl,
        }

    def to_dict_users(self):
        return {
            "id": self.id,
            "name": self.name,
            "blurb": self.blurb,
            "avatarUrl": self.avatarUrl,
            "githubUrl": self.githubUrl,
            "websiteUrl": self.websiteUrl,
            "users": [user.to_dict() for user in self.users]
        }
