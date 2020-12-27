"""
Init script
"""
import os
import flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

from config import CONFIG_BY_NAME

db = SQLAlchemy()
migrate = Migrate()


def create_app():
    """
    Method to call to get the web application initialized
    """
    app = flask.Flask(__name__, template_folder="../templates")
    app.config.from_object(CONFIG_BY_NAME[os.getenv('ENVIRONMENT', 'development')])
    print("--- {} Environment initialized ---".format(app.config['ENVIRONMENT']))

    # DB Init
    db.init_app(app)

    # Migration init
    migrate.init_app(app, db)

    # Register blueprints
    from src.main.flask.blueprint import authentication as auth
    from src.main.flask.blueprint import main as main_blueprint

    app.register_blueprint(auth.authentication)
    app.register_blueprint(main_blueprint.main)

    return app
