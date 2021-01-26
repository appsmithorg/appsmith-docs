# Docker

Appsmith can be deployed locally or on your private instance using docker. To simplify installation, Appsmith comes with an installation script that will download all of the necessary dependencies and help you configure Appsmith.

**Supported Operating Systems**

* macOS
* Ubuntu
* OpenSuse
* Debian
* CentOS

{% hint style="warning" %}
For Mac, [Docker Desktop](https://docs.docker.com/docker-for-mac/install/) is required. For other operating systems, Docker will be installed automatically by the script.
{% endhint %}

{% hint style="info" %}
Appsmith does not officially support Windows \(or WSL\). Please try out one of our [pre-built images](../) if your production operating system is not on the list above.
{% endhint %}

1. Fetch the **install.sh** script on the system you want to deploy Appsmith

```bash
# Downloads install.sh
curl -O https://raw.githubusercontent.com/appsmithorg/appsmith/master/deploy/install.sh
```

2. Make the script executable

```bash
chmod +x install.sh
```

3. Run the script. **Do not run as sudo & make sure no other processes are running on ports 80 & 443**.

```bash
./install.sh
```

4. Check if all the containers are running correctly.

```bash
docker ps

#Output should look like this
CONTAINER ID        IMAGE                             COMMAND                  CREATED             STATUS              PORTS                                      NAMES
3b8f2c9638d0        appsmith/appsmith-editor          "/bin/sh -c 'while :…"   17 minutes ago      Up 17 minutes       0.0.0.0:80->80/tcp, 0.0.0.0:443->443/tcp   appsmith_nginx_1
f5a365aada1c        appsmith/appsmith-server:latest   "/bin/sh -c /entrypo…"   17 minutes ago      Up 17 minutes       0.0.0.0:8080->8080/tcp                     appsmith_appsmith-internal-server_1
84b15adf470a        mongo                             "docker-entrypoint.s…"   17 minutes ago      Up 17 minutes       0.0.0.0:27017->27017/tcp                   appsmith_mongo_1
09b42d5b0f1a        redis                             "docker-entrypoint.s…"   17 minutes ago      Up 17 minutes       0.0.0.0:6379->6379/tcp                     appsmith_redis_1
90833ba6d75a        certbot/certbot                   "/bin/sh -c 'trap ex…"   17 minutes ago      Up 17 minutes       80/tcp, 443/tcp                            appsmith_certbot_1
```

## Common Issues

{% hint style="success" %}
### Unable to access appsmith installation

* Ensure your security groups are configured to allow traffic to ports 80 & 443 on your installation instance. 
* You can access the running application on [**http://localhost**](http://localhost) in any browser or the **public IP** of your machine.
* You may need to wait 2 - 3 minutes before accessing the application to allow nginx to start.
{% endhint %}

{% hint style="warning" %}
### Mongo Container crashing on Mac / Windows

\(Windows & OS X\): The default Docker setup on Windows and OS X uses a VirtualBox VM to host the Docker daemon. Unfortunately, the mechanism VirtualBox uses to share folders between the host system and the Docker container is not compatible with the memory mapped files used by MongoDB. This means that it is not possible to run a MongoDB container with the data directory mapped to the host.

The fix is to keep the /data/db mounted directory out of mounted volumes \(like downloads, user etc.\) or to create a volume with docker volume create.

**Reference:** [https://iainhunter.wordpress.com/2016/01/12/avoiding-pitfalls-running-mongo-3-2-in-docker-on-osx/](https://iainhunter.wordpress.com/2016/01/12/avoiding-pitfalls-running-mongo-3-2-in-docker-on-osx/)
{% endhint %}

{% hint style="success" %}
### Running appsmith on a different port

1. Comment out the line: [https://github.com/appsmithorg/appsmith/blob/release/deploy/install.sh\#L463](https://github.com/appsmithorg/appsmith/blob/release/deploy/install.sh#L463) from the install.sh script and run it. This will ensure that the script does not check for port availability of 80/443.
2. Once the docker-compose file is installed, the script will try to start the containers and fail because of port conflicts.
3. In the file `docker-compose.yml` , change the ports for the nginx container to a custom port
4. Run `docker-compose up -d`
{% endhint %}

## Updating to the latest release

Appsmith Installations can be updated by running the following command in the installation directory

```text
#!/bin/sh
sudo su
docker-compose pull && docker-compose rm -fsv appsmith-internal-server nginx && docker-compose up -d
```

## Disable Signup

To disable users from signing up on your self hosted instance, set the below env variable in your docker.env file

```text
APPSMITH_SIGNUP_DISABLED=true
```

Restart docker and Nginx using the following command

```text
sudo docker-compose rm -fsv appsmith-internal-server nginx && sudo docker-compose up -d
```

This will disable allowing users to signup on your appsmith instance. Users can only signup if they are invited by an organization administrator.

## Enabling Services for Self Hosting

Appsmith ships with third-party services that improve the app building experience. All third party services are entirely optional.

{% hint style="success" %}
All third party services are enabled by default in our [cloud-hosted](https://appsmith.com) version.
{% endhint %}

Our self-hosted version allows you to configure your own keys to enable third party services such as Google OAuth. To enable a service, simply open the folder of your Appsmith installation and edit the **docker.env** file.

Each service requires a specific key or configuration to be enabled. Configure the service of your choice using the following guides

* [Email](email/)
* [Google OAuth](google-login.md)
* [Github OAuth](github-login.md)
* [Google Maps](google-maps.md)

You may need root access to modify the docker.env file.

Restart docker and Nginx using the following command

```text
sudo docker-compose rm -fsv appsmith-internal-server nginx && sudo docker-compose up -d
```

{% page-ref page="../../tutorial-1/" %}

