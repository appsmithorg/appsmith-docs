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

## Malformed request error

<Message  
  messageContainerClassName="error"  
  messageContent="malformed request"  
/>

This message appears when authorizing a Google Sheets datasource with selected sheet access on a self-hosted Appsmith instance.

#### Cause

This issue occurs when the self-hosted Appsmith instance is not configured with SSL (HTTPS).

Google’s File Picker API requires a secure connection to return the selected sheet identifiers. In the absence of HTTPS, the request to the file picker fails, resulting in a malformed request error. As a fallback, Appsmith proceeds to authorize access to all sheets, even if only specific sheets were selected during the authorization flow.


#### Solution

To resolve this issue, ensure that your self-hosted Appsmith instance is configured to use HTTPS by setting up a custom domain and installing an SSL certificate.

See how to [Configure a custom domain and SSL certificate](/getting-started/setup/instance-configuration/custom-domain).

Once HTTPS is enabled, the Google File Picker will function correctly, and access will be granted only to the selected sheets as expected.

## Cloud datasource connection fails or disconnects (IP whitelisting)

<Message
messageContainerClassName="error" 
messageContent="Failed to load the datasource."/>

#### Cause

When using Appsmith Cloud, the platform connects to your database from a fixed set of Appsmith deployment IP addresses. If those IPs are not allowed on your database instance, VPC, or firewall, connections are refused or drop intermittently. This commonly affects managed databases where access is IP-restricted.

#### Solution

- Whitelist the Appsmith Cloud deployment IP addresses `18.223.74.85` and `3.131.104.27` on your database instance, security group, or VPC.
- For pooled Postgres providers, connect using the **session pooler** connection method rather than transaction pooling.
- To isolate whether the problem is on Appsmith's side or the database's, try connecting with an external client such as DBeaver using the same credentials.
- See the reference for your datasource (for example, [Connect to PostgreSQL](/connect-data/reference/querying-postgres) or [Connect to Amazon S3](/connect-data/reference/querying-amazon-s3)) for the exact whitelisting steps.

## Too many connections / connection pool limit reached

#### Cause

By default, each Appsmith instance uses a connection pool limit of **5** connections per datasource. On databases with a low maximum-connections setting, multiple apps or instances can together approach the database's connection limit.

#### Solution

- The default pool limit of `5` works for most use cases. On paid (Business) plans you can adjust the pool size in the **Admin Settings** of your instance. See [Connection Pooling in Appsmith](/connect-data/concepts/connection-pooling).
- If queries against a single datasource intermittently fail under load, restarting the affected instance or pods can clear connections left in a bad state.

## SSH private key not accepted (key format)

#### Cause

When connecting to a database over an SSH tunnel, Appsmith accepts the private key only in **PEM RSA** format. Keys in the newer OpenSSH key format are not accepted and the connection fails.

#### Solution

- Generate or convert your private key to the PEM RSA format and upload that file in the datasource configuration.

## Snowflake key-pair authentication option not visible

#### Cause

Snowflake key-pair (RSA) authentication may not appear as an option on every instance.

#### Solution

- Once available, select the key-pair option and upload your private key. The private key must be in a supported PEM format. See [Connect to Snowflake — Key Pair authentication](/connect-data/reference/querying-snowflake-db).
- If you do not see the option to switch to key-pair authentication for Snowflake, contact Appsmith support to have it enabled for your instance.

## Snowflake query returns a different number than Appsmith

#### Cause

Snowflake handles full 64-bit integers, but Appsmith evaluates values internally with JavaScript. Numbers that exceed JavaScript's safe integer precision range are rounded, so a large integer can appear different in Appsmith than in Snowflake.

#### Solution

- Treat large numbers as strings. In the query, cast them, for example `SELECT TO_VARCHAR(8714031664424933984)`.
- In JS code, wrap such values in quotes, for example `const id = "8714031664424933984"`.

## File upload to S3 fails or uploads an empty object (large files)

#### Cause

Uploading larger files takes longer to complete. If the upload exceeds the query timeout, it can fail and sometimes leave an empty object in the bucket.

#### Solution

- Increase the **Query timeout** in the query's **Settings** tab (for example, to `60000` ms) and retry. See [Query settings](/connect-data/reference/query-settings).
- The maximum configurable query timeout is `60000` ms (60 seconds). On self-hosted instances you can raise the server-level limit beyond 60 seconds with the `APPSMITH_SERVER_TIMEOUT` environment variable.
- When uploading via the FilePicker widget, set the FilePicker's **Data format** to `Base64`. See how to [upload files to S3](/connect-data/reference/querying-amazon-s3).

## Uploading an SSL CA certificate for a datasource is not supported

#### Cause

Appsmith does not currently support uploading a custom SSL CA certificate (for example, a self-signed CA) for MySQL datasources.

#### Solution

- This is not available at this juncture. If the database server does not support SSL, set the datasource's **SSL** field to `Disabled`.
- This capability is tracked as a feature request; add your use case to [appsmith issue #33194](https://github.com/appsmithorg/appsmith/issues/33194) to help prioritize it.






