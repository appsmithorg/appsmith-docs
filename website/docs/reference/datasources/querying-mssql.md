---
sidebar_position: 11
---

# Microsoft SQL Server (MS SQL)

This page describes how to connect your application to your Microsoft SQL Server databases and use queries to manage their content.

:::info
Appsmith's backend server supports **TLS1.1** and **TLS1.2** for connecting to endpoints.
:::

## Connect to an MS SQL database

To add a MS SQL datasource, click the (**+**) sign in the **Explorer** tab next to **Datasources**. On the next screen, select the **Microsoft SQL Server** button. Your datasource is created and you are taken to a screen to configure its settings.

### Configuration

:::caution important
If you are a self-hosted user, you may need to whitelist the IP address of the Appsmith deployment on your database instance or VPC before connecting to a database.

18.223.74.85 and 3.131.104.27 are the IP addresses of the Appsmith cloud instances that need to be whitelisted.
:::

<figure>
  <img src="/img/mssql-datasource-config.png" style={{width: "100%", height: "auto"}} alt="Configuring an MS SQL datasource." />
  <figcaption align="center"><i>Configuring an MS SQL datasource.</i></figcaption>
</figure>

:::tip
If you want to connect to a local database, you can use a service like ngrok to expose it. For more information, see [How to connect to local database on Appsmith](/learning-and-resources/how-to-guides/how-to-work-with-local-apis-on-appsmith).
:::

To connect to your database, Appsmith needs the following parameters. All required fields are suffixed with an asterisk (*).

**Connection Mode*:**
  * **Read / Write:** This mode gives Appsmith both read and write permissions on the database. This allows you to make changes to your data via all CRUD queries.
  * **Read Only:** This mode gives Appsmith read-only permission on the database. Use this mode when you only need to fetch records so that you don't make accidental changes to your data.

**Host Address*:** Provide the hostname or IP address of your database server. If you are on a self-hosted instance and connecting to a database on `localhost`, use `host.docker.internal` on Windows and macOS hosts and `172.17.0.1` on Linux hosts to access services running on the host machine from within the container.

**Port*:**  Provide the port on which to connect to your database. Appsmith tries to connect to port `5432` by default.

**Database Name*:** Provide the name of your database.

**Authentication*:** Provide the username and password for the user with which you are connecting to the database.

**SSL:** choose one of the following modes to set whether your queries use SSL to connect:
  * **Enabled with no verify:** Appsmith attempts to connect using SSL, but doesn't verify the authenticity of the database server.
  * **Disabled:** Appsmith won't attempt an SSL connection.

## Create queries

<figure>
  <img src="/img/mssql-query-config.png" style={{width: "100%", height: "auto"}} alt="Configuring an MS SQL query." />
  <figcaption align="center"><i>Configuring an MS SQL query.</i></figcaption>
</figure>

