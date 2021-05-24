from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Game


#Is this needed? Can we handle this check somewhere else since the field needs to be unique?
def game_exists(form, field):
    print("Checking if game exits", field.data)
    newGameName = field.data
    game = Game.query(Game).filter(Game.name == newGameName)
    if newGameName:
        raise ValidationError("Game name is already registered.")
        #TODO work on flavor of error messages


class NewGameForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
