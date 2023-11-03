---
sidebar_position: 1
---
# Action Errors




<VideoEmbed host="youtube" videoId="9YyHwmrkztE" title="Error Handling for APIs & Queries" caption="Error Handling for APIs & Queries"/>

### Timeout error

#### Error message

<Message
 messageContainerClassName="error"
messageContent="Timed out on query execution"></Message>


#### Cause

If your API / DB Query times out, it could be due to one of the following reasons

* Your API / Database is behind a VPC which is not accessible from the appsmith Instance. This can be fixed by whitelisting the appsmith instance in your database or VPC.
* Your API / Query is taking too long to respond. This can be fixed by fetching smaller datasets using

#### Solution

You could resolve the error response by doing one of the following:

- [Server-side pagination](/build-apps/how-to-guides/Server-side-pagination-in-table): Allows you to manage and display large datasets within your application. It involves fetching and displaying only a portion of data from the server at a time, enhancing performance.

- [Timeout Configuration](/connect-data/reference/query-settings): The Appsmith server has a default internal timeout of 60 seconds. If your queries take longer than this, you can set a value greater than 60 seconds. For self-hosted instances, you can set the `APPSMITH_SERVER_TIMEOUT` environment variable to a value greater than 60 seconds. For example, if you want a timeout of 80 seconds, use- `APPSMITH_SERVER_TIMEOUT=80`.


### 504 gateway timeout

#### Error message

<Message
 messageContainerClassName="error"
messageContent="504 Gateway Timeout"></Message>

#### Solution

The challenge lies in the fact that when Appsmith calls an upstream API, it times out after 60 seconds, whereas the necessary timeout duration is 300 seconds. Furthermore, the default timeout for Nginx, the web server employed by Appsmith, is set at 60 seconds. To resolve this issue, one plausible approach is to extend the Nginx timeout to 300 seconds.

However, Appsmith is constrained by the default 60-second timeout imposed by Nginx. While the Appsmith team is actively working on this constraint, a temporary solution involves optimizing the upstream API to deliver a response within the 60-second timeframe.


### Configuration error

```
getUsers failed to execute. Please check its configuration
```

This message indicates an error in the configuration of the action. You can navigate to the API / Query in this state and see the error it encountered. If the error occurred intermittently, it is likely due to a value in the configuration not being available at the time that the API / Query was run.

### Mandatory parameter empty error

```
Mandatory parameters 'Action' and 'Bucket Name' are missing
```

```
Required parameter 'File Path' is missing
```

```
Missing action name (like `ListTables`, `GetItem` etc.)
```

```
Document/Collection path cannot be empty
```

```
Missing Firestore method
```

A message of this type means that at least one of the mandatory/required fields in the query editor form is missing.

This error can be fixed by editing the query editor form and providing the parameter mentioned in the error message.

### Missing query error

```
Missing required parameter: Query
```

```
needs a non-empty body to work
```

```
Body is null or empty
```

Any one of these messages indicated that the body of the query has been left empty.

This error can be fixed by editing the query form and providing a query body.

### Invalid query error

```
Not a valid Redis command
```

```
Query preparation failed while inserting value
```

A message of this type indicates that the syntax of the query body is invalid.

This error can be fixed by providing a valid syntax in the query editor form.

### Encoding error

```
File content is not base64 encoded
```

This message indicates that the query was expecting a [base64 encoded](https://en.wikipedia.org/wiki/Base64) value as content body, but the actual value passed to it was not base64 encoded.

This error can be fixed by passing a base64 encoded value as a file content parameter in the query.

### Invalid number error

```
Parameter 'Expiry Duration of Signed URL' is NOT a number
```

This message indicates that the query parameter mentioned in the message expects a number but a non-numerical value has been provided in the query form.

This error can be fixed by editing the query form and providing a valid number as input for the mentioned parameter.

### JSON parsing error

```
Error parsing the JSON body
```

```
Error converting array to ND-JSON
```

```
Unable to parse condition value as a JSON list
```

This message indicates that the [JSON](https://www.w3schools.com/whatis/whatis\_json.asp) string passed to the query as a parameter is not a valid JSON string.

This error can be fixed by editing the query form and passing a valid JSON string as a parameter.
