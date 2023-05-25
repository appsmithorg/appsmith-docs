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
- Ensure you have created the security group and the SSH key pair in the same region.

## Install Appsmith

Follow these steps to install Appsmith using an Amazon Machine Image (AMI):

1. Go to **EC2 Dashboard**.
2. Scroll down to the **Launch instance** section.
3. Click the **Launch instance** button, and select **Launch instance**.
3. On the **Launch instance** screen, scroll down to the **Application and OS images(Amazon Machine Image)** section.
4. Search for **Appsmith** in the search bar.
5. In the search results, click **AWS Marketplace AMIs**.
5. Select the **Appsmith** image.
6. On the **Launch an instance** screen:

 a. Configure the instance as below:

 | Attribute | Value |
 |------------------------|------------------------------------------| 
 | **Name** | Give a desired name. |
 | **Instance type** | A minimum `t3.medium` or `t3a.medium` is needed. |
 | **Key pair** | Select the Key pair you created in the [Prerequisites](#prerequisites) step. |

 b. Scroll down to the **Networking** section, and configure as below:

 | Attribute | Value |
 |------------------------|------------------------------------------| 
 | **Firewall (security groups)** | Select **Select existing security group**|
 | **Security groups** | Select the security group that you created in the [Prerequisites](#prerequisites) step |
 
7. Keep the default selection for other fields.

8. Click the **Launch Instance** button.

You see a launch status screen as shown below:

<figure>
 <img src="/img/aws_ami_create_server_status.png" style={{width: "100%", height: "auto"}} alt="A launch status screen shows the server status." />
 <figcaption align="center"><i>A launch status screen shows the server status</i></figcaption>
</figure>

10. Follow these steps to verify the Appsmith installation:

 a. On the **Launch status** screen, click the **EC2 instance id** available in the bracket.

 b. Click the **Instance ID** to access the **Instance Summary** page.

 b. Copy the **Public IPv4 address** available on the **Instance Summary** page.

 <figure>
 <img src="/img/aws-ecs-ami-find-DNS-to-access-appsmith.png" style={{width: "100%", height: "auto"}} alt="Use DNS or Public IP to access Appsmith." />
 <figcaption align="center"><i>Use DNS or Public IP to access Appsmith</i></figcaption>
 </figure>
 
 h. Paste it in a browser tab and wait for the server to come up. It can take up to 5 minutes. 
 
 g. Once the server is up and running, you can see the login screen of Appsmith.

 <figure>
 <img src="/img/aws-login-page.png" style={{width: "100%", height: "auto"}} alt="Appsmith Login Screen" />
 <figcaption align="center"><i>Appsmith Login Screen</i></figcaption>
 </figure>

11. Follow these steps to log into the instance using admin credentials:

 a. Username: `appsmith@example.com`

 b. Find the password in one of the below ways:

 * SSH into your server using your private key and find the application credentials with:
 ```
 sudo cat /home/ubuntu/appsmith/credential
 ``` 
 * **Or** review the system log, by selecting **Get System Log** from the **Actions** drop-down menu for your instance. The credentials are printed in the logs as shown below:
 <figure>
 <img src="/img/aws-system-log.png" style={{width: "100%", height: "auto"}} alt="Appsmith default credentials" />
 <figcaption align="center"><i>Appsmith default credentials</i></figcaption>
 </figure>

## Troubleshooting

Some common errors that you may face during installation:

- [Unable to access Appsmith](/help-and-support/troubleshooting-guide/deployment-errors#unable-to-access-appsmith)
- [Containers failed to restart](/help-and-support/troubleshooting-guide/deployment-errors#containers-failed-to-start)

If you continue to face issues, contact the support team using the chat widget at the bottom right of this page.


## Further reading

* [Configure Appsmith instance](/getting-started/setup/instance-configuration/)
* [Managing Appsmith instance](/getting-started/setup/instance-management/)
