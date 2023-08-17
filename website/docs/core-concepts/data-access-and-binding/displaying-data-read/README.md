# Display Data (Read)

You can display data from a query or JS function in a widget. Before reading this page, ensure you have connected to a data source and have a query that fetches data.

## Display data from query

Data from a [Query](/connect-data/how-to-guides/query-data) can be set in a widget property by referencing the Query's unique name.

**Example 1:** suppose you have a query named `fetch_users`. You can bind the results of the query to the Table widget by adding the following code in the **Table Data** property:

```javascript
{{ fetch_users.data }}
```

![](</img/bind-table_(2)_(4).gif>)

For more information about using Table widget to show data from queries, see [display data in tables](/reference/widgets/table#display-data-in-tables).



