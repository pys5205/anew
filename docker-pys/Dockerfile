# Step 1
FROM node:16

# Step 2
WORKDIR /usr/src/app

# Step 3
RUN git clone https://github.com/pys5205/docker-pys
WORKDIR docker-pys

# ADD docker-pys.tar.gz /usr/src/app/docker-pys.tar.gz
# WORKDIR /usr/src/app/docker-pys

# CMD ["npm", "install"]
RUN npm install

# Step 4

# Step 
EXPOSE 8000

# Step 
#ENTRYPOINT ["/usr/src/app/docker-pys"]
CMD ["node", "app.js"]
