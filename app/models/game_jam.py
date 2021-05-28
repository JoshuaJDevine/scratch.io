from .teams_gamejams import teams_gamejams
# from .games_gamejams import games_gamejams
from .tags_gamejams import tags_gamejams
from .db import db

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
    ownerId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable = False)

    # One to Many
    owner = db.relationship(
        "User",
        back_populates='owned_gamejams'
    )

    # Many to Many
    teams = db.relationship(
        'Team',
        secondary=teams_gamejams,
        back_populates='gamejams'
    )
    tags = db.relationship(
        "Tag",
        secondary=tags_gamejams,
        back_populates='gamejams'
    )
    games = db.relationship(
        "Game",
        backref='gamejams',
        lazy=True
    )

    def get_joined_games(self):
        return [game.to_dict() for game in self.games]

    def get_joined_teams(self):
        return [team.to_dict() for team in self.teams]

    def get_joined_tags(self):
        return [tag.to_dict() for tag in self.tags]

    def to_dict(self, teams=False, tags=False, games=False):
        dct = {
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

        if teams:
            dct["teams"] = self.get_joined_teams()

        if games:
            dct["games"] = self.get_joined_games()

        if tags:
            dct["tags"] = self.get_joined_tags()

        return dct
