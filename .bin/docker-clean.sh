#!/bin/bash

echo "Hello from Docker cleanup script! 🐳 Shutting down containers..."

docker compose down -v --remove-orphans
docker system prune -f

echo "Done! 🐳"