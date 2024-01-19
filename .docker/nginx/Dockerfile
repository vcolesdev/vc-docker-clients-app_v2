FROM nginx:1.25-alpine as clientsapp-nginx-server

# Copy the configuration file
COPY ./etc/nginx.conf /etc/nginx/nginx.conf

# Copy configuration files
COPY ./etc/conf.d/*.conf /etc/nginx/conf.d/
COPY ./etc/snippets/*.conf /etc/nginx/snippets/

# Update and upgrade installed packages
RUN apk update && apk upgrade

# Install useful tools
RUN apk add --no-cache \
    bash \
    curl \
    git \
    nano \
    vim \
    wget

EXPOSE 8080
EXPOSE 8443

# Set the default command to run when starting the container
CMD ["nginx", "-g", "daemon off;"]