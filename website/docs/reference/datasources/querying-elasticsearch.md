---
sidebar_position: 5
---

# Elasticsearch

This page describes how to connect to your Elasticsearch database and query it from your Appsmith app.

## Configuration

The Elasticsearch plugin requiresthe following information to establish a connection:

* **Host URL:** Provide the URL where the database is hosted. 
* **Port:** Provide the port on which to connect.
* **Username for Basic Auth / Password for Basic Auth:** Provide the login credentials for your Elasticsearch database.
* **Authorization Header:** Instead of the username/password fields, you can provide an **Authorization Header** to authenticate your queries. This field is only used when the **Username/Password for Basic Auth** fields are empty.

Once you've entered your connection details, click the **Test** button to check that they are working, and then click **Save**.

## Search documents

Queries run on top of indexed documents can be configured using the GET method, without a JSON body. The following search query scans through the `movies` index created previously to return documents that match the query string.

```
/movies/_search?q=Hayao%20Miyazaki
```

---

#### Example

> SCENARIO

Steps

## Retrieve a document

A single document can be accessed using its `id` within an index using a GET request that has the following path:

```
/movies/_doc/2
```

---

#### Example

> SCENARIO

Steps

## Create a document

As part of the Document API, you can create a single new document by using the POST URI `/{index}/_doc/{id}` with a JSON body that represents the document. For instance, the following request creates a document in the `movies` index with an `id` of 1.

```javascript
/movies/_doc/1
```

```json
//Body
{
    "title": "Castle in the Sky",
    "director": "Hayao Miyazaki",
    "producer": "Isao Takahata",
    "release_date": "1986",
    "rt_score": "95"
}
```

---

#### Example

> SCENARIO

Steps

## Delete a document

Deleting documents only requires a reference to the relevant `id` field that is sent across in a DELETE request. The request below returns the deleted resource if it exists.

```
/movies/_doc/5
```

---

#### Example

> SCENARIO

Steps

## Further reading

* [Queries](/core-concepts/data-access-and-binding/querying-a-database/)
* [Table widget](/reference/widgets/table)
* [Form widget](/reference/widgets/form)
