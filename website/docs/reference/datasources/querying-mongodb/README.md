---
sidebar_position: 9
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# MongoDB

This document covers how to establish a connection between your MongoDB database and Appsmith to read and write data on your applications.


<VideoEmbed host="youtube" videoId="F_By1KmJKrk" title="Build a MongoDB Panel" caption="Build a MongoDB Panel"/>

## Connect to MongoDB datasource
To add a MongoDB datasource, navigate to **Explorer** >> click the (**+**) sign next to **Datasources** >> select **MongoDB** under Databases. This opens up the page where you can configure the parameters to connect to your MongoDB database.

### Configure datasource
To connect to a MongoDB database, you must configure the following parameters. 


<figure>
  <img src="/img/mongodb-datasource-1.png" style= {{width:"700px", height:"auto"}} alt="Configure PostgreSQL Datasource"/>
  <figcaption align = "center"><i>Configure MongoDB datasource</i></figcaption>
</figure>

* **Connection String URI:** It's a string that contains all the necessary information for an application to connect to a database. If you have an SRV URI, please follow [these steps](#connection-string-uri) to connect to your MongoDB instance.

* **Connection Mode:** This refers to the permission granted to Appsmith when establishing a connection to the database. The two available modes are:

   * **Read Only:** This mode grants read-only access to the database.
   * **Read / Write:** This mode grants Appsmith both read and write permissions on the database. 

* **Connection Type:** This refers to the method used to establish a connection between a client and a database. You must choose one of the available connection types:

  * **Direct Connection**: This connection type enables you to connect directly to a MongoDB instance.
  * **Replicate Set**: This connection type enables you to connect to a set of MongoDB instances.


* **Host Address:** Provide the hostname or IP address. You can specify multiple host addresses for a replicate set. 

* **Port:** A port is a numerical identifier that helps establish a network connection. Appsmith tries to connect to port `27017` if you don't specify a port.

* **Default** **Database Name:** This refers to the name of the database on your Mongo server that you want to connect to.

