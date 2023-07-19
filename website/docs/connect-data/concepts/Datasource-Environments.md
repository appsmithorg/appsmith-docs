# Datasource Environments

This page describes Datasource environments, which allows developers to isolate their development and testing datasources from their production datasources.


:::info
The Datasource environments feature is only available on [Business Edition.](https://www.appsmith.com/pricing)
:::

See how to [Setup Datasource Environments](/connect-data/how-to-guides/setup-datasource-environments).

## Overview

Datasource environments enable you to separate staging and production configurations of a datasource, providing controlled and isolated settings for specific tasks during different phases. This approach allows developers to test and validate changes without affecting the live production environment.

## Environments on Appsmith

Appsmith provides two environments: 

* **Staging**: Environment for development, QA, and user acceptance testing.

* **Production**: Live version with actual production data for end users.

In Appsmith, environments work at the *Workspace* level. This means that all the applications within a workspace share the same configuration values for both staging and production environments.

For more information on permissions, you can refer to the [Granular Access Control.](/advanced-concepts/granular-access-control).

## Benefits of Datasource Environments

The following factors highlight the significance of having datasource environments:

* **Isolation and Risk Management:** Datasource environments allow developers to separate testing, and production environments, reducing the risk of unintended modifications and providing a controlled environment for each stage of the software development cycle.

* **Efficient Development:** With Datasource environments, developers can easily switch between different datasources without manually modifying connection parameters. This streamlines the development process and enables quick testing and iteration.

* **Flexible Testing:** Having separate staging environments facilitates thorough testing and quality assurance activities. QA teams can confidently test new features, perform regression testing, and validate the application's behavior before deploying to production.



When working with Datasource environments in Appsmith, it is important to note that custom/user-defined environments are not currently supported. Appsmith provides predefined staging and production environments, but the option to create custom environments is not available.








