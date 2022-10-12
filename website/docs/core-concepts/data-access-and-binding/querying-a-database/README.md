# Queries

The information you want to present in any application is typically spread over numerous tables in a well-designed database. A query can collect data from different tables/ documents and pull it together for display. You can either request data from your database or manipulate the data, or both.

:::info
To write and execute queries, you should understand the basics of [connecting to a Database](../../connecting-to-data-sources/connecting-to-databases.md) or [Connecting to an API](../../connecting-to-data-sources/authentication/connect-to-apis.md).
:::

A query can insert, update, or remove data from a database, conduct calculations, integrate data from other databases, and much more.

:::info
**APIs**, **Database** **Queries**, and **Integrations** to perform `CRUD` operations on data are collectively termed **Queries** in **Appsmith**.
:::

You can create queries to manipulate data from a datasource using the Appsmith query editor.

:::info
By default, the `prepared statement` is enabled for all queries. Prepared statements provide a secure way of executing your queries. You can read  [How to Use Prepared Statements](../../../learning-and-resources/how-to-guides/how-to-use-prepared-statements.md) for efficient and secure data transactions.
:::

### **Setting up a Query**

Go to the page where you wish to run the query. Follow the below steps to set up a query using a query editor:

:::info
Queries are **auto-saved**, so you never lose your work. These changes will be reflected in your **published** application only after you deploy.
:::

 <figure>
 <object data="https://www.youtube.com/embed/N6zRxIVSGfk?autoplay=0" width='860px' height='515px'></object>
 <figcaption align="center"><i>Setting up a Query</i></figcaption>
</figure> 


* Go to **Datasources → +** to create a **new query** or select an **existing datasource** to which you wish to add a query.

:::info
You can follow the steps detailed in [Datasources to add a new datasource](../../connecting-to-data-sources/connecting-to-databases.md#connecting-to-a-database).
:::

* Choose the connected datasource and click **+ New Query.** You will be taken to the query editor to configure the query. You can also choose to add a new query by navigating to **Explorer** >> Scroll down to **Queries/JS** >> Click plus (**+**) sign >> Select the **name** `<DATASOURCE_NAME> Query` (users query)

![Create a Query from QUERIES/JS Menu Item](</img/Core_Concepts__Data_Access_and_Binding__Setting_up_Query__Add_Query.png>)

:::info
You can configure your API(s) using a [REST interface](../../connecting-to-data-sources/authentication/connect-to-apis.md).
:::

:::tip
The query is created with a **default name**. It’s **recommended** that you **rename** it for **readability** and **access**.
:::

* Write your query in the syntax that is valid for your [database type](../../connecting-to-data-sources/connecting-to-databases.md#supported-databases).
* Bind your query to the widget and carry out data manipulations.

:::caution
A query and its results can be accessed from **only** the **page** it is a part of. To use a query on another page, click the context menu next to the query name and clone it.
:::

### **Naming a Query**

A query must have a **unique** and **meaningful name** that acts as an **identifier**. It is used to access the query results. In that sense, a name is like a variable in a programming language. You can access the various properties of the query and its data using the **query name**.

:::caution
Note that [JavaScript keywords](https://www.w3schools.com/js/js\_reserved.asp) and [the window object methods and properties](https://www.w3schools.com/jsref/obj\_window.asp) are not valid as query names.
:::

### **Running a Query**

Click on the `Run` button or hit `cmd + enter` to execute a query. You'll see the results in the Response tab if the query succeeds.

 <figure>
 <object data="https://www.youtube.com/embed/0xA7ChO7Rlk?autoplay=0" width='860px' height='515px'></object>
 <figcaption align="center"><i>Running a Query</i></figcaption>
</figure>  


All query results are stored in the [data](../../../reference/appsmith-framework/query-object.md#data) property of the [query object](../../../reference/appsmith-framework/query-object.md). It is immutable and cannot be changed. You can access it using JavaScript, as shown in the code snippet below:

```javascript
{{ Query1.data }}
```

:::info
**DB Queries** fetch data in the form of an array of objects where each **object** is a **row**, and each **key** in the **object** is a **column**.
:::

All **API Queries** return the exact API response of the endpoint.

## Using Queries in applications

Once you have successfully run a Query, you can use it in your application to

* [Display Data](../displaying-data-read/)
* [Capture Data](../capturing-data-write/)
