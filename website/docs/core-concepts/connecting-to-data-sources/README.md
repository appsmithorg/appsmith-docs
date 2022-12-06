# Connecting To Datasource


Appsmith supports a wide range of data source integrations. 
%%%%%,(will add intro later :)   Appsmith has plug-and-play support for many databases and the RESTful API interface to connect with most tools seamlessly.

:::tip
Before connecting to a data source, you must whitelist the IP address of the Appsmith deployment on your database instance or VPC

**18.223.74.85** and **3.131.104.27** are the IP addresses of the Appsmith cloud instances that need to be whitelisted

This is a guide on how to [whitelist appsmith on AWS.](learning-and-resources/how-to-guides/aws-whitelist)
:::

## How to connect to a datasource


<VideoEmbed host="youtube" videoId="sJIxtXInV14" title="How to connect to a datasource" caption="How to connect to a datasource | Example"/>


* On the **Explorer tab**, click the **+** sign next to **Datasources**. 
* You’ll see a [list of Datasources](/reference/datasources/) that Appsmith can connect to.
* Choose a **Database/API**.
* Provide the **configuration details** required to connect to your database. You may need to contact your database administrator to [whitelist appsmith cloud](/learning-and-resources/how-to-guides/aws-whitelist).
* Click **Test** to verify that Appsmith can connect to your database using the details you provided.
* Rename and save your datasource.

Once your datasource has been added successfully, a success pop-up will appear at the top. Datasource in Appsmith is divided into two categories: APIs and Database.


## APIs
APIs are sets of definitions and protocols that enable communication and interaction between software applications using a limited number of instructions. APIs serve as messengers, passing requests from one application to another and instantly returning a response. With appsmith, you can connect with a wide range of tools and platforms; if there isn't a supported datasource, you can connect using the REST API. Following APIs are supported by Appsmith:

* [Rest API](/core-concepts/connecting-to-data-sources/authentication/)
* [GraphQL API](/reference/datasources/graphql)
* [Google Sheets](/reference/datasources/querying-google-sheets)
* [Airtable](/reference/datasources/airtable)
* [Twilio](/reference/datasources/twilio)

And [more.](/core-concepts/connecting-to-data-sources/authentication/).


### Sample API

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


## Database

Database is a organized way to retrieve, update, and manage data. You can run queries to read and write data directly from the Appsmith editor. Following databases are supported by Appsmith:

* [Amazon S3 (also Upcloud, Digital Ocean Spaces, Wasabi, DreamObjects)](/reference/datasources/querying-amazon-s3)
* [ArangoDB](/reference/datasources/querying-arango-db)
* [DynamoDB](/reference/datasources/querying-dynamodb)
* [ElasticSearch](/reference/datasources/querying-elasticsearch)
* [Firestore](/reference/datasources/querying-firestore)
* [MongoDB](/reference/datasources/querying-mongodb)
* [MS SQL](/reference/datasources/querying-mssql)

and [more.](/core-concepts/connecting-to-data-sources/connecting-to-databases)




### Sample Database


Appsmith offer dummy database that you can use to experiment with the platform before adding your real data. You can connect to two sample datasets:

1. **Movies:** This is a sample [MongoDB](/reference/datasources/querying-mongodb/) database with a collection called movies.
2. **Users:** This is a sample [PostgreSQL](/reference/datasources/querying-postgres) database with a table called users.

:::note
The **data** in the **mock database** gets **reset** every **24 hours** and is **common** for **all users** so it may contain **some unexpected values**.
:::

To better understand how to use the sample database, lets look at an example:

<VideoEmbed host="youtube" videoId="l_MNNa9mg0w" title="Using A Sample Database " caption="How to use sample database | Example"/>

* Click on **+** next to Datasources.
* Select the **user** datasource.
* Now, click on the **+** icon next to the **queries/js** and choose the user datasource.
* Add your code in the body section and **run** your query. For example:
```js
SELECT * FROM users;
```
The preceding query gets all the users data. You can use a [table widget](/reference/widgets/table) to display your data. 



## Connect to a localhost database/ API

With your on-premises Appsmith instance running on the same system, you may use ```host.docker.internal``` or ```ngrok``` to connect to databases, APIs, and services that are running on localhost or as other docker containers. A [self-hosted](/getting-started/setup) instance could allow you to connect with a database running on the same machine/intranet and use it to build apps.

Using a **cloud-hosted instance** would require the ability to access the **internal databases**. For example, you would be required to use tunneling services like [ngrok](/advanced-concepts/more/how-to-work-with-local-apis-on-appsmith/#using-ngrok) to expose your internal database to the internet or whitelist Appsmith cloud's external IP addresses to build apps. You can learn more about [connecting to localhost database](/advanced-concepts/more/how-to-work-with-local-apis-on-appsmith). 


:::info
Appsmith applications are **secure-by-default**. All sensitive credentials, such as database credentials, are encrypted with [**AES-256 encryption**](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard). You can read more about security in this [document](/product/security#security-measures-within-appsmith). 
:::



## What's next

At this point, you should know enough to start a project of your own and start playing around with datasources. The resources mentioned below can be useful when you need to learn new skills:

* [Building UI](/core-concepts/building-ui/)
* [Queries](/core-concepts/data-access-and-binding/querying-a-database/)
* [Widgets](/reference/widgets/)
* [Appsmith Framework](/reference/appsmith-framework/)



:::info
Are you having trouble connecting datasources with Appsmith? Check out the [Datasource troubleshooting guide](/help-and-support/troubleshooting-guide/action-errors/datasource-errors) or reach out on [Discord](https://discord.com/invite/rBTTVJp) to get support or ask questions on the [community forum](https://community.appsmith.com/).
:::