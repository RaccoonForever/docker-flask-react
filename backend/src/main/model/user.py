"""
Script that will handle users and its functionalities
"""
from src import db
from sqlalchemy_utils import PasswordType, force_auto_coercion

force_auto_coercion()


class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), nullable=False, unique=True)
    password = db.Column(PasswordType(schemes=['pbkdf2_sha512']), nullable=False)
    firstname = db.Column(db.String(128), nullable=True)
    lastname = db.Column(db.String(128), nullable=True)
    email = db.Column(db.String(256), nullable=True)

    def __repr__(self):
        return f'<id {self.id}, username {self.username}, email {self.email}>'
