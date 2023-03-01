---
sidebar_position: 9
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# MongoDB

This document covers how to establish a connection between your MongoDB database and Appsmith to read and write data on your applications.


<VideoEmbed host="youtube" videoId="F_By1KmJKrk" title="Build a MongoDB Panel" caption="Build a MongoDB Panel"/>

## Connect to MongoDB datasource
To add a MongoDB datasource, navigate to **Explorer** >> click the (**+**) sign next to **Datasources** >> select MongoDB under Databases. This opens up the page where you can configure the parameters to connect to your MongoDB database.

### Configure datasource
To connect to a MongoDB database, you must configure the following parameters. 

![Configure MongoDB datasource](/img/mongo-1.png)


* **Connection Mode:** This refers to the permission granted to Appsmith when establishing a connection to the database. The two available modes are:

   * **Read Only:** This mode gives Appsmith read-only permission on the database. This allows you to only fetch data from the database.
   * **Read / Write:** This mode gives Appsmith both read and write permissions on the database. This allows you to execute all CRUD queries.

* **Connection Type:** This refers to the method used to establish a connection between a client and a database. You are required to select any one of the available connection types:

  * **Direct Connection**: This connection type enables you to connect directly to a mongo instance.
  * **Replicate Set**: This connection type enables you to connect to a group of mongo instances.


