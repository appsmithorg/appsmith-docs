---
description: >-
  Connect to databases and run queries to read and write data directly on the Appsmith query editor.
---

# Databases

Databases are an essential part of every application and are used to store and manage data. On Appsmith, you can directly connect to supported databases and run queries to read and write data on the Appsmith query editor. 

## Connecting to a database

:::caution important
If you are a self-hosted user, you may need to whitelist the IP address of the Appsmith deployment on your database instance or VPC before connecting to a database. 

**18.223.74.85** and **3.131.104.27** are the IP addresses of the Appsmith cloud instances that need to be whitelisted.
:::

<VideoEmbed host="youtube" videoId="sJIxtXInV14" title="How to connect to a database" caption="How to connect to a database"/>

To connect to a database:

1. On the **Explorer** tab, click the **+** icon next to **Datasources**. 
2. Choose a database from the list of [datasources](/reference/datasources/) that Appsmith can connect to.
3. Click the edit pencil icon next to the default name to rename the datasource.
4. Provide the configuration details required to connect to the database. You may need to contact your database administrator to whitelist Appsmith cloud.
5. Click **Test** to verify that Appsmith can connect to the database using the details you provided.
6. **Save** the datasource. The configuration details aren't saved/updated until the Save button is clicked. When the datasource has been added successfully, a success message appears at the top of the app window. 

:::tip
If you want to connect to a local database, you can use a service like [ngrok](https://ngrok.com/) to expose it. For more information, see [How to connect to local database on Appsmith](/advanced-concepts/more/how-to-work-with-local-apis-on-appsmith).
:::

### Native databases

* [PostgreSQL](/reference/datasources/querying-postgres)
* [MongoDB](/reference/datasources/querying-mongodb)
* [MySQL](/reference/datasources/querying-mysql)
* [Elasticsearch](/reference/datasources/querying-elasticsearch)
* [DynamoDB](/reference/datasources/querying-dynamodb)
* [Redis](/reference/datasources/querying-redis)
* [Microsoft SQL Server](/reference/datasources/querying-mssql)
* [Firestore](/reference/datasources/querying-firestore)
* [Redshift](/reference/datasources/querying-redshift)
* [Amazon S3](/reference/datasources/querying-amazon-s3)
* [Snowflake](/reference/datasources/querying-snowflake-db)
* [ArangoDB](/reference/datasources/querying-arango-db)
* [SMTP](/reference/datasources/using-smtp)

Appsmith can also seamlessly connect with most other databases through the RESTful API plugin. For more information, see [Integrations](/learning-and-resources/integrations)

### Sample databases


Appsmith provides two sample datasets to help you connect the data and test the platform. 

* MongoDB database with a `movies` collection
* PostgreSQL database with a `users` table

:::info Important
The sample databases are public and shared by all users, so ensure that you don't write any confidential information during testing. As data may be added or updated by different users, the databases are automatically reset every day, so any updates made to these databases are temporary.
:::

<VideoEmbed host="youtube" videoId="TrV8h_Dvhbg" title="Using A Sample Database" caption="How to use sample database"/>

1. On the **Explorer** tab, click the **+** icon next to Datasources.
2. Select the sample `users` PostgreSQL database.
3. Go to **Datasources** and click the **Active** tab. Select the **New API +** button next to the `users` sample database.
4. Write the query in the query editor and click the **Run** button to execute it. For example:

```sql
SELECT * FROM users;
```
The select query retrieves all the data from the users table. You can display the query results in a Table widget by [binding the data](/core-concepts/data-access-and-binding/displaying-data-read#displaying-data-in-a-widget) in the Table Data property.


## General notes

:::info
Appsmith encrypts all your datasource credentials and stores them securely. Appsmith also doesn't store any data returned from your datasources and acts only as a proxy layer to orchestrate the execution of Queries. As Appsmith is an open source framework, you can [deploy it on-premise](/getting-started/setup), and audit it to ensure none of your data leaves your VPC. For more information, see [Security](/product/security#security-measures-within-appsmith). 
:::
### Connection pooling
Appsmith creates a new connection with the database server when you first connect the database to your application. All subsequent queries executed by Appsmith against your database then re-use this connection to ensure that your queries are executed at run-time. If an idle connection is closed by the database server, Appsmith creates a new connection while executing the next query.

For certain database plugins such as PostgreSQL, MySQL, Redis, MS SQL, and Redshift, Appsmith explicitly creates and maintains a connection pool because, usually, a single connection isn't designed to handle multiple simultaneous queries.

The maximum number of connections in a pool is limited to 5. Please note that max 5 connections in a pool doesn't mean that a max of 5 queries can be run concurrently using this pool. The number of concurrent queries that this pool can run is usually much higher. 

## Troubleshooting
If you are experiencing difficulties with connecting datasources in Appsmith, you can refer to the [Datasource troubleshooting guide](/help-and-support/troubleshooting-guide/action-errors/datasource-errors) for assistance. If you need further support, you can reach out on [Discord](https://discord.com/invite/rBTTVJp) or ask questions on the [community forum](https://community.appsmith.com/).

## Further reading

* [Write queries](/core-concepts/data-access-and-binding/querying-a-database)
* [Data access and binding](/core-concepts/data-access-and-binding)
* [Connect to a local database or API](/advanced-concepts/more/how-to-work-with-local-apis-on-appsmith)
