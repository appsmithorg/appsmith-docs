#!/bin/bash

# Check if docker and docker-compose is installed
is_docker_installed=$(which docker)
is_docker_compose_installed=$(which docker-compose)

if [ -z "$is_docker_installed" ];
then
    echo "Docker is not installed on this machine. Initiating Docker installation"
    ./docker-install.sh
    exit 1
fi

if [ -z "$is_docker_compose_installed" ];
then
    echo "Docker Compose is not installed on this machine. Initiating docker compose installation"
    ./docker-install.sh
    exit 1
fi

# Ask for input directory name
read -p "Please input the installation directory: " install_dir

if [ -z "$install_dir" ];
then
    echo "Value for installation directory is empty. Please input a valid value."
    exit 1
fi

mkdir -p $install_dir

# Create the deploy directories as required for mounting on Docker containers
mkdir -p $install_dir/data/appsmith-server/config \
$install_dir/data/nginx \
$install_dir/data/certbot/conf \
$install_dir/data/certbot/www \
$install_dir/data/mongo/db \
$install_dir/data/opa/config

# Download the docker-compose file from protected location
cp docker-compose.yml $install_dir/docker-compose.yml

# Download init-letsencrypt.sh file
cp init-letsencrypt.sh $install_dir/init-letsencrypt.sh
cp application-default.properties $install_dir/data/appsmith-server/config/application-default.properties
cp nginx-app.conf $install_dir/data/nginx/app.conf
cp mongo-init.js $install_dir/data/mongo/init.js

# 4. Download config.yml for OPA
cp opa-config.yml $install_dir/data/opa/config/config.yml

# Ask for DB credentials
echo "Going to create database"
read -p "Please input database root username: " mongo_root_user
read -p "Please input database root password: " mongo_root_pass
if [ -z "$mongo_root_user" ] || [ -z "$mongo_root_pass"]; then
    echo "Mandatory input parameters for database credentials not provided."
    exit 1
fi

# TODO: Be able to skip SSL configuration
# Ask for domain where this will be installed for SSL purposes
public_ip=$(dig +short myip.opendns.com @resolver1.opendns.com)

echo "In order to configure SSL certificates, we require a valid domain to be configured in your DNS.
This domain should point to this server's public IP address : $public_ip
For various cloud providers, please follow the link below in order to do so.
AWS: 
Microsoft Azure:
Google Cloud Platform:
DigitalOcean: 
"
read -p "To configure the SSL certificates via Letsencrypt, please input the domains: " domains

# Substitute variables in init-letsencrypt file
sed -i "s/\$domains/${domains}/g" $install_dir/init-letsencrypt.sh
sed -i "s/\$domains/${domains}/g" $install_dir/data/nginx/app.conf
sed -i "s/\$mongo_root_user/${mongo_root_user}/g" $install_dir/docker-compose.yml
sed -i "s/\$mongo_root_pass/${mongo_root_pass}/g" $install_dir/docker-compose.yml
sed -i "s/\$mongo_root_user/${mongo_root_user}/g" $install_dir/data/appsmith-server/config/application-default.properties
sed -i "s/\$mongo_root_pass/${mongo_root_pass}/g" $install_dir/data/appsmith-server/config/application-default.properties
sed -i "s/\$mongo_root_user/${mongo_root_user}/g" $install_dir/data/mongo/init.js
sed -i "s/\$mongo_root_pass/${mongo_root_pass}/g" $install_dir/data/mongo/init.js

# Start all containers via docker-compose 
sudo docker-compose up -d