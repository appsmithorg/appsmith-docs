# Queries

The information you want to present in any application is typically spread over numerous tables in a datasource. A query can collect data from different tables/ documents and pull it together for display. Using a query, you can insert, update, or remove data from a datasource, bind the data to a widget, and more.

:::info
Appsmith uses Queries to collectively refer to APIs or Database queries that perform CRUD operations.
:::

To write and execute queries, you should understand the basics of [connecting to a Database](/core-concepts/connecting-to-data-sources/connecting-to-databases) or [Connecting to an API](/core-concepts/connecting-to-data-sources/authentication).  You can create queries from a datasource using the Appsmith query editor.


## Create a query

This section talks about creating a DB query in Appsmith. To learn about API queries, see [How to Create an API query](/core-concepts/connecting-to-data-sources/authentication/connect-to-apis).

Follow the below steps to create a database query in the query editor:

* Go to **Datasources → +** to create a **new query** or select an **existing datasource** to which you wish to add a query.

:::info
You can follow the steps detailed in [Datasources](/core-concepts/connecting-to-data-sources/connecting-to-databases#connecting-to-a-database) to add a new datasource.
:::

* Choose the connected datasource and click **+ New Query**. You can also choose to add a new query by navigating to **Explorer** >> Scroll down to **Queries/JS** >> Click plus (**+**) sign >> Select the name `<DATASOURCE_NAME> Query` (users query).

![Create a Query from QUERIES/JS Menu Item](/img/Core_Concepts__Data_Access_and_Binding__Setting_up_Query__Add_Query.png)

* The Appsmith query editor opens up when you create a new query or select an existing query. You can write the queries in the query editor and tweak the [query settings](/core-concepts/data-access-and-binding/querying-a-database/query-settings) from the settings tab.

![Appsmith Query Editor](/img/query_editor.png)

* The query is created with a default name. We recommend you rename it for readability and access. The query name helps access the query results. A query must have a **unique** and meaningful name that acts as an identifier. You can access the various properties of the query and its data using the query name.

:::info
[JavaScript keywords](https://www.w3schools.com/js/js\_reserved.asp) and [the window object methods and properties](https://www.w3schools.com/jsref/obj\_window.asp) aren't valid as query names.
:::

* Write your query in the syntax valid for your [database type](/core-concepts/connecting-to-data-sources/connecting-to-databases#native-databases).

Queries are automatically saved, so you never lose your work. These changes are reflected in your *published* application only after you deploy. You can access a query's result *only* from the page it's a part of. To use a query on another page, click the context menu next to the query name and clone it.

## Run a query

Click on the `Run` button or hit `cmd + enter` to execute a query. You'll see the results in the Response tab if the query succeeds.

 <VideoEmbed host="youtube" videoId="0xA7ChO7Rlk" title="Running a Query" caption="Running a Query"/>  

Alternatively, you can use the [run](/reference/appsmith-framework/query-object#run) function to execute a query anywhere in Appsmith.

All query results are stored in the [data](/reference/appsmith-framework/query-object#data) property of the [query object](/reference/appsmith-framework/query-object). It's immutable and can't be changed. You can access it using JavaScript, as shown in the code snippet below:

```javascript
{{ Query1.data }}
```

DB Queries fetch data in an array of objects where each object is a row, and each key in the object is a column.

## Debug errors

When a query fails, Appsmith commonly shows a notification stating: `UncaughtPromiseRejection: <query_name> failed to execute.`.

![](/img/as_error.png)

To see the error message returned by the datasource in response to your query, look for the failed query in the [debug console](/help-and-support/troubleshooting-guide/#using-the-linter-and-debugger), or access it in code with `<query_name>.data`.

<VideoEmbed host="youtube" videoId="wRyafclQt1c" title="Query Troubleshooting | Get Error message from datasource" caption="Use {{ <query>.data }} to see error messages"/>

## Use queries in applications

Once you have successfully run a Query, you can use it in your application to:

* [Display Data from a query](/core-concepts/data-access-and-binding/displaying-data-read) - Bind the query results to a widget to display the data.
* [Capture Data](/core-concepts/data-access-and-binding/capturing-data-write) - Capture the user input entered in a widget that can be referenced using JavaScript.
* Run multiple queries by separating the run statements with a `;`. Check out the sample app that shows [how to run multiple queries](https://app.appsmith.com/applications/61e4fd98eb0501052b9fc476/pages/62ab7a7e84b91337251afd40) on a button click.
* Pass parameters to a query in the run() function and access these parameters in the query. Check out the sample app that shows [how to pass parameters to the Query.run() function](https://app.appsmith.com/applications/61e4fd98eb0501052b9fc476/pages/628e64d47901344ba8d2a584).

## Troubleshooting
Do you need help with queries? Check out the [Query troubleshooting guide](/help-and-support/troubleshooting-guide/query-errors) for the most common errors or reach out on [Discord](https://discord.com/invite/rBTTVJp) to get support or ask questions on the [community forum](https://community.appsmith.com/).