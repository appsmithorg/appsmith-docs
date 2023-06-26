# AWS ECS on Fargate
This document guides you through installing Appsmith using AWS ECS on Fargate.

## Prerequisites

1. [**Register with Amazon Web Services**](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/) - You may skip this step if you already have an Amazon Web Services account.

2. [**Create a security group:**](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-security-groups.html#creating-security-group) - You can skip this step if you already have an existing security group with ports 80 and 443. Appsmith requires ports 80 and 443 for HTTP access. To edit the Inbound Rules and make ports 80 and 443 accessible from anywhere, see [Add rules to a security group](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-security-groups.html#adding-security-group-rule)

3. **Provision of an Application Load Balancer** - You can skip this step if you already have an ALB, but ensure that the listeners for ports 80 and 443 are available.

4. **Create an EFS filesystem:**

    1. Navigate to **AWS EFS** on the console and hit the *Create* button.
    2. Set the parameters like VPC (should be the same as the ECS cluster) and storage class as suiting your requirement.

    :::caution
    Ensure that the EFS, ECS cluster, and Fargate instances are all in the same VPC.
    :::
      
    3. Click the EFS created and navigate to the Network tab to ensure the mount-target is made in the same availability zone as the ECS cluster.
    4. Create a new security group to allow inbound and outbound NFS traffic.
    5. Attach the security group to the EFS mount-target.

5. **Create the ECS task role:**
    To enable the `exec` command, follow the steps below:

    1. Go to the **IAM** console and select **Roles**.
    2. Click Create Role.
    3. Select trust entity:
        1. Select the Trusted entity type as AWS Service.
        2. Select **Elastic Container Service Task** as the use case, and hit next.

    4. Add permission
        1. Add `SecretsManagerReadWrite`.
        2. Click Create Policy to open the policy editor, and choose JSON mode.

        ```json title="Custom IAM Policy"
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

    5. Name the role and review that the IAM task role has a trust policy that specifies the `ecs-tasks.amazonaws.com` service with the `sts:AssumeRole` permission as shown below:

    ```json title="Trust Policy"
    {
        "Version": "2008-10-17",
        "Statement": [
            {
                "Sid": "",
                "Effect": "Allow",
                "Principal": {
                    "Service": "ecs-tasks.amazonaws.com"
                },
                "Action": "sts:AssumeRole"
            }
        ]
    
    }

    ```
    6. Click **Create**.
    
6. **Provision an external DB v5.0 instance** - Obtain the MongoDB URI, which includes the user credentials for data access.
Learn more about [Custom MongoDB](getting-started/setup/instance-configuration/custom-mongodb-redis#custom-mongodb)

:::danger
Please don't run the built-in embedded MongoDB with the EFS, as it could cause the Appsmith instance to crash.
:::

## ECS overview

![ECS OVERVIEW](/img/ecs-overview.png)

## Deploy Appsmith
   
1. [Create an ECS Cluster](#create-an-ecs-cluster)
2. [Create Task and Container Definitions](#create-task-and-container-definitions)
3. [Create and Run an ECS Service](#create-and-run-an-ecs-service)

Switch to the old AWS console UI to follow the steps below.

### Create an ECS cluster

1. Navigate to Amazon ECS, choose clusters on the sidebar, and select `Create Cluster`.

    ![Creating Cluster in AWS ECS](/img/Create-cluster-with-aws-ecs.png)
2. Choose **Networking Only**, and select the next step.
3. Enter your cluster name.
4. Create a VPC by defining the CIDR block and subnets. You can skip this step if you already have a VPC.
5. Enable CloudWatch Container Insights.
6. Hit the **Create button**.

### Create task and container definitions

Once the cluster is created, you need to create a task that runs on the cluster formed in [**Step 1**](#step-1-create-an-ecs-cluster).

1. On the sidebar, choose Task Definitions and Create a new Task Definition.
2. Choose Fargate as the launch type, and proceed to the next step.
3. Enter the task definition name.
4. Set the task role to the one created in step 5 **Create the ECS task role** under [Prerequisites](/getting-started/setup/installation-guides/aws-ecs-on-fargate#prerequisites)
5. Select the default Network mode.
6. Set Linux as the Operating system family.
7. Set the Task Execution Role option to [**Create new role**].
8. Set the required task size for memory & CPU (Minimum requirement: 2vCPU and 4 GB Memory).
9. Go to the **Volumes** section and add a new volume. Enter the Name as `appsmith_stack`, set the Volume type as **EFS**, and set the **File System ID** to the EFS filesystem created in the prerequisite step. Leave the remaining fields with the default values.

    ![EFS Volume Configuration](/img/ecs-efs-fargate.png)

10. Configure the Appsmith container.
    1. Click the **Add container** button.
    2. Enter the container name, and set the Image to `appsmith/appsmith-ce`.
    3. Add port mappings for ports **80->80,443->443**.
    4. Set the _Mount points Source volume_ to `appsmith_stack` and set the Container path to `/appsmith-stacks`.

    ![Storage Setting](/img/storage-settings-ecs-fargate-efs.png)

    5. You can configure the Environment Values for the Appsmith in the Environment Section. For sensitive values, it's **recommended** you create secrets and set the `env` value using the `ValueFrom` option by specifying the `arn` of the secret created.

    6. Set the following Environment Variables:

        - `APPSMITH_ENCRYPTION_PASSWORD`: Encryption password to encrypt all credentials in the database. You can use any random string (Eg. test). The more random, the better.
        - `APPSMITH_ENCRYPTION_SALT`: Use encryption salt to encrypt all credentials in the database. You can use any random string (Eg. test). The more random, the better.
        - `APPSMITH_SUPERVISOR_PASSWORD` : Password to access the supervisor console to monitor the processes in the Appsmith container.
        - `APPSMITH_MONGODB_URI` : Enter the URI of the external MongoDB v5 instance by adding a new env key.
        - `APPSMITH_EMBEDDED_DB` to `0` . This disables embedded mock databases which is not supported on EFS volume.

        ![Container Environment](/img/container_environment_aws_fargate.png)

    7. Configure the health check to the following settings:

        - Command: `CMD-SHELL, curl http://localhost/api/v1/health`
        - Interval: 10 seconds
        - Timeout : 5 seconds
        - Start periods: 160 seconds
        - Retries: 3

        ![Health Check](/img/health_check_appsmith_fargate.png)

    8. Enable auto-configure CloudWatch Logs for log configuration.
    9. Hit **Add**.
    10. Finally, hit the **Create** button.

### Create and run an ECS service

1. Navigate to the **clusters dashboard** and click the ECS cluster created in [**Step 1**](aws-ecs#step-1-create-an-ecs-cluster).
2. On the cluster details, under the **Services tab** hit the **create** button.

![Cluster Dashboard](/img/ecs-cluster-service-creation.png)

3. Configure the Service:

    1. Select **Fargate** as Launch Type.
    2. Select the **Task Definition** created in [**Step 2**](#step-2-create-task-and-container-definitions) with the latest revision.
    3. Select the **Cluster** created in [**Step 1**](#step-1-create-an-ecs-cluster).
    4. Enter the service name.
    5. Select the **Replica** Service type and the **Number of Tasks** to 1.
    7. Leave the remaining fields and sections with the **default values**, and proceed to the next step.


4. Configure the network:
    1. Select the VPC and the subnets.
    2. Update the security group to add the security group created in the prerequisite step, along with the security group with NFS access.
    3. Load Balancing:
       1. Select Application Load Balancer.
       2. Select the ALB created in the prerequisite step.
       3. Set the Listener for port 80 and click Add to the load balancer.
       4. Create a new Production listener port for port 80.
       5. Set the Production listener protocol to HTTP.
       6. Set a Target Group to create new.
       7. Set the Health Check pattern to `/api/v1/health` and evaluation order to 1.
       8. Repeat the same steps to add a Listener for port 443 but with HTTPS protocol.

    ![Configure Network](/img/configure_network_appsmith_fargate.png)

5. Set Auto Scaling - Proceed to the next step with the **default** configuration.

6. Review the Service configurations and hit the **Create Service** button.

7. The following screen is shown with the **launch status**, click the **View Service** button.

8. You are directed to the **service detail** page. Your task is listed under the **Tasks tab** on the cluster. Refresh the table until the status is **RUNNING**.

9. Obtain the DNS of your ALB and hit it with your browser to access the Appsmith instance.

## Run commands on the Fargate instance
1. Enable ECS `exec` on the Fargate instance with:

```bash
aws ecs update-service --cluster <Cluster Name>  --service <Service Name> --region <Region> --enable-execute-command --force-new-deployment
```

Wait until a new deployment is rolled out, and the instance has exec enabled on it.

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

If you encounter any errors during this process, check out the [debugging deployment errors](/help-and-support/troubleshooting-guide/deployment-errors). If you are still facing an issue, please reach out to [support@appsmith.com](mailto:support@appsmith.com) or join the [Discord Server](https://discord.com/invite/rBTTVJp) to speak to the Appsmith team directly.

## Further reading

* [Configuring ECS Installations](/getting-started/setup/instance-configuration#configure-ecs-installations)
* [Managing the Appsmith instance](/getting-started/setup/instance-management/)
* [Tutorials](/getting-started/tutorials/)

