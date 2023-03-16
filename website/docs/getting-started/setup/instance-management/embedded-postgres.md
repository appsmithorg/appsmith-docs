# Embedded PostgreSQL

Appsmith has a built-in PostgreSQL v13 database. You can use it as a source of data for your applications. Additionally, it also has mock databases for experimenting and testing different scenarios.

## Superusers and sample databases

Embedded PostgreSQL provides superusers and sample databases. Refer to the below table for details:

| Name | Type | Description|
|------|------|------------|
|`postgres`, `mockdb`, `users`| superusers | Connect using them without providing a password.|
|`users` | sample database | The sample database contains test data for users.|
|`mockdb` | sample database | The sample database contains the application templates for PostgreSQL relations.|

## Embedded PostgreSQL as a datasource
You can use the built-in PostgreSQL as a datasource on Appsmith. Use the following configuration details to set it up:

```SQL
  host: `mockdb.internal.appsmith.com`
  port: `5432`
 database: `mockdb`
  user: `mockdb`
 password: ` `
```

## Disable the embedded PostgreSQL
You may choose to disable the built-in embedded PostgreSQL. Follow the steps below:
1. Navigate to the `docker.env` file located in the installation root folder. For example, if you are using Docker installation, you can locate the file in the `<PROJECT_ROOT>/stacks/configuration` file. 
    1. Update the key `APPSMITH_ENABLE_EMBEDDED_DB` as shown below:

        ```yaml
        APPSMITH_ENABLE_EMBEDDED_DB=0
        ```
    2. Restart the Appsmith container by using the following command:

        ```bash
        docker-compose restart appsmith
        ```


