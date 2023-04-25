---
description: Deploy Appsmith on AWS with an AMI on the marketplace
sidebar_position: 4
---

# AWS AMI

## Tutorial steps:

* [Register with Amazon Web Services (AWS)](./aws-ami.md#step-1-register-with-amazon-web-services)
* [Generate an SSH key pair](./aws-ami.md#step-2-generate-an-ssh-key-pair)
* [Create an AWS Security Group](./aws-ami.md#step-3-create-an-aws-security-group)
* [Deploy Appsmith on an AWS cloud server](./aws-ami.md#step-3-create-an-aws-security-group)
* [Find Application Credentials](./aws-ami.md#application-credentials)
* [Updating your Appsmith installation](./aws-ami.md#updating-your-appsmith-installation)

### Step 1: Register with Amazon Web Services

If you already have an Amazon Web Services account, you may skip this step.

Please follow the steps [detailed here](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/) to create an account on AWS.

### Step 2: Generate an SSH key pair

If you already have an SSH key pair for the AWS region you are operating in, you can skip this step.

Please follow the steps [detailed here](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html#having-ec2-create-your-key-pair) to generate a new key-pair. You need this key to SSH into your AWS EC2 instance.

### Step 3: Create an AWS Security Group

If you already have an existing security group with ports 80, 443, and 22 open, you can skip this step.

Appsmith is a web application that requires ports 80 and 443 for HTTP access. It also requires port 22 to be accessible for SSH access. Please follow the steps [detailed here](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-security-groups.html#creating-security-group) to create a new security group.

While creating the new security group, please follow the steps [detailed here](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-security-groups.html#adding-security-group-rule) to edit the "Inbound Rules" and make ports 80, 443, and 22 accessible from anywhere.

### Step 4: Deploy Appsmith On AWS Cloud

The next step is to launch a cloud server with the Appsmith Amazon Machine Image (AMI) running on it. The AWS Console lets you do this in just a couple of clicks. Follow these steps:

1. Navigate to the "**Amazon** **EC2 dashboard,"** and select the “**AMIs**” option in the “**Images**” menu.
2. Search for the Appsmith Stack by entering the search term "**Appsmith**" in the search bar at the top.
3. Select the image in the list of search results and click the “**Launch**” button.
4. On the resulting detail page, review the available server sizes. Select the server size you wish to use and click “**Review and Launch**” to proceed.
5. On the review page, click the “**Edit security groups**” link.
6. On the “**Configure Security Group**” page, choose the option to “**Select an existing security group**”. Find the security group you created in Step 3 and select it. Click the “Review and Launch” button to proceed.
7. Verify that the correct key pair (created in [**Step 2**](./aws-ami#step-2-generate-an-ssh-key-pair)) is used for the server.
8. Confirm your selection by hitting the “**Launch Instance**” button.

The AWS Console begins spinning up the new server.

![Launch](/img/aws-launch.png)

The process usually takes a few minutes. Use the EC2 Dashboard to check the status of the server. Once the server has launched, you can obtain its public IP address from the EC2 Dashboard, as shown below:

![EC2 Detail](/img/aws-ec2-detail.png)

At this point, you should be able to browse the cloud server, by entering the cloud server IP address or DNS name directly into your browser’s address bar. You should now see your web app home page as shown below:

![Login Page](/img/aws-login-page.png)

## Application Credentials

By default, Appsmith boots up with default user credentials that allow you to log in without needing to sign up. You can use the default username (`appsmith@example.com`). There are two options for obtaining the password.

### Option 1: Find credentials by checking the System log on the AWS Cloud Console (EC2)

:::caution Attention
The application password is only available in the system logs for the first 24 hours after you first start the instance. It's recommended that you note it down immediately on the first boot and save it in a safe place, as you need it to access the instance console. It's also recommended that you change it as soon as possible for security reasons.
:::

* Go to your EC2 instances dashboard on AWS
* Select the instance
* From the “Actions” drop-down menu, select the “Get System Log” menu item.

![Select System Log](/img/aws-select-system-log.png)

* Review the system log until you find the application password. You can also find the default username printed in the logs.

![View System log](/img/aws-system-log.png)

### Option 2: Find credentials by connecting to your application through SSH

The default application credentials are stored in a standalone file. To obtain these credentials at any time, follow these instructions:

* SSH into your server using your private key
*   Run the following command to see your application credentials:

    ```
      sudo cat /home/ubuntu/appsmith/credential
    ```

## Updating your Appsmith installation

You can either choose to update the Appsmith installation manually or choose to enable auto-updates.

:::caution
   It's recommended to back up the Appsmith instance before performing an update. For more information, see [How to Create a Backup](/getting-started/setup/instance-management/appsmithctl#backup-appsmith-instance).
:::


### Update installation manually

To update Appsmith manually, `ssh` into the `ec2` instance with the username `appsmith` and run the following command:

```
cd appsmith && sudo docker-compose pull && sudo docker-compose rm -fsv appsmith && sudo docker-compose up -d
```

### Enable auto-updates

If your Appsmith setup does not have `auto-update` enabled that is the `Watchtower` container is not running along with `Appsmith` in the `host machine`. Follow the steps below to enable `auto-update:`

* SSH into the `ec2` instance with username `appsmith`
* Change directory to `/appsmith`
* Run the below command to stop and remove the container and its resources

```
docker-compose down
```

* Open the `docker-compose.yml` file with any text editor and uncomment lines 13 to 23

![uncomment the lines from 13 to 23](</img/Docker-Compose-Yml-File-UnComment-for-AutoUpdates_(1).png>)

* Save the file
* Run the below command

```
docker-compose up -d
```
If you have updated your Appsmith instance and face any issues. You can roll back the changes and [restore the Appsmith instance](/getting-started/setup/instance-management/appsmithctl#restore-appsmith-instance) from a backup archive. 


## Troubleshooting


If you encounter any errors during this process, check out this guide on [debugging deployment errors](/help-and-support/troubleshooting-guide/deployment-errors), if you are still facing an issue please reach out to [support@appsmith.com](mailto:support@appsmith.com) or join [Discord Server](https://discord.com/invite/rBTTVJp) to directly speak to the Appsmith team.


## Further reading

* [Configuring Self-Hosted Instances](/getting-started/setup/instance-configuration/#configuring-docker-installations)
* [Managing the Appsmith instance](/getting-started/setup/instance-management)
* [Tutorials](/learning-and-resources/tutorials)
