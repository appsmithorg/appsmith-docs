---
description: Learn to connect to Zoho via OAuth 2.0 and create a campaign from your app.
---
# How to Integrate Zoho Into Appsmith With OAuth 2.0

This guide describes how to configure an Authenticated API datasource for Zoho with OAuth 2.0 and create a query that creates a campaign from your Appsmith app.

## Prerequisites

1. Create a [Zoho account](https://www.zoho.com/signup.html?all_prod_page=true&ireft=nhome&src=home1-header)

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
1. In the **Params** tab of the query editor, enter the following key/value pairs:

    | Key | Value |
    |-----|-------|
    | `campaignname` | `{{JSONForm1.formData.campaign_name}}` |
    | `from_email` | `{{JSONForm1.formData.from_email}}` |
    | `subject` | `{{JSONForm1.formData.subject}}` |
    | `list_details` | `{{ {JSONForm1.formData.listkey}}:[]} }}` |

<!--
list_details value doesn't currently work. May need to be something like:

{{
    (function(){
    const listkey = JSONForm1.formData.list_details
    const param = {}
    param[JSONForm1.formData.list_details] = []
    return param
    })()
}}
-->

Once this query is run, a successful response returns a `campaignKey` that can be used in another query to send that campaign.

### Send campaign

1. Create a query based on your Authenticated API datasource for Zoho.
1. Set the request method to `POST`.
1. Append `/v1.1/sendcampaign` to the URL.
1. In the **Params** tab of the query editor, enter the following key/value pairs:
    * **Key:** `campaignKey`
    * **Value:** `{{CreateCampaignQuery.data.campaignKey}}`

When this query runs successfully, your campaign should be on the way to its recipients.

### Widgets

The following steps describe how to set up the UI to interact with your queries:

1. On the canvas, create a [JSON Form widget](/reference/widgets/json-form) and paste the following snippet into its **Source Data** property:
    ```json
    {
        "list": [],
        "campaign name": "",
        "from_email": "",
        "subject": ""
    }
    ```
1. Open the properties for the **List** field of the form, and check that its **Field Type** is set to `Select`.
1. Enter the following code into the **Options** field:
    ```javascript
    {{
        GetMailingListsQuery.data.list_of_details.map(list => {
            return {
                label: list.listname, value: list.listkey
            }
        })
    }}
    ```
    * Now your **List** field should automatically populate with the available mailing lists from your Zoho account.
1. In the JSON Form's **onSubmit** property, toggle the **JS** tag and write:
    ```javascript
    {{
        CreateCampaign.run().then(() => {
            showAlert('Campaign created', 'success');
        }).catch(() => {
            showAlert('There was an error', 'error');
        });
    }}
    ```

---

1. Next, place a new [Button widget](/reference/widgets/button) onto the canvas below the JSON Form, and update its label to `Send Campaign`.
1. In the button's properties, toggle the **JS** tag for the **Disabled** property and set the value to:
    ```javascript
    {{CreateCampaignQuery.data.campaignKey? false: true}}
    ```
    * This button is only usable after a campaign is successfully created.
1. Toggle the **JS** tag for the button's **onClick** property and set the field to:
    ```javascript
    {{
        SendCampaign.run().then(() => {
            showAlert('Campaign Sent', 'success');
        }).catch(() => {
            showAlert('There was an error', 'error');
        });
    }}
    ```

After these steps, your app should be set up to create and send a new Zoho email campaign.