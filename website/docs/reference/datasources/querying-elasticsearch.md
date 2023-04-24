---
sidebar_position: 5
---

# Elasticsearch

:::note
The following document assumes that you understand the [basics of connecting to databases on Appsmith](/core-concepts/connecting-to-data-sources/connecting-to-databases.md#connecting-to-a-database). If not, please go over them before reading further.
:::

## Connection settings

The Elasticsearch plugin requires two pieces of information to establish a connection.

![Click to expand](/img/elasticsearch-datasource-form.png)

* **Host Address / Port\*:** Fill in the elastic search instance's address and port. This field supports multiple endpoints if that be the need.
* **Username / Password:** The authentication detail for the elastic search instance. The password for your data source is encrypted when it is stored within the Appsmith database.
* **Authorization Header:** In case you choose to connect to your instance with another mechanism, you can use the `Authorization Header` field. This field is only considered when the `Username` and `Password` fields are empty.

After filling up the fields as described, click the "Test" button to verify the configuration and click **Save**.

## Querying Elasticsearch

Elasticsearch supports a rich set of [REST APIs](https://www.elastic.co/guide/en/elasticsearch/reference/current/rest-apis.html) that can be accessed using the Elasticsearch plugin in Appsmith. The plugin itself supports all requests that would use the `GET`, `POST`, `PUT`, or `DELETE` HTTP methods. These APIs support single as well as bulk queries, some of which are demonstrated below. Do note the leading `/` that needs to be added for each of these requests.

:::tip
While Elasticsearch has a comprehensive reference list for its APIs, please make sure that you refer to specific documentation by your provider for requests that may or may not be applicable.
:::

### Creating a single document

As part of the Document API, you can create a single new document by using the POST URI `/{index}/_doc/{id}` with a JSON body that represents the document. For instance, the following request creates a document in the `movies` index with an `id` of 1.

```
Path: /movies/_doc/1
Body:
{
    "title": "Castle in the Sky",
    "director": "Hayao Miyazaki",
    "producer": "Isao Takahata",
    "release_date": "1986",
    "rt_score": "95"
}
```

### Creating multiple documents

Bulk additions can be done using the POST endpoint `/_bulk`, with a request body that specifies the index for each document separately as shown below. The following request adds 4 more documents in addition to the single indexed document that was added in the previous request.

```
Path: /_bulk
Body:
{"index": {"_index": "movies", "_id": "2"}}
{"title":"Grave of the Fireflies", "director":"Isao Takahata", "producer":"Toru Hara", "release_date":"1988", "rt_score":"97"}
{"index": {"_index": "movies", "_id": "3"}}
{"title": "My Neighbor Totoro", "director": "Hayao Miyazaki", "producer": "Hayao Miyazaki", "release_date": "1988", "rt_score": "93"}
{"index": {"_index": "movies", "_id": "4"}}
{"title": "Kiki's Delivery Service", "director": "Hayao Miyazaki", "producer": "Hayao Miyazaki", "release_date": "1989", "rt_score": "96"}
{"index": {"_index": "movies", "_id": "5"}}
{"title": "Only Yesterday", "director": "Isao Takahata", "producer": "Toshio Suzuki", "release_date": "1991", "rt_score": "100"}
```

### Retrieving a single document

A single document can be accessed using its `id` within an index using a GET request that has the following path:

```
Path: /movies/_doc/2
```

### Searching through documents

Queries run on top of indexed documents can be configured using the GET method, without a JSON body. The following search query scans through the `movies` index created previously to return documents that match the query string.

```
Path: /movies/_search?q=Hayao%20Miyazaki
```

### Deleting a document

Deleting documents only requires a reference to the relevant `id` field that is sent across in a DELETE request. The request below returns the deleted resource if it exists.

```
Path: /movies/_doc/5
```

## Using queries in applications

Once you have successfully run a Query, you can use it in your application to

* [Display Data](/core-concepts/data-access-and-binding/displaying-data-read/)
* [Capture Data](/core-concepts/data-access-and-binding/capturing-data-write/)
