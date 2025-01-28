from flask import Flask, request, jsonify
from flask_restful import Api, Resource
from flask_cors import CORS
from booking import Booking,save_booking

app = Flask('DaromConsultingServer')
api = Api(app)
CORS(app)


@app.route('/booking', methods=['POST'])
def booking():
    name = request.args.get('name')
    email = request.args.get('email')
    reason = request.args.get('reason')

    if name is None or email is None or reason is None:
        return {'error': 'Missing required fields'}, 400

    booking = Booking(name, email, reason)
    save_booking(booking)
    return {'success': 'Booking saved'}, 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)