from flask_restful import Resource
from flask import request
import json
import boto3

def save_booking(booking):
    if booking.name == None or booking.email == None or booking.reason == None:
        return 400
    if booking.name == '' or booking.email == '' or booking.reason == '':
        return 400
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table('Bookings')
    table.put_item(Item=booking.__dict__)
    return 200


class Booking:
    def __init__(self, name, email, reason):
        self.name = name
        self.email = email
        self.reason = reason


