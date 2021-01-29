# Elasticsearch

{% hint style="warning" %}
The following document assumes that you understand the [basics of connecting to databases on Appsmith](../core-concepts/connecting-to-databases/). If not, please go over them before reading further.
{% endhint %}

## Connection Settings

Appsmith needs the following parameters for connecting to an Elasticsearch endpoint:

{% hint style="success" %}
All required fields are suffixed with an asterisk \(\*\).
{% endhint %}

### **Connection**

You need to fill in the following parameters:

* **Host Address / Port\*:** Fill in the database host’s address and port. The host needs to be of the format `http(s)://your-es-url.com`

### **Authentication**

You need to fill in the following parameters:

* **Username\*:** Fill username required for authenticating connection requests to your database.
* **Password\*:** Fill password required for authenticating connection requests for the given username to the database.
* **Auhorization Header:** In case the username and password is not set, you can use a fixed value for the authorization header instead. This field is only considered if the previous two fields are empty.

## Querying Elasticsearch

The Elasticsearch plugin makes use of the extensive set of REST APIs supported by [Elasticsearch](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/rest-apis.html). The plugin supports both single and bulk operations.

### Creating a query

The plugin supports `GET`, `PUT`, `POST` and `DELETE` HTTP methods. Specify the URL that you would like to query in the `Path` field. If the path is expected to have a resquest body, add this information to the text box below it.

Queries can take inputs from widgets using javascript inside the query and referencing the widget property. Open `{{ }}` inside the query to write javascript and access other entities on the page using their names.

{% page-ref page="../core-concepts/connecting-to-databases/querying-a-database.md" %}

