"""
Init script
"""
import os
import flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from alembic import op
from sqlalchemy import table, column, String, Integer, Enum

from config import CONFIG_BY_NAME

db = SQLAlchemy()
migrate = Migrate()


def create_app():
    """
    Method to call to get the web application initialized
    """
    app = flask.Flask(__name__)
    app.config.from_object(CONFIG_BY_NAME[os.getenv('ENVIRONMENT', 'development')])
    print("--- {} Environment initialized ---".format(app.config['ENVIRONMENT']))

    # Registering blueprints etc...
    # app.app_context().push()

    # DB Init
    db.init_app(app)

    # Import model for SQL Alchemy - Alembic migration

    # Migration init
    migrate.init_app(app, db)

    return app
