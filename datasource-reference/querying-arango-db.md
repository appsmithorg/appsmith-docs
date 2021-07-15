# ArangoDB

{% hint style="warning" %}
The following document assumes that you understand the [basics of connecting to databases on Appsmith](../core-concepts/connecting-to-data-sources/connecting-to-databases/). If not, please go over them before reading further.
{% endhint %}

## Connection Settings

Appsmith needs the following parameters for connecting to a Arango database:

{% hint style="success" %}
All required fields are suffixed with an asterisk \(\*\).
{% endhint %}

### **Connection**

You need to fill in the following parameters:

* **Host Address\* / Port:** Fill in the database host’s address and port. If you don’t specify a port, Appsmith 
  will try to connect to port 8529.
* **Database Name\*:**  Fill in the name of the database that you want to connect to. This is your database’s name.

### **Authentication**

You need to fill in the following parameters:

* **Username\*:** Fill username required for authenticating connection requests to your database.
* **Password\*:** Fill password required for authenticating connection requests for the given username to the database.

### **SSL (Optional)**

The SSL Mode can be set to one of the following values:

* **`Default`**: Same as `Disabled`.
* **`Enabled`**:  Reject connection, if SSL is not available.
* **`Disabled`**: Connect without SSL, use a plain unencrypted connection.
  
## Querying ArangoDB

Arango databases can be queried using the [AQL syntax](https://www.arangodb.com/docs/stable/aql/). All AQL queries return an array of objects where each object is a row 
returned by the query and each property in the object is a column.

![](../.gitbook/assets/arango-query.gif)

## Using Queries in applications

Once you have successfully run a Query, you can use it in your application to

* [Display Data](../core-concepts/displaying-data-read/)
* [Capture Data](../core-concepts/capturing-data-write/)

