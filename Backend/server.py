from flask import Flask, request, jsonify
from flask_restful import Api, Resource
from flask_cors import CORS
from booking import Booking,save_booking

app = Flask('DaromConsultingServer')
api = Api(app)
CORS(app)

#TODO: After booking a mail shoudl be send to the user and also to the admin
@app.route('/booking', methods=['POST'])
def booking():
    data = request.get_json()
    booking = Booking(data['name'], data['email'], data['reason'])
    if save_booking(booking)==400:
        return {'error': 'Missing required fields'}, 400
    return {'success': 'Booking saved'}, 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)