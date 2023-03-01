
# Multiple Environments

When building applications, there is usually a clear distinction between the version of the app that end users see and the version still under development/testing. Most software of reasonable complexity make this distinction clear by having different environments for development/testing and production use. This ensures that end users of the app aren't impacted by changes which are still in development. 

Appsmith provides a way to define multiple environments for datasources. It allows you to switch between different environments while developing your app in edit mode. By switching environments, you are applying the datasource configurations defined in that environment.

:::info
The multiple environments feature is only available on [Business Edition](https://www.appsmith.com/pricing). 
:::

## Environments on Appsmith

Appsmith provides two environments out of the box - **staging** and **production**. Staging environment configurations should ideally point to datasources which are used for development, QA or user acceptance testing. Production environment configurations should point to datasources which have live data that the end user see on the app.

In Appsmith, environments work at the workspace level. This means that all the apps within a workspace share the same configuration values for both staging and production environments.

## Configure an environment

 By default, all the configuration values for a datasource are shared across staging and production environments. If you want to have different values for staging and production, you can go to the **Manage Environments** page where you can provide different values for the available configuration fields for staging and production. 

<VideoEmbed host="youtube" videoId="3hoIWkvL9hA" title="Configure an environment" caption="Configure an environment | MongoDB" />  

* On the Explorer tab, select the **datasource** for which you want to configure multiple environments.
* Click the **EDIT** button on the top-right corner.
* Click **MANAGE ENVIRONMENTS** on the top-right corner.
* Select the environment from the **Configure Environment** dropdown list.
* Set the `Host Address` and `port` fields under the **Endpoints** section for the chosen environment. 
* Under **Datasource Configurations** add the values by selecting the fields you want to configure.
* Once the fields are configured, click **BIND VALUES** button on the bottom right of the page to bind the environment variables. 

You can set different values in the database configuration fields for each environment.

<figure>
  <img src="/img/me-db-1.png" style= {{width:"700px", height:"auto"}} alt="Multiple environments set for PostgreSQL datasource"/>
  <figcaption align = "center"><i>Multiple environments set for a PostgreSQL datasource</i></figcaption>
</figure>

## Switch environments

In the **edit mode**, you can toggle between staging and production environments on the bottom right corner of the screen, enabling you to run queries in the environment of your choice. 

Switching between environments in the edit mode has no impact on the deployed version of the app. However, switching impacts all other developers who are working on the app in the edit mode.

<figure>
  <img src="/img/switch-environments.png" style= {{width:"700px", height:"auto"}} alt="Switching environments in the edit mode"/>
  <figcaption align = "center"><i>Switching environments in the edit mode</i></figcaption>
</figure>

The deployed version of the app always uses the production environment. However, if the user has requisite permissions, they can switch to the staging environment configuration in the app's **view mode**.

## Access control

You can set up access controls for both the staging and production environments. For each, you can decide whether a user can view the environment, modify it, and apply the environment configuration in edit/view modes. 

To learn more about access control in Appsmith, you can refer to [RBAC](/advanced-concepts/access-control/granular-access-control).


## Environments with git

Environments with Git allows you to work on separate versions of the data, test changes before deployment, and maintain a stable production environment. 

When using a staging environment, you can use the staging data and work on any feature branch in Git. You can create a new branch for each feature you're working on and commit changes to that branch as you make progress. Once a feature is stable and ready for deployment, you can merge it into the master branch.

To use environments with Git, you can follow these steps:

* Create a new datasource and configure its staging and production data.
* Create or switch the branch in Git from the screen's bottom-left corner.
* Write queries using the staging environment data in the branch.
* Once you have tested your changes and are ready to deploy to production, merge the changes into the master branch. 


When you merge changes from the staging environment into the master branch, the production data remains unchanged, ensuring that end-users continue to view the same data they did before the changes were made. Check this guide to learn more about [working with Branches](/advanced-concepts/version-control-with-git/working-with-branches).



