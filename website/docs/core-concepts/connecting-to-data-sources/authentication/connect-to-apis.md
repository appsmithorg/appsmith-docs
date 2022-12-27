---
description: You can hit any REST endpoint available on the public internet
---

# Configuring APIs

Configuring APIs involves setting up and managing the various aspects of an API that allow it to function effectively. This can include defining the API's structure and capability, setting up authentication and authorization, and establishing connections with other systems or services.

:::tip
If your API isn't available on the public internet, you must expose it via a service such as [https://ngrok.com/](https://ngrok.com/)
:::

## API editor

The API pane is a REST interface that allows you to create and modify your existing APIs. All [REST HTTP methods](https://www.w3schools.in/restful-web-services/rest-methods) are supported and API values can be configured in the headers, Params, and body fields

![](</img/create_api_(1).gif>)

## Configure API query

Configuring an API query involves specifying the various components that make up the request and the desired response. Here is an overview of the main elements you need to consider when configuring an API query:

### Name

By default, Appsmith provides a default name for the data source it creates. You can edit this name by clicking on the pencil icon next to it. It's important to ensure that the name is unique, as it serves as an identifier for the queries on the page and is used to access the data source's properties throughout the application.

### Method

An API query involves making a request to an API using a specific method, or type of request. Appsmith supports all the common methods, including GET, POST, PUT, DELETE, and PATCH. When configuring an API query in Appsmith, you can select the desired method from a dropdown menu before adding the URL. 

It's important to choose the appropriate method based on the task you want to accomplish, as each method has a specific meaning and can behave differently depending on the API you are using.

### URL

The URL Path field in an API query specifies the address of the API endpoint you want to access. To use this field, you can enter the URL of the API you want to use. For example, if you want to access the Appsmith mock API, you would enter the URL `https://mock-api.appsmith.com` into the URL Path field. 

The URL Path is a critical component of an API query, as it determines which API and which specific data or capability you are trying to access. Make sure to enter the correct URL for the API you want to use

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
Allows you to paginate the results of an API query using a table page number. To use this feature, you will need to configure table and request parameters.

* Configure Table for Pagination
1. Enable server side pagination
2. Configure OnPageChange action

* Configure Request Parameters
Set up request parameters to control the table's pagination. This may involve mapping a key like "pageNo" to the table's page number property.

Example - Map key pageNo or similar to value
```{{UsersTable.pageNo}}``` 

#### Paginate with response URL

### Authentication

### Settings

#### Run API on page load
#### Request confirmation before running API
#### Encode query params
#### Smart JSON substitution
#### API timeout (in milliseconds)

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

### Authentication Type

The authentication type refers to the method that is used to authenticate a client when making a request to the API. This is important because it determines how the client will provide their credentials to the API in order to prove their identity and access the protected resources. Common authentication types for REST APIs include 

* Basic Authentication, where the client provides a username and password with each request. 
* OAuth, where the client obtains a token from an authorization server and includes that token with each request. 

The authentication type that is used by an API can have a significant impact on its security, so it is important to choose an appropriate authentication method for your API.

You can define an [authentication type](/core-concepts/connecting-to-data-sources/authentication/authentication-type) for REST APIs by using the protocols available on Appsmith.




## Smart JSON Substitution

The smart JSON substitution feature allows Appsmith to dynamically perform type conversions on field values in a request body. The video below illustrates how to use this feature:

<VideoEmbed host="youtube" videoId="-Z3y-pdNhXc" title="How to use smart JSON substitution" caption="How to use smart JSON substitution"/>

## Passing Data/Parameters To API Calls

There are various ways to pass parameters to API calls on Appsmith. This video shows three ways to pass data to API calls:

<VideoEmbed host="youtube" videoId="znaaDiQbAS8" title="How to pass parameters to an API call" caption="How to pass parameters to an API call"/>
