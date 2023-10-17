# Fetch and filter data in SQL

This guide shows you how to read SQL data, apply filters, and display the results in widgets.


## Prerequisites

* App Connected to [PostgreSQL](/connect-data/reference/querying-postgres) Datasource
* A Table widget to display data.

## Display Data

Follow these steps to perform a basic read operation and present the data within widgets. 

1. In **Queries/JS**, click the **+** and create a query to retrieve the data using a simple SQL query like this:

<dd>

*Examples:* 

```sql
-- Retrieve All Columns from the "users" Table
SELECT * FROM users;

-- Select Specific Columns (id and name) from the "users" Table
SELECT id, name FROM users;
```

</dd>

2. To display the query result, use the mustache syntax `{{}}` in the widget property:


<dd>

*Examples:* In the **Table Data** property of Table widget, use:

```js
{{Query1.data}}
```

</dd>

### Pagination

Server-side pagination allows you to manage and display large datasets within your application. It involves fetching and displaying only a portion of data from the server at a time, enhancing performance.

You can use either a Table or List widget to display the paginated data, and you can implement pagination with offset or cursor-based techniques by using the reference property of these widgets, like:

<dd>

*Examples:* Create a query to fetch data from the database using `pageSize`, and `pageOffset` reference properties to implement pagination:


```sql
SELECT * FROM users LIMIT {{ Table1.pageSize }} OFFSET {{ Table1.pageOffset }};
```

This SQL query retrieves data from the `users` table with pagination based on the specified pagesize and offset values.



</dd>


Learn more about [Server-side Pagination on Table](/build-apps/how-to-guides/Server-side-pagination-in-table) and [Server-side Pagination on List](/build-apps/how-to-guides/Setup-Server-side-Pagination-on-List).

### Transform Data


When the retrieved data is not in the desired format, you have two options: transform it using JavaScript in the widget property pane or directly get transformed data from the query itself.

<dd>

*Examples:* If you want to display formatted data in a Select widget, where the country name serves as the label and the ID as the value.


1. Configure the query to fetch data, like:

```sql
SELECT country AS name, id AS code
FROM public."users"
LIMIT 10;
```

This SQL query retrieves data from the `users` table with pagination based on the specified pagesize and offset values.

2. Connect the query to the [**Source data**](/reference/widgets/select#source-data-arrayobject) property of the Select widget, like:

```js
{{Query1.data}}
```

</dd>

## Filter Data

Filtering allows you to extract specific subsets of your dataset, making it more relevant and useful. 

### Using WHERE Clause

The WHERE clause in SQL is a tool for filtering data based on specific conditions. It allows you to retrieve only the rows that meet your defined criteria. 

<dd>

*Example:* If you want to filter table data based on specific criteria, such as gender, you can use a Select widget with the required option. 

Configure the query to fetch data using [selectedOptionValue](/reference/widgets/select#selectedoptionvalue-string) reference property, like:

```sql
SELECT * FROM users WHERE gender = {{Select1.selectedOptionValue}};
```

Learn more about [Server-side Filter on Table](/build-apps/how-to-guides/Server-side-filtering-table)

</dd>


### Using Dynamic WHERE Clauses

The dynamic WHERE clauses involve conditions and expressions that depend on user input or other runtime factors. Prepared statements can't be effectively used in these cases because the structure of the query is not static. 

<dd>

*Example:* if you want to create a dynamic query that depends on user input. For instance, you have an [Input](/reference/widgets/input) widget where users can specify a name, and you want to retrieve data based on the entered name:

1. Configure the query to fetch data using [text](/reference/widgets/input#text-string-1) reference property, like:

```sql
SELECT * FROM users WHERE {{ NameInput.text ? "name = " + NameInput.text : "1=1" }}
```

Above, the conditional code in the WHERE clause checks whether an Input widget NameInput has a value from the user on its text property. If it does, the WHERE clause filters by that name. If not, the WHERE clause returns all records; for every record, 1 is equal to 1.


2. Turn off Prepared Statements.

Learn more about [Prepared Statements](/connect-data/concepts/how-to-use-prepared-statements)

</dd>


### Using Conditions Joined by AND Operator

<dd>

*Example:* if you want to retrieve data for male users from Australia who were born after 1980. You can construct an SQL query with conditions joined by the AND operator to achieve this:


1. Configure the query to fetch data using [selectedOptionValue](/reference/widgets/select#selectedoptionvalue-string), [formattedDate](/reference/widgets/datepicker#formatteddate-string) reference properties, like:

```sql
SELECT * FROM users
WHERE gender = {{Select1.selectedOptionValue}} AND country = {{Select2.selectedOptionValue}} AND DATE(dob) > {{DatePicker1.formattedDate}};
```

This SQL query is designed to retrieve user data from the "users" table based on selected options for gender, country, and a selected date of birth.

</dd>


### Converting a JSON Array to Comma-Separated SQL Value Groups

Converting a JSON array to a comma-separated SQL value group is a technique used to prepare data for SQL's IN statement. It's essential for filtering data based on multiple values or options.


<dd>

```sql
-- Assume :json_array is a parameter or variable containing the JSON array of product IDs.
-- The exact syntax may vary depending on the database system.

SELECT * FROM products
WHERE product_id IN (
    SELECT value::int FROM json_array_elements_text(:json_array) AS value
);
```
</dd>

## Searching for Values

Server-side search allows you to refine query results based on specific search terms, without relying on the client-side.

<dd>

*Examples:* if you want to retrieve data based on a user's search term within a Table widget's search box.


1. Configure the query to fetch data using the [searchText](/reference/widgets/table#searchtext-string) reference property.



```sql
-- With prepared statements enabled
SELECT * FROM users WHERE name ilike {{Table1.searchText + "%"}};
```

This query securely searches for records with names partially matching the search term and is optimized for performance with prepared statements enabled.



```sql
-- With prepared statements disabled
SELECT * FROM users WHERE name ilike '%{{Table1.searchText}}%';
```

Turn off prepared statements when you need more flexibility in SQL syntax, such as using dynamic queries or complex search logic. QGIueries without prepared statements can be less secure and slightly less optimized.

2. Set the **onSearchTextChange** event to run the query.



</dd>


## Handling Quotes

