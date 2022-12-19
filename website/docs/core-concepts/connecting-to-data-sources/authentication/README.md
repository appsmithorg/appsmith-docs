# REST APIs

APIs are sets of definitions and protocols that enable communication and interaction between software applications using a limited number of instructions. APIs serve as messengers, passing requests from one application to another and instantly returning a response. With appsmith, you can connect with a wide range of tools and platforms; if there isn't a supported datasource, you can connect using the REST API. Following APIs are supported by Appsmith:



<div class="containerGrid">
    <div class="columnGrid column-one" align="center">
        <div class="containerCol">
            <a href="/core-concepts/connecting-to-data-sources/authentication/connect-to-apis">
            <img class="containerImage" src="/img/api-logo_.png" alt="RestAPI"/>
            </a> 
        </div> 
        <b><a href="/core-concepts/connecting-to-data-sources/authentication/connect-to-apis">Rest API</a></b>
    </div>
   <div class="columnGrid column-two" align="center">
        <div class="containerCol">
            <a href="/core-concepts/connecting-to-data-sources/authentication/connect-to-apis">
            <img class="containerImage" src="/img/Curl-logo.svg_.png" alt="curl-logo"/>
            </a>     
        </div> 
         <b><a href="/core-concepts/connecting-to-data-sources/authentication/connect-to-apis">CURL import</a></b>
    </div>
   <div class="columnGrid column-three" align="center">
        <div class="containerCol">
            <a href="/reference/datasources/graphql">
            <img class="containerImage" src="/img/graphqllogo.png" alt="graphql"/>
            </a>   
        </div> 
            <b><a href="/reference/datasources/graphql">GraphQL API</a></b>
   </div>


</div>

<div class="containerGrid">
    <div class="columnGrid column-one" align="center">
        <div class="containerCol">
            <a href="/reference/datasources/airtable">
            <img class="containerImage" src="/img/Airtable-logo.png" alt="airtable"/>
            </a> 
        </div> 
        <b><a href="/reference/datasources/airtable">Airtable</a></b>
    </div>
   <div class="columnGrid column-two" align="center">
        <div class="containerCol">
            <a href="/core-concepts/connecting-to-data-sources/authentication/connect-to-apis">
            <img class="containerImage" src="/img/twilio_.png" alt="twilio-logo"/>
            </a>     
        </div> 
         <b><a href="/core-concepts/connecting-to-data-sources/authentication/connect-to-apis">Twilio</a></b>
    </div>
   <div class="columnGrid column-three" align="center">
        <div class="containerCol">
            <a href="/core-concepts/connecting-to-data-sources/authentication/connect-to-apis">
            <img class="containerImage" src="/img/hubspot_.png" alt="hubspot-logo"/>
            </a>   
        </div> 
            <b><a href="/reference/datasources/querying-mongodb/">HubSpot</a></b>
   </div>


</div>

  <div class="columnGrid column-three" align="center">
        <div class="containerCol">
            <a href="/core-concepts/connecting-to-data-sources/authentication/connect-to-apis">
            <img class="containerImage" src="/img/gsheets_.png" alt="GoogleSheets"/>
            </a>   
        </div> 
            <b><a href="/core-concepts/connecting-to-data-sources/authentication/connect-to-apis">Google Sheets</a></b>
   </div>
   

## Connecting to a authenticated API

 <VideoEmbed host="youtube" videoId="Uy7ZDviGbtM" title="Add new API" caption="Add new API"/> 

* On the **Explorer tab**, click the **+** sign next to **Datasources**. 
* Choose **Authenticated API**.
* Provide the **configuration details** required to connect to your API.
* Rename and save your datasource.

Once your datasource has been added successfully, a success pop-up appears at the top. 




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


## Smart JSON Substitution

The smart JSON substitution feature allows Appsmith to dynamically perform type conversions on field values in a request body. The video below illustrates how to use this feature:

<VideoEmbed host="youtube" videoId="-Z3y-pdNhXc" title="How to use smart JSON substitution" caption="How to use smart JSON substitution"/>

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
