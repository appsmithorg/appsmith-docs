
# Setup Server-side Pagination on List

Lists are often required to display large data sets from queries, but browsers can only sometimes load all the data in the database or might do so slowly. You can use server-side pagination when a client receives only a subset of data from large datasets. It allows you to define the data limit that a query call can render, thus enabling you to paginate the data and determine the pagination boundaries.

Follow the steps below to paginate the responses and request smaller chunks of data at a time:

1. Enable the **Server Side Pagination** property for the List.
2. Call the query on the **onPageChange** event listener.
3. Set the `LIMIT` and `OFFSET` clauses in the query using the **pageSize** and **pageNo** properties of the List as shown below:

```javascript
SELECT * FROM users LIMIT {{ <listName>.pageSize }} OFFSET {{ (<listName>.pageNo - 1) * <listName>.pageSize }}
```
