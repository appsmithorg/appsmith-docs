---
sidebar_position: 12
---
# MySQL

:::note
The following document assumes that you understand the [basics of connecting to databases on Appsmith](/core-concepts/connecting-to-data-sources/connecting-to-databases.md#connecting-to-a-database). If not, please go over them before reading further.
:::

## **Supported versions**

Appsmith supports MySQL versions 5.5, 5.6, 5.7, and 8.0.

## Connection settings

Appsmith needs the following parameters for connecting to a MySQL database:

:::tip
All required fields are suffixed with an asterisk (\*).
:::

### **Connection**

You need to fill in the following parameters:

* **Connection Mode\*:** You must choose one of the following two modes:
  * **Read Only:** Choosing this mode gives Appsmith read-only permission on the database. This allows you to only fetch data from the database.
  * **Read / Write:** Choosing this mode gives Appsmith both read and write permissions on the database. This allows you to execute all CRUD queries.
* **Host Address / port\*:** Fill in the database host’s address and port. If you don’t specify a port, Appsmith may to connect to port 3306.
* **Database Name\*:** Fill in the name of the database that you want to connect to. This is your database’s name.

### Authentication

You need to fill in the following parameters:

* **Username\*:** Fill username required for authenticating connection requests to your database.
* **Password\*:** Fill password required for authenticating connection requests for the given username to the database.

### SSL

The SSL Mode can be set to one of the following values:

* **`Default`**: Same as `Preferred`.
* **`Preferred`**: Use SSL, if the server _supports_ it.
* **`Required`**: Reject connection, if SSL isn't available.
* **`Disabled`**: Connect without SSL, use a plain unencrypted connection.

More information available at [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/connection-options.html#option\_general\_ssl-mode).

## Querying MySQL

MySQL databases can be queried using the standard [SQL syntax](https://dev.mysql.com/doc/refman/8.0/en/). All MySQL queries return an array of objects where each object is a row returned by the query and each property in the object is a column.

![](/img/postgres.gif)



### SQL modes

```SQL_MODE``` is a system variable in MySQL that controls the behavior of the MySQL server. It can be used to configure the server to be strict or forgiving when accepting input data, enable or disable standard SQL conformance, or provide better compatibility with other databases. [Strict mode](https://dev.mysql.com/doc/refman/8.0/en/sql-mode.html#sql-mode-strict) can help you ensure the integrity of your data by preventing the database from automatically inserting default values for missing or invalid data. 

#### Setting SQL modes

To change the SQL mode at runtime, you can use a **SET** statement to set the `GLOBAL` or `SESSION` ```sql_mode``` system variable:

```js
SET GLOBAL sql_mode = 'mode1,mode2,...';
SET SESSION sql_mode = 'mode1,mode2,...';
```
where **mode1**, **mode2**, etc. are the specific SQL modes that you want to enable or disable. To switch to strict mode, it is recommended to use the TRADITIONAL mode by setting ```SET sql_mode to TRADITIONAL```.

* To check whether strict mode is enabled or not run:
```SHOW VARIABLES LIKE 'sql_mode';```

* To disable strict mode run:
```set global sql_mode='';```

Using SQL modes is recommended to ensure that your queries conform to standard SQL behavior. With SQL modes, your queries can run more consistently across different MySQL versions and configurations. You can check the SQL documentation to learn more about [SQL modes.](https://dev.mysql.com/doc/refman/8.0/en/sql-mode.html)

## Using prepared statement (beta)

Normal query execution simply string concatenates the evaluated values of the javascript bindings to produce the final query. This opens up the possibility of SQL injection by merging suspicious user input with trusted data for execution. Using a prepared Statement is one strategy for mitigating this risk.

Appsmith converts the user query into a parameterized one by replacing the bindings in the query with '?'. The payload is then inserted one by one ensuring that the bindings get escaped and sanitized before the query is sent to the database for execution.

Follow the guide on [how to use prepared statements](/learning-and-resources/how-to-guides/how-to-use-prepared-statements) for efficient and secured data transactions.

## Using queries in applications

Once you have successfully run a Query, you can use it in your application to

* [Display Data](/core-concepts/data-access-and-binding/displaying-data-read/)
* [Capture Data](/core-concepts/data-access-and-binding/capturing-data-write/)
