---
description: Best practices for Appsmith deployment
---

# Self-hosting Best Practices

This document is intended to share some best practices to follow when deploying Appsmith for production for a smooth and reliable experience.

## Choice of deployment platform

When choosing a deployment target for your Appsmith instance, it is advisable to consider options such as `docker-compose`, Kubernetes, or ECS based on your comfort and experience.

- If you currently lack experience with Kubernetes and have no plans to work with it soon, it may be more suitable to opt for docker-compose or ECS as your deployment choice.
- Using Kubernetes with deployments enables having a Highly Available (HA) deployment, that can scale up or down, have redundancy in Appsmith containers, and the ability to recover from certain issues.
- If you decide to use a serverless deployment platform like ECS, it is recommended to enable CloudWatch logging, so that you have an easily accessible location for retrieving and reviewing your Appsmith’s logs

## Deployment setup

- It is recommended to have two deployment platforms set up, one for staging, and one for production.
- For your production instance, it is recommended to enable automatic backups using [AWS S3](/getting-started/setup/instance-management/appsmithctl#sync-backup-to-s3-bucket). Configure a backup schedule that occurs at least daily to ensure regular and reliable backups of your Appsmith application data
- For the staging instance, enable automatic updates to ensure that you are consistently running the latest version of Appsmith. However, in a production environment, it is recommended to turn off automatic updates but ensure you perform a manual update regularly.
- When configuring auto-updates, it is important to select a [schedule](/getting-started/setup/instance-management/maintenance-window) for the update checks that aligns with your preferences and requirements. Additionally, think about the cadence of the updates, whether you prefer a weekly, daily, or any other interval that suits your needs.
- Add a monitoring integration like BetterUptime or UptimeRobot, to monitor the uptime of your production Appsmith instance.

## Security

- If you don’t need your Appsmith instance to be accessible from the public, consider restricting access to only the minimum required IP addresses. If you are on AWS, this can be done by specifying IP ranges in security groups.
- To restrict unauthorized signups on your Appsmith instance, consider disabling the signup option from the **Admin Settings > Authentication > Form Login** section. This prevents random individuals from signing up without an invitation. However, you can still [invite](/advanced-concepts/invite-users) specific individuals to join your Appsmith instance, and they can sign up using the invitation.
- Enable HTTPS for your Appsmith instance.
- If deployed on AWS EC2, consider changing the Instance Metadata version to [IMDsv2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-service.html), which is more secure, and harder to do SSRF attacks against.
- Ensure you’re regularly updating your server’s Operating System, as well as Docker/Kubernetes version, so you can leverage the latest security fixes there as well.

## Performance

- A `t3.medium`, or a server of equivalent capacity, is the minimum required capacity for running Appsmith smoothly. This should scale well enough for hundreds of users. If you expect a larger load, like ~500 concurrent users running several multiple actions/queries etc., consider picking a `t3.large`, or bigger.
- Ensure you have a healthy free disk space, at least 10-15 GB free, on your server at all times.
- Unless your server’s capacity exceeds the recommended minimum, please do not run other self-hosted applications on the same server as Appsmith.

## Configuration

- Configure an SMTP server for Appsmith to be able to send emails when needed. This is necessary for the “Forgot Password” flow, and it also notifies people when they get invited to a workspace or a single application.
- Set a Google Maps API Key so that you’ll be able to use the widgets that leverage Google Maps.
- Consider configuring an [authentication method](/getting-started/setup/instance-configuration/authentication) like OAuth 2.0 or SSO authentication, in addition to or instead of the form/password-based authentication.
