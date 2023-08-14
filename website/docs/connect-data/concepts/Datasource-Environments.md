# Datasource Environments

:::info
The Datasource environments feature is only available on [Business Edition](https://www.appsmith.com/pricing). This feature is still in Beta. If you have questions and would like to test this feature and share feedback, please contact the support team using the chat widget at the bottom right of this page. 
:::

This page explains multiple datasource environments, which allows developers to isolate their testing datasources from their production datasources.


See how to [Setup Datasource Environments](/connect-data/how-to-guides/setup-datasource-environments).

## Overview

Datasource environments enable you to separate staging and production configurations of a datasource, providing controlled and isolated settings for specific tasks during different phases. This approach allows developers to test and validate changes without affecting the live production environment.

This allows you to create queries and switch between environments, with the queries automatically using the selected environment.

## Environments on Appsmith

Appsmith provides two environments: 

* **Staging**: Environment for development, QA, and user acceptance testing. You can make modifications and experiment with new features before pushing them to the production environment.

* **Production**: Live version with actual production data for end users. 

In Appsmith, environments work at the *Workspace* level. This means that all the applications within a workspace share the same configuration values for both staging and production environments.

For more information on permissions, you can refer to the [Granular Access Control.](/advanced-concepts/granular-access-control).

## Benefits of Datasource Environments

Some core benefits of using datasource environments include:

* **Isolation and Risk Management:** Datasource environments allow developers to separate testing, and production environments, reducing the risk of unintended modifications and providing a controlled environment for each stage of the software development cycle.

* **Efficient Development:** With datasource environments, developers can easily switch between different datasources without manually modifying connection parameters. This streamlines the development process and enables quick testing and iteration.

* **Flexible Testing:** Having separate staging environments facilitates thorough testing and quality assurance activities. QA teams can confidently test new features, perform regression testing, and validate the application's behavior before deploying to production.


:::info
When using datasource environments in Appsmith, only predefined staging and production environments are supported, and custom or user-defined environments are currently unavailable.
:::



