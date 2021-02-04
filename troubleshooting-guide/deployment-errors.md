# Deployment Errors

## Ports Unavailable

![](../.gitbook/assets/ports-open.png)

If you encounter the error that port 80 & 443 are not open, we recommend that you kill all processes on these ports and start again. If the processes on these ports cannot be stopped, you can run appsmith on another port.

1. Comment out the line: [https://github.com/appsmithorg/appsmith/blob/master/deploy/install.sh\#L469](https://github.com/appsmithorg/appsmith/blob/master/deploy/install.sh#L469) from the install.sh script and run it. This will ensure that the script does not check for port availability of **80/443**.
2. Once the docker-compose file is installed, the script will try to start the containers and fail because of port conflicts.
3. In the file `docker-compose.yml` , change the ports for the Nginx container to a custom port
4. Run `docker-compose up -d`

{% hint style="success" %}
To kill a previous version of appsmith running on these ports, run the following:

* sudo su
* docker container kill $\(docker ps -q\) 
{% endhint %}

## Containers Failed to Start

![](../.gitbook/assets/container2.png)

If you chose to initialize a new database and are seeing this error, it could be due to an error while fetching dependencies during installation. Deleting the current installation direction, killing the docker containers, and restarting the installation should work in most cases. If it does not, please reach out to us on [discord](https://discord.com/invite/rBTTVJp)

If you are trying to connect to an existing MongoDB and the containers failed to start it may be due to one of the following reasons:

1. Incorrect MongoDb credentials
2. Empty Salt / Password for encryption  

Restart the installation process with valid values for the above 

## Unable to access Appsmith

* Ensure your security groups are configured to allow traffic to ports 80 & 443 on your installation instance. 
* You can access the running application on [**http://localhost**](http://localhost) in any browser or the **public IP** of your machine.
* You may need to wait 2 - 3 minutes before accessing the application to allow Nginx to start.

