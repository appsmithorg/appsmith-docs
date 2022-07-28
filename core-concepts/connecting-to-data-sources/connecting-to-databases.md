---
description: >-
  You can connect to, and run queries to read and write data directly from the
  Appsmith editor.
---

# Databases

## Supported Databases

* [Amazon S3 (also Upcloud, Digital Ocean Spaces, Wasabi, DreamObjects)](../../reference/datasources/querying-amazon-s3.md)
* [ArangoDB](../../reference/datasources/querying-arango-db.md)
* [DynamoDB](../../reference/datasources/querying-dynamodb.md)
* [ElasticSearch](../../reference/datasources/querying-elasticsearch.md)
* [Firestore](../../reference/datasources/querying-firestore.md)
* [Google Sheets](../../reference/datasources/querying-google-sheets.md)
* [MongoDB](../../reference/datasources/querying-mongodb/)
* [MS SQL](../../reference/datasources/querying-mssql.md)
* [MySQL](../../reference/datasources/querying-mysql.md)
* [PostgreSQL](../../reference/datasources/querying-postgres.md)
* [Redis](../../reference/datasources/querying-redis.md)
* [Redshift](../../reference/datasources/querying-redshift.md)
* [Snowflake](../../reference/datasources/querying-snowflake-db.md)
* [SMTP](../../reference/datasources/using-smtp.md)

## Security

Appsmith safely encrypts all your database credentials and stores them securely. Appsmith also does not store any data returned from your data sources and acts only as a proxy layer to orchestrate the API / Query calls. Since Appsmith is an open-source framework, you can [deploy it on-premise](../../getting-started/setup/), and audit it to ensure none of your data leaves your VPC.

## Connecting to a Database

{% hint style="warning" %}
Before connecting to a data source, you may need to whitelist the IP address of the Appsmith deployment on your database instance or VPC.

**18.223.74.85** and **3.131.104.27** are the IP addresses of the Appsmith cloud instances that need to be whitelisted.
{% endhint %}

Once the appsmith instance has been [whitelisted](../../learning-and-resources/how-to-guides/aws-whitelist.md):

1. Click on **+** next to **Datasources**
2. You’ll see a list of Datasources that Appsmith can connect to
3. Choose a Database from the [supported list](connecting-to-databases.md#supported-databases)
4. Provide the configuration details required to connect to your database. You may need to contact your database admin to [whitelist appsmith cloud](../../learning-and-resources/how-to-guides/aws-whitelist.md)
5. Click on **Test** to verify that Appsmith is able to connect to your database using the details provided by you
6. **Save** your **Datasources**

![](<../../.gitbook/assets/create ds.gif>)

{% hint style="success" %}
Databases configured within one page of an app can be accessed by developers anywhere within the workspace.
{% endhint %}

## General Notes

Appsmith creates a new connection pool with the database server when you first connect the database server to your app. All subsequent queries executed by Appsmith against your database then re-use this connection to ensure that at run-time your queries are executed quickly. In the case that an idle connection is closed by the database server, Appsmith creates a new connection while executing the next query.

For certain plugins like [PostgreSQL](../../reference/datasources/querying-postgres.md), and [MySQL](../../reference/datasources/querying-mysql.md), Appsmith creates and maintains a connection pool because multiple queries cannot be executed against a single connection.

### Concurrent Queries

Appsmith limits maximum queries that can run concurrently on a database to be 5. If the application attempts to make more queries concurrently, you'll see an error saying `Connection not available`.
