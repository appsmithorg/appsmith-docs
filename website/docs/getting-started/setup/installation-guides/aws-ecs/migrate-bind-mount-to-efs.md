---
description: Migrate Appsmith installation on the ECS cluster on EC2 instance to use AWS EFS.
---
# Migrate Bind Mount to AWS EFS

Migrating your existing Appsmith installation on an AWS ECS from Bind Mount to Amazon Elastic File System (EFS) can enhance flexibility and scalability. This page outlines steps for migrating your AWS ECS on EC2 Appsmith installation from Bind Mount to AWS EFS using the AWS Management Console.

## System requirements

* At least 2 GB of free storage space for backup and update tasks.

## Prerequisites:

* A self-hosted Appsmith instance installed on an AWS ECS cluster (running on an EC2 instance), using a Bind Mount volume.
* Create a backup of the Appsmith instance, see [Backup instance](/getting-started/setup/instance-management/appsmithctl/#backup-instance) guide.
* You will not be able to use the built-in MongoDB with EFS as it will cause the Appsmith instance to crash. Hence, ensure you have set up and can access an external MongoDB instance hosting MongoDB V5.0 or later. For more information, see [External MongoDB](/getting-started/setup/instance-configuration/custom-mongodb-redis#external-mongodb).

## Create EFS volume

1. Navigate to the **Elastic File System** section of the AWS Management Console and click the **Create file system** button.
2. On the **Create file system** pop-up screen:
   * **Name**- Provide a meaningful name to your file system. For example, `appsmith-ecs-ec2-cluster-efs`.
   * **VPC**- Select the VPC in which the ECS container is running, and click **Create**.
3. Select the file system you created above from the list and switch to the **Network** tab. Verify that the **Mount target state** is **Available** before proceeding to next step.
4. Click the **Manage** button, and assign the security group that allows NFS access on port 2049. If you don't have such a security group:
    * Follow the [Create a Security Group](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-security-groups.html#creating-security-group) guide and include an inbound rule for NFS access on port 2049.
    * Once created, attach this security group to your EFS.

## Update Appsmith task definition

Follow the below steps to configure your Appsmith task definition to use the newly created EFS:

1. Go to the AWS Management Console, open the Amazon ECS console, and select **Task Definitions** from the sidebar.
2. Select your existing task definition, and click the **Create new revision** button to create a new revision of the task definition.
3. Go to the **Container-1** section, click the **Add environment variable** button, and add the below environment variables in **Key** and their values in **Value**:
   * `APPSMITH_ENCRYPTION_PASSWORD`: Add a password to that you noted while taking the backup in the [Prerequisites](#prerequisites) section.
   * `APPSMITH_ENCRYPTION_SALT`: Use encryption salt that you noted while taking the backup in the [Prerequisites](#prerequisites) section.
   * `APPSMITH_SUPERVISOR_PASSWORD` : Password to access the supervisor console to watch the processes in the Appsmith container. It's recommended to use a random password.
   * `APPSMITH_MONGODB_URI` : Enter the URI of the external MongoDB (v5.0 or later) instance.
   * `APPSMITH_ENABLE_EMBEDDED_DB` to `0`. This disables embedded mock databases on EFS volume.
3. Go to the **Storage** section and add a new volume with below details:
    * **Volume type**- EFS
    * Configure the **Storage configurations** as show below:
      * **Volume name**- Give a meaningful name. For example, `appsmith-ecs-ec2-cluster-efs-volume`
      * **File system ID**: Select the EFS file system created in the [Create EFS volume](#create-efs-volume) section
      * **Root directory**: `/`
   * Configure the **Container mount points**, as shown below:
      * Update the **Container path** for Bind mount from `/appsmith-stacks` to `appsmith-stacks-old`
      * Click **Add mount point**, and add details as shown below:
         * **Container**- Choose **appsmith**
         * **Source volume**- Choose the name of the EFS volume. For example, `appsmith-ecs-ec2-cluster-efs-volume`
         * **Container path**- add path as `/appsmith-stacks`

4. Keep default values for other settings, and click **Create** button.
   

## Update Appsmith ECS service

Follow the below steps to update your Appsmith service to use the newly created task definition:

1. Go to the AWS Management Console, open the Amazon ECS console, select your ECS Cluster, and go to the **Services** tab.
2. Select your service and click the **Update** button.
3. Check the **Force new deployment** checkbox
4. In the **Task definition**, select the newly created revision for the **Revision** setting.
5. Click the **Update** button to save the changes and initiate a new deployment.
6. Verify the service **Last status** shown as **Running**, which means that the service is up and running.

## Migrate data from Bind mount to EFS

Follow the below steps to migrate data:
1. Use the key pair created during the cluster creation process; this key pair will be necessary for connecting to your AWS account.

   ```bash
   ssh -i <keypair.pem> -o "StrictHostKeyChecking=no" ec2-user@<task-ip>
   ```
2. Take a note of the Appsmith container ID with:

   ```bash
   sudo docker ps -a | grep appsmith
   ```
3. Exec into the container with:

   ```bash
   sudo docker exec -it -u root <CONTAINER-ID> bash
   ```
 Replace the `<CONTAINER-ID>` with Appsmith container ID. You'll see both the old and new volumes attached to the Appsmith container.
 4. Copy the backup tar to the EFS volume with:

   ```bash
   cp /appsmith-stacks-old/data/backup/*.tar /appsmith-stacks/data/restore/
   ```
5. Restore the data with: 

   ```bash
   appsmithctl restore
   ```
   For more information, see [Restore Appsmith](/getting-started/setup/instance-management/appsmithctl#restore-instance).
6. Verify the Appsmith service by logging into your Appsmith account and verifying your apps.

## Remove Bind mount storage

Follow the below steps to remove the Bind mount:

1. Go to the AWS Management Console, open the Amazon ECS console, and select **Task Definitions** from the sidebar.
2. Select your existing task definition, and click the **Create new revision** button to create a new revision for the task definition.
3. In the **Storage** section, click the **Remove** button next to the volume that uses Bind mount.
4. Keep default values for other settings, and click **Create** button. 
5. Update the ECS service to use the latest revision. Follow the steps in the [Update Appsmith ECS service](#update-appsmith-ecs-service) section.
6. Verify the Appsmith service by logging into your Appsmith account and verifying your apps.

## Troubleshooting

If errors occur, roll back to a previous version to fix the issue. For more information, see the [Restore instance](/getting-started/setup/instance-management/appsmithctl?current-command-type=docker-commands#restore-instance) section. 

If you continue to face issues, contact the support team using the chat widget at the bottom right of this page.
