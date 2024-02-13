---
sidebar_position: 12
description: Connect Appsmith to a MySQL database and create queries.
---

# MySQL

This page provides information for connecting your application to your MySQL database and for using queries to manage its content.

Appsmith supports MySQL versions **5.5**, **5.6**, **5.7**, and **8.0**.

## Connect MySQL

:::caution
If you are a cloud user, you should whitelist the IP address of the Appsmith deployment `18.223.74.85` and `3.131.104.27` on your database instance or VPC before connecting to the database.
:::

### Connection parameters

The following section is a reference guide that provides a complete description of all the parameters to connect to a MySQL database.

<ZoomImage src="/img/mysql-datasource-config.png" alt="MySQL Datasource configuration page" caption="Configuring a MySQL query." />

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
