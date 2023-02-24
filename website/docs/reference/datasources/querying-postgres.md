---
sidebar_position: 13
---
# PostgreSQL

This document covers how to establish a connection between your PostgreSQL database and Appsmith to read and write data on your applications.


## Add PostgreSQL datasource

To add a PostgreSQL datasource, navigate to **Explorer** >> click the (**+**) sign next to **Datasources** >> select PostgreSQL under Databases. This opens up the page where you can configure the parameters to connect to your PostgreSQL database.


## Configure datasource

To connect to a PostgreSQL database, you must configure the following parameters. All required fields are suffixed with an asterisk (\*).


* **Connection Mode\*:** This refers to the permission granted to Appsmith when establishing a connection to the database. The two available modes are:

   * **Read Only:** This mode gives Appsmith read-only permission on the database. This allows you to only fetch data from the database.
   * **Read / Write:** This mode gives Appsmith both read and write permissions on the database. This allows you to execute all CRUD queries.

* **Host Address\*:** Provide the hostname or IP address. If you are on a self-hosted instance and connecting to a database on `localhost`, use `host.docker.internal` on Windows and macOS hosts and `172.17.0.1` on Linux hosts to access services running on the host machine from within the container.

* **Port:** If you don’t specify a port, Appsmith may try to connect to port `5432`.

* **Database Name:** Provide the database name.

* **Authentication:** Username and password for authenticating connection requests to your database.

* **SSL:** The connection uses the Default SSL mode. You can set it to one of the following modes:

   * **Default**: The Default SSL Mode is the same as Prefer, meaning SSL is used if the server supports it.
   * **Allow**: The Allow SSL Mode uses SSL only if the server _insists_ on it.
   * **Prefer**: The Prefer SSL Mode uses SSL if the server supports it but connects without SSL if it's not available.
   * **Require**: The Require SSL Mode rejects the connection if SSL isn't available.
   * **Disable**: Disabling SSL disallows all administrative requests over HTTPS. It uses a plain unencrypted connection.

For more information, see [SSL Support](https://www.postgresql.org/docs/current/libpq-ssl.html).

<figure>
  <img src="/img/postgres-img.png" style= {{width:"700px", height:"auto"}} alt="Configure PostgreSQL Datasource"/>
  <figcaption align = "center"><i>Configure PostgreSQL Datasource</i></figcaption>
</figure>

:::tip
If you want to connect to a local database, you can use a service like [ngrok](https://ngrok.com/) to expose it. For more information, see [How to connect to local database on Appsmith](/advanced-concepts/more/how-to-work-with-local-apis-on-appsmith).
:::


## Write simple CRUD queries

You can write [queries](https://docs.appsmith.com/core-concepts/data-access-and-binding/querying-a-database/query-settings) to fetch or write data to the PostgreSQL database by selecting the **+ New Query**  button available on datasource page under **Explorer** >> **Datasources** or by navigating to **Explorer** >> click (**+**) next to Queries/JS >> select your PostgreSQL database. You can then add your SQL code in the query editor.

PostgreSQL databases can be queried using the standard [SQL syntax](https://www.postgresql.org/docs/12/index.html). All PostgreSQL queries return an array of objects where each object is a row returned by the query, and each property in the object is a column.

### Fetch data

If you want to retrieve the data from a table `users`, you can write the following **SELECT** query `Query1`:

```sql
SELECT * FROM users;
```
After fetching your data, you can display it in a Table widget by [binding](/reference/widgets/table#display-data-in-tables) it to the **Table Data** property as shown below. 

```js
{{Query1.data}}
```

### Insert data
The insert clause is used to insert one or more rows into a database table. Suppose you have a table `users` and want to insert data entered in the widgets, write an insert query as shown below.

```sql
INSERT INTO users
  (name, gender, email)
VALUES
  (
    {{ nameInput.text }},
    {{ genderDropdown.selectedOptionValue }},
    {{ emailInput.text }}
  );

```
You can then call this query on the **onClick** event of the Submit button to insert the data into your database table.

### Update data

Suppose you want to update the data with the information entered in the widgets for a selected row in a Table widget, write an update query as shown below:

```sql
UPDATE users
  SET email = '{{emailInput.text}}'
  WHERE id = {{ Table1.selectedRow.id}};
```

Run this query on the **onClick** event of the Update button to modify the selected row's fields with the new value entered in the widget.

### Delete data

To delete the selected row in a Table widget write the following query and call it on the **onClick** event of the Delete button.

```sql
DELETE FROM users WHERE id = {{Table1.selectedRow.id}};
```

## Using prepared statements

Normal query execution concatenates the evaluated values of the JavaScript bindings to produce the final query. This opens up the possibility of SQL injections by merging untrusted user input with trusted data during execution. Using a prepared statement is one strategy for mitigating this risk.

Appsmith converts the user query into a parameterized one by replacing the bindings in the query with '?'. The payload is then inserted one by one, ensuring that the bindings get escaped and sanitized before the query is sent to the database for execution.

See [how to use prepared statements](/learning-and-resources/how-to-guides/how-to-use-prepared-statements) for secure data transactions.


## Troubleshooting
If you are experiencing difficulties with connecting datasources in Appsmith, you can refer to the [Datasource troubleshooting guide](https://chat.openai.com/help-and-support/troubleshooting-guide/action-errors/datasource-errors) for assistance. If you need further support, you can reach out on [Discord](https://discord.com/invite/rBTTVJp) or ask questions on the [community forum](https://community.appsmith.com/).

## Further reading

* [Write queries](/core-concepts/data-access-and-binding/querying-a-database)
* [Data access and binding](/core-concepts/data-access-and-binding)

