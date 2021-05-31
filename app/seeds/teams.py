from app.models import db, Team
from faker import Faker
import random

faker = Faker()

def seed_teams():
    team_list = ["The Wellermen", "The Budiasattvas of Chaos", "The Deamon Demons", 
                "Appitite for Abstraction", "The Mac Hackers", "BitRealm", 
                "Need for Git", "Byte Me", "The Errors", "No Band Limit",
                "Zero Ping", "Access Denied", "Smash Hack Gremlins"
                "Unreal Motor", "RPGremlins", "The Furniture", "Code Monkeys",
                "The Bit Offenders", "The Nvidiots", "Game Smiths"]

    # avatar_types = ["bottts", "gridy"]

    for team_name in team_list:
        domain = ''.join(team_name.split())
        # avatar_type = random.choice(avatar_types)

        new_team = Team(name=team_name,
        blurb = faker.text(255),
        avatar = f"/images/teamAvatars/{domain}.jpg",
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
