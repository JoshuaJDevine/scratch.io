from flask import Blueprint
from flask.globals import request
from app.models import User, skills_users

# app.models imports go here:
from app.models import Skill

skills_routes = Blueprint('skills', __name__)


def validation_errors_to_error_messages(validation_errors):
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages

@skills_routes.route("/")
def skills():
    skills = Skill.query.all()
    return {"skills": [skill.to_dict(users=True) for skill in skills]}

@skills_routes.route('/<int:id>')
def skill():
    args = request.args
    users = True if args["getJoinedUsers"] == 'true' else False

    skills_of_user = Skill.query.join(skills_users).join(User).all()
    return {'skills_of_user': [skills.to_dict(users=users) for skills in skills_of_user]}
