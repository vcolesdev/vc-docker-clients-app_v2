# Dockerfile for ReactJS Node.js container
FROM node:21.1.0-alpine3.17 as clientsapp-nodejs-app

WORKDIR /usr/src/app

ENV PORT 5173
ENV LOCAL localhost
ENV HOST clientsapp.local

# Copy package.json
COPY package*.json ./
RUN touch package-lock.json

# Install nodejs dependencies
RUN npm install

# Copy app source code
COPY . .

# Expose port 8080
EXPOSE 5173

# Run the app
RUN npm run build

CMD ["npm", "run", "dev"]