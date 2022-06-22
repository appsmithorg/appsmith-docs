---
description: Deploy Appsmith on AWS with an AMI on the marketplace
---

# AWS AMI

## Tutorial Steps:

* [Register with Amazon Web Services (AWS)](aws-ami.md#step-1-register-with-amazon-web-services)
* [Generate an SSH key pair](aws-ami.md#step-2-generate-an-ssh-key-pair)
* [Create an AWS Security Group](aws-ami.md#step-3-create-an-aws-security-group)
* [Deploy Appsmith on an AWS cloud server](aws-ami.md#step-4-deploy-appsmith-on-aws-cloud)
* [Configure custom domain for your app](aws-ami.md#custom-domain)
* [Find Application Credentials](aws-ami.md#application-credentials)
* [Updating your Appsmith installation](aws-ami.md#updating-your-appsmith-installation)

### Step 1: Register With Amazon Web Services

If you already have an Amazon Web Services account, you may skip this step.

Please follow the steps [detailed here](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/) in order to create an account on AWS.

### Step 2: Generate an SSH key pair

If you already have an SSH key pair for the AWS region you are operating in, you can skip this step.

Please follow the steps [detailed here](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html#having-ec2-create-your-key-pair) to generate a new key-pair. You need this key to SSH into your AWS EC2 instance.

### Step 3: Create an AWS Security Group

If you already have an existing security group with ports 80, 443 and 22 open, you can skip this step.

Appsmith is a web application that requires ports 80 and 443 for HTTP access. It also requires port 22 to be accessible for SSH access. Please follow the steps [detailed here](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-security-groups.html#creating-security-group) to create a new security group.

While creating the the new security group, please follow the steps [detailed here](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-security-groups.html#adding-security-group-rule) to edit the "Inbound Rules" and make ports 80, 443 and 22 accessible from anywhere.

### Step 4: Deploy Appsmith On AWS Cloud

The next step is to launch a cloud server with the Appsmith Amazon Machine Image (AMI) running on it. The AWS Console lets you do this in just a couple of clicks. Follow these steps:

1. Navigate to the "**Amazon** **EC2 dashboard"**, select the “**AMIs**” option in the “**Images**” menu.
2. Search for the Appsmith Stack by entering the search term "**appsmith**" in the search bar at the top.
3. Select the image in the list of search results and click the “**Launch**” button.
4. On the resulting detail page, review the available server sizes. Select the server size you wish to use and click “**Review and Launch**” to proceed.
5. On the review page, click the “**Edit security groups**” link.
6. On the “**Configure Security Group**” page, choose the option to “**Select an existing security group**”. Find the security group you created in Step 3 and select it. Click the “Review and Launch” button to proceed.
7. Verify that the correct key pair (created in [**Step 2**](aws-ami.md#step-2-generate-an-ssh-key-pair)) will be used for the server.
8. Confirm your selection by hitting the “**Launch Instance**” button.

The AWS Console will now begin spinning up the new server.

![Launch](../../../.gitbook/assets/aws-launch.png)

The process usually takes a few minutes. Use the EC2 Dashboard to check the status of the server. Once the server has launched, you will be able to obtain its public IP address from the EC2 Dashboard, as shown below:

![EC2 Detail](../../../.gitbook/assets/aws-ec2-detail.png)

At this point, you should be able to browse to the cloud server, by entering the cloud server IP address or DNS name directly into your browser’s address bar. You should now see your web app home page as shown below:

![Login Page](<../../../.gitbook/assets/aws-login-page (1).png>)

## Application Credentials

By default, Appsmith boots up with default user credentials that allow you to login without needing to sign up. The default username is: `appsmith@example.com`. There are two options for obtaining the password.

### Option 1: Find Credentials By Checking The System Log On The AWS Cloud Console (EC2)

{% hint style="warning" %}
IMPORTANT: The application password is only available in the system log for the first 24 hours after you first start the instance. We strongly recommend that you note it down immediately on the first boot and save it in a safe place, as you will be unable to access the instance console without it. We also recommend that you change it as soon as possible for security reasons.
{% endhint %}

* Go to your EC2 instances dashboard on AWS
* Select the instance
* From the “Actions” drop-down menu, select the “Get System Log” menu item.

![Select System Log](../../../.gitbook/assets/aws-select-system-log.png)

* Review the system log until you find the application password. You will also find the default username printed in the logs.

![View System log](../../../.gitbook/assets/aws-system-log.png)

### Option 2: Find Credentials By Connecting To Your Application Through SSH

The default application credentials are stored in a standalone file. To obtain these credentials at any time, follow these instructions:

* SSH into your server using your private key
*   Run the following command to see your application credentials:

    ```
      sudo cat /home/ubuntu/appsmith/credential
    ```

## Troubleshooting

If you encounter any errors during this process, check out our guide on [debugging deployment errors](../../../help-and-support/troubleshooting-guide/deployment-errors.md), if you are still facing an issue please reach out to [support@appsmith.com](mailto:support@appsmith.com) or join our [Discord Server](https://discord.com/invite/rBTTVJp) to directly speak to the Appsmith team!

## Further Reading

* [Configuring Self Hosted Instances](../instance-configuration/#configuring-docker-installations)
* [Managing the Appsmith instance](../instance-management/)
* [Tutorials](../../../learning-and-resources/tutorials/)
