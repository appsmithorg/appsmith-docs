---
description: Deploy Appsmith on the ECS cluster using EC2 instance.
sidebar_position: 5
---

# AWS ECS for EC2
This page provides steps to install Appsmith on an ECS Cluster using EC2 instances.

## Prerequisites
* Amazon Web Services (AWS) account. If you don't have one [Create an AWS Account](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/)
* Switch to the [classic Amazon Web Console](https://console.aws.amazon.com/ecs/)
* An Amazon EC2 key pair. If you don't have one [Generate an SSH Key pair](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html#having-ec2-create-your-key-pair)
* An Amazon Security group that has ports 80, 443, and 22 accessible. If you don't have one [Create a Security Group](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-security-groups.html#creating-security-group), and ensure that you [add an inbound rule to a security group](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-security-groups.html#adding-security-group-rule) to enable port access
* Provision and EFS Volume --point to an AWS doc

## Install Appsmith
To deploy Appsmith on Amazon ECS, you need to complete the below essential steps: 
1. Create a single node ECS cluster (optional)
   ::alert
   - You can skip this step if you want to use an existing ecs cluster.
   - Please note that this deployment guide is only applicable for a **single node ECS cluster**
   - The node should be deployed in a public subnet and have a public IP auto assigned.
   ::

   a. Navigate to Amazon ECS on the AWS classic console and choose clusters on the side bar and select Create Cluster.

   b. Choose EC2 Linux + Networking, and select the next step.

   c. Enter your cluster name

   d. Set the following instance configuration:
    | Attribute              | Value                                    |
    |------------------------|------------------------------------------|
    | **Provisioning model**   | On-Demand Instance |
    | **Task role**              | Select default task role |
    | **server size**    | Select as required (Minimun t3.medium/t3a.medium) |
    | **Number of Instances**    | 1 |
    | **EC2 AMI ID**      | Amazon Linux2 AMI |
    | **Key pair**        | Select the Key pair created in prerequisite step |

   e. Proceed to the networking section. You can either create a new vpc or use an existing one.
   While using an existing vpc, please ensure a public subnet is selected and the auto-assign public ip is enabled.

   f. Enable container insights.
   g. Proceed with the default values for the rest of the configuration.
   You can leave the container instance IAM role as None or default in this case
   h. Hit the create button.


2. Follow these steps to create task and container definitions:

  a. Click **Task Definitions** from the sidebar

  b. Click **Create new Task Definition**

  c. Select **EC2** as launch type compatibility

  d. Click **Next step**

  e. Configure task and container definitions as shown below:

  | Attribute              | Value                                    |
  |------------------------|------------------------------------------|
  | **Task definition Name**   | Give a desired name |
  | **Task role**              | Select default task role |
  | **Task execution role**    | Select default task execution role |
  | **Task memory (MiB)**      | Minimum 3 GB needed |
  | **Task CPU (unit)**        | Minimum 1 virtual CPU needed |

    *_For other attributes, move ahead with the default selection_

  f. Scroll down to the **Volumes** section

  g. Click **Add volume** button

  h. Add volume as shown below:

  | Attribute              | Value                                    |
  |------------------------|------------------------------------------|
  | **Name** | appsmith-vol |
  | **Volume type** | bind |
  | **Source path** | /appsmith/stacks | 
  
  ::alert
  The mount directory /appsmith/stacks will be created on the host ec2 instance.
  This means the Appsmith data is tied to the lifecycle of the host ec2 instance in the ECS cluster.
  ::

  i. Click **Add** button

  j. Scroll up to the **Container definitions** section

  k. Click **Add container** button

  l. Add container definition as shown below:

  | Attribute              | Value                                    |
  |------------------------|------------------------------------------|
  | **Container name**         | Give a desired name |
  | **Image**                  | a. Use `appsmith/appsmith-ce` for the **Community Edition** <br/> b. Use `appsmith/appsmith-ee` for the **Business Edition**|
  | **Memory Limits (MiB)**    | As required (Minimum 3000) |
  | **Task CPU (MunitiB)**    | As required (Minimum 1024) |

  m. Scroll down to **Port mappings** section

  o. Click **Add port mapping** and add port 443 to the Host port, Container port, and set the protocol as `tcp`.

  p. Scroll to the **Storage and Logging** section and set the Mount points to use the `appsmith-vol` with the following attributes.

  | Attribute              | Value                                    |
  |------------------------|------------------------------------------|
  | **Source volume** | appsmith-vol |
  | **Container path** | /appsmith-stacks|
  | **Read only** | Disabled |

  **Screenshot required

  q. Click **Add**

  r. Scroll down to the bottom of the page

  s. Click **Create**

3. Follow these steps to create and run an ECS service

  a. Go to the cluster dashboard and click the name of the ECS cluster

  b. Click **Create** under **Services** tab

  c. Configure service as shown below:

  | Attribute              | Value                                    |
  |------------------------|------------------------------------------|
  | **Launch type** | Select EC2 |
  | **Task definition** | Select the task definition that you created |
  | **Service name** | Give a desired name |
  | **Service type** | Select DAEMON |
  
   Proceed with the default attributes for the rest.

  d. Click **Next step**

  e. Keep the default selection for **Configure Network** page and click **Next step**

  f. Click **Next step** on the **Set Auto Scaling** page and use the default attiributes.

  g. Review the details and click **Create Service**

  A launch status screen shows the message Service Created. You can view the status of the service by clicking the **View service** button. Your task is present under the **Tasks** tab and shows the status as Running. 
  Click on the **ECS Instances** tab and click on the Container instance. You can find the details of the EC2 instance.
  Use the DNS or the public IP to access Appsmith.

## Troubleshooting

  Some common errors that you may face during installation:
* [Unable to access Appsmith](/help-and-support/troubleshooting-guide/deployment-errors#unable-to-access-appsmith) 
* [Containers failed to restart](/help-and-support/troubleshooting-guide/deployment-errors#containers-failed-to-start)

If you continue to face issues, reach out to [support@appsmith.com](mailto:support@appsmith.com).

## Further reading

- [Configuring ECS Installations](/getting-started/setup/instance-configuration#configure-ecs-installations)
- [Manage Appsmith instance](/getting-started/setup/instance-management)
  


