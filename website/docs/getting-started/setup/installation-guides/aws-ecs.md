---
description: Deploy Appsmith on the ECS cluster using EC2 instance.
sidebar_position: 5
---

# AWS ECS for EC2
This page provides steps to install Appsmith on an ECS Cluster using EC2 instances.

## Prerequisites
* Amazon Web Services (AWS) account. If you don't have one [Create an AWS Account](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/)
* Switch to the [old Amazon Web Console](https://console.aws.amazon.com/ecs/)
* An EC2 Linux + Networking Cluster. If you don't have one [Create an EC2 Linux + Networking Cluster](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/create_cluster.html)
* An Amazon EC2 key pair. If you don't have one [Generate an SSH Key pair](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html#having-ec2-create-your-key-pair)
* An Amazon Security group that has ports 80, 443, and 22 accessible. If you don't have one [Create a Security Group](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-security-groups.html#creating-security-group), and ensure that you [add an inbound rule to a security group](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-security-groups.html#adding-security-group-rule) to enable port access
* Provision and EFS Volume --point to an AWS doc

## Install Appsmith
To deploy Appsmith on Amazon ECS, you need to complete the below essential steps: 

1. Follow these steps to create task and container definitions:

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
  | **Task memory (MiB)**      | Minimum 2 GB needed |
  | **Task CPU (unit)**        | Minimum 1 virtual CPU needed |

    *_For other attributes, move ahead with the default selection_

  f. Scroll down to the **Volumes** section

  g. Click **Add volume** button

  h. Add volume as shown below:

  | Attribute              | Value                                    |
  |------------------------|------------------------------------------|
  | **Name** | |
  | **Volume type** | |
  | **Source path** | |

  i. Click **Add** button

  j. Scroll up to the **Container definitions** section

  k. Click **Add container** button

  l. Add container definition as shown below:

  | Attribute              | Value                                    |
  |------------------------|------------------------------------------|
  | **Container name**         | Give a desired name |
  | **Image**                  | a. Use `appsmith/appsmith-ce` for the **Community Edition** <br/> b. Use `appsmith/appsmith-ee` for the **Business Edition**|
  | **Memory Limits (MiB)**    |

  m. Scroll down to **Port mappings** section

  n. Add port mappings for ports 80 and 443, and set the protocol attribute for each of them as `tcp`. 

  o. Click **Add port mapping** and add port 443 to the Host port, Container port, and set the protocol as `tcp`.

  p. Select Volumes - TO DO confirm once the video is ready

  q. Click **Add**

  r. Scroll down to the bottom of the page

  s. Click **Create**

2. Follow these steps to create and run an ECS service

  a. Go to the cluster dashboard and click the name of the ECS cluster

  b. Click **Create** under **Services** tab

  c. Configure service as shown below:

  | Attribute              | Value                                    |
  |------------------------|------------------------------------------|
  | **Launch type** | Select EC2 |
  | **Task definition** | Select the task definition that you created |
  | **Service name** | Give a desired name |
  | **Service type** | Select DAEMON |
  | **Minimum health percent** | 40 |

  d. Click **Next step**

  e. Keep the default selection for **Configure Network** page and click **Next step**

  f. Click **Next step** on the **Set Auto Scaling** page

  g. Review the details and click **Create Service**

  A launch status screen shows the message Service Created. You can view the status of the service by clicking the **View service** button. Your task is present under the **Tasks** tab and shows the status as Running. Use the DNS or the public IP to access Appsmith.

## Troubleshooting

  Some common errors that you may face during installation:
* [Unable to access Appsmith](/help-and-support/troubleshooting-guide/deployment-errors#unable-to-access-appsmith) 
* [Containers failed to restart](/help-and-support/troubleshooting-guide/deployment-errors#containers-failed-to-start)

If you continue to face issues, reach out to [support@appsmith.com](mailto:support@appsmith.com).

## Further reading

- [Configuring ECS Installations](/getting-started/setup/instance-configuration#configure-ecs-installations)
- [Manage Appsmith instance](/getting-started/setup/instance-management)
  


