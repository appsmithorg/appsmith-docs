# Hint Messages (Coming Soon)

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

This message indicates that the datasource has been configured with the endpoint URL set to `localhost`. Please note 
that Appsmith application will not be able to access your `localhost` endpoint when:

- the application is hosted on a cloud and you are accessing it remotely.
- the application is running inside a docker container.

This issue can be resolved by doing one or more of the following steps:

- expose the `localhost` endpoint to the public internet via [ngrok](https://ngrok.com/) as shown [here](https://ngrok.com/docs).
- in case the Appsmith application is running inside a docker container, you may use `host.docker.internal` as the 
  endpoint URL as explained [here](https://docs.docker.com/docker-for-mac/networking/).