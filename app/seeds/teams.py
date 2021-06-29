from app.models import db, Team
from faker import Faker
import random

faker = Faker()

def seed_teams():
    team_list = ["The Wellermen", "The Budiasattvas of Chaos", "The Deamon Demons", 
                "Appitite for Abstraction", "The Mac Hackers", "BitRealm", 
                "Need for Git", "Byte Me", "The Errors", "No Band Limit",
                "Zero Ping", "Access Denied", "Smash Hack Gremlins",
                "Unreal Motor", "RPGremlins", "The Furniture", "Code Monkeys",
                "The Bit Offenders", "The Nvidiots", "Game Smiths"]

    avatars = [
        "https://media.discordapp.net/attachments/859200778946215976/859201792666501120/TheWellermen.jpg", 
        "https://media.discordapp.net/attachments/859200778946215976/859201771707957278/TheBudiasattvasofChaos.jpg",
        "https://media.discordapp.net/attachments/859200778946215976/859201780201553960/TheDeamonDemons.jpg?width=670&height=670",
        "https://media.discordapp.net/attachments/859200778946215976/859201749502918686/AppititeforAbstraction.jpg",
        "https://media.discordapp.net/attachments/859200778946215976/859201787076149258/TheMacHackers.jpg",
        "https://media.discordapp.net/attachments/859200778946215976/859201753819906129/BitRealm.jpg",
        "https://media.discordapp.net/attachments/859200778946215976/859201765164580874/NeedforGit.jpg",
        "https://media.discordapp.net/attachments/859200778946215976/859201758864998430/ByteMe.jpg?width=670&height=670",
        "https://media.discordapp.net/attachments/859200778946215976/859201780364869638/TheErrors.jpg",
        "https://media.discordapp.net/attachments/859200778946215976/859201767165526057/NoBandLimit.jpg",
        "https://media.discordapp.net/attachments/859200778946215976/859201795811967036/ZeroPing.jpg",
        "https://media.discordapp.net/attachments/859200778946215976/859201729220444170/AccessDenied.jpg?width=673&height=670",
        "https://media.discordapp.net/attachments/859200778946215976/859201770097737781/SmashHackGremlins.jpg?width=893&height=670",
        "https://media.discordapp.net/attachments/859200778946215976/859201793669595136/UnrealMotor.jpg",
        "https://media.discordapp.net/attachments/859200778946215976/859201768865136650/RPGremlins.jpg",
        "https://media.discordapp.net/attachments/859200778946215976/859201782734651393/TheFurniture.jpg",
        "https://media.discordapp.net/attachments/859200778946215976/859201760937115701/CodeMonkeys.jpg",
        "https://media.discordapp.net/attachments/859200778946215976/859204447947063337/TheBitOffenders.jpg",
        "https://media.discordapp.net/attachments/859200778946215976/859201789069099028/TheNvidiots.jpg",
        "https://media.discordapp.net/attachments/859200778946215976/859201764187963473/GameSmiths.jpg?width=670&height=670"
        ]

    i = 0
    for team_name in team_list:
        domain = ''.join(team_name.split())
        # avatar_type = random.choice(avatar_types)

        new_team = Team(name=team_name,
        blurb = faker.text(255),
        avatar = avatars[i],
        website = f"www.{domain}.com",
        github = f"www.github.com/{domain}",
        recruiting = random.choice([True, False]),
        captainId = random.randint(1, 51)
        )
        db.session.add(new_team)
        i += 1
    db.session.commit()


def undo_teams():
    db.session.execute('TRUNCATE teams RESTART IDENTITY CASCADE;')
    db.session.commit()
