from flask import Blueprint, session, request
from app.models import Team, db
from app.forms import NewTeamForm
from .auth_routes import validation_errors_to_error_messages

teams_routes = Blueprint('teams', __name__)


############################# GET ALL TEAMS #############################
@teams_routes.route('/')
def teams():
    teams = Team.query.all()
    return {"teams": [team.to_dict() for team in teams]}

############################ GET ONE TEAM ###############################
@teams_routes.route('/<int:id>')
def team(id):
    team = Team.query.get(id)
    return team.to_dict()


########################## POST NEW TEAM ################################
@teams_routes.route('/', methods=['POST'])
def new_team():
    form = NewTeamForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        team = Team(
            name=form.data['name'],
            blurb=form.data['blurb'],
            avatar=form.data['avatar'],
            website=form.data['website'],
            github=form.data['github'],
            recruiting=form.data['recruiting']
        )
        db.session.add(team)
        db.session.commit()
        return team.to_dict()
        # put into utils or imp[ort from auth routes?
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


############################## UPDATE TEAM ################################
@teams_routes.route('/<int:id>', methods=['POST'])
def update_team(id):
    form = NewTeamForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        team_to_update = Team.query.get(id)
        team_to_update.name=form.data['name'],
        team_to_update.blurb = form.data['blurb'],
        team_to_update.avatar = form.data['avatar'],
        team_to_update.website = form.data['website'],
        team_to_update.github = form.data['github'],
        team_to_update.recruiting = form.data['recruiting']
        db.session.commit()
        return team_to_update.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


############################ DELETE TEAM ################################

@teams_routes.route('/<int:id>', methods=['DELETE'])
def delete_team(id):
    team_to_delete = Team.query.get(id)
    db.session.delete(team_to_delete)
    db.session.commit()
    return team_to_delete.to_dict()
