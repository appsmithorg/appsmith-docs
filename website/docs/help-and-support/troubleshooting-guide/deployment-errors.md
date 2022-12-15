---
sidebar_position: 3
---
# Deployment Errors

## Ports unavailable

If you encounter the error that ```ports 80 & 443``` aren't open, its is recommended that you stop all processes on these ports and start again. If the processes on these ports cannot be stopped, you can run appsmith on another port.

1.  In the file `docker-compose.yml`, change the ports for the [Nginx](https://www.nginx.com) container to a custom port as shown in the below example.

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

:::tip
To stop a previous version of appsmith running on these ports, run the following:

* ```sudo su```
* ```docker container kill $(docker ps -q)```
:::

## Containers Failed to Start

If you chose to initialize a new database and are seeing this error, it could be due to an error while fetching dependencies during installation. Deleting the current installation direction, killing the docker containers, and restarting the installation should work. If it doesn't, please reach out to us on [discord](https://discord.com/invite/rBTTVJp)

If you are trying to connect to an existing [MongoDB](../../reference/datasources/querying-mongodb/) and the containers failed to start it may be due to one of the following reasons:

1. Incorrect [MongoDB](../../reference/datasources/querying-mongodb/) credentials
2. Empty Salt / Password for encryption

Restart the installation process with valid values.

## Unable to access Appsmith

* Ensure your security groups are configured to allow traffic to ports 80 & 443 on your installation instance.
* You can access the running application on[ localhost](http://localhost) in any browser or the `public IP` of your machine.
* You may need to wait for a few minutes before accessing the application to allow [Nginx](https://www.nginx.com) to start.

## OAuth sign up not working

If your deployment is behind an ELB / Proxy, you must update the [Nginx](https://www.nginx.com) configuration of the deployment. In the file `data/nginx/nginx.app.conf.template` modify the line:

```
proxy_set_header X-Forwarded-Proto $scheme;
```

with

```
proxy_set_header X-Forwarded-Proto $http_x_forwarded_proto;
```

This ensures that the redirect URLs are correct during [OAuth2](../../core-concepts/connecting-to-data-sources/authentication/authentication-type/oauth2-authentication/) logins. This works even if the ELB is configured to run on a custom port.

## Server not booting because of MongoCommandException

In release `v1.6.4`, we upgraded our libraries & [Spring framework](https://spring.io/projects/spring-framework). This caused a compatibility issue between the libraries used within Appsmith and the version of [MongoDB](../../reference/datasources/querying-mongodb/) that was shipped earlier. This didn't show up in our testing because all our testing happened against [MongoDB](../../reference/datasources/querying-mongodb/) clusters with replica sets, where the problem doesn't surface. We apologize for this breaking experience.

If you see an error like the below, your instance is affected by the library upgrade we performed in `v1.6.4`.

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

Change it to the following (notice the only change is `&authSource=admin`. Please don't paste this whole line. Only add the `&authSource=admin` part to your current value.

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


## Email errors

If you are using Docker and are having trouble with invitation emails not being sent, even though the Admin email setup is able to send test emails, it may be due to an issue with the configuration of the Docker container.

If you aren't receiving the invitation email, please check the value for ```APPSMITH_REPLY_TO``` in your **docker.env file**. If this value is empty, please set it to the same email address that you are using for ```APPSMITH_MAIL_FROM``` and **restart the application**.

This should resolve the issue with not receiving the invitation email. Additionally, it may be helpful to verify that the email server being used is working correctly and that there are no issues with the network or other components that could be preventing the emails from being sent.

However, if you encounter any issues, you can contact the support team on [ Discord](https://discord.com/invite/rBTTVJp) or ask questions on the [community forum](https://community.appsmith.com).