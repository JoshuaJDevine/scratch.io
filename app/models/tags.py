from .db import db
from .tags_gamejams import tags_gamejams
from .tags_games import tags_games


class Tag(db.Model):
    __tablename__ = 'tags'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(25), nullable = False)
    gamejams = db.relationship(
        'GameJam',
        secondary=tags_gamejams,
        back_populates='tags'
    )
    games = db.relationship(
        'Game',
        secondary=tags_games,
        back_populates='tags'
    )

    def get_joined_gamejams(self):
        return [gamejam.to_dict() for gamejam in self.gamejams]

    def get_joined_games(self):
        return [game.to_dict() for game in self.games]

    def to_dict(self, gamejams=False, games=False):
        '''
            @params: gamejams=boolean, games=boolean
            parameters dictate included tables.
        '''
        dct = { 'name': self.name}

        if gamejams:
            dct["gamejams"] = self.get_joined_gamejams()

        if games:
            dct["games"] = self.get_joined_games()
        
        return dct
