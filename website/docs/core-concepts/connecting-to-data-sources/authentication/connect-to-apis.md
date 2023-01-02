---
description: You can hit any REST endpoint available on the public internet
---

# Configuring APIs

Configuring APIs involves setting up and managing the various aspects of an API that allow it to function effectively. This can include defining the API's structure and capability, setting up authentication and authorization, and establishing connections with other systems or services.

:::tip
If your API isn't available on the public internet, you must expose it via a service such as [https://ngrok.com/](/advanced-concepts/more/how-to-work-with-local-apis-on-appsmith#using-ngrok)
:::

## API query editor

The API pane is a REST interface that allows you to create and modify your existing APIs. All [REST HTTP methods](https://www.w3schools.in/restful-web-services/rest-methods) are supported and API values can be configured in the headers, Params, and body fields

![](</img/create_api_(1).gif>)

## Configure API query

Configuring an API query involves specifying the various components that make up the request and the desired response. Here is an overview of the main elements you need to consider when configuring an API query.



### Name

By default, Appsmith provides a default name for the data source it creates. You can edit this name by clicking on the pencil icon next to it. For more information, see [common parameters section.](#name-2)

### Method

An API query involves making a request to an API using a specific method, or type of request. Appsmith supports all the common methods, including GET, POST, PUT, DELETE, and PATCH. When configuring an API query in Appsmith, you can select the desired method from a dropdown menu before adding the URL. 

It's important to choose the appropriate method based on the task you want to accomplish, as each method has a specific meaning and can behave differently depending on the API you are using.

### URL

The URL Path field in an API query specifies the address of the API endpoint you want to access. To use this field, you can enter the URL of the API you want to use. 

### Headers

HTTP headers are a critical part of the API request and response, as they contain meta-data about the API request and response. Headers carry the following information:

* Request and Response Body;
* Request Authorization;
* Response Caching;
* Response Cookies.

It's important to be familiar with the major request and response headers, as you may need to set request headers when testing an API, and you may need to set assertions against response headers to ensure that the correct headers are being returned.

### Query parameters

In a REST API, parameters are values that are passed in the URL, query string, or request body that are used to filter, sort, paginate, or perform some other operation on a set of data. These parameters allow the API to return a specific set of data based on the values that are provided.

For example, an API might have a parameter called "limit" that specifies the maximum number of results to return, or a parameter called "sort" that determines the order in which the results should be sorted. By providing different values for these parameters, a client can control the data that's returned by the API.

### Body

In an API query, the body is the main content of the request. It's typically used to send data to the server, such as form data or a JSON payload. The body of an API request is usually included with POST and PUT requests, which are used to create or update resources on the server. For example, it might contain a JSON object with multiple key-value pairs, or it might contain a simple string or number.

### Pagination

Pagination refers to the process of receiving portions of a huge dataset until you receive the entire dataset. This helps optimize your app's performance because trying to get all the data results in a slow load time of your app and a slow rendering of the results in the UI. Appsmith supports the following methods for paginating API queries:


#### Paginate with table page number
Allows you to paginate the results of an API query using a table page number. To use this feature, you need to configure table and request parameters.

This can be done by setting up request parameters to control the table's pagination. This may involve mapping a key like "**pageNo**" to the table's page number property.

Example - Map key pageNo or similar to value
```{{UsersTable.pageNo}}``` 

#### Paginate with response URL

A response URL is a special type of URL that's returned in the API response and can be used to request the next or previous page of results. To paginate with response URLs, the API typically includes a link to the next or previous page of results in the HTTP header of the response. This can be done by adding **Previous** and **Next URL** in the Pagination section. 

### Authentication
Authentication refers to the process of verifying the identity of a client or user making a request to the API. This is typically done by requiring the client or user to provide a set of credentials, such as a username and password, which can be checked against a database of authorized users or a third-party authentication service.

To save the URL of a REST API as a data source and access its authentication settings, you can simply click the 
`SAVE AS DATASOURCE` button and save the API query as a [authenticated API datasource](/core-concepts/connecting-to-data-sources/authentication/connect-to-apis#configure-authenticated-api-datasource). 

### Settings

The Query Settings Pane provides access to properties for the query. You can specify the following [settings](/core-concepts/data-access-and-binding/querying-a-database/query-settings) in the Settings tab on the Appsmith Query Editor.

The settings tab allows you to modify the parameters and settings for API queries. These may include various options that can be included in API requests to specify certain filters or options, or to control the behavior of the API as a whole.

### Smart JSON substitution

The smart JSON substitution feature allows Appsmith to dynamically perform type conversions on field values in a request body. The video below illustrates how to use this feature:

<VideoEmbed host="youtube" videoId="-Z3y-pdNhXc" title="How to use smart JSON substitution" caption="How to use smart JSON substitution"/>


## Configure authenticated API datasource

You can configure the authenticated API as follows:

![Create a new Datasource](</img/OAuth__API_Integration__Create_New_DB.png>)

### Name

By default, Appsmith provides a default name for the data source it creates. You can edit this name by clicking on the pencil icon next to it. It's important to ensure that the name is unique, as it serves as an identifier for the queries on the page and is used to access the data source's properties throughout the application.

### URL

The URL Path provides a way to access the API and its functions. To use this field, you can enter the API URL that you want to access. For example, if you want to access the Appsmith mock API, you can enter the URL as `https://mock-api.appsmith.com`.

### Headers

HTTP headers are a critical part of the API request and response, as they contain meta-data about the API request and response. Headers carry the following information:

* Request and Response Body;
* Request Authorization;
* Response Caching;
* Response Cookies.

It's important to be familiar with the major request and response headers, as you may need to set request headers when testing an API, and you may need to set assertions against response headers to ensure that the correct headers are being returned.


### Query parameters

In a REST API, parameters are values that are passed in the URL, query string, or request body that are used to filter, sort, paginate, or perform some other operation on a set of data. These parameters allow the API to return a specific set of data based on the values that are provided.

For example, an API might have a parameter called "limit" that specifies the maximum number of results to return, or a parameter called "sort" that determines the order in which the results should be sorted. By providing different values for these parameters, a client can control the data that's returned by the API.

### Send appsmith signature header

When you want to ensure that the incoming requests originate from Appsmith, you can enable `Send Appsmith Signature Header` by selecting **Yes**. You’ll see a new field - **Session Details Signature Key** to supply the signature key.

![Appsmith Signature Header](</img/OAuth__API_Integration__Appsmith_Signature_Header__Enable__.png>)

### Authentication type

The authentication type refers to the method that's used to authenticate a client when making a request to the API. This is important because it determines how the user provides their credentials to the API to prove their identity and access the protected resources. Common authentication types for REST APIs include 

* [Basic Authentication](/core-concepts/connecting-to-data-sources/authentication/authentication-type/basic-authentication), where you have to provide a username and password. 
* [OAuth](/core-concepts/connecting-to-data-sources/authentication/authentication-type/oauth2-authentication), where you need to obtain a token from an authorization server and include that token to authenticated. 

The authentication type that's used by an API can have a significant impact on its security, so it's important to choose an appropriate authentication method for your API.

You can define an [authentication type](/core-concepts/connecting-to-data-sources/authentication/authentication-type) for REST APIs by using the protocols available on Appsmith.


## Use self-signed certificate

Self-signed certificates are certificates that are generated and signed by the same entity, rather than by a trusted third-party certificate authority. They're often used in testing or internal environments because they can be created at no cost, and they provide encryption for incoming and outgoing data.

You can check [this](/core-concepts/connecting-to-data-sources/authentication/self-signed-certificates) documentation to learn more about self-signed certificate.



## Troubleshooting
Are you having trouble configuring APIs? check out the [REST API Errors](/help-and-support/troubleshooting-guide/action-errors/rest-api-errors) or reach out on [Discord](https://discord.com/invite/rBTTVJp) to get support or ask questions on the [community forum](https://community.appsmith.com/).


## Further reading

At this point, you should know enough to start a project of your own and start playing around with datasources. The resources mentioned below can be useful when you need to learn new skills:

* [Building UI](/core-concepts/building-ui/)
* [Queries](/core-concepts/data-access-and-binding/querying-a-database/)
* [Data Access and Binding](/core-concepts/data-access-and-binding)
* [Datasources](/reference/datasources)
* [Connect to a localhost database/ API](/advanced-concepts/more/how-to-work-with-local-apis-on-appsmith)



