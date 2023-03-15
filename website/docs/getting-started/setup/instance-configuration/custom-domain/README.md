---
sidebar_position: 7
---
# Set up SSL for a Custom Domain

You can configure SSL for your Custom Domain to establish secured connections. This page provides instructions to set up SSL for your Custom Domain on your Appsmith instance.

<VideoEmbed host="youtube" videoId="0llo1exi4IY" title="How To Self-Host Appsmith With A Custom Domain" caption="Set up SSL and HTTPS for your Custom Domain on your self-hosted Appsmith Instance"/>

## Prerequisites
Before configuring SSL for your custom domain, make sure you have the following:
1. A self-hosted Appsmith instance running. For more information about installing Appsmith, see [Installation Guides](/getting-started/setup/installation-guides)
2. A domain name - You can get a custom domain from popular providers like [GoDaddy](https://in.godaddy.com/help/create-a-subdomain-4080), [Amazon Route 53](https://aws.amazon.com/premiumsupport/knowledge-center/create-subdomain-route-53/), [Digital Ocean](https://www.digitalocean.com/docs/networking/dns/how-to/add-subdomain/), [NameCheap](https://www.namecheap.com/support/knowledgebase/article.aspx/9776/2237/how-to-create-a-subdomain-for-my-domain), and [Domain.com](https://www.domain.com/help/article/domain-management-how-to-update-subdomains).
3. Ports 80 and 443 are open and accessible.

## Configure SSL
Once you have a Custom Domain you can choose to set up SSL by one of the following way:

* [Generate and Configure SSL](#generate-and-configure-ssl)
* [Configure a Custom SSL Certificate](#configure-a-custom-ssl)


### Generate and configure SSL
On Appsmith you can choose to add your Custom Domain by using one of the following ways:
* [Admin settings](#admin-settings)
* [Environment Variables](#environment-variables)

### Admin settings
You can use Admin Settings User Interface to set up custom domain. The **Custom Domain** property is available under **Advanced** Settings. Add the domain name to the Custom Domain setting and click **SAVE & RESTART** button. The Custom domain setup can be done using Custom Domain setting for all your installation types except Kubernetes. For more information about how to set up TLS on Kubernetes, see [How to configure TLS for Appsmith Kubernetes installation](/getting-started/setup/installation-guides/kubernetes#configure-tls).

![](/img/setup-custom-domain-using-admin-settings.png)
<figure>
  <img src="/img/setup-custom-domain-using-admin-settings.png" style= {{width:"700px", height:"auto"}} alt="Setup your custom domain using Admin settings"/>
  <figcaption align = "center"><i>Setup your custom domain using Admin settings</i></figcaption>
</figure>

### Environment variables
Appsmith under the hood is deployed on a docker container. So, you may choose to configure your custom domain using environment variable `APPSMITH_CUSTOM_DOMAIN` in a `docker.env` file. Follow the steps below:

1. Navigate to the `docker.env` file located in the installation root folder. For example, if you are using Docker installation you can locate the file in `<PROJECT_ROOT>/stacks/configuration` file. Similarly, on AWS AMI the file is located in `/home/ubuntu/appsmith/stacks/configuration` folder.
    1. Update the key `APPSMITH_CUSTOM_DOMAIN` as shown below:

        ```yaml
        APPSMITH_CUSTOM_DOMAIN=<ADD_CUSTOM_DOMAIN_HERE>
        ```
    2. Restart the Appsmith container by using the following command:

        ```bash
        docker-compose restart appsmith
        ```

On restart Appsmith generates SSL certificate for your custom domain. Appsmith uses [Let's Encrypt](https://letsencrypt.org) to generate and keep the certificate up to date. After a successful restart, you can use the custom domain that's mapped to port 443 using HTTPS to access Appsmith in the browser.

### Configure a Custom SSL
If you already have SSL Certificate and want to use that, follow the steps listed below:

* Rename the certificate file as `fullchain.pem` and key file as `privkey.pem`.
* Copy these files into the subdirectory `<MOUNTING-DIRECTORY>/ssl/`. Ensure that you change `<MOUNTING-DIRECTORY>` by the mounting volume directory available in the `docker-compose.yml`. For example, the default value is `./stacks`.
* Add your Custom Domain to environment variable `APPSMITH_CUSTOM_DOMAIN` in 'docker.env' file.
* Restart the container using `docker restart appsmith`

The container checks the certificate files in the folder `<MOUNTING-DIRECTORY>/ssl` and use them if they exist.

:::note
If you want to configure a Custom SSL on your Appsmith installation platform, follow the steps as listed in the guides below:
* [How to Configure SSL for your Heroku dyno](https://devcenter.heroku.com/articles/ssl)
* [How do I install an SSL Certificate on a DigitalOcean Droplet](https://docs.digitalocean.com/support/how-do-i-install-an-ssl-certificate-on-a-droplet/)
:::

## Troubleshooting

If you’re having issues accessing Appsmith after Appsmith SSL Configuration, please see the [Unable to Access Appsmith](/help-and-support/troubleshooting-guide/deployment-errors#unable-to-access-appsmith) troubleshooting guide. If you continue to have problems reach out on [Discord Server](https://discord.com/invite/rBTTVJp) or [send email to support](mailto:support@appsmith.com) or ask questions on the [community forum](https://community.appsmith.com/).

## Further reading
- [Monitor system logs](/learning-and-resources/how-to-guides/how-to-get-container-logs)
- [Setup backups](/getting-started/setup/instance-management/appsmithctl#backup-appsmith-instance) 
- [Setup Maintenance Window for automatic updates](/getting-started/setup/instance-management/maintenance-window)

