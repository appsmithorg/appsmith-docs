---
sidebar_position: 4
---
# Emdedded PostgresSQL Database

Appsmith comes with an <mark >`embedded PostgreSQL v13 database`</mark> . You can use it as a datasource for your applications and it also includes mocks database relations for various use cases.

:::info
This is an optional feature. To disable the embedded postgresql please refer to the instructions [here](#Disable the embedded postgresql)
:::

### Super users

There are three superusers for the embedded postgresql.
 - `postgres`
 - `mockdb`
 - `users`
:::info
All of the above users are configured with authentication of type `trust`, i.e a password is not required for authenticating into the database.
:::

### Sample databases

There are two sample databases that comes with the embedded postgresql.
- `users` : The sample postgres data-source available on appsmith.
- `mockdb` : The sample postgres relations available on applicatoin templates

## Using the embedded postgresql as a data source

Use the following credentials to configure the embedded postgresql as a datasource on Appsmith.

  host: `mockdb.internal.appsmith.com`
  port: `5432`
  database: `mockdb`
  user: `mockdb`
  password: ` `


## Disable the embedded postgresql

If you want to disable the embedded postgresql database on Appsmith, please update the Environment variable `APPSMITH_ENABLE_EMBEDDED_DB` to `0` in the `docker.env` and restart the Appsmith container.
