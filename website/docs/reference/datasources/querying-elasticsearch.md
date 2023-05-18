---
sidebar_position: 5
description: Connect Appsmith to your Elasticsearch data and create queries.
---

# Elasticsearch

This page describes how to connect to your Elasticsearch database and query it from your Appsmith app.

## Connect Elasticsearch

:::caution 
If you are a self-hosted user, you must whitelist the IP address of the Appsmith deployment `18.223.74.85` and `3.131.104.27` on your database instance or VPC before connecting to a database. For instructions on IP Filtering in Elasticsearch, see the [Elasticsearch docs](https://www.elastic.co/guide/en/elasticsearch/reference/current/ip-filtering.html).
:::

### Connection parameters

The following is a reference guide that provides a description of the parameters for connecting to Elasticsearch.

<figure>
  <img src="/img/elasticsearch-datasource-config.png" style= {{width:"100%", height:"auto"}} alt="Connect to Elasticsearch"/>
  <figcaption align = "center"><i>Connect to Elasticsearch</i></figcaption>
</figure>

<dl>
  <dt><b>Host URL</b></dt>
  <dd>The network location where your Elasticsearch data is hosted. This can be a domain name or an IP address. To connect to a local database, see <a href="/learning-and-resources/how-to-guides/how-to-work-with-local-apis-on-appsmith"><b>Connect Local Database</b></a> for directions. </dd><br />

  <dt><b>Port</b></dt>
  <dd>The port number to connect to on the server. </dd><br />

  <dt><b>Username/Password for Basic Auth</b></dt>
  <dd>The account credentials used to log in to Elasticsearch.</dd><br />

  <dt><b>Authorization Header</b></dt>
  <dd>Instead of the username/password fields, you can provide an <b>Authorization Header</b> to authenticate your queries. This field is only used when the <b>Username/Password for Basic Auth</b> fields are empty.</dd><br />
</dl>

## Query Elasticsearch

The following section provides examples of creating basic CRUD queries to Elasticsearch.

:::info
For details on building more complex queries, see the [Elasticsearch Document API documentation](https://www.elastic.co/guide/en/elasticsearch/reference/current/docs.html).
:::

<dl>
  <dt><b>Method</b></dt>
  <dd>The HTTP method to use for your query.</dd><br />
  <dd><i>Options:</i>
    <ul>
      <li><b>GET:</b> Method used for requesting and fetching data.</li>
      <li><b>POST:</b> Method used for creating or updating records.</li>
      <li><b>PUT:</b> Method used for creating or updating records.</li>
      <li><b>DELETE:</b> Method used for deleting records.</li>
    </ul>
  </dd>  

  <dt><b>Path</b></dt>
  <dd>The endpoint to which your query is sent. This usually is made up of the index name and the name of an operation. For example: <code>/users/_search</code> is the endpoint used for searching the <code>users</code> index.</dd><br />

  <dt><b>Body</b></dt>
  <dd>The body content of your query.</dd><br />
</dl>

### Search documents

Queries run on top of indexed documents can be configured using the `GET` method. 

```json
// Path
/users/_search
```

```javascript
// Body
{
  "query": {
    "match": {
      "user.name": {{ UsersTable.searchText }}
    }
  }
}
```

The example above searches the `users` index for a `name` matching your user input from a Table widget called `UsersTable`.

### Create a document

You can create a single new document using the `POST` method, with a JSON body that represents the document values; an `id` is automatically generated.

```json
// Path
/users/_doc/
```

```javascript
//Body
{
    "name": {{ NewUserForm.data.Name }},
    "email": {{ NewUserForm.data.Email }},
    "gender": {{ NewUserForm.data.Gender }},
}
```

Above, user input is collected with a Form widget called `NewUserForm`.

#### Create multiple documents

To create a batch of documents at once, use the `POST` method with the `/_bulk` endpoint:

```json
// Path
/_bulk/
```

In the body, add a line of metadata followed by a line of record data:

```javascript
//Body
{"index": {"_index": "users"}}
{"name":"Reyna", "email":"sunil@example.com", "gender":"female"}
{"index": {"_index": "users"}}
{"name":"Aly", "email":"aly@example.com", "gender":"female"}
{"index": {"_index": "users"}}
{"name":"Sunil", "email":"sunil@example.com", "gender":"male"}
```

### Update a document

A single document can be updated using its `id` within an index using a `POST` request. 

```javascript
// Path
/users/_update/{{ UsersTable.selectedRow.id }}
```

```javascript
// Body
{
  "doc": {
    "name": {{ UpdateUserForm.data.Name }}
  }
}
```

Above, the record with its `id` is selected from a Table widget called `UsersTable` and updated with input from a Form widget.

This performs a partial update, where the properties you supply are added to the document; you don't need to add ones that have not changed.

### Delete a document

A single document can be deleted using its `id` within an index using the `DELETE` method.

```javascript
// Path
/users/_doc/{{ UsersTable.selectedRow.id }}
```

Above, the record with its `id` is selected from a Table widget called `UsersTable`.

## See also

[Data access and binding](/core-concepts/data-access-and-binding)
