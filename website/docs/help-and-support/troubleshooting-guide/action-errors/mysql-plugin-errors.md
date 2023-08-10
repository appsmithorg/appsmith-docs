---
sidebar_position: 3
---
# MySQL Errors

```
dev.miku.r2dbc.mysql.client.MySqlConnectionException
```

```
dev.miku.r2dbc.mysql.client.MySqlConnectionClosedException: Connection unexpectedly closed
```

```
Error was received while reading the incoming data. The connection will be closed.
```

This error message indicates that the [MySQL](../../../connect-data/reference/querying-mysql.md) server that you are trying to connect to does not support SSL. This error can be resolved by editing the SSL field in the [datasource ](../../../connect-data/reference/)configuration form and setting it to `Disabled`.
