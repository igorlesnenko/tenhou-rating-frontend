#!/usr/bin/env bash

docker login -e $DOCKER_EMAIL -p $DOCKER_PASSWORD -u $DOCKER_ID_USER
docker push $DOCKER_ID_USER/tenhou:frontend