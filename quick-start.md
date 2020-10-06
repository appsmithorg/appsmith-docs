---
description: Appsmith stands for speed and getting started with Appsmith is just as fast.
---

# Getting started

You can begin using appsmith via our cloud instance or by deploying appsmith yourself

* [Using Appsmith Cloud](quick-start.md#appsmith-cloud) **\(recommended\):** Create a new application with just one click
* [Using Docker](quick-start.md#docker): Deploy anywhere using docker

## Appsmith Cloud

The fastest way to get started with appsmith is using our cloud-hosted version. It's as easy as

1. [Create an Account](https://app.appsmith.com/user/signup)
2. [Start Building](core-concepts/building-the-ui/)

## Docker

Appsmith can be deployed locally or on your private instance using docker. To simplify installation, appsmith comes with an installation script that will download all of the necessary dependencies and help you configure Appsmith.

**Supported Operating Systems**

* macOS
* Ubuntu

{% hint style="warning" %}
For Mac, [Docker Desktop](https://docs.docker.com/docker-for-mac/install/) is required. For other operating systems, Docker will be installed automatically by the script.
{% endhint %}

1. Fetch the **install.sh** script on the system you want to deploy appsmith

```bash
# Downloads install.sh
curl -O https://raw.githubusercontent.com/appsmithorg/appsmith/master/deploy/install.sh
```

2. Make the script executable

```bash
chmod +x install.sh
```

3. Run the script. **Make sure no other processes are running on ports 80 & 443**.

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

{% hint style="success" %}
* Ensure your security groups are configured to allow traffic to ports 80 & 443 on your installation instance. 
* You can access the running application on [**http://localhost**](http://localhost) in any browser or the **public IP** of your machine.
* You may need to wait 2 - 3 minutes before accessing the application to allow nginx to start.
{% endhint %}

### Custom Domains

To host Appsmith on a custom domain, you can contact your domain registrar and update your DNS records. Most domain registrars have documentation on how you can do this yourself.

* [GoDaddy](https://in.godaddy.com/help/create-a-subdomain-4080)
* [Amazon Route 53](https://aws.amazon.com/premiumsupport/knowledge-center/create-subdomain-route-53/)
* [Digital Ocean](https://www.digitalocean.com/docs/networking/dns/how-to/add-subdomain/)
* [NameCheap](https://www.namecheap.com/support/knowledgebase/article.aspx/9776/2237/how-to-create-a-subdomain-for-my-domain)
* [Domain.com](https://www.domain.com/help/article/domain-management-how-to-update-subdomains)

## Troubleshooting

If at any time you encounter an error during the installation process, reach out to **support@appsmith.com** or join our [Discord Server](https://discord.com/invite/rBTTVJp)

If you know the error and would like to reinstall Appsmith, simply delete the installation folder and the templates folder and execute the script again

## Updating to the latest release

Appsmith Installations can be updated by running the following command in the installation directory

```text
#!/bin/sh
sudo su
docker-compose pull && docker-compose rm -fsv appsmith-internal-server nginx && docker-compose up -d
```

