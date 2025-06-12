# Query Settings

This page is a reference guide that provides a description of all the settings available for configuring your queries. You can find the following settings by clicking the **⚙️ gear icon**  in the top-right corner of the query editor for an API or database query.

### Run behavior

The Run behavior property determines when your query executes. 


<img
  src="/img/query-settings.png"
  alt="Query Settings"
  style={{
    maxHeight: "600px",
    width: "auto",
    display: "block",
    margin: "0 auto"
  }}
/>
<p style={{ textAlign: "center", fontSize: "0.9rem", color: "#666" }}>
  Query Settings
</p>



#### Manual

<dd>

Queries execute only when explicitly triggered. They do not run automatically on page load or when any variables change.

You can trigger the query using:

- Widget events (e.g., **onClick**, **onOptionChange**).
- JavaScript function calls using `.run()`.
- The **Run** button in the query editor.

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

- Widget properties (e.g., `{{Input1.text}}`, `{{Select1.selectedOptionValue}}`).
- JavaScript object variables or function outputs (e.g., `{{JSObject1.value}}`, `{{JSObject1.function.data}}`).
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

<dd>


When enabled, Appsmith automatically encodes special characters in query parameters to ensure they are transmitted correctly over the network.

- All API query parameters are URL-encoded based on [RFC 3986](https://en.wikipedia.org/wiki/Percent-encoding).
- If the Content-Type header is set to `application/x-www-form-urlencoded`, the request body is also encoded.

This setting is useful for APIs that expect properly encoded input, especially when sending form data or special characters like spaces, ampersands, or slashes. This setting is only available for API queries.

</dd>

#### Use Prepared Statements

<dd>

When enabled, Appsmith constructs and executes SQL queries using pre-compiled and parameterized statements. This improves both performance and security by separating query logic from user input.

- Helps protect against SQL injection attacks by preventing direct injection of unescaped input.
- Improves query execution efficiency in certain database engines by allowing query plan reuse.

This setting is enabled by default and is only available for SQL database queries. For more information, see [Prepared Statements](/connect-data/concepts/how-to-use-prepared-statements).



</dd>

#### Query timeout

<dd>


Defines the maximum time (in milliseconds) that Appsmith waits for a query to complete before terminating the request.

- If the query does not respond within the specified timeout, Appsmith throws a [timeout error](/help-and-support/troubleshooting-guide/action-errors#timeout-error).

- The default timeout is `10000` milliseconds (10 seconds), with a maximum configurable limit of `60000` milliseconds (60 seconds).

For self-hosted instances, you can increase the server-level timeout beyond `60` seconds by setting the `APPSMITH_SERVER_TIMEOUT` environment variable. For example:

```js
APPSMITH_SERVER_TIMEOUT=80
```

This setting is available for both API and database queries.


</dd>

#### Request confirmation before running query/API

<dd>

When enabled, Appsmith prompts the user for confirmation each time the API / query is about to run. This is useful for critical operations such as deleting records, sending emails, or triggering external workflows, where unintentional execution may have significant consequences.


</dd>


#### Protocol

<dd>


Specifies the HTTP protocol version to use when making an API request. Choosing the correct version ensures compatibility with the target server and may improve performance depending on the API's infrastructure.

*Available options:*

**HTTP/1.1 (Default)** The most widely supported version of HTTP.

- Uses a new connection for each request-response pair.
- Supported by nearly all web servers and APIs.
- Ideal for general-purpose APIs with no specific protocol requirements.


**HTTP/2 (h2):** A modern version of HTTP that enables multiplexing multiple requests over a single connection.

- Reduces latency by allowing multiple streams on one connection.
- Improves performance for APIs that support it.
- Requires server support for HTTP/2 over TLS (HTTPS).

**HTTP/2 Cleartext (h2c)**: A variant of HTTP/2 that operates over non-encrypted (HTTP) connections.

- Less common and generally used in controlled environments or internal networks.
- Requires explicit support from the target server.
- Not recommended for public or production APIs due to lack of encryption.

This setting is only available for API queries.

</dd>

#### Smart JSON substitution

<dd>

When enabled, Appsmith intelligently formats and escapes JavaScript expressions to produce valid JSON output. This helps prevent syntax errors when passing dynamic values in API requests.

- Automatically adds or removes quotation marks as needed to ensure proper JSON structure.
- Allows you to write JavaScript directly in bindings without manually formatting the resulting JSON.

This setting is enabled by default and is useful when sending structured data in API request bodies, headers, or parameters. In advanced cases—such as sending raw binary data or pre-formatted payloads—you may need to disable this setting to avoid unwanted formatting.

This option is only available for API queries. For a walkthrough, see How to Use [Smart JSON Substitution](https://www.youtube.com/watch?v=-Z3y-pdNhXc).


</dd>

#### Smart BSON substitution

<dd>

When enabled, Appsmith automatically formats and escapes JavaScript expressions to produce valid BSON (Binary JSON) output, which is required when interacting with MongoDB.

- Dynamically adds or removes quotation marks as needed to ensure correct BSON structure.
- Allows you to use JavaScript bindings directly in MongoDB queries and commands without manually formatting them.

This setting is enabled by default and is available only for MongoDB queries. It helps avoid common syntax issues when constructing dynamic queries, filters, or update commands in MongoDB.


</dd>
