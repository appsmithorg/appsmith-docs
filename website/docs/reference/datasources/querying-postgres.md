---
sidebar_position: 13
---
# PostgreSQL

This document covers how to establish a connection between your PostgreSQL database and Appsmith to read and write data on your applications.


## Add PostgreSQL datasource

To add an PostgreSQL datasource, navigate to **Explorer** >> Click plus sign (**+**) next to **Datasources** >> Select PostgreSQL under Databases.


## Configure datasource

To connect to a PostgreSQL database, you must configure the following parameters. All required fields are suffixed with an asterisk (\*).


* **Connection Mode\*:** In PostgreSQL, connection mode refers to the level of permission granted to Appsmith when establishing a connection to the database. The two available modes are:

   * **Read Only:** By selecting Read Only mode, Appsmith can only read permissions to the database, allowing you to fetch data only.
   * **Read / Write:** By selecting Read/Write mode, Appsmith can both read and write permissions to the database, allowing you to execute all CRUD queries.


* **Host Address / Port\*:** Headers are metadata information about the communication between the client and server, while ports identify the endpoint on the network to which data is being sent. If you don’t specify a port, Appsmith may try to connect to port `5432`.
* **Database Name:** To establish a connection to the desired database instance, it's necessary to provide the database name. 

* **Authentication:**
Authentication is the process of providing specific parameters like username and password to authenticate connection requests to your database.

   * **Username:** A username is a unique identifier that's used to identify a specific user.
   * **Password:** A password is a secret code or phrase that's required to authenticate a user's identity and stored in encrypted form to protect against unauthorized access.

* **SSL:** In PostgreSQL, the SSL(Secure Sockets Layer) Mode can be set to one of five values:

   * **Default**: The Default SSL Mode is the same as Prefer, meaning SSL is used if the server supports it.
   * **Allow**: The Allow SSL Mode uses SSL only if the server _insists_ on it.
   * **Prefer**: The Prefer SSL Mode uses SSL if the server supports it but connects without SSL if it's not available.
   * **Require**: The Require SSL Mode rejects the connection if SSL isn't available.
   * **Disable**: Disabling SSL disallows all administrative requests over HTTPS. It uses a plain unencrypted connection.

For more information, see SSL Support on [PostgreSQL documentation](https://www.postgresql.org/docs/current/libpq-ssl.html).

![Configure PostgreSQL Datasource ](</img/postgres-img.png>)

## Write CRUD queries

You can create [queries](https://docs.appsmith.com/core-concepts/data-access-and-binding/querying-a-database/query-settings)  to PostgreSQL datasource by selecting the **+ New Query**  button available on the datasource page or by navigating to **Explorer** >> Click plus sign (**+**) next to Queries/JS >> Select the datasource name (PostgreSQL).

PostgreSQL databases can be queried using the standard [SQL syntax](https://www.postgresql.org/docs/12/index.html). All PostgreSQL queries return an array of objects where each object is a row returned by the query and each property in the object is a column.



### Fetch data
To fetch data, you'll need to first connect to your database by selecting your datasource in the **queries/js** section. Once you've created a query, you can add your SQL code in the body section.

For example, if you want to retrieve all the data from a table called `users`, you can use the following SQL code:

```sql
SELECT * FROM users;

//Retrieve first 10 rows of data from the `users` table:

SELECT * FROM users ORDER BY id LIMIT 10;
```
After fetching your data, you may want to display it in a table for better visualization. To do so, you can [bind your data](/reference/widgets/table) to a table using the Table data property: 

```js
{{Query1.data}}
```


### Insert data
The insert command is used to insert one or more rows into a database table with specified table values.

For instance, lets say you have a table called `users` with columns for `name`, `email`, and `phone`. If you want to insert data into a database table directly from the UI, you can use a [JSON form](/reference/widgets/json-form). 

To do this, you can add a JSON form and configure its properties to match the fields you want to insert into your database table. Then, you can set its **onClick** event to run the **insert query** using the INSERT INTO SQL command, something like:

```sql
INSERT INTO users
  (name, id, email)
VALUES
  (
    {{ JSONForm1.formData.name }},
    {{ JSONForm1.formData.employee_id}},
    {{ JSONForm1.formData.email }}
  );

```


This inserts a new row into the `users` table with the values entered into the JSON form fields.

### Update data
Update command let you update existing data of a particular type. With an update query, you can filter or remove any field belonging to a type.

For example, if you want to change the email ID in the users table, you can add an Update **column** to the table widget and change its column type to a **button**. 

* Bind the **onClick** event of the button to open a **modal** window to edit the data. 
* In the modal, you can use **input widgets** to update the record's fields. 
* Set the **onClick** event of the confirm button to execute an update query, and change the records section to update the selected row's fields with the input widget's text.

To update the data you can change the query to:
```sql
UPDATE users
  SET email = '{{Input1.text}}'
  WHERE id = {{ Table1.selectedRow.id }};
```

### Delete data
The Delete Record command deletes a particular record from the database. 

For instance, lets say you have a table called `users` with columns for `id`, `name`, `email`, and `phone`. If you want to delete a specific row from this table, 

* You can add a "Delete" column to the table property and set its type to an **button**. 
* Then, you can set the **onClick** property of the Delete button to execute the delete query, which removes the selected row from the database table.

You can change the query to:

```sql
DELETE FROM users WHERE id = {{Table1.selectedRow.id}};
```





## Using prepared statement

Normal query execution simply string concatenates the evaluated values of the javascript bindings to produce the final query. This opens up the possibility of SQL injection by merging untrusted user input with trusted data for execution. Using a prepared statement is one strategy for mitigating this risk.

Appsmith converts the user query into a parameterized one by replacing the bindings in the query with '?'. The payload is then inserted one by one ensuring that the bindings get escaped and sanitized before the query is sent to the database for execution.

Follow the guide on [how to use prepared statements](/learning-and-resources/how-to-guides/how-to-use-prepared-statements) for secure data transactions.



## Troubleshooting
If you are experiencing difficulties with connecting datasources in Appsmith, you can refer to the [Datasource troubleshooting guide](https://chat.openai.com/help-and-support/troubleshooting-guide/action-errors/datasource-errors) for assistance. If you need further support, you can reach out on [Discord](https://discord.com/invite/rBTTVJp) or ask questions on the [community forum](https://community.appsmith.com/).

## Further reading

* [Write queries](/core-concepts/data-access-and-binding/querying-a-database)
* [Data access and binding](/core-concepts/data-access-and-binding)

