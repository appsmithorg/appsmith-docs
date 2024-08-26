---
description: This page outlines the best practices for selecting the right instance setup when building external client portals using Appsmith.
---

# External Client Portal

When building an external client portal, it's crucial to choose the setup that best aligns with your client's needs. This page provides best practices for selecting the most suitable instance configuration.

## Single instance → single client

In a single instance single client setup, each client gets their own unique instance with client-specific configuration.

<ZoomImage src="/img/appsmith-multiple-instances.svg" alt="Single Instance → Single client" caption="Single Instance → Single client"/>

For a single instance dedicated to a single client, the following options are available for configuration:

* **Authentication** 
  - Configure individual Single Sign-On (SSO) providers for each client. For more information, see [Single Sign-On Configuration](/getting-started/setup/instance-configuration/authentication).
  - Build a custom login solution if needed.
  - Set up default access for apps by editing the default role for all users to ensure they have access to the applications you want. For more information, see [Configure Default Access to Apps](/advanced-concepts/granular-access-control/how-to-guides/configure-default-permissions) guide.

* **Application** 
  - The application is unique to each client and can be managed in the following ways:

  - **Single application with client-specific customization:**
    - Use Git branches to create client-specific versions of the application.
    - Deploy each branch to a separate instance. For guidance on setting up and managing different instances using Git, see [Set up multiple instances with Git](/advanced-concepts/version-control-with-git/environments-with-git).
    - Centralize updates in a single branch and propagate changes to all instances as needed.

  - **Different application for different clients:**
    - Use separate Git repositories to manage client-specific updates and configurations.
    - Set up separate instances for each client-specific repositories.
    - Handle updates and configurations independently for each instance.

* **Branding** 
  - Customize branding to align with the branding guidelines and preferences of each client.

## Single instance → multiple clients

In a single instance multiple client setup, a single instance is shared among multiple clients without client-specific configuration.

<ZoomImage src="/img/appsmith-single-instance.svg" alt="Single Instance → Multiple clients" caption="Single Instance → Multiple clients"/>

For a single instance serving multiple clients, the following options are available for configuration:

* **Authentication** 
  - Set up a shared Single Sign-On provider for all clients on the instance. For more information, see [Single Sign-On Configuration](/getting-started/setup/instance-configuration/authentication).
  - Build a custom login solution if needed.
  - Set up default access for apps by editing the default role for all users to ensure they have access to the applications you want. For more information, see [Configure Default Access to Apps](/advanced-concepts/granular-access-control/how-to-guides/configure-default-permissions) guide.

* **Application** 
  - The application is common to all clients and can be managed as follows:
    - Use Git branches to manage incremental updates to the application and deploy the main branch to the instance.
    - Create feature branches to develop and test your changes. Merge changes to the main branch to update the instance with a new version of the application.

* **Branding** 
  - The branding is platform specific and same for all clients.

## Get help
If you need help, reach out to the support team via the chat widget located at the bottom right of this page.

## See also

- [Granular Access Control](/advanced-concepts/granular-access-control) - Learn how to manage user roles, permissions, and access configurations for your applications.
- [Git Best Practices](/advanced-concepts/version-control-with-git/merging-branches) - Learn best practices for managing your application with Git.