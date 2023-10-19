# Fetch and filter data in SQL

This guide shows you how to read SQL data, apply filters, and display the results in widgets.


## Prerequisites

* App Connected to [PostgreSQL](/connect-data/reference/querying-postgres) datasource.



:::info
When prepared statements are enabled and widget bindings are used, quotes are not required.
:::

## Using WHERE Clause

The WHERE clause in SQL is a tool for filtering data based on specific conditions. It allows you to retrieve only the rows that meet your defined criteria. 

<dd>

*Example:* If you want to filter table data based on specific criteria, such as gender, you can use a Select widget with the required option. 

Configure the query to fetch data using [selectedOptionValue](/reference/widgets/select#selectedoptionvalue-string) reference property, like:

```sql
SELECT * FROM users WHERE gender = {{Select1.selectedOptionValue}};
```



Learn more about [Server-side Filter on Table](/build-apps/how-to-guides/Server-side-filtering-table)

</dd>


## Using Dynamic WHERE Clauses

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

## Server-side pagination 

Server-side pagination allows you to manage and display large datasets within your application. It involves fetching and displaying only a portion of data from the server at a time, enhancing performance.

You can use either a Table or List widget to display the paginated data, and you can implement pagination with offset or cursor-based techniques by using the reference property of these widgets, like:

<dd>

*Examples:* Create a query to fetch data from the database using `pageSize`, and `pageOffset` reference properties to implement pagination:


```sql
SELECT * FROM users LIMIT {{ Table1.pageSize }} OFFSET {{ Table1.pageOffset }};
```



</dd>


Learn more about [Server-side Pagination on Table](/build-apps/how-to-guides/Server-side-pagination-in-table) and [Server-side Pagination on List](/build-apps/how-to-guides/Setup-Server-side-Pagination-on-List).

## Transform Data

If your retrieved data does not match a widget's expected format, you can either use JavaScript to transform it in the widget property pane or retrieve the required data directly from the query.

<dd>

*Examples:* If you want to display formatted data in a Select widget, where the country name serves as the label and the ID as the value, you can use:


```sql
SELECT country AS name, id AS code
FROM users
LIMIT 10;
```


</dd>


## Using conditional operators

Conditional operators, like the AND operator, allow you to specify multiple conditions in your SQL queries. This can be handy when you need to narrow down your data retrieval based on several criteria. 

<dd>

*Example:* If you want to apply filters based on country, gender, and a specific date (DOB) using Select and DatePicker widgets.

Configure the query to fetch data using [selectedOptionValue](/reference/widgets/select#selectedoptionvalue-string), [formattedDate](/reference/widgets/datepicker#formatteddate-string) reference properties, like:

```sql
SELECT * FROM users
WHERE gender = {{Select1.selectedOptionValue}} AND country = {{Select2.selectedOptionValue}} AND DATE(dob) > {{DatePicker1.formattedDate}};
```


</dd>





## Using LIKE or ILIKE 

When using the LIKE or ILIKE keyword in SQL, it's important to handle it correctly, especially when working with prepared statements. 


<dd>


**Prepared statements enabled** (recommended)


```sql
-- With prepared statements enabled
SELECT * FROM public.users where name ilike {{Table1.searchText + "%"}}
```

* The `%` character, which is used as a wildcard in LIKE and ILIKE patterns, needs to be inside the mustache binding `{{}}`.
* Do not wrap the mustache binding `{{}}` within quotes.


</dd>

<dd>

**Prepared statements disabled**



```sql
-- With prepared statements disabled
SELECT * FROM public."features" where name ILIKE '%{{search_input.text}}%' order by created_at desc
```


Placing the `%`character within single quotes can lead to unexpected results and security vulnerabilities. It doesn't provide the same level of security and flexibility as the recommended format, making it more susceptible to SQL injection attacks. 

</dd>




## Working with the IN 

The IN clause in SQL allows you to filter results based on multiple values. To use it correctly with prepared statements, follow these steps:


<dd>

**Prepared statements enabled** (recommended)


```sql
-- With prepared statements enabled
SELECT * FROM products WHERE product_id IN ({{productID1}}, {{productID2}}, ...);
```

* Each value in the list should be provided as a separate mustache binding `{{}}` value.
* Do not wrap the mustache binding `{{}}` within quotes.

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

## Alternative to IN with ANY

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


## Handling IS Keyword in Prepared Statements

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

