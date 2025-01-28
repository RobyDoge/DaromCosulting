from flask_restful import Resource
from flask import request
import json
import boto3

def save_booking(booking):
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table('Bookings')
    table.put_item(Item=booking.__dict__)


class Booking:
    def __init__(self, name, email, reason):
        self.name = name
        self.email = email
        self.reason = reason


