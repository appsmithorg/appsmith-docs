---
description: Deploy Appsmith on the ECS cluster using EC2 instance.
sidebar_position: 5
---

# AWS ECS on EC2

This page provides steps to install Appsmith on a single node EC2 Linux + Networking ECS Cluster using an EC2 instance.

## Prerequisites


* An **Amazon Web Services** (AWS) account. If you don’t have one, [Create an AWS Account](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/).
* An **Amazon EC2** key pair. If you don’t have one, follow the guide to [Generate an SSH Key pair](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html#having-ec2-create-your-key-pair).
* An **Amazon Security Group** with the following rules:
  * Inbound: Allow traffic on ports 80, 443, and 22. Follow the guide to [Create a Security Group](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-security-groups.html#creating-security-group) and [add an inbound rule](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-security-groups.html#adding-security-group-rule).
  * Outbound: Allow outbound traffic. Customize rules if specific restrictions are needed.
* **External MongoDB** (Version 5.0 or later) is required. The built-in MongoDB cannot be used with EFS, as it may cause Appsmith to crash. See [External MongoDB](/getting-started/setup/instance-configuration/custom-mongodb-redis#external-mongodb).
* **Whitelist** `cs.appsmith.com` in your security group’s outbound rules to allow outbound HTTPS traffic. If using a custom firewall, ensure these domains are permitted.



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
4. **Cluster name** - Give a meaningful name to your cluster. For example, `appsmith-ecs-ec2-cluster`.
5. Configure the **Infrastructure** settings as follows: 
    * Choose **Amazon EC2 instances**
    * **Provisioning Model**: Choose **On-demand**
    * **Auto Scaling Group**: Keep default selection
    * **Operating system/Architecture**: Amazon Linux 2
    * **EC2 instance type**: Select at least a `t3.medium` or a `t3a.medium` instance type.
    * **Desired Capacity**: Give **Minimum** as 1 and **Maximum** as 2
    * **SSH Key pair**: Use the key pair created in the [Prerequisites](#prerequisites) section
    Keep default settings for other attributes.
    
7. Configure the **Network Settings for Amazon EC2 instances** section as shown below:
    * **VPC**: Choose your existing VPC or create a new one VPC
    * **Subnets**: Select subnets that provide public access
    * **Security group**: Use the security group created earlier in the [Prerequisites] section
    * **Auto-assign public IP**: Choose **Turn on**
8. Configure the **Monitoring** section by toggling on the **Use container insights** setting
9. Click the **Create** button to create your cluster. You'll see the ECS cluster under Clusters.

### Create task and container definition

1. Go to **Task definitions** from the ECS section in the sidebar of the AWS Management Console.
2. Click the **Create new task definition** button and select **Create new task definition** from the dropdown.
3. Under the **Task definition configuration**, give a meaningful name to the task definition by adding the name in the **Task definition family** field. For example, **appsmith-ecs-ec2-cluster-task-def**
4. Configure the **Infrastructure requirements** as shown below:
    * **Launch type** - Amazon EC2 instances
    * **Network mode** - default
    * **Task role** and **Task execution role** as default. For all other fields keep the default settings.
5. Configure the **Container-1** as shown below:
    * **Name** - Give a meaningful name. For example, `appsmith`
    * **Image URI** - `index.docker.io/appsmith/appsmith-ee`
    * Add the port mappings for Port `80` as follows:
      * **Container port** - `80`
      * **Protocol** - HTTP
      * **Port name** - Give a meaningful and unique name.
      * **App protocol** - HTTP
    * Add the port mappings for Port `443` as follows:
      * **Container port** - `443`
      * **Protocol** - HTTP
      * **Port name** - Give a meaningful and unique name.
      * **App protocol** - HTTP
    * Under the **Environment variables** section, click the **Add environment variable** button, and add the below environment variables in the **Key** and their values in the **Value** fields:
        * `APPSMITH_ENCRYPTION_PASSWORD`: Add a password to encrypt all credentials in the database. It's recommended to use a random password.
        * `APPSMITH_ENCRYPTION_SALT`: Use encryption salt to encrypt all credentials in the database. It's recommended to use a random password.
        * `APPSMITH_SUPERVISOR_PASSWORD` : Password to access the supervisor console to watch the processes in the Appsmith container. It's recommended to use a random password.
        * `APPSMITH_DB_URL` : Enter the URI of the external MongoDB (v5.0 or later) instance.
        * `APPSMITH_ENABLE_EMBEDDED_DB` to `0`. This disables embedded mock databases on EFS volume.
6. Configure the **HealthCheck** section as shown below: 
    * **HealthCheck Command** - `CMD-SHELL, curl http://localhost/ || exit 1`
    * **Interval** - 10
    * **Timeout** - 2
    * **Start period** - 160
    * **Retries** - 3
7. Keep the default settings for other sections, and scroll down to **Storage**. Click **Add volume** button and configure **Volume-1** as shown below:
    * **Volume type**- EFS
    * Configure the **Storage configurations** as show below:
        * **Volume name**- Give a meaningful name. For example, `appsmith-ecs-ec2-cluster-efs-volume`
        * **EFS File System ID**: Select the EFS file system created in the [Create EFS volume](#create-efs-volume) section
        * **Root directory**: `/`
    * Configure the **Container mount points** as shown below:
        * **Container**- Choose **appsmith**
        * **Source volume**- Choose **appsmith**
        * **Container path**- add the path as `/appsmith-stacks`

 :::danger Attention 
 Do not share the EFS across ECS services, as doing so will cause Appsmith services to crash. 
 :::
 8. Keep the default settings for all other sections, and click the **Create** button to create the task definition.

### Create and run ECS service

1. Navigate to the **Clusters** dashboard in the **ECS** section and select your cluster.
2. Under the **Services** tab, click the **Create** button.
3. Configure the **Environment** section with the following settings:
   * **Compute options**- select option as **Launch type**
   * **Launch type**- select **EC2** from the dropdown
4. Configure the **Deployment configuration** section with the following settings:
    * **Application type**- Select **Service**
    * Set up the **Task definition** as follows:
        * **Family**- Choose the task definition you created in the [Create task and container definition](#create-task-and-container-definition) section
        * **Revision**- Keep the default selection
        * **Service name**- Give a meaningful name to the service. For example, `appsmith-ecs-ec2-cluster-service` 
        * **Service type**- Choose **DAEMON**
5. Keep the default setting for all other sections, and click the **Create** button to create a service. It will take about five minutes for Appsmith to be up and running. The **Last status** shown as **Running** means that the service is up and running.

### Verify Appsmith installation

1. Select your cluster from the **Clusters** section, and open the **Tasks** tab
2. Locate the relevant task and click its **EC2 instance id**
3. Click the **Open address** link available next to the **Public IP** field to access Appsmith

<ZoomImage src="/img/aws-ecs-ami-find-DNS-to-access-appsmith.png" alt="Use DNS or Public IP to access Appsmith." caption="Use Public IP to access Appsmith" />

4. Fill in your details to create an administrator account
5. Once you've created an account, you can either start with the free plan or activate your instance with a license key. If you want to generate a license key, sign up on [customer.appsmith.com](https://customer.appsmith.com) to create one, and then proceed to activate your instance using the newly generated license key.

## Install Appsmith Community

For the Appsmith open source edition (Appsmith Community), substitute `appsmith/appsmith-ee` with `appsmith/appsmith-ce` in the container definition for **Container-1** in the [Create task and container definition](#create-task-and-container-definition) section on this page.


## Post-installation configuration

Once you have completed the installation process, consider performing the tasks below to configure and manage your Appsmith instance, enhancing its security and performance, specifically if it's intended for production use.
<br/>
<div className="containerGridSampleApp">
  <a className="containerAnchor containerColumnSampleApp columnGrid column-one" href="/getting-started/setup/instance-configuration/authentication">
    <div className="containerHead">
      <div className="containerHeading">
        <strong>Configure Single Sign-on (SSO)</strong>
      </div>
    </div>
    <hr className="gradient-hr" />
    <div className="containerDescription">
      Configure SSO to allow users to sign in using your identity provider. Learn more about configuring SSO.
    </div>
  </a>

  <a className="containerAnchor containerColumnSampleApp columnGrid column-two" href="/getting-started/setup/instance-configuration/email">
    <div className="containerHead">
      <div className="containerHeading">
        <strong>Configure Email Service</strong>
      </div>
    </div>
    <hr className="gradient-hr" />
    <div className="containerDescription">
      Set up an email service to enable Appsmith to send notifications and alerts. Learn more about configuring email services.
    </div>
  </a>
</div>

<div className="containerGridSampleApp">
  <a className="containerAnchor containerColumnSampleApp columnGrid column-one" href="/getting-started/setup/instance-configuration/custom-domain">
    <div className="containerHead">
      <div className="containerHeading">
        <strong>Set Up Custom Domain and SSL</strong>
      </div>
    </div>
    <hr className="gradient-hr" />
    <div className="containerDescription">
      Set up a custom domain for your Appsmith instance and secure it with SSL. Learn more about setting up custom domains and SSL.
    </div>
  </a>

  <a className="containerAnchor containerColumnSampleApp columnGrid column-two" href="/getting-started/setup/instance-management/appsmithctl">
    <div className="containerHead">
      <div className="containerHeading">
        <strong>Backup and Restore</strong>
      </div>
    </div>
    <hr className="gradient-hr" />
    <div className="containerDescription">
      Ensure the safety of your Appsmith instance data by regularly backing up and restoring it when needed. Learn more about Backup and Restore.
    </div>
  </a>
</div>

## Troubleshooting

If you are facing issues during deployment, refer to the guide on [troubleshooting deployment errors](/help-and-support/troubleshooting-guide/deployment-errors). If you continue to face issues, reach out to the support team via the chat widget on this page.

## See also

- [Manage Installation](/getting-started/setup/instance-configuration): Learn how to manage your Appsmith instance.
- [Upgrade Installation Guides](/getting-started/setup/instance-management/): Learn how to upgrade your Appsmith installation.
