---
sidebar_position: 14
description: Connect Appsmith to a Redis database and create queries.
---
# Redis

This page provides information for connecting your application to your Redis database and using queries to manage its content.

## Connect Redis

:::caution 
To connect to Redis, you should whitelist the IP address of the Appsmith deployment `18.223.74.85` and `3.131.104.27` on your database instance or VPC before connecting to a database. If you're using Redis Cloud, you can see [**Configure CIDR allow list**](https://docs.redis.com/latest/rc/security/cidr-whitelist/) for more details.
:::

### Connection parameters

The following section is a reference guide that provides a complete description of all the parameters to connect to a Redis database.

<figure>
  <img src="/img/redis-datasource-config.png" style={{width: "100%", height: "auto"}} alt="Configuring a Redis datasource." />
  <figcaption align="center"><i>Configuring a Redis datasource.</i></figcaption>
</figure>

#### Host Address

<dd>The network location of your Redis database. This can be a domain name or an IP address.</dd>

#### Port

<dd>The port number to connect to on the server. Appsmith connects to port <code>6379</code> by default if you do not specify one.</dd>

#### Database Number

<dd>The number that identifies which database on your Redis instance you're connecting to. This is a number between 0 and 15, and is 0 by default.</dd>

#### Username

<dd>The username for your Redis user.
</dd>

#### Password

<dd>The password for your Redis user.
</dd>

## Query Redis

The following section provides examples of creating basic CRUD queries for Redis.

<figure>
  <img src="/img/redis-query-config.png" style={{width: "100%", height: "auto"}} alt="Configuring a Redis query." />
  <figcaption align="center"><i>Configuring a Redis query.</i></figcaption>
</figure>

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

### Insert data

```sql 
HSET user:{{ EmailInput.text }} username {{ UsernameInput.text }} gender {{ GenderDropdown.selectedOptionVaue }}
```

In the above example, `EmailInput`, `UsernameInput`, and `GenderDropdown` are the names of [Input](/reference/widgets/input) and [Select](/reference/widgets/select) widgets being used to collect user input and send it in the query to create a Redis hash.

To insert a single key/value pair not in a hash, use `SET`:

```sql
SET username {{ UsernameInput.text }}
```

### Update data

See [Insert data](#insert-data) above, as the syntax is identical using the `HSET` and `SET` commands.

### Delete data

```sql
HDEL user:{{ EmailInput.text }} {{ FieldDropdown.selectedOptionValue }}
```

In the above example, `EmailInput` and `FieldDropdown` are the names of [Input](/reference/widgets/input) and [Select](/reference/widgets/select) widgets being used to collect user input that identifies which field of a given Redis hash to delete, and to send them in the query.

To delete the entire Redis hash or a single key/value pair, use `DEL`:

```sql
DEL user:{{ EmailInput.text }}
```

## Troubleshooting

If you are experiencing difficulties, you can refer to the [Datasource troubleshooting guide](/help-and-support/troubleshooting-guide/action-errors/datasource-errors) or contact the support team using the chat widget at the bottom right of this page.