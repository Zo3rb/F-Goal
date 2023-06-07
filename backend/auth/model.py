from datetime import datetime
from werkzeug.security import generate_password_hash

from backend import db

class User(db.Model):
    """User Model/Class/Entity"""
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), nullable=False, unique=True)
    email = db.Column(db.String(120), nullable=False, unique=True)
    password = db.Column(db.Text, nullable=False)
    isAdmin = db.Column(db.Integer, default=0)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    @staticmethod
    def hashing_password_before_insert(mapper, connection, target):
        target.password = generate_password_hash(target.password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'isAdmin': self.isAdmin,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }


    def __repr__(self):
        return f"<User(id={self.id}, username='{self.username}', email='{self.email}')>"
    
db.event.listen(User, 'before_insert', User.hashing_password_before_insert)
