import psutil
from time import sleep
from pymongo import MongoClient
import time

client = MongoClient("mongodb://43.200.152.117:27017/")

db = client['linux']
test = db['test']

list = test.find({}, {'_id':0})
for x in list:
 print(x)
