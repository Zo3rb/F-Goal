from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager

from backend.config import Config

db = SQLAlchemy()

def create_app(initial_config=Config):
    app = Flask(__name__)
    app.config.from_object(initial_config)
    
    CORS(app)

    db.init_app(app)
    JWTManager(app)

    from backend.auth.route import auth

    app.register_blueprint(auth)

    return app