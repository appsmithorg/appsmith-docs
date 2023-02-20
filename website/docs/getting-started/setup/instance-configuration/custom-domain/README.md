---
sidebar_position: 7
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SSL & Custom Domain

You can make Appsmith available on a custom domain by updating your domain's DNS records to point to the instance running Appsmith. 

<VideoEmbed host="youtube" videoId="0llo1exi4IY" title="How To Self-Host Appsmith With A Custom Domain" caption="How To Self-Host Appsmith With A Custom Domain"/>



## Setup SSL
Once you've configured a custom domain for your instance, SSL will be set up automatically. All SSL certificates Appsmith creates are generated and kept up to date through [Let's Encrypt](https://letsencrypt.org).


## Custom SSL certificate

The container supports generating a free SSL certificate. If you have your own certificate, please follow these steps to use it inside the container.

* Firstly, please rename your certificate file as `fullchain.pem` and key file as `privkey.pem`
* Copy these files into the sub-directory `<mounting-directory>/ssl/` (_Note: Please change `<mounting-directory>` by the mounting volume directory in the `docker-compose.yml`. Default is `./stacks`_)
* Restart the container using `docker restart appsmith`

The container checks the certificate files in the folder `<mounting-directory>/ssl` and use them if they exist.

:::note
In case the certificate files have a different name from `fullchain.pem` and `privkey.pem`, it will fail to find the  custom certificate and auto-provisions the certificate by `Let's Encrypt`
:::


<Tabs>
  <TabItem value="Docker" label="Docker" default>

Obtaining HTTPS support after setting up your custom domain is a simple process. 

1). Configure the `APPSMITH_CUSTOM_DOMAIN field` in your [instance configuration](../) with your custom domain

```bash
# Example Docker Configuration
APPSMITH_CUSTOM_DOMAIN=appsmith.mydomain.com
```

2). Restart Docker containers
```bash
docker-compose up -d 
```


:::info
Please ensure port 80 on your server is open and accessible from the Internet for the HTTPS certificate to be provisioned.
:::

  </TabItem>
  <TabItem value="Kubernetes" label="Kubernetes">


The `APPSMITH_CUSTOM_DOMAIN` environment variable is **not** used for configuring TLS for a Kubernetes installation of Appsmith. For more information, see [how to configure TLS for Appsmith Kubernetes installation](/getting-started/setup/installation-guides/kubernetes#configure-tls).

  </TabItem>
  <TabItem value="AWS" label="AWS AMI">
 Here are the steps to change the custom domain for your Appsmith instance:


* Once your instance is ready, connect to it via SSH using your key pair (created in step 2) and the public IP address of your instance (created in step 4). You can use the terminal or any SSH client you prefer.

* Navigate to the `/home/ubuntu/appsmith/stacks/configuration` folder.

*   Edit the `docker.env` file here and change the value of `APPSMITH_CUSTOM_DOMAIN` variable to your custom domain. For example:

    ```
    APPSMITH_CUSTOM_DOMAIN=appsmith.mydomain.com
    ```
* Restart your instance by running docker-compose restart appsmith. This will automatically provision the SSL certificate before starting the server.


You should now be able to access your cloud server by entering your custom domain directly into your browser's address bar with HTTPS.

:::info
Please ensure port 80 on your server is open and accessible from the Internet for the HTTPS certificate to be provisioned.
:::

  </TabItem>
  <TabItem value="Heroku" label="Heroku">
 


1. Go to the **Settings** tab in your Heroku app
2. Click the `Add domain` button in the `Domains` section
3. Input your domain name & click `Next`. Heroku provides you with a DNS target that you can map your domain with.
4. Go to your DNS provider and make sure that your custom DNS Record (Ex. **appsmith.yourcompany.com**) is updated to map to the `DNS Target`

```
//For example,
Change the CNAME records of your domain like this:
Host: www
Points to: "Paste the DNS Value"
TTL: 1 hour
```
Once you finish, now you can access Appsmith from your custom domain.

:::note
* Once you use a custom domain, You might want to set up SSL for your dyno. Please check the official document of Heroku [how to configure SSL](https://devcenter.heroku.com/articles/ssl)
* The dyno needs to be upgraded to at least "**Hobby"** type to use this feature of Heroku
:::
  </TabItem>
   <TabItem value="DigitalOcean" label="DigitalOcean">


## DigitalOcean
Here are the steps to connect a custom domain in Digital Ocean:


* To host the Appsmith DigitalOcean droplet on a custom domain, you'll need to select the **Add a domain** option from the dashboard.

![](/img/custom\_domain.jpeg)

* Enter your domain into the Enter domain field, then click **Add Domain.** 
* Once the domain is created, click its name to view and modify its DNS records.

* You can add records in the Create a new record section. The DNS records section lists any existing records for the domain, and you can modify or delete records from the record’s More menu.

* Copy the details of the NS (name servers) and configure them on your domain provider as custom name servers.

Sometimes, it might take up to 24 or 48 hours for this to go live.

:::tip
Your Appsmith instance should be available at [https://appsmith.mydomain.com](https://appsmith.mydomain.com) with automatic certificate provisioning and renewals.
:::

  </TabItem>
</Tabs>

 


## Troubleshooting

In case you encounter any issues while connecting your custom domain or enabling SSL, you can refer to the troubleshooting guide on [debugging deployment errors](/help-and-support/troubleshooting-guide/deployment-errors) or send an email to [support@appsmith.com](mailto:support@appsmith.com) or join the Appsmith [Discord Server](https://discord.com/invite/rBTTVJp) to speak to the Appsmith team directly.

## Further reading

* [Configuring Self Hosted Instances](/getting-started/setup/instance-configuration/#configuring-docker-installations)
* [Managing the Appsmith instance](/getting-started/setup/instance-management/)
* [Tutorials](/learning-and-resources/tutorials/)

  


