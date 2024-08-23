---
sidebar_position: 3
description: This page outlines the best practices for selecting the right instance setup to ensure effective and secure access for all users.
---  

# External Portals using Appsmith

When setting up external portals with Appsmith, the first step is to choose the right instance configuration based on your specific needs. This page outlines the best practices for selecting the right instance setup and managing it effectively.

## Host as single instance

Deploying Appsmith as a single instance is ideal for serving different companies that share the same functionalities and do not require extensive customization.

<ZoomImage src="/img/appsmith-single-instance.svg" alt="Set up Appsmith as a single instance" caption="Set up Appsmith as a single instance"/>

**When to host**
- Companies do not require Single Sign-On (SSO) integration.
- You prefer easier instance management and lower operational costs.

**Considerations**
- When hosting Appsmith as a single instance for different companies, you will need to build custom login solutions to ensure secure access for each company.

## Host as multiple instances

Deploying separate Appsmith instances is ideal when each company requires enhanced isolation and customization.

<ZoomImage src="/img/appsmith-multiple-instances.svg" alt="Set up Appsmith as multiple instances" caption="Set up Appsmith as multiple instances"/>

**When to host**:
- Companies require Single Sign-On (SSO) integration.
- Different features or configurations are needed for each company.
- High levels of security and data isolation are necessary.

**Considerations**:
- Configure Single Sign-On provider to manage user authentication. For more information about how to set up Single Sign-On authentication for your Appsmith instance, see [Single Sign-On Configuration](/getting-started/setup/instance-configuration/authentication) guide.
- Use Granular Access Control (GAC) to manage [permissions](advanced-concepts/granular-access-control/reference/permissions) and provide default access levels for authenticated users. For more information about how to set up default access in Appsmith, see [Configure Default Access to Apps](/advanced-concepts/granular-access-control/how-to-guides/configure-default-permissions) guide.

## Deployment strategies

Once you have chosen the instance setup, follow these deployment strategies based on whether you are using single or multiple instances:

* When a single application is shared between different companies and deployed on multiple instances:

      * Use Git branches to create customer-specific versions of the application.
      * Deploy each branch to a separate instance. For more information about how to set up and manage different instances using Git, see [Set up multiple instances with Git](/advanced-concepts/version-control-with-git/environments-with-git) guide. 
      * Centralize updates in a single branch and propagate changes to all instances as needed.

* When different applications are used by different companies and deployed on separate instances:

      * Set up distinct instances for each unique application required by different customers.
      * Use separate Git repositories for each application to manage updates and configurations.
      * Handle updates and configurations independently for each instance to ensure tailored deployment.