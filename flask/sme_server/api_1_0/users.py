from flask import jsonify, request, current_app, url_for
from . import api
from ..models import User


@api.route('/users/<int:id>')
def get_user(id):
    if id == "hello":
        return "I'm a fake user"
@api.route('/users/test')
def test():
    return "I'm a fake user test"