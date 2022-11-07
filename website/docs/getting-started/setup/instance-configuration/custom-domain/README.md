---
sidebar_position: 7
---
# SSL & Custom Domain

You can easily make Appsmith available on a custom domain by updating your domain's DNS records to point to the instance running Appsmith. Most domain registrars / DNS providers have documentation on how you can do this yourself.

* [GoDaddy](https://in.godaddy.com/help/create-a-subdomain-4080)
* [Amazon Route 53](https://aws.amazon.com/premiumsupport/knowledge-center/create-subdomain-route-53/)
* [Digital Ocean](https://www.digitalocean.com/docs/networking/dns/how-to/add-subdomain/)
* [NameCheap](https://www.namecheap.com/support/knowledgebase/article.aspx/9776/2237/how-to-create-a-subdomain-for-my-domain)
* [Domain.com](https://www.domain.com/help/article/domain-management-how-to-update-subdomains)

<YoutubeEmbed videoId="0llo1exi4IY" title="How To Self-Host Appsmith With A Custom Domain" caption="How To Self-Host Appsmith With A Custom Domain"/>

## Setting up SSL

SSL will automatically set up for your instance once you configure a custom domain for your instance. All SSL certificates Appsmith creates are generated and kept up to date through [Let's Encrypt](https://letsencrypt.org).

## Custom SSL Certificate

In our container, we support to generate a free SSL certificate If you have your owned certificate, please follow these steps to use it inside the container.

* Firstly, please rename your certificate file as `fullchain.pem` and key file as `privkey.pem`
* Copy these files into the sub-directory `<mounting-directory>/ssl/` (_Note: Please change `<mounting-directory>` by the mounting volume directory in the `docker-compose.yml`. Default is `./stacks`_)
* Restart the container using `docker restart appsmith`

The container will check the certificate files in the folder `<mounting-directory>/ssl` and use them if they exist.

:::note
_In case the certificate files have a different name from `fullchain.pem` and `privkey.pem`, it will be considered as missing custom certificate and auto-provisioning the certificate by Let's Encrypt_
:::

## Docker/K8s

After configuring your custom domain as above, getting HTTPS support is super easy. Just tell Appsmith about the custom domain and you are on.

Configure the `APPSMITH_CUSTOM_DOMAIN field` in your [instance configuration](../) with your custom domain

```bash
# Example Docker Configuration
APPSMITH_CUSTOM_DOMAIN=appsmith.mydomain.com
```

[Restart the appsmith container](../).

:::info
Please ensure port 80 on your server is open and accessible from the Internet for the HTTPS certificate to be provisioned.
:::

## AWS AMI

* Once your instance is ready, connect to that instance (via SSH) using your key pair (Create in step 2) and the public IP of your instance (Created in step 4) via the terminal or any SSH Client that you have
* Move to `/home/ubuntu/appsmith/stacks/configuration` folder
*   Edit the `docker.env` file here and change the value of `APPSMITH_CUSTOM_DOMAIN` variable to your custom domain. For example:

    ```
    APPSMITH_CUSTOM_DOMAIN=appsmith.mydomain.com
    ```
* Now restart your instance using `docker-compose restart appsmith`. This will provision the SSL certificate automatically before starting the server.

At this point, you should be able to browse to the cloud server by entering your custom domain directly into your browser's address bar with HTTPS.

:::info
Please ensure port 80 on your server is open and accessible from the Internet for the HTTPS certificate to be provisioned.
:::

## Heroku

1. Go to the **Settings** tab in your Heroku app
2. Click the `Add domain` button in the `Domains` section
3. Input your domain name & click `Next`. Heroku will provide you with a DNS target that you can map your domain with.
4. Go to your DNS provider and make sure that your custom DNS Record (Ex. **appsmith.yourcompany.com**) is updated to map to the `DNS Target`

:::note
* Once you use a custom domain, You might want to set up SSL for your dyno. Please check the official document of Heroku [how to configure SSL](https://devcenter.heroku.com/articles/ssl)
* Your dyno will need to be upgraded to at least "**Hobby"** type to use this feature of Heroku
:::

## DigitalOcean

To host the Appsmith DigitalOcean droplet on a custom domain, you'll need to select the Add a domain option from the dashboard.

![](/img/custom\_domain.jpeg)

It redirects you to a new page. Add your domain name there. Once that's done, it'll give you records of the name servers. Copy the details of the NS (name servers). Use the custom name server's configuration on your domain provider. Sometimes, it might take up to 24-48 hours for this to go live!

:::tip
Your Appsmith instance should be available at [https://appsmith.mydomain.com](https://appsmith.mydomain.com) with automatic certificate provisioning and renewals.
:::
