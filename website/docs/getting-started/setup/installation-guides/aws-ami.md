---
description: Deploy Appsmith on AWS with an AMI on the marketplace
sidebar_position: 4
---

# AWS AMI
This page provides steps to install Appsmith using an Amazon Machine Image (AMI).

## Prerequisites

- Amazon Web Services (AWS) account. If you don't have one, [Create an AWS Account](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/).
- An Amazon EC2 key pair. If you don't have one, [Generate an SSH Key pair](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html#having-ec2-create-your-key-pair).
- An Amazon Security group with ports 80, 443, and 22 accessible. If you don't have one, [Create a Security Group](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-security-groups.html#creating-security-group).
- To enable port access, [add an inbound rule](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-security-groups.html#adding-security-group-rule) for the port ranges 80, 443, and 22 to the security group you created above.
- Switch to the Classic Amazon Web Console.
- Ensure you have created the security group and the SSH key pair in the same region.

## Install Appsmith

Follow these steps to install Appsmith using an Amazon Machine Image (AMI):

1. Go to the **Amazon** **EC2 dashboard,**
2. Select the **AMIs** option in the **Images** menu.
3. Search **Appsmith** in the search bar at the top.
4. Select the image from the search results.
5. Click the **Launch** button.
6. Select the server size you wish to use.
7. Click the **Review and Launch** button.
8. On the review page, click the **Edit security groups** link.
9. On the **Configure Security Group** page:

    a. Choose the option **Select an existing security group**. 

    b. Search and select the security group you created in the [Prerequisites](#prerequisites). 

    c. Click the **Review and Launch** button to proceed.

10. Ensure the key pair is the one you created in the [Prerequisites](#prerequisites).
11. Click the **Launch Instance** button.

You see a launch status screen as shown below:

<figure>
    <img src="/img/aws_ami_create_server_status.png" style={{width: "100%", height: "auto"}} alt="A launch status screen shows the server status." />
    <figcaption align="center"><i>A launch status screen shows the server status</i></figcaption>
</figure>

12. Follow these steps to verify the Appsmith installation:

    a. Go to the **Clusters** section in the sidebar.

    b. Select the desired **Cluster name**.

    c. Open the **Tasks** tab.

    d. Choose the specific **Task**.

    e. Click the link next to the **EC2 instance id**.

    f. Access the **Instance ID**.

    g. Copy the **Public IPv4 address** from the **Instance Summary** page.

      <figure>
      <img src="/img/aws-ecs-ami-find-DNS-to-access-appsmith.png" style={{width: "100%", height: "auto"}} alt="Use DNS or Public IP to access Appsmith." />
      <figcaption align="center"><i>Use DNS or Public IP to access Appsmith</i></figcaption>
      </figure>
    
    h. Paste it in a browser tab and wait for the server to come up. This can take up to 5 minutes. 
    
    g. Once the server is up and running, you can see the login screen of Appsmith.

      <figure>
      <img src="/img/aws-login-page.png" style={{width: "100%", height: "auto"}} alt="Appsmith Login Screen" />
      <figcaption align="center"><i>Appsmith Login Screen</i></figcaption>
      </figure>

## Troubleshooting

Some common errors that you may face during installation:

- [Unable to access Appsmith](/help-and-support/troubleshooting-guide/deployment-errors#unable-to-access-appsmith)
- [Containers failed to restart](/help-and-support/troubleshooting-guide/deployment-errors#containers-failed-to-start)

If you continue to face issues, contact the support team using the chat widget at the bottom right of this page.


## Further reading

* [Configure Appsmith instance](/getting-started/setup/instance-configuration/)
* [Managing Appsmith instance](/getting-started/setup/instance-management/)
