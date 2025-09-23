#!/bin/bash
# chmod +x deploy_gif-chat_main.sh
echo "Script lancé le $(date '+%Y-%m-%d %H:%M:%S')" >> deploy_log.txt

docker compose --env-file .env.staging -f compose.stag.yaml pull

docker compose --env-file .env.staging -f compose.stag.yaml down

docker compose --env-file .env.staging -f compose.stag.yaml up -d --remove-orphans