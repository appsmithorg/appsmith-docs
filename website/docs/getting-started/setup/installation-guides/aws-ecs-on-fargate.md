---
description: Deploy Appsmith on the ECS cluster using Fargate.
---

# AWS ECS on Fargate

This page provides steps to install Appsmith on AWS ECS using Fargate.

## Prerequisites

* **Amazon Web Services (AWS) account** - If you don't have one, [Create an AWS Account](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/).
* **Application Load Balancer (ALB)** - If you already have an ALB, make sure you have listeners set up for ports 80 and 443. Otherwise, provision an [Application Load Balancer](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-application-load-balancer.html#configure-load-balancer).
* **Amazon Elastic File System (EFS)** - If you haven't set up an EFS yet, follow these steps:
    - Go to **AWS EFS** in the Amazon Management Console and click the **Create file system** button.
    - Give a meaningful name to your file system and configure VPC. 
    - Refresh the file system listing, and select the file system you created above.
    - Go to the **Network** tab, and click **Manage** button on the right side.
    - Select the Amazon Security group with port 2049 accessible. If you don't have one:
        - [Create a Security Group](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-security-groups.html#creating-security-group)
        - To enable port access, [add an inbound rule](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-security-groups.html#adding-security-group-rule) for the port 2049 for NFS access to the security group you created above.
        - Attach the security group to the EFS mount target.
* **ECS Exec Policy** - Set up a policy to allow ECS Exec capability by following these steps:
    - Go to the **IAM** console and select **Policies**.
    - Click **Create Policy**.
    - On _Specify Permissions_ screen, choose JSON for policy editor, and update the policy with the below details:

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
    - Click the **Next** button.
    - On _Review and Create_ screen, give a meaningful name to your policy and click the **Create Policy** button. The new policy will be available in the list of policies.
* **ECS Task Role** - Set up an ECS Task Role by following the below steps:
    - Go to the **IAM** console and select **Roles** 
    - Click the **Create Role**.
    - On the _Name, review, and create_ screen, give a meaningful name to the role.
    - Select the trusted entity type.
    - Choose **Elastic Container Service** as _Service or use case_.
    - Select **Elastic Container Service Task** for _Use case_.
    - On the _Add permissions_ screen, search the policy name you created above and add it to the role. Similarly, search for the `SecretsManagerReadWrite` policy and add it to the role.
    
* **External MongoDB Instance** - Ensure you can access an external MongoDB instance hosting MongoDB V5.0 or later. You will not be able to use the built-in MongoDB with EFS as it will cause the Appsmith instance to crash.

## Install Appsmith
Follow the below steps to install Appsmith:

### Create ECS cluster

1. Go to Classic Amazon Web Console and click **Clusters** on the sidebar, and click **Create Cluster**.
  <figure>
    <img src="/img/aws-ecs-ec2-classic-web-console.png" style={{width: "100%", height: "auto"}} alt="Create Cluster using Classic Amazon Web Console" />
    <figcaption align="center"><i>Create Cluster using Classic Amazon Web Console</i></figcaption>
 </figure>

2. Choose **Networking only** as the cluster template and click the **Next step** button.
3. Give a meaningful name to the **Cluster name** field.
4. Scroll down to the **CloudWatch Container Insights** section, and tick the **Enable container insights** checkbox.
5. Click the **Create** button. You will see a launch status screen as shown below:

 <figure>
    <img src="/img/aws_ecs_fargate_create_cluster_status.png" style={{width: "100%", height: "auto"}} alt="A launch status screen shows the ECS Cluster status" />
    <figcaption align="center"><i>A launch status screen shows the ECS Cluster status</i></figcaption>
 </figure>

6. Click the **View cluster** button to see your cluster.

### Create task and container definitions

Follow these steps to create task and container definitions for your cluster:

1. Click **Task Definitions** from the sidebar, and click **Create new Task Definition**.
2. Select **Fargate** as launch type compatibility, and click the **Next step** button.
3. Give a desired name to **Task definition Name**.
4. Select the **Task role** that you created in the [Prerequisites](#prerequisites) section.
5. Select the default Network mode.
6. Set Linux for the **Operating system family**.
7. Select the **Create new role** option for **Task Execution Role**.
8. Set the required task size for memory & CPU (you need at least 2vCPU and 4 GB Memory).
9. Scroll down to the **Volumes** section and add a new volume as shown below:
    * **Name** - Give a desired name.
    * **Volume type** - EFS.
    * **File System ID** - EFS file system created in the [Prerequisites](#prerequisites) section. 
    * Keep the default values for the remaining fields.
    * Click **Add** button.
10. Scroll up to configure the Appsmith container.
    1. Click the **Add container** button.
    2. In the _STANDARD_ section, provide details as below:
        - **Container Name** - Give a meaningful name to the container.
        - **Image** - `appsmith/appsmith-ce`.
        - **Port mappings** - Add port mappings for ports 80 and 443. Keep the protocol as `tcp`.
    3. Click the _Advanced container configuration_, and add details as below:
        * In the _HEALTH_ section, configure the health check as below:
            - Command: `CMD-SHELL, curl http://localhost/api/v1/health`
            - Interval: 10 seconds
            - Timeout : 5 seconds
            - Start periods: 160 seconds
            - Retries: 3
        * In the _ENVIRONMENT_ section, set the below variables in the **Environment variables** subsection:
            - `APPSMITH_ENCRYPTION_PASSWORD`: Add a password to encrypt all credentials in the database.
            - `APPSMITH_ENCRYPTION_SALT`: Use encryption salt to encrypt all credentials in the database.
            - `APPSMITH_SUPERVISOR_PASSWORD` : Password to access the supervisor console to watch the processes in the Appsmith container.
            - `APPSMITH_MONGODB_URI` : Enter the URI of the external MongoDB (v5.0 or later) instance.
            - `APPSMITH_ENABLE_EMBEDDED_DB` to `0`. This disables embedded mock databases on EFS volume.
        * In the _STORAGE AND LOGGING_ section, provide details as below for **Mount points**:
            - **Source volume** - `appsmith_stack` 
            - **Container path** - `/appsmith-stacks`
    4. Check the **Auto-configure CloudWatch Logs** checkbox for **Log configuration**.
    5. Click **Add** button. You will see the container name available under _Container definitions_.
11. Scroll down to the bottom of the page and click the **Create** button.

<figure>
    <img src="/img/aws_ecs_fargate_create_task_def_status.png" style={{width: "100%", height: "auto"}} alt="A launch status screen shows the task definition status" />
    <figcaption align="center"><i>A launch status screen shows the task definition status</i></figcaption>
 </figure>

12. Click the **View task definition** button to see your task definition.

### Create and run ECS service

Follow these steps to create and run an ECS service:

1.  Go to the cluster dashboard and click the ECS cluster name that you created in [Create ECS Cluster](#create-ecs-cluster).
2. On the cluster details, click **Create** button under the **Services** tab.
3. On the _Configure the Service_ screen, add below details:
    * **Launch Type** - Select Fargate.
    * **Task Definition** - Select the task definition you created in [Create task and container definitions](#create-task-and-container-definitions) with the latest revision.
    * **Cluster** - Select the cluster you created in [Create ECS Cluster](#create-ecs-cluster).
    * **Service name** - Give a meaningful name to your service.
    * **Service type** - Select Replica.
    * **Number of Tasks** - Set as 1.
    * Keep the default selection for other properties and click the **Next step** button.
4. On the _Configure the Network_ screen, add below details:
    * Select the VPC and the subnets.
    * Select the security group you created in the [Prerequisites](#prerequisites) section, and add the security group with NFS access.
    * Select the Application Load Balancer you created in the [Prerequisites](#prerequisites) section.
    * Set the listener for port 80 and click the **Add to the load balancer** button.
    * Create a new production listener port for port 80.
    * **Production listener protocol** - Set it to HTTP.
    * **Target Group** - Select **create new**.
    * Set the Health Check pattern to `/api/v1/health` and evaluation order to 1.
    * Repeat the same steps to add a listener for port 443 and protocol as HTTPS.
    * Click the **Next step** button.
5. On the _Set Auto Scaling_ screen, keep the default selection for the **Auto Scaling** page and click the **Next step** button.
6. Review the details and click **Create Service**. 
7. Get the Domain Name or public IP of your ALB to access Appsmith.

## Connect to Fargate instance

1. Enable the `exec` on the Fargate instance with:

  ```bash
    aws ecs update-service --cluster <CLUSTER_NAME>  --service <SERVICE_NAME> --region <REGION> --enable-execute-command --force-new-deployment
  ``` 
The `exec` command will be available once the new deployment is active.

2. Exec into the Fargate Appsmith instance with:
    ```bash
    aws ecs execute-command <Cluster Name>
        --task <Task ID>\
        --container appsmith \
        --interactive \
        --command "bash"
    ```
3. Once you can access the bash shell, you can execute all commands  available in the Appsmith container, like [appsmithctl](/getting-started/setup/instance-management/appsmithctl).

## Troubleshooting

Some common errors that you may face during installation:

- [Unable to access Appsmith](/help-and-support/troubleshooting-guide/deployment-errors#unable-to-access-appsmith)
- [Containers failed to restart](/help-and-support/troubleshooting-guide/deployment-errors#containers-failed-to-start)

If you continue to face issues, contact the support team using the chat widget at the bottom right of this page.

## Further reading

* [Configuring ECS Installations](/getting-started/setup/instance-configuration#configure-ecs-installations)
* [Managing the Appsmith instance](/getting-started/setup/instance-management/)
* [Tutorials](/getting-started/tutorials/)
