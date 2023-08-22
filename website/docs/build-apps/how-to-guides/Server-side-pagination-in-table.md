import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Setup Server-side Pagination on Table

This page shows you how to set up server-side pagination on a Table widget, which allows you to manage and display large datasets within your application.
 
Appsmith can handle query responses of up to 5 MB. To display large datasets and optimise performance, use server-side pagination. It can be implemented using Offset-based pagination or Cursor-based pagination.


<Tabs queryString="current-edition">
<TabItem label="Offset-based pagination" value="Offset_edition">


 Offset-based pagination works by using the page number and size to calculate the offset of records to fetch from a database or API. 

1. Fetch data from the sample **users** database using `pageSize` and `pageOffset`  reference properties to implement pagination.


   ```sql
    SELECT * FROM users LIMIT {{ Table1.pageSize }} OFFSET {{ Table1.pageOffset }}; 
   ```
 In an API query, the page number can be passed as a query parameter to retrieve the corresponding subset of data, as shown in the example URL:

   ```
   https://mock-api.appsmith.com/users?page={{Table1.pageNo}}
   ```

2. Enable the **Server-side pagination** property in the table. 

3. Set the table widget's **onPageChange** event to run the query.

4. To provide the user with information about the number of records in the table, you can configure the **Total records** property to be displayed in the table header. Create a new Query, and add:

```sql
SELECT COUNT(*) FROM users;
```

You can use `{{fetch_users_count.data[0].count}}` COUNT query to display the count. Additionally, you can use the total record count to enable or disable the next/previous controls. 

<figure>
  <img src="/img/off-set.gif" style= {{width:"700px", height:"auto"}} alt="Display images on table row selection"/>
  <figcaption align = "center"><i>Offset-based pagination</i></figcaption>
</figure>

  </TabItem>
  

  <TabItem value="Cursor" label="Cursor-based-pagination">

Instead of using page numbers and sizes, cursor-based pagination uses a cursor, which is a unique identifier that points to a specific item in the dataset.

1. Fetch data from the sample **users** database using `previousPageVisited` and `nextPageVisited` reference properties to implement pagination.

   ```sql
   SELECT * FROM users {{Table1.nextPageVisited ?  "WHERE id > "+ " "+ Table1.tableData[Table1.tableData.length-1]["id"] : Table1.previousPageVisited ? "WHERE id <"+ " "+ Table1.tableData[0]["id"] : "" }} ORDER BY id LIMIT {{Table1.pageSize}} ;
   ```
This SQL query selects all columns from the `users` table and applies cursor-based pagination to limit the number of results returned. The `WHERE` clause is dynamically generated based on whether the user has already visited the `next` or `previous` page, and orders the results by `ID`.

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


