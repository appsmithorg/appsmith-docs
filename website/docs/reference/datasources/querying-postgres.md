---
sidebar_position: 13
---
# PostgreSQL

This page shows you how to connect Appsmith to a PostgreSQL database to read and write data in your applications.

## Connect PostgreSQL

1. Click the **Explorer** tab on the entity explorer to the screen's left. Click the **+** icon next to **Datasources.** Select **PostgreSQL** under the **Databases** section. This opens the page where you can configure the parameters to connect to your PostgreSQL database. 
2. Rename the datasource to be able to identify it when creating queries.
3. Select the **Connection Mode**. Enter details in the input boxes for **Host Address**, **Port**, **Database Name**, **Username** and **Password**. See the [**reference guide**](#connection-parameters) for a complete description of all the connection parameters.

:::info
If you want to connect to a local PostgreSQL database, see [**Connect Local Database**](/advanced-concepts/more/how-to-work-with-local-apis-on-appsmith) for directions on configuring the connection parameters. 
:::

4. Click the **Test** button to test the connection and ensure the datasource is valid.
5. Click **Save** to create and save the database connection.

<figure>
  <img src="/img/postgres-img.png" style= {{width:"100%", height:"auto"}} alt="Connect PostgreSQL Database"/>
  <figcaption align = "center"><i>Connect PostgreSQL Database</i></figcaption>
</figure>


## Connection parameters
The following section list all the parameters provided by Appsmith to connect to a PostgreSQL database.

<dl>
  <dt><b>Connection Mode</b></dt>
  <dd> Specifies the mode in which the Appsmith application can interact with the database. </dd><br />
  <dd><i>Options:</i>
    <ul>
     <li><b>Read Only:</b> This mode permits read-only transactions by default.</li>
     <li><b>Read/Write:</b> This mode permits both read-write transactions by default.</li>
    </ul>
  </dd>  
</dl>

<dl>
  <dt><b>Host Address</b></dt>
  <dd>The network location of the PostgreSQL server that you want to connect to. This can be a domain name or an IP address. If you want to connect to a local PostgreSQL database, see <a href="/advanced-concepts/more/how-to-work-with-local-apis-on-appsmith"><b>Connect Local Database</b></a> for directions on configuring the connection parameters. </dd>
</dl>

<dl>
  <dt><b>Port</b></dt>
  <dd>The port number to connect to at the server host. Appsmith connects to port `5432` by default, if you don't specify one. </dd>
</dl>

<dl>
  <dt><b>Database Name</b></dt>
  <dd>The name of the database that you want to connect to. </dd>
</dl>

<dl>
  <dt><b>Username</b></dt>
  <dd>The username that you want to use to authenticate with the PostgreSQL server.</dd>
</dl>

<dl>
  <dt><b>Password</b></dt>
  <dd>Password to be used if the server demands password authentication.</dd>
</dl>

<dl>
  <dt><b>SSL Mode</b></dt>
  <dd>Determines with what priority a secure SSL TCP/IP connection is negotiated with the server.</dd><br />
  <dd><i>Options:</i>
    <ul>
     <li><b>Default:</b> The default SSL Mode is <b>Prefer</b>.</li>
     <li><b>Allow:</b> First try a non-SSL connection; if that fails, try an SSL connection. The client can connect with or without SSL.</li>
     <li><b>Prefer:</b> First try an SSL connection; if that fails, try a non-SSL connection. The client tries to connect with SSL, but falls back to an unencrypted connection if SSL is not available.</li>
     <li><b>Require:</b> Only try an SSL connection. Rejects the connection if SSL isn't available.</li>
     <li><b>Disable:</b> Only try a non-SSL connection. Disallows all administrative requests over HTTPS. It uses a plain unencrypted connection.</li>
    </ul>
  </dd>  
  <dd>For more information, see <a href="https://www.postgresql.org/docs/current/libpq-ssl.html"><b>SSL Support</b></a>.</dd>
</dl>


## Query PostgreSQL

You can write SQL commands in the query editor. To create queries, click the **Explorer** tab on the entity explorer to the screen’s left. Click the **+** icon next to next to **Queries/JS.** Select the PostgreSQL database name from the list of options.

<figure>
  <img src="/img/query-postgresql.png" style= {{width:"100%", height:"auto"}} alt="Write SQL commands in the query editor"/>
  <figcaption align = "center"><i>Write SQL commands in the query editor</i></figcaption>
</figure>

:::info
See the official [**PostgreSQL documentation**](https://www.postgresql.org/docs/12/index.html) for the SQL syntax.
:::

### Fetch data

```sql
SELECT * FROM users LIMIT {{ tableUsers.pageSize }} OFFSET {{ tableUsers.pageOffset }};

```

In the above example, `tableUsers` is the name of the Table widget used to display the data using [**server-side pagination**](/reference/widgets/table#server-side-pagination).


### Insert data

```
INSERT INTO users
  (name, gender, email)
VALUES
  (
    {{ nameInput.text }},
    {{ genderDropdown.selectedOptionValue }},
    {{ emailInput.text }}
  );

```

In the above example,  `nameInput`,  `genderDropdown`,  and `emailInput` are the names of the widgets used to capture input from the user for name, gender and email fields, respectively.

### Update data

```
UPDATE users
  SET email = '{{emailInput.text}}'
  WHERE id = {{ tableUsers.selectedRow.id}};

```

In the above example, `emailInput` is the name of the Input widget used to capture the email entered by the user. `tableUsers` is the Table widget where the user selects the row to update the user's email.


### Delete data

```
DELETE FROM users WHERE id = {{tableUsers.selectedRow.id}};

```

In the above example, `tableUsers` is the name of the Table widget where the row is selected for deletion.

## Prepared statements

Prepared statements are switched on by default to help prevent SQL injection attacks. If the query has widget data bindings using the mustache template {{ }}, Appsmith internally replaces these with question marks (?), translating the queries into prepared statements. See [**Prepared Statements**](/learning-and-resources/how-to-guides/how-to-use-prepared-statements) for more details.

## Row Level Security (RLS)
Row level security is a PostgreSQL security feature provided by the database to limit what rows of a table are visible for querying. It allows database admins define security policies to control how the rows of a given table can be accessed or operated on. Watch the [**video series**](https://youtu.be/8qPTZQvJ9fA) for details on how to use RLS on your apps.


## Troubleshooting

[Missing required parameter](/help-and-support/troubleshooting-guide/action-errors#missing-query-error)<br />
[PostgreSQL query failed to execute](/help-and-support/troubleshooting-guide/action-errors#configuration-error)<br />
[Query preparation failed while inserting value](/help-and-support/troubleshooting-guide/action-errors#invalid-query-error)

If you experience difficulties, contact the support team using the chat widget at the bottom right of this page.

## See also

[Data access and binding](/core-concepts/data-access-and-binding)

