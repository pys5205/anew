from pymongo import MongoClient
import time

client = MongoClient("mongodb://43.200.152.117:27017/")

db = client['linux']
test = db['test']
test.delete_many({})


user1 = {"user":1, "disk":'d', "useage":"5%"}
x1 = test.insert_one(user1)
print(x1.inserted_id)

print("1 insert ")
list = test.find({}, {'_ids':0})
for x in list:
 print(x)

today = time.strftime('%y-%m-%d %H:%M:%S')

info = [
{"user":3, "disk":'/sdb1', "useage":'100%', "time":today},
{"user":4, "disk":'/sda1', "useage":'91%', "time":today},
{"user":5, "disk":'/sdc1', "useage":'10%', "time":today}
]
x = test.insert_many(info)

print(x.inserted_ids)
print("3,4,5 insert ")
list = test.find({}, {'_ids':0})
for x in list:
 print(x)

test.delete_one({"user":1})

print("1 delete ")
list = test.find({}, {'_ids':0})
for x in list:
 print(x)

test.delete_many({})
cnt = test.count_documents({})
print(cnt)
if(cnt == 0):
    print("null")
else:
    list = test.find({}, {'_ids':0})
    for x in list:  
        print(x)
