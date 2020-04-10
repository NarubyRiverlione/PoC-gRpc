# SubDive
Test project for gRpc application with nodejs backend and React frontend

Fontend calls envoy proxy on port 8080, proxy calls backend server on port 9090
Envoy & server are docker containers.

# Build &run 
## server & proxy
docker-compose up -d

## frontend
cd web

npm run dev

## Building standalone docker images (for development)
### server
cd gRpc

./srv_build.sh

./srv_run.sh


### envoy
(change envoy.yaml) last line connection to server addresss : 

`address: node-server` --> `address: host.docker.internal`

cd web

./envoy_build.sh

./envoy.sh


# Documentation
## config
gRpc server address & port in /gRpc/Cst.js

## protoc files
directory: /gRpc/protoc

nodejs server & cli client creates the protoc files dynamicaly

To make protoc files manuelly (for web)

_generate-js.sh_ for messages

_generate-web.sh_ for services

## Grpc server
directory: /gRpc

base docker image: node/alpine

run: _node server.js_

development: _npm run server_ start nodemon that watches server.js & subber.js for changes


## cli client for testing server
directory: /cli

run: _node cli "station" "action" "command"_   

usage: _node cli help_

