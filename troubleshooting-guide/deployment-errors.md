# Deployment Errors

## Ports Unavailable

If you encounter the error that ports 80 & 443 are not open, we recommend that you kill all processes on these ports and start again. If the processes on these ports cannot be stopped, you can run appsmith on another port.

1.  In the file `docker-compose.yml`, change the ports for the Nginx container to a custom port as show in below example.

    ```
        ports:
          - "80:80"
          - "443:443"
          - "9001:9001"
    ```

    Change to

    ```
        ports:
          - "8080:80"
          - "8443:443"
          - "9801:9001"
    ```
2. Run `docker-compose up -d`

{% hint style="success" %}
To kill a previous version of appsmith running on these ports, run the following:

* sudo su
* docker container kill $(docker ps -q)
{% endhint %}

## Containers Failed to Start

If you chose to initialize a new database and are seeing this error, it could be due to an error while fetching dependencies during installation. Deleting the current installation direction, killing the docker containers, and restarting the installation should work in most cases. If it does not, please reach out to us on [discord](https://discord.com/invite/rBTTVJp)

If you are trying to connect to an existing MongoDB and the containers failed to start it may be due to one of the following reasons:

1. Incorrect MongoDB credentials
2. Empty Salt / Password for encryption

Restart the installation process with valid values for the above

## Unable to access Appsmith

* Ensure your security groups are configured to allow traffic to ports 80 & 443 on your installation instance.
* You can access the running application on [**http://localhost**](http://localhost) in any browser or the **public IP** of your machine.
* You may need to wait 2 - 3 minutes before accessing the application to allow Nginx to start.

## OAuth Sign Up not working

If your deployment is behind an ELB / Proxy, you must update the nginx configuration of the deployment. In the file\*\*`data/nginx/nginx.app.conf.template`\*\* modify the line:

```
proxy_set_header X-Forwarded-Proto $scheme;
```

with

```
proxy_set_header X-Forwarded-Proto $http_x_forwarded_proto;
```

This will ensure that the redirect URLs are correct during OAuth2 logins. This works even if the ELB is configured to run on a custom port.

## Server not booting because of MongoCommandException

In release `v1.6.4`, we upgraded our libraries & Spring framework. This caused a compatibility issue between the libraries used within Appsmith and the version of MongoDB that was shipped earlier. This didn't show up in our testing because all our testing happened against MongoDB clusters with replica sets, where the problem doesn't surface. We apologize for this breaking experience.

If you see an error like below, your instance is affected by the library upgrade we performed in `v1.6.4`.

```
Caused by: com.mongodb.MongoCommandException: Command failed with error 17 (ProtocolError): 'Attempt to switch database target during SASL authentication.' on server mongo:27017. The full response is {"ok": 0.0, "errmsg": "Attempt to switch database target during SASL authentication.", "code": 17, "codeName": "ProtocolError"}
```

Please follow the steps mentioned below to fix your Appsmith installation.

#### Step 1: Edit MongoDB URI

Adding `&authSource=admin` to the end of your `APPSMITH_MONGODB_URI` variable’s value in your `docker.env` file. For example, in your `docker.env` file, if you have the following line:

```bash
# Old config
APPSMITH_MONGODB_URI=mongodb://<your_username>:<your_password>@mongo/appsmith?retryWrites=true
```

Change it to the following (notice the only change is `&authSource=admin`. Do NOT copy-paste this whole line. Only add the `&authSource=admin` part to your existing value.

```bash
# New config
APPSMITH_MONGODB_URI=mongodb://<your_username>:<your_password>@mongo/appsmith?retryWrites=true&authSource=admin
```

Save the file.

#### Step 2: Restart server

Now restart your container with the following command:

```bash
sudo docker-compose up -d --force-recreate appsmith-internal-server
```

In a minute or two, the server should now come up and be ready.
