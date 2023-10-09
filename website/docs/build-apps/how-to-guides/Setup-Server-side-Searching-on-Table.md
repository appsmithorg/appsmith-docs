---
description: This page shows you how to set up server-side filtering on the Table widget, which allows you to refine query results based on specific search terms, without relying on the client-side. 
---
# Setup Server-side Searching on Table

This page shows you how to set up server-side filtering on the Table widget, which allows you to refine query results based on specific search terms, without relying on the client-side. 

If you are using the one-click binding feature to connect data, Appsmith automatically generates server-side filtering query for you. However, if you prefer to manually configure the server-side setup, you can do so by following the instructions in this guide.

<figure>
  <img src="/img/server-search-table.gif" style= {{width:"700px", height:"auto"}} alt="Setup Server-side Searching on Table"/>
   <figcaption align = "center"><i>Server-side Searching on Table</i></figcaption>
</figure>



## Prerequisites

* A [Table widget](/reference/widgets/table).
* A query that contains the data you want to filter.

## Configure query

Most databases and APIs support server-side filtering, although the methods of implementation can vary.

Configure the query to fetch data using [searchText](/reference/widgets/table#searchtext-string) reference property.

<dd>

*Example:* if you want to filter data based on user names:

* For PostgreSQL, you can configure the query as follows:


 ```sql
 SELECT * FROM users WHERE name LIKE '%{{Table1.searchText}}%' ORDER BY id LIMIT 10;
 ```

This SQL query fetches rows from the `users` table where the `name` column partially matches the `searchText` input.

:::note
Ensure that you turn off prepared statements in the query editor for this configuration. For more details, see [Prepared statements](/connect-data/concepts/how-to-use-prepared-statements).
:::

* For the REST API, configure the query parameter as shown in the URL:


   ```
   https://mock-api.appsmith.com/users?name={{Table1.searchText}}
   ```


</dd>


## Configure Table widget

Follow these steps to configure the Table widget to display fetched data, and implement server-side searching:

1. Connect the filter query to the [**Table data**](/reference/widgets/table#table-data-arrayobject).

2. Enable the [**Allow searching**](/reference/widgets/table#allow-searching-boolean) property.

3. Set the [**onSearchTextChange**](/reference/widgets/table#onsearchtextchanged) event to run the filter query.

After completing these steps, you can search for specific terms using the Table widget's search box.


