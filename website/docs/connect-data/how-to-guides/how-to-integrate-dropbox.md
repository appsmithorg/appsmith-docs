---
sidebar_position: 1
description: Learn to connect to Dropbox via OAuth 2.0 and upload a file from your app.
---

# Upload Files to Dropbox

This guide describes how to configure an Authenticated API datasource for Dropbox with OAuth 2.0 and create a query that uploads a file to Dropbox from your Appsmith app.

## Prerequisites

1. Create a [Dropbox account](https://www.dropbox.com/register)

## Create a Dropbox app

If you haven't already created an app with Dropbox, follow the steps below:

1. Navigate to the [App Console](https://www.dropbox.com/developers/apps) and click the **Create App** button.
1. On the next page, configure your app's **API**, **Type of access**, and **Name** to meet your needs.
1. Click **Create app** to finish setup and be taken to your new app's configuration screen.

## Configure the Authenticated API

The following steps walk you through configuring a datasource that can query Dropbox with OAuth 2.0.

1. In Appsmith, create an Authenticated API datasource and update its name.
1. In the datasource configuration screen, set up the fields as follows: 

* **URL:**
    ```
    https://content.dropboxapi.com/
    ```
* **Authentication Type:**  OAuth 2.0 
* **Grant Type:**           Authorization Code  
* **Access Token URL:**
    ```
    https://api.dropboxapi.com/oauth2/token
    ```
* **Client ID:**
    * In the Dropbox [App Console](https://www.dropbox.com/developers/apps?\_tk=pilot\_lp&\_ad=topbar4&\_camp=myapps): Select your app > **Settings** > **App key**.
* **Client Secret:**
    * In the Dropbox App Console: **Settings** > **App secret**.
* **Scopes:**
    * Configure in the Dropbox App Console: Select your app > **Permissions**.
    * Tick the `files.content.write` checkbox.
    * Enter `files.content.write` into Appsmith's **Scope(s)** field.
* **Authorization URL:**
    ```
    https://www.dropbox.com/oauth2/authorize
    ```
* **Redirect URL:**
    * In Appsmith, click the **Copy** button next to this field. 
    * In the Dropbox App Console: Select your app > **Settings** > **`OAuth2`** > **Redirect URIs**.
    * Paste the URL copied from Appsmith into the **Redirect URIs** field in Dropbox, and then click **Add**.

When you're finished, click the `Save and Authorize` button. You’ll be redirected to a confirmation page with Dropbox to allow access to Appsmith. If your authentication is set up correctly, an alert lets you know that "Authorization was successful."

## Configure the upload query

These steps show how to set up a query that can upload a file to Dropbox. You'll set up the necessary widgets in the next section.

1. Once your Authenticated API datasource is configured, create a query based on it.
1. Set the request method to `POST`.
1. The base URL (`https://content.dropboxapi.com/`) should already be inherited from the datasource. Append `2/files/upload` to the URL.
1. Create a **Header** key/value pair:
    * **Key:**`Content-Type`
    * **Value:** `application/octet-stream`
1. Create a **Header** key/value pair:
    * **Key:**`Dropbox-API-Arg`
    * **Value:**
        ```
        {"path": "/{{FilePicker1.files[0].name}}","mode": "add", "autorename" : true, "mute" : false, "strict_conflict": false}
        ```
1. In the **Body** tab of the query, select the **RAW** type and write the following code:
    ```javascript
    {{FilePicker1.files[0].data}}
    ```

## Configure the Filepicker

With the query completed, you're ready to connect a widget that uploads a file and run the query:

1. Back on the canvas, create a [Filepicker widget](/reference/widgets/filepicker).
1. Set the Filepicker's **Data Format** property to `Binary`.
1. Set the Filepicker's **onFilesSelected** property to run your query that uploads your file to Dropbox, and add callbacks to alert the user of the result.
    1. **onFilesSelected** > **Execute a query** > Select your query
    1. Click **Callbacks** in the properties pane.
    1. **On success** > **Show alert** > In the **Message** field, enter `File uploaded.`
    1. **On failure** > **Show alert** > In the **Message** field, enter `There was an error.`

Your query is ready to test; upload a file to the Filepicker widget, click the button, and verify whether the upload is successful.