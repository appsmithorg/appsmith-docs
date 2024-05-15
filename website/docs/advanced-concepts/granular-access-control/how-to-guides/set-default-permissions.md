---
description: >-
  Set default permissions for all users in Granular Access Control
title: Set Default Permissions for All Users
hide_title: true
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Set Default Permissions for All Users</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->

To simplify access management and ensure consistency across Appsmith instance, you may need to set some default permissions for all users. This page shows how to set default permissions for all users accessing Appsmith instance.
 
## Prerequisites:

Before beginning the configuration process, ensure you have:

- A self-hosted Appsmith Commercial Edition installation. If not installed yet, see the [installation guides](/getting-started/setup/installation-guides) 
- Access to update role configuration.

## Configure permissions

Follow these steps to configure permissions:

1. Navigate to Admin Settings by clicking the gear (⚙️) icon in the top right corner of your Appsmith Dashboard.
2. From the sidebar, under *Access Control* select **Roles.**
3. Toggle **Default Roles** to show all the default roles.
4. Click the pencil icon next to _Default Role For All Users_. This will open a configuration screen as shown below:
    <ZoomImage
        src="/img/GAC-Default-roles-for-all-users-configuration.png" 
        alt="Configuration screen for Default Role for All users"
        caption="Configuration screen for Default Role for All users"
    />
5. Based on your permission needs, provide access to resources. For example, you want to provide read-only access to Annual Sales report app, so that all authenticated users can view this report. To achieve this, you will have to provide below permissions:

    | UI Tab| Resource Type | Resource |  Permissions |
    | --- | --- |---|---|
    | Application Resources | Application | Sales Report            | View |
    | Application Resources | Page        | Annual Sales Report     | View |
    | Application Resources | Query       | sel_annual_sales_report | Execute |
    | Datasources & Environments | Datasource | Sales | Execute |
    | Datasources & Environments | Environment | Production | Execute |

6. Once you have configured the permissions, click the **Save changes** button. 

This configuration provides the `read-only` access to all the users once authenticated to the *Annual Sales Report* app. For more information about permissions, see [Permissions](/advanced-concepts/granular-access-control/reference/permissions).

## Troubleshooting

If you face issues, contact the support team using the chat widget at the bottom right of this page.