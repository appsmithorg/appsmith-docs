# Action Errors

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

This message indicates that the `Host address` field in the datasource creation form has been left empty. 

This error can be fixed by editing the datasource creation form and typing in the host address for the datasource. 

### Invalid Host Error

``` 
Invalid host provided. It should be of the form http(s)://your-es-url.com
```

This message indicates that the provided URL format is not correct. 

This error can be fixed by editing the datasource creation form and providing the correct host url in the correct 
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


## Query Execution Errors

### Configuration Error

``` 
getUsers failed to execute. Please check it's configuration
```

This message indicates an error in the configuration of the action. You can navigate to the API / Query in this state and see the error it encountered. If the error occurred intermittently, it is likely due to a value in the configuration not being available at the time that the API / Query was run.

### Timeout Error

If your API / DB Query times out, it could be due to one of the following reasons

* Your API / Database is behind a VPC which is not accessible from the appsmith Instance. To resolve this, you have to [whitelist the appsmith instance](../core-concepts/connecting-to-data-sources/) in your database or VPC.
* Your API / Query is taking too long to respond. Consider fetching smaller datasets using [server-side pagination](../core-concepts/displaying-data-read/display-data-tables.md#pagination) or increasing the timeout of the API / Query in the settings section.

### Mandatory Parameter Empty Error

``` 
Mandatory parameters 'Action' and 'Bucket Name' are missing
```

This message means that at least of the required fields in the datasource creation form or the query editor form is 
missing.

You will typically recieve this message when:

* You have left a mandatory field empty when creating a datasource.
* You have left a mandatory field empty when configuring a query.

### Required Parameter Empty / Missing Error

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

### Invalid Query Error

``` 
Not a valid Redis command
```

```
Query preparation failed while inserting value
```

### Encoding Error

```
File content is not base64 encoded 
```

### Invalid Number Error

``` 
Parameter 'Expiry Duration of Signed URL' is NOT a number
```

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

``` 
Invalid name
```

### Duplicate Name Error

``` 
Entity name: <name> is already being used
```

## Login / Signup Errors

### Account Already Registered Error

``` 
There is already an account registered with this email sumit686215@gmail.com. Please sign in instead
```

### Reset Password Error

#### No Email Configured Error

``` 
You haven’t setup any email service yet. Please configure your email service to receive a reset link
```

#### No User Error

``` 
Unable to find user <email>
```