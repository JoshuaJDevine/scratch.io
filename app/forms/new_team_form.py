from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField, TextAreaField, 
from wtforms.validators import DataRequired, ValidationError
from app.models import Team


def team_exists(form, field):
    print("Checking if team exits", field.data)
    name = field.data
    user = Team.query.filter(Team.name == name).first()
    if user:
        raise ValidationError("Team is already registered.")


class NewTeamForm(FlaskForm):
    name = StringField('name', validators=[DataRequired(), team_exists])
    blurb = TextAreaField('blurb')
    avatar = StringField('avatar')
    website = StringField('website')
    github = StringField('github')
    recruiting = BooleanField('recruiting')
