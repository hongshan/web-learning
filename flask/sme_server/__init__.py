"""A simple game server."""
from flask import Flask, request, jsonify, json, session, redirect, url_for, render_template
from flask_pymongo import PyMongo
import redis
app = Flask(__name__)
app.config.update(dict(
    MONGO_DBNAME='smedb',
    DEBUG=True,
    GOOGLE_ID="1036904218446-inik8dl5306081thrgukas5in16pkkta.apps.googleusercontent.com",
    GOOGLE_SECRET="SBx0TdftbGgMNZBUwfv08ROZ"
))
mongo = PyMongo(app)
app.secret_key = 'development'

# @app.route('/')
# def index():
#     if 'google_token' in session:
#         me = google.get('userinfo')
#         return jsonify({"data": me.data})
#     elif 'sme_token' in session:
#         me = smenative.get('userinfo')
#         return jsonify({"data": me.data})
#     return redirect(url_for('login'))

# @app.route('/login', methods=['POST', 'GET'])
# def login():
#     error = None
#     if request.method == 'POST':
#         if request.form.get("userorigin") == 'google':
#             return google.authorize(callback=url_for('gauthorized', _external=True))
#         elif request.form.get('userorigin') == 'sme':
#             # user = mongo.db.users.find_one({'username': request.form.get('username')})
#             # if not user:
#             #     mongo.db.users.insert_one({'uuid': request.form.get('uuid')})
#             #     return json.dumps({'userdata': None})
#             # else:
#             #     return json.dumps({'userdata':user.get('userdata')})

#             session['user'] = request.form.get('username')
#             return render_template('index.html')
#     else:
#         return render_template('login.html', error=error)

        

# @app.route('/login/gauthorized')
# def gauthorized():
#     resp = google.authorized_response()
#     if resp is None:
#         return 'Access denied: reason=%s error=%s' % (
#             request.args['error_reason'],
#             request.args['error_description']
#         )
#     session['google_token'] = (resp['access_token'], '')
#     me = google.get('userinfo')
#     return jsonify({"data": me.data})

# @app.route('/user', methods=['POST'])
# def save_user_info():
#     if not request.form.get('uuid'):
#         return 'Invalid user'
#     elif request.form.get('userdata'):
#         userdata = request.form.get('userdata')
#         uuid = request.form.get('uuid')
#         if mongo.db.users.find_one({'uuid': uuid}):
#             mongo.db.users.update({'uuid': uuid}, {'uuid': uuid,'userdata': userdata})
#             return 'Save successfully'
#         else:
#             return 'No such user'
#     else:
#         return 'Miss userdata'

def run():
    from .app_1 import app_1 as app_1_blueprint
    app.register_blueprint(app_1_blueprint)
    from .auth import auth as auth_blueprint
    app.register_blueprint(auth_blueprint, url_prefix='/auth')
    from .api_1_0 import api as api_1_0_blueprint
    app.register_blueprint(api_1_0_blueprint, url_prefix='/api/v1.0')
    app.run(debug=True)
if __name__ == '__main__':
    app.run(debug=True)
