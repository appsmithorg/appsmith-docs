# Queries

The information you want to present in any application is typically spread over numerous tables in a well-designed database. A query can collect data from different tables/ documents and pull it together for display. You can either request data from your database or manipulate the data, or both.

:::info
To write and execute queries, you should understand the basics of [connecting to a Database](/core-concepts/connecting-to-data-sources/connecting-to-databases) or [Connecting to an API](/core-concepts/connecting-to-data-sources/authentication/connect-to-apis).
:::

A query can insert, update, or remove data from a database, conduct calculations, integrate data from other databases, and much more.

:::info
Appsmith uses the term **Queries** to collectively refer to **APIs**, **Database queries**, and **Integrations** that perform `CRUD` operations.
:::

You can create queries to manipulate data from a datasource using the Appsmith query editor.

:::info
By default, the `prepared statement` is enabled for all queries. Prepared statements provide a secure way of executing your queries. You can read  [How to Use Prepared Statements](/learning-and-resources/how-to-guides/how-to-use-prepared-statements) for efficient and secure data transactions.
:::

### Setting up a query

Go to the page where you wish to run the query. Follow the below steps to set up a query using a query editor:

:::info
Queries are **automatically saved**, so you never lose your work. These changes are reflected in your **published** application only after you deploy.
:::

 <VideoEmbed host="youtube" videoId="N6zRxIVSGfk" title="Setting up a Query" caption="Setting up a Query"/> 


* Go to **Datasources → +** to create a **new query** or select an **existing datasource** to which you wish to add a query.

:::info
You can follow the steps detailed in [Datasources to add a new datasource](/core-concepts/connecting-to-data-sources/connecting-to-databases#connecting-to-a-database).
:::

* Choose the connected datasource and click **+ New Query.** You'll be taken to the query editor to configure the query. You can also choose to add a new query by navigating to **Explorer** >> Scroll down to **Queries/JS** >> Click plus (**+**) sign >> Select the **name** `<DATASOURCE_NAME> Query` (users query)

![Create a Query from QUERIES/JS Menu Item](</img/Core_Concepts__Data_Access_and_Binding__Setting_up_Query__Add_Query.png>)

:::info
You can configure your API(s) using a [REST interface](/core-concepts/connecting-to-data-sources/authentication/connect-to-apis).
:::

:::tip
The query is created with a **default name**. It’s **recommended** that you **rename** it for **readability** and **access**.
:::

* Write your query in the syntax that's valid for your [database type](/core-concepts/connecting-to-data-sources/connecting-to-databases#supported-databases).
* Bind your query to the widget and carry out data manipulations.

:::note
A query and its results can be accessed from **only** the **page** it's a part of. To use a query on another page, click the context menu next to the query name and clone it.
:::

### Naming a query

A query must have a **unique** and **meaningful name** that acts as an **identifier**. it's used to access the query results. In that sense, a name is like a variable in a programming language. You can access the various properties of the query and its data using the **query name**.

:::note
[JavaScript keywords](https://www.w3schools.com/js/js\_reserved.asp) and [the window object methods and properties](https://www.w3schools.com/jsref/obj\_window.asp) aren't valid as query names.
:::

### Running a query

Click on the `Run` button or hit `cmd + enter` to execute a query. You'll see the results in the Response tab if the query succeeds.

 <VideoEmbed host="youtube" videoId="0xA7ChO7Rlk" title="Running a Query" caption="Running a Query"/>  


All query results are stored in the [data](/reference/appsmith-framework/query-object#data) property of the [query object](/reference/appsmith-framework/query-object). it's immutable and can't be changed. You can access it using JavaScript, as shown in the code snippet below:

```javascript
{{ Query1.data }}
```

:::info
**DB Queries** fetch data in the form of an array of objects where each **object** is a **row**, and each **key** in the **object** is a **column**.
:::

All **API Queries** return the exact API response of the endpoint.

## Using queries in applications

Once you have successfully run a Query, you can use it in your application to

* [Display Data](/core-concepts/data-access-and-binding/displaying-data-read)
* [Capture Data](/core-concepts/data-access-and-binding/capturing-data-write)

## Debugging queries

When a query fails, Appsmith commonly shows a notification stating something like: `UncaughtPromiseRejection: <query_name> failed to execute.`.

![](/img/as_error.png)

To see the error message returned by the datasource in response to your query, look for the failed query in the [debug console](/help-and-support/troubleshooting-guide/#using-the-linter-and-debugger), or access it in code with `<query_name>.data`.

<VideoEmbed host="youtube" videoId="wRyafclQt1c" title="Query Troubleshooting | Get Error message from datasource" caption="Use {{ <query>.data }} to see error messages"/>

:::info
Are you having trouble? Check out the [Query troubleshooting guide](/help-and-support/troubleshooting-guide/query-errors) or reach out on[ Discord](https://discord.com/invite/rBTTVJp) to get support or ask questions on the [community forum](https://community.appsmith.com/).
:::