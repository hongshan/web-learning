from flask import g, jsonify
from flask_httpauth import HTTPBasicAuth
from ..models import User, AnonymousUser
from . import api
from .errors import unauthorized, forbidden

auth = HTTPBasicAuth()


@auth.verify_password
def verify_password(email_or_token, password):
    if email_or_token == '':
        g.current_user = {"is_anonymous":True, "confirmed":False}
        return False
    if password == '':
        g.current_user = {"is_anonymous":False, "confirmed":False}
        if email_or_token == 'usetoken':
            return True
    if email_or_token == 'wrong':
        g.current_user = {"is_anonymous":False, "confirmed":False}
        return False
    g.current_user = {"is_anonymous":False, "confirmed":True}
    return True


@auth.error_handler
def auth_error():
    return unauthorized('Invalid credentials')


@api.before_request
@auth.login_required
def before_request():
    if not g.current_user['is_anonymous'] and \
            not g.current_user['confirmed']:
        return forbidden('Unconfirmed account')

@api.route('/auth', methods=['POST'])
def auth():
    return "some token is here"
    # if g.current_user.is_anonymous or g.token_used:
    #     return unauthorized('Invalid credentials')
    # return jsonify({'token': g.current_user.generate_auth_token(
    #     expiration=3600), 'expiration': 3600})
