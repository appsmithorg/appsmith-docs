---
description: >-
  You can connect to, and run queries to read and write data directly from the
  Appsmith editor.
---

# Databases

Databases are an essential part of many applications and are used to store and manage data. They provide a structured way to organize, retrieve, and manipulate data, and are designed to be efficient and reliable. You can run queries to read and write data directly from the Appsmith editor. 

:::note
Appsmith applications are **secure-by-default**. All sensitive credentials, such as database credentials, are encrypted with [**AES-256 encryption**](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard). For more information, see [security](/product/security#security-measures-within-appsmith). 
:::


### Connecting to a database


:::info important

As a self-hosted Appsmith user, you must [whitelist](https://docs.appsmith.com/learning-and-resources/how-to-guides/aws-whitelist) the IP address of the Appsmith deployment on your database instance or VPC. `18.223.74.85` and `3.131.104.27` are the IP addresses of the Appsmith cloud instances that need to be whitelisted
:::


* On the **Explorer tab**, click the **+** sign next to **Datasources**. 
* Choose a Database from the [Datasources](/reference/datasources/) that Appsmith can connect to.
* Provide the **configuration details** required to connect to your database. 
* Click **Test** to verify that Appsmith can connect to your database using the details you provided.
* Rename and save your datasource.

<VideoEmbed host="youtube" videoId="sJIxtXInV14" title="How to connect to a datasource" caption="How to connect to a datasource | Example"/>


Once your datasource has been added successfully, a success pop-up appears at the top. 

### Mock database


Appsmith provides two sample datasets to help you connect the data and test the platform. 

1. The first database is a sample [MongoDB](/reference/datasources/querying-mongodb/) database with a collection called "movies"
2. The second database is a sample [PostgreSQL](/reference/datasources/querying-postgres) database with a table called "users"

The mock databases are public and shared by all users, which may result in mangled data. To refresh the data, the databases are automatically **reset every day**, so any updates made to these databases are temporary.

<VideoEmbed host="youtube" videoId="TrV8h_Dvhbg" title="Using A Sample Database " caption="How to use mock database | Example"/>

* Click on **+** next to Datasources.
* Select the mock **users** PostgreSQL database.
* You can create queries by selecting the **New API +** button available on the **datasource** page.
* Write the query in the query editor and click the **Run** button to execute it. For example:

```sql
SELECT * FROM users;
```
The select query retrieves the data from the users' table. You can display the query results in a Table widget by [binding the data](/core-concepts/data-access-and-binding/displaying-data-read#displaying-data-in-a-widget) in the Table Data property.


## General notes
Appsmith establishes a connection pool with the database server when you first connect the database to your app. This allows subsequent queries to be executed efficiently. If an idle connection is closed by the database server, Appsmith creates a new connection for the next query.

For certain database plugins such as PostgreSQL and MySQL, Appsmith maintains a connection pool because multiple queries can't be run on a single connection.

The maximum number of concurrent queries that can be run on a database with Appsmith is 5. If the application tries to execute more concurrent queries, you may receive an error message stating that the connection isn't available.


## Troubleshooting
Are you having trouble connecting datasources with Appsmith? check out the [Datasource troubleshooting guide](/help-and-support/troubleshooting-guide/action-errors/datasource-errors) or reach out on [Discord](https://discord.com/invite/rBTTVJp) to get support or ask questions on the [community forum](https://community.appsmith.com/).


## Further reading

At this point, you should know enough to start a project of your own and start playing around with datasources. The resources mentioned below can be useful when you need to learn new skills:

* [Building UI](/core-concepts/building-ui/)
* [Queries](/core-concepts/data-access-and-binding/querying-a-database/)
* [Data Access and Binding](/core-concepts/data-access-and-binding)
* [Connect to a localhost database/ API](/advanced-concepts/more/how-to-work-with-local-apis-on-appsmith)



