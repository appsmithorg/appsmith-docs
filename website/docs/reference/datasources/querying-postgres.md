---
sidebar_position: 13
---
# PostgreSQL

This page shows you how to connect Appsmith to a PostgreSQL database to read and write data in your applications.

## Connect PostgreSQL

1. Click the **Explorer** tab on the entity explorer to the screen's left. Click the **+** icon next to **Datasources.** Select **PostgreSQL** under the **Databases** section. This opens the page where you can configure the parameters to connect to your PostgreSQL database. 
2. Rename the datasource to be able to identify it when creating queries.
3. Select the **Connection Mode**. Enter details in the input boxes for **Host Address**, **Port**, **Database Name**, **Username** and **Password**. See the [**reference guide**](#connection-parameters) for a complete description of all the connection parameters.

:::info
If you want to connect to a local PostgreSQL database, see [**Connect Local Database**](/advanced-concepts/more/how-to-work-with-local-apis-on-appsmith) for directions on configuring the connection parameters. 
:::

4. Click the **Test** button to test the connection and ensure the datasource is valid.
5. Click **Save** to create and save the database connection.

<figure>
  <img src="/img/postgres-img.png" style= {{width:"100%", height:"auto"}} alt="Connect PostgreSQL Database"/>
  <figcaption align = "center"><i>Connect PostgreSQL Database</i></figcaption>
</figure>


## Connection parameters
The following section list all the parameters provided by Appsmith to connect to a PostgreSQL database.

#### Connection Mode
Specifies the mode in which the Appsmith application can interact with the database.

  **Options**:

   * **Read Only:** This mode permits read-only transactions by default.
   * **Read / Write:** This mode permits both read-write transactions by default.

#### Host Address
The network location of the PostgreSQL server that you want to connect to. This can be a domain name or an IP address. If you want to connect to a local PostgreSQL database, see [**Connect Local Database**](/advanced-concepts/more/how-to-work-with-local-apis-on-appsmith) for directions on configuring the connection parameters.

#### Port
The port number to connect to at the server host. Appsmith connects to port `5432` by default, if you don't specify one.

#### Database Name
The name of the database that you want to connect to.

#### Username
The username that you want to use to authenticate with the PostgreSQL server.

#### Password
Password to be used if the server demands password authentication.

#### SSL Mode
Determines with what priority a secure SSL TCP/IP connection is negotiated with the server. 

  **Options**:
   * **Default**: The Default SSL Mode is **Prefer**.
   * **Allow**: First try a non-SSL connection; if that fails, try an SSL connection. The client can connect with or without SSL.
   * **Prefer**: First try an SSL connection; if that fails, try a non-SSL connection. The client tries to connect with SSL, but falls back to an unencrypted connection if SSL is not available.
   * **Require**: Only try an SSL connection. Rejects the connection if SSL isn't available.
   * **Disable**: Only try a non-SSL connection. Disallows all administrative requests over HTTPS. It uses a plain unencrypted connection.
  
For more information, see [SSL Support](https://www.postgresql.org/docs/current/libpq-ssl.html).


## Query PostgreSQL

You can create queries in two ways: 

- Click the **Explorer** tab on the entity explorer to the screen’s left. Expand the **Datasources** section**.** Select the name of your datasource. Click the **+ New Query** button on the top right of the page**.**
- Click the **Explorer** tab on the entity explorer to the screen’s left. Click the **+** icon next to next to **Queries/JS.** Select the PostgreSQL database name from the list.

<figure>
  <img src="/img/query-postgresql.png" style= {{width:"100%", height:"auto"}} alt="Write SQL commands in the query editor"/>
  <figcaption align = "center"><i>Write SQL commands in the query editor</i></figcaption>
</figure>


### Examples

See the official [PostgreSQL documentation](https://www.postgresql.org/docs/12/index.html) for the SQL syntax.

#### Fetch data

```sql
SELECT * FROM users LIMIT {{ tableUsers.pageSize }} OFFSET {{ tableUsers.pageOffset }};

```

In the above example, `tableUsers` is the name of the Table widget used to display the data using [server-side pagination](/reference/widgets/table#server-side-pagination).


#### Insert data

```
INSERT INTO users
  (name, gender, email)
VALUES
  (
    {{ nameInput.text }},
    {{ genderDropdown.selectedOptionValue }},
    {{ emailInput.text }}
  );

```

In the above example,  `nameInput`,  `genderDropdown`,  and `emailInput` are the names of the widgets used to capture input from the user for name, gender and email fields, respectively.

#### Update data

```
UPDATE users
  SET email = '{{emailInput.text}}'
  WHERE id = {{ tableUsers.selectedRow.id}};

```

In the above example, `emailInput` is the name of the Input widget used to capture the email entered by the user. `tableUsers` is the Table widget where the user selects the row to update the user's email.


#### Delete data

```
DELETE FROM users WHERE id = {{tableUsers.selectedRow.id}};

```

In the above example, `tableUsers` is the name of the Table widget where the row is selected for deletion.

## Use prepared statements

Prepared statements are switched on by default to help prevent SQL injection attacks. If the query has widget data bindings using the mustache template {{ }}, Appsmith internally replaces these with question marks (?), translating the queries into prepared statements. See [Prepared Statements](/learning-and-resources/how-to-guides/how-to-use-prepared-statements) for more details.


## Troubleshooting

[Missing required parameter](/help-and-support/troubleshooting-guide/action-errors#missing-query-error)<br />
[PostgreSQL query failed to execute](/help-and-support/troubleshooting-guide/action-errors#configuration-error)<br />
[Query preparation failed while inserting value](/help-and-support/troubleshooting-guide/action-errors#invalid-query-error)

If you experience difficulties, contact the support team using the chat widget at the bottom right of this page.

## Further reading

[Data access and binding](/core-concepts/data-access-and-binding)

