# Query Errors

## Timeout error

<Message
 messageContainerClassName="error"
messageContent="Timed out on query execution"></Message>

#### Cause

If your API / DB Query times out, it could be due to one of the following reasons

- Your API / Database is behind a VPC which is not accessible from the appsmith Instance. This can be fixed by whitelisting the appsmith instance in your database or VPC.
- Your API / Query is taking too long to respond. This can be fixed by fetching smaller datasets using

### Solution

You could resolve the error response by doing one of the following:

- [Server-side pagination](/build-apps/how-to-guides/Server-side-pagination-in-table): Allows you to manage and display large datasets within your application. It involves fetching and displaying only a portion of data from the server at a time, enhancing performance.

- [Timeout Configuration](/connect-data/reference/query-settings): The Appsmith server has a default internal timeout of 60 seconds. If your queries take longer than this, you can set a value greater than 60 seconds. For self-hosted instances, you can set the `APPSMITH_SERVER_TIMEOUT` environment variable to a value greater than 60 seconds. For example, if you want a timeout of 80 seconds, use- `APPSMITH_SERVER_TIMEOUT=80`.

## Base64 encoding error

```
File content is not base64 encoded
```

This message indicates that the query was expecting a base64 encoded value as content body, but the actual value passed to it was not base64 encoded.
This error can be fixed by setting the data format property of the filepicker to base64
