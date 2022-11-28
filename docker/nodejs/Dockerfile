#Step 1 : base image
FROM node:14.16.1

#Step 2: Package install
RUN apt -y update && apt -y upgrade && apt -y install git net-tools vim

#step 3: Specify a working directory
WORKDIR '/root'

#Step4: Config file copy
COPY ./.bashrc .
COPY ./.exrc .
