# Databricks

This page provides information on connecting your application to Databricks, which enables you to explore and analyze large volumes of data using SQL.


## Connect Databricks

<ZoomImage
  src="/img/Databricks-img.png" 
  alt="Databricks datasource"
  caption="Databricks datasource"
/>

### Connection parameters

The following section is a reference guide that provides a complete description of all the parameters to connect to a Databricks datasource.

#### Configuration method

This method allows you to select a configuration type.


<dd>

*Options*

* **JDBC**: JDBC (Java Database Connectivity) provides a standardized approach to connect to Databricks databases. This method allows you to add a **JDBC URL** for authentication.

* **Use form properties**: This method allows you to customize and define specific connection parameters such as host, port, HTTP path, default catalog, and default schema.

</dd>

#### JDBC URL

<dd>

JDBC URL (Java Database Connectivity Uniform Resource Locator) is a string of characters that specifies the address and parameters needed to connect to a Databricks database using JDBC. 

*Example format*:

```
jdbc:databricks://<server-hostname>:443;httpPath=<http-path>[;<setting1>=<value1>;<setting2>=<value2>;<settingN>=<valueN>]
```

* `<server-hostname>`: Replace this placeholder with the hostname or IP address of your Databricks workspace server.

* `443`: Indicates the port number (default is 443) for the JDBC connection.

* `httpPath=<http-path>`: Specifies the HTTP path for the connection.

* `[;<setting1>=<value1>;<setting2>=<value2>;<settingN>=<valueN>]`: Additional optional settings and their corresponding values. These settings can include authentication details, catalog, schema, etc.

Learn more about [JDBC URL](https://docs.databricks.com/en/integrations/jdbc/authentication.html)

</dd>

#### Personal access token

<dd>

A Personal Access Token is a secure authentication token used to access resources within Databricks. 

To create a Databricks personal access token, go to User Settings in your workspace, navigate to Developer, click Manage next to Access tokens, and generate a new token, `e.g., dapi69test66c547ee2sample51d9f1007`.

Learn more about [Personal access tokens](https://docs.databricks.com/en/dev-tools/auth/pat.html)


</dd>

#### Host

<dd>

This property specifies the server hostname or IP address of your Databricks workspace. Example, `dbc-dbtest-ea55.cloud.databricks.com`

</dd>


#### Port

<dd>

This property defines the port number to establish the connection. The default port is set to `443`, which is commonly used for secure HTTPS connections.

</dd>

#### HTTP Path

<dd>

Indicates the path for the HTTP connection. It represents the specific endpoint or location within your Databricks workspace where the connection is directed. Example, `/sql/1.0/warehouses/6123123test`

</dd>

#### Default Catalog

<dd>

Refers to the default database catalog to be used in your Databricks connection. It specifies the database where the tables and data are stored. 

</dd>


#### Default Schema

<dd>

This property defines the default schema to be used in the connection. A schema is a logical container for database objects (tables, views, etc.), and specifying a default schema streamlines queries by indicating where to find these objects.


</dd>


## Query Databricks

The following section provides examples of creating basic CRUD queries on Databricks. The syntax and operations are similar to standard [SQL](/connect-data/reference/querying-postgres), and Databricks supports common SQL commands for creating, reading, updating, and deleting data. 

<ZoomImage
  src="/img/query-databricks.png" 
  alt="Query Databricks"
  caption="Query Databricks"
/>




### Fetch data

```sql
-- Use quotes for non-integer values
SELECT *
FROM default.customer
LIMIT {{ tableUsers.pageSize }} OFFSET {{ tableUsers.pageOffset }};
```

This comment fetches customer data from the `default.customer` table using the page size and offset values provided by Table widget. If the values are non-integer, make sure to enclose them in quotes.

For more information on how to fetch paginated data, see [Setup Server-Side Pagination on Table](/build-apps/how-to-guides/Server-side-pagination-in-table).

### Update data


```sql
-- Use quotes for non-integer values
UPDATE default.customer
  SET email = '{{emailInput.text}}'
  WHERE id = {{ tableUsers.selectedRow.id}};
```

This command dynamically updates customer details based on user input. If the values are non-integer, make sure to enclose them in quotes.

For more information on how to update Table data, see [Update Data Guide](/build-apps/how-to-guides/submit-form-data).


### Insert data

```sql
-- Use quotes for non-integer values
INSERT INTO default.customer
VALUES (
    '{{ nameInput.text }}',
    '{{ genderDropdown.selectedOptionValue }}',
    '{{ emailInput.text }}'
);
```

This command dynamically inserts a new customer into the database. If the values are non-integer, make sure to enclose them in quotes.


For more information on how to insert data, see [Insert Data](/build-apps/how-to-guides/insert-data).



### Delete data

```sql
-- Use quotes for non-integer values
DELETE FROM default.customer
WHERE id = {{tableUsers.selectedRow.id}};
```

This command dynamically deletes a customer based on their ID, obtained from the selected row in the Table. If the values are non-integer, make sure to enclose them in quotes.



For information on how to delete data in a Table, see [Delete Data in Table](/reference/widgets/table/inline-editing#delete-row).














