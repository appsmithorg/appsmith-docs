---
sidebar_position: 3
description: This page outlines the best practices for selecting the right instance setup to ensure effective and secure access for all users.
---

# External Portal using Appsmith

When setting up external portals with Appsmith, the first step is to choose the right instance configuration based on your specific needs. This page outlines the best practices for selecting the right instance setup and managing it effectively.

## Single vs multiple instances

Choosing between a single instance or multiple instances for deploying Appsmith impacts how you manage applications, handle security, and provide custom features for different companies. This decision affects operational costs, user access, and the level of isolation between different organizations.

### Instance setup matrix

Consider reviewing the matrix below to help decide which instance setup suits your needs:

| **Instance Type**            | **Single Sign-On Integration** | **Same Functionalities, No Customization** | **Different Functionalities or Customization** |
|------------------------------|--------------------------------|--------------------------------------------|------------------------------------------------|
| **Single Instance -> Multiple Customer**          | Not Suitable                    | Ideal                                       | Not Suitable                                   |
| **Single Instance -> Single Customer**       | Ideal                           | Not Suitable                                    | Ideal                                          |

### Instance setup guidelines

Once you have chosen the instance setup that best fits your needs, follow these guidelines for effectively setting up and managing your instances:

#### Single instance → multiple customers
Deploying Appsmith as a single instance is ideal for serving different companies that share the same functionalities and do not require extensive customization.

  <ZoomImage src="/img/appsmith-single-instance.svg" alt="Set up Appsmith as a single instance" caption="Set up Appsmith as a single instance"/>

  - Build custom login solutions for different companies to ensure secure access for each company.

#### Single instance → single customer

Deploying separate Appsmith instances is ideal when each company requires enhanced isolation and customization.

  <ZoomImage src="/img/appsmith-multiple-instances.svg" alt="Set up Appsmith as multiple instances" caption="Set up Appsmith as multiple instances"/>

  - Each instance can be configured with its own Single Sign-On provider. For more information about setting up Single Sign-On, see [Single Sign-On Configuration](/getting-started/setup/instance-configuration/authentication).
  - Use Granular Access Control to manage [permissions](/advanced-concepts/granular-access-control/reference/permissions) and default access levels for authenticated users. For more details, refer to [Configure Default Access to Apps](/advanced-concepts/granular-access-control/how-to-guides/configure-default-permissions).

## Deployment strategies

Once you have chosen the instance setup, follow these deployment strategies based on whether you are using single or multiple instances:

* **When a single application is shared between different companies and deployed on multiple instances**:
  - Use Git branches to create customer-specific versions of the application.
  - Deploy each branch to a separate instance. For more information about how to set up and manage different instances using Git, see [Set up multiple instances with Git](/advanced-concepts/version-control-with-git/environments-with-git).
  - Centralize updates in a single branch and propagate changes to all instances as needed.

* **When different applications are used by different companies and deployed on separate instances**:
  - Set up distinct instances for each unique application required by different customers.
  - Use separate Git repositories for each application to manage updates and configurations.
  - Handle updates and configurations independently for each instance to ensure tailored deployment.
