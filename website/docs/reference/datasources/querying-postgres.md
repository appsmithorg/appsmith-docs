---
sidebar_position: 13
---
# PostgreSQL
PostgreSQL is a reliable open source relational database management system that offers advanced features and capability for managing large datasets. This documentation provides guidance on establishing the connection and configuring the integration.

:::info
To integrate PostgreSQL with Appsmith, you should understand the [basics of connecting to databases on Appsmith.](/core-concepts/connecting-to-data-sources/connecting-to-databases.md#connecting-to-a-database)
:::

## Create PostgreSQL datasource

To add an PostgreSQL datasource, navigate to **Explorer** >> Click plus sign (**+**) next to **Datasources** >> Select PostgreSQL under Databases.


## Connection settings

Configure the PostgreSQL as illustrated below:


:::info
All required fields are suffixed with an asterisk (\*).
:::

#### Connection mode*

In PostgreSQL, connection mode refers to the level of permission granted to Appsmith when establishing a connection to the database. The two available modes are:

* **Read Only:** By selecting Read Only mode, Appsmith can only read permissions to the database, allowing you to fetch data only.
* **Read / Write:** By selecting Read/Write mode, Appsmith can both read and write permissions to the database, allowing you to execute all CRUD queries.


#### Host Address/Port

Headers are metadata information about the communication between the client and server, while ports identify the endpoint on the network to which data is being sent. If you don’t specify a port, Appsmith may try to connect to port `5432`.

#### Database name
Databases are separate and independent entities, and each database has its own set of tables, views, indexes, and other objects. Therefore, specifying the correct database name is essential for connecting to and accessing the correct database instance.

#### Authentication

The process of authentication requires you to provide certain parameters. These parameters include a username and password which are necessary for authenticating connection requests to your database. 
* **Username:** A username is a unique identifier that's used to identify a specific user.
* **Password:** A password is a secret code or phrase that's required to authenticate a user's identity and allow access to the database. The password is stored in a encrypted form, to protect it from being accessed by unauthorized users.

#### SSL

SSL (Secure Sockets Layer) is a protocol that provides a secure and encrypted connection between a client and server. In PostgreSQL, the SSL Mode can be set to one of five values:

* **Default**: The Default SSL Mode is the same as Prefer, meaning SSL is used if the server supports it.
* **Allow**: The Allow SSL Mode uses SSL only if the server _insists_ on it.
* **Prefer**: The Prefer SSL Mode uses SSL if the server supports it but connects without SSL if it's not available.
* **Require**: The Require SSL Mode rejects the connection if SSL isn't available.
* **Disable**: The Require SSL Mode rejects the connection if SSL isn't available.

For more information on SSL, you can refer to the [PostgreSQL documentation](https://www.postgresql.org/docs/current/libpq-ssl.html).


## Create queries

You can create queries to PostgreSQL datasource by selecting the **+ New Query**  button available on the datasource page or by navigating to **Explorer** >> Click plus sign (**+**) next to Queries/JS >> Select the datasource name (PostgreSQL).

PostgreSQL databases can be queried using the standard [SQL syntax](https://www.postgresql.org/docs/12/index.html). All PostgreSQL queries return an array of objects where each object is a row returned by the query and each property in the object is a column.

### Query
You can create queries to fetch, update, and delete data from a datasource using the Appsmith query editor. We would use the [sample database](/core-concepts/connecting-to-data-sources/connecting-to-databases#sample-databases) to perform these tasks. Lets discuss the following query methods:


| Query Name                                                  | Description                             |
| ----------------------------------------------------------- | --------------------------------------- |
| [​List Records​](#list-records)                   | Fetches all the data from the database. |
| [Update Records​](#update-records) | Update a few fields in a record.  |
| [Insert records​/create records​](#insert-recordscreate-records)             | Insert a new record in the database.               |
| [Delete record​](#delete-record)               | Delete a specific record.  |

You can check the [Query Settings Guide](https://docs.appsmith.com/core-concepts/data-access-and-binding/querying-a-database/query-settings) to learn more about queries.

### List records
List command lets you display all the data from the database. With Appsmith, you can present data that has been filtered and sorted based on fields, records, etc.

* Click on the **+** icon next to the queries/js and choose your **datasource**.
* Add your code in the body section.

For example, the select query retrieves all the data from the users table: 

```js
SELECT * FROM users;
```
You can even filter data, like retrieving only the first 10 rows from a table. 

```js
SELECT * FROM users ORDER BY id LIMIT 10;
```
You can display the query results in a Table widget by [binding the data in the Table](https://docs.appsmith.com/core-concepts/data-access-and-binding/displaying-data-read#displaying-data-in-a-widget) Data property.

### Insert records​/create records
Insert is a widely used command in the Structured Query Language (SQL). The insert command is used to insert one or more rows into a database table with specified table values.

* Click on the **+** icon next to the queries/js and choose your **datasource**.
* Add your code in the body section.

```js
INSERT INTO users
  (name, gender, email)
VALUES
  (
    {{ nameInput.text }},
    {{ genderDropdown.selectedOptionValue }},
    {{ nameInput.text }}
  );

```

You can create a new records using the [Input](/reference/widgets/input) and [modal widget](/reference/widgets/modal).




### Delete record
The Delete Record command deletes a particular record from the database. 

* Click on the **+** icon next to the queries/js and choose your **datasource**.
* Add your code in the body section.

For instance, you can use the following command to delete a row from the users table:

```js
DELETE FROM users WHERE id = 1;
```

### Update records
Update command let you update existing data of a particular type. With an update query, you can filter nodes and set or remove any field belonging to a type.

* Click on the **+** icon next to the queries/js and choose your **datasource**.
* Add your code in the body section.

For example, if you want to change the email ID in the users table, you can:

```js
UPDATE users
  SET email = 'new@email.com'
  WHERE id = {{5}};
```

You can use the [Modal widget](https://docs.appsmith.com/reference/widgets/modal) or [JSON form Widget](https://docs.appsmith.com/reference/widgets/json-form) to update the database.


## Using prepared statement

Normal query execution simply string concatenates the evaluated values of the javascript bindings to produce the final query. This opens up the possibility of SQL injection by merging untrusted user input with trusted data for execution. Using a prepared statement is one strategy for mitigating this risk.

Appsmith converts the user query into a parameterized one by replacing the bindings in the query with '?'. The payload is then inserted one by one ensuring that the bindings get escaped and sanitized before the query is sent to the database for execution.

Follow the guide on [how to use prepared statements](/learning-and-resources/how-to-guides/how-to-use-prepared-statements.md) for efficient and secured data transactions.


<VideoEmbed host="youtube" videoId="Q69wdQEQbbE" title="" caption=""/>

## Troubleshooting
If you are experiencing difficulties with connecting datasources in Appsmith, you can refer to the [Datasource troubleshooting guide](https://chat.openai.com/help-and-support/troubleshooting-guide/action-errors/datasource-errors) for assistance. If you need further support, you can reach out on [Discord](https://discord.com/invite/rBTTVJp) or ask questions on the [community forum](https://community.appsmith.com/).

## Further reading

* [Write queries](/core-concepts/data-access-and-binding/querying-a-database)
* [Data access and binding](/core-concepts/data-access-and-binding)
* [Connect to a local database or API](/advanced-concepts/more/how-to-work-with-local-apis-on-appsmith)
