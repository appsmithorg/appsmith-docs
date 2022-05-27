# Query Settings

You can specify the following settings in the **Query Settings** tab on the Appsmith Query Editor:

### Run query on page load

This allows you to configure whether the query should load on every page load. By default, it is turned on for queries that display data on a widget. You can explicitly change this setting to suit your logic.

### Request confirmation before running query

This enables you to set up a confirmation pop-up before a query is run. This Setting comes in handy to protect against users accidentally running destructive operations.

### Query timeout (in milliseconds)

It’s the time till which Appsmith server waits for the query to execute before closing the connection. By default, it is set to 10000 ms. If your query takes longer than this to return results, Appsmith will throw a timeout error.
