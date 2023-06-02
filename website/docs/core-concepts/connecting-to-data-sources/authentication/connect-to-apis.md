---
description: You can hit any REST endpoint available on the public internet
---

# Configuring APIs

Configuring APIs involves setting up and managing the REST API requests that allow it to function effectively. This can include adding request details, sending parameters, setting up authentication, and choosing custom settings. 

## API pane

The API pane is a user-friendly interface for creating and managing RESTful APIs. It supports all standard [REST HTTP methods](https://www.w3schools.in/restful-web-services/rest-methods) and provides a way to create API requests and add request details such as headers, parameters, and body data.

![](</img/create_api_(1).gif>)

## Adding API request details

Configuring an API query involves specifying the various components that make up the API request. Here is an overview of the main elements you need to consider when configuring an API query.

### Name

When you create an API query in Appsmith, a default name is provided. You can change this name by clicking on the edit pencil icon. It's important to make sure that the name is unique, as it serves as an identifier for queries on the page.

### Method

A method refers to the type of request being made to the REST API endpoint. Appsmith supports all the standard methods, including GET, POST, PUT, DELETE, and PATCH. When setting up an API query in Appsmith, you can select the desired method from a dropdown menu before adding the URL.

It's important to choose the appropriate method based on the task you want to accomplish, as each method has a specific meaning and can behave differently depending on the API you are using.


### URL

The URL Path provides a way to access the API and its functions. To use this field, you can enter the API URL that you want to access. For example, if you want to access the Appsmith mock API, you can enter the URL as `https://mock-api.appsmith.com`.

### Headers

Headers in a REST API request contain meta-data about the operation and may be required to be sent along with the request, while response headers contain meta-data about the response from the server. To read the response headers of an API request, you can use the code block as shown below for `API1`.

```javascript
{{API1.responseMeta.headers}}
```

### Params

In a REST API, parameters are values that are passed in the URL, that can be used to filter, sort, paginate, or perform some other operation on a set of data. These parameters allow the API to return a specific set of data based on the values that are provided.

For example, an API might have a parameter called "limit" that specifies the maximum number of results to return, or a parameter called "sort" that determines the order in which the results should be sorted. By providing different values for these parameters, a client can control the data that's returned by the API.

### Body

In an API query, the body is the main content of the request. It's typically used to send data to the server, such as form data or a JSON payload. The body of an API request is usually included with POST and PUT requests, which are used to create or update resources on the server. For example, it might contain a JSON object with multiple key-value pairs, or it might contain a simple string or number.

### Pagination

Pagination refers to the process of receiving portions of a huge dataset until you receive the entire dataset. This helps optimize your app's performance because trying to get all the data results in a slow load time of your app and a slow rendering of the results in the UI. Appsmith supports the following methods for paginating API queries:


#### Paginate with table page number
Allows you to paginate the results of an API query using a table page number. To use this feature, you need to configure the table and request parameters.

This can be done by setting up request parameters to control the table's pagination. This may involve mapping a key like "**pageNo**" to the table's page number property.

Example - Map key `pageNo` or similar to value
```{{UsersTable.pageNo}}``` 

However, in certain cases, it may be beneficial to configure limit and offset properties. For example, 
```
limit = {{UsersTable.pageSize}}

offset = {{UsersTable.pageOffset}}
```

#### Paginate with response URL

A response URL is a special type of URL that's returned in the API response and can be used to request the next or previous page of results. This can be done by adding the **Previous** and the **Next URL** in the Pagination section. 

For example, when using the Appsmith mock API, a JSON response is returned that contains the `next` and `previous` keys. These keys can be used to configure pagination properties, such as ```{{Api.data.next}}``` and ```{{Api.data.previous}}```. You can validate your configuration by clicking the "test" button.

### Authentication
Authentication refers to the process of verifying the identity of a client or user making a request to the API. This is typically done by requiring the client or user to provide a set of credentials, such as a username and password, which can be checked against a database of authorized users or a third-party authentication service.

To save the URL of a REST API as a data source and access its authentication settings, you can simply click the 
`SAVE AS DATASOURCE` button and save the API query as an [authenticated API datasource](/core-concepts/connecting-to-data-sources/authentication/connect-to-apis#configure-authenticated-api-datasource). 


### Settings

To access and configure settings for a query, click the Settings tab on the Appsmith Query Editor. Some options available in the Query Settings Pane include Run on Page Load and others. For more information, see [Query Settings](/core-concepts/data-access-and-binding/querying-a-database/query-settings).

The settings tab allows you to modify the parameters and settings for API queries. These may include various options that can be included in API requests to specify certain filters or options or to control the behavior of the API as a whole.


## Troubleshooting
If you face issues, reach out to [support@appsmith.com](mailto:support@appsmith.com).

## Further reading

* [Write queries](/core-concepts/data-access-and-binding/querying-a-database/)
* [Data Access and Binding](/core-concepts/data-access-and-binding)
* [Connect to a localhost database/ API](/advanced-concepts/more/how-to-work-with-local-apis-on-appsmith#using-hostdockerinternal)



