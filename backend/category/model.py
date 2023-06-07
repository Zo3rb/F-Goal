from datetime import datetime

from backend import db

class Category(db.Model):
    """Category Model/Class/Entity"""
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(45), nullable=False, unique=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
    
    def __repr__(self):
        return f"<Category(id={self.id}, name='{self.name}'>"
