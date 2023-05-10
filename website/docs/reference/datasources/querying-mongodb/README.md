---
sidebar_position: 9
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# MongoDB

This page gives information about how to connect Appsmith to a MongoDB database and to read and write data in your applications.

<VideoEmbed host="youtube" videoId="F_By1KmJKrk" title="Build a MongoDB Panel" caption="Build a MongoDB Panel"/>

## Connect MongoDB

:::caution 
If you are a self-hosted user, you may need to whitelist the IP address of the Appsmith deployment `18.223.74.85` and `3.131.104.27` on your database instance or VPC before connecting to a database. See [**How to whitelist IP addresses on MongoDB Atlas**](https://studio3t.com/knowledge-base/articles/mongodb-atlas-login-ip-whitelisting/#how-to-whitelist-ip-addresses-on-mongodb-atlas) for more details.
:::

The following section is a reference guide that provides a complete description of all the parameters provided to connect to a MongoDB database.

### Connection parameters

<dl>
  <dt><b>Use Mongo Connection String URI</b></dt>
  <dd><i>Options:</i>
    <ul>
     <li><b>Yes:</b> Connect to MongoDB database using the Connection String URI format</li>
     <li><b>No:</b> Connect to MongoDB database by configuring multiple fields.</li>
    </ul>
  </dd>  
</dl>

---

The following section lists the parameters to connect using the *Connection String URI* format.

<dl>
  <dt><b>Connection String URI</b></dt>
  <dd>A MongoDB connection string URI (Uniform Resource Identifier) is a standardized way to specify the location and other details of a MongoDB database. This field is visible only if you select <b>Yes</b> in the <b>Use Mongo Connection String URI</b> list. See <a href="https://www.mongodb.com/docs/manual/reference/connection-string/#connection-string-uri-format"><b>Connection String URI Format</b></a> for details on how to specify the MongoDB connection string.</dd><br />
  <dd><i>Example:</i></dd>
  <dd><pre><code>
   mongodb+srv://mockdb-admin:****@mockdb.kce5o.mongodb.net/movies?retryWrites=true&w=majority&authSource=admin
  </code></pre></dd>
</dl>

<figure>
   <img src="/img/configure-mongodb-using-connection-string-uri.png" style= {{width:"100%", height:"auto"}} alt="Configure MongoDB using Connection String URI"/>
   <figcaption align = "center"><i>Connect MongoDB using Connection String URI</i></figcaption>
</figure>

---
 
The following section lists the parameters to connect by configuring multiple fields.

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
  <dd>The port number on which MongoDB listens for incoming connections. Appsmith connects to port <code>27017</code> by default if you don't specify one. 
  </dd><br />

  <dt><b>Default Database Name</b></dt>
  <dd>Specifies the default authentication database to use when authenticating a user. In MongoDB, when a user is authenticated, the authentication process checks the user's credentials against a specific database. By default, this database is <code>admin</code>, but you can specify a different database by using the <b>Default Database Name</b> parameter. 
  </dd><br />

  <dt><b>Database Name</b></dt>
  <dd>Specify the database name associated with the user's credentials. If <b>Database Name</b> is unspecified, it
 defaults to the name specified in the <b>Default Database Name</b> field. If <b>Default Database Name</b> is unspecified, then <b>Database Name</b> defaults to <code>admin</code>.
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

<figure>
  <img src="/img/configure-mongodb-using-connection-mode.png" style= {{width:"100%", height:"auto"}} alt="Connect MongoDB using multiple connection fields"/>
  <figcaption align = "center"><i>Connect MongoDB using multiple connection fields</i></figcaption>
 </figure>

## Query MongoDB

The following section is a reference guide that provides a complete description of all the read and write commands with their parameters to create MongoDB queries.

:::info
 See [**Query and Write Operation Commands**](https://docs.mongodb.com/manual/reference/command/nav-crud/) for the MongoDB database commands.
:::

<figure>
  <img src="/img/query-mongo-ss.png" style= {{width:"100%", height:"auto"}} alt="Create MongoDB queries"/>
  <figcaption align = "center"><i>Create MongoDB queries</i></figcaption>
</figure>



### Find Documents

This command fetches documents from a collection. The following section lists all the fields available for the **Find Documents** command.

<dl>
  <dt><b>Collection</b></dt>
  <dd>The name of the target collection from which you want to retrieve documents.
  </dd><br />

  <dt><b>Query</b></dt>
  <dd>Specifies the filters for the documents you want to retrieve.</dd><br/>

  <dd><i>Example:</i></dd>
  <dd><pre>{`{ 
  rating: { $gte: 4 },
  cuisine: {{cuisineList.selectedOptionValue}}
}`}</pre></dd>
  <dd>In the above example, the query filters documents from a restaurant collection where the rating field is greater than 4 and the cuisine matches the one selected in the Select widget <code>cusineList</code>.</dd><br />

  <dt><b>Sort</b></dt>
  <dd>Specifies the order in which the documents should be returned, based on one or more fields. 
  </dd><br/>
  <dd><i>Example:</i></dd>
  <dd><pre>{`{ name: 1 }
`}</pre></dd>
  <dd>In the above example, the query sorts the results by the <code>name</code> field in ascending order.</dd><br />

  <dt><b>Projection</b></dt>
  <dd>Specifies which fields to include in the returned documents.</dd><br/>
  <dd><i>Example:</i></dd>
  <dd><pre>{`{ name: 1, rating: 1, address: 1 }
`}</pre></dd>
  <dd>In the above example, the query returns only returns the <code>name</code>, <code>rating</code>, and <code>address</code> fields in the matching documents.</dd><br />

  <dt><b>Limit</b></dt>
  <dd>Specifies the maximum number of documents to return. The default value is 10. If this field isn't specified, the query returns 10 documents.
  </dd><br />
  <dd><i>Example:</i></dd>
  <dd><pre>{`{{tableItems.pageSize}}
`}</pre></dd>
  <dd>In the above example, <code>tableItems</code> is the name of the Table widget where you display the results from the query. The query limits the results based on the table's pageSize property.</dd><br />

  <dt><b>Skip</b></dt>
  <dd>This field specifies the number of documents to skip before returning results. </dd><br />
  <dd><i>Example:</i></dd>
  <dd><pre>{`{{tableItems.pageOffset}}
`}</pre></dd>
  <dd>In the above examples of **Limit** and **Skip** fields, the queries use <a href="/reference/widgets/table#server-side-pagination"><b>server-side pagination</b></a> to limit the number of query results returned by the server and fetch additional results when the user moves to the next page in the table. You can fork this <a href="https://app.appsmith.com/applications/623cca594d9aea1b062b33c6/pages/623cca594d9aea1b062b33cd"><b>Sample App</b></a> to see how to implement server-side pagination on the Table widget.</dd>
</dl>

### Insert Documents

This command inserts one or more documents and returns a document containing the status of all inserts. The following section lists all the fields available for the **Insert Documents** command.


<dl>
  <dt><b>Collection</b></dt>
  <dd>The name of the target collection where you want to insert the documents.
  </dd><br />

  <dt><b>Documents</b></dt>
  <dd>Specifies an array of one or more documents you want to insert into the collection.</dd><br />
  <dd><i>Example:</i></dd>
  <dd><pre>{`[
  { 
    "_id": {{NewMovieForm.data.idInput}}, 
    "name": {{NewMovieForm.data.nameInput}}, 
    "rating": {{NewMovieForm.data.ratingSelect}}
  }
]`}</pre></dd>
  <dd>In the above example, the query inserts a new movie using the data entered in the Form widget.</dd><br />
</dl>

### Update Documents

This command modifies the documents in a collection based on a specified set of filters. The following section lists all the fields available for the **Update Documents** command. 

<dl>
  <dt><b>Collection</b></dt>
  <dd>The name of the target collection where you want to update documents.
  </dd><br />

  <dt><b>Query</b></dt>
  <dd>Specifies the filters for the documents you want to update.</dd><br />
  <dd><i>Example:</i></dd>
  <dd><pre>{`{ 
  "_id": {{tableItems.selectedRow.id}} 
}`}</pre></dd>
  <dd>In the above example, the query filters the record where the <code>_id</code> field is equal to the id of the row selected on the Table widget <code>tableItems</code>.</dd><br />

  <dt><b>Update</b></dt>
  <dd>Specifies the modifications you want to make to the selected documents. 
  </dd><br />
  <dd><i>Example:</i></dd>
  <dd><pre>{`{ 
  $set: {
    "name":  {{tableItems.updatedRow.name}},
    "rating": {{tableItems.updatedRow.rating}}
  }
}`}</pre></dd>
  <dd>In the above example, the query updates the <code>name</code> and <code>rating</code> fields with the values updated in the table cells.</dd><br />

  <dt><b>Limit</b></dt>
  <dd>Specifies whether to delete single or multiple documents</dd><br />
  <dd><i>Options:</i>
    <ul>
     <li><b>Single Document:</b> Limits the update to one document that meets the query criteria.</li>
     <li><b>All Matching Documents:</b> Updates the fields in all documents that meet the query criteria.</li>
    </ul>
  </dd>  
</dl>


### Delete Documents

This command removes one or more documents from the collection based on specified filters. The following section lists all the fields available for the **Delete Documents** command.

<dl>
  <dt><b>Collection</b></dt>
  <dd>The name of the target collection where you want to delete documents.
  </dd><br />

  <dt><b>Query</b></dt>
  <dd>Specifies the criteria that match the documents to delete.</dd><br />
  <dd><i>Example:</i></dd>
  <dd><pre>{`{ 
  "rating": {{selectRating.selectedOptionValue}} 
}`}</pre></dd>
  <dd>In the above example, the query deletes all the documents where the <code>rating</code> field contains the same value as the one selected in the Select widget named <code>selectRating</code>.</dd><br />

  <dt><b>Limit</b></dt>
  <dd>Specifies whether to delete single or multiple documents</dd><br />
  <dd><i>Options:</i>
    <ul>
     <li><b>Single Document:</b> Limits the update to one document that meets the query criteria.</li>
     <li><b>All Matching Documents:</b> Updates the fields in all documents that meet the query criteria.</li>
    </ul>
  </dd>  
</dl>

### Count

This command counts the number of documents in a collection that match a specified set of criteria. The following section lists all the fields available for the **Count** command.

<dl>
  <dt><b>Collection</b></dt>
  <dd>The name of the target collection where you want to count the documents.
  </dd><br />

  <dt><b>Query</b></dt>
  <dd>This field specifies the criteria for selecting the documents to count.</dd><br />
  <dd><i>Example:</i></dd>
  <dd><pre>{`{ 
  "release_dt": { $gte: {{releaseDate.formattedDate}} 
}`}</pre></dd>
  <dd>In the above example, the query counts the documents in a <code>movies</code> collection where the release date is greater than the date picked in the Datepicker widget <code>releaseDate</code>.</dd>
</dl>

### Distinct

This command finds the unique or distinct values for a specified field across a single collection. The following section lists all the fields available for the **Distinct** command.

<dl>
  <dt><b>Collection</b></dt>
  <dd>Specifies the name of the target collection to query for distinct values.
  </dd><br />

  <dt><b>Query</b></dt>
  <dd>Specifies the documents from which to retrieve the distinct values.</dd><br />
  <dd><i>Example:</i></dd>
  <dd><pre>{`{ 
  "rating": {{selectRating.selectedOptionValue}} 
}`}</pre></dd>
  <dd>In the above example, the query retrieves distinct values from the documents where the <code>rating</code> field contains the same value as the one selected in the Select widget named <code>selectRating</code>.</dd><br />

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
  <dd>An array of aggregation pipeline stages that process and transform the document stream as part of the aggregation pipeline. </dd><br />
  <dd><i>Example:</i></dd>
  <dd><pre>{`{ 
  [
    { $project: { tags: 1 } },
    { $unwind: "$tags" },
    { $group: { _id: "$tags", count: { $sum : 1 } } }
  ] 
}`}</pre></dd>
  <dd>The preceding example performs an aggregate operation on the <code>articles</code> collection to calculate the count of each distinct element in the <code>tags</code> array that appears in the collection.</dd><br />

  <dt><b>Limit</b></dt>
  <dd>Specifies the maximum number of documents to return. The default value is 10. If this field isn't specified, the query returns 10 documents.
  </dd>
</dl>


### Raw

This command allows you to write queries using the MongoDB database command syntax. See [Raw Query Commands](/reference/datasources/querying-mongodb/mongo-syntax) for more information. 

## Troubleshooting

[Mongo query failed to execute](/help-and-support/troubleshooting-guide/action-errors#configuration-error)<br />
[Missing default database name](/help-and-support/troubleshooting-guide/query-errors#mongodb-name-can-not-be-null)

If you experience difficulties, contact the support team using the chat widget at the bottom right of this page.

## See also

[Data access and binding](/core-concepts/data-access-and-binding)

