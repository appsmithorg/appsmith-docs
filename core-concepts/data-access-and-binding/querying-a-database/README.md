# Queries

You can create queries to fetch and update data from a [datasource](../../../reference/datasources/) using the Appsmith query editor for each datasource type. For writing queries, it's assumed that you have already connected to a [Database](../../connecting-to-data-sources/connecting-to-databases.md) or an [API](../../connecting-to-data-sources/authentication/).

{% hint style="info" %}
[APIs](../../connecting-to-data-sources/authentication/), [Database](../../connecting-to-data-sources/connecting-to-databases.md) Queries, and [Integrations](../../../learning-and-resources/integrations.md) that fetch / update data from third-party services are **collectively** termed **Queries** in Appsmith**.**
{% endhint %}

## **Setting up a Query**

Navigate to **Explorer** >> Scroll down to **Queries/JS**&#x20;

* Click the plus sign **(+)** next to **Queries/JS**
* Choose the connected datasource
* You will be taken to the query editor
* Write your query in the syntax that is valid for your [database type](../../connecting-to-data-sources/connecting-to-databases.md#supported-databases).
* APIs can be configured using a [REST interface](../../connecting-to-data-sources/authentication/connect-to-apis.md)

{% hint style="success" %}
Queries are auto-saved so you never lose your work. These changes will be reflected in your published application only after you deploy.
{% endhint %}

### **Naming a Query**

A query must have a unique name that acts as an identifier. It is used to access the query results. In that sense, a name is like a variable in a programming language.&#x20;

{% hint style="info" %}
A query is created with a **default name**. It’s **recommended** that you provide a **meaningful name** for **readability** and **access**.
{% endhint %}

You can access the various properties of the query and its data using the query name.

{% hint style="warning" %}
Note that [JavaScript keywords](https://www.w3schools.com/js/js\_reserved.asp) and [the window object methods and properties](https://www.w3schools.com/jsref/obj\_window.asp) are not valid as query names.
{% endhint %}

### **Running a Query**

Click on the Run button or hit `cmd + enter` to execute a query. If the query execution succeeds, a success message will pop up on the screen in the top right corner along with the results returned by the query in the response tab.

{% hint style="warning" %}
A query and its results can be accessed from only the page that it is a part of. To use a query on another page, click the context menu next to the query name and clone it.
{% endhint %}

All query results are stored in the data property of the query object. This object is immutable and cannot be changed. They can be accessed using javascript

```
{{ Query1.data }}
```

**Queries** that fetch rows of data, return an array of objects where each object is a row and each key in the object is a column.

All **API Queries** return the exact API response of the endpoint

## Using Queries in applications

Once you have successfully run a Query, you can use it in your application to

* [Display Data](../displaying-data-read/)
* [Capture Data](../capturing-data-write/)
