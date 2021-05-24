from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(username='Demo', email='demo@aa.io',
                password='password')

    user2 = User(username='Bubba Hotep', email='bubba@aa.io',
                password='password2')

    user3 = User(username='Chad Chadington', email='chad@aa.io',
                password='password3')

    db.session.add(demo)
    db.session.add(user2)
    db.session.add(user3)


    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
