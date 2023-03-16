---
sidebar_position: 4
---
# Embedded PostgreSQL

Appsmith has a built-in PostgreSQL v13 database. You can use it as a source of data for your applications. Additionally, it also has mock databases that you can use to experiment and test different scenarios.

## Superusers and sample databases

The following table provides a list of superusers and sample databases that are available on the Embedded PostgreSQL:

| Name | Type | Description|
|------|------|------------|
|`postgres`, `mockdb`, `users`| superusers |You can use them to connect to the databases without having to provide a password.|
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
You may choose to disable the built-in embedded PostgreSQL. To disable the built-in PostgreSQL on Appsmith, you need to modify the environment variable `APPSMITH_ENABLE_EMBEDDED_DB` to `0` in the `docker.env` file, and then restart the Appsmith container.
