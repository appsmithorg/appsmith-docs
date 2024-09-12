---
sidebar_position: 11
description: Connect Appsmith to a Microsoft SQL Server database and create queries.
---

# Microsoft SQL Server (MS SQL)

This page provides information for connecting your application to your MS SQL database and using queries to manage its content.

Appsmith's backend server supports **TLS1.1** and **TLS1.2** for connecting to endpoints.

## Connect MS SQL

:::caution important
If you are a cloud user, you must whitelist the IP addresses `18.223.74.85` and `3.131.104.27` of the Appsmith deployment on your database instance before connecting to your database.
:::

### Connection parameters

The following section is a reference guide that provides a complete description of all the parameters to connect to a MS SQL database.

<ZoomImage src="/img/mssql-datasource-config.png" alt="Configuring an MS SQL datasource." caption="Configuring an MS SQL datasource." />

#### Connection mode

<dd>Sets which permissions to grant to Appsmith when establishing a connection to the database.</dd><br />
<dd>
  <i>Options:</i>
  <ul>
    <li><b>Read Only:</b> Gives Appsmith read-only permission on the database. Use this mode when you only need to fetch records, not write them.</li>
    <li><b>Read / Write:</b> Gives Appsmith both read and write permissions on the database. This allows you to make changes to your data via all CRUD queries.</li>
  </ul>
</dd>

#### Host Address

<dd>The network location of your MS SQL database. This can be a domain name or an IP address. To connect to a local MS SQL database, see <a href="/connect-data/how-to-guides/how-to-work-with-local-apis-on-appsmith"><b>Connect Local Database</b></a> for directions. </dd>

#### Port

<dd>The port number to connect to on the server. Appsmith connects to port <code>1433</code> by default if you do not specify one.</dd>

#### Database Name

<dd>The name of the database to connect.</dd>

#### Username

<dd>The username that you want to use to authenticate with the database server.</dd>

#### Password

<dd>Password to use if the server demands password authentication.</dd>

#### SSL mode

<dd>Determines whether your queries use an SSL connection to communicate with the database.</dd><br />
<dd>
  <i>Options:</i>
  <ul>
    <li><b>Enabled with no verify:</b> The connection is encrypted but no client verification is done.</li>
    <li><b>Disabled:</b> Disables SSL completely, and all connections are established without encryption.</li>
  </ul>
</dd>

## Query MS SQL

The following section provides examples of creating basic CRUD queries for MS SQL.

<ZoomImage src="/img/mssql-query-config.png" alt="Configuring an MS SQL query." caption="Configuring an MS SQL query." />

:::info
You can query MS SQL databases using T-SQL syntax. Refer to Microsoft's documentation to learn how to [Write Transact-SQL statements](https://learn.microsoft.com/en-us/sql/t-sql/queries/queries?view=sql-server-ver16).
:::

### Fetch data

```sql
SELECT * FROM users
OFFSET {{ UsersTable.pageOffset }} ROWS
FETCH NEXT {{ UsersTable.pageSize }} ROWS ONLY;
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

In the above example,  `NameInput`,  `GenderDropdown`,  and `EmailInput` are the names of the widgets used to capture input from the user for name, gender, and email fields, respectively.

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

## Troubleshooting

If you are experiencing difficulties, you can refer to the [Datasource troubleshooting guide](/help-and-support/troubleshooting-guide/action-errors/datasource-errors) or contact the support team using the chat widget at the bottom right of this page.

## See Also

- [Display and Lookup Data in Table](/build-apps/how-to-guides/display-search-and-filter-table-data) - Learn how to display query results in a Table and enable users to look up data with ease.
- [Search and Filter Table Data](/build-apps/how-to-guides/search-and-filter-table-data) - Guide on adding search and filter functionality to Tables for better data navigation.
- [Update Data](/build-apps/how-to-guides/submit-form-data) - Understand how to update data in your application using Form widget.
- [Insert Data](/build-apps/how-to-guides/insert-data) - Step-by-step instructions on inserting new records into your database using Form widget.
