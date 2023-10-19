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

**Example 1:** If you want to filter table data based on specific criteria, such as gender, you can use a Select widget with the required option. 

Configure the query to fetch data using [selectedOptionValue](/reference/widgets/select#selectedoptionvalue-string) reference property, like:

```sql
-- With prepared statements enabled
SELECT * FROM users WHERE gender = {{Select1.selectedOptionValue}};
```



Learn more about [Server-side Filter on Table](/build-apps/how-to-guides/Server-side-filtering-table).



**Example 2:** If you want to create a dynamic WHERE clause query that depends on user input, such as allowing users to specify a name using an Input widget, prepared statements can't be effectively used in these cases because the structure of the query is not static.


Configure the query to fetch data using [text](/reference/widgets/input#text-string-1) reference property, like:

```sql
-- With prepared statements disabled
SELECT * FROM users WHERE {{ Input1.text ? "name = '" + Input1.text + "'" : "1=1" }}
```



Learn more about [Prepared Statements](/connect-data/concepts/how-to-use-prepared-statements).



</dd>

## Server-side pagination 

Server-side pagination allows you to manage and display large datasets within your application. It involves fetching and displaying only a portion of data from the server at a time, enhancing performance.

You can use either a Table or List widget to display the paginated data, and you can implement pagination with offset or cursor-based techniques by using the reference property of these widgets, like:

<dd>

*Example:* Create a query to fetch data from the database using `pageSize`, and `pageOffset` reference properties to implement pagination:


```sql
SELECT * FROM users LIMIT {{ Table1.pageSize }} OFFSET {{ Table1.pageOffset }};
```



</dd>


Learn more about [Server-side Pagination on Table](/build-apps/how-to-guides/Server-side-pagination-in-table) and [Server-side Pagination on List](/build-apps/how-to-guides/Setup-Server-side-Pagination-on-List).

## Transform data

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


**Example 1**: If you want to search for values in SQL that start with specific terms, you can use the following query with prepared statements enabled:


```sql
-- With prepared statements enabled
SELECT * FROM public.users where name ilike {{Table1.searchText + "%"}}
```

* The `%` character, which is used as a wildcard in LIKE and ILIKE patterns, needs to be inside the mustache binding `{{}}`.
* Do not enclose the mustache binding `{{}}` within quotes.


</dd>

<dd>

**Example 2**: If you want to perform a partial text search that matches the search term anywhere in the data column, turn off the prepared statement and use this query:


```sql
-- With prepared statements disabled
SELECT * FROM public.users where name ilike '%{{Table1.searchText}}%'
```


Placing the `%`character within single quotes can lead to unexpected results and security vulnerabilities. It doesn't provide the same level of security and flexibility as the recommended format, making it more susceptible to SQL injection attacks. 

</dd>




## Using IN 

The IN clause in SQL allows you to filter results based on multiple values. To use it correctly with prepared statements, follow these steps:


<dd>

**Example 1:** If you want to fetch data for specific products based on their individual IDs, you can use this query format: 


```sql
-- With prepared statements enabled
SELECT * FROM products WHERE product_id IN ({{productID1}}, {{productID2}}, ...);
```

* Each value in the list should be provided as a separate mustache binding `{{}}` value.
* Do not enclose the mustache binding `{{}}` within quotes.


**Example 2:** If you're working with a list of product IDs as strings, you can use this query format: 

```sql
-- With prepared statements disabled
SELECT * FROM products WHERE product_id IN {{productIDList}};
-- productIDList = ["productID1", "productID2", ...]
```

This query uses a single mustache binding `{{productIDList}}` to represent an array of product IDs, where productIDList is expected to be an array like `["productID1", "productID2", ...]`.


If you want to filter data based on countries selected in a multi-select widget, you can use this query:

```sql
-- With prepared statements disabled
SELECT * FROM public.users where country IN ({{MultiSelect1.selectedOptionValues.map(value => "'" + value + "'").join(', ').replace('[\\"', '').replace('\\"]', '')}});
```


</dd>

## Using ANY

When working with IN statements, you may encounter situations where it's more convenient to use the ANY statement. The ANY keyword provides an alternative approach to achieving the same result.

* When using this approach, provide all individual values in the list together, without separating them.
* Do not enclose the mustache binding `{{}}` within quotes.


<dd>


**Example :** 


```sql
--Recommended format:
SELECT * FROM public."employees" where name=ANY ({{widgetName.data}});

-- {{widgetName.data}} = '{name, dept}'
```

This query uses the ANY keyword to match the `name` column in the `employees` table with both the `name` and `dept` values together in a structured array.

If you want to filter data based on countries selected in a multi-select widget, you can use this query:

```sql
-- With prepared statements disabled
SELECT * FROM users WHERE country = ANY (ARRAY[{{MultiSelect2.selectedOptionValues.map(value => "'" + value + "'").join(', ').replace('[\\"', '').replace('\\"]', '')}}]);
```


</dd>


## Using IS 

When working with MySQL, it's recommended to use the `=` operator instead of `IS`. 


* `true` / `false` values should be without quotes i.e. `{{true}}` instead of `{{”true”}}`.
* Do not enclose the mustache binding `{{}}` within quotes.

<dd>

**Example**: To filter users by a selected country from a Select widget, use:

```sql
-- With prepared statements enabled
SELECT * FROM users WHERE country = {{Select1.selectedOptionValue}};
```

</dd>

