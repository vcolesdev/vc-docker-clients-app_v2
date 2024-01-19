# Dockerfile for Express Node.js container
FROM node:21.1.0-alpine3.17 as clientsapp-nodejs-api

WORKDIR /usr/src/app

# Copy package.json
COPY package*.json ./
RUN touch package-lock.json

# Install nodejs dependencies
RUN npm install

# Copy app source code
COPY . .

# Expose ports
EXPOSE 8080
EXPOSE 8443

RUN npm run build

# Run the app
CMD ["npm", "run", "serve"]