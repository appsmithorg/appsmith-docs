---
description: >-
  You'll learn about common query errors and how to resolve them on Appsmith.
---
# Query Errors
The section illustrates common query errors and how to resolve them on Appsmith.

## Query/API response errors
You may see below errors when working with API or Query responses.

### Execution failed with status 5009
You could see the query/API execution fails and generates an error response:

<Message
 messageContainerClassName="error"
messageContent="<QUERY_OR_API_NAME> action returned an error response. Response size exceeded the maximum supported size of <SIZE_SPECIFIED_IN_FILE> MB. Please use LIMIT to reduce the amount of data fetched."></Message>

#### Error message
<Message
 messageContainerClassName='error'
messageContent='Response size exceeded the maximum supported size of <SIZE_SPECIFIED_IN_FILE> MB. Please use LIMIT to reduce the amount of data fetched.'></Message>


#### Cause
The error response could be caused when the API/query response size exceeds the allowed maximum limit of **5 MB** or the size setup.

![Response larger than the supported size](/img/Query-errors-response-size-larger-than-5MB.png)

![Response larger than the supported size error shown in errors tab](/img/Query-errors-response-size-larger-than-5MB-errors-tab.png)

#### Solution
You could resolve the error response by doing one of the following:
* To limit the data returned as part of query response by using limit in the query or enabling [pagination for table](/build-apps/how-to-guides/Server-side-pagination-in-table). 
* To limit the data for an API, you'll have to add a [server-side pagination](/build-apps/how-to-guides/Server-side-pagination-in-table) feature to it.
* To update the maximum allowed limit, you can modify the environment variable only for the self-hosted instance of Appsmith. For example, to modify the limit for docker-based installation, navigate to the `docker.env` file and modify the `APPSMITH_PLUGIN_MAX_RESPONSE_SIZE_MB` environment variable to the desired response size(10 MB).

```bash
APPSMITH_PLUGIN_MAX_RESPONSE_SIZE_MB=10
```
:::info
If you can't find what you are looking for and need help debugging an error, please raise your issue on [Discord Server](https://discord.com/invite/rBTTVJp) or email at support@appsmith.com.
:::

### MongoDB name can not be null

You may encounter this error when trying to run queries against a MongoDB datasource.

#### Error message

The error message might appear in a few different ways. For example:

- As an error response in the console:
<Message messageContainerClassName="error" messageContent="{ message: 'name can not be null', type: 'PLUGIN_EXECUTION', subType: undefined }"></Message>

- As a notification with the text:
<Message messageContainerClassName="error" messageContent="Mongo is not correctly configured. Please fix the following and then re-run: [Missing default database name.]"></Message>
  
- Or,
<Message messageContainerClassName="error" messageContent="Missing default database name."></Message>

#### Cause

This error may be caused by the database name being omitted from the **Connection String URI** field.

#### Solution

Find your **Connection String URI** in the datasource settings and verify that the database's name is in the string following the host name. For example, if your database name is `Movies`, it should look something like this:

```
// Connection String URI

mongodb+srv://mockdb-admin:****@mockdb.kce5o.mongodb.net/movies?w=majority&retrywrites=true&authsource=admin&minpoolsize=0
```

In the snippet, `mockdb.kce5o.mongodb.net/` is the host, `movies` is the database name, and the items after the `?` are optional arguments.

![](/img/mongoerr_dbname.png)

:::info
If you can't find what you are looking for and need help debugging an error, please raise your issue on [Discord Server](https://discord.com/invite/rBTTVJp) or email at support@appsmith.com.
:::
