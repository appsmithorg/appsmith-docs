---
sidebar_position: 3
description: Learn about how Prepared Statements are used in Appsmith.
---

# Prepared Statements

This page describes Prepared Statements, how they're used in your SQL database queries, and the situations where you may need to turn them off.


## What are Prepared Statements

A [Prepared Statement](https://en.wikipedia.org/wiki/Prepared\_statement) is a feature provided by a Database Management System (DBMS) to execute a SQL statement with parameterized data bindings. When a SQL statement is written, the dynamic parts of the statement (the input data that may differ upon each execution of the query) are abstracted into parameters. When you execute your query, the data you provide is substituted into the pre-compiled statement along with any necessary quotation marks.

In the example below, the first statement represents something that you may write in your query: it selects columns from a certain table with a `WHERE` clause to filter based on some criteria, which in this case is the text from **Table1**'s search bar.

```sql
-- regular SQL query
SELECT * FROM users WHERE name = {{ Table1.searchText }};
```

When Prepared Statements are turned on, your SQL statement is pre-compiled on the DB server into something like the following snippet, where the dynamic data is replaced by a placeholder:

```sql
-- a Prepared Statement where the dynamic data is abstracted away
SELECT * FROM users WHERE name = {?}
```

When your query is eventually executed, the dynamic data (in this case, the table's search bar text) is sent to the DB server and substituted into the statement in place of the `{?}`.

### Prepared Statements lifecycle

Here is a simplified look at the lifecycle of a Prepared Statement in Appsmith:

1. **Preparing:** Your SQL statement is sent to the database server as a template.

1. **Processing:** The database server parses the statement for validity and substitutes dynamic values with `{?}`; these are the parameters. Then the resulting template is optimized, compiled, and cached without being executed. At that point, it's ready to be executed whenever you supply the parameters from your query.

1. **Executing:** Once the parameters are received, the database binds the parameter values to the template statement and executes it.

The template is retained, and the statement can be executed repeatedly and efficiently each time you run your query.

## Benefits of Prepared Statements

By separating the SQL commands and the parameter data, the database server can perform its operations exactly as intended without the risk of malicious users adding their own SQL code into your query (a common attack known as [SQL injection](https://en.wikipedia.org/wiki/SQL\_injection)). When the statement is executed, the user's input is evaluated as a piece of data rather than an extension of your SQL code.

As a simple example, imagine a user that sends the input `100; DROP TABLE users;` to your query that's expecting a user's `id`:

```sql
-- without Prepared Statements
SELECT * from users WHERE id = 100; DROP TABLE users;
```

The above statement returns any record where the `id` is 100, but then drops the `users` table.

```sql
SELECT * FROM users WHERE id = "100; DROP TABLE users;";
```

With the parameterized input, the query would return nothing after it's unable to find a user with an `id` equal to the literal `100; DROP TABLE users;`.

## Limitations of Prepared Statements

Depending on the structure and needs of your SQL query, it's not always possible to use Prepared Statements. The sections below explain the situations where you'll need to turn them off.

### Dynamic table name

For the DBMS to process your SQL template and decide on the appropriate search algorithm, it needs certain information up-front, such as the name of the table you're querying. When your query doesn't specify which table it needs, the DBMS can't process the query as a Prepared Statement.

A query with a dynamic table name looks like this:

```sql
SELECT * FROM {{TableNamePicker.selectedOptionValue}};
```

This query reads the table name from a [Select widget](/reference/widgets/text.md) called **TableNamePicker**, whose selected value is only determined when the query runs. In this situation, Prepared Statements must be turned off in the [query settings](/connect-data/reference/query-settings).

### Dynamic queries

In some cases, the structure of your query's SQL statement might be determined by conditional code from your app.

As an extreme example, imagine an app with an Input widget **UserQueryInput** where the user is supposed to write their own SQL. The query body would look like:

```sql
{{ UserQueryInput.text }}
```

In such a case, the DBMS has nothing to pre-compile since the entire query is only determined as the query is being executed. Here, your should turn off Prepared Statements.

### Dynamic clauses

The DBMS also can't pre-compile queries with clauses that are included based on conditional code. Since the underlying structure of the query is not known in advance, it won't be acceptable as a Prepared Statement. For example, the following would require that Prepared Statements are turned off:

```sql
SELECT * FROM users WHERE name = {{ NameInput.text }}
{{
    IncludeAddressCheckbox.isChecked?
        "INNER JOIN teams ON users.teamID=team.teamID" :
        ""
}};
```

#### Dynamic WHERE clauses

There may also be situations in which the structure of a query's `WHERE` clause isn't known until the query is run. Consider a query like this:

```sql
SELECT * FROM users WHERE {{ NameInput.text ? "name = " + NameInput.text : "1=1" }}
```

Above, the conditional code in the `WHERE` clause checks whether an Input widget **NameInput** has a value from the user on its `text` property. If it does, the `WHERE` clause filters by that name. If not, the `WHERE` clause returns all records; for every record, 1 is equal to 1.

Since the structure of the `WHERE` clause is not determined up-front, it can't be pre-compiled. Just like the table name, the DBMS needs to know which column is being used in the `WHERE` clause so that it can pre-compile the statement. Since the above statement doesn't provide this static information, Prepared Statements must be turned off.

This limitation also applies to the following query where the column is not static:

```sql
SELECT * FROM users WHERE {{ ColumnInput.text }} = '{{ ValueInput.text }}';
```

Notice that `{{ ValueInput.text }}` is surrounded by quotes. Since the column is not static and Prepared Statements must be turned off, you'll need to manually include the quotations around your values. 

## Edge cases

Below, you can find edge cases that may apply if you are experiencing issues:

* Commented code in your queries shouldn't contain any data bindings; all bindings, even commented ones, are parameterized by the DBMS and are used in the statement. To avoid this issue, remove the mustache `{{ }}` brackets around data bindings whenever you comment them out.

* If you're using a dynamic array to supply a SQL `IN` clause and using [PostgreSQL](/connect-data/reference/querying-postgres.md), then you can use `= ANY`. However, MySQL doesn't support this syntax and requires that you turn off Prepared Statements.

## Summary

Prepared Statements are handy for increasing the security of your queries by protecting against SQL injection attacks. With this setting enabled, malicious SQL sent by attackers is interpreted as an unharmful literal string rather than actual SQL code.

However, when the structure of your query isn't static and provided up-front, you may need to turn this setting off. When your SQL statement is built according to conditional logic or doesn't specify which table and column it's querying, the database server can't pre-compile your statement, and the query won't work.
