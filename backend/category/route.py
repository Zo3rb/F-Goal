from flask import Blueprint, jsonify, request
from jsonschema import validate, ValidationError
from flask_jwt_extended import jwt_required, get_jwt_identity

from backend import db
from backend.category.validation import create_category_schema
from backend.auth.model import User
from backend.category.model import Category
from backend.constants import HTTP_200_OK, HTTP_400_BAD_REQUEST, HTTP_401_UNAUTHORIZED, HTTP_201_CREATED, HTTP_404_NOT_FOUND, HTTP_202_ACCEPTED

category = Blueprint('category', __name__, url_prefix='/api/category')

@category.route('/', methods=['POST'])
@jwt_required()
def categories_post_handler():
    """
        POST: Adding a new Category.
    """
    if request.method == 'POST':
        data = request.get_json()

        try:
            validate(data, create_category_schema)
        except ValidationError as errors:
            return jsonify({'error': str(errors.message)}), HTTP_400_BAD_REQUEST
        
        user_id = get_jwt_identity()
        user = User.query.filter_by(id=user_id).first()

        if user and user.isAdmin:
            new_category = Category(name=data['name'])
            db.session.add(new_category)
            db.session.commit()
            return jsonify({'message': "New Category Created Successfully"}), HTTP_201_CREATED
        else:
            return jsonify({'message': "Not Allowed"}), HTTP_401_UNAUTHORIZED
        
@category.route('/all')
def categories_get_handler():
        """
            GET: Listing all the Categories.
        """
        categories = Category.query.all()
        category_list = []
        for category in categories:
            category_dict = {}
            category_dict['id'] = category.id
            category_dict['name'] = category.name
            category_list.append(category_dict)
        return jsonify({'message': 'Successfully Fetched Categories', 'categories': category_list}), HTTP_200_OK


@category.route('/<int:id>')
def category_get_handler(id):
    """
        GET: Get a Specific Category.
    """
    category_to_fetch = Category.query.filter_by(id=id).first()
    if not category_to_fetch:
        return jsonify({'message': "Not Found"}), HTTP_404_NOT_FOUND
    else:
        category_dict = {'id': category_to_fetch.id, 'name': category_to_fetch.name}
        return jsonify({'message': "Fetched Successfully", 'category': category_dict}), HTTP_200_OK


@category.route('/<int:id>', methods=['DELETE', 'PUT'])
@jwt_required()
def category_update_del_handler(id):
    """
        PUT: Update an existing Category.
        DELETE: Delete an existing Category.
    """
    if request.method == 'PUT':
        data = request.get_json()

        try:
            validate(data, create_category_schema)
        except ValidationError as errors:
            return jsonify({'error': str(errors.message)}), HTTP_400_BAD_REQUEST
        
        user_id = get_jwt_identity()
        user = User.query.filter_by(id=user_id).first()

        if user and user.isAdmin:
            category_to_edit = Category.query.filter_by(id=id).first()
            if category_to_edit:
                category_to_edit.name = data['name']
                db.session.commit()
                return jsonify({'message': "Updated Successfully"}), HTTP_202_ACCEPTED
            else:
                return jsonify({'message': "Not Found"}), HTTP_404_NOT_FOUND
        else:
            return jsonify({'message': "Not Allowed"}), HTTP_401_UNAUTHORIZED
    elif request.method == 'DELETE':
        user_id = get_jwt_identity()
        user = User.query.filter_by(id=user_id).first()

        if user and user.isAdmin:
            category_to_del = Category.query.get(id)
            if not category_to_del:
                return jsonify({'message': "Not Found"}), HTTP_404_NOT_FOUND
            db.session.delete(category_to_del)
            db.session.commit()
            return jsonify({'message': "Deleted Successfully"}), HTTP_202_ACCEPTED

