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

- Find Appsmith from the DigitalOcean marketplace [here](https://marketplace.digitalocean.com/apps/appsmith).
- Click the Create Appsmith Droplet button; that redirects you to a new page where you can set up all your configurations.

![Appsmith droplet gif](/img/appsmith_droplet.gif)

For a base configuration, use the following settings.

```bash
Shared CPU: Basic
CPU Options: Regular Intel with SSD (1 GB CPU / 25GB SSD / 1000GB Transfer )
Data Center Region: (Choose the nearest location to your place)
Additional Options: IPV6 Enabled
```

![Droplet configuration gif](/img/droplet_config.gif)

- In the authentication section, you can either choose SSH or set up a password if you want to log in to your server.
- Lastly, click on the Create Droplet button.

![Droplet password gif](/img/droplet_password.gif)

It takes a few minutes (approximately 3-4 minutes) to install Appsmith on the DigitalOcean droplet. You’ll find the deployed droplet on your dashboard with all the details of the selected configuration.

![Dashboard image](/img/DO_dashboard.png)

To use Appsmith, copy the IPv4 address from the settings and open it in a new tab. This takes you to Appsmith’s login page. Since this is a new instance, click on sign up to create a new account on Appsmith.

![Appsmith sign up gif](/img/signup_appsmoith.gif)s

## Updating to the latest Appsmith release

:::caution
It's recommended to back up the Appsmith instance before performing an update. For more information, see [How to Create a backup](/getting-started/setup/instance-management/appsmithctl#backup-instance).
:::

SSH into your droplet and run the following command:

```
cd /root/appsmith && docker-compose pull && docker-compose rm -fsv appsmith && docker-compose up -d
```

If you have updated your Appsmith instance and face any issues. You can roll back the changes and [restore the Appsmith instance](/getting-started/setup/instance-management/appsmithctl#restore-instance) from a backup archive.


## Post-installation configuration

Once you have completed the installation process, consider performing the tasks below to configure and manage your Appsmith instance, enhancing its security and performance, specifically if it's intended for production use.
<div className="containerGridSampleApp">
  <div className="containerColumnSampleApp columnGrid column-one">
    <div className="containerCol">
      <a href="/getting-started/setup/instance-configuration/authentication">
        <strong>Configure Single Sign-on (SSO)</strong>
      </a>
    </div>
    <hr/>
    <div className="containerDescription">
      Configure SSO to allow users to sign in using your identity provider. <a href="/getting-started/setup/instance-configuration/authentication">Learn more about configuring SSO</a>
    </div>
    
  </div>

  <div className="containerColumnSampleApp columnGrid column-two">
    <div className="containerCol">
      <a href="/getting-started/setup/instance-configuration/email">
        <strong>Configure Email Service</strong>
      </a>
    </div>
    <hr/>
    <div className="containerDescription">
      Set up an email service to enable Appsmith to send notifications and alerts. <a href="/getting-started/setup/instance-configuration/email">Learn more about configuring email services</a>
    </div>
    
  </div>
</div>

<div className="containerGridSampleApp">
  <div className="containerColumnSampleApp columnGrid column-one">
    <div className="containerCol">
      <a href="/getting-started/setup/instance-configuration/custom-domain">
        <strong>Set Up Custom Domain and SSL</strong>
      </a>
    </div>
    <hr/>
    <div className="containerDescription">
      Set up a custom domain for your Appsmith instance and secure it with SSL.  <a href="/getting-started/setup/instance-configuration/custom-domain">Learn more about setting up custom domains and SSL</a>
    </div>
    
  </div>

  <div className="containerColumnSampleApp columnGrid column-two">
     <div className="containerCol">
      <a href="/getting-started/setup/instance-management/appsmithctl">
        <strong>Backup and Restore</strong>
      </a>
    </div>
    <hr/>
    <div className="containerDescription">
      Ensure the safety of your Appsmith instance data by regularly backing up and restoring it when needed. 
      <a href="/getting-started/setup/instance-management/appsmithctl">Learn more about Backup and Restore</a>
    </div>
  </div>
</div>

## Troubleshooting

If you are facing issues during deployment, please refer to the guide on [troubleshooting deployment errors](/help-and-support/troubleshooting-guide/deployment-errors).

If you continue to face issues, contact the support team using the chat widget at the bottom right of this page.

## Further reading

- [Configuring Self-Hosted Instances](/getting-started/setup/instance-configuration/#configuring-docker-installations)
- [Managing the Appsmith instance](/getting-started/setup/instance-management)
- [Tutorials](/getting-started/tutorials)
