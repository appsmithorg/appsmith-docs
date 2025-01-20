---
sidebar_position: 15
description: Connect Appsmith to a Redshift database and create queries.
---

# Redshift

This page provides information for connecting Appsmith to a Redshift database and for reading and writing data in your applications.

## Connect Redshift

:::caution 
If you are a cloud user, you must whitelist the IP address of the Appsmith deployment `18.223.74.85` and `3.131.104.27` on your database instance or VPC before connecting to a Redshift database. See Amazon's [**Security Groups**](https://docs.aws.amazon.com/vpc/latest/userguide/security-groups.html) for more details.
:::

## Connection parameters

The following section is a reference guide that provides a complete description of all the parameters to connect to a Redshift database.

<ZoomImage src="/img/redshift-datasource-config.png" alt="Configuring a Redshift datasource." caption="Configuring a Redshift datasource." />

#### Connection Mode

<dd>Determines which permissions your app has when querying the database.</dd><br />
<dd>
  <i>Options:</i>
  <ul>
    <li><b>Read Only:</b> Gives Appsmith read-only permission on the database. This allows you to only fetch data from the database.</li>
    <li><b>Read / Write:</b> Gives Appsmith both read and write permissions on the database. This allows you to execute all CRUD queries.</li>
  </ul>
</dd>

#### Host Address

<dd>The network location of your Redshift database. This can be a domain name or an IP address.</dd>

#### Port

<dd>The port number to connect to on the server. Appsmith connects to port <code>5439</code> by default if you do not specify one.</dd>

#### Database name

<dd>Name of the database you'd like to connect to.</dd>

#### Username

<dd>The username to use to authenticate your queries.</dd>

#### Password

<dd>The password to use to authenticate your queries.</dd>

## Query Redshift

The following section provides examples of creating basic CRUD queries for Redshift.

:::info
For Redshift SQL syntax, see the official [**Redshift SQL Reference**](https://docs.aws.amazon.com/redshift/latest/dg/cm_chap_SQLCommandRef.html).
:::

<ZoomImage src="/img/redshift-query-config.png" alt="Configuring a Redshift query." caption="Configuring a Redshift query." />

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

In the above example,  `NameInput`,  `GenderDropdown`,  and `EmailInput` are the names of the widgets used to capture input from the user for name, gender and email fields, respectively. For more information on how to insert data, see [Insert Data](/build-apps/how-to-guides/insert-data).



### Update data

```sql
UPDATE users
SET email = {{ EmailInput.text }}
WHERE id = {{ UsersTable.selectedRow.id }};
```

In the above example, `EmailInput` is the name of the Input widget used to capture the email entered by the user. `UsersTable` is the Table widget where the user selects the row to update the user's email. For more information on how to update Table data, see [Update Data Guide](/build-apps/how-to-guides/submit-form-data).


### Delete data

```sql
DELETE FROM users WHERE id = {{ UsersTable.selectedRow.id }};
```

In the above example, `UsersTable` is the name of the Table widget where the user selects the row for deletion. For information on how to delete data in a table, see [Delete Data in Table](/reference/widgets/table/inline-editing#delete-row).

## Troubleshooting

If you are experiencing difficulties, you can refer to the [Datasource troubleshooting guide](/help-and-support/troubleshooting-guide/action-errors/datasource-errors) or contact the support team using the chat widget at the bottom right of this page.

## See also

- [Display and Lookup Data in Table](/build-apps/how-to-guides/display-search-and-filter-table-data) - Learn how to display query results in a Table and enable users to look up data with ease.
- [Search and Filter Table Data](/build-apps/how-to-guides/search-and-filter-table-data) - Guide on adding search and filter functionality to Tables for better data navigation.
- [Update Data](/build-apps/how-to-guides/submit-form-data) - Understand how to update data in your application using Form widget.
- [Insert Data](/build-apps/how-to-guides/insert-data) - Step-by-step instructions on inserting new records into your database using Form widget.
