# MongoDB

{% hint style="warning" %}
The following document assumes that you understand the [basics of connecting to databases on Appsmith](../../core-concepts/connecting-to-databases/). If not, please go over them before reading further.
{% endhint %}

## Connection Settings

Appsmith needs the following parameters for connecting to a Mongo database:

{% hint style="success" %}
All required fields are suffixed with an asterisk \(\*\).
{% endhint %}

### **Connection**

You need to fill in the following parameters:

* **Connection Mode\*:** You must choose one of the following two modes:
  * **Read Only:** Choosing this mode gives Appsmith read-only permission on the database. This allows you to only fetch data from the database. 
  * **Read / Write:** Choosing this mode gives Appsmith both read and write permissions on the database. This allows you to execute all CRUD queries.
* **Connection Type\*:** You must choose one of the following connection types:
  * **Direct Connection**: Choose this connection type to connect directly to a mongo instance
  * **Replicate Set**: Choose this connection type to connect to a set of mongo instances.
* **Host Address / Port\*:** Fill in the database host’s address and port. If you don’t specify a port, Appsmith will try to connect to port 27017. You can specify multiple host addresses for a replicate set.
* **Default** **Database Name\*:** Fill in the name of the database that you want to connect to. This is your database’s name in your mongo server.

### **Authentication**

You need to fill in the following parameters:

* **Database Name:** Fill in the name of the database against which you want to authenticate. This is typically admin for most MongoDB instances.
* **Authentication Type\*:** Choose the authentication mechanism with which to connect to your database. This can be one of SCRAM-SHA-1, SCRAM-SHA-256, MONGO-CR
* **Username\*:** Fill username required for authenticating connection requests to your database.
* **Password\*:** Fill password required for authenticating connection requests for the given username to the database. 

### **SSL**

You need to fill in the following parameters:

* **Authentication Mechanism:** Choose the SSL method of authentication or select No SSL if none is required. 
* **CA Certificate:** Upload your CA certificate here.
* **PEM Certificate:** Upload your PEM certificate here.
* **PEM Passphrase:** Fill in your PEM passphrase here

## Querying Mongo

{% hint style="warning" %}
The mongo database command syntax is slightly different from the mongo collection methods you may be familiar with. [Read more](https://docs.mongodb.com/manual/reference/command/nav-crud/)
{% endhint %}

All mongo queries return an array of objects where each object is a mongo document and properties of the object are the keys of the document.

Appsmith provides template queries to help with the syntax

* [Insert Query](mongo-syntax.md#insert-query)
* [Find Query](mongo-syntax.md#find-query)
* [Update Query](mongo-syntax.md#update-query)
* [Delete Query](mongo-syntax.md#delete-query)

![](../../.gitbook/assets/mongo.gif)

## Taking Inputs from Widgets

Queries can take inputs from widgets using javascript inside the query and referencing the widget property. Open `{{ }}` inside the query to write javascript and access other entities on the page using their names.

{% hint style="info" %}
You may need to wrap your string mustache bindings in quotes to make your query a valid JSON
{% endhint %}

```javascript
{
  "find": "users",
  "filter": {
    "role": "{{statusDropdown.selectedOptionValue}}"
  },
  "limit": 10
}
```

{% page-ref page="../../core-concepts/connecting-to-databases/querying-a-database.md" %}

