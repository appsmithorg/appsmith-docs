# REST APIs

APIs are sets of definitions and protocols that enable communication and interaction between software applications using a limited number of instructions. APIs serve as messengers, passing requests from one application to another and instantly returning a response. With Appsmith, you can connect with a wide range of tools and platforms; if there isn't a native integration with a datasource, you can connect through the REST API interface. 


### Connecting to REST API

You can choose to connect to a REST API by clicking on the “**+**” icon next to **“Datasources”** and selecting “**REST API**".

In the context of a REST API, these queries are typically used when someone needs a quick answer to a specific question or problem, rather than engaging in a longer, more involved process. They're often used to retrieve or manipulate data from a server in real-time.


 <VideoEmbed host="youtube" videoId="IptCmvKdbog" title="Add new API" caption="Add new REST API"/> 

You can provide the URL and additional information like the Headers, Params, Body, and Pagination. Once you have added code in the body section, you can directly run the query and connect it with widgets. To learn more about configuring APIs, you can refer to the documentation on [configuring APIs](/core-concepts/connecting-to-data-sources/authentication/connect-to-apis).

#### Mock API

Appsmith provides a mock API so you can fetch the data and perform actions using a RESTful interface.

```js
https://mock-api.appsmith.com/users?page=1
```

This is a mock API exposed by Appsmith to help you learn API basics. Data in the mock API have the following structure:

```js
{
  "next": "https://mock-api.appsmith.com/users?page=2&pageSize=10",
  "previous": "https://mock-api.appsmith.com/users?page=0&pageSize=10",
  "users": [
    {
      "id": 2,
      "name": "Jenelle Kibbys",
      "status": "APPROVED",
      "gender": "Female",
      "avatar": "https://robohash.org/quiaasperiorespariatur.bmp?size=100x100&set=set1",
      "email": "jkibby1@hp.com",
      "address": "85 Tennessee Plaza",
      "createdAt": "2019-10-04T03:22:23.000Z",
      "updatedAt": "2019-09-11T20:18:38.000Z"
    },
    {...
```

<VideoEmbed host="youtube" videoId="DWLF0pNjjuI" title="Using A Sample API " caption="How to use mock API | Example"/>

 To use these mock APIs,

* Click on **+** next to Datasources.
* Select **REST API**
* To ```fetch users``` choose the GET method and enter the following URL:

```js
 GET 'https://mock-api.appsmith.com/users?page=1'
```


The [API pane](/core-concepts/connecting-to-data-sources/authentication/connect-to-apis) is a REST interface that allows you to create and modify your existing APIs.



### Creating an authenticated API datasource

Authenticated API is an API that requires authentication before allowing access to its resources or capability. This is done to ensure that only authorized users are able to interact with the API and to protect sensitive data or capability from unauthorized access:

 <VideoEmbed host="youtube" videoId="Uy7ZDviGbtM" title="Add new API" caption="Add new API"/> 


* Click on the **+** icon next to the Datasources and choose **Authenticated API**.
* Provide the configuration details required to connect to your API.
* To configure, you can provide the URL and additional information like the headers, parameters, [authentication type](core-concepts/connecting-to-data-sources/authentication/authentication-type), [self-signed certificate](/core-concepts/connecting-to-data-sources/authentication/self-signed-certificates), and more.
* Rename and save your datasource.



Once your datasource has been added successfully, a success pop-up appears at the top. To learn more about configuring APIs, you can refer to the documentation on [configuring APIs](/core-concepts/connecting-to-data-sources/authentication/connect-to-apis).


### Importing cURL commands

cURL is a command-line tool that can be used to make HTTP requests to a server. You can use cURL to send various types of HTTP requests, such as GET, POST, PUT, and DELETE, to a server to retrieve or manipulate data. Appsmith makes it easy to import your APIs into your application using cURL commands.


To import cURL commands into your application:

* Click on the **+** icon next to the Datasources and choose **cURL Import**.
* Add your command, for example:

```js
curl -X GET https://example.com/resource
```

![](</img/import_curl_(1).gif>)

## Passing data to API calls

There are various ways to pass parameters to API calls on Appsmith. This video shows three ways to pass data to API calls:

<VideoEmbed host="youtube" videoId="znaaDiQbAS8" title="How to pass parameters to an API call" caption="How to pass parameters to an API call"/>



## Troubleshooting

Are you having trouble? check out the [API response troubleshooting guide](/help-and-support/troubleshooting-guide/query-errors) or reach out on[ Discord](https://discord.com/invite/rBTTVJp) to get support or ask questions on the [community forum](https://community.appsmith.com/).

## Further reading

At this point, you should know enough to start a project of your own and start playing around with datasources. The resources mentioned below can be useful when you need to learn new skills:

* [Datasource Reference](reference/datasources)
* [Data Access and Binding](/core-concepts/data-access-and-binding)
* [GraphQL](reference/datasources/graphql)

