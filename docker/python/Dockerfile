#Step 1 : base image
FROM python

#Step 2: Package install
RUN apt -y update && apt -y upgrade && apt -y install git net-tools vim

#step 3: Specify a working directory
WORKDIR '/root'

#Step4: Config file copy
COPY ./.bashrc .
COPY ./.exrc .
