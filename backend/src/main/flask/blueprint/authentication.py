from flask import Blueprint, render_template, redirect, url_for

authentication = Blueprint('auth', __name__)


@authentication.route('/login')
def login():
    return render_template("login.html")


@authentication.route('/logout')
def logout():
    return "Logout page"


@authentication.route('/signup', methods=['POST'])
def signup():

    # Redirect after creating user
    return redirect(url_for("auth.login"))
