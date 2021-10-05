---
description: How to add OAuth2 Authorization for Integrating Google Sheets into Appsmith
---

# OAuth2 Authorization for Google Sheets

This document describes how to integrate google sheets with Appsmith using REST APIs. By the end of this guide, you will build UI/tools that can communicate with your google sheets. You’ll also need to do some additional setup on the Google Cloud Platform to gather the necessary API keys for the authorisation access. You can follow the below steps if you need help with setting up the keys.

## **Google Cloud Platform Setup**

Google Cloud Platform allows us to authorise third-party applications to access files in our Google Drive. This essentially involves all your docs, sheets, photos and other files in your drive folder. Below are the steps to create an OAuth application that can be given permission to access your google drive folder.

1. If you’re an existing user, you can sign in to [Google Console](https://cloud.google.com/) or sign up for a new free account. 
2. You’ll then be redirected to a console, where you’ll have to create a New Project.
3. Now, you’ll have to generate OAuth 2.0 Client IDs; you can do this by navigating to the APIs and Services - Credentials section. 
4. Next, create a new app under the OAuth 2.0 Client ID section and give it a name.
5. You’ll now find two keys, Client ID and Client Secret; you’ll need these authorize appsmith to access your drive.
6. Now add the following  URIs under Authorised Redirect URIs**:** [https://app.appsmith.com/api/v1/datasources/authorize](https://app.appsmith.com/api/v1/datasources/authorize)
7. Lastly, you’ll have to enable API’s to communicate with different services. For example, if you’re integrating google sheets, you’ll have to search for Google Sheets using the top search bar and enable API.

![Gathering OAuth Client ID from Google Cloud Platform](../.gitbook/assets/image%20%289%29.png)

## **Integrating Google Sheets with Appsmith**

In this guide, you’ll learn how to build an Appsmith dashboard that performs read, write and delete operations on a Google Sheet. Eventually, you can scale this dashboard to create CRMs or workflows that can communicate with necessary google sheets. Below are the steps to authorise appsmith to access your Google Sheet:

1. First, you’ll have to create a new application on [Appsmith](https://app.appsmith.com/applications).
2. A new application opens up an application titled `Untitled Application 1`; you can rename it by double-clicking on the existing one. 
3. Next, you’ll have to create a new data-source to interact with Google Sheets: To do this create a new API by clicking on the `+` icon on the left navigation. 
4. Add a new API and save it as a data source with the following URL: [https://sheets.googleapis.com](https://sheets.googleapis.com).
5. You can also set the name of the data source; in this case, we’ll call it Gsheets.
6. Now, navigate to the Gsheets data source and set the following configuration:
   1. Authentication Type: Oauth 2.0
   2. Grant Type: Authorization Code
7. Add Authentication Token URL: [https://oauth2.googleapis.com/token](https://oauth2.googleapis.com/token); this token allows users to verify their identity, and in return, receive a unique access token in return. 
8. Add the Client ID and Client Secret from Google Cloud Platform
9. Lastly, set the following config:
   1. Scope: [https://www.googleapis.com/auth/spreadsheets](https://www.googleapis.com/auth/spreadsheets)
   2. Authorisation URL [https://accounts.google.com/o/oauth2/v2/auth](https://accounts.google.com/o/oauth2/v2/auth)
   3. Add Auth params 
      1. `prompt`: `consent`
      2. `access_type`: `offline`
10. Save and Authorize the first time around!

{% hint style="info" %}
The Scope in OAuth 2.0 helps us to limit an application's access to a user's account, while the Authorization URL requests authorization from the user.
{% endhint %}

## **Writing APIs to Interact with Google Sheets and Building UI**

The authorization part is now complete, now let’s write some APIs to perform some operation to access and manipulate the Google sheets.

### Get Data from Google Sheet

1. Now go to the GSheets data source and create a new API
2. Rename it to getSheetData
3. Now add the URL of the API and set the request type as `GET`:

First, let’s write a getSheetData API to show all the data in the sheet. Follow the below steps:

```text
https://sheets.googleapis.com/v4/spreadsheets/<spreadsheet-id>/values/Sheet1
```

* Make sure the URL you’re requesting it from the data source. 
* You can find the spreadsheet-id on the Google Sheet URL, for example, say your Google Sheet URL is: 

`https://docs.google.com/spreadsheets/d/1H0fbiVzi0r-WbgPZvc2YwYmiICnu6xW6SJY4DlDu0/edit#gid=0`

The ID will be : _`1H0fbiVzi0r-WbgPZvc2YwYmiICnu6xW6SJY4DlDu0`_

* Now hit **Run** on the top right, you’ll see the response in the response body below.

Next, you can use this response and render it on to a table widget on Appsmith. Drag and drop a new table widget on to canvas by navigating to Widgets Pane.

Open the Table Settings and paste the following JS code in the Table Data property:

```javascript
{{ getSheetData.data.values.map((item, index) => ({...item, id: index})) }}
```

With this, you’ll be able to see all the data from Google Sheet showing up in the table widget on the Appsmith dashboard. Also, the logic used here is a straightforward map function on the API using JavaScript.

> One powerful feature of Appsmith is the ability to write JS anywhere to access and manipulate things within the moustache syntax.

### **Posting Data to Google Sheet from Appsmith**

Let’s add a new feature where you can add new rows to Google sheet. For this, let’s create a new Modal widget and add some input and text widgets to create a form with the necessary fields. Here’s a screenshot of the how the fields look like:

![Creating a Form in a Modal on Appsmith](https://lh6.googleusercontent.com/ZpTNggfMB1w_MNz9JPEy4llmyrLZ9QvWGHlhOh2KsqdedTBVBWuPLzgUKoGRl2xrSscniWehfAlXkrjUmFrwyl-f3cMk4tydgT4L-pffs2elwegJtnuICOjrHpQ349fgq-ngt6Wx)

Following are the fields and widgets we’ve used to create the above form:

* OrderData field: Input Widget \(named as orderDataInput\)
* Region Field: Dropdown Widget \(named as regionInput\)
* Rep Field: Input Widget \(named repInput\)
* Units Field: Input Widget with Number \(named as unitsInput\)
* Total Field: Input Widget with Number \(named as totalInput\)

Awesome! Next, let’s write an API to post values from the above input widgets to google sheets.

For this, you’ll have to create a new API named `postNewEntry` and set the request method to post. Inside the URL, select the GSheets data source and use the following endpoint:

```text
https://sheets.googleapis.com/v4/spreadsheets/<sheet-id>/values/Sheet1:append?valueInputOption=USER_ENTERED&includeValuesInResponse=true
```

Now, you’ll have to pass the values that are being sent from the modal to this API, hence update the body parameter with the following JSON:

```javascript
{
  "range": "Sheet1",
  "majorDimension": "ROWS",
  "values": [
    [
      "{{orderDataInput.text}}",
      "{{regionInput.selectedOptionValue}}",
      "{{repInput.text}}",
      "{{unitsInput.text}}",
      "{{totalInput.text}}"
    ]
  ]
}
```

Here, you’ve used the names of your widgets to reference the input forms in the Modal widget and are posting them through this endpoint.

Next, you’ll have to set the onclick property to the **Submit Entry** button on the modal. To do this, open the buttons property pane, select onclick and choose the Call an API option. You should see the available APIs on your page. Now select the `postNewEntry` API. To update the table with new entries, you can set the onsuccess property to call an API and use the getSheetData API. Below is a screenshot of the buttons property pane:

![Configuring Button Properly and Setting Properties](https://lh5.googleusercontent.com/DIFB_MdK0ccGrPHxE7ZihO_rUB7C1-W-8WafT3B95s6JUDsiY4ruOEL-ulkjGgaKu2cxhBXjbRlxGru8YUN6VnFGqZDJnaX5a4rdykCpsqawUXGR2_Y8nZS5GtV4pSZLqZHTErHR)

With this, you can POST new entries to your google sheet from Appsmith Dashboard with customised UI! Similarly, you could have a new Delete API to delete entries on google sheet from the Appsmith dashboard.

