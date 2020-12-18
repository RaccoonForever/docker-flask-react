"""
Script that will handle the different envs configuration
"""
import os

basedir = os.path.abspath(os.path.dirname(__file__))


class Config(object):
    """
    Class that will handle common configuration for all environment
    """
    DEBUG = False
    ENVIRONMENT = "development"
    FLASK_RUN_HOST = os.getenv('FLASK_RUN_HOST', "0.0.0.0")
    FLASK_RUN_PORT = int(os.getenv('FLASK_RUN_PORT', 5000))
    # Var that is used by sql_alchy to connect to DB
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL', "sqlite:///" + os.path.join(basedir, "app.db"))
    # Disable a feature in SQLAlchemy that signal the app everytime a change is gonna be made in DB
    SQLALCHEMY_TRACK_MODIFICATIONS = False


class DevelopmentConfig(Config):
    DEBUG = True
    ENVIRONMENT = "development"


class ProductionConfig(Config):
    DEBUG = False
    ENVIRONMENT = "production"


CONFIG_BY_NAME = dict(
    development=DevelopmentConfig,
    production=ProductionConfig
)
