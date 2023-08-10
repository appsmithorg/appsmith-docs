---
sidebar_position: 13
description: Connect Appsmith to a PostgreSQL database and create queries.
---
# PostgreSQL

This page gives information to connect Appsmith to a PostgreSQL database and to read and write data in your applications.

## Connect PostgreSQL

:::caution 
If you are a self-hosted user, you must configure the `pg_hba.conf` file to whitelist the IP addresses `18.223.74.85` and `3.131.104.27` of the Appsmith deployment on your database instance before connecting to a database. See [**Client Authentication**](https://www.postgresql.org/docs/current/auth-pg-hba-conf.html) for more details.
:::

### Connection parameters

The following section is a reference guide that provides a complete description of all the parameters to connect to a PostgreSQL database.

<figure>
  <img src="/img/postgres-img.png" style= {{width:"100%", height:"auto"}} alt="Connect PostgreSQL Database"/>
  <figcaption align = "center"><i>Connect PostgreSQL Database</i></figcaption>
</figure>

<dl>
  <dt><b>Connection Mode</b></dt>
  <dd> Specifies the mode in which the Appsmith application can interact with the database. </dd><br />
  <dd><i>Options:</i>
    <ul>
     <li><b>Read Only:</b> This mode permits read-only transactions by default.</li>
     <li><b>Read/Write:</b> This mode permits both read-write transactions by default.</li>
    </ul>
  </dd>  

  <dt><b>Host Address</b></dt>
  <dd>The network location of the PostgreSQL server that you want to connect. This can be a domain name or an IP address. To connect to a local PostgreSQL database, see <a href="/connect-data/how-to-guides/how-to-work-with-local-apis-on-appsmith"><b>Connect Local Database</b></a> for directions on configuring the connection parameters. </dd><br />

  <dt><b>Port</b></dt>
  <dd>The port number to connect to at the server host. Appsmith connects to port <code>5432</code> by default if you do not specify one. </dd><br />

  <dt><b>Database Name</b></dt>
  <dd>The name of the database you want to connect. </dd><br />

  <dt><b>Username</b></dt>
  <dd>The username that you want to use to authenticate with the PostgreSQL server.</dd><br />

  <dt><b>Password</b></dt>
  <dd>Password to use if the server demands password authentication.</dd><br />

  <dt><b>SSL Mode</b></dt>
  <dd>Determines with what priority a secure SSL TCP/IP connection is negotiated with the server.</dd><br />
  <dd><i>Options:</i>
    <ul>
     <li><b>Default:</b> The default SSL Mode is <b>Prefer</b>.</li>
     <li><b>Allow:</b> First try a non-SSL connection; if that fails, try an SSL connection. The client can connect with or without SSL.</li>
     <li><b>Prefer:</b> First try an SSL connection; if that fails, try a non-SSL connection. The client tries to connect with SSL but falls back to an unencrypted connection if SSL is unavailable.</li>
     <li><b>Require:</b> Only try an SSL connection. Rejects the connection if SSL is not available.</li>
     <li><b>Disable:</b> Only try a non-SSL connection. Disallows all administrative requests over HTTPS. It uses a plain unencrypted connection.</li>
    </ul>
  </dd>  
  <dd>For more information, see <a href="https://www.postgresql.org/docs/current/libpq-ssl.html"><b>SSL Support</b></a>.</dd>
</dl>


## Query PostgreSQL

The following section provides examples of creating basic CRUD queries on PostgreSQL.

<figure>
  <img src="/img/query-postgresql.png" style= {{width:"100%", height:"auto"}} alt="Write SQL commands in the query editor"/>
  <figcaption align = "center"><i>Write SQL commands in the query editor</i></figcaption>
</figure>


:::info
For the SQL syntax, see the official [**PostgreSQL documentation**](https://www.postgresql.org/docs/12/index.html).
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

In the above example, `tableUsers` is the name of the Table widget where the user selects the row for deletion.

:::info
Prepared statements are turned on by default in your queries to help prevent SQL injection attacks. For more details, see [**Prepared Statements**](/connect-data/concepts/how-to-use-prepared-statements).
:::

## Row Level Security (RLS)
Row level security is a PostgreSQL security feature the database provides to limit what table rows are visible for querying. It allows the database admins to define security policies to control how the rows of a given table can be accessed or modified. Watch the [**video series**](https://youtu.be/8qPTZQvJ9fA) for details on using RLS on your apps.

## Troubleshooting

If you're experiencing difficulties, you can refer to to the [Datasource troubleshooting guide](/help-and-support/troubleshooting-guide/action-errors/datasource-errors), or guides for errors like:

* [Missing required parameter](/help-and-support/troubleshooting-guide/action-errors#missing-query-error)
* [PostgreSQL query failed to execute](/help-and-support/troubleshooting-guide/action-errors#configuration-error)
* [Query preparation failed while inserting value](/help-and-support/troubleshooting-guide/action-errors#invalid-query-error)

If you still have trouble, you can contact the support team using the chat widget at the bottom right of this page.
