---
sidebar_position: 9
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# MongoDB

This page shows you how to connect Appsmith to a MongoDB database to read and write data in your applications.

<VideoEmbed host="youtube" videoId="F_By1KmJKrk" title="Build a MongoDB Panel" caption="Build a MongoDB Panel"/>

## Connect MongoDB

:::caution 
If you are a self-hosted user, you may need to whitelist the IP address of the Appsmith deployment `18.223.74.85` and `3.131.104.27` on your database instance or VPC before connecting to a database. See [**How to whitelist IP addresses on MongoDB Atlas**](https://studio3t.com/knowledge-base/articles/mongodb-atlas-login-ip-whitelisting/#how-to-whitelist-ip-addresses-on-mongodb-atlas) for more details.
:::

1. Click the **Explorer** tab on the entity explorer to the screen's left. Click the **+** icon next to **Datasources**. Select **MongoDB** under the **Databases** section. This opens the page where you can configure the parameters to connect to your MongoDB database.
2. Rename the datasource to be able to identify it when creating queries.
3. In the **Use Mongo Connection String URI** list:
   * If you select **Yes**, enter the connection string in the **Connection String URI** field. 
   * If you select **No**, select the **Connection Mode**. Enter details in the input boxes for **Host Address**, **Port**, **Database Name**, **Username** and **Password**.

   See the [**reference guide**](#connection-parameters) for a complete description of all the connection parameters.

:::info
If you want to connect to a local MongoDB database, see [**Connect Local Database**](/advanced-concepts/more/how-to-work-with-local-apis-on-appsmith) for directions on configuring the connection parameters.
:::

4. Click the **Test** button to test the connection and ensure the datasource is valid.
5. Click **Save** to create and save the database connection.


## Connection parameters

The following section list all the parameters provided by Appsmith to connect to a MongoDB database using Connection String URI format.
 <figure>
   <img src="/img/configure-mongodb-using-connection-string-uri.png" style= {{width:"100%", height:"auto"}} alt="Configure MongoDB using Connection String URI"/>
   <figcaption align = "center"><i>Connect MongoDB using Connection String URI</i></figcaption>
   </figure>

<dl>
  <dt><b>Connection String URI</b></dt>
  <dd>A MongoDB connection string URI (Uniform Resource Identifier) is a standardized way to specify the location and other details of a MongoDB database. This field is visible only if you select <b>Yes</b> in the <b>Use Mongo Connection String URI</b> list. See <a href="https://www.mongodb.com/docs/manual/reference/connection-string/#connection-string-uri-format"><b>Connection String URI Format</b></a> for details on how to specify the MongoDB connection string.</dd>
</dl>

*Example:*
```
mongodb+srv://mockdb-admin:****@mockdb.kce5o.mongodb.net/movies?retryWrites=true&w=majority&authSource=admin
```

---
The following section list all the parameters provided by Appsmith to connect to a MongoDB database by configuring multiple connection fields.

 <figure>
  <img src="/img/configure-mongodb-using-connection-mode.png" style= {{width:"100%", height:"auto"}} alt="Connect MongoDB using multiple connection fields"/>
  <figcaption align = "center"><i>Connect MongoDB using multiple connection fields</i></figcaption>
 </figure>

<dl>
  <dt><b>Connection Mode</b></dt>
  <dd> Specifies the mode in which the Appsmith application can interact with the database. This field and the subsequent fields are visible only if you select <b>No</b> in the <b>Use Mongo Connection String URI</b> list.  </dd><br />
  <dd><i>Options:</i>
    <ul>
     <li><b>Read Only:</b> This mode permits only read-only operations by default.</li>
     <li><b>Read/Write:</b> This mode permits both read-write operations by default.</li>
    </ul>
  </dd>  
 
 <dt><b>Connection Type</b></dt>
  <dd> This refers to the method used to establish a connection between a client and a database. </dd><br />
  <dd><i>Options:</i>
    <ul>
     <li><b>Direct Connection:</b> enables you to connect directly to a MongoDB instance</li>
     <li><b>Replicate Set:</b> enables you to connect to a set of MongoDB instances</li>
    </ul>
  </dd> 
  
  <dt><b>Host Address</b></dt>
  <dd>The IP address or domain name of the server where MongoDB is running. If you want to connect to a local MongoDB database, see [**Connect Local Database**](/advanced-concepts/more/how-to-work-with-local-apis-on-appsmith) for directions on configuring the connection parameters. 
  </dd><br />

  <dt><b>Port</b></dt>
  <dd>The port number on which MongoDB listens for incoming connections. Appsmith connects to port <code>27017</code> by default, if you don't specify one. 
  </dd><br />

  <dt><b>Default Database Name</b></dt>
  <dd>Specifies the default authentication database to use when authenticating a user. In MongoDB, when a user is authenticated, the authentication process checks the user's credentials against a specific database. By default, this database is <code>admin</code>, but you can specify a different database by using the <b>Default Database Name</b> parameter. 
  </dd><br />

  <dt><b>Database Name</b></dt>
  <dd>Specify the database name associated with the user's credentials. If <b>Database Name</b> is unspecified, it
 defaults to the <b>Default Database Name</b> specified in the connection field. If <b>Default Database Name</b> is unspecified, then <b>Database Name</b> defaults to <code>admin</code>.
 </dd><br />

  <dt><b>Authentication Type</b></dt>
  <dd>Specifies the authentication mechanism that MongoDB uses to authenticate the connection. </dd><br />
  <dd><i>Options:</i>
    <ul>
     <li><b>SCRAM-SHA-1:</b> Provides secure password storage through the use of a salted hash function. See <a href="https://www.mongodb.com/docs/manual/core/security-scram/#std-label-authentication-scram-sha-1">SCRAM-SHA-1</a> for details.</li>
     <li><b>SCRAM-SHA-256:</b> Uses the SHA-256 hashing algorithm for password storage. See <a href="https://www.mongodb.com/docs/manual/core/security-scram/#std-label-authentication-scram-sha-256">SCRAM-SHA-256</a> for details.</li>
     <li><b>MONGODB-CR:</b> Uses a challenge-response protocol to authenticate users based on a combination of a password and a random challenge string. See <a href="https://www.mongodb.com/docs/v3.2/core/security-mongodb-cr/">MONGODB-CR</a> for details.</li>
    </ul>
  </dd> 
</dl>

:::info
MongoDB 4.0 removes support for the MONGODB-CR authentication mechanism. You cannot specify MONGODB-CR as the authentication mechanism when connecting to MongoDB 4.0+ deployments.
:::

<dl>
  <dt><b>Username</b></dt>
  <dd>Provide the username required for authenticating connection requests to the database.
  </dd><br />

  <dt><b>Password</b></dt>
  <dd>Provide the password required for authenticating connection requests for the given username to the database.
  </dd><br />

  <dt><b>SSL Mode</b></dt>
  <dd>SSL can be used to secure the connection between the client and the server by encrypting all data that is transmitted between them. 
  </dd>
  <dd><i>Options:</i>
    <ul>
     <li><b>Default:</b> Depends on <b>Connection Type</b> field. If using the <b>Replica set</b> option, this is <code>Enabled</code>. If using the <b>Direct Connection</b>, this is <code>Disabled</code>.</li>
     <li><b>Enabled:</b> Initiates the connection with TLS/SSL. Rejects the connection if SSL isn't available.</li>
     <li><b>Disabled:</b> Initiates the connection without TLS/SSL. Disallows all administrative requests over HTTPS. It uses a plain unencrypted connection. </li>
    </ul>
  </dd>  
</dl>


## Query MongoDB

To create queries, click the **Explorer** tab on the entity explorer to the screen’s left. Click the **+** icon next to next to **Queries/JS**. Select the MongoDB database name from the list of options.

<figure>
  <img src="/img/query-mongo-ss.png" style= {{width:"100%", height:"auto"}} alt="Create MongoDB queries"/>
  <figcaption align = "center"><i>Create MongoDB queries</i></figcaption>
</figure>

:::info
 See [**Query and Write Operation Commands**](https://docs.mongodb.com/manual/reference/command/nav-crud/) for the MongoDB database commands.
:::

### Find Documents

This command fetches documents from a collection. The following section lists all the fields available for the **Find Documents** command.

<dl>
  <dt><b>Collection</b></dt>
  <dd>Specifies the name of the target collection from which you want to retrieve documents.
  </dd><br />

  <dt><b>Query</b></dt>
  <dd>Specifies the filters for the documents you want to retrieve.</dd>
</dl>

*Example:*
   ```sql
      { 
         rating: { $gte: 4 },
         cuisine: {{cuisineList.selectedOptionValue}}
      }
   ```
In the above example, `cusineList` is the name of the Select widget with a list of all the cusines. The query filters documents from a restaurant collection where rating is greater than 4 and cusine is the one selected in the list.

<dl>
  <dt><b>Sort</b></dt>
  <dd>Specifies the order in which the documents should be returned, based on one or more fields. 
  </dd>
</dl>

*Example:*

   ```sql
    { name: 1 }
   ```

In the above example, they query sorts the results by the `name` field in the ascending order.

<dl>
  <dt><b>Projection</b></dt>
  <dd>Specifies which fields to include in the returned documents.</dd>
</dl>

*Example:*

   ```sql
      { name: 1, rating: 1, address: 1 }
   ```

In the above example, the query returns only returns the `name`, `rating`, and `address` fields in the matching documents.

<dl>
  <dt><b>Limit</b></dt>
  <dd>Specifies the maximum number of documents to return. The default value is 10. If this field isn't specified, the query returns 10 documents.
  </dd>
</dl>

*Example:*

   ```javascript
   {{tableItems.pageSize}}
   ```

In the above example, `tableItems` is the name of the Table widget where you display the results from the query. The query limits the results based on the table's pageSize property. 

<dl>
  <dt><b>Skip</b></dt>
  <dd>This field specifies the number of documents to skip before returning results. </dd>
</dl>

*Example:*

   ```javascript
   {{tableItems.pageOffset}}
   ```

In the above examples of **Limit** and **Skip** fields, the queries use [**server-side pagination**](/reference/widgets/table#server-side-pagination) to limit the number of query results returned by the server and to fetch additional results when user moves to the next page in the table. You can fork this [**Sample App**](https://app.appsmith.com/applications/623cca594d9aea1b062b33c6/pages/623cca594d9aea1b062b33cd) to see how to implement server-side pagination on the Table widget.


### Insert Documents

This command inserts one or more documents and returns a document containing the status of all inserts. The following section lists all the fields available for the **Insert Documents** command.


<dl>
  <dt><b>Collection</b></dt>
  <dd>Specifies the name of the target collection where you want to insert the documents.
  </dd><br />

  <dt><b>Documents</b></dt>
  <dd>Specifies an array of one or more documents you want to insert into the collection.</dd>
</dl>

*Example:*

```sql
   [
      { 
         "_id": {{NewMovieForm.data.idInput}}, 
         "name": {{NewMovieForm.data.nameInput}}, 
         "rating": {{NewMovieForm.data.ratingSelect}}
      }
   ] 
```

In the above example, the query inserts a new movie using the data entered in the Form widget.

### Update Documents

This command modifies the documents in a collection based on a specified set of filters. The following section lists all the fields available for the **Update Documents** command. 

<dl>
  <dt><b>Collection</b></dt>
  <dd>Specifies the name of the target collection where you want to update documents.
  </dd><br />

  <dt><b>Query</b></dt>
  <dd>Specifies the filters for the documents you want to update. In your Table widget, make the `name` column [Editable](/reference/widgets/table/inline-editing#editable). A new **Save/Discard** button column should have appeared in the table. Add the below code to Query field.</dd>
</dl>

*Example:*

   ```sql
   { 
      "_id": {{tableItems.selectedRow.id}} 
   }
  ```

In the above example, the query filters the record where the `id` field is equal to the id of the row selected on the Table widget `tableItems`.

<dl>
  <dt><b>Update</b></dt>
  <dd>Specifies the modifications you want to make to the selected documents. 
  </dd>
</dl>

*Example:*
   ```sql
   {
      $set: {
               "name":  {{tableItems.updatedRow.name}},
               "rating": {{tableItems.updatedRow.rating}}
           }
   }
  ```

In the above example, the query updates the `name` and `rating` fields with the values updated in the table cells.

<dl>
  <dt><b>Limit</b></dt>
  <dd>Specifies the whether to delete single or multiple documents</dd>
  <dd><i>Options:</i>
    <ul>
     <li><b>Single Document:</b> Limits the update to one document that meet the query criteria.</li>
     <li><b>All Matching Documents:</b> Updates the fields in all documents that meet the query criteria.</li>
    </ul>
  </dd>  
</dl>


### Delete Documents

Delete Documents command removes one or more documents from the collection based on a specified filters. The following section lists all the fields available for the **Delete Documents** command.

<dl>
  <dt><b>Collection</b></dt>
  <dd>Specifies the name of the target collection where you want to delete documents.
  </dd><br />

  <dt><b>Query</b></dt>
  <dd>Specifies the criteria that matches the documents to delete.
</dd>
</dl>

*Example:*

   ```sql
   { 
      "rating": {{selectRating.selectedOptionValue}} 
   }
  ```

In the above example, the query deletes all the documents where the `rating` field contains the same value as the one selected in the Select widget named `selectRating`.

<dl>
  <dt><b>Limit</b></dt>
  <dd>Specifies the whether to delete single or multiple documents</dd>
  <dd><i>Options:</i>
    <ul>
     <li><b>Single Document:</b> Limits the update to one document that meet the query criteria.</li>
     <li><b>All Matching Documents:</b> Updates the fields in all documents that meet the query criteria.</li>
    </ul>
  </dd>  
</dl>

### Count

This command counts the number of documents in a collection that match a specified set of criteria. The following section lists all the fields available for the **Count** command.

<dl>
  <dt><b>Collection</b></dt>
  <dd>Specifies the name of the target collection where you want to count the documents.
  </dd><br />

  <dt><b>Query</b></dt>
  <dd>This field specifies the criteria for selecting the documents to count.
</dd>
</dl>

*Example:*
   ```sql
   { 
      "release_dt": { $gte: {{releaseDate.formattedDate}} 
   }
  ```

In the above example, the query counts the documents in a `movies` collection where the release date is greater than the date picked in the Datepicker widget `releaseDate`.


### Distinct

This command finds the unique or distinct values for a specified field across a single collection. The following section lists all the fields available for the **Distinct** command.

<dl>
  <dt><b>Collection</b></dt>
  <dd>Specifies the name of the target collection to query for distinct values.
  </dd><br />

  <dt><b>Query</b></dt>
  <dd>Specifies the documents from which to retrieve the distinct values.
</dd>
</dl>

*Example:*
   ```sql
   { 
      "rating": {{selectRating.selectedOptionValue}} 
   }
  ```

In the above example, the query retrieves distinct values from the documents where the `rating` field contains the same value as the one selected in the Select widget named `selectRating`.


<dl>
  <dt><b>Key</b></dt>
  <dd> Specifies the name of the field for which to return distinct values.
  </dd>
</dl>


### Aggregate

This command allows users to process data from a collection with a sequence of stage-based manipulations. The following section lists all the fields available for the **Aggregate** command.


<dl>
  <dt><b>Collection</b></dt>
  <dd>Specifies the name of the target collection that serves as the input for the aggregation pipeline.
  </dd><br />

  <dt><b>Array of Pipelines</b></dt>
  <dd>An array of aggregation pipeline stages that process and transform the document stream as part of the aggregation pipeline. 
</dd>
</dl>

*Example:*

   ```sql
   { 
   [
       { $project: { tags: 1 } },
       { $unwind: "$tags" },
       { $group: { _id: "$tags", count: { $sum : 1 } } }
   ] 
   } 
  ```

The preceding example performs an aggregate operation on the `articles` collection to calculate the count of each distinct element in the `tags` array that appears in the collection.

<dl>
  <dt><b>Limit</b></dt>
  <dd>Specifies the maximum number of documents to return. The default value is 10. If this field isn't specified, the query returns 10 documents.
  </dd>
</dl>


### Raw

This command allows you to write queries using the MongoDB database command syntax. See [Raw Query Commands](/reference/datasources/querying-mongodb/mongo-syntax) for more information. 

## Troubleshooting

If you experience difficulties, contact the support team using the chat widget at the bottom right of this page.

## See also

[Data access and binding](/core-concepts/data-access-and-binding)

