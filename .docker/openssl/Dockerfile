FROM alpine/openssl:latest

ENV CERTS_DIR=/etc/ssl/certs/clientsapp.local

# Update packages
RUN apk update && apk upgrade && apk --no-cache add  \
    bash  \
    coreutils  \
    curl  \
    file  \
    g++  \
    gpg-agent \
    gpg \
    grep  \
    libc6-compat \
    make  \
    sudo

# Clear cache
RUN rm -rf /var/cache/apk/*

# Make new directory for domain certs
RUN mkdir -p ${CERTS_DIR}

# Application certs
# Use OpenSSL and automatically fill subject fields
RUN openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout ${CERTS_DIR}/clientsapp.local.key \
    -out ${CERTS_DIR}/clientsapp.local.crt \
    -subj "/C=US/ST=California/L=San Diego/O=vcolesdev/OU=vcolesdev/CN=clientsapp.local/E=webdev@vcoles.com/"

# Create a strong DH group for nginx, this will go in the etc/nginx/[name].pem
RUN sudo openssl dhparam -out ${CERTS_DIR}/clientsapp.local.pem 4096

# API certs (for Express)
# Use OpenSSL and automatically fill subject fields
RUN openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout ${CERTS_DIR}/express.key \
    -out ${CERTS_DIR}/express.crt \
    -subj "/C=US/ST=California/L=San Diego/O=vcolesdev/OU=vcolesdev/CN=api.clientsapp.local/E=webdev@vcoles.com/"

# Create a strong DH group for nginx, this will go in the etc/nginx/[name].pem
RUN sudo openssl dhparam -out ${CERTS_DIR}/express.pem 4096