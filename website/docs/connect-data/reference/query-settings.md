# Query Settings

This page is a reference guide that provides a description of all the settings available for configuring your queries.

You can find the following settings in the **Settings** tab of the query editor for an API or database query:

<dl>
  <dt><b>Encode query params</b></dt>
  <dd>Toggles converting the special characters in parameters into their UTF equivalents. It also encodes the form body when the <b>Content-Type</b> header is set to <code>FORM_URLENCODED</code>. Available for API queries.
  </dd><br />

  <dt><b>Use Prepared Statements</b></dt>
  <dd>Toggles using pre-compiled and parameterized SQL statements to construct and execute database queries. Usually, this improves the efficiency and security of your SQL queries. To learn more, see <a href="/connect-data/concepts/how-to-use-prepared-statements">Prepared Statements</a>. Available for database queries.
  </dd><br />

  <dt><b>Query timeout</b></dt>
  <dd>Sets the time duration in milliseconds that the Appsmith server waits for the query to finish before it closes the connection. . If your query takes longer than this duration, Appsmith throws a timeout error. This setting defaults to 10000 ms with a maximum of 60000 ms. Available for all query types.
  </dd><br />

  <dt><b>Request confirmation before running query/API</b></dt>
  <dd>When enabled, Appsmith asks the user for permission to run the query before each execution. Available for all query types.
  </dd><br />

  <dt><b>Run query/API on page load</b></dt>
  <dd>When enabled, this query is executed every time the page loads or refreshes. This is automatically enabled when you bind the query's data to be displayed in a widget, though you can choose to disable it. Available for all query types.
  </dd><br />

  <dt><b>Smart JSON substitution</b></dt>
  <dd>When enabled, the query intelligently adds or removes quotation marks from your JavaScript data as necessary to correctly cast them into JSON. Some tasks such as sending raw binary data in an API query may require this setting to be disabled. Available for API queries.
  </dd>
  <dd><VideoEmbed host="youtube" videoId="-Z3y-pdNhXc" title="How to use smart JSON substitution" caption="How to use smart JSON substitution"/></dd><br />

  <dt><b>Smart BSON substitution</b></dt>
  <dd>When enabled, the query intelligently adds or removes quotation marks from your JavaScript data as necessary to correctly cast them into BSON. Available for <a href="/connect-data/reference/querying-mongodb">MongoDB</a> queries.
  </dd>

</dl>
