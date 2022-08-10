# MongoDB

[MongoDB](https://www.mongodb.com) is a document-oriented NoSQL database used for high-volume data storage. It doesn't store the data in the form of tables and rows as in traditional relational databases. Instead, it stores the data in collections and documents in a JSON format (using key-value pairs).

{% hint style="warning" %}
The following document assumes that you understand the [basics of connecting to databases on Appsmith](../../../core-concepts/connecting-to-data-sources/connecting-to-databases.md#connecting-to-a-database). If not, please go over them before reading further.
{% endhint %}

## Connection Settings

Appsmith needs the following parameters for connecting to a Mongo database:

{% hint style="success" %}
All required fields are suffixed with an asterisk (\*).
{% endhint %}

### **Connection**

To set up a connection, fill in the following parameters:

* **Connection Mode\*:** You must choose one of the following two modes:
  * **Read Only:** Choosing this mode gives Appsmith read-only permission on the database. This only allows you to fetch data from the database.
  * **Read / Write:** Choosing this mode gives Appsmith both read and write permissions on the database. This allows you to execute all CRUD queries.
* **Connection Type\*:** You must choose one of the following connection types:
  * **Direct Connection**: Choose this connection type to connect directly to a mongo instance
  * **Replicate Set**: Choose this connection type to connect to a set of mongo instances.
* **Host Address / Port\*:** Fill in the database host’s address and port. If you don’t specify a port, Appsmith will try to connect to port `27017`. You can specify multiple host addresses for a replicate set. If you have an [SRV URI](https://docs.mongodb.com/manual/reference/connection-string/#dns-seed-list-connection-format), please follow [these](./#connect-using-srv-uri) steps to connect to your MongoDB instance.
* **Default** **Database Name\*:** Fill in the name of the database you want to connect to. This is your database’s name on your mongo server.

### **Authentication**

For authentication, fill in the following parameters:

* **Database Name:** Fill in the name of the database against which you want to authenticate. This is typically admin for most MongoDB instances.
* **Authentication Type\*:** Choose the authentication mechanism to connect to your database. This can be one of `SCRAM-SHA-1`, `SCRAM-SHA-256`, or `MONGO-CR`.
* **Username:** Fill in the username required for authenticating connection requests to your database. Set this to empty if you won't want to specify a username to authenticate with.
* **Password:** Fill password required for authenticating connection requests for the given username to the database. Set this to _empty_ if you want to log in without a password (please ensure your database accepts such connections).

### **SSL**

The SSL Mode can be set to one of the following values:

* **`Default`**: Depends on Connection Type. If using the `Replica set`, this is `Enabled`. If using a `Direct connection`, this is `Disabled`.
* **`Enabled`**: Reject connection (if SSL is not available).
* **`Disabled`**: Connect without SSL, use a plain unencrypted connection.

### Connect using SRV URI

The [Service Record](https://en.wikipedia.org/wiki/SRV\_record) URI ([SRV URI](https://docs.mongodb.com/manual/reference/connection-string/#dns-seed-list-connection-format)) comprises of following components. For example, the SRV URI can be represented as below:

{% hint style="warning" %}
`mongodb+srv://<your_username>:<your_password>@<host_name_or_connection_url>/<authDBName>`
{% endhint %}

The fields from the URI can be mapped as below:

* `<connection_url>` to the `Host Address` field
* `<defaultDbName>` to the `Default Database Name` field
* `<your_username>` to the `Username` field
* `<your_password>` to the `Password` field
* `<authDbName>` to the `Database Name` field under the `Authentication` sub-section.

Read more on [MongoDB documentation](https://docs.mongodb.com/manual/reference/connection-string/#mongodb-urioption-urioption.ssl).

## Querying Mongo (Form Input)

`Form input` provides an easy interface to query the Mongo database.

As part of Form Input, Appsmith supports queries like `Find one or more documents`, `Insert a document`, `Update one`, `Count,` and more.

{% hint style="info" %}
All mongo queries return an **array of objects** where each object is a **mongo document**, and the object's properties are the document's keys.
{% endhint %}

![](../../../.gitbook/assets/mongo-form.gif)

### 1. Find Document(s)

This command selects documents in a collection or view. The following fields are supported in Appsmith for this command :

`Collection Name`: The name of the collection or view to query. The input is expected in a string format like the following :

```
restaurants
```

`Query`: The query predicate. If unspecified, then all documents in the collection will match the predicate. The input is expected in JSON/BSON format like the following :

```
{
     rating: { $gte: 9 }, 
     cuisine: "italian" 
}
```

`Sort` : (Optional) The sort specification for ordering the results. The input is expected in JSON/BSON format like the following :

```
{ name: 1 }
```

`Projection` : (Optional) The projection specification determines which fields to include in the returned documents. The input is expected in JSON/BSON format like the following :

```
{ name: 1, rating: 1, address: 1 }
```

`Limit` : (Optional) The maximum number of documents to return. If unspecified, then defaults to 10 documents. The input is expected in number format :

```
10
```

`Skip` : (Optional) Number of documents to skip. Defaults to 0. The input is expected in number format :

```
0
```

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

`Update`: The modifications to apply. The input is expected in JSON/BSON format like the following :

```
{ $inc: { score: 1 } }
```

`Limit`: The dropdown is used to configure if this delete command should act upon a single document or if this command should delete all the matching documents according to the query.

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

This command performs aggregation operation using the aggregation pipeline. The pipeline allows users to process data from a collection or other source with a sequence of stage-based manipulations. The following fields are supported in Appsmith for this command :

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

{% hint style="warning" %}
The mongo database command syntax is slightly different from the mongo collection methods you may be familiar with. [Read more](https://docs.mongodb.com/manual/reference/command/nav-crud/).
{% endhint %}

To add a Raw query, set your query parameters as below:

* **Commands** - Select Command as **Raw.**
* **Query palette -** Add the Raw query to it.&#x20;
* Click **Run** to test your query.

![How to create a Raw Query?](<../../../.gitbook/assets/Datasources  MongoDB  Add a Raw Query.png>)

{% hint style="info" %}
All mongo queries return an **array of objects** where each object is a **mongo document**, and the object's properties are the document's keys.
{% endhint %}

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

{% hint style="info" %}
By default, Mongo returns only **101 records** due to its default [batchSize](https://docs.mongodb.com/manual/tutorial/iterate-a-cursor/). You can update the limit and batchSize by adding values to your query.
{% endhint %}

* Click the `Run` button to execute the query.

The queries will fail to execute and throw an exception `Pipeline option must be specified as an array.`&#x20;

![The error generated when the pipeline keyword  is not added](<../../../.gitbook/assets/Datasources  MongoDB  Pipeline Keyword not supplied  Error Generated.png>)

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

![A raw query response](<../../../.gitbook/assets/Datasources  MongoDB  Pipeline Keyword added  Response Generated Successfully.png>)

## Template Queries

Appsmith provides template queries to help with the syntax.

* [Insert Query](mongo-syntax.md#insert-query)
* [Find Query](mongo-syntax.md#find-query)
* [Update Query](mongo-syntax.md#update-query)
* [Delete Query](mongo-syntax.md#delete-query)

![](../../../.gitbook/assets/mongo.gif)

## Using Queries in applications

Once you have successfully run a Query, you can use it in your application to

* [Display Data](../../../core-concepts/data-access-and-binding/displaying-data-read/)
* [Capture Data](../../../core-concepts/data-access-and-binding/capturing-data-write/)
