build:
	docker build -t mongo .
run : 
	docker run -d -p 27017:27017 -v /Users/skypa/docker/mongo:/app -v /Users/skypa/docker/mongo:/data/db --name=mongo mongo

exec:
	docker exec -it mongo /bin/bash
logs:
	docker logs mongo
ps :
	docker ps -a
img : 
	docker images
rm :
	docker rm -f $$(docker ps -aq)
rmi :
	docker rmi  $$(docker images -q)
