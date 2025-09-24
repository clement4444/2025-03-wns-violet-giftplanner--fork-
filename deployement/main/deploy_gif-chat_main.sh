#!/bin/bash
# chmod +x deploy_gif-chat_main.sh

# Si le script crash on s'arrête
set -e

# Fonction pour logger avec timestamp
log() {
  echo "$(date '+%Y-%m-%d %H:%M:%S') $1" >> deploy_main.log
}

log "script lancé"

# Verifie existence du fichier .env.main
if [ ! -f .env.main ]; then
  log "Erreur: fichier .env.main introuvable !"
  exit 1
fi

log "pull des dernières images"
docker compose --env-file .env.main -f compose.prod.yaml pull

log "Arrêt et suppression des conteneurs existants"
docker compose --env-file .env.main -f compose.prod.yaml down

log "Démarrage des nouveaux conteneurs"
docker compose --env-file .env.main -f compose.prod.yaml up -d --remove-orphans

log "Déploiement terminé avec succès"