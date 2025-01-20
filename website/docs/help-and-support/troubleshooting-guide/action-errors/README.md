---
description: The page provides information on common query errors and how to resolve them on Appsmith.
---
# Query Errors

This page provides information on common query errors and how to resolve them on Appsmith.

## Timeout error

<Message
 messageContainerClassName="error"
messageContent="Timed out on query execution"></Message>

#### Cause

Your API or database queries may time out due to one of the following reasons:

- The API or database is behind a VPC that is not accessible from the Appsmith instance.
- The API or query is taking too long to respond.

#### Solution

Apply the following resolutions to fix timeout errors:

- **Server-side pagination**: Allows you to manage and display large datasets within your application. It involves fetching and displaying a small set of data from the server at a time, improving performance. For more information, see [Server-side pagination](/build-apps/how-to-guides/Server-side-pagination-in-table).

- **Timeout configuration**: The Appsmith server has a default internal timeout of 60 seconds. If your queries take longer, you can set a value greater than 60 seconds. For self-hosted instances, set the `APPSMITH_SERVER_TIMEOUT` environment variable to a value greater than 60 seconds. For more information, see [Timeout Configuration in Query Settings](/connect-data/reference/query-settings).

- **Whitelist VPC**: If your API or database is behind a VPC, whitelist the Appsmith instance IPs in your database, servers hosting APIs, or VPC to ensure that the Appsmith instance can access the databases or APIs.

## Base64 encoding error

<Message
 messageContainerClassName="error"
messageContent="File content is not base64 encoded"></Message>

#### Cause

The query expects a Base64 encoded value, but the value passed is not Base64 encoded.

#### Solution

To fix this error, ensure that the data sent is in Base64 encoded format. If you are using a FilePicker widget, you can set the data type. For more information, see [Data format](/reference/widgets/filepicker#data-format-string).

## Payload too large error

<Message
 messageContainerClassName="error"
messageContent="Payload too large. File size cannot exceed 100MB."></Message>

#### Cause

Appsmith imposes a default file size limit of 150 MB. This is a configurable limit if you're using a self-hosted Appsmith instance. The reason you may get this error is due to a file size limit set at 100 MB on your self-hosted instance.

#### Solution

Configure Appsmith instance to support larger files by changing the file size limit. For more information on configuring file size limits, see [Configure File Size Limit](/getting-started/setup/instance-configuration/file-size-limit).