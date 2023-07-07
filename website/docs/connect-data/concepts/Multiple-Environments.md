# Multiple Environments

Multiple environments in Appsmith enable developers to isolate development and testing from production, avoiding unintended modifications and facilitating seamless switching between datasources.

It allows you to switch between different environments while developing your app in edit mode. By switching environments, you are applying the datasource configurations defined in that environment.

:::info
The multiple environments feature is only available on Business Edition.
:::

## Environments on Appsmith

Appsmith offers two predefined environments: staging and production. These environments serve distinct purposes in the application development process:

* **Staging Environment**: The staging environment is designed for development, QA, and user acceptance testing. It should be configured to connect to datasources that are used for these purposes.

* **Production Environment**: The production environment is intended for the live version of the application. It should be configured to connect to datasources containing the actual production data visible to end users.

In Appsmith, environments work at the workspace level. This means that all the apps within a workspace share the same configuration values for both staging and production environments.

Check this guide on how to [Setup Multiple Environments](/connect-data/how-to-guides/setup-multiple-environments).

## Why multiple environments?

Multiple environments are essential for isolating development and testing from production, providing flexibility in datasource switching, and minimizing risks of unintended modifications, thereby ensuring efficient and reliable software development and deployment processes.

* **Isolation and Risk Management:** Multiple environments allow developers to separate development, testing, and production environments, reducing the risk of unintended modifications and providing a controlled environment for each stage.

* **Efficient Development:** With multiple environments, developers can easily switch between different data sources without manually modifying connection parameters. This streamlines the development process and enables quick testing and iteration.

* **Flexible Testing:** Having separate staging environments facilitates thorough testing and quality assurance activities. QA teams can confidently test new features, perform regression testing, and validate the application's behavior before deploying to production.


## Limitations





