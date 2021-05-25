from .teams_gamejams import teams_gamejams
from .db import db
from .games_gamejams import games_gamejams

class GameJam(db.Model):
    __tablename__ = "gamejams"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    theme = db.Column(db.String, nullable=False)
    blurb = db.Column(db.Text, nullable=False)
    avatar = db.Column(db.String)
    website = db.Column(db.String)
    github = db.Column(db.String)
    userLimit = db.Column(db.Integer, nullable=False)
    startDate = db.Column(db.Date, nullable=False)
    endDate = db.Column(db.Date, nullable=False)
    games = db.relationship(
        "Game",
        secondary=games_gamejams,
        back_populates='gamejams'
    )
    teams = db.relationship(
        'Team',
        secondary=teams_gamejams,
        back_populates='gamejams'
    )

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "theme": self.theme,
            "blurb": self.blurb,
            "avatar": self.avatar,
            "website": self.website,
            "github": self.github,
            "userLimit": self.userLimit,
            "startDate": self.startDate,
            "endDate": self.endDate,
        }

    def to_dict_games(self):
        return {
            "id": self.id,
            "name": self.name,
            "theme": self.theme,
            "blurb": self.blurb,
            "avatar": self.avatar,
            "website": self.website,
            "github": self.github,
            "userLimit": self.userLimit,
            "startDate": self.startDate,
            "endDate": self.endDate,
            "games": [game.to_dict() for game in self.games]
        }

    def to_dict_teams(self):
        return {
            "id": self.id,
            "name": self.name,
            "theme": self.theme,
            "blurb": self.blurb,
            "avatar": self.avatar,
            "website": self.website,
            "github": self.github,
            "userLimit": self.userLimit,
            "startDate": self.startDate,
            "endDate": self.endDate,
            "team": [team.to_dict() for team in self.teams]
        }
