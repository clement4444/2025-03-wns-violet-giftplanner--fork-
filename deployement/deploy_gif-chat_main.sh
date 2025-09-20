#!/bin/bash
# chmod +x deploy_gif-chat_main.sh
docker compose -f compose.prod.yaml pull

docker compose -f compose.prod.yaml down

docker compose --env-file .env.serveur -f compose.prod.yaml up -d --remove-orphans