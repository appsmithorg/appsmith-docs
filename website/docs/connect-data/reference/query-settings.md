# Query Settings

This page is a reference guide that provides a description of all the settings available for configuring your queries.

You can find the following settings in the **Settings** tab of the query editor for an API or database query:

#### Encode query params

<dd>Toggles whether Appsmith converts parameters' special characters into their <a href="https://en.wikipedia.org/wiki/URL_encoding">URL-encoded</a> equivalents. It also encodes the form body when the <b>Content-Type</b> header is set to <code>FORM_URLENCODED</code>. This setting is available for API queries.
</dd>

#### Use Prepared Statements

<dd>Toggles whether Appsmith uses pre-compiled and parameterized SQL statements to construct and execute database queries. This method improves the security of your SQL queries. This setting is turned on by default, and available for SQL database queries. For more details, see <a href="/connect-data/concepts/how-to-use-prepared-statements">Prepared Statements</a>.
</dd>

#### Query timeout

<dd>

Sets the time duration in milliseconds that the Appsmith server waits for the query to finish before it closes the connection. If your query takes longer than this duration, Appsmith throws a [timeout-error](/help-and-support/troubleshooting-guide/action-errors#timeout-error). This setting defaults to 10000 ms with a maximum of 60000 ms.

The Appsmith server has a default internal timeout of 60 seconds. If your queries take longer than this, you need to set the `APPSMITH_SERVER_TIMEOUT` environment variable to a value greater than 60 seconds. For example, if you want a timeout of 80 seconds, use- `APPSMITH_SERVER_TIMEOUT=80`.

</dd>

#### Request confirmation before running query

<dd>When turned on, Appsmith asks the user for permission to run the query before each execution.
</dd>

#### Request confirmation before running API

<dd>When turned on, Appsmith asks the user for permission to run the query before each execution.
</dd>

#### Run API on page load

<dd>When turned on, your query is executed every time the page loads or refreshes. This is automatically turned on when you bind the query's data to be displayed in a widget, though you can choose to turn it off.
</dd>

#### Run query on page load

<dd>When turned on, your query is executed every time the page loads or refreshes. This is automatically turned on when you bind the query's data to be displayed in a widget, though you can choose to turn it off.
</dd>

#### Smart JSON substitution

<dd>JavaScript objects and JSON objects are formatted similarly, however they have different rules for where quotation marks are required. When this setting is turned on, Appsmith intelligently adds or removes quotation marks from your JavaScript data as necessary to correctly cast them into JSON. This setting is turned on by default, however it may need to be turned off for some tasks such as sending raw binary data to an API. This setting is available for API queries. For a video guide on using this feature, see <a href="https://www.youtube.com/watch?v=-Z3y-pdNhXc">How to Use Smart JSON Substitution</a>.
</dd>

#### Smart BSON substitution

<dd>JavaScript objects and Binary JSON (BSON) objects are formatted similarly, however they have different rules for where quotation marks are required. When turned on, the query intelligently adds or removes quotation marks from your JavaScript data as necessary to correctly cast them into BSON. This setting is turned on by default, and available for <a href="/connect-data/reference/querying-mongodb">MongoDB</a> queries.
</dd>
