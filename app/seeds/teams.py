from app.models import db, Team


def seed_teams():
    print('++++++++ BIG AND NOTICABLE ++++++++++')
    teamList = ["The Wellermen", "The Deamon Demons", "Appitite for Abstractioin"]
    for x in teamList:
        newTeam = Team(name=x,
        blurb = "Blurbity blurb blurb. Blurb blurb blurb",
        avatar = "www.teamavatar.com",
        website = "www.teamwebsite.com",
        github = "www.github.com/team",
        recruiting = False
        )
        db.session.add(newTeam)
    db.session.commit()


def undo_teams():
    db.session.execute('TRUNCATE teams RESTART IDENTITY CASCADE;')
    db.session.commit()