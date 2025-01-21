---
description: This page outlines the best practices for Appsmith deployment.
---

# Self-hosting Best Practices

This page outlines the best practices for deploying, managing, and maintaining Appsmith in a production environment. Following these recommendations ensures high availability, security, performance, and smooth upgrades.

:::tip Appsmith Managed Hosting
Appsmith’s managed hosting service ensures your deployment adheres to industry best practices for hosting and maintaining Appsmith applications. For more information or to get started with Appsmith managed hosting, contact the sales team at [sales@appsmith.com](mailto:sales@appsmith.com).
:::

## Platform selection and deployment

Selecting the right platform and deployment method is crucial for the scalability and reliability of your Appsmith instance.

- **Platform recommendations**:
  - Appsmith works best on **AMD** and **ARM** architectures across cloud providers like **AWS**, **Azure**, **GCP**, and **DigitalOcean**. For more information, see [Installation](/getting-started/setup/installation-guides) guides.
  - The preferred method for production environments is **Kubernetes**, as it supports high availability and scalability, managing Appsmith's dependencies like MongoDB and Redis within Kubernetes pods without requiring external instances. For more information, see [Kubernetes Installation](/getting-started/setup/installation-guides/kubernetes) guide.
  - If using serverless platforms such as **AWS ECS**, external instances of MongoDB and Redis must be provisioned, with **MongoDB Atlas** and **Elasticache** recommended. For more information, see [AWS ECS Installation](/getting-started/setup/installation-guides/aws-ecs/aws-ecs-on-ec2) guide.

- **Instance recommendations**:
  - **Minimum instance size**: `t3.medium` or equivalent. This should scale well for hundreds of users.
  - **For 500 concurrent users**, we recommend `t3.large` or larger instances.
  - **Free disk space**: Always ensure at least `10-15GB` of free space.
  - **Node separation**: For better data safety, keep separate node groups for **MongoDB**, **Redis**, **Postgres**, and the **Appsmith pod** in Kubernetes.
  
## Environment configuration

Proper instance and environment configuration ensures reliability, performance, and easier maintenance.

- Set up **separate instances** for **Production**, **Staging**, and **Development** to avoid testing or upgrade impacts on production.

- To ensure that Appsmith remains available during traffic spikes, configure high availability. For Kubernetes follow the [High Availability Setup on Kubernetes](/getting-started/setup/installation-guides/kubernetes/configure-high-availability) guide. For AWS ECS, refer to the [High Availability Setup on AWS ECS](/getting-started/setup/installation-guides/aws-ecs/set-up-high-availability) guide, and for Google Cloud Run, [High Availability Setup on Google Cloud Run](/getting-started/setup/installation-guides/google-cloud-run/manage-traffic) guide.

- Ensure you have an NFS persistent volume setup and has allocated at least **`3GB` of persistent storage** for Appsmith. When using AWS Fargate as a deployment platform, ensure you've set up AWS EFS as a persistent volume. For more information, see [Upgrade to AWS EFS](/getting-started/setup/installation-guides/aws-ecs/migrate-bind-mount-to-efs) guide.

- Avoid spot instances for **MongoDB**, **Redis**, and **Postgres** as the spot instances are unexpectedly terminated. Always opt for reserved or dedicated instances to ensure data persistence.

- Enable logging to monitor Appsmith for errors. If using AWS ECS, enable **CloudWatch logging** for easy retrieval of Appsmith logs.

- Integrate with **BetterUptime** or **UptimeRobot** to track the uptime and availability of your Appsmith instance. You may also choose to use `Supervisor` to monitor Appsmith. For more information, see [Configure Monitoring Tool](/getting-started/setup/instance-management/supervisor) guide.

## Security and authentication

Ensuring the security of your Appsmith instance is vital for protecting sensitive data and maintaining compliance.

- **Federated authentication**: Disable **form login** and configure federated authentication methods such as **[Google OAuth](/getting-started/setup/instance-configuration/authentication/google-login)** or **[SAML SSO](/getting-started/setup/instance-configuration/authentication/security-assertion-markup-language-saml)**.

- **SMTP server configuration**: Set up an **SMTP server** for email verification during new sign-ups and password reset requests.

- **AWS security**: If using **AWS EC2**, ensure that **IMDsv2** is configured to protect against SSRF attacks. Refer to [IMDsv2 Configuration](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-service.html) for more details.

- **Form login**: If form login is enabled, ensure **email verification** is required, and disable **open signups** to allow users to sign up only through invitations.

- **HTTPS & Subdomains**: Enable **HTTPS** for your Appsmith instance and deploy it under a subdomain such as `appsmith.<yourdomain>.com`.

## Backup and recovery management

Regular backups and recovery plans are critical to prevent data loss and ensure smooth recovery in case of failures.

- **Regular backups**:
  - Enable scheduled backups to run **nightly** on all your instances. For more information, see [Schedule automatic backup](/getting-started/setup/environment-variables#automatic-backups) reference.
  - Use the `appsmithctl backup` command to create backups of your **production** and **staging** environments. For detailed backup configuration, refer to the [Backup Instance](/getting-started/setup/instance-management/backup-and-restore/backup-instance) guide.
  - Enable **automatic backups** and store them on **S3** to ensure easy recovery. For more information on syncing backups to S3, see the [Sync Backup to S3](/getting-started/setup/instance-management/backup-and-restore/sync-backup-to-s3) guide.

- **Back up configuration files**:
  - Always back up configuration files such as `/appsmith-stacks/configuration/docker.env`. 
  - When deployed on Kubernetes, back up the `values.yaml` or store it in version control to recover configurations after a disaster.

## Upgrades

Having a proper upgrade strategy ensures that your environment remains up-to-date with the latest features and security patches.

- Backup your environment and configuration files before upgrading. For more information, see the [Backup and recovery management(#backup-and-recovery-management) section.
- Verify whether you need to **Upgrade to Checkpoint Version (v1.9.2)** before proceeding.
- To stay up-to-date, enable **auto-updates**. For more information, see the [Schedule Automatic Updates](/getting-started/setup/instance-management/maintenance-window) guide.
- It’s recommended to update your Appsmith instance every 2 weeks, or as needed for new features or security patches.
- Always upgrade **Staging** or **Development environments** first and thoroughly test all apps (in both **edit** and **view** modes) before upgrading **Production**.
- Backup your **Production** instance before the upgrade.For more information, see the [Backup Instance](/getting-started/setup/instance-management/backup-and-restore/backup-instance) guide.
- If you notice any degradation in your experience after the upgrade, [restore the backup](/getting-started/setup/instance-management/backup-and-restore/restore-instance) and reach out to support. For more information, see [Support at Appsmith](/product/support).

## See also

- [Manage Installation](/getting-started/setup/instance-configuration): Learn how to manage your Appsmith instance.
- [Upgrade Installation Guides](/getting-started/setup/instance-management/): Learn how to upgrade your Appsmith installation.