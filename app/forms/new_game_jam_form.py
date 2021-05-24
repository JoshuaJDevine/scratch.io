from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextField, DateField, SubmitField
from wtforms.validators import DataRequired

class GameJamForm(FlaskForm):
    name = StringField("name", validators=[DataRequired()])
    theme = StringField("theme", validators=[DataRequired()])
    blurb = StringField("blurb", validators=[DataRequired()])
    avatar = StringField("avatar")
    website = StringField("website")
    github = StringField("github")
    userLimit = StringField("userLimit", validators=[DataRequired()])
    startDate = StringField("startDate", validators=[DataRequired()])
    endDate = StringField("endDate", validators=[DataRequired()])
    submit = SubmitField('Submit')