* **Authentication:** To establish a connection with the database, provide the necessary authentication parameters.
  * **Database Name:** MongoDB's authentication DB stores user authentication data like usernames and passwords. Enter the name of the authentication DB.
  * **Authentication Type:** Choose the authentication mechanism that you want to use to connect to your database. You can select from [`SCRAM-SHA-1`](https://www.mongodb.com/docs/manual/core/security-scram/), `SCRAM-SHA-256`, or [`MONGO-CR`](https://mongoing.com/docs/core/security-mongodb-cr.html). 
  * **Username:** Provide the username required for authenticating connection requests to your database. Leave this field blank if you don't wish to specify a username for authentication.(note that your database must accept such connections).
  * **Password:** Provide the password required for authenticating connection requests for the given username to the database. If you don't want to log in with a password, leave this field empty (note that your database must accept such connections).

* **SSL:** The connection uses the Default SSL mode. You can set it to one of the following modes:

   * **Default**: Depends on Connection Type. If using the `Replica set`, this is `Enabled`. If using a `Direct connection`, this is `Disabled`.
   * **Enabled**: This option rejects the connection if SSL isn't available.
   * **Disabled**: Disabling SSL disallows all administrative requests over HTTPS. It uses a plain unencrypted connection.

For more information, see [Configure SSL](https://www.mongodb.com/docs/manual/tutorial/configure-ssl/).



### Connection String URI

Using an SRV URI as a connection string for connecting to a MongoDB cluster allows you to establish a connection without the need to manually specify details.

A [service record](https://en.wikipedia.org/wiki/SRV\_record) (SRV) defines the location of a service hosting, like a hostname, port number, and more. You can connect to a MongoDB datasource on Appsmith using SRV URI Formats - [Standard URI Format](https://www.mongodb.com/docs/manual/reference/connection-string/#standard-connection-string-format) or a [DNS Seed List Format](https://www.mongodb.com/docs/manual/reference/connection-string/#dns-seed-list-connection-format).



<Tabs>
  <TabItem value="scsf" label="Standard Connection String Format" default>

A Standard Connection String Format(Standard Format) connects to a standalone replica set or a shared cluster of MongoDB. The standard format is represented as below:

```bsh
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

##### Example URIs

```bash
mongodb+srv://mockdb-admin:****@mockdb.kce5o.mongodb.net/movies?retryWrites=true&w=majority&authSource=admin
```

##### General notes
* You can add multiple host and port details separated by a comma in the connection string to connect using the same user.
* If the username or password includes (`: /? # [ ] @),` convert these characters using [percent encoding](https://www.rfc-editor.org/rfc/rfc3986#section-2.1).
* It's mandatory to provide a value for the `defaultauthdb` field as the queries would be executed against it.
* In case the `authSource` isn't specified, Appsmith try's to authenticate using the admin database.




  </TabItem>
  <TabItem value="dns" label="Domain name service seed list format">
    
The DNS seed list format is another way of connecting to MongoDB, which is supported by the Appsmith. It involves using a standard format for Domain Name Service (DNS) seed lists, which requires the connection string to be prefixed with `mongodb+srv://`. The `+srv` prefix is used to indicate that the hostname is associated with the DNS SRV. Here's an example of how the DNS seed list format is represented:

```bash
mongodb+srv://[@username:@password@]@host[:@port]/[@defaultauthdb]/[?authSource=@authDB]]
```

You can map the fields as below:

* **`mongodb+srv://`** - a prefix to identify that it’s a DNS Seed List format.

* Like [Standard format](#connect-using-srv-uri), you can add `username`, `password`, `host`, `port`, `default database,` and `authSource`.



##### Example URIs

```bash
mongodb+srv://dbuser:s@cur!ty/server.dnsseedlist.com/defaultauthdbSource?authSource=authusersb
```

#### General notes
* Using the +srv automatically sets the TLS or SSL option to true. If you wish to turn off the TLS or SSL option, `tls/ssl=false` in the query string.
* If the username or password includes (`: /? # [ ] @),` convert these characters using [percent encoding](https://www.rfc-editor.org/rfc/rfc3986#section-2.1).
* Read more about the [standard format ](https://www.mongodb.com/docs/manual/reference/connection-string/#standard-connection-string-format)and [DNS seed list format](https://www.mongodb.com/docs/manual/reference/connection-string/#dns-seed-list-connection-format) available on [MongoDB documentation](https://docs.mongodb.com/manual/reference/connection-string/#mongodb-urioption-urioption.ssl).


  </TabItem>

</Tabs>




## Create queries


You can write queries to fetch or write data to the MongoDB database by selecting the **+ New Query** button available on datasource page under **Explorer** >> **Datasources** or by navigating to Explorer >> click (**+**) next to **Queries/JS** >> select your MongoDB database. 


### Find Documents

"Find documents" is a query method that retrieves documents from a collection within a database. The method allows you to specify a set of criteria, such as search conditions or filters, to find documents that match the criteria. You can pass the below parameters to Find Documents:

* **Collection**: This field specifies the name of the MongoDB collection from which you want to retrieve documents. For example, to find documents from a collection named `restaurants`, you can specify:

    ```sql
    restaurants
    ```
* **Query**: This field specifies the search criteria or filters for the documents you want to retrieve. You can use a variety of operators and expressions to create complex queries. For example, to retrieve all Italian restaurants with a rating greater than or equal to 9, you can specify:

     ```sql
    {
     rating: { $gte: 9 }, 
     cuisine: "italian" 
    } 
     ```

* **Sort**: This field specifies the order in which the documents should be returned, based on one or more fields. For example, to sort the results by the `name` field in ascending order, you can specify:

     ```sql
     { name: 1 }
     ```
* **Projection**: This field specifies which fields to include or exclude from the query result. You can use this to limit the amount of data returned by the query. For example, to include only the `name`, `rating`, and `address` fields, you can specify:

   ```sql
   { name: 1, rating: 1, address: 1 }
   ```

* **Limit**: This field specifies the maximum number of documents to return from the query result. If this method isn't specified, it defaults to returning 10 documents. For example, to limit the results to 5 documents, you can specify:
   ```sql
   10
   ```
* **Skip**:  This field specifies the number of documents to skip before returning results. For example, to skip the first 5 documents and return the rest, you would specify:

   ```sql
   0
   ```


### Insert Documents

This command inserts one or more documents and returns a document containing the status of all inserts. You can pass the below parameters to Insert Documents:

* **Collection Name**: This field specifies the name of the MongoDB collection where you want to insert documents. 

   ```bash
    users
   ```

* **Documents**: This field specifies the document or documents you want to insert into the collection. A document is a set of key-value pairs that represents an object in MongoDB. For example, to insert a single document you can specify:

   ```bash
    [ { _id: 1, user: "abc123", status: "A" } ]
   ```

### Update Documents

The Update command in MongoDB is used to modify existing documents in a collection based on a specified set of criteria, such as search conditions or filters. You can pass the below parameters to Update Documents:

* **Collection Name**: This field specifies the name of the MongoDB collection where you want to update documents. 
* **Query**: This field specifies the search criteria or filters for the documents you want to update. 

  ```bash
  { name: "Andy" }
  ```

* **Update**:  This field specifies the modifications you want to make to the selected documents. For example, to update the `score` field you can write:

  ```bash
  { $inc: { score: 1 } }
  ```

* **Limit**: This field specifies the maximum number of documents to update. 

MongoDB's multi update feature doesn't support replacement style updates. This means that you can't replace the entire document, but rather, you can only update a single field.

To successfully run a multi update command in MongoDB, you can use the following syntax:

```bash
   { $set: { <field1>: <value1>, <field2>: <value2>, ... } }
```

You can add the `$set` command in the `update` input field.

This updates all documents that match the ```query``` criteria and set the specified fields to the specified values.

It's important to note that the ```$set``` operator is required in the update document when using the multi option. If the `$set` operator isn't used in an update command, no documents in the collection will be modified. For more information, see the [update many commands in MongoDB](https://www.mongodb.com/docs/manual/reference/method/db.collection.updateMany/) available on the official documentation.






### Delete Documents

Delete Documents command removes one or more documents from a collection based on a specified set of criteria. 

* **Collection Name**:  This field specifies the name of the MongoDB collection from which you want to delete documents. 


* **Query**: This field specifies the criteria or filters for selecting documents to delete. For example, to delete all documents with a "status" field set to "inactive, you can specify:

   ```bash
   { status: "inactive" }
   ```

* **Limit**: This field lets you choose whether to delete a single document or multiple documents that match the query.

### Count

This command counts the number of documents in a collection or a view that match a specified set of criteria. 

* **Collection Name**:  This field specifies the name of the MongoDB collection or view that you want to count documents in. 


* **Query**: This field specifies the criteria or filters for selecting the documents to count. For example, to count the number of documents in the `orders` collection where the order date is greater than `January 1st, 2021`, you can specify:

   ```bash
   { ord_dt: { $gt: new Date('01/01/2021') }
   ```



### Distinct

Distinct command is used to find the unique or distinct values for a specified field in a single collection.


* **Collection Name**: The name of the collection to query for distinct values.


* **Query**: A query specifies documents from which to retrieve the distinct values. For example, to retrieve distinct values for the `department` field where the department is `A`, you can specify:

   ```bash
   { dept: "A"} }
   ```

* **Key/Field**: The field for which to return distinct values. For example, to return distinct values for a field named `sku` in a collection named `items`, you can specify:

    ```bash
    item.sku
    ```

### Aggregate

This command performs aggregation operations using the aggregation pipeline. The pipeline allows users to process data from a collection or other source with a sequence of stage-based manipulations. 

* **Collection Name**: The name of the collection or view that serves as the input for the aggregation pipeline. 

* **Array of Pipelines**: An array of aggregation pipeline stages that process and transform the document stream as part of the aggregation pipeline. 

    ```bash
    [
       { $project: { tags: 1 } },
       { $unwind: "$tags" },
       { $group: { _id: "$tags", count: { $sum : 1 } } }
   ]
    ```

The preceding example performs an aggregate operation on the articles collection to calculate the count of each distinct element in the tags array that appears in the collection.

### Raw

The Raw command allows you to write custom queries using the MongoDB database command syntax. 


:::info
The mongo database command syntax is slightly different from the mongo collection methods you may be familiar with. [Read more](https://docs.mongodb.com/manual/reference/command/nav-crud/).
:::


#### Basic raw query

```bash
{
   "find":"users",
   "filter":{
      "name":"John"
   }
}
```
This query returns all documents from the `user` collection where the `name` field matches `John`.

#### Aggregation pipeline query

The [pipeline](https://www.mongodb.com/docs/manual/core/aggregation-pipeline/) is an array that contains the aggregation stages that process the documents. In your Raw query, you'll have to include the filter criteria in a pipeline keyword when using aggregation.


```bash
{
   "aggregate":"orders",
   "pipeline":[
      {
         "$match":{
            "status":"paid"
         }
      }
   ],
   "cursor":{
      "batchSize":50
   }
}

```

This query uses the `$match` stage in the aggregation pipeline to filter documents in the `orders` collection where the `status` field matches `paid`. It also specifies a cursor with a batch size of 50 documents.

#### Raw command with lookup

```bash
{
   "aggregate":"orders",
   "pipeline":[
      {
         "$lookup":{
            "from":"customers",
            "localField":"customer_id",
            "foreignField":"_id",
            "as":"customer"
         }
      },
      {
         "$unwind":"$customer"
      },
      {
         "$match":{
            "customer.status":"active"
         }
      }
   ],
   "cursor":{
      "batchSize":100
   }
}
```
This query uses the `$lookup` stage in the aggregation pipeline to join documents in the `orders` collection with documents in the `customers` collection based on the `customer_id` field. 

:::info
By default, Mongo returns only **101 records** due to its default [batchSize](https://docs.mongodb.com/manual/tutorial/iterate-a-cursor/). You can update the limit and batchSize by adding values to your query.
:::

When running a Raw query, the filter criteria must be included in the pipeline array for aggregation. The error `Pipeline option must be specified as an array` is generated when the pipeline option is missing or not specified as an array, leading to query failure.




<figure>
  <img src="/img/Datasources__MongoDB__Pipeline_Keyword_not_supplied__Error_Generated.png" style= {{width:"700px", height:"auto"}} alt="Configure PostgreSQL Datasource"/>
  <figcaption align = "center"><i>The error generated when the pipeline keyword  isn't added</i></figcaption>
</figure>


#### Raw query syntax
This section provides a reference for the syntax and usage of raw MongoDB queries.


#####  Find query
The [Find Query](https://docs.mongodb.com/manual/reference/command/find/) syntax is used to retrieve data from MongoDB collections based on specified filter conditions and projection criteria.

   ```bash
    {
      "find": <string>,
      "filter": <document>,
      "sort": <document>,
      "projection": <document>,
      "skip": <int>,
      "limit": <int>
     }

     //example
     {
     "find": "restaurants",
     "filter": { "rating": { "$gte": 9 }, "cuisine": "italian" },
     "projection": { "name": 1, "rating": 1, "address": 1 },
     "sort": { "name": 1 },
     "limit": 5
      }
   ```


#####  Update query
The [Update Query](https://docs.mongodb.com/manual/reference/command/update/#dbcmd.update) syntax is used to modify existing data in MongoDB collections.


   ```bash
     {
      "update": <collection>,
      "updates": [
         {
           "q": <query>,
           "u": <document or pipeline>
         }
      ]
      }     

      //example
      {    
      "update": "members",
      "updates": [
         { 
         "q": { }, 
         "u": { "$set": { "status": "A" }, "$inc": { "points": 1 } }, 
         "multi": true 
         }
      ]
      }
   ```

#####  Insert query
The [Insert Query](https://docs.mongodb.com/manual/reference/command/insert/) syntax is used to add new documents to MongoDB collections.


   ```bash
    {
   "insert": <collection>,
   "documents": [ <document>, <document>, ... ],
   "ordered": <boolean>
    }  

      //example
    {
      "insert": "users",
      "documents": [ 
            { "_id": 1, "user": "abc123", status: "A" } 
      ]
    }
   ```
#####  Delete query
The [Delete Query](https://docs.mongodb.com/manual/reference/command/delete/) syntax is used to remove data from MongoDB collections based on specified filter conditions.


   ```bash
     {
       "delete": <collection>,
       "deletes": [
       {
         "q" : <query>,
         "limit" : <integer>
       }
      ]
      }

      //example
      {
       "delete": "orders",
       "deletes": [ { 
             "q": { status: "D" }, 
             "limit": 1 
      } ]
       }
   ```

You can refer to this sample app on [MongoDB RAW Query](https://app.appsmith.com/applications/61e022f1eb0501052b9fa205/pages/6229a205f782567d61f16d2f).

## Server-side pagination 

Server-side pagination in MongoDB limits the number of query results returned by the server and enables the client to fetch additional results as required.
It involves the use of the `limit()` and `skip()` methods in conjunction with queries. For example, 
```js
Limit:
{{Table_1.pageSize}}

Skip:
{{(Table_1.pageNo - 1) * Table_Mongo.pageSize}}
```
This example shows how to implement server-side pagination for a collection called "movies" in MongoDB. The limit() method sets the maximum number of documents to be returned in a single query result, while the skip() method specifies the number of documents to skip before starting to return results.

You can refer to this [sample app](https://app.appsmith.com/applications/623cca594d9aea1b062b33c6/pages/623cca594d9aea1b062b33cd) to learn how to implement server-side pagination on the Table widget.

## Troubleshooting
If you are experiencing difficulties with connecting datasources in Appsmith, you can refer to the [Datasource troubleshooting guide](/help-and-support/troubleshooting-guide/action-errors/datasource-errors) for assistance. If you need further support, you can reach out on [Discord](https://discord.com/invite/rBTTVJp) or ask questions on the [community forum](https://community.appsmith.com/).

## Further reading

* [Queries](/core-concepts/data-access-and-binding/querying-a-database)
* [Data access and binding](/core-concepts/data-access-and-binding)

