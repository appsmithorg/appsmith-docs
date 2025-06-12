# Query Settings

This page is a reference guide that provides a description of all the settings available for configuring your queries.

You can find the following settings by clicking the gear icon in the top-right corner of the query editor for an API or database query.

### Run behavior

The Run behavior property determines when your query executes. It has three possible values:


#### Manual

<dd>

Queries execute only when explicitly triggered. They do not run automatically on page load or when any variables change.

You can trigger the query using:

- Widget events (e.g., **onClick**, **onOptionChange**).

- JavaScript function calls using `.run()`

- The **Run** button in the query editor

This mode provides full control over when and how the query is executed.

*Example:* If you want to execute a query when a button is clicked:

```js
{{getUsers.run()}}
```


</dd>

#### On page load

<dd>

Queries with On page load behavior execute automatically once whenever the application or page is loaded. This is useful for fetching data needed immediately when the app starts, without requiring any user interaction.

The query runs each time:

- The page is loaded or reloaded

- The app is opened or refreshed

You do not need to configure any widget actions or write custom JavaScript to trigger the query.


*Example:* If you have a query that fetches user data and you want to display it whenever the app is opened, you can set the run behavior to **On page load**.

</dd>


#### Automatic

<dd>

Queries with Automatic behavior execute whenever a variable they depend on changes. This includes values from:

- Widget properties (e.g., `{{Input1.text}}`, `{{Select1.selectedOptionValue}}`)

- JavaScript object variables or function outputs (e.g., `{{JSObject1.value}}`, `{{JSObject1.function.data}}`)

- Appsmith store variables (e.g., `{{appsmith.store.searchKey}}`)

When any of these values change, the query re-executes automatically. You do not need to use event handlers like **onTextChanged** or **onOptionChanged**.

This mode is useful for building dynamic, responsive apps where data needs to stay updated based on user input or state changes.

*Example:* If you have a query that filters a customer list based on user input, and you want the results to update automatically as the user types, you can bind the input value directly and set the run behavior to Automatic:

```js
SELECT * FROM customers WHERE name ILIKE '%{{SearchInput.text}}%';
```

Each time the value of` SearchInput.text` changes, the query runs automatically and updates the data shown in the UI.

:::note
If a query is configured with Automatic run behavior and is also manually triggered through a widget event (such as **onTextChanged**), the query will be executed twice—once due to the reactive binding, and once from the event handler.
To avoid unintended duplicate executions, it is recommended to use either the automatic behavior or an explicit trigger, but not both.
:::

</dd>


#### Encode query params

<dd>Toggles whether Appsmith converts parameters' special characters into their <a href="https://en.wikipedia.org/wiki/URL_encoding">URL-encoded</a> equivalents. It also encodes the form body when the <b>Content-Type</b> header is set to <code>FORM_URLENCODED</code>. This setting is available for API queries.</dd>

#### Use Prepared Statements

<dd>Toggles whether Appsmith uses pre-compiled and parameterized SQL statements to construct and execute database queries. This method improves the security of your SQL queries. This setting is turned on by default, and available for SQL database queries. For more details, see <a href="/connect-data/concepts/how-to-use-prepared-statements">Prepared Statements</a>.</dd>

#### Query timeout

<dd>

Sets the time duration in milliseconds that the Appsmith server waits for the query to finish before it closes the connection. If your query takes longer than this duration, Appsmith throws a [timeout-error](/help-and-support/troubleshooting-guide/action-errors#timeout-error). This setting defaults to 10000 ms with a maximum of 60000 ms.

The Appsmith server has a default internal timeout of 60 seconds. If your queries take longer than this, you can set a value greater than 60 seconds. For self-hosted instances, you can set the `APPSMITH_SERVER_TIMEOUT` environment variable to a value greater than 60 seconds. For example, if you want a timeout of 80 seconds, use- `APPSMITH_SERVER_TIMEOUT=80`.

</dd>

#### Request confirmation before running query

<dd>When turned on, Appsmith asks the user for permission to run the query before each execution.</dd>

#### Request confirmation before running API

<dd>When turned on, Appsmith asks the user for permission to run the query before each execution.</dd>

#### Run API on page load

<dd>When turned on, your query is executed every time the page loads or refreshes. This is automatically turned on when you bind the query's data to be displayed in a widget, though you can choose to turn it off</dd>

#### Run query on page load

<dd>When turned on, your query is executed every time the page loads or refreshes. This is automatically turned on when you bind the query's data to be displayed in a widget, though you can choose to turn it off.</dd>

#### Smart JSON substitution

<dd>JavaScript objects and JSON objects are formatted similarly, however they have different rules for where quotation marks are required. When this setting is turned on, Appsmith intelligently adds or removes quotation marks from your JavaScript data as necessary to correctly cast them into JSON. This setting is turned on by default, however it may need to be turned off for some tasks such as sending raw binary data to an API. This setting is available for API queries. For a video guide on using this feature, see <a href="https://www.youtube.com/watch?v=-Z3y-pdNhXc">How to Use Smart JSON Substitution</a>.</dd>

#### Smart BSON substitution

<dd>JavaScript objects and Binary JSON (BSON) objects are formatted similarly, however they have different rules for where quotation marks are required. When turned on, the query intelligently adds or removes quotation marks from your JavaScript data as necessary to correctly cast them into BSON. This setting is turned on by default, and available for <a href="/connect-data/reference/querying-mongodb">MongoDB</a> queries.</dd>
