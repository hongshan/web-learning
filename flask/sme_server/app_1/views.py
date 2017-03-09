from . import app_1
from flask import render_template

@app_1.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')