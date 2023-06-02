from flask import jsonify

from backend import create_app
from backend.constants import HTTP_404_NOT_FOUND, HTTP_500_INTERNAL_SERVER_ERROR, HTTP_200_OK

app = create_app()

@app.route("/api/health-check")
def index():
    return jsonify({'message': 'API is Working Successfully'}), HTTP_200_OK

@app.errorhandler(HTTP_404_NOT_FOUND)
def handle_404(e):

    """
        an Endpoint to handle Not Found Errors.
        Args:
            e (object): the Error Object
    """

    return jsonify({'Error': "Not Found"}), HTTP_404_NOT_FOUND

@app.errorhandler(HTTP_500_INTERNAL_SERVER_ERROR)
def handle_404(e):

    """
        an Endpoint to handle Internal Server Errors.
        Args:
            e (object): the Error Object
    """

    return jsonify({'Error': "Something Went Wrong"}), HTTP_500_INTERNAL_SERVER_ERROR

if __name__ == '__main__':
    app.run(host='0.0.0.0', port='5000', debug=True)
