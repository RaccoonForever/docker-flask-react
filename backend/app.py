"""
Main script to run the API

When executing: flask commands, it looks for an app.py file or if we change this name we need to add an
environment variable FLASK_APP to point where the entrypoint is
"""
import json
import click

from src import create_app

app = create_app()

# Import here models after creating app


# Adding some CLI command
@app.cli.command()
def init_db():
    """
    Initialize database data
    """
    print("Init DB test")


# Import routes

@app.route('/hello')
def hello():
    return json.dumps("hello"), 200


@app.route('/hello/<name>')
def hello_name(name):
    return "Hello {} !".format(name)


if __name__ == '__main__':
    print("--- Starting Python Web Server with Flask ---")
    app.run(host=app.config['FLASK_RUN_HOST'], port=app.config['FLASK_RUN_PORT'], debug=app.config['DEBUG'])
