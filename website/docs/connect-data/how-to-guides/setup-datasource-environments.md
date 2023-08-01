 # Setup Multiple Datasource Environments

:::info
The Datasource environments feature is only available on [Business Edition](https://www.appsmith.com/pricing). This feature is still in Beta. If you have questions and would like to test this feature and share feedback, please contact the support team using the chat widget at the bottom right of this page. 
:::


This page shows how to set up and manage multiple datasource environments for your application. For more details see [datasource environments](/connect-data/concepts/Datasource-Environments).

## Configure an environment

This section shows how to configure staging and production environments in Appsmith. 

<figure>
  <img src="/img/multi-env-3.gif" style= {{width:"850px", height:"auto"}} alt="Datasource Environments"/>
  <figcaption align = "center"><i>Datasource Environments | Postgres Example</i></figcaption>
</figure>

1. Click the **Explorer** tab on the _Entity Explorer_ to the screen's left.

2. Click the **+** icon next to **Datasources** and select your datasource.

:::caution
SaaS integrations such as Google Sheets, HubSpot, Twilio, and Airtable do not support datasource environments.
:::

3. Configure production and staging datasource connection parameters in the respective tabs. For a complete description of the connection parameters, see the [Reference guide](/connect-data/reference) for your datasource.

4. Test and save the configurations for both production and staging environments.



## Switch environments


<figure>
  <img src="/img/switch-img-.png" style= {{width:"600px", height:"420px"}} alt="Switch environments"/>
  <figcaption align = "center"><i>Switch environments</i></figcaption>
</figure>


Select the environment on the bottom left corner of the screen to configure the application to execute queries in the staging or production environments. Switching between environments in the *Edit mode* does not affect the deployed version of the app, as the production environment is always used for the deployed version.

Developers can switch between staging and production environments in the *Edit mode*. In addition, users with the necessary permissions can also switch to the staging environment configuration when accessing the app in *View mode*. For more information on permissions, you can refer to the [Granular Access Control.](/advanced-concepts/granular-access-control).

With this, you can create queries and switch between environments. As you toggle between environments, the queries would automatically use the selected environment.