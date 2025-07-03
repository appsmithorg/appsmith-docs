# Query settings

This page serves as a reference guide, detailing all the available settings for configuring your queries.

The following settings can be found in the **Settings** tab of the query editor for an API or database query:

## Encode query params

This setting toggles whether Appsmith converts parameters' special characters into their [URL-encoded](https://en.wikipedia.org/wiki/URL_encoding) equivalents. It also encodes the form body when the `Content-Type` header is set to `FORM_URLENCODED`. This setting is available for API queries.

## Use prepared statements

This setting toggles whether Appsmith uses pre-compiled and parameterized SQL statements to construct and execute database queries. This method enhances the security of your SQL queries. By default, this setting is turned on and available for SQL database queries. For more details, see [Prepared Statements](/connect-data/concepts/how-to-use-prepared-statements).

## Query timeout

This setting determines the time duration in milliseconds that the Appsmith server waits for the query to finish before it closes the connection. If your query takes longer than this duration, Appsmith throws a [timeout-error](/help-and-support/troubleshooting-guide/action-errors#timeout-error). This setting defaults to 10000 ms with a maximum of 60000 ms.

The Appsmith server has a default internal timeout of 60 seconds. If your queries take longer than this, you can set a value greater than 60 seconds. For self-hosted instances, you can set the `APPSMITH_SERVER_TIMEOUT` environment variable to a value greater than 60 seconds. For example, to set a timeout of 80 seconds, use `APPSMITH_SERVER_TIMEOUT=80`.

## Request confirmation before running query

When this setting is turned on, Appsmith asks for permission to run the query before each execution.

## Request confirmation before running API

When this setting is turned on, Appsmith asks for permission to run the query before each execution.

## Run API on page load

When this setting is turned on, the query is executed every time the page loads or refreshes. This is automatically turned on when the query's data is bound to be displayed in a widget, though it can be turned off.

## Run query on page load

When this setting is turned on, the query is executed every time the page loads or refreshes. This is automatically turned on when the query's data is bound to be displayed in a widget, though it can be turned off.

## Smart JSON substitution

JavaScript objects and JSON objects are formatted similarly, but they have different rules for where quotation marks are required. When this setting is turned on, Appsmith intelligently adds or removes quotation marks from your JavaScript data as necessary to correctly cast them into JSON. This setting is turned on by default, but it may need to be turned off for some tasks such as sending raw binary data to an API. This setting is available for API queries. For a video guide on using this feature, see [How to Use Smart JSON Substitution](https://www.youtube.com/watch?v=-Z3y-pdNhXc).

## Smart BSON substitution

JavaScript objects and Binary JSON (BSON) objects are formatted similarly, but they have different rules for where quotation marks are required. When this setting is turned on, the query intelligently adds or removes quotation marks from your JavaScript data as necessary to correctly cast them into BSON. This setting is turned on by default and available for [MongoDB](/connect-data/reference/querying-mongodb) queries.

## Automated query execution

This setting enables automatic execution of queries based on predefined conditions or triggers. When turned on, the query executes automatically without manual intervention. This is particularly useful for recurring tasks or when certain conditions are met in the application. Note that the specific conditions or triggers for automated execution need to be defined in the query script.