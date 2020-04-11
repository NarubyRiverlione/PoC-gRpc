# stop prev containers
docker-compose stop
# remove prev container
docker-compose rm

# build node-server & envoy proxy containers and run them
docker-compose up -d --build

docker ps