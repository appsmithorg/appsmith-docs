# Execute Queries

{% hint style="info" %}
APIs, Database Queries and Integrations that fetch / update data from third-party services are **collectively termed as Queries in Appsmith**


You can create queries to fetch and update data from a datasource using the Appsmith query editor for each datasource type. This article assumes you have already connected to a database or API  
[Connect to a Database](../connecting-to-databases.md)  
[Connect to an API](connect-to-apis.md)

## **Setting up a Query**

Go to the page that needs to run this query.

1. Go to **Datasources → +**.
2. Choose the connected datasource and click +New Query
3. You will be taken to the query editor to configure the query.
4. Note that the query is created with a default name. It’s recommended that you rename it for readability and access.
5. Write your query in the syntax that is valid for your [database type](../connecting-to-databases.md#supported-databases).
6. APIs can be configured using a [REST interface](connect-to-apis.md)

> Queries are auto-saved so you never lose your work. These changes will be reflected in your published application only after you deploy.


{% hint style="warning" %}
A query and its results can be accessed from only the page that it is a part of. To use a query on another page, click the context menu next to the query name and clone it.


### **Naming a Query**

A query must have a unique name that acts as an identifier. It is used to access the query results. In that sense, a name is like a variable in a programming language. You can access the various properties of the query and it's data using the query name.

### **Running a Query**

Click on the Run button or hit `cmd + enter` to execute a query. If the query execution succeeds, a success message will pop up on the screen in the top right corner along with the results below the query.

All query results are stored in the data property of the query object. This object is immutable and cannot be changed. They can be accessed using javascript 

```text
{{ Query1.data }}
```

**DB Queries** that fetch rows of data, return an array of objects where each object is a row and each key in the object is a column.

All **API Queries** return the exact API response of the endpoint

## Using Queries in applications

Once you have successfully run a Query, you can use it in your application to

* [Display Data](../../displaying-data-read/)
* [Capture Data](../../capturing-data-write/)

