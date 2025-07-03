# Query settings

This reference guide provides descriptions of all settings available for configuring your queries.

The following settings are available in the **Settings** tab of the query editor for an API or database query:

## Encode query params

This setting toggles whether Appsmith converts parameters' special characters into their [URL-encoded](https://en.wikipedia.org/wiki/URL_encoding) equivalents. It also encodes the form body when the `Content-Type` header is set to `FORM_URLENCODED`. This setting is available for API queries.

## Use prepared statements

This setting toggles whether Appsmith uses pre-compiled and parameterized SQL statements to construct and execute database queries. This method improves the security of your SQL queries. This setting is turned on by default, and available for SQL database queries. For more details, see [Prepared Statements](/connect-data/concepts/how-to-use-prepared-statements).

## Query timeout

This setting sets the time duration in milliseconds that the Appsmith server waits for the query to finish before it closes the connection. If the query takes longer than this duration, Appsmith throws a [timeout-error](/help-and-support/troubleshooting-guide/action-errors#timeout-error). This setting defaults to 10000 ms with a maximum of 60000 ms.

The Appsmith server has a default internal timeout of 60 seconds. If the queries take longer than this, a value greater than 60 seconds can be set. For self-hosted instances, the `APPSMITH_SERVER_TIMEOUT` environment variable can be set to a value greater than 60 seconds. For example, to set a timeout of 80 seconds, use `APPSMITH_SERVER_TIMEOUT=80`.

## Request confirmation before running query

When this setting is turned on, Appsmith asks for permission to run the query before each execution.

## Request confirmation before running API

When this setting is turned on, Appsmith asks for permission to run the query before each execution.

## Run API on page load

When this setting is turned on, the query is executed every time the page loads or refreshes. This is automatically turned on when the query's data is bound to be displayed in a widget, but it can be turned off.

## Run query on page load

When this setting is turned on, the query is executed every time the page loads or refreshes. This is automatically turned on when the query's data is bound to be displayed in a widget, but it can be turned off.

## Smart JSON substitution

JavaScript objects and JSON objects are formatted similarly, but they have different rules for where quotation marks are required. When this setting is turned on, Appsmith intelligently adds or removes quotation marks from JavaScript data as necessary to correctly cast them into JSON. This setting is turned on by default, but it may need to be turned off for some tasks such as sending raw binary data to an API. This setting is available for API queries. For a video guide on using this feature, see [How to Use Smart JSON Substitution](https://www.youtube.com/watch?v=-Z3y-pdNhXc).

## Smart BSON substitution

JavaScript objects and Binary JSON (BSON) objects are formatted similarly, but they have different rules for where quotation marks are required. When this setting is turned on, the query intelligently adds or removes quotation marks from JavaScript data as necessary to correctly cast them into BSON. This setting is turned on by default, and available for [MongoDB](/connect-data/reference/querying-mongodb) queries.

## Automated execution

This setting allows for the automatic execution of queries based on specific triggers or events. When enabled, the query is executed without manual intervention, based on the defined conditions. This is particularly useful for routine tasks or for maintaining real-time data updates. The exact configuration options for automated execution depend on the type of query (API or database) and the specific requirements of the task.