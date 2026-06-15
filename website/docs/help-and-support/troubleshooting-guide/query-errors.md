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

### Incorrect syntax / malformed SQL with mustache bindings

<Message
 messageContainerClassName='error'
messageContent='Incorrect syntax near "0".'></Message>

#### Cause
When a mustache binding (for example `{{ Select1.selectedOptionValue }}`) is placed directly inside an SQL statement, the bound value may be substituted in a format the database does not accept, producing a syntax error. This commonly happens when the value's datatype or quoting does not match what the column or clause expects.

#### Solution
- Make sure the value passed by the binding is in a format supported by your database (for example, correct quoting for strings, numeric values where numbers are expected).
- For server-side paginated queries, keep the pagination clause well-formed, for example:
  ```sql
  SELECT * FROM your_table
  ORDER BY some_column
  OFFSET (({{Table1.pageNo}} - 1) * {{Table1.pageSize}}) ROWS
  FETCH NEXT {{Table1.pageSize}} ROWS ONLY;
  ```
- If the database still rejects the substituted query, disable **Use Prepared Statement** in the [query settings](/connect-data/reference/query-settings) and re-run. For more information, see [Prepared Statements](/connect-data/concepts/how-to-use-prepared-statements).

### GraphQL pagination variable not recognized

<Message
 messageContainerClassName='error'
messageContent='No such variable exists in a query'></Message>

#### Cause
When configuring cursor-based pagination for a GraphQL query, Appsmith may not detect a pagination variable if the parameter it maps to is not declared at the start of the query. As a result, the variable cannot be selected in the **Pagination** tab.

#### Solution
- Place the first pagination parameter on the first line of the query definition. After doing this, the pagination parameters become selectable in the **Pagination** tab.
- Ensure all variables used in pagination are also declared in the query's variables. For more information, see [Server-side pagination](/build-apps/how-to-guides/Server-side-pagination-in-table).

### Dynamic bindings in an authenticated API datasource

#### Cause
Dynamic bindings (such as `{{appsmith.store...}}`) are not supported in the configuration of an Authenticated API datasource (for example, in a datasource-level header). Values bound there will not evaluate.

#### Solution
- Add the dynamic binding to the **query headers** instead of the datasource configuration. Dynamic bindings work in a standard [REST API](/connect-data/reference/rest-api) query.
- If you need different values per environment, set up a separate datasource for each environment so that dynamic bindings are not required. See [Authenticated API](/connect-data/reference/authenticated-api).

### File upload fails to parse multipart content

<Message
 messageContainerClassName='error'
messageContent='Unable to parse content. Expected to receive an array or object of multipart data.'></Message>

#### Cause
This error appears when a file-upload API receives data that is not in the format the multipart body expects, for example when the Filepicker data format and the API body type are mismatched.

#### Solution
- Set the Filepicker widget's **Data Format** property to **Base64**. See [Data format](/reference/widgets/filepicker#data-format-string).
- Set the API **Body** type to **Binary**, and pass the file data using `{{ FilePickerName.files[0].data }}`.
- For a complete walkthrough, see [Upload Files using API](/build-apps/how-to-guides/Send-Filepicker-Data-with-API-Requests).

### Binary REST API response is corrupted or truncated

#### Cause
When an API returns raw binary data (for example audio or other non-text files), Appsmith's REST API plugin parses the response as text. The binary content is corrupted by UTF-8 interpretation, so it cannot be reliably reconstructed, and large responses may also be truncated.

#### Solution
- If the API offers an endpoint that returns the data as Base64, use that endpoint instead, since Base64 responses are supported by the REST API plugin. You can then decode it client-side.
- If the response only exceeds the size limit (rather than being binary), see **Execution failed with status 5009** above.
