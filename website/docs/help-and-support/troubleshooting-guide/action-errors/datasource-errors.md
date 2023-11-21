# Datasource Errors

Appsmith provides the ability to connect to a variety of datasources, including both databases and APIs. However, when setting up a new datasource or modifying an existing one, you may encounter connectivity errors. This guide aims to help you troubleshoot and resolve common datasource connectivity errors.

## SSL connection error

<Message
messageContainerClassName="error" 
messageContent="dev.miku.r2dbc.mysql.client.MySqlConnectionClosedException: Connection unexpectedly closed. Error was received while reading the incoming data. The connection will be closed."/>

This error message indicates that the database server that you are trying to connect to does not support SSL. This error can be resolved by editing the SSL field in the datasource and setting it to `Disabled`.

## Error connecting to local database or API

If you are trying to connect to a local database from Appsmith and see an error message like:

<Message
messageContainerClassName="error" 
messageContent="Connection refused. Server logs - 'io.netty.channel.AbstractChannel$AnnotatedConnectException: finishConnect(..) failed: Connection refused: /172.17.0.1:3306'"/>

#### Cause

When running Appsmith inside a Docker container, it may have its own network namespace and won't be able to access services running on the host machine using the `localhost` or `127.0.0.1` addresses. This is because these addresses points to the container's local network, which is different from that of the host machine.

#### Solution

Instead, you can use the hostname `host.docker.internal` on Windows and macOS hosts, and `172.17.0.1` on Linux hosts, to access services running on the host machine from within the container.

Learn more about how to [connect to a localhost database / API](/connect-data/how-to-guides/how-to-work-with-local-apis-on-appsmith)

## Secret key required error

<Message
messageContainerClassName="error" 
messageContent="Secret key is required when sending session details is switched on, and should be at least 32 characters in length."/>

This message indicates that `Send Appsmith signature header` field has been marked as `Yes` but the `Session Details Signature Key` field is left empty.

This error can be resolved by filling in the `Session Details Signature Key` field or by disabling the `Send Appsmith signature header` field by selecting `No`.
