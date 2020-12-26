"""
Main script to run the API

When executing: flask commands, it looks for an app.py file or if we change this name we need to add an
environment variable FLASK_APP to point where the entrypoint is
"""
import json
import click

from src import create_app, db

app = create_app()


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


@app.route('/test_users')
def test():
    from src.main.model.user import User
    result = User.query.all()
    data_res = {}
    for res in result:
        print(type(res.password))
        data_res = ({
            "username": res.username,
            "password": res.password.hash.decode('utf-8')
        })

    return data_res, 200


if __name__ == '__main__':
    print("--- Starting Python Web Server with Flask ---")
    app.run(host=app.config['FLASK_RUN_HOST'], port=app.config['FLASK_RUN_PORT'], debug=app.config['DEBUG'])
