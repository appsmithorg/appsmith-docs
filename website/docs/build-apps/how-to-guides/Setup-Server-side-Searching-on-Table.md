# Setup Server-side Searching on Table 

Server-side searching is a technique of searching for specific records from the server using search terms, without relying on the client-side. To enable the search bar in the table header for server-side searching, you can turn on the **Allow Searching** property. 

The `searchText` reference property can be used to filter records displayed in a table based on the user's search terms. When the user types into the search bar, the `onSearchTextChange` event of the table is triggered, which can be configured to query the table's datasource for the matching results. 

To use the server-side search with the Table widget, follow these steps:

1. Create a SQL query using the `searchText` reference property:

   ```sql
   SELECT * FROM users WHERE name LIKE {{"%" + Table1.searchText + "%"}} ORDER BY id LIMIT 10;
   ```

   You can also pass the `searchText` property as a URL parameter in an API request:
   ```
   https://mock-api.appsmith.com/users?name={{Table1.searchText}}
   ```

2. Set the table widget's **onSearchTextChange** event to run the query. 

Watch this video to learn how to set up [server-side search](https://www.youtube.com/watch?v=3ayioaw5uj8) for the Table widget.

