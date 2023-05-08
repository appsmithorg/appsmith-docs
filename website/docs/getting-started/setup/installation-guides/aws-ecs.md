---
description: Deploy Appsmith on the ECS cluster using EC2 instance.
sidebar_position: 5
---

# AWS ECS for EC2
This page provides steps to install Appsmith on a single node EC2 Linux + Networking ECS Cluster using an EC2 instance.

## Prerequisites
* Amazon Web Services (AWS) account. If you don't have one [Create an AWS Account](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/)
* An Amazon EC2 key pair. If you don't have one [Generate an SSH Key pair](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html#having-ec2-create-your-key-pair)
* An Amazon Security group that has ports 80, 443, and 22 accessible. If you don't have one [Create a Security Group](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-security-groups.html#creating-security-group), and ensure that you [add an inbound rule to a security group](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-security-groups.html#adding-security-group-rule) to enable port access
* Switch to the [Classic Amazon Web Console](https://console.aws.amazon.com/ecs/)

## Install Appsmith
To deploy Appsmith on the Amazon ECS cluster that has a single node, you need to complete the below essential steps:

1. You need an **EC2 Linux + Networking single node** ECS Cluster that has the **Number of Instances** set to **1**. If you don't have one, follow these steps to create a single-node ECS Cluster:

  a. Go to [Classic Amazon Web Console](https://console.aws.amazon.com/ecs/) and click **Clusters** on the sidebar

  b. Click the **Create Cluster** button

  c. Choose **EC2 Linux + Networking** as cluster template

  d. Click the **Next step** button

  e. Give a desired name to the **Cluster name** field

  f. Configure the instance as shown below:

  | Attribute              | Value                                    |
  |------------------------|------------------------------------------| 
  | **Provisioning Model**   | On-Demand Instance |
  | **Task role**            | Select default task role |
  | **EC2 instance type**    | A minimum `t3.medium` or `t3a.medium` is needed|
  | **Number of instances**    | 1 |
  | **EC2 AMI ID**      | Amazon Linux2 AMI |
  | **Key pair**        | Select the Key pair that you created in the [Prerequisites](#prerequisites) step |

  g. Scroll down to the **Networking** section, and configure as shown below:

  | Attribute              | Value                                    |
  |------------------------|------------------------------------------|
  | **VPC**   | Either create a new VPC, or select an existing one from the dropdown |
  | **Subnets**            | Select the desired one from the dropdown |
  | **Auto assign public IP**    | Select **Enabled** from the dropdown|
  | **Security group**    | Select the security group that you created in the [Prerequisites](#prerequisites) step |

  h. Scroll down to the **CloudWatch Container Insights** section, and tick the **Enable container insights** checkbox

  i. Click the **Create** button

<figure>
  <img src="/img/aws_ecs_ec2_create_cluster_status.png" style={{width: "100%", height: "auto"}} alt="A launch status screen shows the ECS Cluster status" />
  <figcaption align="center"><i>A launch status screen shows the ECS Cluster status</i></figcaption>
</figure>

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
  | **Name** | Give a desired name |
  | **Volume type** | bind |
  | **Source path** | `/appsmith/stacks` | 
  
  The mount directory named `/appsmith/stacks` is created on the host EC2 instance, and Appsmith data is tied to the lifecycle of the host EC2 instance in the ECS cluster.

  i. Click **Add** button

  j. Scroll up to the **Container definitions** section

  k. Click **Add container** button

  l. Add container definition as shown below:

  | Attribute              | Value                                    |
  |------------------------|------------------------------------------|
  | **Container name**         | Give a desired name                  |
  | **Image**                  | a. Use `appsmith/appsmith-ce` for the **Community Edition** <br/> b. Use `appsmith/appsmith-ee` for the **Business Edition**|
  | **Memory Limits (MiB)**    | Give a desired value. Minimum 3000 is needed |
  | **Task CPU (MunitiB)**     | Give a desired value. Minimum 1024 is needed |

  m. Scroll down to the **Port mappings** section

  n. Add port 80 to the Host port and the Container port fields, and set the protocol as `tcp`

  o. Click **Add port mapping** and add port 443 to the Host port and the Container port fields, and set the protocol as `tcp`

  p. Scroll to the **Storage and Logging** section
  
  q. Add the Mount points as shown below:

  | Attribute              | Value                                       |
  |------------------------|---------------------------------------------|
  | **Source volume**      | The volume name that you added for Appsmith |
  | **Container path**     | `/appsmith-stacks`                          |
  | **Read only**          | Disabled                                    |

  r. Click **Add**

  s. Scroll down to the bottom of the page

  t. Click **Create** button

2. Follow these steps to create and run an ECS service

  a. Go to the cluster dashboard and click the name of the ECS cluster

  b. Click **Create** under **Services** tab

  c. Configure service as shown below:

  | Attribute              | Value                                       |
  |------------------------|---------------------------------------------|
  | **Launch type**        | Select EC2                                  |
  | **Task definition**    | Select the task definition that you created |
  | **Service name**       | Give a desired name                         |
  | **Service type**       | Select DAEMON                               |
  
   *_For other attributes, move ahead with the default selection_

  d. Click **Next step**

  e. Keep the default selection for **Configure Network** page and click **Next step**

  f. Click the **Next step** button on the **Set Auto Scaling** page

  g. Review the details and click **Create Service**

<figure>
  <img src="/img/aws_ecs_ec2_create_ecs_service_status.png" style={{width: "100%", height: "auto"}} alt="A launch status screen shows the ECS Service Status." />
  <figcaption align="center"><i>A launch status screen shows the ECS Service Status</i></figcaption>
</figure>

 You can view the status of the service by clicking the **View service** button. Your task is present under the **Tasks** tab and shows the status as Running. To find the details of the EC2 instance: click the **ECS Instances** tab and click on the Container instance. Use the DNS or the public IP to access Appsmith.

## Troubleshooting

Some common errors that you may face during installation:

* [Unable to access Appsmith](/help-and-support/troubleshooting-guide/deployment-errors#unable-to-access-appsmith) 
* [Containers failed to restart](/help-and-support/troubleshooting-guide/deployment-errors#containers-failed-to-start)

If you continue to face issues, reach out to [support@appsmith.com](mailto:support@appsmith.com).

## Further reading

- [Configuring ECS Installations](/getting-started/setup/instance-configuration#configure-ecs-installations)
- [Manage Appsmith instance](/getting-started/setup/instance-management)
