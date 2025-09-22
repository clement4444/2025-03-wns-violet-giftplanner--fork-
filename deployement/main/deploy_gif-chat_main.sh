#!/bin/bash
# chmod +x deploy_gif-chat_main.sh
echo "Script lancé le $(date '+%Y-%m-%d %H:%M:%S')" >> deploy_log.txt

docker compose -f compose.prod.yaml pull

docker compose -f compose.prod.yaml down

docker compose --env-file .env.main -f compose.prod.yaml up -d --remove-orphans