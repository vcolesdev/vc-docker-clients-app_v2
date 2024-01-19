# Dockerfile for the MongoDB container
# This solved ALL of our problems...
# See: https://github.com/docker-library/mongo/issues/174#issuecomment-449984230
# See: https://stackoverflow.com/questions/72305116/docker-mongodb-image-doesnt-run-scripts-in-docker-entrypoint-initdb-d-when-entr
FROM mongo:7.0.2-jammy as clientsapp-mongo

# Install container dependencies
RUN echo "[Start Emoji]: Hello from the MongoDB container! 🐳 Installing container dependencies..."
RUN apt-get update && apt-get install -y \
    curl \
    gnupg \
    wget \
    init \
    systemd -y \
    && rm -rf /var/lib/apt/lists/*
RUN echo "[End Emoji]: Finished installing container dependencies."

# Copy the configuration file
RUN echo "[Copy Emoji]: Copying the MongoDB configuration file to the container..."
COPY ./etc/mongod.conf /etc/mongod.conf
RUN chmod 644 /etc/mongod.conf
RUN echo "[End Emoji]: Finished." && ls -la /etc | grep mongod.conf

# Copy start scripts to the container
RUN echo "[Copy Emoji]: Copying init scripts to the container..."
COPY ./init.d/ /docker-entrypoint-initdb.d/
RUN chmod +x /docker-entrypoint-initdb.d/mongodb-start.sh
RUN echo "[End Emoji]: Done copying start scripts to /docker-entrypoint-initdb.d" \
  && ls -la /docker-entrypoint-initdb.d/

# Provide a default command for the entrypoint
RUN echo "[Leaf Emoji]: Starting MongoDB client..."
CMD ["--config", "/etc/mongod.conf"]