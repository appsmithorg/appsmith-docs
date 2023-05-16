---
sidebar_position: 11
---

# Oracle

This page describes how to connect your application to your Oracle databases and use queries to manage its content.

## Connection parameters

The following is a reference guide that provides a description of the parameters for connecting to an Oracle database.


<figure>
  <img src="/img/oracle-datasource-config.png" style={{width: "100%", height: "auto"}} alt="Configuring an Oracle datasource." />
  <figcaption align="center"><i>Configuring an Oracle datasource.</i></figcaption>
</figure>

:::tip
If you want to connect to a locally hosted database, you can use a service like ngrok to expose it. For more information, see [How to connect to local database on Appsmith](/advanced-concepts/more/how-to-work-with-local-apis-on-appsmith).
:::

<dl>
  <dt><b>Host Address</b></dt>
  <dd>The network location of your Oracle database. This can be a domain name or an IP address. To connect to a local Oracle database, see <a href="/advanced-concepts/more/how-to-work-with-local-apis-on-appsmith"><b>Connect Local Database</b></a> for directions. </dd><br />

  <dt><b>Port</b></dt>
  <dd>The port number to connect to on the server. </dd><br />

  <dt><b>Service Name</b></dt>
  <dd>The service name for your database instance. </dd><br />

  <dt><b>Authentication</b></dt>
  <dd>The <b>Username</b> and <b>Password</b> for the user with which you are connecting to the database.</dd><br />

  <dt><b>SSL Mode</b></dt>
  <dd>Determines whether your queries use an SSL connection to communicate with the database.</dd><br />
  <dd><i>Options:</i>
    <ul>
      <li><b>TLS:</b> Appsmith attempts to connect using TLS.</li>
      <li><b>Disabled:</b> Appsmith won't attempt any sort of SSL connection.</li>
    </ul>
  </dd>
</dl>

:::caution important
If you are a self-hosted user, you may need to whitelist the IP address of the Appsmith deployment on your database instance or VPC before connecting to a database.

18.223.74.85 and 3.131.104.27 are the IP addresses of the Appsmith cloud instances that need to be whitelisted.
:::

## Query Oracle

The following section provides examples of creating basic CRUD queries for Oracle.

:::info
For reference on Oracle's flavor of SQL syntax, see the official [**Oracle SQL documentation**](https://docs.oracle.com/en/database/oracle/oracle-database/21/sqlrf/Basic-Elements-of-Oracle-SQL.html#GUID-41D065C3-3449-4DAE-B2D8-4DF256FFC88A).
:::

### Select

```sql
SELECT * FROM users OFFSET {{ UsersTable.pageOffset }} ROWS FETCH NEXT {{ UsersTable.pageSize }} ROWS ONLY ;
```

In the above example, `UsersTable` is the name of the Table widget used to display the data using [**server-side pagination**](/reference/widgets/table#server-side-pagination) to control how much data is queried at once.

### Insert

```sql
INSERT INTO users
  (name, gender, email)
VALUES
(
  {{ NameInput.text }},
  {{ GenderDropdown.selectedOptionValue }},
  {{ EmailInput.text }}
);
```

In the above example,  `NameInput`,  `GenderDropdown`,  and `EmailInput` are the names of the widgets used to capture input from the user for name, gender and email fields, respectively.

### Update

```sql
UPDATE users
  SET email = '{{EmailInput.text}}'
  WHERE id = {{ UserTable.selectedRow.id}};
```

In the above example, `EmailInput` is the name of the Input widget used to capture the email entered by the user. `UsersTable` is the Table widget where the user selects the row to update the user's email.

### Delete

```sql
DELETE FROM users WHERE id = {{tableUsers.selectedRow.id}};
```

In the above example, `UsersTable` is the name of the Table widget where the user selects the row for deletion.

## Prepared statements

Appsmith switches on prepared statements in queries by default to help prevent SQL injection attacks. If the query has widget data bindings using the mustache template `{{ }}`, Appsmith internally replaces these with question marks (?), translating the queries into prepared statements. See [**Prepared Statements**](/learning-and-resources/how-to-guides/how-to-use-prepared-statements) for more details.

## See also

[Data access and binding](/core-concepts/data-access-and-binding)
