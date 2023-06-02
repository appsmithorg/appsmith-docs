---
description: Learn to connect to Zoho via OAuth 2.0 and create a campaign from your app.
---
# How to Integrate With Zoho

This guide describes how to configure an Authenticated API datasource for Zoho with OAuth 2.0 and create a query that creates a campaign from your Appsmith app.

## Prerequisites

1. Zoho account

---

## Set up the Zoho API Console

If you haven't already created an app in the Zoho API Console, follow these steps:

1. From the [Zoho API Console](https://api-console.zoho.com/), start creating an app by clicking **Server-based Applications**.
1. In **Client ID**, enter a name for your app.
1. In **Homepage URL**, enter:
    ```
    https://app.appsmith.com
    ```
1. In **Authorized Redirect URIs**, enter:
    ```
    https://app.appsmith.com/api/v1/datasources/authorize
    ```
1. Click **Create** to finish creating your Zoho app. You'll be taken to its console page with its configuration.

## Configure the Authenticated API

:::info
The Zoho API domains are location-specific, so be sure to use the correct domain for your region. For example, users in the United States should use `https://campaigns.zoho.com/`, whereas users in India should use `https://campaigns/zoho.in/`. For a full list of domains, see the [Zoho docs](https://www.zoho.com/campaigns/help/developers/data-centers.html).
:::

1. In Appsmith, create an Authenticated API datasource and update its name.
1. In the datasource configuration screen, set up the fields as follows: 

* **URL:**
    ```
    https://campaigns.zoho.com/api
    ```
* **Query Params:**
    * **Key:** `resfmt`
    * **Value** `JSON`
* **Authentication Type:** OAuth 2.0 
* **Grant Type:** Authorization Code  
* **Access Token URL:**
    ```
    https://accounts.zoho.com/oauth/v2/token
    ```
* **Client ID:** Find in Zoho: [Zoho API Console](https://api-console.zoho.com)>> Select Your Application >> Select Client Secret Tab>> Copy Client ID.
* **Client Secret:** Find in Zoho: [Zoho API Console](https://api-console.zoho.com)>> Select Your Application >> Select Client Secret Tab>> Copy Client Secret.
* **Scope(s):**
    ```
    ZohoCampaigns.campaign.ALL,ZohoCampaigns.contact.ALL
    ```
* **Client Authentication:** `Send as Basic Auth header`
* **Authorization URL:**
    ```
    https://accounts.zoho.com/oauth/v2/auth
    ```
* **Custom Authentication Parameters:**
    * **Key:** `access_type`
    * **Value:** `offline`

When you're finished, click the `Save and Authorize` button. You’ll be redirected to a confirmation page with Zoho to allow access to Appsmith; click **Accept**. If your authentication is set up correctly, an alert lets you know that "Authorization was successful."

## Configure the queries

Below, you'll set up three queries, build the UI with widgets, and then connect them all together.

### Get contact list

:::info
To create a campaign, you need to have a Zoho "List" of contacts to send mail to. If you don't already have a contact list, you can [follow this guide](https://help.zoho.com/portal/en/kb/campaigns/user-guide/contact-management/list-management/articles/mailing-list-management#Create_list) to make one, or use the auto-generated "My Sample List" that Zoho made for you when you created your account.
:::

1. Once your Authenticated API datasource is configured, create a query based on it.
1. Set the request method to `GET`.
1. The base URL should already be inherited from the datasource. Append `/v1.1/getmailinglists?resfmt=JSON` to the URL.

This query returns an array of contact lists available on your account. You'll use the `listkey` property from your desired list in the Create Campaign query below.

### Create campaign

1. Create a query based on your Authenticated API datasource for Zoho.
1. Set the request method to `POST`.
1. Append `/v1.1/createCampaign` to the URL.
1. In the **Body** tab of the query editor, select **FORM_URLENCODED** and enter the following key/value pairs:

    | Key | Value |
    |-----|-------|
    | `campaignname` | `{{JSONForm1.formData.campaignname}}` |
    | `from_email` | `{{JSONForm1.formData.from_email}}` |
    | `subject` | `{{JSONForm1.formData.subject}}` |
    | `list_details` | `{ {{JSONForm1.formData.listkey}} }` |


### Send campaign



### Widgets