---
description: >-
  This guide provides instructions to install Appsmith on DigitalOcean using a Marketplace Droplet.
sidebar_position: 6
---

# DigitalOcean

This page provides instructions to install Appsmith on DigitalOcean using a Droplet from the DigitalOcean Marketplace.

<VideoEmbed host="youtube" videoId="H4KDHWloSR4" title="How to install Appsmith on DigitalOcean" caption="How to install Appsmith on DigitalOcean" />{" "}

## Prerequisites

Before you begin, ensure you have the following:

* A [DigitalOcean](https://www.digitalocean.com/) account with access to create Droplets.
* SSH access or a secure password for the Droplet.

## Install Appsmith

Follow these steps to install Appsmith using a pre-configured Droplet from the DigitalOcean Marketplace.

### Create Droplet
1. Navigate to [DigitalOcean](https://cloud.digitalocean.com/login) and log into your DigitalOcean account.
2. In your DigitalOcean dashboard, click the **Create** button at the top and select **Droplet**.
3. Choose a data center region by selecting a data center closest to your users for optimal performance.
4. In the **Choose an image** section, click the **Marketplace** tab. Search for **Appsmith** in the search bar and select the pre-configured Appsmith Droplet from the results.
5. Choose a Droplet plan:
   * For production workloads, it’s recommended to use at least a at least a *General Purpose* Droplet Type with a **Premium Intel plan**.
6. Configure backups (optional):
    * For production deployments, consider enabling **weekly backups** or choose the backup frequency that best suits your needs.
7. Set up authentication by either creating an **SSH key** for more secure access or set up a **root password** for SSH access.
8. Configure the Droplet:
    * Give a meaningful and unique name to the Droplet. For example, `Appsmith-DigitalOcean`.
    * Leave the quantity of Droplets at **1**, which works well for running Appsmith.
9. Click the **Create Droplet** button to begin the setup process. This process may take up to 5 minutes to initialize.

### Verify Appsmith installation
1. Once the Droplet is ready, click the newly created Droplet, find its **IPv4 address**, and copy it.
2. Open a browser and enter the Droplet’s IP address in the address bar.
3. Fill in your details to create an administrator account.
4. Once you've created an account, you can either start with the **free plan** or activate your instance with a **license key**. To generate a license key, sign up on [customer.appsmith.com](https://customer.appsmith.com), and then proceed to activate your instance using the newly generated license key.

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
      Set up a custom domain for your Appsmith instance and secure it with SSL. <a href="/getting-started/setup/instance-configuration/custom-domain">Learn more about setting up custom domains and SSL</a>
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
      Ensure the safety of your Appsmith instance data by regularly backing up and restoring it when needed. <a href="/getting-started/setup/instance-management/appsmithctl">Learn more about Backup and Restore</a>
    </div>
  </div>
</div>

## Troubleshooting

If you are facing issues during deployment, please refer to the guide on [troubleshooting deployment errors](/help-and-support/troubleshooting-guide/deployment-errors). If you continue to face issues, contact the support team using the chat widget at the bottom right of this page.

## Further reading

- [Configure Appsmith instance](/getting-started/setup/instance-configuration)
- [Manage Appsmith instance](/getting-started/setup/instance-management)
