# from flask_oauthlib.client import OAuth
# from flask import session

# def google_auth(app):
#     oauthservice = OAuth(app)
#     google_oauth = oauthservice.remote_app(
#         'google',
#         consumer_key=app.config.get('GOOGLE_ID'),
#         consumer_secret=app.config.get('GOOGLE_SECRET'),
#         request_token_params={
#             'scope': 'email'
#         },
#         base_url='https://www.googleapis.com/oauth2/v1/',
#         request_token_url=None,
#         access_token_method='POST',
#         access_token_url='https://accounts.google.com/o/oauth2/token',
#         authorize_url='https://accounts.google.com/o/oauth2/auth',
#     )
#     @google_oauth.tokengetter
#     def get_google_oauth_token():
#         return session.get('google_token')

#     return google_oauth
# def sme_auth(app):
#     return 'null'
from flask import Blueprint
auth = Blueprint('auth', __name__)
from . import views