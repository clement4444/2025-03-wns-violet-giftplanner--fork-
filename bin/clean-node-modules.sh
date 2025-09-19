#!/bin/bash
cd ..
ROOT_DIR=$(pwd)

if [ -d "node_modules" ]; then
#   rm -r node_modules
  echo "Dossier node_modules supprimé"
else
  echo "Pas de dossier node_modules"
fi