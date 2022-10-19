#!/bin/sh

# The assumption is that the container is named "appsmith". If your container is named differently, please update the container name here. 
# You can find the container name by running the command:
# sudo docker ps
#
# CONTAINER ID   IMAGE                              COMMAND                  CREATED             STATUS             PORTS                                                                                                                 NAMES
# a6b6d49ad0da   appsmith/appsmith-ce:latest        "/opt/appsmith/entry…"   34 minutes ago      Up 34 minutes      0.0.0.0:80->80/tcp, :::80->80/tcp, 0.0.0.0:443->443/tcp, :::443->443/tcp, 0.0.0.0:9001->9001/tcp, :::9001->9001/tcp   appsmith
#
# The last column contains the name
container_name="appsmith"
echo "Correcting the mongo supervisor configuration"
sudo docker exec -it $container_name cp /opt/appsmith/templates/supervisord/mongodb.conf /etc/supervisor/conf.d/mongodb.conf
echo "Updating supervisor configurations"
sudo docker exec -it $container_name supervisorctl reread 
sudo docker exec -it $container_name supervisorctl update
echo "Restarting the backend server"
sudo docker exec -it $container_name supervisorctl restart backend
echo "Sleep for 30s to ensure that the backend service starts successfully"
sleep 30
echo "Restarting the editor server"
sudo docker exec -it $container_name supervisorctl restart editor
