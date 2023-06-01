---
sidebar_position: 1
---

# How to Upload a File to Dropbox

This guide describes how to configure an Authenticated API datasource for Dropbox with OAuth 2.0 and create a query that uploads a file to Dropbox from your Appsmith app.

## Configure the Authenticated API

1. Create an Authenticated API datasource and update its name.
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
    * Find in Dropbox: [Appconsole](https://www.dropbox.com/developers/apps?\_tk=pilot\_lp&\_ad=topbar4&\_camp=myapps) >> Select **App** >> **Settings** tab >> **App key**.
* **Client Secret:**
    * Find in Dropbox: [Appconsole](https://www.dropbox.com/developers/apps?\_tk=pilot\_lp&\_ad=topbar4&\_camp=myapps) >> Select **App** >> **Settings** tab >> **App secret**.
* **Scopes:**
    * Configure in Dropbox: [Appconsole](https://www.dropbox.com/developers/apps?\_tk=pilot\_lp&\_ad=topbar4&\_camp=myapps) >> Select **App** >> **Permissions** tab.
    * Tick the `files.content.write` checkbox.
    * Enter `files.content.write` into Appsmith's **Scope(s)** field.
* **Authorization URL:**
    ```
    https://www.dropbox.com/oauth2/authorize
    ```
* **Redirect URL:**
    * In Appsmith, click the **Copy** button next to this field. 
    * Find in Dropbox: [Appconsole](https://www.dropbox.com/developers/apps?\_tk=pilot\_lp&\_ad=topbar4&\_camp=myapps) >> Find **App** >> **Settings** tab >> **`OAuth2`** >> **Redirect URIs**.
    * Paste the URL copied from Appsmith into the **Redirect URIs** field in Dropbox, and then click **Add**.

When you're finished, click the `Save and Authorize` button. You’ll be redirected to a confirmation page with Dropbox to allow access to Appsmith. If your authentication is set up correctly, an alert lets you know that "Authorization was successful."

## Configure the query

1. Once your Authenticated API datasource is configured, create a query based on it.
1. Set the request method to `POST`.
1. The base URL should already be inherited from the datasource. Append `2/files/upload` to the URL.
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

## Configure the widgets

1. Back on the canvas, create a [Filepicker widget](/reference/widgets/filepicker).
1. Set the Filepicker's **Data Format** property to `Binary`.
1. Create a [Button widget](/reference/widgets/button).
1. Set the Button's **onClick** property to run your query that uploads your file to Dropbox, and add callbacks to alert the user of the result.
    * In code:
        ```javascript
        {{
            UploadFileQuery.run().then(() => {
                showAlert('File uploaded successfully.', 'success');
            }).catch(() => {
                showAlert('There was an error.', 'error');
            });
        }}
        ```

Your query is ready to test; upload a file to the Filepicker widget, click the button, and verify whether the upload is successful.