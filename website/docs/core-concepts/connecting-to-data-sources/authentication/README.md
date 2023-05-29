# REST APIs

With Appsmith, you can connect to a wide range of tools and platforms. If you want to connect to an API or if there isn't a native integration with a datasource on Appsmith, you can connect through the REST API interface. 

If the API is protected by an authentication mechanism that requires a standard set of headers or parameters that need to be sent with every request, you can save these in a common datasource that can be reused with every request known as Authenticated API datasources.

:::info
Appsmith encrypts all your datasource credentials and stores them securely. Appsmith also doesn't store any data returned from your datasources and acts only as a proxy layer to orchestrate the execution of Queries. As Appsmith is an open source framework, you can [deploy it on-premise](/getting-started/setup), and audit it to ensure none of your data leaves your VPC. For more information, see [Security](/product/security#security-measures-within-appsmith). 
:::

## Connecting to REST API

To connect to a REST API, go to the **Explorer** tab, click the **+** icon next to **Datasources** and select **REST API**.

You can provide the URL and additional information like the Headers, Params, Body, and Pagination. After adding the request details, you can directly run the API query and bind it to widgets to display the results in the UI. To learn more about setting API request details, you can refer to the documentation on [configuring APIs](/core-concepts/connecting-to-data-sources/authentication/connect-to-apis).

 <VideoEmbed host="youtube" videoId="IptCmvKdbog" title="Connect to REST API" caption="Connect to REST API"/> 


### Sample API

Appsmith provides a sample API `https://mock-api.appsmith.com` to help you learn to create and modify queries using the [REST API pane](/core-concepts/connecting-to-data-sources/authentication/connect-to-apis).

<VideoEmbed host="youtube" videoId="DWLF0pNjjuI" title="Using A Sample API " caption="How to use sample API"/>

 To use the sample APIs:

1. Go to the **Explorer** tab, click the **+** icon next to **Datasources**.
2. Select **REST API**
3. To fetch users data from this API choose the `GET` method and enter the following URL:

```js
https://mock-api.appsmith.com/users?page=1
```
4. Click the **Run** button to execute the API query and view the response.

## Creating an authenticated API datasource

When you create an authenticated API datasource, you need to configure the headers and query parameters only once and thereafter don't need to configure these for every API request. Additionally, to ensure authorized access and secure data transfer, various authentication mechanisms can be implemented, such as OAuth 2.0, signature headers, self-signed certificates, bearer token-based authentication, and API key-based authentication.

 <VideoEmbed host="youtube" videoId="Uy7ZDviGbtM" title="Creating an authenticated API " caption="Creating an authenticated API datasource"/> 

To create an authenticated API datasource:

