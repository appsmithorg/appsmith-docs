---
sidebar_position: 14
description: Connect Appsmith to a Redis database and create queries.
---
# Redis

This page provides information for connecting your application to your Redis database and using queries to manage its content.

## Connect Redis

:::caution 
Appsmith does not support connection to Redis using TLS. If you are a cloud user, you should whitelist the IP address of the Appsmith deployment `18.223.74.85` and `3.131.104.27` on your database instance or VPC before connecting to a database. If you're using Redis Cloud, you can see [**Configure CIDR allow list**](https://docs.redis.com/latest/rc/security/cidr-whitelist/) for more details.
:::

### Connection parameters

The following section is a reference guide that provides a complete description of all the parameters to connect to a Redis database.

<ZoomImage src="/img/redis-datasource-config.png" alt="Configuring a Redis datasource." caption="Configuring a Redis datasource." />

#### Host Address

<dd>The network location of your Redis database. This can be a domain name or an IP address.</dd>

#### Port

<dd>The port number to connect to on the server. Appsmith connects to port <code>6379</code> by default if you do not specify one.</dd>

#### Database Number

<dd>The number that identifies which database on your Redis instance you're connecting to. This is a number between 0 and 15, and is 0 by default.</dd>

#### Username

<dd>The username for your Redis user.</dd>

#### Password

<dd>The password for your Redis user.</dd>

## Query Redis

The following section provides examples of creating basic CRUD queries for Redis.

<ZoomImage src="/img/redis-query-config.png" alt="Configuring a Redis query." caption="Configuring a Redis query." />

:::info
See the [Redis documentation](https://redis.io/commands/) for a full list of Redis commands and how to use them.
:::

### Fetch data

```sql
HGETALL {{ SearchInput.text }}
```

In the above example, `SearchInput` is the name of an [Input widget](/reference/widgets/input) being used to collect a user's search term and send it in the query. The `HGETALL` command returns all keys and values of a Redis hash with a matching name if it exists.

To store a single key not in a hash, use `GET`:

```sql
GET {{ SearchInput.text }}
```

For more information on how to fetch paginated data, see [Setup Server-Side Pagination on Table](/build-apps/how-to-guides/Server-side-pagination-in-table).

### Insert data

```sql 
HSET user:{{ EmailInput.text }} username {{ UsernameInput.text }} gender {{ GenderDropdown.selectedOptionVaue }}
```

In the above example, `EmailInput`, `UsernameInput`, and `GenderDropdown` are the names of [Input](/reference/widgets/input) and [Select](/reference/widgets/select) widgets being used to collect user input and send it in the query to create a Redis hash.

To insert a single key/value pair not in a hash, use `SET`:

```sql
SET username {{ UsernameInput.text }}
```

For more information on how to insert data, see [Insert Data](/build-apps/how-to-guides/insert-data).


### Update data

See [Insert data](#insert-data) above, as the syntax is identical using the `HSET` and `SET` commands. For more information on how to update Table data, see [Update Data Guide](/build-apps/how-to-guides/submit-form-data).


### Delete data

```sql
HDEL user:{{ EmailInput.text }} {{ FieldDropdown.selectedOptionValue }}
```

In the above example, `EmailInput` and `FieldDropdown` are the names of [Input](/reference/widgets/input) and [Select](/reference/widgets/select) widgets being used to collect user input that identifies which field of a given Redis hash to delete, and to send them in the query.

To delete the entire Redis hash or a single key/value pair, use `DEL`:

```sql
DEL user:{{ EmailInput.text }}
```

For information on how to delete data in a Table, see [Delete Data in Table](/reference/widgets/table/inline-editing#delete-row).

## Troubleshooting

If you are experiencing difficulties, you can refer to the [Datasource troubleshooting guide](/help-and-support/troubleshooting-guide/action-errors/datasource-errors) or contact the support team using the chat widget at the bottom right of this page.

## See also

- [Display and Lookup Data in Table](/build-apps/how-to-guides/display-search-and-filter-table-data) - Learn how to display query results in a Table and enable users to look up data with ease.
- [Search and Filter Table Data](/build-apps/how-to-guides/search-and-filter-table-data) - Guide on adding search and filter functionality to Tables for better data navigation.
- [Update Data](/build-apps/how-to-guides/submit-form-data) - Understand how to update data in your application using Form widget.
- [Insert Data](/build-apps/how-to-guides/insert-data) - Step-by-step instructions on inserting new records into your database using Form widget.
