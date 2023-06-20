import os
import sys
 
import psutil
from time import sleep
from pymongo import MongoClient
import time

client = MongoClient("mongodb://43.200.152.117:27017/")

db = client['linux']
test = db['tests']
# test.delete_many({})

while 1:
 today = time.strftime('%y/%m/%d %H:%M:%S')
 
 #DISK 정보
 partitions = psutil.disk_partitions(all=False)
 for p in partitions:
 # print(p.mountpoint, p.fstype, end=' ')
  try:
   du = psutil.disk_usage(p.mountpoint)
  # print(f'{du.percent}%')
   if (p.mountpoint == '/')or(p.mountpoint == '/data')or(p.mountpoint == '/boot/efi'):
    info = {"type":'disk', "mountpoint":p.mountpoint, "fstype":p.fstype,"total":(du.total),"used":(du.used),"free":(du.free), "percent":du.percent, "time":today}
    x1 = test.insert_one(info)
    print(x1.inserted_id)
  except:
   pass
 
 #net i/o count
 
 #process 정보
 net = {}
 conns = psutil.net_connections()
 for con in conns:
  if con.status == 'ESTABLISHED':
   net.setdefault(con.pid, con.raddr)
 
 procs = psutil.process_iter(['pid', 'name', 'username'])
 for p in procs:
  if p.pid in net.keys():
   # print(f'pid: {p.pid} | name: {p.name()} | ip: {net[p.pid].ip} | port: {net[p.pid].port}')
   info = {"username":p.username(), "type":'process', "pid":p.pid, "name":p.name(), "ip":net[p.pid].ip, "port": net[p.pid].port, "time":today}
   x1 = test.insert_one(info)
   print(x1.inserted_id)

 time.sleep(5)