1. On the **Explorer** tab, click the **+** icon next to **Datasources**
2. Select **Authenticated API**.
3. Click the edit pencil icon next to the default name to rename the datasource.
4. Provide the configuration details required to connect to your API.

   * [**Name**](/core-concepts/connecting-to-data-sources/authentication/connect-to-apis#name):		Specify a name for the API datasource.
   * [**Method**](/core-concepts/connecting-to-data-sources/authentication/connect-to-apis#method):	Select the method for the API request.
   * [**URL**](/core-concepts/connecting-to-data-sources/authentication/connect-to-apis#url):		Specify the URL for the API endpoint.
   * [**Headers**](/core-concepts/connecting-to-data-sources/authentication/connect-to-apis#headers):		Set the required HTTP headers for the API request.
   * [**Query parameters**](/core-concepts/connecting-to-data-sources/authentication/connect-to-apis#params):		Provide the query parameters for the API request, if necessary.
   * [**Authentication type**](/core-concepts/connecting-to-data-sources/authentication/authentication-type): Define an authentication type for REST APIs by using the protocols available on Appsmith.
   * [**Send appsmith signature header**](/core-concepts/connecting-to-data-sources/authentication/connect-to-apis#send-appsmith-signature-header): Ensure that the incoming requests originate from Appsmith.
   * [**Use self-signed certificate**](/core-concepts/connecting-to-data-sources/authentication/self-signed-certificates):  These certificates can be configured as part of the Advanced Settings. 

5. **Save** the datasource. The configuration details aren't saved/updated until the Save button is clicked. When the datasource has been added successfully, a success message appears at the top of the app window.

:::tip
If you want to connect to an API that's not publicly available on the internet, you can use a service like [ngrok](https://ngrok.com/) to expose it. For more information, see [How to work with local APIs on Appsmith](/learning-and-resources/how-to-guides/how-to-work-with-local-apis-on-appsmith).
:::

## Importing cURL commands

cURL is a command-line tool that can be used to make HTTP requests to a server. You can use cURL to send HTTP requests, such as GET, POST, PUT, and DELETE, to a server to retrieve or manipulate data. Appsmith makes it easy to import your APIs into your application using cURL commands.


To import cURL commands into your application:

1. On the **Explorer** tab, click the **+** icon next to **Datasources**
2. Select **cURL Import**.
3. Add your cURL command, for example:

```js
curl -X GET https://example.com/resource
```
4. Click the **Import** button.

![](</img/import_curl_(1).gif>)

## Native API datasources
* [GraphQL](/reference/datasources/graphql)
* [Google Sheets](/reference/datasources/querying-google-sheets)
* [Airtable](/reference/datasources/airtable)
* [Twilio](/reference/datasources/twilio)
* [HubSpot](/reference/datasources/hubspot)

Appsmith can also seamlessly connect with most other tools through the RESTful API plugin. For more information, see [Integrations](/learning-and-resources/integrations)


## Passing parameters to API requests

There are three ways to pass parameters to API calls on Appsmith as shown in the video below:

<VideoEmbed host="youtube" videoId="znaaDiQbAS8" title="How to pass parameters to an API call" caption="How to pass parameters to an API call"/>

## Send body data with API requests

Appsmith supports a variety of encoding types for sending data in API queries. The encoding type can be selected via the **Body** dropdown on the API editor. Selecting **NONE** omits a body from the request.

### URL-encoded form data

Selecting the value **FORM_URLENCODED** (for `application/x-www-form-urlencoded`) automatically encodes your key/value pairs to be sent in the body field.

### Multipart/Form-data

Multipart requests can include several different types of data within them, such as a file along with some other related metadata. To set up your query to send with `multipart/form-data` encoding, navigate to its query editor screen, click the **Body** tab, and find the **MULTIPART_FORM_DATA** tab beneath it.

![Use multipart form encoding in your API request](/img/multipart_editor.png)

To submit a file as a multipart input, use a [Filepicker widget](/reference/widgets/filepicker) to upload a file to your application. Once it has been uploaded, you can bind `{{ FilePicker1.files[0] }}` as a value in your API's multipart request body. Be sure to select "File" in the datatype dropdown. If you would like to submit multiple files in the same request key, you can alternatively use `{{ FilePicker1.files }}` to include the entire contents of the Filepicker widget.

The file data from the Filepicker widget can be in any data format (base64 or binary) according to the requirements of the endpoint that you're connecting to.

You can also pass plain text values in your multipart request by selecting the "Text" option in the datatype dropdown. If you wish to pass multiple plain text values under the same key, be sure to use the "Array" option instead.

![Use "File," "Array," and "Text" data types in your multipart-encoded request.](/img/multipart_fields.png)

```javascript
// type: Text
{{ Text1.text }}
```

```javascript
// type: Array
{{[ Text1.text, Text2.text, "hello, world"]}}
```

### Raw data

If your endpoint can't accept multipart-encoded data and requires raw body binary instead, choose the **RAW** tab under the query **Body** tab instead of MULTIPART_FORM_DATA. In this case, you would pass the `data` property of your file to the query instead of the file object itself, because the endpoint expects only raw binary data:

```javascript
// Binary data in the RAW format
{{ Filepicker1.files[0]?.data }}
```
The preceding example uses [Optional Chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) using the `?` operator. This way, if the `files[0]` doesn't exist, attempting to access `data` returns `undefined` instead of raising an error.

:::info
Be sure to turn off the **JSON Smart Substitution** setting for this query in the query settings. This option is useful for helping to cast data into the correct JSON formats, however it can be problematic when used with RAW body binary encoding.
:::

## Troubleshooting

Are you having trouble? check out the [API response troubleshooting guide](/help-and-support/troubleshooting-guide/query-errors) or reach out on[ Discord](https://discord.com/invite/rBTTVJp) to get support or ask questions on the [community forum](https://community.appsmith.com/).

## Further reading

* [Write queries](/core-concepts/data-access-and-binding/querying-a-database)
* [Data access and binding](/core-concepts/data-access-and-binding)
* [Connect to a local database or API](/learning-and-resources/how-to-guides/how-to-work-with-local-apis-on-appsmith)




