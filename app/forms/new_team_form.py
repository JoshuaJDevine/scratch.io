from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField, TextAreaField
from wtforms.validators import DataRequired
from app.models import Team


class NewTeamForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    blurb = TextAreaField('blurb')
    avatar = StringField('avatar')
    website = StringField('website')
    github = StringField('github')
    recruiting = BooleanField('recruiting')
