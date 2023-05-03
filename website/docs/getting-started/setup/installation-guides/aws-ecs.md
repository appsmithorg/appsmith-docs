---
description: Deploy Appsmith on the ECS cluster using EC2 instance.
sidebar_position: 5
---

# Amazon Elastic Container Service (ECS) for EC2
This page provides steps to install Appsmith on an ECS Cluster using EC2 instances.

## Prerequisites
* A Amazon Web Services (AWS) account. If you don't have one [Create an AWS Account](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/)
* Switch to the old Amazon Web Console. https://console.aws.amazon.com/ecs/
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
  | Task definition Name   | Give a desired name |
  | Task role              | Select default task role |
  | Task execution role    | Select default task execution role |
  | Task memory (MiB)      | Minimum 2 GB needed |
  | Task CPU (unit)        | Minimum 1 virtual CPU needed |

    *_For other attributes, move ahead with the default selection_

  f. Scroll down to **Container definitions** section

  g. Click **Add container** button

  h. Add container definition as shown below:

  | Attribute              | Value                                    |
  |------------------------|------------------------------------------|
  | Container name         | Give a desired name |
  | Image                  | `appsmith/appsmith-ce` |
  | Memory Limits (MiB)    |

  i. Scroll down to **Port mappings** section

  j. Add port mappings for ports 80 and 443, and set the protocol attribute for each of them as `tcp`. 

  k. Click **Add port mapping** and add port 443 to the Host port, Container port, and set the protocol as `tcp`.

  l. Select Volumes - TO DO confirm once video is ready

  m. Click **Add**




