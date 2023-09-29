# AWS ECS on Fargate

This page provides steps to install Appsmith using AWS ECS on Fargate.

## Prerequisites

* Amazon Web Services (AWS) account. If you don't have one, [Create an AWS Account](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/).
* Switch to the Classic Amazon Web Console.
* If you don't already have an ALB, ensure that you have listeners set up for ports 80 and 443. You can skip this step if you have an existing ALB with the required configuration.
* An Amazon Elastic File System (EFS) set up. If you don't have an Amazon EFS, create by following the below steps:
    - Go to **AWS EFS** in the Amazon Management Console and click **Create**.
    - Configure parameters for VPC and storage class. 
    - Verify that the EFS, ECS cluster, and Fargate instances are in the same VPC.
    - Go to the Network tab for the ECS that you created, and ensure the mount-target is available in the same availability zone as the ECS cluster.
    - An Amazon Security group with ports 80, 443, and 22 accessible. If you don't have one, [Create a Security Group](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-security-groups.html#creating-security-group)
    - To enable port access, [add an inbound rule](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-security-groups.html#adding-security-group-rule) for the port ranges 80, 443, and 22 to the security group you created above.
    - Attach the security group to the EFS mount target.
* An ECS Task Role set up. If you don't have a task role, create by following the below steps:
    - Go to the **IAM** console and select **Roles**.
    - Click **Create Role**.
    - Select **AWS Service** as the trusted entity type.
    - Choose **Elastic Container Service Task** as the use case.
    - Add permissions, including `SecretsManagerReadWrite`.
    - Give a meaningful name to the role and ensure it has a trust policy for `ecs-tasks.amazonaws.com` with the `sts:AssumeRole` permission.
* An external MongoDB instance hosting a MongoDB V5.0 or later, and credentials to access data. You will not be able to use the built-in MongoDB with EFS as it causes the Appsmith instance to crash.

## Install Appsmith
Follow the below steps to install Appsmith:

### Create ECS cluster

1. Go to Classic Amazon Web Console and click **Clusters** on the sidebar, and click **Create Cluster**.
  <figure>
    <img src="/img/aws-ecs-ec2-classic-web-console.png" style={{width: "100%", height: "auto"}} alt="Create Cluster using Classic Amazon Web Console" />
    <figcaption align="center"><i>Create Cluster using Classic Amazon Web Console</i></figcaption>
 </figure>

2. Choose **Networking only** as the cluster template and click the **Next step** button.
3. Give a desired name to the **Cluster name** field.
4. Select the VPC that you created in the [Prerequisites](#prerequisites) section.
5. Scroll down to the **CloudWatch Container Insights** section, and tick the **Enable container insights** checkbox.
6. Click the **Create** button. You will see a launch status screen as shown below:

 <figure>
    <img src="/img/aws_ecs_ec2_create_cluster_status.png" style={{width: "100%", height: "auto"}} alt="A launch status screen shows the ECS Cluster status" />
    <figcaption align="center"><i>A launch status screen shows the ECS Cluster status</i></figcaption>
 </figure>

7. Click the **View cluster** button to see your cluster.

### Create task and container definitions

Follow these steps to create task and container definitions for your cluster:

1. Click **Task Definitions** from the sidebar, and click **Create new Task Definition**.
2. Select **Fargate** as launch type compatibility, and click the **Next step** button.
3. Give a desired name to **Task definition Name**.
4. Select the **Task role** that you created in the [Prerequisites](#prerequisites) section.
5. Select the default Network mode.
6. Set Linux as the Operating system family.
7. Select the **Create new role** option for **Task Execution Role**.
8. Set the required task size for memory & CPU (Minimum of 2vCPU and 4 GB Memory is needed).
9. Go to the **Volumes** section and add a new volume as shown below:
    * **Name** - Give a desired name.
    * **Volume type** - EFS.
    * **File System ID** - EFS file system created in the [prerequisites](#prerequisites) section. 
    * Keep the default values for the remaining fields.
10. Configure the Appsmith container.
    1. Click the **Add container** button.
    2. Enter the container name, and set the Image to `appsmith/appsmith-ce`.
    3. Scroll down to the **Port mappings** section.
    4. Add port mappings for ports 80 and 443.
    4. Set the _Mount points Source volume_ to `appsmith_stack` and set the Container path to `/appsmith-stacks`.
11. You can configure the environment values for the Appsmith in the Environment Section. For sensitive values, it's **recommended** you create secrets and set the `env` value using the `ValueFrom` option by specifying the `arn` of the secret created.
12. Set the following Environment Variables:
    - `APPSMITH_ENCRYPTION_PASSWORD`: Add a password to encrypt all credentials in the database.
    - `APPSMITH_ENCRYPTION_SALT`: Use encryption salt to encrypt all credentials in the database.
    - `APPSMITH_SUPERVISOR_PASSWORD` : Password to access the supervisor console to monitor the processes in the Appsmith container.
    - `APPSMITH_MONGODB_URI` : Enter the URI of the external MongoDB (v5.0 or later) instance.
    - `APPSMITH_ENABLE_EMBEDDED_DB` to `0`. This disables embedded mock databases which is not supported on EFS volume.
13. Configure the health check to the following settings:
    - Command: `CMD-SHELL, curl http://localhost/api/v1/health`
    - Interval: 10 seconds
    - Timeout : 5 seconds
    - Start periods: 160 seconds
    - Retries: 3
14. Check the **Auto-configure CloudWatch Logs** checkbox for **Log configuration**.
15. Click **Add** button.
16. Scroll down to the bottom of the page, and click the **Create** button.

### Create and run ECS service

Follow these steps to create and run an ECS service:

1.  Go to the cluster dashboard and click the name of the ECS cluster that you created in [Create ECS Cluster](#create-ecs-cluster).
2. On the cluster details, click **Create** button under the **Services** tab.
3. Configure the Service:
    * **Launch Type** - Select Fargate.
    * **Task Definition** - Select the task definition you created in [Create task and container definitions](#create-task-and-container-definitions) with the latest revision.
    * **Cluster** - Select the cluster you created in [Create ECS Cluster](#create-ecs-cluster).
    * **Service name** - Give a desired name.
    * **Service type** - Select Replica.
    * **Number of Tasks** - Set as 1.
    * For other attributes, move ahead with the default selection, and click the **Next step** button.
4. Configure the Network:
    * Select the VPC and the subnets.
    * Select the security group that you created in the [prerequisites](#prerequisites) section, and add the security group with NFS access.
    * Select Application Load Balancer that you created in the [prerequisites](#prerequisites) section.
    * Set the listener for port 80 and click **Add to the load balancer** button.
    * Create a new production listener port for port 80.
    * **Production listener protocol** - Set it to HTTP.
    * **Target Group** - Select **create new**.
    * Set the Health Check pattern to `/api/v1/health` and evaluation order to 1.
    * Repeat the same steps to add a Listener for port 443 and protocol as HTTPS.
5. Keep the default selection for the **Auto Scaling** page and click the **Next step** button.
6. Review the details and click **Create Service**. You see a launch status screen as shown below:

    <figure>
    <img src="/img/aws_ecs_ec2_create_ecs_service_status.png" style={{width: "100%", height: "auto"}} alt="A launch status screen shows the ECS Service Status." />
    <figcaption align="center"><i>A launch status screen shows the ECS Service Status</i></figcaption>
    </figure>

7. Get the Domain Name or public IP of your ALB to access Appsmith.

## Connect to Fargate instance

1. Enable the `exec` on the Fargate instance with:

  ```bash
    aws ecs update-service --cluster <CLUSTER_NAME>  --service <SERVICE_NAME> --region <REGION> --enable-execute-command --force-new-deployment
  ``` 
The instance will have the `exec` enabled once the new deployment is active.

2. Exec into the Fargate Appsmith instance with:
    ```bash
    aws ecs execute-command <Cluster Name>
        --task <Task ID>\
        --container appsmith \
        --interactive \
        --command "bash"
    ```
3. Once you have access to the bash shell, you can execute all commands that are available in the Appsmith container, like [appsmithctl](/getting-started/setup/instance-management/appsmithctl).

## Troubleshooting

## Troubleshooting

Some common errors that you may face during installation:

- [Unable to access Appsmith](/help-and-support/troubleshooting-guide/deployment-errors#unable-to-access-appsmith)
- [Containers failed to restart](/help-and-support/troubleshooting-guide/deployment-errors#containers-failed-to-start)

If you continue to face issues, contact the support team using the chat widget at the bottom right of this page.

## Further reading

* [Configuring ECS Installations](/getting-started/setup/instance-configuration#configure-ecs-installations)
* [Managing the Appsmith instance](/getting-started/setup/instance-management/)
* [Tutorials](/getting-started/tutorials/)

