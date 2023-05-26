---
description: >-
  DigitalOcean is a cloud computing vendor that offers an Infrastructure as a
  Service (IaaS) platform for software developers.
sidebar_position: 6
---

# DigitalOcean

<VideoEmbed host="youtube" videoId="6fitHGX2G4E" /> 



You can deploy Appsmith on DigitalOcean using the Appsmith droplet from Digital Ocean’s 1-Click Apps Marketplace and host it on your custom domain.

Login to your DigitalOcean account to get started. If you are a new user, use this [link](https://marketplace.digitalocean.com/apps/appsmith?refcode=469c9f1431e4) and get a $25 credit on DigitalOcean.

## Deploying Appsmith on DigitalOcean

Once logged in, follow the steps listed below:

* Find Appsmith from the DigitalOcean marketplace [here](https://marketplace.digitalocean.com/apps/appsmith).
* Click the Create Appsmith Droplet button; that redirects you to a new page where you can set up all your configurations.

![](/img/appsmith\_droplet.gif)

For a base configuration, use the following settings.

```bash
Shared CPU: Basic
CPU Options: Regular Intel with SSD (1 GB CPU / 25GB SSD / 1000GB Transfer )
Data Center Region: (Choose the nearest location to your place)
Additional Options: IPV6 Enabled
```

![](/img/droplet\_config.gif)

* In the authentication section, you can either choose SSH or set up a password if you want to log in to your server.
* Lastly, click on the Create Droplet button.

![](/img/droplet\_password.gif)

It takes a few minutes (approximately 3-4 minutes) to install Appsmith on the DigitalOcean droplet. You’ll find the deployed droplet on your dashboard with all the details of the selected configuration.

![](/img/DO\_dashboard.png)

To use Appsmith, copy the IPv4 address from the settings and open it in a new tab. This takes you to Appsmith’s login page. Since this is a new instance, click on sign up to create a new account on Appsmith.

![](/img/signup\_appsmoith.gif)

## Updating to the latest Appsmith release

:::caution
   It's recommended to back up the Appsmith instance before performing an update. For more information, see [How to Create a backup](/getting-started/setup/instance-management/appsmithctl#backup-instance).
:::

SSH into your droplet and run the following command:

```
cd /root/appsmith && docker-compose pull && docker-compose rm -fsv appsmith && docker-compose up -d
```

If you have updated your Appsmith instance and face any issues. You can roll back the changes and [restore the Appsmith instance](/getting-started/setup/instance-management/appsmithctl#restore-instance) from a backup archive. 

## Troubleshooting

If you encounter any errors during this process, check out the guide on [debugging deployment errors](/help-and-support/troubleshooting-guide/deployment-errors), if you are still facing an issue please reach out to [support@appsmith.com](mailto:support@appsmith.com).

## Further reading

* [Configuring Self-Hosted Instances](/getting-started/setup/instance-configuration/#configuring-docker-installations)
* [Managing the Appsmith instance](/getting-started/setup/instance-management)
* [Tutorials](/getting-started/tutorials)
