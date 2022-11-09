---
description: >-
  You'll learn about common query errors and how to resolve them on Appsmith.
---
# Query errors
The section explains common query errors and their solutions to resolve them on Appsmith.

## Query/API response errors
You may see below errors when working with [API](/core-concepts/connecting-to-data-sources/authentication/connect-to-apis) or [Query](/core-concepts/data-access-and-binding/querying-a-database/) response.

### Execution failed with status 5009
You could see the query/API execution fails and generates a response with **Execution failed with status 5009[<QUERY_OR_API_NAME>]- Response size exceeded the maximum supported size of 5 MB**

#### Error message
Execution failed with status 5009[<QUERY_OR_API_NAME>]- Response size exceeded the maximum supported size of 5 MB.

#### Cause
The error response could be caused when the API/query response size exceeds the allowed maximum limit of **5 MB**.

#### Solution
You could resolve the error response by doing one of the following:
* To limit the data returned as part of query response by using limit in the query or enabling [pagination for table](/core-concepts/data-access-and-binding/displaying-data-read/display-data-tables#pagination). 
* To limit the data for an API, you'll have to add a [server-side pagination](/core-concepts/data-access-and-binding/displaying-data-read/display-data-tables#pagination) feature to it.
* To set the maximum allowed limit other than *5 MB*, you can modify the environment variable only for the self-hosted instance of Appsmith. For example, you have a docker-based Appsmith installation. You can navigate to the `docker.env` file and modify the `APPSMITH_PLUGIN_MAX_RESPONSE_SIZE_MB` environment variable to the desired response size.

:::info
If you can't find what you are looking for and need help debugging an error, please raise your issue on [Discord Server](https://discord.com/invite/rBTTVJp) or email at [mailto:support@appsmith.com](support).
:::
