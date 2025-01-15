from flask_restful import Resource
from flask import request
import json

class BookingResource(Resource):
    def post(self):
        name = request.args.get('name')
        email = request.args.get('email')
        reason = request.args.get('reason')

        if name is None or email is None or reason is None:
            return {'error': 'Missing required fields'}, 400
        
        booking = Booking(name, email, reason)
        booking.save()
        return {'success': 'Booking saved'}, 200


class Booking:
    def __init__(self, name, email, reason):
        self.name = name
        self.email = email
        self.reason = reason
    
    def save(self):
        dict = {
            'name': self.name,
            'email': self.email,
            'reason': self.reason
        }
        save_file = open("./database.txt", "w")  
        json.dump(dict, save_file)
        save_file.close()


