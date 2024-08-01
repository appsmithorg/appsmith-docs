---
description: Deploy Appsmith on the ECS cluster using Fargate.
---

# AWS ECS on Fargate

This page provides steps to install Appsmith on AWS ECS using Fargate.

## Prerequisites

* Amazon Web Services (AWS) account. If you don't have one, [Create an AWS Account](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/).
* An Amazon EC2 key pair. If you don't have one, [Generate an SSH Key pair](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html#having-ec2-create-your-key-pair).
* An Application Load Balancer (ALB) - If you already have an ALB, follow these steps:
  * Provision an [Application Load Balancer](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-application-load-balancer.html#configure-load-balancer), and ensure that port 80 and 443 are available to configure ECS service.
  * Add an Amazon Security group with ports 80, and 443 accessible. If you don't have one, [Create a Security Group](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-security-groups.html#creating-security-group). 
* You will not be able to use the built-in MongoDB with EFS as it will cause the Appsmith instance to crash. Hence, ensure you have set up and can access an external MongoDB instance hosting MongoDB V5.0 or later. For more information, see [External MongoDB](/getting-started/setup/instance-configuration/custom-mongodb-redis#external-mongodb).


## Create EFS volume

Follow these steps to create an Elastic File System (EFS):

 :::danger
  Do not share the Elastic File System (EFS) across ECS services, as doing so will cause Appsmith services to crash.
  :::

1. Navigate to the **Elastic File System** section of the AWS Management Console and click the **Create file system** button.
2. Provide a meaningful name to your file system, configure the VPC settings as required, and click **Create**.
3. Select the file system you created above from the list and switch to the **Network** tab.
4. Click the **Manage** button, and assign the security group that allows NFS access on port 2049. If you don't have such a security group:
    * Follow the [Create a Security Group](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-security-groups.html#creating-security-group) guide and include an inbound rule for NFS access on port 2049. 
    * Enable the port access by [adding an inbound rule](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-security-groups.html#adding-security-group-rule) for the port `2049` for NFS access to the security group you created above.
    * To allow outbound traffic, add an outbound rule to permit all traffic. If you need specific restrictions, customize the outbound rules according to your requirements.
    * Once created, attach this security group to your EFS.

## Set up ECS Exec policy

 Follow the below steps to set up a policy to allow ECS Exec capability:

1. Go to the **IAM** console and select **Policies**, and click the **Create Policy** button.
2. Choose **JSON** for the policy editor, and update the policy with the below details:

    ```javascript
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Effect": "Allow",
                "Action": [
                    "ssmmessages:CreateControlChannel",
                    "ssmmessages:CreateDataChannel",
                    "ssmmessages:OpenControlChannel",
                    "ssmmessages:OpenDataChannel"
                ],
                "Resource": "*"
            }
            ]
    }
    ```
3. Click the **Next** button.
4. On the **Review and Create** screen, give a meaningful name to your policy and click the **Create Policy** button. Your policy is available in the list of policies.

## Create ECS task role

Follow these steps to set up an ECS Task Role:

1. Go to the **IAM** console, select **Roles**, and click the **Create Role** button.
2. **Trusted entity type** - Select **AWS service**.
3. **Use case** - Choose **Elastic Container Service**.
4. In the **Choose a use case for specified service** setting, select **Elastic Container Service Task** for **Use case**.
5. Click the **Next** button.
6. On the **Add permissions** screen, search the policy name you created in the [Set up ECS Exec policy](#set-up-ecs-exec-policy) section. Similarly, search for the `SecretsManagerReadWrite` policy and add it to the role.
7. On the **Name, review, and create** screen, give a meaningful name to the role, and click the **Create Role** button to create the role.

## Install Appsmith

Follow the below steps to install Appsmith:

### Create ECS cluster

1. From the AWS Management Console, navigate to the **Elastic Container Service** (ECS) section.
2. Click **Clusters** in the left sidebar, then click the **Create Cluster** button.
3. **Cluster name** - Give a meaningful name to your cluster. For example, `appsmith-ecs-fargate-cluster`.
4. In the **Infrastructure** section, choose **AWS Fargate (serverless)**
5. In the **Monitoring** section, toggle the **Use Container Insights** to turn it on.
6. Click the **Create** button. Wait for cluster creation. You'll see your cluster listed under **Clusters**.
7. Click the **Cluster name** link to review the cluster details.

### Create task and container definitions

Follow these steps to create task and container definitions for your cluster:

1. Click **Task Definitions** from the sidebar, and click **Create new task definition**.
2. Give a meaningful and unique name to **Task definition family**.
3. In the **Infrastructure requirements** section:
    * **Launch type** - Select **AWS Fargate**.
    * **Operating system/Architecture** - Keep the default selection (`Linux/X86_64`)
    * **Network mode** - Keep the default selection (`awsvpc`). 
    * **Task size** - Select `2vCPU` for CPU and `4GB` for Memory.
    * **Task Roles** - Select the role you created in the [Create ECS task role](#create-ecs-task-role) section for the **Task role** setting.

   Keep the default for other settings in this section.
   
4. In the **Container-1** section:
    * **Name** - Give a meaningful and unique name. For example, `appsmith`.
    * **Image/URI** - `appsmith/appsmith-ee`
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

    Keep the default values for other settings in this section.

5. In the **Environment variables** section, add the following environment variables:
    * `APPSMITH_ENCRYPTION_PASSWORD`- Add a password to encrypt all credentials in the database. It's recommended to use a random password.
    * `APPSMITH_ENCRYPTION_SALT`- Use encryption salt to encrypt all credentials in the database. It's recommended to use a random password.
    * `APPSMITH_SUPERVISOR_PASSWORD` - Password to access the supervisor console to watch the processes in the Appsmith container. It's recommended to use a random password.
    * `APPSMITH_MONGODB_URI` - Enter the URI of the external MongoDB (v5.0 or later) instance.
    * `APPSMITH_ENABLE_EMBEDDED_DB` - `0`. This disables embedded mock databases on EFS volume.
6. Add the below configuration in the **HealthCheck** section:
    * **Command** - `CMD-SHELL, curl -f http://localhost/ || exit 1`
    * **Interval** - 10
    * **Timeout** - 5
    * **Start period** - 160
    * **Retries** - 3

    Keep the default values for all the other settings, and scroll down to the **Storage** section.

7. In the **Storage** section, click the **Add volume** button, and configure **Volume - 1** as shown below:
    * **Volume name** - Give a meaningful and unique name.
    * **Configuration type** - Keep the default value (Configure at task definition creation).
    * **Volume type** - Select **EFS**.
    * Set up the **Storage configurations** as below:
      * **File system ID** - Select the EFS file system created in the [Create EFS volume](#create-efs-volume) section.
    * * **Root Directory** - Keep the default value (`/`).
    * Set up the **Container mount points** as below:
      * **Container** - Select the container name that you gave in the **Container - 1** section above.
      * **Source volume** - Select the name, you gave in the **Volume name** in the **Volume - 1** section.
      * **Container path** - Set it as `/appsmith-stacks`.

    Keep default values for all other settings.

8. Scroll down to the bottom of the page and click the **Create** button. You'll see your task definition listed under **Task definitions**.
9. Click the **Task definition** link to review the details.

### Create and run ECS service

Follow these steps to create and run an ECS service:

1.  Go to the cluster dashboard and click the ECS cluster name that you created in the [Create ECS Cluster](#create-ecs-cluster) section.
2.  On the cluster details, click **Create** button available on the **Services** tab, and you will be on the **Create** screen.
3.  You will see the cluster name pre-selected in the **Existing cluster** field. This will be the Cluster that you created in [Create ECS Cluster](#create-ecs-cluster).
4.  In the **Compute configuration** section, add below details:
    * **Compute options** - Select **Launch type**.
    * **Launch Type** - Select **Fargate**.
5. In the **Deployment configuration** section, add below details:
    * **Application type** - Keep the default selection (Service).
    * For the **Family** setting under **Task definition**- Select the task definition you created in the [Create task and container definitions](#create-task-and-container-definitions) section.
    * **Service name** - Give a meaningful name to the service.
    * **Service type** - Select **Replica**.
    * **Desired tasks** - Set as **1**.

    Keep the default values for all the other settings.

6. In the **Networking** section, add below details:
    * **VPC** - Select or review the existing VPC and the subnets.
    * **Security group** - Select **Use the existing security group**.
    * **Security group name** - Select the security group you created in the [Prerequisites](#prerequisites) section. Ensure that you have added the NFS access to the security group.
7. In the **Load balancing** section, add the below details:
    * **Load balancer type** - Select **Application load balancer**.
    * **Application load balancer** - Select **Use an existing load balancer**.
    * **Load balancer** - Select the Application Load Balancer you created in the [Prerequisites](#prerequisites) section.
8. Under **Container**, set up listeners as follows:
    * Port `80` listener - 
        * **Listener** - Select **Create new listener**.
        * **Port** - `80`
        * **Protocol** - Set it to `HTTP`.
        * **Certificate** - Choose the desired certificates.
        * **Target group** - Select **Create new target group**. 
        * **Target group name** - Give a meaningful and unique name.
        * **Health check protocol** - Set it to `HTTP`.
        * **Health check path** - Set it to `/`.
    * Port `443` listener- 
        * **Listener** - Select **Create new listener**.
        * **Port** - `443`
        * **Protocol** - Set it to `HTTPS`.
        * **Certificate** - Choose the desired certificates.
        * **Target group** - Select **Create new target group**. 
        * **Target group name** - Give a meaningful and unique name.
        * **Health check protocol** - Set it to `HTTP`.
        * **Health check path** - Set it to `/`.

9.  In the **Service auto scaling** section, add the below details: 
    * **Use service auto scaling** - Check this setting.
    * **Minimum number of tasks** - Set it to `1`.
    * **Maximum number of tasks** - Set it to `1`.

    Keep the default values for all other settings.

10. Scroll down to the bottom of the page and click the **Create** button. You'll see your service listed under **Services**. This may take some time and once ready the **Status** is shown as **Active**. 
11. Click the **Tasks** tab, and verify the status of the task. The **Last status** shown will be **Running**.

### Verify Appsmith installation

1. Select your cluster from the **Clusters** section, and click the **Tasks** tab.
2. Click the **Task** link to view configurations.
3. Click the **Open address** link available next to the **Public IP** field to access Appsmith.
<ZoomImage src="/img/aws-ecs-ami-find-DNS-to-access-appsmith.png" alt="Use DNS or Public IP to access Appsmith." caption="Use Public IP to access Appsmith" />
4. Fill in your details to create an administrator account.
5. Once you've created an account, you can either start with the free plan or activate your instance with a license key. If you want to generate a license key, sign up on [customer.appsmith.com](https://customer.appsmith.com) to create one, and then proceed to activate your instance using the newly generated license key.


## Connect to Fargate instance

1. Enable the `exec` on the Fargate instance with:
    ```bash
        aws ecs update-service --cluster <CLUSTER_NAME>  --service <SERVICE_NAME> --region <REGION> --enable-execute-command --force-new-deployment
    ```
    The `exec` command will be available once the new deployment is active. 

2. Exec into the Fargate Appsmith instance with:
    ```bash
    aws ecs execute-command --cluster <Cluster Name>
    --task <Task ID> \
    --container appsmith \
    --interactive \
    --command "bash"
    ``` 

3. Once you can access the bash shell, you can execute all commands available in the Appsmith container, like [appsmithctl](/getting-started/setup/instance-management/appsmithctl).

## Install Appsmith Community

To install the Appsmith open source edition (Appsmith Community), replace `appsmith-ee` with `appsmith-ce` in step 4 of the [Create task and container definitions](#create-task-and-container-definitions) section on this page.

## Post-installation configuration

Once you have completed the installation process, consider performing the tasks below to configure and manage your Appsmith instance, enhancing its security and performance, specifically if it's intended for production use.

<div className="containerGridSampleApp">
  <div className="containerColumnSampleApp columnGrid column-one">
    <div className="containerCol">
      <a href="/getting-started/setup/installation-guides/aws-ecs/set-up-high-availability">
        <strong>Set Up High Availability (HA)</strong>
      </a>
    </div>
    <hr/>
    <div className="containerDescription">
      Configure high availability for your Appsmith deployment on AWS ECS on Fargate. This setup ensures that your applications are resilient and can handle increased load effectively. <a href="/getting-started/setup/installation-guides/aws-ecs/set-up-high-availability">Learn more about setting up high availability</a>
    </div>
  </div>

  <div className="containerColumnSampleApp columnGrid column-two">
    <div className="containerCol">
      <a href="/getting-started/setup/instance-configuration/authentication">
        <strong>Configure Single Sign-on (SSO)</strong>
      </a>
    </div>
    <hr/>
    <div className="containerDescription">
      Configure SSO to allow users to sign in using your identity provider. Appsmith supports various SSO providers, including Google and GitHub, using protocols like SAML and OpenID.
      <a href="/getting-started/setup/instance-configuration/authentication">Learn more about configuring SSO</a>
    </div>
  </div>
</div>

<div className="containerGridSampleApp">
  <div className="containerColumnSampleApp columnGrid column-one">
    <div className="containerCol">
      <a href="/getting-started/setup/instance-configuration/email">
        <strong>Configure Email Service</strong>
      </a>
    </div>
    <hr/>
    <div className="containerDescription">
      Set up an email service to enable Appsmith to send notifications and alerts. You can configure providers like AWS SES, Gmail, or others.
      <a href="/getting-started/setup/instance-configuration/email">Learn more about configuring email services</a>
    </div>
  </div>

  <div className="containerColumnSampleApp columnGrid column-two">
    <div className="containerCol">
      <a href="/getting-started/setup/instance-configuration/custom-domain">
        <strong>Set Up Custom Domain and SSL</strong>
      </a>
    </div>
    <hr/>
    <div className="containerDescription">
      Set up a custom domain for your Appsmith instance and secure it with SSL. A default SSL certificate from Let's Encrypt is provided. If you use a custom SSL certificate, you will need to <a href="/getting-started/setup/instance-configuration/custom-domain/custom-ca-root-certificate">
        <strong>install custom CA root certificates</strong>
      </a> to ensure proper security and integration.
      <a href="/getting-started/setup/instance-configuration/custom-domain">Learn more about setting up custom domains and SSL</a>
    </div>
  </div>
</div>

## Troubleshooting

If you are facing issues during deployment, please refer to the guide on [troubleshooting deployment errors](/help-and-support/troubleshooting-guide/deployment-errors).

If you continue to face issues, contact the support team using the chat widget at the bottom right of this page.

## Further reading

- [Configure ECS Installation](/getting-started/setup/instance-configuration#configure-ecs-installations)
- [Manage instance](/getting-started/setup/instance-management/)
- [Tutorials](/getting-started/tutorials/)