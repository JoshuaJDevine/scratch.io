from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Game


def game_exists(form, field):
    print("Checking if game exits", field.data)
    newGameName = field.data
    game = Game.query(Game).filter(Game.name == newGameName)
    if newGameName:
        raise ValidationError("Game name is already registered.")


class NewgameForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
