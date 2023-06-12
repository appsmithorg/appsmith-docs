---
sidebar_position: 14
---
# Redis

:::note
The following document assumes that you understand the [basics of connecting to databases on Appsmith](/core-concepts/connecting-to-data-sources/connecting-to-databases.md#connecting-to-a-database). If not, please go over them before reading further.
:::

## Connection settings

Appsmith needs the following information to connect to a Redis instance.

![Click to expand](/img/redis-datasource-form.png)

After filling up the three fields as described preceding, click the "Test" button to verify the configuration and click `Save`.

## Querying Redis

The Redis query pane can be used to run any of the commands supported by Redis. The response from this command is displayed in the result window. 

### Checking connection

The connection to a Redis instance can be verified using a simple `PING` command.

```
PING
```

### Inserting a key

A new key value pair can be inserted into the cache using the `SET` command as follows.

```
SET key_name new_value
```

### Retrieving a key

Stored key value pairs can be retrieved using the `GET` command.

```
GET key_name
```

## Using queries in applications

Once you have successfully run a Query, you can use it in your application to

* [Display Data](/core-concepts/data-access-and-binding/displaying-data-read/)
* [Capture Data](/core-concepts/data-access-and-binding/capturing-data-write/)
