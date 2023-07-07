 # Setup Multiple Environments

This page describes how to set up and manage multiple datasource environments for your application.

:::caution
SaaS integrations such as Google Sheets, HubSpot, Twilio, and Airtable do not support multiple environments.
:::

## Prerequisites

A [Business Edition](https://www.appsmith.com/pricing) account is required to work with multiple environments.


## Configure an environment

This section explains how to configure staging and production environments in Appsmith. 

<figure>
  <img src="/img/multi-env-new.png" style= {{width:"800px", height:"auto"}} alt="MongoDB Example"/>
  <figcaption align = "center"><i>Multiple Environments | MongoDB Example</i></figcaption>
</figure>

1. Click the **Explorer** tab on the entity explorer to the screen's left.

2. Click the **+** icon next to **Datasources** and choose your datasource.

3. Configure both production and staging data parameters by switching between the respective tabs.

4. Test and save the configurations for both production and staging fields.



## Switch environments

In the **edit mode**, you can toggle between staging and production environments on the bottom left corner of the screen, enabling you to run queries in the environment of your choice.

Switching between environments in the edit mode has no impact on the deployed version of the app. However, switching impacts all other developers who are working on the app in the edit mode.

The deployed version of the app always uses the production environment. However, if the user has requisite permissions, they can switch to the staging environment configuration in the app's *View mode*.

<figure>
  <img src="/img/switch-img-.png" style= {{width:"600px", height:"420px"}} alt="Switch environments"/>
  <figcaption align = "center"><i>Switch environments</i></figcaption>
</figure>




## Access control

You can set up access controls for both the staging and production environments. For each, you can decide whether a user can view the environment, modify it, and apply the environment configuration in edit/view modes.

Learn more about [Granular Access Control.](/advanced-concepts/granular-access-control)