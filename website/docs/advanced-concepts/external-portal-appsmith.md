---
sidebar_position: 3
description: This page outlines the best practices for selecting the right instance setup when building external portals using Appsmith.
---

# External Portals using Appsmith

This page outlines best practices for selecting the right instance configuration when building external portals using Appsmith.

## Single vs multiple instances

Selecting between a single instance or multiple instances for deploying Appsmith affects how you manage applications, ensure security, and provide custom features. Consider the following best practices when making your decision:

- **Single instance setups** are generally more cost-effective and easier to manage but offer less flexibility for customization and isolation.
- **Multiple instance setups** provide greater flexibility and security but require more resources and management overhead.

### Key deciding factors

Refer to the matrix below that helps you determine the most suitable instance setup for your needs:

| **Instance Type**            | **Single Sign-On Integration** | **Same Functionalities, No Customization** | **Different Functionalities or Customization** |
|------------------------------|--------------------------------|--------------------------------------------|------------------------------------------------|
| **Single Instance -> Multiple Customers**          | Limited<font color="red">*</font>                    | Yes                                       | No                                   |
| **Single Instance -> Single Customer**       | Yes                           | No                               | Yes                                          |

### Instance setup guidelines

Once you have chosen the instance setup that best fits your needs, follow these guidelines for setting up and managing your instances:

#### Single instance → multiple customers

For scenarios where multiple customers share the same functionalities and do not require extensive customization, a single instance setup is generally appropriate.

<ZoomImage src="/img/appsmith-single-instance.svg" alt="Single Instance → Multiple Customers" caption="Single Instance → Multiple Customers"/>

Consider the following when configuring authentication:

- Use custom login solutions for each company to ensure secure access.
- SSO can be configured, but it's not company-specific, offering limited flexibility. For more information, see [Single Sign-On Configuration](/getting-started/setup/instance-configuration/authentication).
- If SSO is configured, you can provide default access to authenticated users, though this may lack the granularity if needed by different customers. For more information about setting default access, see how to [Configure Default Access to Apps](/advanced-concepts/granular-access-control/how-to-guides/configure-default-permissions) guide.
- All companies use the same application.

#### Deployment strategies

To manage the same application for all customers follow the Git flow:

- Use Git branches to manage incremental updates to the application and deploy the main branch to the instance.
- Create feature branches to develop and test your changes. Merge changes to the main branch to update the instance with a new version of the application.

For more information about Git flow, see [Git Best Practices](/advanced-concepts/version-control-with-git/merging-branches).

### Single instance → single customer

For scenarios where each customer requires enhanced isolation and customization, a single instance setup per customer is generally appropriate.

<ZoomImage src="/img/appsmith-multiple-instances.svg" alt="Single Instance → Single Customer" caption="Single Instance → Single Customer"/>

Consider the following when configuring authentication:

- Configure each instance with its own Single Sign-On provider for better isolation and security.
- Customize applications to meet the specific needs of each company.
- Use Granular Access Control (GAC) in Appsmith to provide default access to authenticated users. For more information about configuring default access, see how to [Configure Default Access to Apps](/advanced-concepts/granular-access-control/how-to-guides/configure-default-permissions) guide.
- Companies either use the same application with personalization or different applications.

#### Deployment strategies

Manage the deployments based on whether the companies use the same application with variations or different applications:

- **Single application with company-specific customization:**
  - Use Git branches to create customer-specific versions of the application.
  - Deploy each branch to a separate instance. For more information about how to set up and manage different instances using Git, see [Set up multiple instances with Git](/advanced-concepts/version-control-with-git/environments-with-git).
  - Centralize updates in a single branch and propagate changes to all instances as needed.

- **Different application for different companies:**
  - Set up distinct instances for each unique application required by different customers.
  - Use separate Git repositories for each application to manage updates and configurations.
  - Handle updates and configurations independently for each instance to ensure tailored deployment.

For more information about Git flow, see [Git Best Practices](/advanced-concepts/version-control-with-git/merging-branches).

## Conclusion

By following these best practices, you can optimize your Appsmith instance setup to meet your organization’s specific needs while ensuring secure, scalable, and customizable deployments.
