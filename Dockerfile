FROM node

RUN apt-get update && apt-get install -y curl \
  git \
  htop \
  nano \
  unzip \
  wget 


# Adds files from the host file system into the Docker container.  
ADD . /project
WORKDIR /project

RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

#expose a port to allow external access
EXPOSE 3000

CMD ["./bin/www"]



