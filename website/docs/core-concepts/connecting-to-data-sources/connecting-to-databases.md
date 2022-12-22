---
description: >-
  You can connect to, and run queries to read and write data directly from the
  Appsmith editor.
---

# Databases

Databases are an essential part of many applications and are used to store and manage data. They provide a structured way to organize, retrieve, and manipulate data, and are designed to be efficient and reliable. You can run queries to read and write data directly from the Appsmith editor. 

### Connecting to a database



:::tip
Before connecting to a data source, you must whitelist the IP address of the Appsmith deployment on your database instance or VPC

18.223.74.85 and 3.131.104.27 are the IP addresses of the Appsmith cloud instances that need to be whitelisted

This is a guide on how to whitelist appsmith on AWS.
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

<VideoEmbed host="youtube" videoId="l_MNNa9mg0w" title="Using A Sample Database " caption="How to use sample database | Example"/>

* Click on **+** next to Datasources.
* Select the mock **users** PostgreSQL database.
* Now, click the **+** icon next to the **queries/js** and choose the user datasource.
* Add your code in the body section and **run** your query. For example:
```js
SELECT * FROM users;
```
The preceding query retrieves all the data from the users table. You can display the query results in a Table widget by [binding the data](/core-concepts/data-access-and-binding/displaying-data-read#displaying-data-in-a-widget) in the Table Data property.

:::note
Appsmith applications are **secure-by-default**. All sensitive credentials, such as database credentials, are encrypted with [**AES-256 encryption**](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard). Read more about [security](/product/security#security-measures-within-appsmith). 
:::

## General notes
Appsmith establishes a connection pool with the database server when you first connect the database to your app. This allows subsequent queries to be executed efficiently. If an idle connection is closed by the database server, Appsmith creates a new connection for the next query.

For certain database plugins such as PostgreSQL and MySQL, Appsmith maintains a connection pool because multiple queries can't be run on a single connection.

The maximum number of concurrent queries that can be run on a database with Appsmith is 5. If the application tries to execute more concurrent queries, you may receive an error message stating that the connection isn't available.

## What's next

At this point, you should know enough to start a project of your own and start playing around with datasources. The resources mentioned below can be useful when you need to learn new skills:

* [Building UI](/core-concepts/building-ui/)
* [Queries](/core-concepts/data-access-and-binding/querying-a-database/)
* [Data Access and Binding](/core-concepts/data-access-and-binding)
* [Datasources](/reference/datasources)


### Troubleshooting
Are you having trouble connecting datasources with Appsmith? check out the [Datasource troubleshooting guide](/help-and-support/troubleshooting-guide/action-errors/datasource-errors) or reach out on [Discord](https://discord.com/invite/rBTTVJp) to get support or ask questions on the [community forum](https://community.appsmith.com/).


