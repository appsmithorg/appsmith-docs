---
description: This page shows you how to set up server-side pagination on a Table widget, which allows you to manage and display large datasets within your application.
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Setup Server-Side Pagination on Table


This page shows you how to set up server-side pagination on a Table widget, which allows you to manage and display large datasets within your application. It involves fetching and displaying only a portion of data from the server at a time, enhancing performance.

 If you are using the one-click binding feature to connect data, Appsmith automatically generates server-side pagination queries for you. However, if you prefer to manually configure the server-side setup, you can do so by following the instructions in this guide.

<VideoEmbed host="youtube" videoId="9_uqwm4M4Yg" title="Server-side Pagination on Table" caption="Server-side Pagination on Table"/>



## Configure query


Most databases and APIs support server-side pagination, although the methods of implementation can vary.


Appsmith can handle query responses of up to 5 MB. Server-side pagination can be implemented using Offset-based pagination or Cursor-based pagination.


<Tabs queryString="current-edition">
<TabItem label="Offset-based pagination" value="Offset_edition">




Offset-based pagination works by using the page number and size to calculate the offset of records to fetch from a database or API.




Create a query to fetch data from the database/API using `pageSize`, `pageNo`, and `pageOffset` reference properties to implement pagination.


<dd>


*Example:*


* For PostgreSQL, you can configure the query as follows:


```sql
SELECT * FROM users LIMIT {{ Table1.pageSize }} OFFSET {{ Table1.pageOffset }};
```

This SQL query retrieves data from the `users` table with pagination based on the specified [pagesize](/reference/widgets/table#pagesize-number) and [offset values](/reference/widgets/table#pageoffset-number).



* For the REST API, the page number can be passed as a query parameter to retrieve the corresponding subset of data, as shown in the URL:


```
https://mock-api.appsmith.com/users?page={{Table1.pageNo}}
```


You can refer to the [datasource reference](/connect-data/reference) for specific instructions on setting up pagination for your selected datasource.


</dd>

</TabItem>


<TabItem value="Cursor" label="Cursor-based-pagination">

Cursor-based pagination is a method that uses unique identifiers (cursors) to navigate and fetch data in large datasets. The cursor itself serves as a reference point, and you query for a specific number of records that come after or before that cursor. 


Create a query to fetch data from the database/API using `previousPageVisited` and `nextPageVisited` reference properties to implement pagination.

<dd>


*Example:*


* For PostgreSQL, you can configure the query as follows:


```sql
SELECT * FROM users {{Table1.nextPageVisited ? "WHERE id > "+ " "+ Table1.tableData[Table1.tableData.length-1]["id"] : Table1.previousPageVisited ? "WHERE id <"+ " "+ Table1.tableData[0]["id"] : "" }} ORDER BY id LIMIT {{Table1.pageSize}} ;
```

This SQL query selects all columns from the `users` table and applies cursor-based pagination to limit the number of results returned. The `WHERE` clause is dynamically generated based on whether the user has already visited the [next](/reference/widgets/table#nextpagevisited-boolean) or [previous](/reference/widgets/table#previouspagevisited-boolean) page, and orders the results by `ID`.

:::note
Please ensure that you turn off prepared statements in the query editor for this configuration.
:::

* For the REST API, you can make use of the URL's query parameter to retrieve data under specific conditions using `next` and `previous`:

```js
https://api.site.com/users/?pageDirection={{Table1.nextPageVisited ? "next" : Table1.previousPageVisited? "previous":"default"}}

//The "pageDirection" serves as a query parameter within the API
```

You can refer to the [datasource reference](/connect-data/reference) for specific instructions on setting up pagination for your selected datasource.


</dd>


</TabItem>
</Tabs>


## Configure Table widget

Follow these steps to configure the Table widget to display fetched data, and implement server-side pagination:

1. Bind the query data into the [**Table data**](/reference/widgets/table#table-data-arrayobject) property of the Table widget.

<dd>

*Example*: 

```js
{{fetchData.data}}
```

</dd>

2. Enable the [**Server-side pagination**](/reference/widgets/table#server-side-pagination-boolean) property in the table.


3. Set the Table widget's [**onPageChange**](/reference/widgets/table#onpagechange) event to run the pagination query.

With this setup, users can paginate through data, ensuring an efficient browsing experience.

## Configure total records

To provide the user with information about the number of records in the table, you can configure the [**Total records**](/reference/widgets/table#total-records-number) property to be displayed in the table header. 


<dd>

*PostgreSQL Example*:

```sql
SELECT COUNT(*) from users where name ilike '%{{Table1.searchText}}%';
```

This SQL query uses the `ilike` condition on the `name` column, pinpointing relevant data rather than performing a blanket count of all records.

To display the count, add the following code to the **Total records** property:

```js
{{fetch_users_count.data[0].count}}
```
</dd>









