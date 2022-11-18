---
description: >-
  You'll learn about common query errors and how to resolve them on Appsmith.
---
# Query errors
The section illustrates common query errors and how to resolve them on Appsmith.

## Query/API response errors
You may see below errors when working with [API](/core-concepts/connecting-to-data-sources/authentication/connect-to-apis) or [Query](/core-concepts/data-access-and-binding/querying-a-database/) responses.

### Execution failed with status 5009
You could see the query/API execution fails and generates an error response. 

> **[<QUERY_OR_API_NAME>] action returned an error response. Response size exceeded the maximum supported size of <SIZE_SPECIFIED_IN_FILE> MB. Please use LIMIT to reduce the amount of data fetched.**


![Response larger than the supported size](/img/Query-errors-response-size-larger-than-5MB.png)

#### Error message
Response size exceeded the maximum supported size of <SIZE_SPECIFIED_IN_FILE> MB. Please use LIMIT to reduce the amount of data fetched.

![Response larger than the supported size error shown in errors tab](/img/Query-errors-response-size-larger-than-5MB-errors-tab.png)

#### Cause
The error response could be caused when the API/query response size exceeds the allowed maximum limit of **5 MB** or the size setup.

#### Solution
You could resolve the error response by doing one of the following:
* To limit the data returned as part of query response by using limit in the query or enabling [pagination for table](/core-concepts/data-access-and-binding/displaying-data-read/display-data-tables#pagination). 
* To limit the data for an API, you'll have to add a [server-side pagination](/core-concepts/data-access-and-binding/displaying-data-read/display-data-tables#pagination) feature to it.
* To update the maximum allowed limit, you can modify the environment variable only for the self-hosted instance of Appsmith. For example, to modify the limit for docker-based installation, navigate to the `docker.env` file and modify the `APPSMITH_PLUGIN_MAX_RESPONSE_SIZE_MB` environment variable to the desired response size(10 MB).

```bash
APPSMITH_PLUGIN_MAX_RESPONSE_SIZE_MB=10
```
:::info
If you can't find what you are looking for and need help debugging an error, please raise your issue on [Discord Server](https://discord.com/invite/rBTTVJp) or email at support@appsmith.com.
:::
