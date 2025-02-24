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
* Whitelist `cs.appsmith.com` in your firewall settings to allow outbound HTTPS traffic. If using a cloud firewall, add these domains under Allowed Rules.

## Install Appsmith

Follow these steps to install Appsmith using a pre-configured Droplet from the DigitalOcean Marketplace.

### Create Droplet
1. Navigate to [DigitalOcean](https://cloud.digitalocean.com/login) and log into your DigitalOcean account.
2. In your DigitalOcean dashboard, click the **Create** button at the top and select **Droplet**.
3. Choose a data center region by selecting a data center closest to your users for optimal performance.
4. In **Choose an image** section, click the **Marketplace** tab. Search for **Appsmith** in the search bar and select the pre-configured Appsmith Droplet from the results.
5. Choose a Droplet plan:
   * For production workloads, it’s recommended to use at least a at least a *General Purpose* Droplet Type with a **Premium Intel plan**.
6. Configure backups (optional):
    * For production deployments, consider enabling **weekly backups** or choose the backup frequency that best suits your needs.
7. Set up authentication by either creating an **SSH key** for more secure access or setting up a **root password** for SSH access. For more information on setting up SSH access, see [How to Connect to Droplets with SSH](https://docs.digitalocean.com/products/droplets/how-to/connect-with-ssh/) in the official DigitalOcean documentation. 
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
<br/>
<div className="containerGridSampleApp">
  <a className="containerAnchor containerColumnSampleApp columnGrid column-one" href="/getting-started/setup/instance-configuration/authentication">
    <div className="containerHead">
      <div className="containerHeading">
        <strong>Configure Single Sign-on (SSO)</strong>
      </div>
    </div>
    <hr className="gradient-hr" />
    <div className="containerDescription">
      Configure SSO to allow users to sign in using your identity provider. Learn more about configuring SSO.
    </div>
  </a>

  <a className="containerAnchor containerColumnSampleApp columnGrid column-two" href="/getting-started/setup/instance-configuration/email">
    <div className="containerHead">
      <div className="containerHeading">
        <strong>Configure Email Service</strong>
      </div>
    </div>
    <hr className="gradient-hr" />
    <div className="containerDescription">
      Set up an email service to enable Appsmith to send notifications and alerts. Learn more about configuring email services.
    </div>
  </a>
</div>

<div className="containerGridSampleApp">
  <a className="containerAnchor containerColumnSampleApp columnGrid column-one" href="/getting-started/setup/instance-configuration/custom-domain">
    <div className="containerHead">
      <div className="containerHeading">
        <strong>Set Up Custom Domain and SSL</strong>
      </div>
    </div>
    <hr className="gradient-hr" />
    <div className="containerDescription">
      Set up a custom domain for your Appsmith instance and secure it with SSL. Learn more about setting up custom domains and SSL.
    </div>
  </a>

  <a className="containerAnchor containerColumnSampleApp columnGrid column-two" href="/getting-started/setup/instance-management/appsmithctl">
    <div className="containerHead">
      <div className="containerHeading">
        <strong>Backup and Restore</strong>
      </div>
    </div>
    <hr className="gradient-hr" />
    <div className="containerDescription">
      Ensure the safety of your Appsmith instance data by regularly backing up and restoring it when needed. Learn more about Backup and Restore.
    </div>
  </a>
</div>

## Troubleshooting

If you are facing issues during deployment, refer to the guide on [troubleshooting deployment errors](/help-and-support/troubleshooting-guide/deployment-errors). If you continue to face issues, contact the support team using the chat widget at the bottom right of this page.

## See also

- [Manage Installation](/getting-started/setup/instance-configuration): Learn how to manage your Appsmith instance.
- [Upgrade Installation Guides](/getting-started/setup/instance-management/): Learn how to upgrade your Appsmith installation.