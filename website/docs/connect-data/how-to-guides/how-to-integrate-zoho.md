---
description: Learn to connect to Zoho via OAuth 2.0 and create a campaign from your app.
---
# Create Campaigns With Zoho

This guide describes how to configure an Authenticated API datasource for Zoho with OAuth 2.0 and create a query that creates a campaign from your Appsmith app.

## Prerequisites

1. Create a [Zoho account](https://www.zoho.com/signup.html?all_prod_page=true&ireft=nhome&src=home1-header)
1. Create a List in Zoho that contains a group of email contacts that you'll send your campaign to. To create a List, [follow this guide](https://help.zoho.com/portal/en/kb/campaigns/user-guide/contact-management/list-management/articles/mailing-list-management#Create_list).

## Set up the Zoho API Console

If you haven't already created an app in the Zoho API Console, follow these steps:

1. From the [Zoho API Console](https://api-console.zoho.com/), start creating an app by clicking **Server-based Applications**.
1. In **Client ID**, enter a name for your app.
1. In **Homepage URL**, enter the domain of your appsmith instance. For the Appsmith Cloud, use:
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
The Zoho API domains are location-specific. Check which region and domain you should use in the [Zoho docs](https://www.zoho.com/campaigns/help/developers/data-centers.html).
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
* **Authentication Type:** `OAuth 2.0` 
* **Grant Type:** `Authorization Code`
* **Access Token URL:**
    ```
    https://accounts.zoho.com/oauth/v2/token
    ```
* **Client ID:** In the [Zoho API Console](https://api-console.zoho.com): Select your application > **Client Secret** > **Client ID**.
* **Client Secret:** In the Zoho API Console: Select your application > **Client Secret** > **Client Secret**.
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

## Configure queries and a JSON Form

With the steps below, create a query to retrieve your Zoho List that you'll send your campaign to. You'll use the results of this query to pre-fill a widget in a form so the user can select a contact List when they create a campaign.

1. Once your Authenticated API datasource is configured, create a query based on it.
1. Set the request method to `GET`.
1. The base URL should already be inherited from the datasource. Append `/v1.1/getmailinglists` to the URL.

This query returns an array of contact Lists available on your account. You'll use the `listkey` property from your desired list in the Create Campaign query.

Next, you'll build a JSON Form:

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
1. Enter the following code into the **Options** field. It references queries that you'll create in the next steps.
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

Next, build the Create Campaign query. You'll connect this to the JSON Form's submit button afterwards.

1. Create a query based on your Authenticated API datasource for Zoho.
1. Set the request method to `POST`.
1. Append `/v1.1/createCampaign` to the URL.
1. In the **Params** tab of the query editor, enter the following key/value pairs:

    | Key | Value |
    |-----|-------|
    | `campaignname` | `{{JSONForm1.formData.campaign_name}}` |
    | `from_email` | `{{JSONForm1.formData.from_email}}` |
    | `subject` | `{{JSONForm1.formData.subject}}` |
    | `list_details` | `{{ {JSONForm1.formData.listkey:[]} }}` |

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

With the query created, go back to your JSON Form and set up the submit button:

1. Set the JSON Form's **onSubmit** property to run your query that creates the campaign, and add callbacks to alert the user of the result.
    1. **onSubmit** > **Execute a query** > Select your query
    1. Click **Callbacks** in the properties pane.
    1. **On success** > **Show alert** > In the **Message** field, enter `Campaign created.`
    1. **On failure** > **Show alert** > In the **Message** field, enter `There was an error.`

Once this query is run, a successful response returns a `campaignKey` that can be used in other queries to modify or send that campaign.

After these steps, your app should be set up to create a new Zoho email campaign.