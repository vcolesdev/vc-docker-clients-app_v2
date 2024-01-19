#!/bin/bash

echo "Hello from Docker rebuild script! 🐳 Shutting down containers..."

docker compose down -v --remove-orphans
docker system prune -f
docker compose up --build

echo "Done rebuilding containers! 🐳"