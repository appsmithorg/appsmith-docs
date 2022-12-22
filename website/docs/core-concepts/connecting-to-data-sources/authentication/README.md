# APIs

APIs are sets of definitions and protocols that enable communication and interaction between software applications using a limited number of instructions. APIs serve as messengers, passing requests from one application to another and instantly returning a response. With appsmith, you can connect with a wide range of tools and platforms; if there isn't a supported datasource, you can connect using the REST API. 


### Connecting to a REST API

You can choose to create a one-off query by clicking on the “**+**” icon next to **“Datasources”** and selecting “**REST API**".

In the context of a REST API, one-off queries are typically used when someone needs a quick answer to a specific question or problem, rather than engaging in a longer, more involved process. They are often used to retrieve or manipulate data from a server in real-time.


 <VideoEmbed host="youtube" videoId="IptCmvKdbog" title="Add new API" caption="Add new REST API"/> 

You can provide the URL and additional information like the Headers, Params, Body, and Pagination. Once you have added code in the body section, you can directly run the query and connect it with widgets.

### Connecting to a authenticated API

A one-off query is a single request for information or assistance, while an authenticated API is an API that requires authentication before allowing access to its resources or functionality. This is done to ensure that only authorized users are able to interact with the API and to protect sensitive data or functionality from unauthorized access:

* Click on the **+** icon next to the Datasources and choose **Authenticated API**.
* Provide the configuration details required to connect to your API.
* Rename and save your datasource.


 <VideoEmbed host="youtube" videoId="Uy7ZDviGbtM" title="Add new API" caption="Add new API"/> 

Once your datasource has been added successfully, a success pop-up appears at the top. 


### Importing CURL Commands

CURL is a command-line tool that can be used to make HTTP requests to a server. You can use CURL to send various types of HTTP requests, such as GET, POST, PUT, and DELETE, to a server to retrieve or manipulate data. Appsmith makes it easy to import your APIs into your application using CURL commands.


To import CURL commands into your application:

* Click on the **+** icon next to the Datasources and choose **CURL Import**.
* Add your command, for example:

```js
curl -X GET https://example.com/resource
```

![](</img/import_curl_(1).gif>)

## Sample API

Appsmith provides a mock API so you can fetch the data and perform actions using a RESTful interface.

```js
https://mock-api.appsmith.com/users?page=1
```

This is a mock API exposed by Appsmith to help you learn API basics. Data in the mock API will have the following structure:

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

 To use these mock APIs, import the CURL commands listed below.

* Click on **+** next to Datasources.
* Select **CURL import**
* Now, to ```fetch users```, use the below-mentioned code and click ```import```:
```js
curl --location --request GET 'https://mock-api.appsmith.com/users?page=1'
```
* To ```update users```, use:
```js
curl --location --request PUT 'https://mock-api.appsmith.com/users/1' \
--header 'Content-Type: application/json' \
--data-raw '{
    "status" : "Approved"
}'
```

The [API pane](/core-concepts/connecting-to-data-sources/authentication/connect-to-apis) is a REST interface that allows you to create and modify your existing APIs.



:::info
Are you having trouble? Check out the [API response troubleshooting guide](/help-and-support/troubleshooting-guide/query-errors) or reach out on[ Discord](https://discord.com/invite/rBTTVJp) to get support or ask questions on the [community forum](https://community.appsmith.com/).
:::



## What's next

At this point, you should know enough to start a project of your own and start playing around with datasources. The resources mentioned below can be useful when you need to learn new skills:

* [Building UI](/core-concepts/building-ui/)
* [Queries](/core-concepts/data-access-and-binding/querying-a-database/)
* [Widgets](/reference/widgets/)
* [Appsmith Framework](/reference/appsmith-framework/)

:::info
Appsmith applications are **secure-by-default**. All sensitive credentials, such as database credentials, are encrypted with [**AES-256 encryption**](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard). You can read more about security in this [document](/product/security#security-measures-within-appsmith). 
:::
