# Authorization Code

An [authorization code](https://oauth.net/2/grant-types/authorization-code/) is a temporary code authorized by an authorization server. You can get an [access token](https://oauth.net/2/access-tokens/) in exchange for an authorization code. Once you get an [access token](https://oauth.net/2/access-tokens/), you can use it to access the resources or perform actions on behalf of the user.

In Appsmith, you can achieve this by setting up an `Authenticated API` and configuring it to use the `Authorization Code` as the grant type.

 <VideoEmbed host="youtube" videoId="YfdK3t2r5Co" /> 


## Integrate with Dropbox

Let’s take an example to understand the authorization code integration with Dropbox. You have a portal app built on Appsmith, and your app users use it to upload their profiles. You already have a backend application integrated with Dropbox and want to use Dropbox to store the profiles. To achieve this, you have to create an Authenticated API and configure it to connect with Dropbox.

### User endpoint

You’ll have to connect to a user endpoint on the Dropbox platform to perform API calls. Navigate to the [exhaustive list of user endpoints](https://www.dropbox.com/developers/documentation/http/documentation) used by Dropbox for different API calls.

:::info
Dropbox provides [details on headers or the content type](https://www.dropbox.com/developers/documentation/http/documentation) that you must add to your requests.
:::

### Configure Authenticated API

For uploading files configure `Authenticated API` as per below table:

| **Appsmith**            | **Dropbox**                                                                                                                                                                                    | **Value**                                                                                                                                                          |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **URL**                 | User Endpoint                                                                                                                                                                                  | `https://content.dropboxapi.com/`                                                                                                                                  |
| **Headers**             | `Dropbox-API-Arg`                                                                                                                                                                              | {"path": "/\{{**`<`**`pick the file path from widget like`` `**`FilePicker`**`>`\}}","mode" - add, `autorename` : true, "mute" : false,"strict\_conflict" :false} |
| **Headers**             | `Content-Type`                                                                                                                                                                                 | `application/octet-stream`                                                                                                                                         |
| **Authentication Type** | NA                                                                                                                                                                                             | OAuth 2.0                                                                                                                                                          |
| **Grant Type**          | NA                                                                                                                                                                                             | Authorization Code                                                                                                                                                 |
| **Access Token URL**    | Token Endpoint                                                                                                                                                                                 | `https://api.dropboxapi.com/oauth2/token`                                                                                                                          |
| **Client ID**           | Navigate to [Appconsole](https://www.dropbox.com/developers/apps?\_tk=pilot\_lp&\_ad=topbar4&\_camp=myapps) >> Select **App** >> **Settings** tab >> **App key**                               | Copy the App key and add in the Client ID field.                                                                                                                   |
| **Client Secret**       | Navigate to [Appconsole](https://www.dropbox.com/developers/apps?\_tk=pilot\_lp&\_ad=topbar4&\_camp=myapps) >> Select **App** >> **Settings** tab >> **App secret**                            | Copy the App secret and add in the Client secret field.                                                                                                            |
| **Scopes**              | Navigate to [Appconsole](https://www.dropbox.com/developers/apps?\_tk=pilot\_lp&\_ad=topbar4&\_camp=myapps) >> Select **App** >> **Permissions** tab >> select **Scope** `files.content.write` | Copy the scope `files.content.write` and add it to the field.                                                                                                      |
| **Authorization URL**   | Authorization Endpoint                                                                                                                                                                         | `https://www.dropbox.com/oauth2/authorize`                                                                                                                         |
| **Redirect URL**        | Navigate to [Appconsole](https://www.dropbox.com/developers/apps?\_tk=pilot\_lp&\_ad=topbar4&\_camp=myapps) >> Select **App** >> **Settings** tab >> **`OAuth2`** >> **Redirect URIs**           | Add the Redirect URL from Appsmith to the field and click add button.                                                                                              |

:::info
To create an application you can also follow the[ OAuth guide ](https://developers.dropbox.com/oauth-guide)available at Dropbox.
:::

Keep the rest of the settings and click the `Save and Authorize` button. You’ll be redirected to the datasource screen on Appsmith with the response status as success on successful authentication.

:::info
You can verify if your datasource verification has been successful by checking the `response_status` in the address bar of your browser.
:::

### Upload files

A user selects the files by using a `Filepicker` widget. Whenever a user chooses a file and clicks upload, the button executes the API for uploading the file. Here’s a blueprint of interaction between Portal App and Dropbox:

![Upload files workflow and interaction](</img/OAuth2.0API_Integration__Authorization_Code__Workflow__Upload.png>)

1. User selects a file and clicks on the upload button.
2. The `Upload API` residing on Appsmith is called.
3. The `Authenticated API` talks to Dropbox APIs for authorization and generating a token. The token generated is added to the Upload API call.
4. The upload request is executed on Dropbox to upload a file.
5. Dropbox directory structure shows that the file is uploaded successfully.

You can send the response all up to the Portal App to display the uploaded file or bind it to show a message to intimate users for a successful upload.

Let’s configure Authentication API to integrate with Dropbox and create the workflow for uploading files.

 <VideoEmbed host="youtube" videoId="RHhp5WaQV1g" /> 

### Create query

Navigate to **Explorer** → Click **(+)** next to Query/API → Select `New <AuthenticatedAPIName> Query` under **Create Query.**

The action adds an API connected to the Datasource (AuthenticatedAPI) for Dropbox. You’ll see that the User Endpoint you configured for the datasource is already available, along with the header details.

![Create a query to use the Dropbox Authenticated API](</img/OAuth2.0__API_Integration__Authorization_Code__Create_New_Query.png>)

There are two ways to add the headers to the APIs:

#### **Add Headers to Authenticated API**

You can add headers directly to the Authenticated API when you configure it. Here you can add the headers that are common across the APIs. For example, content-type.

#### **Add Headers to API**

You can add headers to individual APIs when you add them to the platform. Here you can add headers that are specific to API.

### Add Widget

Let’s add a Filepicker widget to canvas and configure it to trigger the `Upload API` call.

* Navigate to [**Widgets**](/reference/widgets/) → search **FilePicker** in the search bar → Drag the [widget](/reference/widgets/) onto the canvas.
* Select the [`FilePicker`](../../../../../reference/widgets/filepicker.md) Widget and navigate to the `onFilesSelected` event available on the properties pane.
* Enable JS available next to the event
* Add the following code in the input box.

```
{{UploadFileToDropbox.run() }} 
```

The above code snippet executes the API whenever from a [FilePicker](/reference/widgets/filepicker) widget user selects a file and clicks on the Upload button available on the widget.

:::info
At any given point in time, you can add data to your headers by using the mustache **`{{}}`** sign. For example, `FilePicker1.files[0].name` for filename.
:::

Once the API call is successful, you can navigate to the Dropbox interface and verify the file upload.

## Integrate with Google Docs

Follow the sections below to configuring your [Authenticated API](/core-concepts/connecting-to-data-sources/authentication/#creating-an-authenticated-api-datasource) using Google Docs integration.

### User Endpoint

You need to connect to a user endpoint on the Google Docs platform to perform API calls. Google Docs provide an [exhaustive guide for integrating with Docs API](https://developers.google.com/docs/api/how-tos/overview).

### Configure Authenticated API

Follow these steps to configure Google Docs integration for an Authenticated API.

 <VideoEmbed host="youtube" videoId="ZO9rV9j2S9w" /> 



| **Appsmith**            | **Google Docs**                                                                                                                                                                                                                                                                                               | **Value**                                                                                                              |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **URL**                 | User Endpoint                                                                                                                                                                                                                                                                                                 | `https://docs.googleapis.com/`                                                                                         |
| **Authentication Type** | NA                                                                                                                                                                                                                                                                                                            | `OAuth 2.0`                                                                                                            |
| **Grant Type**          | NA                                                                                                                                                                                                                                                                                                            | `Authorization Code`                                                                                                   |
| **Access Token URL**    | Token Endpoint                                                                                                                                                                                                                                                                                                | `https://oauth2.googleapis.com/token`                                                                                  |
| **Client ID**           | Navigate to [Google API Console](https://console.developers.google.com) >> Select Your Project that has Google Docs API Enabled >> Select Google API Docs on API/Service Details >> Click Client Credentials >> Select the OAuth 2.0 Client >> Copy Client ID                                              | Copy the Client ID and add in the Client ID field.                                                                     |
| **Client Secret**       | <p>Navigate to <a href="https://console.developers.google.com">Google API Console</a> >> Select Your Project that has Google Docs API Enabled >> Select Google API Docs on API/Service Details >> Click Client Credentials >> Select the OAuth 2.0 Client >></p><p>Copy Client Secret</p>                  | Copy the Client secret and add in the Client secret field.                                                             |
| **Scopes**              | Navigate to [Google API doc ](https://developers.google.com/docs/api/reference/rest/v1/documents)>>Click the API you are integrating with for example (create) >> on the right Panel >> Try this method >> scroll to the **show scopes** link >> click the link to reveal the scopes required for the API. | <p><code>https://www.googleapis.com/auth/documents</code></p><p><code>https://www.googleapis.com/auth/drive</code></p> |
| **Authorization URL**   | Authorization Endpoint                                                                                                                                                                                                                                                                                        | `https://accounts.google.com/o/oauth2/auth`                                                                            |
| **Redirect URL**        | Navigate to [Google API Console](https://console.developers.google.com) >> Select Your Project that has Google Docs API Enabled >> Select Google API Docs on API/Service Details >> Click Client Credentials >> Select the OAuth 2.0 Client >>Authorized redirect URIs                                     | Add the Redirect URL from Appsmith to the field and click the save button.                                             |

:::tip
You can follow the step-by-step guide provided by Google to set up an [OAuth 2.0 Client](https://support.google.com/cloud/answer/6158849?hl=en#zippy=%2Cuser-consent).
:::

Keep the other settings as is and click `Save & Authorize` button to create the Authenticated API. You’ll be asked to sign in to your Google account and authorize the datasource. Once successfully authenticated, you’ll navigate to the Appsmith Datasource screen with response status available in the address bar. A response status as success marks the successful configuration of the datasource.

Once the datasource is added, you can create queries and perform different actions with the Google Docs interface.

:::info
You can also check out the How-To Guide- [How to add OAuth2 Authorization for Integrating Google Sheets](/learning-and-resources/how-to-guides/oauth2-authorization-for-google-sheets) into Appsmith.
:::

## Integrate with Zoho campaigns

Let’s look into another integration that you can do with [Authenticated APIs](/core-concepts/connecting-to-data-sources/authentication/#creating-an-authenticated-api-datasource). In this section, you’ll be able to configure your Appsmith app to integrate with Zoho Campaigns.

### User Endpoint

You’ll have to connect to a user endpoint on the Zoho Campaigns platform to perform API calls. Zoho Campaigns provide an [exhaustive developer guide for integrating with Campaign APIs](https://www.zoho.com/campaigns/help/developers/campaign-management.html).

### Configure Authenticated API

Follow these steps to configure Zoho Campaigns' integration for an Authenticated API.

 <VideoEmbed host="youtube" videoId="ABN1SadqXk4" /> 


:::info
The Zoho APIs are location-specific. For example, if your organization is located in the United States of America (USA), then the API endpoints you use should be specific to the`.com` domain. For example, `https://campaigns.zoho.com/` is used if your organization is located in the USA. Whenever you configure the URL in the `Authenticated API`, verify the **location** of your **organization**.
:::

| **Appsmith**            | **Zoho Campaigns**                                                                                                                                                                        | **Value**                                                                        |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| **URL**                 | User Endpoint                                                                                                                                                                             | `https://campaigns.zoho.in/api`                                                  |
| **Authentication Type** | NA                                                                                                                                                                                        | `OAuth 2.0`                                                                      |
| **Grant Type**          | NA                                                                                                                                                                                        | `Authorization Cod`e                                                             |
| **Access Token URL**    | Token Endpoint                                                                                                                                                                            | `https://accounts.zoho.in/oauth/v2/token`                                        |
| **Client ID**           | Navigate to [Zoho API Console](https://api-console.zoho.com)>> Select Your Application >> Select Client Secret Tab>> Copy Client ID                                                       | Add it to the Client ID field on Appsmith.                                       |
| **Client Secret**       | Navigate to [Zoho API Console](https://api-console.zoho.com)>> Select Your Application >> Select Client Secret Tab>> Copy Client Secret                                                   | Add it to the Client secret field on Appsmith.                                   |
| **Scopes**              | Navigate to the [Zoho Campaign guide](https://www.zoho.com/campaigns/help/developers/campaign-details.html) and click the API you want to integrate with and check the scope required. | `Zohocampaigns.campaign.ALL`                                                     |
| **Authorization URL**   | Authorization Endpoint                                                                                                                                                                    | `https://accounts.zoho.in/oauth/v2/auth`                                         |
| **Redirect URL**        | Navigate to [Zoho API Console](https://api-console.zoho.com)>> Select Your Application >> Select Client Details>> Authorized Redirect URIs                                                | Add the Redirect URL from Appsmith to the field and click the **Update** button. |

:::info
You can follow the step-by-step guide provided by Zoho to [Register the Client](https://www.zoho.com/people/api/oauth-steps.html).
:::

Once you change the above fields, click the `Save & Authorize` button to create the Authenticated API. You’ll be asked to authorize the datasource by signing in to your Zoho Account. You’ll be navigated to the Appsmith Datasource screen with a response status as success available in the address bar on successful authentication.

Once the datasource is added, you can create queries and perform different actions with the Zoho Campaign interface.

## Additional Settings

Apart from the required settings, there are some optional settings which have default values set, and you can change the configuration if the need be:

### Custom authentication parameters

If your authorization server needs you to send some custom query parameters as part of access token request, you can add those here. You can add one or more parameters based on your needs. For example, your API needs a parameter `showPrompt` that is sent to authorization server and based on it your API logic either presents user with a prompt to take the consent or the prompt is not shown as the consent is already recorded. In such cases, you configure the `showPrompt` parameter as a custom parameter.

![Add one or more custom authentication parameters](</img/OAuth_2.0__API_Integration__Custom_Authentication_Parameters_(1).png>)

### Client authentication

If your APIs need client credentials to be sent along then you can use client authentication field. You can either choose to send the client credentials as part of:

![Select the option to send Client Authentication](</img/OAuth_2.0__API_Integration__Client_Credentials.png>)

* Basic authorization header by selecting **Send as Basic Auth Header**.
* Body in the form of client credentials by selecting **Send client credentials in body**.

## Advanced Settings

There are some advance settings that you can configure as part of your [Authenticated API](/core-concepts/connecting-to-data-sources/authentication/#creating-an-authenticated-api-datasource).

### Send scope with refresh token

With this configuration you can choose to send the scope configured for the API along with a refresh token. By default, the setting is turned off. You can turn on the settings by selecting **Yes**.

![Select 'Yes' to turn on the setting](</img/OAuth_2.0__API_Integration__Advanced_Settings__Send_Scope_with_refresh_token.png>)

### Send client credentials with (on refresh token)

You can choose to send the client credentials along with refresh tokens by configuring this field. You can either choose to send the client credentials as part of header by selecting **header**, or as part of body by selecting **body.**

![You can choose what best suits your business needs](</img/OAuth_2.0__API_Integration__Send_client_credentials_with.png>)

With [OAuth 2.0](./) integration, you can connect your APIs to Appsmith and build complex apps.

## Troubleshooting
If you face issues, reach out to [support@appsmith.com](mailto:support@appsmith.com).
