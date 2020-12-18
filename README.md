# Anomaly detection in logs project

## Environment
To initialize your environment to do some development on local machine, do the following:
- You must have python 3.6.9 on your machine
- You must have pipenv installed too
- In log-anomaly-detection folder, do a `pipenv shell` to activate the virtualenv
- If you want to launch a command in the virtualenv without activating it: `pipenv run`
- The 'Pipfile' and 'Pipfile.lock' are files that manages python dependencies

Docker commands in root folder (where docker-compose.yml is):
- By default you need to have a .env file in root folder with all VAR like in .env.example
- To build: `docker-compose build`
- To launch the stack: `docker-compose up -d`

Local DB:
- It uses a local "app.db" from sqlite3 included in python if no postgresql is available
- First launch: `flask db init`
- Then: `flask db migrate` to generate new models to keep in version control
- Then: `flask db upgrade` to update the DB (only this to do in production, others are for development environment)
