---
sidebar_position: 12
---
# MySQL

This page describes how to connect your application to a MySQL database and use it to execute queries.

## Connect to MySQL database

To add a MySQL datasource, click the (**+**) sign in the **Explorer** tab next to **Datasources**. On the next screen, select **MySQL** button. Your datasource is created and you are taken to a screen to configure its settings.

:::info
Appsmith supports MySQL versions 5.5, 5.6, 5.7, and 8.0.
:::

### Configuration

:::caution important
If you are a self-hosted user, you may need to whitelist the IP address of the Appsmith deployment on your database instance or VPC before connecting to a database.

18.223.74.85 and 3.131.104.27 are the IP addresses of the Appsmith cloud instances that need to be whitelisted.
:::

<figure>
  <img src="/img/as-mysql-datasource-config.png" style= {{width:"100%", height:"auto"}} alt="MySQL Datasource configuration page"/>
  <figcaption align = "center"><i>MySQL Datasource configuration page</i></figcaption>
</figure>

:::tip
If you want to connect to a local database, you can use a service like [ngrok](https://ngrok.com/) to expose it. For more information, see [How to connect to local database on Appsmith](/learning-and-resources/how-to-guides/how-to-work-with-local-apis-on-appsmith).
:::

To connect to your database, Appsmith needs the following parameters. All required fields are suffixed with an asterisk (\*).

* **Connection Mode\*:** Choose which permissions to grant to Appsmith when establishing a connection to the database. The two available modes are:

   * **Read Only:** This mode gives Appsmith read-only permission on the database. Use this mode when you only need to fetch records so that you don't make accidental changes to your data.
   * **Read / Write:** This mode gives Appsmith both read and write permissions on the database. This allows you to make changes to your data via all CRUD queries.

* **Host Address\*:** Provide the hostname or IP address of your database server. If you are on a self-hosted instance and connecting to a database on `localhost`, use `host.docker.internal` on Windows and macOS hosts and `172.17.0.1` on Linux hosts to access services running on the host machine from within the container.

* **Port\*:** Provide the port on which to connect to your database. Appsmith tries to connect to port `5432` by default.

* **Database Name:** Provide the name of your database.

* **Authentication:** Provide the username and password for the user with which you are connecting to the database.

* **SSL:** Choose one of the following modes to set whether your queries use SSL to connect:

   * **Default**: SSL is used if the server supports it.
   * **Required**: The Require SSL Mode rejects the connection if SSL isn't available.
   * **Disabled**: Disabling SSL disallows all administrative requests over HTTPS. It uses a plain unencrypted connection.

* **Server Timezone Override:** Provide a valid timezone (For example: "UTC") to use for your queries. Use this option if Appsmith doesn't automatically recognize the MySQL server's timezone.


## SQL modes

```SQL_MODE``` is a system variable in MySQL that can:

* Configure the server's strictness when accepting input data,
* Enable or disable standard SQL conformance, or
* Provide better compatibility with other databases.

In particular, [strict mode](https://dev.mysql.com/doc/refman/8.0/en/sql-mode.html#sql-mode-strict) can help you ensure the integrity of your data by preventing the database from automatically inserting default values for missing or invalid data. 

Using SQL modes is recommended to ensure that your queries conform to standard SQL behavior. With SQL modes, your queries can run more consistently across different MySQL versions and configurations.

You can check the MySQL documentation to learn more about [SQL modes](https://dev.mysql.com/doc/refman/8.0/en/sql-mode.html).

### Setting SQL modes

To change the SQL mode at runtime, you can use a **SET** statement in a query to set the `GLOBAL` or `SESSION` ```sql_mode``` variable:

```js
SET GLOBAL sql_mode = 'mode1,mode2,...';
SET SESSION sql_mode = 'mode1,mode2,...';
```
where **mode1** and **mode2** are the specific SQL modes that you want to enable or disable. To switch to strict mode, it's recommended to use the TRADITIONAL mode by setting ```SET sql_mode = TRADITIONAL```.

## Create queries

You can write [queries](https://docs.appsmith.com/core-concepts/data-access-and-binding/querying-a-database/query-settings) to fetch or write data to the MySQL database by selecting the **+ New Query**  button on the MySQL datasource page, or by clicking (**+**) next to **Queries/JS** in the **Explorer** tab and selecting your MySQL database. You'll be brought to a new query screen where you can write SQL queries.

MySQL databases are queried using standard [SQL syntax](https://dev.mysql.com/doc/refman/8.0/en/language-structure.html). All MySQL queries return an array of objects where each object represents a row, and each property in the object is a column.

:::tip
[Prepared statements](/learning-and-resources/how-to-guides/how-to-use-prepared-statements) are turned on by default to improve the security of the queries in your app. 
:::

### Select

Use a `SELECT` statement to retrieve data from a table. For example, to fetch records from a table `users`:

```sql
SELECT * FROM users ORDER BY id LIMIT 10;
```

It's highly recommended to use the `LIMIT` operator like the example to prevent querying huge amounts of data at once. You can also read about how to [paginate your data](/reference/widgets/table#server-side-pagination).

After fetching your data, you can display it in a Table widget by [binding](/reference/widgets/table#display-data-in-tables) it to the **Table Data** property as shown below.

```js
// in the Table Data field of a table widget
{{ <query_name>.data }}
```

### Insert

Use an `INSERT` statement to add rows to a database table. 

For example, imagine you have a table called users with columns for `name`, `gender`, and `phone` and you'd like to create a new record. To gather data for the record, you can build a [Form](/reference/widgets/form) called "NewUserForm" containing:

- An [input widget](/reference/widgets/input) called "NameInput" for the name,
- A [Select widget](/reference/widgets/select) called "GenderSelect" for the gender.
- An input widget called "EmailInput" for the email,

Once these form fields are filled out, you can pull their values into your query like below:

```sql
INSERT INTO users
  (name, gender, email)
VALUES
  (
    {{ NewUserForm.data.NameInput }},
    {{ NewUserForm.data.GenderSelect }},
    {{ NewUserForm.data.EmailInput }}
  );

```

Then, run this query via the **onClick** event of a [Button widget](/reference/widgets/button) to insert the data into your database. Be sure to add an `onSuccess` callback that re-runs the fetch query to refresh the data in your Table widget.

### Update

Use `UPDATE` statements to change the values of existing records in your database.

For example, imagine you want to change the `email` value of a record in your `users` table. In your Table widget, make the `email` column [**Editable**](/reference/widgets/table/inline-editing#editable). A new **Save/Discard** button column should have appeared in the table.

In the Table's properties pane, open the column settings for the Save/Discard button column and set the button's **onClick** to run your `UPDATE` query. Be sure to add an `onSuccess` callback that re-runs the fetch query to refresh the data in your Table widget after execution.

Configure your query like below to set the existing `email` entry to the updated value from the Table.

```sql
UPDATE users
  SET email = '{{Table1.updatedRow.email}}'
  WHERE id = {{ Table1.selectedRow.id}};
```

Now you can edit the `email` cell of any row in the Table widget and click **Save** to send your update to the database.

### Delete

Use a `DELETE` statement to delete a record from your database.

For example, to delete an existing row from your table widget, add a button column to your Table widget and label it "Delete." Set that button's **onClick** event to run a `DELETE` query like the one below:

```sql
DELETE FROM users WHERE id = {{ Table1.selectedRow.id }};
```

When the user clicks the button, the record is deleted from the database table. Be sure to add an `onSuccess` callback to the delete query that re-runs your fetch query to refresh the data in your Table widget.

To avoid deleting records by accident, consider enabling the "Request confirmation before running query" setting in your [query's settings](/core-concepts/data-access-and-binding/querying-a-database/query-settings).

## Troubleshooting

If you are experiencing difficulties, you can refer to the [Datasource troubleshooting guide](/help-and-support/troubleshooting-guide/action-errors/datasource-errors) or the [MySQL Errors](/help-and-support/troubleshooting-guide/action-errors/mysql-plugin-errors) page for assistance.

If you need further support, you can reach out on [Discord](https://discord.com/invite/rBTTVJp) or ask questions on the [community forum](https://community.appsmith.com/).

## Further reading

* [Table widget](/reference/widgets/table)
* [Form widget](/reference/widgets/form)
* [Queries](/core-concepts/data-access-and-binding/querying-a-database/)
