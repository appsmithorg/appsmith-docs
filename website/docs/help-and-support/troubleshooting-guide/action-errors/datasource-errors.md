---
sidebar_position: 1
---
# Datasource Errors

![Click to expand](/img/missing-endpoint-error.png)

Following is the list of errors users often see while creating new datasources:

* Missing endpoint
* Missing endpoints
* Missing host for endpoint
* Missing endpoint and URL
* Missing hostname
* No endpoints configured

These messages indicate that the `Host address` field in the [datasource creation form](/core-concepts/connecting-to-data-sources/connecting-to-databases.md) has been left empty. This error can be fixed by editing the [datasource creation form](../../../core-concepts/connecting-to-data-sources/connecting-to-databases.md) and typing in the host address for the datasource.

### Invalid host error

```
Invalid host provided. It should be of the form http(s)://your-es-url.com
```

This message indicates that the provided URL format isn't correct. This error can be fixed by editing the [datasource creation form](/core-concepts/connecting-to-data-sources/connecting-to-databases) and providing the host URL in the correct format.

### Missing port error

```
Missing port for endpoint
```

This message indicates that the `Port` field in the [datasource creation form](/core-concepts/connecting-to-data-sources/connecting-to-databases) has been left empty.

This error can be fixed by editing the [datasource creation form](/core-concepts/connecting-to-data-sources/connecting-to-databases) and typing in the port address for the datasource.

### Missing username error

```
Missing username for authentication
```

This message indicates that the `Username` field in the [datasource creation form](../../../core-concepts/connecting-to-data-sources/connecting-to-databases.md) has been left empty. The `Username` field is usually nested inside the `Authentication` subsection.

This error can be fixed by editing the `Username` field in the [datasource creation form](../../../core-concepts/connecting-to-data-sources/connecting-to-databases.md).

### Missing password error

```
Missing password for authentication
```

This message indicates that the `Password` field in the [datasource creation form](../../../core-concepts/connecting-to-data-sources/connecting-to-databases.md) has been left empty. The `Password` field is usually nested inside the `Authentication` subsection.

This error can be fixed by editing the `Password` field in the [datasource creation form](../../../core-concepts/connecting-to-data-sources/connecting-to-databases.md).

### Mandatory parameter / field empty error

```
The mandatory parameter 'Access Key' is empty.
```

```
At least one of the mandatory fields in the plugin's datasource creation form is empty
```

This message indicates that one of the mandatory fields, for example, `Access Key`, has been left empty in the [datasource creation form](../../../core-concepts/connecting-to-data-sources/connecting-to-databases.md).

This error can be fixed by filling the mentioned mandatory fields in the [datasource creation form](../../../core-concepts/connecting-to-data-sources/connecting-to-databases.md).

### Can't delete datasource error

```
Cannot delete datasource since it has 1 action(s) using it.
```

This message indicates that the [datasource](/reference/datasources/) attempting to be deleted has some query action configured on it.

This error can be fixed by deleting any queries dependent on this [datasource](/reference/datasources/) before attempting to delete the [datasource](../../../reference/datasources/).

### Error connecting to local DB or API

If you are trying to connect to a local database from Appsmith and see an error message like:

#### Error message

<Message
messageContainerClassName="error" 
messageContent="Connection refused"></Message>

<Message
messageContainerClassName="error" 
messageContent="Server logs - 'io.netty.channel.AbstractChannel$AnnotatedConnectException: finishConnect(..) failed: Connection refused: /172.17.0.1:3306'"></Message>

#### Cause

When running Appsmith inside a Docker container, it may have its own network namespace and won't be able to access services running on the host machine using the `localhost` or `127.0.0.1` addresses. This is because these addresses points to the container's local network, which is different from that of the host machine.

#### Solution
Instead, you can use the hostname `host.docker.internal` on Windows and macOS hosts, and `172.17.0.1` on Linux hosts, to access services running on the host machine from within the container. This allows the container to access the MySQL server running on the host.

In particular, if you are connecting to a MySQL server (or similar SQL server), make sure that it's configured to bind to `0.0.0.0`. This allows connections from any host, including other devices on the same network. This may or may not be desirable, depending on your security requirements.

If you continue to experience problems with building in Appsmith, it's a good idea to check the backend logs from the `stacks/logs/backend/backend.log` file for any error messages or other information that might help troubleshoot the issue.

Learn more about how to [connect to a localhost database / API](https://docs.appsmith.com/advanced-concepts/more/how-to-work-with-local-apis-on-appsmith)
