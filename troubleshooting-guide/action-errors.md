# Action Errors

## Datasource Errors

### Missing Host Error

```
Missing endpoint
```

```
Missing endpoint(s)
```

```
Missing host for endpoint
```


```
Missing endpoint and url
```

```
Missing hostname
```

``` 
No endpoint(s) configured
```

Any one of these messages indicates that the `Host address` field in the datasource creation form has been left empty. 

This error can be fixed by editing the datasource creation form and typing in the host address for the datasource. 

### Invalid Host Error

``` 
Invalid host provided. It should be of the form http(s)://your-es-url.com
```

This message indicates that the provided URL format is not correct. 

This error can be fixed by editing the datasource creation form and providing the host url in the correct 
format. 

### Missing Port Error

```
Missing port for endpoint
```

This message indicates that the `Port` field in the datasource creation form has been left empty.

This error can be fixed by editing the datasource creation form and typing in the port address for the datasource.


### Missing Username Error

```
Missing username for authentication 
```

This message indicates that the `Username` field in the datasource creation form has been left empty. The 
`Username` field is usually nested inside the `Authentication` sub section.

This error can be fixed by by editing the `Username` field in the datasource creation form.

### Missing Password Error

``` 
Missing password for authentication
```

This message indicates that the `Password` field in the datasource creation form has been left empty. The
`Password` field is usually nested inside the `Authentication` sub section.

This error can be fixed by by editing the `Password` field in the datasource creation form.


### Mandatory Parameter / Field Empty Error

``` 
Mandatory parameter 'Access Key' is empty.
```

``` 
At least one of the mandatory fields in plugin's datasource creation form is empty
```

This message indicates that one of the mandatory fields, for example `Access Key`, has been left empty in the 
datasource creation form.

This error can be fixed by filling the mentioned mandatory field(s) in the datasource creation form.

### Cannot Delete Datasource Error

``` 
Cannot delete datasource since it has 1 action(s) using it.
```

This message indicates that the datasource attempting to be deleted has some query action confiured on it.

This error can be fixed by deleting any queries dependent on this datasource before attempting to delete the datasource.

## Query Execution Errors

### Configuration Error

``` 
getUsers failed to execute. Please check it's configuration
```

This message indicates an error in the configuration of the action. You can navigate to the API / Query in this state and see the error it encountered. If the error occurred intermittently, it is likely due to a value in the configuration not being available at the time that the API / Query was run.

### Timeout Error

If your API / DB Query times out, it could be due to one of the following reasons

* Your API / Database is behind a VPC which is not accessible from the appsmith Instance. This can be fixed by 
  [whitelisting the appsmith instance](../core-concepts/connecting-to-data-sources/) in your database or VPC.
* Your API / Query is taking too long to respond. This can be fixed by fetching smaller datasets using 
  [server-side 
  pagination](../core-concepts/displaying-data-read/display-data-tables.md#pagination) or increasing the timeout of the API / Query in the settings section.

### Mandatory Parameter Empty Error

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

A message of this type means that at least one of the mandatory / required fields in the query editor form is missing.

This error can be fixed by editing the query editor form and providing the parameter mentioned in the error message.

### Missing Query Error

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

### Invalid Query Error

``` 
Not a valid Redis command
```

```
Query preparation failed while inserting value
```

A message of this type indicates that the syntax of the query body is invalid.

This error can be fixed by providing

### Encoding Error

```
File content is not base64 encoded 
```

This message indicates that the query was expecting a base64 encoded value as content body, but the actual value 
passed to it was not base64 encoded.

This error can be fixed by passing a base64 encoded value as file content parameter in the query.

### Invalid Number Error

``` 
Parameter 'Expiry Duration of Signed URL' is NOT a number
```

This message indicates that the query parameter mentioned in the message expects a number but a non-numerical value has 
been provided in the query form. 

This error can be fixed by editing the query form and providing a valid number as input for the mentioned parameter.

### JSON Parsing Error

``` 
Error parsing the JSON body
```

``` 
Error converting array to ND-JSON
```

``` 
Unable to parse condition value as a JSON list
```

This message indicates that the JSON value passed to the query as a parameter is not a valid JSON object.

This error can be fixed by editing the query form and passing a valid JSON string as parameter.

## REST API Errors

### Missing URL Error

```
DEFAULT_REST_DATASOURCE is not correctly configured. Please fix the following and then re-run: \n[Missing URL.]
```

### OAuth Errors

#### Missing Client Secret Error

``` 
DEFAULT_REST_DATASOURCE is not correctly configured. Please fix the following and then re-run: \n[Missing Client Secret]
```

#### Secret Key Error

``` 
Secret key is required when sending session details is switched on,
```

## Page Access Error

``` 
Either this page doesn't exist, or you don't have access to
this page.
```
    

## Application Errors

### Invalid / Empty Name Error

``` 
Application name can't be empty
```

This error indicates that the application name field has been left empty. 

This error can be fixed by editing the application name field and providing a non-empty string as application name.

### Duplicate Name Error

``` 
Entity name: <name> is already being used
```

This error indicates that the name being assigned to the entity has been used before. 

This error can be fixed by assigning a new unique name to the entity.


## Login / Signup Errors

### Account Already Registered Error

``` 
There is already an account registered with this email. Please sign in instead
```

This error indicates that the email being used to sign up has already been used before.

This error can be fixed by either using a different email to signup or doing `login` instead of `signup`

### Reset Password Error

#### No Email Configured Error

``` 
You haven’t setup any email service yet. Please configure your email service to receive a reset link
```

#### No User Error

``` 
Unable to find user <email>
```