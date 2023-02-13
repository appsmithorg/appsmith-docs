# Query Settings

In the Appsmith Query Editor, you can specify the following settings in the **Settings** tab for an API or a DB query:

|Setting   | Availability  | Description  |
|----------|---------------|--------------|
| Run on page load  | API and DB query  | Configure whether the query should load on every page load   |
| Request confirmation  | API and DB query  | Set up a confirmation pop-up before a query is run  |
| Query timeout  | API and DB query  | The time till server waits for the query to execute before closing the connection   |
| Prepared statements | DB query | Execute a statement with dynamic data bindings repeatedly and efficiently |
| Encode query params  | API  |  Encode query params for all APIs. |
| Smart JSON substitution  | API   | Dynamically perform type conversions on field values in a request body  |

### Run on page load

This allows you to configure whether the query should load on every page load. By default, it's turned on for queries that display data on a widget. You can explicitly change this setting to suit your logic.

### Request confirmation before running query

This enables you to set up a confirmation pop-up before a query is run. This Setting comes in handy to protect against users accidentally running destructive operations.

### Query timeout (in milliseconds)

It’s the time till which Appsmith server waits for the query to execute before closing the connection. By default, it's set to 10000 ms. If your query takes longer than this to return results, Appsmith throws a timeout error.

### Prepared statements

A Prepared Statement is a feature provided by Database Management Systems (DBMS) to execute the same statement with dynamic data bindings repeatedly and efficiently. Appsmith supports using prepared statements by converting the user query into a parameterized query by replacing the bindings. That means the query created on the Appsmith will have bindings for reading the widget values selected by users. By default, the `prepared statement` is enabled for all queries. To know more about Prepared statements in Appsmith, please check [How to Use Prepared Statements?](/learning-and-resources/how-to-guides/how-to-use-prepared-statements.md)

### Encode query params

 Encode query params converts the special characters in params to their UTF equivalents. You can also encode form body when Content-Type header is set to `FORM_URLENCODED`.


### Smart JSON substitution

The smart JSON substitution allows Appsmith to dynamically perform type conversions on field values in a request body. The video below illustrates how to use this feature:

<VideoEmbed host="youtube" videoId="-Z3y-pdNhXc" title="How to use smart JSON substitution" caption="How to use smart JSON substitution"/>

:::info
Are you having trouble? Check out the [API response troubleshooting guide](/help-and-support/troubleshooting-guide/query-errors) or reach out on[ Discord](https://discord.com/invite/rBTTVJp) to get support or ask questions on the [community forum](https://community.appsmith.com/).
:::
