import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Setup Server-side Pagination on Table


This page shows you how to set up server-side pagination on a Table widge, which allows you to manage and display large datasets within your application.


It involves fetching and displaying only a portion of data from the server at a time, enhancing performance. By loading smaller chunks of data as needed, server-side pagination reduces loading times, minimizes resource consumption, and provides a smoother user experience.



<VideoEmbed host="youtube" videoId="9_uqwm4M4Yg" title="Server-side Pagination on Table" caption="Server-side Pagination on Table"/>



## Prerequisites


A [Table widget](/reference/widgets/table) connected to a query. To connect your datasource to the Table widget, click on **Connect data** and select your datasource or query. If you don't have a query, you can choose your datasource, select the desired table or collection, and specify the searchable property. 

:::note
With one-click table binding, Appsmith automatically generates queries for you, providing features like server-side pagination, search capabilities, and the ability to edit and add new rows to the table.
:::


## Query Configuration


Most databases and APIs support server-side pagination, although the methods of implementation can vary.


Appsmith can handle query responses of up to 5 MB. Server-side pagination can be implemented using Offset-based pagination or Cursor-based pagination.


<Tabs queryString="current-edition">
<TabItem label="Offset-based pagination" value="Offset_edition">




Offset-based pagination works by using the page number and size to calculate the offset of records to fetch from a database or API.


1. Create a query to fetch data from the database/API using `pageSize`, `pageNo` and `pageOffset` reference properties to implement pagination.


<dd>


*Example:*


* For PostgreSQL, you can configure the query as follows:


```sql
SELECT * FROM users LIMIT {{ Table1.pageSize }} OFFSET {{ Table1.pageOffset }};
```

This SQL query retrieves data from the `users` table with pagination based on the specified [pagesize](/reference/widgets/table#pagesize-number) and [offset values](/reference/widgets/table#pageoffset-number).



* For REST API, the page number can be passed as a query parameter to retrieve the corresponding subset of data, as shown in the URL:


```
https://mock-api.appsmith.com/users?page={{Table1.pageNo}}
```


You can refer to the [datasource reference](/connect-data/reference) for specific instructions on setting up pagination for your selected datasource.


</dd>






2. Enable the **Server-side pagination** property in the table.


3. Set the Table widget's **onPageChange** event to run the pagination query.


4. To provide the user with information about the number of records in the table, you can configure the **Total records** property to be displayed in the table header. 


<dd>

*Example*:

* For PostgreSQL, create a new query and configure the query as follows:

```sql
SELECT COUNT(*) FROM users;
```

You can use `{{fetch_users_count.data[0].count}}` COUNT query to display the count. Additionally, you can use the total record count to enable or disable the next/previous controls.

</dd>


<figure>
<img src="/img/off-set.gif" style= {{width:"700px", height:"auto"}} alt="Display images on table row selection"/>
<figcaption align = "center"><i>Offset-based pagination</i></figcaption>
</figure>


</TabItem>


<TabItem value="Cursor" label="Cursor-based-pagination">

Cursor-based pagination is a method that uses unique identifiers (cursors) to navigate and fetch data in large datasets. The cursor itself serves as a reference point, and you query for a specific number of records that come after or before that cursor. 

1. Create a query to fetch data from the database/API using `previousPageVisited` and `nextPageVisited` reference properties to implement pagination.

<dd>


*Example:*


* For PostgreSQL, you can configure the query as follows:


```sql
SELECT * FROM users {{Table1.nextPageVisited ? "WHERE id > "+ " "+ Table1.tableData[Table1.tableData.length-1]["id"] : Table1.previousPageVisited ? "WHERE id <"+ " "+ Table1.tableData[0]["id"] : "" }} ORDER BY id LIMIT {{Table1.pageSize}} ;
```

This SQL query selects all columns from the `users` table and applies cursor-based pagination to limit the number of results returned. The `WHERE` clause is dynamically generated based on whether the user has already visited the [next](/reference/widgets/table#nextpagevisited-boolean) or [previous](/reference/widgets/table#previouspagevisited-boolean) page, and orders the results by `ID`.




* For REST API, the page number can be passed as a query parameter to retrieve the corresponding subset of data, as shown in the URL:


```js
https://mock-api.appsmith.com/users/?pageDirection={{nextPageVisited ? "next" : previousPageVisited? "previous":"default"}}

//The "pageDirection" can serve as a query parameter within the API.
```


You can refer to the [datasource reference](/connect-data/reference) for specific instructions on setting up pagination for your selected datasource.


</dd>



2. Enable the **Server-side pagination** property in the table.


3. Set the table widget's **onPageChange** event to run the query.


4. To provide the user with information about the number of records in the table, you can configure the **Total records** property to be displayed in the table header.


For example, you can use `{{fetch_users_count.data[0].count}}` COUNT query to display the count. Additionally, you can use the total record count to enable or disable the next/previous controls.


<figure>
<img src="/img/cursor.gif" style= {{width:"700px", height:"auto"}} alt="Display images on table row selection"/>
<figcaption align = "center"><i>Cursor-based pagination</i></figcaption>
</figure>






</TabItem>
</Tabs>




