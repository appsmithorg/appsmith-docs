---
description: Deploy Appsmith on AWS with an AMI available on the AWS marketplace.
sidebar_position: 4
---

# AWS AMI

This page provides steps to install Appsmith using an Amazon Machine Image (AMI).

## Prerequisites

- Amazon Web Services (AWS) account. If you don't have one, [Create an AWS Account](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/).
- An Amazon EC2 key pair. If you don't have one, [Generate an SSH Key pair](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html#having-ec2-create-your-key-pair).
- An Amazon Security group with ports 80, 443, and 22 accessible. If you don't have one, [Create a Security Group](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-security-groups.html#creating-security-group).
- To enable port access, [add an inbound rule](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-security-groups.html#adding-security-group-rule) for the port ranges 80, 443, and 22 to the security group you created above.
- To allow outbound traffic, add an outbound rule to permit all traffic. If you need specific restrictions, customize the outbound rules according to your requirements.
- Ensure you have created the security group and the SSH key pair in the same region.

## Install Appsmith

Follow these steps to install Appsmith using an Amazon Machine Image (AMI):

1. Go to the **EC2 Dashboard**.
2. Scroll down to the **Launch instance** section.
3. Click the **Launch instance** button, and select **Launch instance**.
4. On the **Launch instance** screen, scroll down to the **Application and OS images(Amazon Machine Image)** section.
5. Search for **Appsmith** in the search bar.
6. In the search results, click **AWS Marketplace AMIs**.
7. Select the [Appsmith](https://aws.amazon.com/marketplace/pp/prodview-mrpgdd3mhpvbs) image.
8. On the **Launch an instance** screen:

a. Configure the instance as below:

| Attribute         | Value                                                                           |
| ----------------- | ------------------------------------------------------------------------------- |
| **Name**          | Give a desired name.                                                            |
| **Instance type** | A minimum `t3.medium` or `t3a.medium` is needed.                                |
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
      Set up a custom domain for your Appsmith instance and secure it with SSL <a href="/getting-started/setup/instance-configuration/custom-domain">Learn more about setting up custom domains and SSL</a>
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

- [Add super admins to your instance](/getting-started/setup/instance-configuration#add-super-admins).
- [Configure Appsmith instance](/getting-started/setup/instance-configuration/)
- [Managing Appsmith instance](/getting-started/setup/instance-management/)
