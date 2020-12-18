# Base image and upgrading to latest dependencies
FROM python:3.6.9-alpine

RUN apk add --no-cache bash
RUN apk add --no-cache postgresql-libs
RUN apk add --no-cache --virtual .build-deps gcc python3-dev musl-dev postgresql-dev

RUN pip install --upgrade pip

# Maintainers

# Basic env var
ENV LANG C.UTF-8
ENV LC_ALL C.UTF-8
ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONFAULTHANDLER 1

# Wait script for every dependencies to be loaded
ENV WAIT_VERSION 2.7.3
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/$WAIT_VERSION/wait /wait
RUN chmod +x /wait

# Install dependencies
COPY Pipfile .
COPY Pipfile.lock .
RUN pip install pipenv==2020.11.15
RUN pipenv install --deploy --system
RUN apk --purge del .build-deps

COPY start.sh .
RUN chmod +x start.sh

# Add user non-root for better security
RUN adduser -D worker
USER worker
WORKDIR /home/worker

# Copy project
COPY . .

# Set environment variables for wsgi (prod server for flask)
ENV STATIC_URL /static
ENV STATIC_PATH /home/worker/static
# if 1 then the url / serves /static/index.html
ENV STATIC_INDEX 0
ENV PYTHONPATH /home/worker/

# Set environment variables for backend
ARG ENVIRONMENT
ENV ENVIRONMENT=$ENVIRONMENT
ENV FLASK_ENV=$ENVIRONMENT
ARG FLASK_RUN_HOST
ENV FLASK_RUN_HOST=$FLASK_RUN_HOST
ARG FLASK_RUN_PORT
ENV FLASK_RUN_PORT=$FLASK_RUN_PORT
ARG FLASK_APP
ENV FLASK_APP=$FLASK_APP

ARG DATABASE_URL
ENV DATABASE_URL=$DATABASE_URL

ARG WAIT_HOSTS
ENV WAIT_HOSTS=$WAIT_HOSTS
ARG WAIT_HOSTS_TIMEOUT
ENV WAIT_HOSTS_TIMEOUT=$WAIT_HOSTS_TIMEOUT
ARG WAIT_SLEEP_INTERVAL
ENV WAIT_SLEEP_INTERVAL=$WAIT_SLEEP_INTERVAL
ARG WAIT_HOST_CONNECT_TIMEOUT
ENV WAIT_HOST_CONNECT_TIMEOUT=$WAIT_HOST_CONNECT_TIMEOUT

EXPOSE 5000

