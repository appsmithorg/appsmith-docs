 # Setup Multiple Environments

This page describes how to set up and manage multiple environments for your application.

## Prerequisites

A [Business Edition](https://www.appsmith.com/pricing) account is required to work with multiple environments.

:::note
SaaS integrations and unauthenticated APIs do not support multiple environments.
:::

## Configure an environment

This section explains how to configure staging and production environments in Appsmith. 

<figure>
  <img src="/img/multi-env-.gif" style= {{width:"800px", height:"auto"}} alt="MongoDB Example"/>
  <figcaption align = "center"><i>Multiple Environments | MongoDB Example</i></figcaption>
</figure>

1. Click the **Explorer** tab on the entity explorer to the screen's left.

2. Click the **+** icon next to **Datasources** and choose your Datasource.

3. Configure both production and staging data parameters by switching between the respective tabs.

4. Save the configurations for both production and staging fields.

Now, create queries and connect them to widgets. 


## Switch environments

In the **edit mode**, you can toggle between staging and production environments on the bottom left corner of the screen, enabling you to run queries in the environment of your choice.

Switching between environments in the edit mode has no impact on the deployed version of the app. However, switching impacts all other developers who are working on the app in the edit mode.

<figure>
  <img src="/img/switch-env-.gif" style= {{width:"800px", height:"auto"}} alt="Switch environments"/>
  <figcaption align = "center"><i>Switch environments</i></figcaption>
</figure>

The deployed version of the app always uses the production environment. However, if the user has requisite permissions, they can switch to the staging environment configuration in the app's **view mode**.


## Access control

You can set up access controls for both the staging and production environments. For each, you can decide whether a user can view the environment, modify it, and apply the environment configuration in edit/view modes.

To learn more about access control in Appsmith, you can refer to [RBAC](/advanced-concepts/granular-access-control).