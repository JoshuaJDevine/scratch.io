from app.models import Skill, db

def seed_skills():

    skill_one = Skill(skill_name="2D design")
    skill_two = Skill(skill_name="3D design")
    skill_three = Skill(skill_name="Graphic design")
    skill_four = Skill(skill_name="Developer")

    db.session.add(skill_one)
    db.session.add(skill_two)
    db.session.add(skill_three)
    db.session.add(skill_four)

    db.session.commit()

def undo_skills():
     db.session.execute('TRUNCATE skills RESTART IDENTITY CASCADE;')
     db.session.commit()
