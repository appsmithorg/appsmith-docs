---
sidebar_position: 3
description: This page outlines the best practices for selecting the right instance setup to ensure effective and secure access for all users.
---

# External Portals using Appsmith

When setting up external portals for companies using Appsmith, understanding how to configure instances based on specific customer needs and authentication requirements is crucial. This page outlines the best practices for selecting the right instance setup to ensure effective and secure access for all users.

<ZoomImage src="/img/appsmith-external-portal-instances.svg" alt="Set up Appsmith as a single instance or multiple instances" caption="Set up Appsmith as a single instance or multiple instances"/>

## Authentication requirements

Understanding the authentication needs of companies is the first step in configuring an external portal, as the authentication method directly influences the Appsmith hosting setup.

### Single Sign-On (SSO) requirements

* When the company requires its users to access the portal using their Single Sign-On provider:
  - When setting up different companies with Single Sign-On requirements, consider hosting a different Appsmith instance for each company. This configuration allows each customer’s users to be automatically authenticated using their specific SSO provider. For more information about setting up a Single Sign-On provider, see [Single Sign-On](/getting-started/setup/instance-configuration/authentication).
  - Use Granular Access Control (GAC) to configure the necessary permissions and access levels for accessing applications. For more information about available permissions, see the [Granular Access Control - Permissions](/advanced-concepts/granular-access-control/reference/permissions) reference.
  - After configuring SSO, users cannot sign up directly on Appsmith; they need to be manually invited to the groups configured using GAC to ensure proper access control.

* When the company doesn't need a Single Sign-On integration, you can:
  - Host a single instance. This approach simplifies management and reduces operational costs.
  - Integrate a custom login for different customers, allowing for a tailored and secure login experience for each domain or company.
  - Use Granular Access Control (GAC) to configure the default access for all authenticated users to ensure they can automatically access the application. For more information about how to set up default access, see the [Configure Default Access to Apps](/advanced-concepts/granular-access-control/how-to-guides/configure-default-permissions) guide.

## Branding requirements

If the company requires a specific look and feel for their external portal, you need to set up branding for the Appsmith instance. In this case, you must set up different instances for different companies, as branding configuration is at the instance level. For more information about setting up branding, see the [Branding](/advanced-concepts/branding) guide. If branding is not needed by the companies, then host a single instance for all the companies.

## Email service requirements

If the company requires a company dedicated email service provider their external portal, you need to set up an email service provider for the Appsmith instance. In this case, you must set up different instances for different companies, as email service provider configuration is at the instance level. For more information about setting up an email service provider, see the available [Email](/getting-started/setup/instance-configuration/email) providers and follow their guides to set them up. If a company dedicated email service is not needed by the companies, then host a single instance for all the companies.

## Manage deployments

Based on your customer's requirements, you can build the same application or different applications. To manage the incremental updates to your application, follow these guidelines:

### Single application on different instances

When your customers share the same core functionalities but require different personalized access:

- Use Git branches to create company-specific versions of the application.
- Deploy the company-specific branch to a separate instance, maintaining isolation between customer environments to enhance security and data protection. For more information about setting up different instances, see [Set up multiple instances with Git](/advanced-concepts/version-control-with-git/environments-with-git).
- When the same changes are needed across customers, manage updates centrally in a single Git branch and push changes to all instances as needed, ensuring consistency.

### Different applications on different instances

When each customer requires a different set of features:

- Set up and maintain separate instances for each application, allowing full control over configuration, management, and updates for each customer. For more information about installing Appsmith, see the [Installation guides](/getting-started/setup/installation-guides).
- Use separate Git repository for each application to manage updates and changes efficiently, keeping each instance up-to-date while maintaining isolation. For more information about configuring Git repositories, see [Connect to Git Repository](/advanced-concepts/version-control-with-git/guides/overview#connect-git-repository) guide.
