---
description: Deploy Appsmith on the ECS cluster using EC2 instance.
sidebar_position: 5
---

# AWS ECS on EC2

This document guides you through installing Appsmith using AWS ECS on EC2

## Prerequisites

### 1: Register with Amazon Web Services

If you already have an Amazon Web Services account, you may skip this step.

Please follow the steps [detailed here](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/) to create an account on AWS.

### 2: Generate an SSH key pair

If you already have an SSH key pair for the AWS region you are operating in, you can skip this step.

Please follow the steps [detailed here](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html#having-ec2-create-your-key-pair) to generate a new key pair. You need this key to SSH into your AWS EC2 instance.

### 3: Create an AWS security group

If you already have an existing security group with ports 80, 443, 22, and 9001 open, you can skip this step.

Appsmith is a web application that requires ports 80 and 443 for HTTP access, port 22 to be accessible for SSH access, it also requires port 9001 to be accessible for the [supervisord UI](http://supervisord.org/running.html). Please follow the steps [detailed here](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-security-groups.html#creating-security-group) to create a new security group.

While creating the new security group, please follow the steps [detailed here](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-security-groups.html#adding-security-group-rule) to edit the "Inbound Rules" and make ports 80, 443, 22, and 9001 accessible from anywhere.

***

## ECS overview

![ECS OVERVIEW](/img/ecs-overview.png)

## Deploy Appsmith (using EC2 launch type):

1. [Create an ECS Cluster](#step-1-create-an-ecs-cluster)
2. [Create Task and Container Definitions](#step-2-create-task-and-container-definitions)
3. [Create and Run an ECS Service](#step-3-create-and-run-an-ecs-service)

:::info Important
 Switch to the old AWS console UI to follow the steps in this tutorial.
:::

### Step 1: Create an ECS Cluster

1. Navigate to Amazon ECS and choose clusters on the side bar and select `Create Cluster`.

![Creating Cluster in AWS ECS](/img/spaces\_-Lzuzdhj8LjrQPaeyCxr-3757176148\_uploads\_git-blob-217fcdb99846c6da6b6b5b374ec8ceb61ff5c221\_ecs-start-dash.png)

2. Choose **EC2 Linux + Networking**, and select the next step.

3. Enter your cluster name

4. Instance configuration:

    1. Select the provisioning model as **On-Demand Instance**.
    2. Select the server size you wish to use, and set the **Number of instances** as **1**.
    3. Select the **Amazon Linux2 AMI** for the EC2 AMI ID dropdown, and enter the required EBS volume size.
    4. Select a **Key pair**. Please refer to [Prerequisite 2](#2-generate-an-ssh-key-pair), if you haven't already created one.

    ![Configuring the instance](/img/spaces\_-Lzuzdhj8LjrQPaeyCxr-3757176148\_uploads\_git-blob-9b572559c7d254290a9d0e928d54b07d4314d60e\_ecs-cluster-instance-config.png)

5. Networking Section

    1. Select the default VPC followed by selecting the first subnet from the drop-down.
    2. Select the security group that you created in [Create an AWS security group] (#3-create-an-aws-security-group) section.

    ![Configuring the Networking Section](/img/ecs-cluster-networking.png)

6. Enable container insights (this gives CloudWatch monitoring and helps to debug).

7. Leave the Container instance IAM role as default (**ecsInstanceRole**), if you don't have one AWS creates it for you.

8. Hit the **Create button**. It may take a minute for your cluster to be ready.

![ECS Cluster Status](/img/spaces\_-Lzuzdhj8LjrQPaeyCxr-3757176148\_uploads\_git-blob-838febeb60a4267fe023333877400abfa9cdecbe\_ecs-cluster-launch.png)

### Step 2: Create task and container definitions

Once the cluster is created, you need to create a task that runs on the cluster created in [**Step 1**](#step-1-create-an-ecs-cluster).

1. On the sidebar, choose Task Definitions and select Create a new Task Definition.
2. Choose EC2 as the launch type, and proceed to the next step.
3. Configure task and definition
   1. Enter the task definition name.
   2. Leave the Task role blank.
   3. Select the default Network mode

      ![Configuration of the Task](</img/ecs-task-def_(1)_(1)_(1)_(2)_(1).png>)

4. Select the default Task execution IAM role (ecsTaskExecutionRole). AWS creates one for you if you don't have one.

5. Set the required task size (memory & CPU)

6. Go to the **Volumes** section and add a new volume. To persist data on the Appsmith installation you have two options.
    1. Bind the mount directory on the host ec2 instance. The data is tied to the lifecycle of the host ec2 instance/ECS cluster. Enter the Name as `appsmith_stack`, set the Volume type as **Bind Mount,** and set the **Source path** to `/Appsmith/stacks`.
      ![Bind Mount Volume Configuration](/img/ecs\_volume.png)
    2. Amazon EFS volumes- The data is independent of the lifecycle of the host ec2 instance/ECS cluster.

        1. Create an EFS filesystem by following the steps below:
            1. Navigate to AWS EFS on the console and hit the Create button.
            2. Set the parameters like VPC (should be the same as the ECS cluster) and storage class as suiting your requirement.
            3. Click the EFS created and navigate to the Network tab to ensure the mount target is created in the same availability zone as that of the ECS cluster.
            4. Create a new security group to allow inbound and outbound NFS traffic.
            5. Attach the security group to the ECS cluster and the EFS mount target.

        2. Enter the Name as `appsmith_stack`, set the Volume type as **EFS,** and set the **File System ID** to the EFS filesystem created in the [prerequisites](#prerequisites) step. Leave the remaining fields with the default values.

          ![EFS Volume Configuration](/img/ecs-efs.png)

7. Configure the **Appsmith container**.
    1. Click the **Add container** button.
    2. Enter the container name, and set the Image to `appsmith/appsmith-ce`
    3. Add port mappings for the ports **80->80,443->443**
    4. Set the _Mount points Source volume_ to `appsmith_stack` and set the Container path to `/appsmith-stacks`

      ![Storage Setting](/img/ecs\_mount_(1).png)

    5. Enable auto-configure CloudWatch Logs for log configuration.
    6. Hit **Add.**

      ![Container Port Configuration](/img/ecs-task-appsmith_(1)_(1)_(1)_(2).png)

    7. Finally, hit the **Create** button.

### Step 3: Create and run an ECS service

1. Navigate to the **clusters dashboard** and click the ECS cluster created in [**Step 1**]/(aws-ecs#step-1-create-an-ecs-cluster).
2. On the cluster details, under the **Services tab** hit the **create** button.

![Cluster Dashboard](/img/ecs-cluster-service-creation.png)

3. Configure Service

    1. Select **EC2** as Launch Type.
    2. Select the **Task Definition** created in [**Step 2**](#step-2-create-task-and-container-definitions) with the latest revision.
    3. Select the **Cluster** created in [**Step 1**](#step-1-create-an-ecs-cluster).
    4. Enter the service name.
    5. Select the **Daemon** Service type.
    6. Set the **Minimum Healthy Percent** to **40**.
    7. Leave the remaining fields and sections with the **default values**, and proceed to the next step.

      ![Configuring the service](/img/service-ecs-appsmith.png)

4. Configure network - Proceed to the next step with the **default** configurations.

![Configure Network](</img/ecs-service-lb_(1)_(1)_(1)_(2)_(3).png>)

5. Set Auto Scaling - Proceed to the next step with the **default** configuration.

![Setting Up Auto Scaling](/img/spaces\_-Lzuzdhj8LjrQPaeyCxr-3757176148\_uploads\_git-blob-c530f8614a433bc339b500c3859d7332960ac0fc\_ecs-service-auto-scaling.png)

6. Review the Service configurations and hit the **Create Service** button.

![Review Section](/img/spaces\_-Lzuzdhj8LjrQPaeyCxr-3757176148\_uploads\_git-blob-d41afa800108de88c398d00edf945db81077d4c0\_ecs-service-review.png)

7. The following screen is shown with the **launch status**, click the **View Service** button.

![Launch Status Dashboard](/img/spaces\_-Lzuzdhj8LjrQPaeyCxr-3757176148\_uploads\_git-blob-6e59de9348c02c19d5b8bf0871b056ebf8ec5a97\_ecs-service-launch-status.png)

8. You are directed to the **service detail** page. Your task is listed under the **Tasks tab** on the cluster. refresh the table until the status is **RUNNING**.

![Service Detail Page](/img/ecs-service-task-status.png)

9. Click the **task** to get the details of your running service.

![Task Dashboard](/img/spaces\_-Lzuzdhj8LjrQPaeyCxr-3757176148\_uploads\_git-blob-0e04e6250702a263e7398969ee75be5b82a4f1f4\_ecs-task-details.png)

10. Finally, click the **EC2 instance id** to navigate to the EC2 console with your ECS instance (which is basically an EC2 instance running the container service) listed.

![EC2 Console](/img/spaces\_-Lzuzdhj8LjrQPaeyCxr-3757176148\_uploads\_git-blob-d598b204016d7ceb09c3e8f229d6b0efc0a9a71c\_ecs-instance-ec2.png)

11. Find the **public IP address** or **DNS name** and enter it on your browser to see Appsmith's welcome page.

![Public IP Address](/img/spaces\_-Lzuzdhj8LjrQPaeyCxr-3757176148\_uploads\_git-blob-b42232223f0151a5f3324137635656e4ab248312\_appsmith-welcome-page.png)

:::note
 In this guide, If you are using the embedded MongoDB, the container persistence is tied up with the EC2 instance lifecycle.
:::

## Update Appsmith

:::caution
   It's recommended to backup the Appsmith instance before performing an update. For more information, see [How to create a backup](https://docs.appsmith.com/getting-started/setup/instance-management/appsmithctl#backup-appsmith-instance).
:::

1. Navigate to the ECS cluster from the ECS dashboard.
2. In the Tasks Tab, click the respective task.
3. On the Task Page, hit the stop button.
4. Wait until the new task is deployed automatically.

If you have updated your Appsmith instance and face any issues. You can rollback the changes and [restore the Appsmith instance](/getting-started/setup/instance-management/appsmithctl#restore-appsmith-instance) from a backup archive. 

## Troubleshooting

If you encounter any errors during this process, check out the [debugging deployment errors](/help-and-support/troubleshooting-guide/deployment-errors), if you are still facing an issue please reach out to [support@appsmith.com](mailto:support@appsmith.com) or join the [Discord Server](https://discord.com/invite/rBTTVJp) to directly speak to the Appsmith team.

## Further reading

* [Configuring ECS Installations](/getting-started/setup/instance-configuration#configure-ecs-installations)
* [Managing the Appsmith instance](/getting-started/setup/instance-management/)
* [Tutorials](/learning-and-resources/tutorials/)
