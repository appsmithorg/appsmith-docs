# Multiple Environments

:::info
The multiple environments feature is only available on [Business Edition.](https://www.appsmith.com/pricing)
:::

Multiple environments in Appsmith enable developers to isolate development and testing from production, avoiding unintended modifications and facilitating seamless switching between datasources.

It allows you to switch between different environments while developing your app in edit mode. By switching environments, you are applying the datasource configurations defined in that environment.

See how to [Setup Multiple Environments](/connect-data/how-to-guides/setup-multiple-environments).

## Environments on Appsmith

Appsmith provides two environments: 

* **Staging**: Environment for development, QA, and user acceptance testing.

* **Production**: Live version with actual production data for end users.

In Appsmith, environments work at the *Workspace* level. This means that all the applications within a workspace share the same configuration values for both staging and production environments.

## Why multiple environments?

Here are the reasons necessitating multiple environments:

* **Isolation and Risk Management:** Multiple environments allow developers to separate testing, and production environments, reducing the risk of unintended modifications and providing a controlled environment for each stage.

* **Efficient Development:** With multiple environments, developers can easily switch between different datasources without manually modifying connection parameters. This streamlines the development process and enables quick testing and iteration.

* **Flexible Testing:** Having separate staging environments facilitates thorough testing and quality assurance activities. QA teams can confidently test new features, perform regression testing, and validate the application's behavior before deploying to production.


## Limitations

While multiple environments in Appsmith provide significant benefits, there are some limitations to be aware of:

* **Custom Environments:** Appsmith currently offers support for staging and production environments as predefined options. However, at present, custom environments are not supported in Appsmith. 

* **Deployment Previews:** Although Appsmith allows for seamless switching between staging and production environments, there is currently no direct provision for deployment previews. Users may desire the ability to share their app changes with others using staging data, ensuring that ongoing development work can be reviewed without impacting the production version of the app.

* **Exporting and Importing Environments:** When importing/exporting an app with bound environment variables for datasources, ensure that fields with different staging and production values are included in the export for correct configuration. 



