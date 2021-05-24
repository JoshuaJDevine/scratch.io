from .users_teams import users_teams
from .teams_gamejams import teams_gamejams
from .db import db

class Team(db.Model):
    __tablename__ = 'teams'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(100), nullable = False, unique = True)
    blurb = db.Column(db.Text)
    avatar = db.Column(db.String)
    website = db.Column(db.String)
    github = db.Column(db.String)
    recruiting = db.Column(db.Boolean)
    users = db.relationship(
        'User',
        secondary=users_teams,
        back_populates='teams'
    )
    gameJams = db.relationship(
        'GameJam',
        secondary=teams_game,
        back_populates='teams'
    )

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "blurb": self.blurb,
            "avatar": self.avatar,
            "website": self.website,
            "github": self.github,
            "recruiting": self.recruiting
        }

    def to_dict_users(self):
        return {
            "id": self.id,
            "name": self.name,
            "blurb": self.blurb,
            "avatar": self.avatar,
            "website": self.website,
            "github": self.github,
            "recruiting": self.recruiting,
            "users": [user.to_dict() for user in self.users]
        }

    def to_dict_gamejams(self):
        return {
            "id": self.id,
            "name": self.name,
            "blurb": self.blurb,
            "avatar": self.avatar,
            "website": self.website,
            "github": self.github,
            "recruiting": self.recruiting,
            "gameJams": [gameJam.to_dict() for gameJam in self.gameJams]
        }
