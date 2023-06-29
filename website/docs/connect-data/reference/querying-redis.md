---
sidebar_position: 14
description: Connect Appsmith to a Redis database and create queries.
---
# Redis

This page provides information for connecting your application to your Redis database and using queries to manage its content.

## Connect Redis

:::caution important
To connect to Redis, you must whitelist the IP addresses 18.223.74.85 and 3.131.104.27 of the Appsmith Cloud or the IPs of your self-hosted Appsmith deployment.
:::

### Connection parameters

The following section is a reference guide that provides a complete description of all the parameters to connect to a Redis database.

<figure>
  <img src="/img/redis-datasource-config.png" style={{width: "100%", height: "auto"}} alt="Configuring a Redis datasource." />
  <figcaption align="center"><i>Configuring a Redis datasource.</i></figcaption>
</figure>

<dl>
  <dt><b>Host Address</b></dt>
  <dd>The network location of your Redis database. This can be a domain name or an IP address.</dd><br />

  <dt><b>Port</b></dt>
  <dd>The port number to connect to on the server. Appsmith connects to port <code>6379</code> by default if you do not specify one.</dd><br />

  <dt><b>Database Number</b></dt>
  <dd>The number that identifies which database on your Redis instance you're connecting to. This is a number between 0 and 15, and is 0 by default.</dd><br />

  <dt><b>Username</b></dt>
  <dd>The username for your Redis user.
  </dd><br />

  <dt><b>Password</b></dt>
  <dd>The password for your Redis user.
  </dd><br />
</dl>

## Query Redis

The following section provides examples of creating basic CRUD queries for Redis.

### Insert data

A new key value pair can be inserted into the cache using the `SET` command as follows.

```
SET key_name new_value
```

### Fetch data

Stored key value pairs can be retrieved using the `GET` command.

```
GET key_name
```

### Update data



### Delete data
