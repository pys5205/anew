import psutil

net = {}
conns = psutil.net_connections()
for con in conns:
 if con.status == 'ESTABLISHED':
  net.setdefault(con.pid, con.raddr)

procs = psutil.process_iter(['pid', 'name', 'username'])
for p in procs:
 if p.pid in net.keys():
  print(f'pid: {p.pid} | name: {p.name()} | ip: {net[p.pid].ip} | port: {net[p.pid].port}')
