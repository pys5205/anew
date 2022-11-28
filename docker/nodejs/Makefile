build:
	docker build -t node .
run:
	docker run -d -it --name node -p 3000:3000 -v /Users/skypa/docker/nodejs:/app node
exec:
	docker exec -it node /bin/bash
logs:
	docker logs node
ps:
	docker ps -a
img:	
	docker images
rm:
	docker rm -f $$(docker ps -aq)
rmi:
	docker rmi -f $$(docker images -q)

