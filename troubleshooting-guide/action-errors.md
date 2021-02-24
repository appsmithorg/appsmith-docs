# Action Errors

## REST API Errors

### Missing URL Error

```
Missing URL
```

### Secret Key Error

``` 
Secret key is required when sending session details is switched on,
```

### JSON Parse Error

```
Malformed JSON 
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

This message indicates that the Host address field in the datasource creation form has been left empty. 

To fix this error please edit the datasource creation form and type in the host address for the datasource. 

### Invalid Host Error

``` 
Invalid host provided. It should be of the form http(s)://your-es-url.com
```

### Missing Port Error

```
Missing port for endpoint
```

### Authentication Error

```
Missing username for authentication 
```
This message means that you have forgotten to configure the Username field in the datasource creation form. The 
username field is usually nested inside the Authentication sub section.

### Mandatory Parameter / Field Empty Error

``` 
Mandatory parameter 'Access Key' is empty.
```

``` 
At least one of the mandatory fields in plugin's datasource creation form is empty
```


### Cannot Delete Datasource Error

``` 
Cannot delete datasource since it has 1 action(s) using it.
```


## Query Execution Errors

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