---
sidebar_position: 11
---

# Oracle

This page gives information to connect Appsmith to an Oracle database and to and to read and write data in your applications.

## Connect Oracle

:::caution important
If you are a self-hosted user, you must whitelist the IP addresses 18.223.74.85 and 3.131.104.27 of the Appsmith deployment on your database instance before connecting to a database. See [Managing Internet Protocol Allowlist and Blocklist Rules](https://docs.oracle.com/en/cloud/get-started/subscriptions-cloud/mmocs/managing-internet-protocol-whitelist-and-blacklist-rules.html) for more details.
:::

## Connection parameters

The following section is a reference guide that provides a complete description of all the parameters to connect to an Oracle database.

<figure>
  <img src="/img/oracle-datasource-config.png" style={{width: "100%", height: "auto"}} alt="Configuring an Oracle datasource." />
  <figcaption align="center"><i>Configuring an Oracle datasource.</i></figcaption>
</figure>

<dl>
  <dt><b>Host Address</b></dt>
  <dd>The network location of your Oracle database. This can be a domain name or an IP address. To connect to a local Oracle database, see <a href="/advanced-concepts/more/how-to-work-with-local-apis-on-appsmith"><b>Connect Local Database</b></a> for directions. </dd><br />

  <dt><b>Port</b></dt>
  <dd>The port number to connect to on the server. Appsmith connects to port `1521` by default if you do not specify one.</dd><br />

  <dt><b>Service Name</b></dt>
  <dd>The service name for your database instance. </dd><br />

  <dt><b>Username</b></dt>
  <dd>The username that you want to use to authenticate with the Oracle server.</dd><br />

  <dt><b>Password</b></dt>
  <dd>Password to use if the server demands password authentication.</dd><br />

  <dt><b>SSL Mode</b></dt>
  <dd>Determines whether your queries use an SSL connection to communicate with the database.</dd><br />
  <dd><i>Options:</i>
    <ul>
      <li><b>TLS:</b> Connection is encrypted but no client verification is done.</li>
      <li><b>Disabled:</b> Disables SSL completely, and all connections are established without encryption.</li>
    </ul>
  </dd>
</dl>

## Query Oracle

The following section provides examples of creating basic CRUD queries for Oracle.

:::info
For Oracle SQL syntax, see the official documentation [**Oracle SQL Language Reference**](https://docs.oracle.com/en/database/oracle/oracle-database/21/sqlrf/Basic-Elements-of-Oracle-SQL.html#GUID-41D065C3-3449-4DAE-B2D8-4DF256FFC88A).
:::

### Fetch data

```sql
SELECT * FROM users OFFSET {{ UsersTable.pageOffset }} ROWS FETCH NEXT {{ UsersTable.pageSize }} ROWS ONLY ;
```

In the above example, `UsersTable` is the name of the Table widget used to display the data using [**server-side pagination**](/reference/widgets/table#server-side-pagination) to control how much data is queried at once.

### Insert data

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

### Update data

```sql
UPDATE users
  SET email = '{{EmailInput.text}}'
  WHERE id = {{ UserTable.selectedRow.id}};
```

In the above example, `EmailInput` is the name of the Input widget used to capture the email entered by the user. `UsersTable` is the Table widget where the user selects the row to update the user's email.

### Delete data

```sql
DELETE FROM users WHERE id = {{tableUsers.selectedRow.id}};
```

In the above example, `UsersTable` is the name of the Table widget where the user selects the row for deletion.

## Prepared statements

Appsmith switches on prepared statements in queries by default to help prevent SQL injection attacks. If the query has widget data bindings using the mustache template `{{ }}`, Appsmith internally replaces these with question marks (?), translating the queries into prepared statements. See [**Prepared Statements**](/learning-and-resources/how-to-guides/how-to-use-prepared-statements) for more details.

## See also

[Data access and binding](/core-concepts/data-access-and-binding)