You can write [queries](https://docs.appsmith.com/core-concepts/data-access-and-binding/querying-a-database/query-settings) to fetch or write data to the MS SQL database by selecting the **+ New Query**  button on the MS SQL datasource page, or by clicking (**+**) next to **Queries/JS** in the **Explorer** tab and selecting your MS SQL database. You'll be brought to a new query screen where you can write SQL queries.

You can query MsSQL databases using [T-SQL syntax](https://docs.microsoft.com/en-us/sql/t-sql/tutorial-writing-transact-sql-statements?view=sql-server-ver15). All MS SQL queries return an array of objects where each object represents a row, and each property in the object is a column.

:::info
Prepared statements are turned on by default to improve the security of the queries in your app. Read more about prepared statements [here](/learning-and-resources/how-to-guides/how-to-use-prepared-statements).
:::

## Select

Use a `SELECT` statement to retrieve data from a table:

```sql
SELECT TOP 10 * FROM users ORDER BY employee_id;
```

It's highly recommended to keywords like `TOP 10` or `FETCH NEXT 10 ROWS` to prevent querying huge amounts of data at once.

---

#### Example

> Fetch all records from a table `users`, 10 records at a time, and put them into a Table widget `UsersTable`.

* Create a query called `FetchUsers` based on your MS SQL datasource, and a [Table widget](/reference/widgets/table) on the canvas called `UsersTable`.

* This query is a `SELECT` operation, and uses properties from the Table widget along with to calculate which subset of the table to return for each page.

  ```sql
  SELECT * FROM users
  ORDER BY employee_id
  OFFSET {{ UsersTable.pageOffset }} ROWS
  FETCH NEXT {{ UsersTable.pageSize }} ROWS ONLY;
  ```

* In your Table widget, turn on **Server side pagination**. In the **onPageChange** event, select the **Execute a query > FetchUsers** action. Now when the page buttons in the table header are clicked, the query fetches the correct page of data.

* In the **Table Data** property of your Table widget, bind the result of your query:

  ```javascript
  // in the Table Data property of UsersTable
  {{ FetchUsers.data }}
  ```

Your table should fill with data when the query is run.

## Insert

Use `INSERT` statements to add new records to your database tables. For example:

```sql
INSERT INTO users
  (name, date_of_birth, employee_id)
VALUES
  ('Alan Lee', '1989/11/2', 1009 );
```

---

#### Example

> Create a new record in a table `users`, with columns for `name`, `date_of_birth`, and `employee_id`.

* Create your query called `InsertNewUser` based on your MS SQL datasource.

* To gather data, create a [JSON Form](/reference/widgets/json-form) on the canvas called `NewUserForm`. Add **Source Data** to the JSON Form to create input fields:

  ```json
  {{
    {
      name: "",
      date_of_birth: "",
      employee_id: ""
    }
  }}
  ```

* In JSON Form's Submit [button](/reference/widgets/button) properties, configure the **onClick** event to execute your query:

  ```javascript
  // Submit button's onClick event
  {{ InsertNewUser.run() }}
  ```

* Once these form fields are filled out, you can add their values to your query's SQL statement as below:

  ```sql
  INSERT INTO users
    (name, date_of_birth, employee_id)
  VALUES
    (
      {{ NewUserForm.formData.name }},
      {{ NewUserForm.formData.date_of_birth }},
      {{ NewUserForm.formData.employee_id }}
    );

  ```

When the Submit button is clicked, your query is executed and the new record is inserted into your table.

## Update

Use `UPDATE` statements to change the values of existing records in your database:

```sql
UPDATE users
SET name = 'Allen Lee'
WHERE employee_id = 1009;
```

---

#### Example

> Modify a record in a table `users`, with columns for `name`, `date_of_birth`, and `employee_id`.

* Create your query called `UpdateUser` based on your MS SQL datasource. You should have a [Table widget](/reference/widgets/table) `UsersTable` containing your users data from another `SELECT` query.

* Create a [JSON Form widget](/reference/widgets/json-form) to use for submitting your updated values. Add **Source Data** to the JSON Form to create input fields. Reference the `selectedRow` of `UsersTable` to pre-fill the form fields:

  ```json
  {{
    {
      name: UsersTable.selectedRow.name,
      date_of_birth: UsersTable.selectedRow.date_of_birth
    }
  }}
  ```

  You may want to remove any field that's used as a unique identifier for your record; in this case, `employee_id` isn't in the form because it's unique to each user and is used to identify them in the dataset.

* In JSON Form's Submit [button](/reference/widgets/button) properties, configure the **onClick** event to execute your query:

  ```javascript
  // Submit button's onClick event
  {{ UpdateUser.run() }}
  ```

* To add your modified row data to your query, reference them in your SQL statement:

  ```sql
  UPDATE users
  SET
    name = {{ UpdateUserForm.formData.name }},
    date_of_birth = {{ UpdateUserForm.formData.date_of_birth }}
  WHERE employee_id = {{ UsersTable.selectedRow.employee_id }};
  ```

When the Submit button is clicked, your query is executed and the record is updated in your table.

## Delete

Use `DELETE` statements to delete records from your table:

```sql
DELETE FROM users
WHERE employee_id = 1009;
```

---

#### Example

> Delete a record from a table `users`.

* Create your query called `DeleteUser` based on your MS SQL datasource. You should have a [Table widget](/reference/widgets/table) `UsersTable` containing your table data from a `SELECT` query.

* Create a [Button widget](/reference/widgets/button) on the canvas and update its **Label** to "Delete." Set its **onClick** event to execute your `DeleteUser` query:

  ```javascript
  // in the Delete button's onClick event
  {{ DeleteUser.run() }}
  ```

* To delete a specific record, you should reference it with a uniquely identifying value, such as its `employee_id` in this case. In your `DeleteUser` query, bind the `employee_id` value of the Table's selected row:

  ```sql
  DELETE FROM users
  WHERE employee_id = {{ UsersTable.selectedRow.employee_id }};
  ```

Now when the button is clicked, the query is run and the corresponding row is deleted from your table.

## Troubleshooting

If you are experiencing difficulties, you can refer to the [troubleshooting guide](/help-and-support/troubleshooting-guide/action-errors/) for assistance.

If you need further support, you can reach out on [Discord](https://discord.com/invite/rBTTVJp) or ask questions on the [community forum](https://community.appsmith.com/).

## Further reading

* [Queries](/core-concepts/data-access-and-binding/querying-a-database/)
* [Table widget](/reference/widgets/table)
* [Form widget](/reference/widgets/form)
