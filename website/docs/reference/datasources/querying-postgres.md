---
sidebar_position: 12
---
# PostgreSQL

:::note
The following document assumes that you understand the [basics of connecting to databases on Appsmith](/core-concepts/connecting-to-data-sources/connecting-to-databases.md#connecting-to-a-database). If not, please go over them before reading further.
:::

## Connection Settings

Appsmith needs the following parameters for connecting to a PostgreSQL database:

:::tip
All required fields are suffixed with an asterisk (\*).
:::

### **Connection**

You need to fill in the following parameters:

* **Connection Mode\*:** You must choose one of the following two modes:
  * **Read Only:** Choosing this mode gives Appsmith read-only permission on the database. This allows you to only fetch data from the database.
  * **Read / Write:** Choosing this mode gives Appsmith both read and write permissions on the database. This allows you to execute all CRUD queries.
* **Host Address / Port\*:** Fill in the database host’s address and port. If you don’t specify a port, Appsmith will try to connect to port 5432.
* **Database Name\*:** Fill in the name of the database that you want to connect to. This is your database’s name.

### **Authentication**

You need to fill in the following parameters:

* **Username\*:** Fill username required for authenticating connection requests to your database.
* **Password\*:** Fill password required for authenticating connection requests for the given username to the database.

### **SSL**

The SSL Mode can be set to one of the following values:

* **`Default`**: Same as `Prefer`.
* **`Allow`**: Use SSL, only if the server _insists_ on it.
* **`Prefer`**: Use SSL, if the server _supports_ it.
* **`Require`**: Reject connection, if SSL is not available.
* **`Disable`**: Connect without SSL, use a plain unencrypted connection.

More information available at [PostgreSQL documentation](https://jdbc.postgresql.org/documentation/head/ssl-client.html).

## Querying Postgres

PostgreSQL databases can be queried using the standard [SQL syntax](https://www.postgresql.org/docs/12/index.html). All PostgreSQL queries return an array of objects where each object is a row returned by the query and each property in the object is a column.

![](/img/postgres.gif)

## Using Prepared Statement (Beta)

Normal query execution simply string concatenates the evaluated values of the javascript bindings to produce the final query. This opens up the possibility of SQL injection by merging untrusted user input with trusted data for execution. Using a prepared statement is one strategy for mitigating this risk.

Appsmith converts the user query into a parameterized one by replacing the bindings in the query with '?'. The payload is then inserted one by one ensuring that the bindings get properly escaped and sanitized before the query is sent to the database for execution.

Follow the guide on [how to use prepared statements](/learning-and-resources/how-to-guides/how-to-use-prepared-statements.md) for efficient and secured data transactions.


<VideoEmbed host="youtube" videoId="Q69wdQEQbbE" title="" caption=""/>

## Using Queries in Applications

Once you have successfully run a Query, you can use it in your application to

* [Display Data](/core-concepts/data-access-and-binding/displaying-data-read/)
* [Capture Data](/core-concepts/data-access-and-binding/capturing-data-write/)
