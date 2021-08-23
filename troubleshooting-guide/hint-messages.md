# Hint Messages

## Identical column names in SQL query result

```text
Your <plugin> query result may not have all the columns because duplicate column names were found for the column
(s): <column name(s)>. You may use the SQL keyword 'as' to rename the duplicate column name(s) and resolve this issue.
```

This message indicates that the executed SQL query returned a table with one or more set of identical column 
names. When table columns have identical names, only one of the columns get displayed and other columns with the 
matching names are omitted.

This issue can be resolved by using the SQL keyword '[as](https://www.w3schools.com/sql/sql_ref_as.asp)' to rename 
columns in the SQL query so that each column has a 
unique name. 

## Using localhost as Endpoint URL

```text
You may not be able to access your localhost if Appsmith is running inside a docker container or on the cloud. To enable access to your localhost you may use ngrok to expose your local endpoint to the internet. Please check out Appsmith's documentation to understand more.
```

This message indicates that the datasource or REST API query has been configured with the endpoint URL set to 
`localhost`. Please note that Appsmith application may not be able to access your `localhost` endpoint when:

- the application is hosted on a cloud and you are accessing it remotely.
- the application is running inside a docker container.

This issue can be resolved by doing one or more of the following steps:

- expose the `localhost` endpoint to the public internet via [ngrok](https://ngrok.com/) as shown [here](https://ngrok.com/docs).
- in case the Appsmith application is running inside a docker container, you may use `host.docker.internal` as the 
  endpoint URL as explained [here](https://docs.docker.com/docker-for-mac/networking/).
  
## API response is not a valid JSON

```text
The response returned by this API is not a valid JSON. Please be careful when using the API response anywhere a valid JSON is required. You may resolve this issue either by modifying the 'Content-Type' Header to indicate a non-JSON response or by modifying the API response to return a valid JSON.
```

This message indicates that the [Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) header in your REST API query is set to [application/json](https://www.iana.org/assignments/media-types/media-types.xhtml) indicating 
that the response is expected to be a valid JSON, however the actual response is NOT a valid JSON. 

This warning can be resolved by doing one of the following:

- Change `Content-Type` header in the REST API query to anything other than `application/json`.
- Modify the REST API endpoint such that the response returned is a valid JSON. 