---
description: >-
  Set up default access to apps in Granular Access Control
title: Default Access to Apps
hide_title: true
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Set up Default Access to Apps</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->

To simplify access management and ensure consistency across the Appsmith instance, you may need to set default permissions for all users. This page explains how to set default permissions for all users accessing the Appsmith instance.

## Prerequisites

Before beginning the configuration process, ensure you have:

- A self-hosted Appsmith Commercial Edition installation. If not installed yet, see the [Installation Guides](/getting-started/setup/installation-guides)
- Access to update role configuration.

## Configure permissions

Follow these steps to configure permissions:

1. Navigate to Admin Settings by clicking the gear (⚙️) icon in the top right corner of your Appsmith Dashboard.
2. From the sidebar, under **Access Control**, select **Roles**.
3. Toggle **Default Roles** to show all the default roles.
4. Click the pencil icon next to _Default Role For All Users_ that opens a configuration screen as shown below:

   ![Configuration screen for Default Role for All users](/img/GAC-Default-roles-for-all-users-configuration.png)

5. Based on your permission needs, provide access to resources. For example, if you want to provide read-only access to the Annual Sales report app so that all authenticated users can view it, assign permissions as below:

   | UI Tab                        | Resource Type | Resource             | Permissions |
   | ---------------------------- | --------------|---------------------|-------------|
   | Application Resources         | Application   | Sales Report        | View        |
   | Application Resources         | Page          | Annual Sales Report | View        |
   | Application Resources         | Query         | sel_annual_sales_report | Execute |
   | Datasources & Environments   | Datasource    | Sales               | Execute     |
   | Datasources & Environments   | Environment   | Production          | Execute     |

6. Once you have configured the permissions, click the **Save changes** button. 

This configuration provides read-only access to all users once authenticated to the Annual Sales Report app. For more information about permissions, see [Permissions](/advanced-concepts/granular-access-control/reference/permissions).

## Troubleshooting

If you encounter any issues, contact the support team using the chat widget at the bottom right of this page.
