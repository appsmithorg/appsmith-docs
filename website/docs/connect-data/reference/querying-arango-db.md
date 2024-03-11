---
sidebar_position: 3
description: Connect Appsmith to an ArangoDB database and create queries.
---

# ArangoDB

This page describes how to connect Appsmith to your ArangoDB data and query it from your app.

## Connect ArangoDB

:::caution
If you are a cloud user, you must whitelist the IP address ranges `18.223.74.0/24` and `3.131.104.0/24` of the Appsmith deployment on your ArangoDB instance. For more information about whitelisting in ArangoDB, see [the ArangoDB documentation](https://www.arangodb.com/docs/stable/security-security-options.html#endpoint-access).
:::

### Connection parameters

The following is a reference guide that provides a description of the parameters for connecting to ArangoDB.

<ZoomImage
  src="/img/Arango_configuration.jpeg" 
  alt="Configure ArangoDB datasource."
  caption="Configure ArangoDB datasource"
/>

#### Host Address

<dd>The network location of your ArangoDB database. This can be a domain name or an IP address. To connect to a local ArangoDB database, see <a href="/connect-data/how-to-guides/how-to-work-with-local-apis-on-appsmith"><b>Connect Local Database</b></a> for directions. </dd>

#### Port

<dd>The port number to connect to on the server. If none is specified, Appsmith attempts to connect to port 8529.</dd>

#### Database Name

<dd>The name of your database. </dd>

#### Authentication

<dd>The <b>Username</b> and <b>Password</b> for the user with which you are connecting to the database.</dd>

#### SSL mode

<dd>Determines whether your queries use an SSL connection to communicate with the database.</dd><br/>
<dd>
    <i>Options:</i>
  <ul>
      <li><b>Default:</b> The same as Disabled.</li>
      <li><b>Enabled:</b> Only allows an SSL connection.</li>
      <li><b>Disabled:</b> Does not attempt an SSL connection; it uses a plain unencrypted connection.</li>
  </ul>
</dd>

## Query ArangoDB

The following section provides examples of basic CRUD queries for ArangoDB.

<ZoomImage
  src="/img/arangodb-query-config.png" 
  alt="Configure an ArangoDB query in the editor."
  caption="Configure an ArangoDB query in the editor"
/>

:::info
For the ArangoDB Query Language (AQL) syntax, see the official [**AQL documentation**](https://www.arangodb.com/docs/stable/aql/).
:::

### Select

```sql
FOR user IN users
FILTER user.role == "admin"
SORT user.id ASC
LIMIT {{ UsersTable.pageOffset }}, {{ UsersTable.pageSize }}
RETURN user
```

In the above example, `UsersTable` is the name of the Table widget that displays the data. It is configured to use [**server-side pagination**](/build-apps/how-to-guides/Server-side-pagination-in-table) to control how much data is queried at once.

### Create

```sql
INSERT {
    name: "{{ NameInput.text }}",
    gender: "{{ GenderDropdown.selectedOptionValue }}",
    email: "{{ EmailInput.text }}",
    role: "{{ RoleSelect.selectedOptionValue }}"
} INTO users
```

In the example above, `NameInput`, `GenderDropdown`, `EmailInput`, and `RoleSelect` are all widgets used to collect user input for the new record.

### Update

```sql
UPDATE
"{{ UsersTable.selectedRow.id }}"
WITH
{
    role: "admin"
}
IN users
```

In the example above, the query uses the `id` of the row selected in the `UsersTable` Table widget to update that record's `role` value.

### Delete

```sql
REMOVE "{{ UsersTable.selectedRow.id }}" IN users
```

In the example above, the query uses the `id` of the row selected in the `UsersTable` Table widget to delete that record.


## Troubleshooting

If you are experiencing difficulties, you can refer to the [Datasource troubleshooting guide](/help-and-support/troubleshooting-guide/action-errors/datasource-errors) or contact the support team using the chat widget at the bottom right of this page.