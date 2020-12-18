"""
Script that will handle users and its functionalities
"""
import bcrypt
from sqlalchemy.orm import validates

from src import db
from src.main.utils.password import Password


class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), nullable=False, unique=True)
    firstname = db.Column(db.String(128), nullable=True)
    lastname = db.Colum(db.String(128), nullable=True)
    email = db.Colum(db.String(256), nullable=True)
    password = db.Column(Password, nullable=False)

    @validates('password')
    def _validate_password(self, key, password):
        return getattr(type(self), key).type.validator(password)

    def __repr__(self):
        return f'<id {self.id}, username {self.username}, email {self.email}>'
