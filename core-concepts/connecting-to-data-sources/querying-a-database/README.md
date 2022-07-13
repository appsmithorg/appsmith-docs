# Execute Queries

The information you want to present in any application is typically spread over numerous tables in a well-designed database. A query can collect data from different tables and pull it together for display. You can either request data from your database or act on the data, or both.&#x20;

{% hint style="info" %}
To write and execute queries, you should understand the basics of [connecting to a Database](../connecting-to-databases.md) or [Connecting to an API](connect-to-apis.md).
{% endhint %}

A query can add, update, or remove data from a database, conduct calculations, integrate data from other databases, and much more. You can create either static queries or dynamic queries in Appsmith.

{% hint style="info" %}
APIs, Database Queries, and Integrations that fetch / update data from third-party services are **collectively termed as Queries in Appsmith**
{% endhint %}

## **Static Query**

When you need to execute the same query statements for each input row but wish to alter the data in the query, create a static query. **** When using the static query, the preprocessor decides how to access the database in advance and executes that decision, so the user cannot run queries during runtime. Static SQL is usually employed when data is distributed uniformly.

The following static SQL query uses query parameters that bind to the Student\_ID and Class input fields:

```
SELECT * from users where status in ({{studentID.text}} , {{Class.text}})
```

## Dynamic Queries &#x20;

The method you **** use to write SQL queries so that they are dynamically created alongside application operations is known as "dynamic SQL." A dynamic query is automatically refreshed each time it is used.

You generate the query on the fly based on some parameters and then execute it. For example, `{{Query_to_Execute.text}}` where the [Text Widget](../../../widget-reference/text.md) **(Query\_to\_Execute)** has the query that will be executed, which could be generated on the fly based on some logic in the code.

Dynamic queries are required for various application types, such as those that show user's online status or applications that query a database where the data definitions of tables are constantly changing.

For example, if you want to select users based on the status selected on the application you can use a query as below:

```
SELECT * from users where status in = ANY ({{userStatus.selectedOptionValues}})s
```

{% hint style="info" %}
The sample query is for [PostgreSQL](../../../datasource-reference/querying-postgres.md), [MySQL](../../../datasource-reference/querying-mysql.md), or [MSSQL](../../../datasource-reference/querying-mssql.md) data sources.
{% endhint %}

You can create queries to fetch and update data from a datasource using the Appsmith query editor for each datasource type.&#x20;

### **Setting up a Query**

Go to the page that needs to run this query.

{% hint style="success" %}
Queries are **auto-saved**, so you never lose your work. These changes will be reflected in your **published** application only after you deploy.
{% endhint %}

1. Go to **Datasources → +**.
2. Choose the connected datasource and click **+** New Query
3. You will be taken to the query editor to configure the query.
4. Note that the query is created with a default name. It’s recommended that you rename it for readability and access.
5. Write your query in the syntax that is valid for your [database type](../connecting-to-databases.md#supported-databases).
6. APIs can be configured using a [REST interface](connect-to-apis.md)

{% hint style="warning" %}
A query and its results can be accessed from **only** the **page** it is a part of. To use a query on another page, click the context menu next to the query name and clone it.
{% endhint %}

### **Naming a Query**

A query must have a unique name that acts as an identifier. It is used to access the query results. In that sense, a name is like a variable in a programming language. You can access the various properties of the query and its data using the query name.

{% hint style="warning" %}
Note that [JavaScript keywords](https://www.w3schools.com/js/js\_reserved.asp) and [the window object methods and properties](https://www.w3schools.com/jsref/obj\_window.asp) are not valid as query names.
{% endhint %}

### **Running a Query**

Click on the Run button or hit `cmd + enter` to execute a query. If the query succeeds, a success message will pop-up on the screen in the top right corner, along with the results below the query.

All query results are stored in the data property of the query object. This object is immutable and cannot be changed. They can be accessed using javascript

```
{{ Query1.data }}
```

{% hint style="info" %}
**DB Queries** fetch data in the form of an array of objects where each object is a row, and each key in the object is a column.
{% endhint %}

All **API Queries** return the exact API response of the endpoint

To understand queries, read this [How to Use Prepared Statements](../../../how-to-guides/how-to-use-prepared-statements.md) guide.

## Using Queries in applications

Once you have successfully run a Query, you can use it in your application to

* [Display Data](../../displaying-data-read/)
* [Capture Data](../../capturing-data-write/)
