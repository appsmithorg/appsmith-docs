---
description: You can hit any REST endpoint available on the public internet
---

# Configuring APIs

Configuring APIs involves setting up and managing the various aspects of an API that allow it to function properly and effectively. This can include defining the API's structure and functionality, setting up authentication and authorization, and establishing connections with other systems or services.

:::tip
If your API is not available on the public internet, you must expose it via a service such as [https://ngrok.com/](https://ngrok.com/)
:::

## API Editor

The API pane is a REST interface that allows you to create and modify your existing APIs. All [REST HTTP methods](https://www.w3schools.in/restful-web-services/rest-methods) are supported and API values can be configured in the headers, params, and body fields

![](</img/create_api_(1).gif>)

## Connection settings

You can configure the data source as follows:

![Create a new Datasource](</img/OAuth__API_Integration__Create_New_DB.png>)


### Name

By default, Appsmith provides a default name for the data source it creates. This name can be edited by clicking on the pencil icon next to it. It's important for the name to be unique because it serves as an identifier for the queries on the page and is used to access its properties throughout the application.

### URL

The URL Path provides a way to access the API and its functions. To use this field, you can enter the API URL that you want to access. For example, if you want to access the Appsmith mock API, you can enter the URL as ```https://mock-api.appsmith.com```.

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
