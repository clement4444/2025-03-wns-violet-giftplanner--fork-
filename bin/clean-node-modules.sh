#!/bin/bash
ROOT_DIR=$(pwd)

echo "🧹 Suppression de tous les node_modules..."

if [ -d "node_modules" ]; then
  rm -rf node_modules
  echo "    - ✅ Dossier node_modules de la racine supprimé"
else
  echo "    - ⚠️  Pas de dossier de la racine node_modules"
fi

cd "$ROOT_DIR/frontend"

if [ -d "node_modules" ]; then
  rm -rf node_modules
  echo "    - ✅ Dossier node_modules du frontend supprimé"
else
  echo "    - ⚠️  Pas de dossier node_modules dans frontend"
fi

cd "$ROOT_DIR/backend"
if [ -d "node_modules" ]; then
  rm -rf node_modules
  echo "    - ✅ Dossier node_modules du backend supprimé"
else
  echo "    - ⚠️  Pas de dossier node_modules dans backend"
fi

if [ "$1" != "no-finish" ]; then
  echo "🎉 Tous les dossiers node_modules ont été supprimés avec succès."
fi