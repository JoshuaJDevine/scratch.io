from app.models import Tag, db

def seed_tags():

    lst = ["unity", 'unreal', 'godot', 'rpgmaker', '2d', '3d', 'isometric', 'alpha', 'beta',
           'fps', 'platformer', 'puzzle', 'action', 'rpg', 'horror', 'comedy', 'drama']

    for tag in lst:
        db.session.add(Tag(name=tag))

    db.session.commit()

def undo_tags():
    db.session.execute('TRUNCATE tags RESTART IDENTITY CASCADE;')
    db.session.commit()
