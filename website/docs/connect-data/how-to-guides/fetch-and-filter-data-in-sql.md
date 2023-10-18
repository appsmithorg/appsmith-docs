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
FROM users
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

:::note
When prepared statements are enabled and widget bindings are used, quotes are not required.
:::

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

:::note
When prepared statements are enabled and widget bindings are used, quotes are not required.
:::

This SQL query is designed to retrieve user data from the "users" table based on selected options for gender, country, and a selected date of birth.

</dd>





### Searching for values using LIKE or ILIKE 

When using the LIKE or ILIKE keyword in SQL, it's important to handle it correctly, especially when working with prepared statements. Here's how to do it right:

* The `%` character, which is used as a wildcard in LIKE and ILIKE patterns, needs to be inside the mustache binding.
* Do not wrap the binding within quotes.

<dd>


**Prepared statements enabled** (recommended)


```sql
-- With prepared statements enabled
SELECT * FROM public."features" where name ilike {{search_input.text + "%"}} order by created_at desc
```


The `%` character serves as a wildcard in SQL's ILIKE pattern, allowing for dynamic and secure searches based on user input. This approach ensures security, and efficient searching while avoiding common SQL injection risks.

</dd>

<dd>

**Prepared statements disabled**



```sql
-- With prepared statements disabled
SELECT * FROM public."features" where name ILIKE '%{{search_input.text}}%' order by created_at desc
```


Placing the `%`character within single quotes can lead to unexpected results and security vulnerabilities. It doesn't provide the same level of security and flexibility as the preferred format, making it more susceptible to SQL injection attacks. 

</dd>




### Working with the IN 

The IN clause in SQL allows you to filter results based on multiple values. To use it correctly with prepared statements, follow these steps:

* Each value in the list should be provided as a separate mustache binding value.
* Do not wrap the binding within quotes.

<dd>

**Prepared statements enabled** (recommended)


```sql
-- With prepared statements enabled
SELECT * FROM products WHERE product_id IN ({{productID1}}, {{productID2}}, ...);
```

This SQL query filters products based on the provided IDs, maintaining security and flexibility. 

</dd>

<dd>

**Prepared statements disabled**

```sql
-- With prepared statements disabled
SELECT * FROM products WHERE product_id IN {{productIDList}};
-- productIDList = ["productID1", "productID2", ...]
```
Placing multiple product IDs within a single mustache binding can lead to unexpected results and security vulnerabilities.

</dd>

#### Alternative to IN with ANY

When working with IN statements, you may encounter situations where it's more convenient to use the ANY statement. The ANY keyword provides an alternative approach to achieving the same result.

* When using this approach, provide all individual values in the list together, without separating them.
* Do not wrap the binding within quotes.

<dd>

**Prepared statements enabled** (recommended)


```sql
//Recommended format:
SELECT * FROM public."employees" where name=ANY ({{myBinding.data}});

//Post evaluation it should look like:
SELECT * FROM public."employees" where name=ANY ({{'{name, dept}'}});
```

This query uses the ANY keyword to match the `name` column in the `employees` table with both the `name` and `dept` values together in a structured array.


</dd>


### Handling IS Keyword in Prepared Statements

When working with prepared statements, the IS keyword is not supported. Instead, you should rewrite your queries using the `=` operator. 



<dd>

**Recommended**

```sql
-- With prepared statements disabled
SELECT * FROM student WHERE pass = {{true}};
```

Using the `=` operator for comparisons ensures that your query works as expected with prepared statements turned on.


</dd>

<dd>

**Avoid**

```sql
-- With prepared statements disabled
SELECT * FROM student WHERE pass IS {{true}};
```

Using the IS keyword in your queries with prepared statements can lead to syntax errors. It's essential to switch to the = operator to maintain query integrity and functionality.

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

