---
sidebar_position: 12
description: Connect Appsmith to a MySQL database and create queries.
---

# MySQL

This page provides information for connecting your application to your MySQL database and for using queries to manage its content.

Appsmith supports MySQL versions **5.5**, **5.6**, **5.7**, and **8.0**.

## Connect MySQL

:::caution
To connect to MySQL, you should whitelist the IP address of the Appsmith deployment `18.223.74.85` and `3.131.104.27` on your database instance or VPC before connecting to the database.
:::

### Connection parameters

The following section is a reference guide that provides a complete description of all the parameters to connect to a MySQL database.

<figure>
  <img src="/img/mysql-datasource-config.png" style= {{width:"100%", height:"auto"}} alt="MySQL Datasource configuration page"/>
  <figcaption align = "center"><i>MySQL Datasource configuration page</i></figcaption>
</figure>

#### Connection method

<dd>Sets the method used to connect to the database.</dd>
<dd>
  <i>Options:</i>
  <ul>
    <li><b>Standard:</b> Connect to the database using host address, username and 
password. Use this method if the MySQL database is directly accessible at an IP address or if you are unsure of which method to use.</li>
    <li><b>SSH tunnel:</b> Connect over an SSH connection. This allows you to connect to a database instance which is 
hidden or secured behind an SSH server.</li>
  </ul>
</dd>

#### Connection mode

<dd>Sets which permissions to grant to Appsmith when establishing a connection to the database.</dd>
<dd>
  <i>Options:</i>
  <ul>
    <li><b>Read Only:</b> Gives Appsmith read-only permission on the database. Use this mode when you only need to fetch records, not write them.</li>
    <li><b>Read / Write:</b> Gives Appsmith both read and write permissions on the database. This allows you to make changes to your data via all CRUD queries.</li>
  </ul>
</dd>

#### MySQL host address

<dd>The network location of your MySQL database. This could be a domain or IP address. For a guide about connecting to a local MySQL database, see <a href="/connect-data/how-to-guides/how-to-work-with-local-apis-on-appsmith"><b>Connect Local Database</b></a>.</dd>

#### MySQL port

<dd>The port number to connect to on the server. Appsmith connects to port <code>3306</code> by default if you do not specify one.</dd>

#### Database name

<dd>The name of the database to connect.</dd>

#### MySQL username

<dd>The username for your MySQL user.</dd>

#### MySQL password

<dd>The password for your MySQL user.</dd>

#### SSH host address

<dd>This field is only required if you have selected <b>SSH tunnel</b> as the <b>Connection mode</b>. It is the IP address of the remote SSH server you want to connect to. </dd>

#### SSH port

<dd>This field is only required if you have selected <b>SSH tunnel</b> as the <b>Connection mode</b>. It is the port number of the remote SSH server you want to connect to. Connects to port <code>22</code> by default if left empty. </dd>

#### SSH username

<dd>This field is only required if you have selected <b>SSH tunnel</b> as the <b>Connection mode</b>. It is the username of your SSH account.</dd>

#### SSH Key

<dd>This field is only required if you have selected <b>SSH tunnel</b> as the <b>Connection mode</b>. Upload the SSH key file. Current supported formats: `pem`, `pkcs5`, `pkcs8`.</dd>

#### SSL mode

<dd>Determines whether your queries use an SSL connection to communicate with the database.</dd>
<dd>
  <i>Options:</i>
  <ul>
    <li><b>Default:</b> SSL is used if the server supports it.</li>
    <li><b>Required:</b> The connection is rejected if SSL isn't available.</li>
    <li><b>Disabled:</b> Disallows all administrative requests over HTTPS. It uses a plain unencrypted connection.</li>
  </ul>
</dd>

#### Server Timezone Override

<dd>Sets a custom timezone, which is useful if Appsmith doesn't automatically recognize the MySQL server's timezone. Expects a valid timezone string (For example: <code>UTC</code>) to use for your queries.</dd>

## Create queries

The following section provides examples of creating basic CRUD queries for MySQL.

<figure>
  <img src="/img/mysql-query-config.png" style={{width: "100%", height: "auto"}} alt="Configuring a MySQL query." />
  <figcaption align="center"><i>Configuring a MySQL query.</i></figcaption>
</figure>

:::info
MySQL databases are queried using standard SQL syntax. For a language reference, see MySQL's [Language Structure](https://dev.mysql.com/doc/refman/8.0/en/language-structure.html).
:::

### Fetch data

```sql
SELECT * FROM users LIMIT {{ UsersTable.pageSize }} OFFSET {{ UsersTable.pageOffset }};
```

In the above example, `UsersTable` is the name of the Table widget used to display the data using [**server-side pagination**](/build-apps/how-to-guides/Server-side-pagination-in-table) to control how much data is queried at once.

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

In the above example,  `NameInput`,  `GenderDropdown`, and `EmailInput` are the names of the widgets used to capture input from the user for name, gender, and email fields, respectively.

### Update data

```sql
UPDATE users
  SET email = {{ EmailInput.text }}
  WHERE id = {{ UsersTable.selectedRow.id }};
```

In the above example, `EmailInput` is the name of the Input widget used to capture the email entered by the user. `UsersTable` is the Table widget where the user selects the row to update the user's email.

### Delete data

```sql
DELETE FROM users WHERE id = {{ UsersTable.selectedRow.id }};
```

In the above example, `UsersTable` is the name of the Table widget where the user selects the row for deletion.

:::info
Prepared statements are turned on by default in your queries to help prevent SQL injection attacks. For more details, see [**Prepared Statements**](/connect-data/concepts/how-to-use-prepared-statements).
:::

## SQL modes

`SQL_MODE` is a system variable in MySQL that can:

- Configure the server's strictness when accepting input data,
- Adjust syntax to conform more closely to standard SQL,
- Provide better compatibility with other databases.

In particular, [strict mode](https://dev.mysql.com/doc/refman/8.0/en/sql-mode.html#sql-mode-strict) can help you ensure the integrity of your data by preventing the database from automatically inserting default values for missing or invalid data.

For more information, see the docs for MySQL's [SQL Modes](https://dev.mysql.com/doc/refman/8.0/en/sql-mode.html).

## Troubleshooting

If you are experiencing difficulties, you can refer to the [Troubleshooting guide](/help-and-support/troubleshooting-guide/application-errors), or contact the support team using the chat widget at the bottom right of this page.