* **Host Address:** Provide the hostname or IP address. You can specify multiple host addresses for a replicate set. If you have an [SRV URI](https://docs.mongodb.com/manual/reference/connection-string/#dns-seed-list-connection-format), please follow [these](#connect-using-srv-uri) steps to connect to your MongoDB instance.

* **Port:** A port is a numerical identifier that helps establish a network connection. Appsmith tries to connect to port `27017` if you don't specify a port.

:::note
If you are on a self-hosted instance and connecting to a database on `localhost`, use `host.docker.internal` on Windows and macOS hosts and `172.17.0.1` on Linux hosts to access services running on the host machine from within the container. 
:::

* **Default** **Database Name:** This refers to the name of the database on your mongo server. Fill in the name of the database you want to connect to. 

* **Authentication:** To establish a connection with the database, provide the necessary authentication parameters.

  * **Database Name:** Enter the name of the database that you want to authenticate against.
  * **Authentication Type:** Choose the authentication mechanism that you want to use to connect to your database. You can select from [`SCRAM-SHA-1`](https://www.mongodb.com/docs/manual/core/security-scram/), `SCRAM-SHA-256`, or [`MONGO-CR`](https://mongoing.com/docs/core/security-mongodb-cr.html). 
  * **Username:** Provide the username required for authenticating connection requests to your database. Leave this field blank if you don't wish to specify a username for authentication.
  * **Password:** Provide the password required for authenticating connection requests for the given username to the database. If you don't want to log in with a password, leave this field empty (note that your database must accept such connections).

* **SSL:** The connection uses the Default SSL mode. You can set it to one of the following modes:

   * **Default**: Depends on Connection Type. If using the `Replica set`, this is `Enabled`. If using a `Direct connection`, this is `Disabled`.
   * **Enabled**: This option rejects the connection if SSL isn't available.
   * **Disabled**: Disabling SSL disallows all administrative requests over HTTPS. It uses a plain unencrypted connection.


### Connect using SRV URI

Connecting to a MongoDB cluster using an SRV URI is a method that enables you to establish a connection without having to manually specify the host and port of each server.

A [service record](https://en.wikipedia.org/wiki/SRV\_record) (SRV) defines the location of a service hosting, like a hostname, port number, and more. You can create a MongoDB datasource on Appsmith using SRV URI Formats - [Standard URI Format](https://www.mongodb.com/docs/manual/reference/connection-string/#standard-connection-string-format) or a [DNS Seed List Format](https://www.mongodb.com/docs/manual/reference/connection-string/#dns-seed-list-connection-format).



<Tabs>
  <TabItem value="scsf" label="Standard Connection String Format" default>

A Standard Connection String Format(Standard Format) connects to a standalone replica set or a shared cluster of MongoDB. The standard format is represented as below:

```mongodb
mongodb://[@username:@password@]@host[:@port]/[@defaultauthdb]/[?authSource=@authDB]]
```

Map the URI fields as below:

* **`mongodb://`** - a prefix to indicate a standard connection format.
* **`@username`** - the username for the MongoDB you want to connect to.
* **`@password`** - the password for the MongoDB you want to connect to.
* **`@host`** - the host address for the MongoDB you want to connect to.
* **`@port`** -  the port number on which the MongoDB is running.
* **`@defaultauthdb`** - the database you want to connect to and use for user authentication.
* **`@authDB`** - the database that stores the authorization information and authenticates the credentials. If you want to use any other database instead of defaultauthdb, you can add the auth database name using the authSource keyword.


:::info
* You can add multiple host and port details separated by a comma in the connection string to connect using the same user.
* If the username or password includes (`: /? # [ ] @),` convert these characters using [percent encoding](https://www.rfc-editor.org/rfc/rfc3986#section-2.1).
* It's mandatory to provide a value for the `defaultauthdb` field as the queries will be executed against it.
* In case the `authSource` is not specified, Appsmith will try to authenticate using the admin database.
:::



**Example URIs**

```js
mongodb+srv://mockdb-admin:****@mockdb.kce5o.mongodb.net/movies?retryWrites=true&w=majority&authSource=admin
```

  </TabItem>
  <TabItem value="dns" label="Domain name service seed list format">
MongoDB also supports a Domain Name Service (DNS) Seed list for connecting with the standard format. To use the DNS seed list format, you’ll have to prefix the connection string with `mongodb+srv://`. The `+srv` indicates that the hostname corresponds to the DNS SRV. The DNS seed list format is represented as below:

```mongodb
mongodb+srv://[@username:@password@]@host[:@port]/[@defaultauthdb]/[?authSource=@authDB]]
```

You can map the fields as below:

* `mongodb+srv://` - a prefix to identify that it’s a DNS Seed List format.

* Like [Standard format](#connect-using-srv-uri), you can add `username`, `password`, `host`, `port`, `default database,` and `authSource`.



**Example URIs**

```js
mongodb+srv://dbuser:s@cur!ty/server.dnsseedlist.com/defaultauthdbSource?authSource=authusersb
```

:::info
* Using the +srv automatically sets the TLS or SSL option to true. If you wish to turn off the TLS or SSL option, `tls/ssl=false` in the query string.
* If the username or password includes (`: /? # [ ] @),` convert these characters using [percent encoding](https://www.rfc-editor.org/rfc/rfc3986#section-2.1).
* Read more about the [standard format ](https://www.mongodb.com/docs/manual/reference/connection-string/#standard-connection-string-format)and [DNS seed list format](https://www.mongodb.com/docs/manual/reference/connection-string/#dns-seed-list-connection-format) available on [MongoDB documentation](https://docs.mongodb.com/manual/reference/connection-string/#mongodb-urioption-urioption.ssl).
:::
  </TabItem>

</Tabs>




## Create queries


You can write queries to fetch or write data to the MongoDB database by selecting the **+** New Query button available on datasource page under **Explorer** >> **Datasources** or by navigating to Explorer >> click (**+**) next to Queries/JS >> select your MongoDB database. 

| Query Name                                                     | Description                                         |   
| -------------------------------------------------------------- | --------------------------------------------------- | 
| [**Find Documents**](#create-queries)           | Fetches documents from a collection in a database based on specific criteria. |   
| [**Insert Documents**](#create-queries)       |   Adds new documents to a collection in a database.  |   
| [**Update Documents**](#create-queries)      |    Modifies existing documents in a collection by updating or adding fields.                |   
| [**Delete Documents**](#create-queries) |  Removes documents from a collection in a database permanently.                  |   
| [**Count**](#create-queries)       |      Returns the number of documents that match a specific query in a collection.              |   
| [**Distinct**](#create-queries) |         Returns unique values from a specific field in a collection.               |   
| [**Aggregate**](#create-queries)       |      Performs various operations on a collection such as grouping, sorting, and calculating.             |   
| [**Raw**](#create-queries)       |       Executes a raw query in a database using the database-specific query language.            |  

You can check the [Query Settings Guide](core-concepts/data-access-and-binding/querying-a-database/query-settings.md) to learn more about queries.


### Find documents

The "Find documents" is a query method in MongoDB used to retrieve documents from a MongoDB database collection. The method allows you to specify a set of criteria, such as search conditions or filters, to find documents that match the criteria.

The following fields are supported in Appsmith for this command :

* **Collection**: This field specifies the name of the MongoDB collection from which you want to retrieve documents. Learn more about [collections](https://www.mongodb.com/docs/manual/core/databases-and-collections/).
* **Query**: This field specifies the search criteria or filters for the documents you want to retrieve. You can use a variety of operators and expressions to create complex queries. The input is expected in JSON/BSON format like the following :

     ```sql
    {
     rating: { $gte: 9 }, 
     cuisine: "italian" 
    } 
     ```

* **Sort**: This field specifies the order in which the documents should be returned, based on one or more fields.
* **Projection**: This field specifies which fields to include or exclude from the query result. You can use this to limit the amount of data returned by the query.
* **Limit**: This field specifies the maximum number of documents to return from the query result. If this method isn't specified, it defaults to returning 10 documents.
* **Skip**:  This field specifies the number of documents to skip before returning results. 

Learn more about [Find documents](https://www.mongodb.com/docs/manual/tutorial/query-documents/)

### 2. Insert Document(s)

This command inserts one or more documents and returns a document containing the status of all inserts. The following fields are supported in Appsmith for this command :

`Collection Name`: The name of the target collection. The input is expected in a string format like the following :

```
users
```

`Documents`: An array of one or more documents to insert into the named collection. The input is expected in a JSON/BSON Array format like the following :

```
[ { _id: 1, user: "abc123", status: "A" } ]
```

### 3. Update Document(s)

This command modifies multiple documents in a collection. The following fields are supported in Appsmith for this command :

`Collection Name`: The collection against which to run the command. The input is expected in a string format like the following :

```
people
```

`Query`: The query that matches documents to update. The input is expected in JSON/BSON format like the following :

```
{ name: "Andy" }
```

`Update`: The modifications are to apply. The input is expected in JSON/BSON format like the following :

```
{ $inc: { score: 1 } }
```

`Limit`: the dropdown can be used to specify whether the command should apply to a single document or to all documents that match the query.


MongoDB's multi update feature doesn't support replacement style updates. This means that you can't replace the entire document, but rather, you can only update a single field.

To successfully run a multi update command in MongoDB, you can use the following syntax:

```js
   { $set: { <field1>: <value1>, <field2>: <value2>, ... } }
```

You can add the `$set` command in the `update` input field.

This updates all documents that match the ```query``` criteria and set the specified fields to the specified values.

It's important to note that the ```$set``` operator is required in the update document when using the multi option. If the `$set` operator is not used in an update command, no documents in the collection will be modified. For more information, see the [update many commands in MongoDB](https://www.mongodb.com/docs/manual/reference/method/db.collection.updateMany/) available on the official documentation.






### 4. Delete Document(s)

This command removes documents from a collection. The following fields are supported in Appsmith for this command :

`Collection Name`: The target collection against which to run the command. The input is expected in a string format like the following :

```
orders
```

`Query`: The query that matches document(s) to delete. The input is expected in JSON/BSON format like the following :

```
{ status: "D" }
```

`Limit`: The dropdown is used to configure if this delete command should act upon a single document or if this command should delete all the matching documents according to the query.

### 5. Count

This command counts the number of documents in a collection or a view. Returns a document that contains this count. The following fields are supported in Appsmith for this command :

`Collection Name`: The name of the collection or view to count. The input is expected in a string format like the following :

```
orders
```

`Query`: A query that selects which documents to count in the collection or view. The input is expected in JSON/BSON format like the following :

```
{ ord_dt: { $gt: new Date('01/01/2021') }
```

### 6. Distinct

This command finds the distinct values for a specified field across a single collection. The following fields are supported in Appsmith for this command :

`Collection Name`: The name of the collection to query for distinct values. The input is expected in a string format like the following :

```
inventory
```

`Query`: A query specifies documents from which to retrieve the distinct values. The input is expected in JSON/BSON format like the following :

```
{ dept: "A"} }
```

`Key/Field`: The field for which to return distinct values. The input is expected in a string format like the following :

```
item.sku
```

### 7. Aggregate

This command performs aggregation operations using the aggregation pipeline. The pipeline allows users to process data from a collection or other source with a sequence of stage-based manipulations. The following fields are supported in Appsmith for this command :

`Collection Name`: The name of the collection or view that acts as the input for the aggregation pipeline. The input is expected in a string format like the following :

```
articles
```

`Array of Pipelines`: An array of aggregation pipeline stages that process and transform the document stream as part of the aggregation pipeline. The input is expected in JSON/BSON array format like the following :

```
[
      { $project: { tags: 1 } },
      { $unwind: "$tags" },
      { $group: { _id: "$tags", count: { $sum : 1 } } }
]
```

The above example performs an aggregate operation on the articles collection to calculate the count of each distinct element in the tags array that appears in the collection.

## Querying Mongo (Advanced)

You can use a `Raw` command to write your custom Mongo queries.

:::info
The mongo database command syntax is slightly different from the mongo collection methods you may be familiar with. [Read more](https://docs.mongodb.com/manual/reference/command/nav-crud/).
:::

To add a Raw query, set your query parameters as below:

* **Commands** - Select Command as **Raw.**
* **Query palette -** Add the Raw query to it.&#x20;
* Click **Run** to test your query.

![How to create a Raw Query?](</img/Datasources__MongoDB__Add_a_Raw_Query.png>)

:::info
All mongo queries return an **array of objects** where each object is a **mongo document**, and the object's properties are the document's keys.
:::

The [pipeline](https://www.mongodb.com/docs/manual/core/aggregation-pipeline/) is an array that contains the aggregation stages that process the documents. In your Raw query, you'll have to include the filter criteria in a pipeline keyword when using aggregation. For example, you wish to fetch data from movies where the revenue is 42600000. You'll use `$match` that checks for documents where the `revenue` is  `42600000`. You added the below query:

```
{
   "aggregate":"movies",
   "$lookup":[
      {
         "$match":{
            "revenue":42600000
         }
      }
   ],
   "cursor":{
      "batchSize":10
   }
}

```

:::info
By default, Mongo returns only **101 records** due to its default [batchSize](https://docs.mongodb.com/manual/tutorial/iterate-a-cursor/). You can update the limit and batchSize by adding values to your query.
:::

* Click the `Run` button to execute the query.

The queries will fail to execute and throw an exception `Pipeline option must be specified as an array.`&#x20;

![The error generated when the pipeline keyword  is not added](</img/Datasources__MongoDB__Pipeline_Keyword_not_supplied__Error_Generated.png>)

* For Raw queries, you'll have to add the filter criteria to the **`pipeline`** keyword as below:

```
{
   "aggregate":"movies",
   "pipeline":[
      {
         "$match":{
            "revenue":42600000
         }
      }
   ],
   "cursor":{
      "batchSize":10
   }
}
```

* Click the `Run` button to execute the query.

![A raw query response](</img/Datasources__MongoDB__Pipeline_Keyword_added__Response_Generated_Successfully.png>)

## Template Queries

Appsmith provides template queries to help with the syntax.

* [Insert Query](mongo-syntax.md#insert-query)
* [Find Query](mongo-syntax.md#find-query)
* [Update Query](mongo-syntax.md#update-query)
* [Delete Query](mongo-syntax.md#delete-query)

![](/img/mongo.gif)

## Using Queries in applications

Once you have successfully run a Query, you can use it in your application to

* [Display Data](/core-concepts/data-access-and-binding/displaying-data-read/)
* [Capture Data](/core-concepts/data-access-and-binding/capturing-data-write/)
