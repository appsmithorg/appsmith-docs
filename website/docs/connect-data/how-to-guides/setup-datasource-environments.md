---
title: Setup Multiple Datasource Environments
description: This page provides information about datasource environments in Appsmith.
hide_title: true
---
<!-- vale off -->

<div className="tag-wrapper">
 <h1> Setup Multiple Datasource Environments </h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>


<Tags
tags={[
{ name: "Enterprise", link: "https://www.appsmith.com/pricing", additionalClass: "enterprise" }
]}
/>


</div>

<!-- vale on -->

This page shows how to set up and manage multiple datasource environments for your application. For more details see [datasource environments](/connect-data/concepts/Datasource-Environments).

## Configure an environment

This section shows how to configure the environments in Appsmith. 

<ZoomImage
  src="/img/multi-env-3.gif" 
  alt="Datasource Environments"
  caption="Datasource Environments - PostgreSQL Example"
/>

1. Click the **Queries** tab on the _Entity Explorer_ to the screen's left.

2. Click the **+ New query / API** button and select your datasource.

:::caution
SaaS integrations such as Google Sheets, HubSpot, Twilio, and Airtable do not support datasource environments.
:::

3. Configure Production, Staging and Custom datasource connection parameters in the respective tabs. For a complete description of the connection parameters, see the [Reference guide](/connect-data/reference) for your datasource.

4. Test and save the configurations for all the environments.



## Switch environments

You can switch between Staging and Production environments to configure the application to execute queries in the selected environment.

#### Switching in Edit Mode

In *Edit* and *Preview* modes, select the environment from the bottom left corner of the screen. Switching the environment in *Edit* mode does not affect the deployed version of the application. The Production environment is always used in the deployed version.

<dd>

<ZoomImage
  src="/img/switch-img-.png" 
  alt="Switch Environments"
  caption="Switch Environments"
/>

</dd>

#### Switching in View Mode

In View mode, you can switch environments by adding a query parameter to the application URL:

- To use the Production environment, append the following query parameter to the app URL:

<dd>

```js
?environment=production
// Example: https://app.appsmith.com/app/customer-dashboard?environment=production
```

</dd>

- To switch to the Staging environment, append the following query parameter to the app URL:


<dd>

```js
?environment=staging
// Example: https://app.example.com/app/customer-dashboard?environment=staging
```

</dd>


Access to environments is restricted based on user permissions, ensuring that only authorized users can view or interact with the data. For more information on permissions, you can refer to the [Granular Access Control](/advanced-concepts/granular-access-control/reference/permissions).




<!-- vale off -->

<div className="tag-wrapper">

## Custom environments

<Tags
  tags={[
    {
      name: "Enterprise",
      link: "https://www.appsmith.com/pricing",
      additionalClass: "enterprise",
    }
  ]}
/>

</div>

<!-- vale on -->

Appsmith provides two environments by default: *Production* and *Staging*. However, if you want to create and manage your own environments, follow these steps:


<div style={{ position: "relative", paddingBottom: "calc(50.52% + 41px)", height: 0, width: "100%" }}>
  <iframe
    src="https://demo.arcade.software/9imsTddUlDYM3yne8Ti9?embed"
    frameBorder="0"
    loading="lazy"
    webkitAllowFullScreen
    mozAllowFullScreen
    allowFullScreen
    allow="fullscreen"
    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
    title="Appsmith | Connect Data"
  />
</div>


1. On the applications home page, click the **Menu icon** (three dots) in the workspace where you want to create a custom environment.

2. Select **Environments** from the menu dropdown.

3. Click the **+ Create new** button and create a new environment.

Once you've successfully created a Custom environment, you can modify roles and configure the settings by clicking on the edit icon.


## Use Git with Datasource Environments

Using Git with environment configurations allows you to connect your application to version control and work on different branches, ensuring that changes made during development do not affect the production environment. This approach enables you to thoroughly test changes on Staging data before merging them into the master branch for deployment.

You can create a new branch for each feature you're working on and commit changes to that branch as you make progress. Once a feature is stable and ready for deployment, you can merge it into the master branch.

To use environments with Git, you can follow these steps:

1. If you haven't done it already, [connect your application to Git](/advanced-concepts/version-control-with-git/guides/overview#connect-git-repository).
2. Connect to a datasource and configure the _Staging_ and _Production_ environments.
3. In the _Staging_ environment, create and switch to a `feature` branch. See [Setup Branches](/advanced-concepts/version-control-with-git) to create a branch.
4. Use the _Staging_ environment to make edits to your application so that you can test the changes without affecting production data.
5. Once you have tested your changes and are ready to deploy to production, commit your changes and merge into the `master` branch.

When you merge changes into the master branch, the production data remains unchanged, ensuring that end-users continue to view the same data they did before the changes were made. 



