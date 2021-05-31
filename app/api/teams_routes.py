from flask import Blueprint, session, request
from app.models import Team, User, Skill, db
from app.forms import NewTeamForm
from .auth_routes import validation_errors_to_error_messages

teams_routes = Blueprint('teams', __name__)


############################# GET ALL TEAMS #############################
@teams_routes.route('/')
def teams():
    args = request.args
    games = True if args["getJoinedGames"] == 'true' else False
    users = True if args["getJoinedUsers"] == 'true' else False
    gamejams = True if args["getJoinedGameJams"] == 'true' else False
    skills = True if args["getJoinedSkills"] == 'true' else False

    teams = Team.query\
        .filter(Team.name.ilike(f"%{args['searchTerm']}%" )) \
        .limit(int(args['resultLimit']))\
        .all()
    return {"teams": [team.to_dict(games=games, users=users, gamejams=gamejams, skills=skills) for team in teams]}

############################ GET ONE TEAM ###############################
@teams_routes.route('/<int:id>')
def team(id):
    args = request.args
    games = True if args["getJoinedGames"] == 'true' else False
    users = True if args["getJoinedUsers"] == 'true' else False
    gamejams = True if args["getJoinedGameJams"] == 'true' else False
    skills = True if args["getJoinedSkills"] == 'true' else False

    team = Team.query.get(id)
    return team.to_dict(games=games, users=users, gamejams=gamejams, skills=skills)


########################## POST NEW TEAM ################################
@teams_routes.route('/', methods=['POST'])
def new_team():
    form = NewTeamForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        team = Team(
            name=data['name'],
            blurb=data['blurb'],
            avatar=data['avatar'],
            website=data['website'],
            github=data['github'],
            recruiting=data['recruiting'],
            captainId=data['captainId']
        )
        db.session.add(team)
        db.session.commit()
        return team.to_dict()
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
        team_to_update.captainId = form.data['captainId']

        db.session.commit()

        return team_to_update.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

######################## CHANGE WANTED SKILLS ############################
@teams_routes.route('/<int:id>/change_wanted_skills', methods=['POST'])
def change_wanted_skills(id):
    data = request.json
    wantedSkills = data['skills']
    team = Team.query.get(id)
    teamSkills = team.skills

    for teamSkill in teamSkills:
        team.skills.remove(teamSkill)

    for skillId in wantedSkills:
            skill = Skill.query.get(skillId)
            team.skills.append(skill)
            db.session.commit()

    return team.to_dict(skills=True)

############################ DELETE TEAM ################################
@teams_routes.route('/<int:id>', methods=['DELETE'])
def delete_team(id):
    team_to_delete = Team.query.get(id)
    db.session.delete(team_to_delete)
    db.session.commit()
    return team_to_delete.to_dict()


######################### ADD NEW TEAM MEMBER #############################
@teams_routes.route('/<int:id>/add_new_member', methods=['POST'])
def add_team_member(id):
    data = request.json
    userId = data["userId"]
    user = User.query.get(userId)
    team = Team.query.get(id)

    team.users.append(user)
    db.session.commit()
    return team.to_dict(users=True)



######################### REMOVE TEAM MEMBER #############################
@teams_routes.route('/<int:id>/remove_team_member', methods=['DELETE'])
def remove_team_member(id):
    data = request.json
    userId = data["userId"]
    user = User.query.get(userId)
    team = Team.query.get(id)

    team.users.reomve(user)
    db.session.commit()
    return team.to_dict(users=True)
