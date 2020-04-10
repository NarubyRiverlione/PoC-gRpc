# specify the node base image with your desired version node:<version>
FROM node:alpine

# Create app directory
WORKDIR /usr/src/gRpc

# Bundle app source
COPY *.js ./
COPY ./protoc/Subber.proto protoc/

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# replace this with your application's default port
EXPOSE 9090

# run cmd
CMD [ "node", "server.js" ]