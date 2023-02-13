
# Multiple Environments

Appsmith provides a flexible environment management system, allowing teams to manage and configure their applications. The platform offers both staging and production environments, each with their own unique set of features and capabilities.

:::info
Multiple Environments are only available on [Business Edition](https://www.appsmith.com/pricing). 
:::

## Environments on Appsmith
Appsmith offers two environments, Staging and Production, to help developers efficiently manage their applications' development, testing, and deployment.

### Staging environment
A staging environment refers to an environment used for testing and debugging purposes during the development of an application. It's a place where developers can inspect new aspects, debug, and explore their applications without affecting end-users. 

The configuration values for a datasource are usually the same for staging and production. If you want to change them, you can go to the [manage environments](#configure-an-environment) and make the necessary adjustments.


### Production environment
The Production environment in Appsmith refers to the final stage of app development, where end users can interact with the fully functional product. The environment configurations should be linked to data sources containing live, customer-facing data to ensure a smooth and optimal experience for the end user.

When deployed, the application always uses the production environment. However, if the user has requisite permissions, they can `apply` the staging environment configuration in view mode. Similar to a staging environment, each team member has a designated level of access to this environment.


## Configure an environment

With Appsmith, it's easy to set up staging and production environments. By default, all the configuration values for a datasource are shared between staging and production. If you have to configure different parameters for staging and production, follow the steps mentioned below:


![](/img/me-db-3.png)

* On the Explorer tab, click the **+** sign next to datasources.
* Select a **datasource**.
* Add the necessary information, such as host name, access key, username, and password, depending on the database.
* Save the database.
* Click the **Edit** button on the top-right corner.
* Go to **Manage Environments** on the top-right corner.
* Set the parameters for the production and staging environments. 
* Once parameters are configured, **bind** the values. 

You can set different values for each environment. For instance, if you have a Postgresql database with a different configuration, you can select a particular environment and set the values.

![](/img/me-db-1.png)

## Switch environments

You can decide which environment to use when you are editing the app. In edit mode, you can switch between staging and production environments by using the **toggle** located on the bottom right corner of the screen. 

:::note
Already-deployed version of the app won't be impacted by this. However, any modifications you make may have an impact on other editors who are still working on the app.
:::
![](/img/switch-environments.png)

## Use environments across apps

In Appsmith, environments are set at the workspace level. This means that all the apps within the same workspace share the same configuration values for both staging and production environments. This results in a uniform and consistent configuration of both staging and production environments across all apps within the same workspace.  

By using environments across apps, teams can streamline their workflows and maintain a standardized set of configuration values. This eliminates the need for manual updates to each app's configuration and reduces the risk of errors or discrepancies in the settings. 

## Access control

You can set up access controls for both the staging and production environments. For each, you can decide if a user can view the environment, modify it, and apply the environment configuration in edit/view modes. 

You have the ability to determine the level of access a user has, such as the ability to view the environment, modify it, or apply configuration changes in edit or view modes. To learn more about access control in Appsmith, you can refer to the [RBAC document](/advanced-concepts/access-control).

## Troubleshooting

Are you having trouble? check out the [Deployment Errors troubleshooting guide](/help-and-support/troubleshooting-guide/deployment-errors) or reach out on[ Discord](https://discord.com/invite/rBTTVJp) to get support or ask questions on the [community forum](https://community.appsmith.com/).





