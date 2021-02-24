# Action Errors

## REST API Errors

### Missing URL Error

```
Missing URL
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


This message indicates that the Host address field in the datasource creation form has been left empty. 

To fix this error please edit the datasource creation form and type in the host address for the datasource. 

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

## Query Execution Errors

### Timeout Error

If your API / DB Query times out, it could be due to one of the following reasons

* Your API / Database is behind a VPC which is not accessible from the appsmith Instance. To resolve this, you have to [whitelist the appsmith instance](../core-concepts/connecting-to-data-sources/) in your database or VPC.
* Your API / Query is taking too long to respond. Consider fetching smaller datasets using [server-side pagination](../core-concepts/displaying-data-read/display-data-tables.md#pagination) or increasing the timeout of the API / Query in the settings section.

### Mandatory Parameter Empty Error

This message means that at least of the required fields in the datasource creation form or the query editor form is 
missing.

You will typically recieve this message when:

* You have left a mandatory field empty when creating a datasource.
* You have left a mandatory field empty when configuring a query.

### Missing Query Error

```
Missing required parameter: Query
```