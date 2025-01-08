from flask import Flask, request, jsonify
from flask_restful import Api, Resource
from booking import BookingResource

app = Flask('DaromConsultingServer')
api = Api(app)


api.add_resource(BookingResource, '/booking')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)