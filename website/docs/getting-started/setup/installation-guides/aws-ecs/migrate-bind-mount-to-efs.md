---
description: Migrate Appsmith installation on the ECS cluster on EC2 instance to use AWS EFS.
---
# Migrate Bind Mount to AWS EFS

Migrating your existing Appsmith installation on an AWS ECS from Bind Mount to Amazon Elastic File System (EFS) can enhance flexibility and scalability. This page outlines steps for migrating your AWS ECS on EC2 Appsmith installation from Bind Mount to AWS EFS using the AWS Management Console.

## System requirements

* At least 2 GB of free storage space for backup and update tasks.

## Prerequisites:

1. A self-hosted Appsmith instance installed on an AWS ECS cluster (running on an EC2 instance), using a Bind Mount volume.
2. Create a backup of the Appsmith instance, see [Backup instance](/getting-started/setup/instance-management/appsmithctl/#backup-instance) guide.

## Create EFS volume

1. Navigate to the **Elastic File System** section of the AWS Management Console and click the **Create file system** button.
2. Provide a meaningful name to your file system, configure the VPC settings as required, and click **Create**.
3. Select the file system you created above from the list and switch to the **Network** tab.
4. Click the **Manage** button, and assign the security group that allows NFS access on port 2049. If you don't have such a security group:
    * Follow the [Create a Security Group](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-security-groups.html#creating-security-group) guide and include an inbound rule for NFS access on port 2049.
    * Once created, attach this security group to your EFS.

## Configure Appsmith installation

Follow these steps to configure your Appsmith installation to use the newly created EFS:

1. **Access ECS Task Definitions:**
   - Navigate to the AWS Management Console.
   - Open the Amazon ECS console.
   - In the navigation pane, choose "Task Definitions."

2. **Configure ECS Task Definitions:**
   - Select your existing task definition.
   - Choose the **Create new revision** to create a new revision of the task definition.
   - In the task definition editor, go to the **Volumes** section and add a new volume for the EFS file system.
   - Configure the volume with the EFS file system ID, enabling transit encryption, and IAM authorization.
   - In the **Container Definitions** section, map the volume to the appropriate container path.
   - Save the changes to create a new revision of the task definition.

3. **Update ECS Service:**
   - Navigate to the ECS service in the AWS Management Console.
   - Select your service and choose **Update**.
   - In the **Task Definition** dropdown, select the newly revised task definition.
   - Save the changes.
   - Once the ECS service is available, verify the Appsmith installation by logging into your Appsmith account.

## Troubleshooting

If you see errors, you can roll back to a previous version to fix the issue. For more information, see the [Restore instance](/getting-started/setup/instance-management/appsmithctl?current-command-type=docker-commands#restore-instance) section. 

If you continue to face issues, contact the support team using the chat widget at the bottom right of this page.

