# Step 1
FROM node:16

# Step 2
WORKDIR /usr/src/app

# Step 3
RUN git clone https://github.com/devheyrin/docker-heyrin
WORKDIR docker-heyrin
RUN npm install

# Step 4

# Step 
EXPOSE 8000

# Step 
CMD ["node", "app.js"]
