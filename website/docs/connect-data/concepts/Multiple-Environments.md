# Multiple Environments

This page describes Multiple environments, which allows developers to isolate development and testing from production, avoiding unintended modifications and facilitating seamless switching between datasources.


:::info
The multiple environments feature is only available on [Business Edition.](https://www.appsmith.com/pricing)
:::

See how to [Setup Multiple Environments](/connect-data/how-to-guides/setup-multiple-environments).

## Overview

Multiple environments allows you to separate staging and production configurations of a datasource. Each environment mimics the necessary conditions required for a particular phase, ensuring a controlled and isolated environment for specific tasks. This approach allows developers to test and validate changes without affecting the live production environment. 

## Environments on Appsmith

Appsmith provides two environments: 

* **Staging**: Environment for development, QA, and user acceptance testing.

* **Production**: Live version with actual production data for end users.

In Appsmith, environments work at the *Workspace* level. This means that all the applications within a workspace share the same configuration values for both staging and production environments.

For more information on permissions, you can refer to the [Granular Access Control.](/advanced-concepts/granular-access-control).

## Benefits of Multiple Environments

The following factors highlight the significance of having multiple environments:

* **Isolation and Risk Management:** Multiple environments allow developers to separate testing, and production environments, reducing the risk of unintended modifications and providing a controlled environment for each stage.

* **Efficient Development:** With multiple environments, developers can easily switch between different datasources without manually modifying connection parameters. This streamlines the development process and enables quick testing and iteration.

* **Flexible Testing:** Having separate staging environments facilitates thorough testing and quality assurance activities. QA teams can confidently test new features, perform regression testing, and validate the application's behavior before deploying to production.



When working with multiple environments in Appsmith, it is important to note that custom environments are not currently supported. Appsmith provides predefined staging and production environments, but the option to create custom environments is not available.








