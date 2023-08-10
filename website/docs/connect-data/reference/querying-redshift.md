---
sidebar_position: 15
description: Connect Appsmith to a Redshift database and create queries.
---

# Redshift

This page provides information for connecting Appsmith to a Redshift database and for reading and writing data in your applications.

## Connect Redshift

:::caution 
You must whitelist the IP address of the Appsmith deployment `18.223.74.85` and `3.131.104.27` on your database instance or VPC before connecting to a Redshift database. See Amazon's [**Security Groups**](https://docs.aws.amazon.com/vpc/latest/userguide/security-groups.html) for more details.
:::

## Connection parameters

The following section is a reference guide that provides a complete description of all the parameters to connect to a Redshift database.

<figure>
  <img src="/img/redshift-datasource-config.png" style={{width: "100%", height: "auto"}} alt="Configuring a Redshift datasource." />
  <figcaption align="center"><i>Configuring a Redshift datasource.</i></figcaption>
</figure>

<dl>
  <dt><b>Connection Mode</b></dt>
  <dd>Determines which permissions your app has when querying the database.</dd><br />
  <dd><i>Options:</i>
    <ul>
      <li><b>Read Only:</b> Gives Appsmith read-only permission on the database. This allows you to only fetch data from the database.</li>
      <li><b>Read / Write:</b> Gives Appsmith both read and write permissions on the database. This allows you to execute all CRUD queries.</li>
    </ul>
  </dd><br/>

  <dt><b>Host Address</b></dt>
  <dd>The network location of your Redshift database. This can be a domain name or an IP address.</dd><br />

  <dt><b>Port</b></dt>
  <dd>The port number to connect to on the server. Appsmith connects to port <code>5439</code> by default if you do not specify one.</dd><br />

  <dt><b>Database name</b></dt>
  <dd>Name of the database you'd like to connect to.</dd><br />

  <dt><b>Username</b></dt>
  <dd>The username to use to authenticate your queries.</dd><br />

  <dt><b>Password</b></dt>
  <dd>The password to use to authenticate your queries.</dd><br />
</dl>

## Query Redshift

The following section provides examples of creating basic CRUD queries for Redshift.

:::info
For Redshift SQL syntax, see the official [**Redshift SQL Reference**](https://docs.aws.amazon.com/redshift/latest/dg/cm_chap_SQLCommandRef.html).
:::

<figure>
  <img src="/img/redshift-query-config.png" style={{width: "100%", height: "auto"}} alt="Configuring a Redshift query." />
  <figcaption align="center"><i>Configuring a Redshift query.</i></figcaption>
</figure>

### Fetch data

```sql
SELECT * FROM users
OFFSET {{ UsersTable.pageOffset }} ROWS
FETCH NEXT {{ UsersTable.pageSize }} ROWS ONLY;
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
SET email = {{ EmailInput.text }}
WHERE id = {{ UsersTable.selectedRow.id }};
```

In the above example, `EmailInput` is the name of the Input widget used to capture the email entered by the user. `UsersTable` is the Table widget where the user selects the row to update the user's email.

### Delete data

```sql
DELETE FROM users WHERE id = {{ UsersTable.selectedRow.id }};
```

In the above example, `UsersTable` is the name of the Table widget where the user selects the row for deletion.

## Troubleshooting

If you are experiencing difficulties, you can refer to the [Datasource troubleshooting guide](/help-and-support/troubleshooting-guide/action-errors/datasource-errors) or contact the support team using the chat widget at the bottom right of this page.