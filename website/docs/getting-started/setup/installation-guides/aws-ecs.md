---
description: Deploy Appsmith on the ECS cluster using EC2 instance.
sidebar_position: 5
---

# AWS ECS on EC2

This page provides steps to install Appsmith on a single node EC2 Linux + Networking ECS Cluster using an EC2 instance.

## Prerequisites

- Amazon Web Services (AWS) account. If you don't have one, [Create an AWS Account](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/).
- An Amazon EC2 key pair. If you don't have one, [Generate an SSH Key pair](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html#having-ec2-create-your-key-pair).
- An Amazon Security group with ports 80, 443, and 22 accessible. If you don't have one, [Create a Security Group](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-security-groups.html#creating-security-group)
- To enable port access, [add an inbound rule](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-security-groups.html#adding-security-group-rule) for the port ranges 80, 443, and 22 to the security group you created above.
- Ensure you have created the security group and the SSH key pair in the same region.

## Create EFS volume
1. Navigate to the **Elastic File System** section of the AWS Management Console and click the **Create file system** button.
2. Provide a meaningful name to your file system, configure the VPC settings as required, and click **Create**.
3. Select the file system you created above from the list and switch to the **Network** tab.
4. Click the **Manage** button, and assign the security group that allows NFS access on port 2049. If you don't have such a security group:
    * Follow the [Create a Security Group](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-security-groups.html#creating-security-group) guide and include an inbound rule for NFS access on port 2049.
    * Once created, attach this security group to your EFS.

## Install Appsmith

To deploy Appsmith on the Amazon ECS cluster that has a single node, you need to complete the below essential steps:

### Create ECS cluster

1. From the AWS Management Console, navigate to the **Elastic Container Service** (ECS) section.
2. If you already have a single-node **EC2 Linux + Networking** ECS Cluster with 1 instance, you may skip to creating task and container definitions. If not, continue with the following:
3. Click **Clusters** in the left sidebar, then click the **Create Cluster** button.
4. Select **EC2 Linux + Networking** as the cluster template and click the **Next step** button.
5. Fill in the **Cluster name** with your desired name.
6. Configure the instance settings as follows:
    * **Provisioning Model**: On-Demand Instance
    * **EC2 instance type**: Select at least a `t3.medium` or a `t3a.medium` instance type.
    * **Number of instances**: 1
    * **EC2 AMI ID**: Choose the Amazon Linux2 AMI
    * **Key pair**: Use the key pair created in the [Prerequisites](#prerequisites) section
7. Scroll down to the **Networking** section, and configure as shown below:
    * **VPC**: Choose your existing VPC or create a new one VPC
    * **Subnets**: Select subnets that provide public access
    * **Auto-assign public IP**: Enable this setting
    * **Security group**: Use the security group created earlier in the [Prerequisites] section
8. Scroll down to the **CloudWatch Container Insights** section, and tick the **Enable container insights** checkbox.
9. Click the **Create** button to create your cluster. Click the **View cluster** button to see the cluster you created.

<figure>
<img src="/img/aws-ecs-ec2-classic-web-console.png" style={{width: "100%", height: "auto"}} alt="Create Cluster using Classic Amazon Web Console" />
<figcaption align="center"><i>Create Cluster using Classic Amazon Web Console</i></figcaption>
</figure>


<figure>
    <img src="/img/aws_ecs_ec2_create_cluster_status.png" style={{width: "100%", height: "auto"}} alt="A launch status screen shows the ECS Cluster status" />
    <figcaption align="center"><i>A launch status screen shows the ECS Cluster status</i></figcaption>
</figure>

### Create task and container definition

1. Select **Task Definitions** from the ECS section in the sidebar of the AWS Management Console.

2. Click the **Create new Task Definition** button and select **EC2** as your launch type compatibility, then proceed to the next step.

3. Provide the details for your task definition:

    || Attribute | Value||
    |-----------|------| 
    | **Task definition Name** | Your desired name | 
    | **Task role** | (Leave as default if not required) | 
    | **Task execution role** | (Leave as default if not required) | 
    | **Task memory (MiB)** | Minimum 3 GB | 
    | **Task CPU (unit)** | Minimum 1 virtual CPU |

For other attributes, continue with the default selections.

4. Under the **Volumes** section, click the **Add volume** button. Configure volume with the below settings:
    * **Name**: Provide a desired name
    * **Volume type**: EFS File System
    * **EFS File System ID**: Select the EFS file system created in the [Create EFS volume](#create-efs-volume) section
    * **Root directory**: `/`

 :::danger Attention 
 Do not share the EFS across ECS services, as doing so will cause Appsmith services to crash. 
 :::

5. Under **Container definitions**, click **Add container** to define your Appsmith container:
    * **Container name**: Give a desired name to your container
    * **Image**: Use `appsmith/appsmith-ee`
    * **Memory Limits (MiB)**: Minimum of 3000 MiB suggested
6. In the **Port mappings** section, and set up port mappings by adding port 80 (TCP) for HTTP and port 443 (TCP) for HTTPS.
7. In the **Storage and Logging** section, set up the mount point for Appsmith:
   * **Source volume**: The volume name you gave for Appsmith
   * **Container path**: `/appsmith-stacks`
   * **Log configuration**: Check the **Auto-configure CloudWatch Logs** checkbox
8. Save your container definition and task definition by clicking on **Add** and then **Create** buttons.

### Create and run ECS service

1. Navigate to the **Clusters** dashboard in the **ECS** section and select your cluster.
2. Click **Services** and then click the **Create** button.
3. Configure your service with the following settings:

   | Attribute | Value | 
   |--------------------|-------------------| 
   | **Launch type** | EC2 | 
   | **Task definition**| Choose the task definition you created | 
   | **Service name** | Your desired name | 
   | **Service type** | DAEMON |
   
   Continue through the next steps by accepting the default configurations until you reach the review page.

4. Review your service details, and click **Create service** button to create service.

<figure>
<img src="/img/aws_ecs_ec2_create_ecs_service_status.png" style={{width: "100%", height: "auto"}} alt="A launch status screen shows the ECS Service Status." />
<figcaption align="center"><i>A launch status screen shows the ECS Service Status</i></figcaption>
</figure>

### Verify Appsmith installation

1. Select your cluster from the **Clusters** section, and open the **Tasks** tab
2. Locate the relevant task and click its **EC2 instance id**
3. You can use the **Public IPv4 address** or **DNS** from the EC2 Instance Summary page

<figure>
<img src="/img/aws-ecs-ami-find-DNS-to-access-appsmith.png" style={{width: "100%", height: "auto"}} alt="Use DNS or Public IP to access Appsmith." />
<figcaption align="center"><i>Use DNS or Public IP to access Appsmith</i></figcaption>
</figure>

4. Use the obtained IP address or DNS to access Appsmith in your web browser
5. Fill in your details to create an administrator account
6. Once you've created an account, you can either start with the free plan or activate your instance with a license key. If you want to generate a license key, sign up on [customer.appsmith.com](https://customer.appsmith.com) to create one, and then proceed to activate your instance using the newly generated license key.

## Install Appsmith Community

For the Appsmith open source edition (Appsmith Community), substitute `appsmith/appsmith-ee` with `appsmith/appsmith-ce` in the container definition during the task creation on this page.

## Troubleshooting

If you are facing issues during deployment, refer to the guide on [troubleshooting deployment errors](/help-and-support/troubleshooting-guide/deployment-errors). If you continue to face issues, reach out to the support team via the chat widget on this page.

## Further reading

- [Configuring ECS Installations](/getting-started/setup/instance-configuration#configure-ecs-installations)
- [Manage Appsmith instance](/getting-started/setup/instance-management)
