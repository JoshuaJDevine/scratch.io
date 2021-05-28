from app.models import db, Team
from faker import Faker
import random

faker = Faker()

def seed_teams():
    team_list = ["The Wellermen", "The Budiasattvas of Chaos" "The Deamon Demons", 
                "Appitite for Abstraction", "The Mac Hackers", "BitRealm", 
                "Need for Git", "Byte Me", "The Errors", "No Band Limit",
                "Pings With Things", "Access Denied", "Smash Hack Grimlins"
                "Unreal Motors", "RPGrimlins", "The Furniture", "Code Monkeys",
                "The Bit Offenders", "The Nvidiots", "Game Smiths"]
    for team_name in team_list:
        domain = ''.join(team_name.split())
        new_team = Team(name=team_name,
        blurb = faker.text(255),
        avatar = "www.teamavatar.com",
        website = f"www.{domain}.com",
        github = f"www.github.com/{domain}",
        recruiting = random.choice([True, False]),
        captainId = random.randint(1, 51)
        )
        db.session.add(new_team)
    db.session.commit()


def undo_teams():
    db.session.execute('TRUNCATE teams RESTART IDENTITY CASCADE;')
    db.session.commit()
