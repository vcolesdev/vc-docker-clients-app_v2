#!/bin/bash
set -e

# Welcome message
echo "[Wave Emoji]: Hello from the MongoDB container startup script!"

# List the files in the /data/db directory
echo "[List Emoji]: Listing the files in the /data/db directory..."
cd /data/db && ls -la

