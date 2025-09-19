#!/bin/bash
cd ..
ROOT_DIR=$(pwd)

if [ -d "$ROOT_DIR/frontend" ] && [ -d "$ROOT_DIR/backend" ]; then
    echo "📦 Installation des dépendances du projet..."

    if [ -f "package.json" ]; then
        npm install --silent
        echo "    - ✅ Dépendances de la racine installées"
    else
        echo "    - ⚠️  Aucun package.json trouvé la racine"
    fi

    cd "$ROOT_DIR/frontend"
    if [ -f "package.json" ]; then
        npm install --silent
        echo "    - ✅ Dépendances du frontend installées"
    else
        echo "    - ⚠️  Aucun package.json trouvé dans le frontend"
    fi

    cd "$ROOT_DIR/backend"
    if [ -f "package.json" ]; then
        npm install --silent
        echo "    - ✅ Dépendances du backend installées"
    else
        echo "    - ⚠️  Aucun package.json trouvé dans le backend"
    fi

    if [ "$1" != "no-finish" ]; then
        echo "🎉 Toutes les dépendances du projet ont été installées avec succès."
    fi
else
    echo "📦❌ Vous ne pouvez pas installer les dépendances car vous n'êtes pas un projet fullstack (frontend et backend)."
fi