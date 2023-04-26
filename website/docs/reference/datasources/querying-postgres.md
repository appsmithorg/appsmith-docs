---
sidebar_position: 13
---

# PostgreSQL

This document covers how to establish a connection between your PostgreSQL database and Appsmith to read and write data on your applications.

## Connect to PostgreSQL datasource

To add a PostgreSQL datasource, navigate to **Explorer** >> click the (**+**) sign next to **Datasources** >> select PostgreSQL under Databases. This opens up the page where you can configure the parameters to connect to your PostgreSQL database.

### Configure datasource

To connect to a PostgreSQL database, you must configure the following parameters. All required fields are suffixed with an asterisk (\*).

<figure>
  <img src="/img/postgres-img.png" style= {{width:"700px", height:"auto"}} alt="Configure PostgreSQL Datasource"/>
  <figcaption align = "center"><i>Configure PostgreSQL Datasource</i></figcaption>
</figure>

- **Connection Mode\*:** This refers to the permission granted to Appsmith when establishing a connection to the database. The two available modes are:

  - **Read Only:** This mode gives Appsmith read-only permission on the database. This allows you to only fetch data from the database.
  - **Read / Write:** This mode gives Appsmith both read and write permissions on the database. This allows you to execute all CRUD queries.

- **Host Address\*:** Provide the hostname or IP address. If you are on a self-hosted instance and connecting to a database on `localhost`, use `host.docker.internal` on Windows and macOS hosts and `172.17.0.1` on Linux hosts to access services running on the host machine from within the container.

- **Port\*:** A port is a numerical identifier that helps establish a network connection. Appsmith tries to connect to port `5432` if you don't specify a port.

- **Database Name:** You need to specify the name of the database to retrieve data from it.

- **Authentication:** Username and password for authenticating connection requests to your database.

- **SSL:** The connection uses the Default SSL mode. You can set it to one of the following modes:

  - **Default**: The Default SSL Mode is the same as Prefer, meaning SSL is used if the server supports it.
  - **Allow**: The Allow SSL Mode uses SSL only if the server _insists_ on it.
  - **Prefer**: The Prefer SSL Mode uses SSL if the server supports it but connects without SSL if it's not available.
  - **Require**: The Require SSL Mode rejects the connection if SSL isn't available.
  - **Disable**: Disabling SSL disallows all administrative requests over HTTPS. It uses a plain unencrypted connection.

For more information, see [SSL Support](https://www.postgresql.org/docs/current/libpq-ssl.html).

:::tip
If you want to connect to a local database, you can use a service like [ngrok](https://ngrok.com/) to expose it. For more information, see [How to connect to local database on Appsmith](/advanced-concepts/more/how-to-work-with-local-apis-on-appsmith).
:::

## Create CRUD queries

You can write [queries](https://docs.appsmith.com/core-concepts/data-access-and-binding/querying-a-database/query-settings) to fetch or write data to the PostgreSQL database by selecting the **+ New Query** button available on datasource page under **Explorer** >> **Datasources** or by navigating to **Explorer** >> click (**+**) next to Queries/JS >> select your PostgreSQL database. You can then add your SQL code in the query editor.

PostgreSQL databases can be queried using the standard [SQL syntax](https://www.postgresql.org/docs/12/index.html). All PostgreSQL queries return an array of objects where each object is a row returned by the query, and each property in the object is a column.

### Fetch data

If you want to retrieve the data from a table `users`, you can write the following **SELECT** query `Query1`:

```sql
SELECT * FROM users ORDER BY id LIMIT 10;
```

After fetching your data, you can display it in a Table widget by [binding](/reference/widgets/table#display-data-in-tables) it to the **Table Data** property as shown below.

```js
{
  {
    Query1.data;
  }
}
```

### Insert data

The insert clause is used to insert one or more rows into a database table.

For instance, you have a table called users with columns for `name`, `email`, and `phone`. If you want to insert data into a database table directly from the UI, you can use a input or select widget, as shown below:

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

With an update query, you can filter or remove any field belonging to a type. For example, if you want to change the email ID in the users table, you can add an Update column to the table widget and change its column type to a button.

Set the onClick event of the confirm button to execute an update query, and change the records section to update the selected row's fields with the input widget's text.

```sql
UPDATE users
  SET email = '{{emailInput.text}}'
  WHERE id = {{ Table1.selectedRow.id}};
```

Run this query on the **onClick** event of the Update button to modify the selected row's fields with the new value entered in the widget.

### Delete data

The Delete Record command deletes a particular record from the database.

For instance, lets say you have a table called users with columns for id, name, email, and phone. If you want to delete a specific row from this table,

- You can add a "Delete" column to the table property and set its type to an button.
- Then, you can set the onClick property of the Delete button to execute the delete query, which removes the selected row from the database table.

You can change the query to:

```sql
DELETE FROM users WHERE id = {{Table1.selectedRow.id}};
```

## Using prepared statements

Appsmith converts the user query into a parameterized one by replacing the bindings in the query with '?'. The payload is then inserted one by one, ensuring that the bindings get escaped and sanitized before the query is sent to the database for execution.

See [how to use prepared statements](/learning-and-resources/how-to-guides/how-to-use-prepared-statements) for secure data transactions.

## Using PostgreSQL Row Level Security (RLS)

Row level security is a PostgreSQL security feature provided by the database to
limit what rows of a table are visible for querying. It allows database admins
define security policies to control how the rows of a given table can be
accessed or operated on. We have a video series outlining how to go about the
setup process as show below:

<VideoEmbed host="youtube" videoId="8qPTZQvJ9fA" title="How To Create Multi-Tenant Apps With Row-Level Security: RLS Series Part 1" caption="How To Create Multi-Tenant Apps With Row-Level Security: RLS Series Part 1"/>

## Troubleshooting

If you are experiencing difficulties with connecting datasources in Appsmith, you can refer to the [Datasource troubleshooting guide](/help-and-support/troubleshooting-guide/action-errors/datasource-errors) for assistance. If you need further support, you can reach out on [Discord](https://discord.com/invite/rBTTVJp) or ask questions on the [community forum](https://community.appsmith.com/).

## Further reading

- [Queries](/core-concepts/data-access-and-binding/querying-a-database)
- [Data access and binding](/core-concepts/data-access-and-binding)
