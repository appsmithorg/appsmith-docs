# MySQL Errors

```text
dev.miku.r2dbc.mysql.client.MySqlConnectionException
```

```text
dev.miku.r2dbc.mysql.client.MySqlConnectionClosedException: Connection unexpectedly closed
```

```text
Error was received while reading the incoming data. The connection will be closed.
```

This error message indicates that the MySQL server that you are trying to connect to does not support SSL. This error can be resolved by editing the SSL field in the data source configuration form and setting it to `Disabled`.

