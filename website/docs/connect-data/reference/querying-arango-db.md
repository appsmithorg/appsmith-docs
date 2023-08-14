---
sidebar_position: 3
description: Connect Appsmith to an ArangoDB database and create queries.
---

# ArangoDB

This page describes how to connect Appsmith to your ArangoDB data and query it from your app.

## Connect ArangoDB

:::caution
If you are a self-hosted user, you must whitelist the IP address ranges `18.223.74.0/24` and `3.131.104.0/24` of the Appsmith deployment on your ArangoDB instance. For more information about whitelisting in ArangoDB, see [the ArangoDB documentation](https://www.arangodb.com/docs/stable/security-security-options.html#endpoint-access).
:::

### Connection parameters

The following is a reference guide that provides a description of the parameters for connecting to ArangoDB.

<figure>
  <img src="/img/Arango_configuration.jpeg" style= {{width:"100%", height:"auto"}} alt="Configuring an ArangoDB datasource."/>
  <figcaption align = "center"><i>Configuring an ArangoDB datasource.</i></figcaption>
</figure>

<dl>
  <dt><b>Host Address</b></dt>
  <dd>The network location of your ArangoDB database. This can be a domain name or an IP address. To connect to a local ArangoDB database, see <a href="/connect-data/how-to-guides/how-to-work-with-local-apis-on-appsmith"><b>Connect Local Database</b></a> for directions. </dd><br />

  <dt><b>Port</b></dt>
  <dd>The port number to connect to on the server. If none is specified, Appsmith attempts to connect to port 8529.</dd><br />

  <dt><b>Database Name</b></dt>
  <dd>The name of your database. </dd><br />

  <dt><b>Authentication</b></dt>
  <dd>The <b>Username</b> and <b>Password</b> for the user with which you are connecting to the database.</dd><br />

  <dt><b>SSL Mode</b></dt>
  <dd>Determines whether your queries use an SSL connection to communicate with the database.</dd><br />
  <dd><i>Options:</i>
    <ul>
        <li><b>Default:</b> The same as Disabled.</li>
        <li><b>Enabled:</b> Only allows an SSL connection.</li>
        <li><b>Disabled:</b> Does not attempt an SSL connection; it uses a plain unencrypted connection.</li>
    </ul>
  </dd>
</dl>

## Query ArangoDB

The following section provides examples of basic CRUD queries for ArangoDB.

<figure>
  <img src="/img/arangodb-query-config.png" style= {{width:"100%", height:"auto"}} alt="Writing an ArangoDB query in the editor."/>
  <figcaption align = "center"><i>Writing an ArangoDB query in the editor.</i></figcaption>
</figure>

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

In the above example, `UsersTable` is the name of the Table widget that displays the data. It is configured to use [**server-side pagination**](/reference/widgets/table#server-side-pagination) to control how much data is queried at once.

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

## See also

[Data access and binding](/core-concepts/data-access-and-binding)

## Troubleshooting

If you are experiencing difficulties, you can refer to the [Datasource troubleshooting guide](/help-and-support/troubleshooting-guide/action-errors/datasource-errors) or contact the support team using the chat widget at the bottom right of this page.