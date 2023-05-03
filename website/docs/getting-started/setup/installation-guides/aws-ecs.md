---
description: Deploy Appsmith on the ECS cluster using EC2 instance.
sidebar_position: 5
---

# Amazon Elastic Container Service (ECS) for EC2
This page provides steps to install Appsmith on an ECS Cluster using EC2 instances.

## Prerequisites
* A Amazon Web Services (AWS) account. If you don't have one [Create an AWS Account](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/)
* An Amazon EC2 key pair. If you don't have one [Generate an SSH Key pair](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html#having-ec2-create-your-key-pair)
* An Amazon Security group that has ports 80, 443, 22, and 9001 accessible. If you don't have one [Create a Security Group](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-security-groups.html#creating-security-group), and ensure that you change the [Inbound Rules](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-security-groups.html#adding-security-group-rule) to enable port access.
* Access to the old Amazon Web Console 

## Install Appsmith
To deploy Appsmith on Amazon ECS, you need to complete three essential steps: 

1. Follow these steps to create an ECS cluster:

  a. Go to Amazon Elastic Container (ECS) service on the Amazon web Console, and click **Create Cluster** button located in the right corner. 
  
  b. Select cluster template as **EC2 Linux + Networking** and click **Next step**

  c. Configure the cluster as shown below:

  | Section               | Attribute              | Value                                    |
  |-----------------------|------------------------|------------------------------------------|
  |           -           | Cluster Name           | Appsmith-ECS-EC2-Cluster (or as desired) |
  | Instance Configuration | Provisioning Model    | On-Demand Instance                       |
  | Instance Configuration | EC2 instance type     | t3.medium (or as desired)                | 
  | Instance Configuration | EC2 AMI ID            | Amazon Linux2 AM                         | 
  | Instance Configuration | Root EBS Volume Size (GIB) | 30 (or as desired)                  |
  | Instance Configuration | Key Pair               | Add the key pair you created in the [Prerequisites](#prerequisites) section |
  | Networking |  Default VPC | Select the first option from the VPC dropdown |
  | Networking | Security Group | Select the security group you created in the [Prerequisites](#prerequisites) section |
  | Container Instance IAM role | Container instance IAM role | `ecsInstanceRole` |
  | CloudWatch Container Insights | Enable Container Insights | Check this option |

  d. Click **Create**

  This creates your cluster. Once the cluster is created, you need to create a task.

2. Follow these steps to create task and container definitions:

  a. Go to **Task Definitions** from the sidebar
  b. Click **Create a new Task Definition**
  c. 
