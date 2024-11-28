---
description: Best practices for Appsmith deployment
---

# Self-hosting Best Practices

This page provides information on the best practices that are to be followed when running Appsmith in production.

## Choice of deployment platform

* Appsmith works best on AMD and ARM architectures on AWS, Azure, GCP, and DigitalOcean. By default, the recommendation is to run Appsmith using [Kubernetes](/getting-started/setup/installation-guides/kubernetes) in production, as it ensures high availability and scalability. Additionally, the Helm chart manages MongoDB and Redis as separate pods, eliminating the need for external instances.

* If you decide to use a serverless deployment platform like [ECS](/getting-started/setup/installation-guides/aws-ecs), you’ll need to set up an external MongoDB and Redis instance. In this case, to use MongoDB Atlas and Elasticache is recommended.

## Deployment setup

- Setup a separate instance for Production & Staging. You may also choose to have one for development.
- Enable [scheduled backups](/getting-started/setup/instance-management/appsmithctl#schedule-automatic-backups) to run nightly on all your instances.
- Have your backups [synced to S3](/getting-started/setup/instance-management/appsmithctl#sync-backup-to-s3-bucket).
- Add a monitoring integration like BetterUptime or UptimeRobot to monitor the uptime of your production Appsmith instance.
- Always ensure you have an NFS persistent volume of 3GB. On AWS, EFS is what we recommend.
- If using ECS, enable CloudWatch logging, so that you can easily retrieve your Appsmith logs.
- Enable HTTPS for your Appsmith instance and deploy it under a subdomain as `appsmith.<yourdomain>.com`.
- A `t3.medium`, or a server of equivalent capacity, is the minimum requirement for running Appsmith. This should scale well for hundreds of users. If you expect ~500 concurrent users, consider picking a `t3.large`, or bigger.
- Ensure you have healthy free disk space, at least 10-15 GB free, on your server at all times.
- Do not run other self-hosted applications on the same server as Appsmith.

## Security

- Disable form login & configure a federated login method like Google OAuth or SAML SSO.
- If you are using form login, enable email verification & disable allowing all users to signup. Users can still signup if they are invited.
- Configure an SMTP server as this is necessary for email verification of new signups and resetting account passwords.
- If deployed on AWS EC2, consider changing the Instance Metadata version to [IMDsv2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-service.html), which is more secure, and harder to do SSRF attacks against.

## Upgrading

- Take a backup of your Appsmith Development, Staging & Production instances. [Backup](/getting-started/setup/instance-management/appsmithctl#backup-instance).
- Always perform a manual upgrade of your Staging / Development instance first before you attempt it on the production instance.
- Check if you need to [Upgrade to Checkpoint Version (v1.9.2)](/getting-started/setup/instance-management/upgrade-to-checkpoint-version).
- Verify that all your applications are working on the Staging & Development instances in both the edit & view modes.
- Perform the upgrade on the Production instance after taking a backup.
- Verify that all your applications are working on the production instance in both edit and view modes.
- If you notice any degradation in your experience after the upgrade, [restore the backup](/getting-started/setup/instance-management/appsmithctl#restore-instance) and reach out to our support via the chat widget on this page.