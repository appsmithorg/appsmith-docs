---
description: Deploy Appsmith on AWS with an AMI available on the AWS marketplace.
sidebar_position: 4
---

# AWS AMI

This page provides steps to install Appsmith using an Amazon Machine Image (AMI). You may also follow the video tutorial on how to install Appsmith using an <a href="https://www.youtube.com/watch?v=nnyikBImju8" target="_blank" rel="noopener noreferrer" className="external-link">Amazon Machine Image (AMI)</a>. 

## Prerequisites

- Amazon Web Services (AWS) account. If you don't have one, [Create an AWS Account](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/).
- An Amazon EC2 key pair. If you don't have one, [Generate an SSH Key pair](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html#having-ec2-create-your-key-pair).
- An Amazon Security group with ports 80, 443, and 22 accessible. If you don't have one, [Create a Security Group](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-security-groups.html#creating-security-group).
- To enable port access, [add an inbound rule](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-security-groups.html#adding-security-group-rule) for the port ranges 80, 443, and 22 to the security group you created above.
- To allow outbound traffic, add an outbound rule to permit all traffic. If you need specific restrictions, customize the outbound rules according to your requirements.
- Ensure you have created the security group and the SSH key pair in the same region.
- Whitelist `cs.appsmith.com` in your security group’s outbound rules to allow outbound HTTPS traffic. If using a custom firewall, ensure these domains are permitted.

## Install Appsmith

Follow these steps to install Appsmith using an Amazon Machine Image (AMI):

1. Go to the **EC2 Dashboard**.
2. Scroll down to the **Launch instance** section.
3. Click the **Launch instance** button, and select **Launch instance**.
4. On the **Launch instance** screen, scroll down to the **Application and OS images(Amazon Machine Image)** section.
5. Search for **Appsmith** in the search bar.
6. In the search results, click **AWS Marketplace AMIs**.
7. Select the [Appsmith](https://aws.amazon.com/marketplace/pp/prodview-ncouicgslpim4) image.
8. On the **Launch an instance** screen:

a. Configure the instance as below:

| Attribute         | Value                                                                           |
| ----------------- | ------------------------------------------------------------------------------- |
| **Name**          | Give a desired name.                                                            |
| **Instance type** | A minimum `t3.large` or `t3a.large` is needed.                                |
| **Key pair**      | Select the Key pair you created in the [Prerequisites](#prerequisites) section. |

b. Scroll down to the **Networking** section, and configure as below:

| Attribute                      | Value                                                                                      |
| ------------------------------ | ------------------------------------------------------------------------------------------ |
| **Firewall (security groups)** | Choose **Select existing security group** checkbox.                                        |
| **Security groups**            | Select the security group that you created in the [Prerequisites](#prerequisites) section. |

9. Keep the default selection for other fields.

10. Click the **Launch Instance** button. You see a launch status screen as shown below:

<ZoomImage src="/img/aws_ami_create_server_status.png" alt="A launch status screen shows the server status." caption="A launch status screen shows the server status" />

### Verify Appsmith installation

1. On the **Launch status** screen, click the **EC2 instance id** available in the bracket.

2. Click the **Instance ID** to access the **Instance Summary** page.

3. Copy the **Public IPv4 address** available on the **Instance Summary** page.

 <ZoomImage src="/img/aws-ecs-ami-find-DNS-to-access-appsmith.png" alt="Use DNS or Public IP to access Appsmith." caption="Use DNS or Public IP to access Appsmith" />
 
4. Paste it in a browser tab and wait for the server to come up. It can take up to 5 minutes. 
 
5. Once the server is up and running, you can see the login screen of Appsmith.

### Login with root admin

1. Username: `appsmith@example.com`

2. Find the password in one of the below ways:

- SSH into your server using your private key and find the application credentials with:
  ```
  sudo cat /home/ubuntu/appsmith/credential
  ```
- **Or** review the system log, by selecting **Get System Log** from the **Actions** drop-down menu for your instance. The credentials are printed in the logs as shown below:

:::caution Attention
The application password is **only** available in system logs for the initial 24 hours. It's recommended that create a new admin user and delete the `appsmith@example.com user` immediately.
:::

 <ZoomImage src="/img/aws-system-log.png" alt="Appsmith default credentials" caption="Appsmith default credentials" />

3. Once you've created an account, you can either start with the free plan or activate your instance with a license key. If you want to generate a license key, sign up on [customer.appsmith.com](https://customer.appsmith.com) to create one, and then proceed to activate your instance using the newly generated license key.

## Install Appsmith Community

To install the open source edition of Appsmith (Appsmith Community), choose the [Appsmith Community Edition](https://aws.amazon.com/marketplace/pp/prodview-mclslaty46ah4) in step 7 of the [Install Appsmith](#install-appsmith) section on this page.


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
