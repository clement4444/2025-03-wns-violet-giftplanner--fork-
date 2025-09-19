#!/bin/bash
echo "🚀 Reconstruction complète du projet..."

echo ""

./clean-node-modules.sh no-finish

echo ""

./install-node-modules.sh no-finish

echo ""

echo "🎉 Projet reconstruit avec succès."