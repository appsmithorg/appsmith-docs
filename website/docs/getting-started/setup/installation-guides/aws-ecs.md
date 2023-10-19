---
description: Deploy Appsmith on the ECS cluster using EC2 instance.
sidebar_position: 5
---

# AWS ECS for EC2
This page provides steps to install Appsmith on a single node EC2 Linux + Networking ECS Cluster using an EC2 instance.

## Prerequisites
* Amazon Web Services (AWS) account. If you don't have one, [Create an AWS Account](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/).
* An Amazon EC2 key pair. If you don't have one, [Generate an SSH Key pair](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html#having-ec2-create-your-key-pair).
* An Amazon Security group with ports 80, 443, and 22 accessible. If you don't have one, [Create a Security Group](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-security-groups.html#creating-security-group)
* To enable port access, [add an inbound rule](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-security-groups.html#adding-security-group-rule) for the port ranges 80, 443, and 22 to the security group you created above.
* Switch to the Classic Amazon Web Console.
* Ensure you have created the security group and the SSH key pair in the same region.

## Install Appsmith
To deploy Appsmith on the Amazon ECS cluster that has a single node, you need to complete the below essential steps:

### Create ECS cluster

1. If you have an **EC2 Linux + Networking single node** ECS Cluster that has the **Number of Instances** set to `1`, move to the create task and container definitions step. If you don't have one, follow these steps to create a single-node ECS Cluster:
2. Go to Classic Amazon Web Console and click **Clusters** on the sidebar.
    <figure>
    <img src="/img/aws-ecs-ec2-classic-web-console.png" style={{width: "100%", height: "auto"}} alt="Create Cluster using Classic Amazon Web Console" />
    <figcaption align="center"><i>Create Cluster using Classic Amazon Web Console</i></figcaption>
    </figure>

3. Click the **Create Cluster** button.
4. Choose **EC2 Linux + Networking** as the cluster template.
5. Click the **Next step** button.
6. Give a desired name to the **Cluster name** field.
7. Configure the instance as shown below:

    | Attribute | Value |
    |------------------------|------------------------------------------| 
    | **Provisioning Model** | On-Demand Instance |
    | **EC2 instance type** | A minimum `t3.medium` or `t3a.medium` is needed|
    | **Number of instances** | 1 |
    | **EC2 AMI ID** | Amazon Linux2 AMI |
    | **Key pair** | Select the Key pair that you created in the [Prerequisites](#prerequisites) step |

8. Scroll down to the **Networking** section, and configure as shown below:

    | Attribute | Value |
    |------------------------|------------------------------------------|
    | **VPC** | Either create a new VPC or select an existing one from the dropdown |
    | **Subnets** | Select the subnet that has public access |
    | **Auto-assign public IP** | Select **Enabled** from the dropdown|
    | **Security group** | Select the security group that you created in the [Prerequisites](#prerequisites) step |

9. Scroll down to the **CloudWatch Container Insights** section, and tick the **Enable container insights** checkbox.
10. Click the **Create** button. You see a launch status screen as shown below:

    <figure>
    <img src="/img/aws_ecs_ec2_create_cluster_status.png" style={{width: "100%", height: "auto"}} alt="A launch status screen shows the ECS Cluster status" />
    <figcaption align="center"><i>A launch status screen shows the ECS Cluster status</i></figcaption>
    </figure>

11. Click the **View cluster** button to see your cluster        

### Create task and container definition

1. Click **Task Definitions** from the sidebar.
2. Click **Create new Task Definition**.
3. Select **EC2** as launch type compatibility.
4. Click the **Next step** button.
5. Configure task and container definitions as shown below:

    | Attribute | Value |
    |------------------------|------------------------------------------|
    | **Task definition Name** | Give a desired name |
    | **Task role** | - |
    | **Task execution role** | - |
    | **Task memory (MiB)** | Minimum 3 GB is needed |
    | **Task CPU (unit)** | Minimum 1 virtual CPU is needed |

    For other attributes, move ahead with the default selection.

6. Scroll down to the **Volumes** section.
7. Click **Add volume** button.
8. Add volume as shown below:

    | Attribute | Value |
    |------------------------|------------------------------------------|
    | **Name** | Give a desired name |
    | **Volume type** | Bind Mount |
    | **Source path** | `/appsmith/stacks` | 

    :::danger Attention
    The **Bind Mount** volume type creates a mount directory named `/appsmith/stacks` on the host EC2 instance. If you delete the cluster or the node, the Appsmith data is also lost.
    :::

9. Click **Add** button.

10. Scroll up to the **Container definitions** section.

11. Click **Add container** button.

12. Add container definition as shown below: <a id="container-definition-ecs"></a>

    | Attribute | Value |
    |------------------------|------------------------------------------|
    | **Container name** | Give a desired name |
    | **Image** |  Give the image as `appsmith/appsmith-ee`|
    | **Memory Limits (MiB)** | Give a desired value. Minimum 3000 is needed |

13. Scroll down to the **Port mappings** section.
14. Add port 80 to the Host and Container port fields, and set the protocol as `tcp`.
15. Click **Add port mapping** and add port 443 to the Host port and the Container port fields, and set the protocol as `tcp`.
16. Scroll to the **Storage and Logging** section.
17. Add the Mount points as shown below:

    | Attribute | Value |
    |------------------------|---------------------------------------------|
    | **Source volume** | The volume name that you added for Appsmith |
    | **Container path** | `/appsmith-stacks` |
    | **Log configuration** | Check the **Auto-configure CloudWatch Logs** checkbox |

18. Scroll down to the bottom of the page, and click **Add** button.
19. Scroll down to the bottom of the page, and click **Create** button.

### Create and run ECS service

1. Go to the cluster dashboard and click the name of the ECS cluster.
2. Click **Create** under the **Services** tab.
3. Configure service as shown below:

    | Attribute | Value |
    |------------------------|---------------------------------------------|
    | **Launch type** | Select EC2 |
    | **Task definition** | Select the task definition that you created |
    | **Service name** | Give a desired name |
    | **Service type** | Select DAEMON |

    For other attributes, move ahead with the default selection.

4. Click the **Next step** button.  
5. Keep the default selection for the **Configure Network** page and click the **Next step** button.
6. Click the **Next step** button on the **Set Auto Scaling** page.
7. Review the details and click **Create Service**. You see a launch status screen as shown below:

    <figure>
    <img src="/img/aws_ecs_ec2_create_ecs_service_status.png" style={{width: "100%", height: "auto"}} alt="A launch status screen shows the ECS Service Status." />
    <figcaption align="center"><i>A launch status screen shows the ECS Service Status</i></figcaption>
    </figure>
 
### Verify Appsmith installation

1. Go to the **Clusters** section in the sidebar.
2. Select the desired **Cluster name**.
3. Open the **Tasks** tab.
4. Choose the specific **Task**.
5. Click the link next to the **EC2 instance id**.
6. Click the **Instance ID** to access the **Instance Summary** page.
7. Copy the **Public IPv4 address** from the **Instance Summary** page.

    <figure>
    <img src="/img/aws-ecs-ami-find-DNS-to-access-appsmith.png" style={{width: "100%", height: "auto"}} alt="Use DNS or Public IP to access Appsmith." />
    <figcaption align="center"><i>Use DNS or Public IP to access Appsmith</i></figcaption>
    </figure>

8. Paste it in a browser tab to access Appsmith.

9. Fill in your details to create an administrator account.

10. Once you've created an account, you can either start with the free plan or activate your instance with a license key. If you want to generate a license key, sign up on [customer.appsmith.com](https://customer.appsmith.com) to create one, and then proceed to activate your instance using the newly generated license key.

## Install Appsmith Community

To install the Appsmith open source edition (Appsmith Community), replace `appsmith-ee` with `appsmith-ce` in the [container definition](#container-definition-ecs) on this page.

## Troubleshooting

Some common errors that you may face during installation:

* [Unable to access Appsmith](/help-and-support/troubleshooting-guide/deployment-errors#unable-to-access-appsmith) 
* [Containers failed to restart](/help-and-support/troubleshooting-guide/deployment-errors#containers-failed-to-start)

If you continue to face issues, contact the support team using the chat widget at the bottom right of this page.

## Further reading

- [Configuring ECS Installations](/getting-started/setup/instance-configuration#configure-ecs-installations)
- [Manage Appsmith instance](/getting-started/setup/instance-management)
