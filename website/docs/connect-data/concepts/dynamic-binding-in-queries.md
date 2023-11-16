# Executing SQL Queries

Appsmith provides an intuitive platform to connect with databases and execute SQL queries efficiently. To ensure secure and efficient data retrieval or updates, understanding how to use bindings with prepared statements is crucial.

## SQL Query Execution

To execute an SQL query in Appsmith, you first need to create a new database query by choosing the correct datasource. Once you've set up your database connection, you can write and run SQL queries directly within Appsmith's editor.

### Mustache Bindings with Prepared Statements

Mustache Bindings in SQL queries allow you to use dynamic values in your queries without having to concatenate strings, which can lead to SQL injection vulnerabilities. Prepared statements fortify the security by pre-compiling the SQL query and executing it with different parameters. This protects your queries against SQL injections.

### How to Use Mustache Bindings

In Appsmith, you bind data by enclosing dynamic parts of your query in double curly braces `{{ }}`. This signals to Appsmith that it should treat the enclosed content as a dynamic variable or expression. For example:

```sql
SELECT * FROM users WHERE id = {{ Input1.text }};
```

In the above query, `Input1.text` is the dynamic content that will be substituted when the query is executed.

### Prepared Statements: On vs Off

By default, prepared statement bindings in Appsmith are turned on. This means that your mustache bindings will be used to create prepared statements directly. This setting sanitizes inputs to protect against SQL injection.

However, there may be situations where you might want to turn off prepared statement bindings. For instance, when you have complex SQL queries, where you need to build dynamic where clauses at runtime. In such cases, you can turn off prepared statement binding and manually ensure that your inputs are sanitized.

Scenarios where prepared statements must be turned off:

1. Dynamic table or columns names
2. Dynamic keywords such as limit or offset
3. Dynamic where clauses
4. Dynamic array with IN clause (= ANY syntax will work for Postgres)
5. Mustache bindings in commented code (--{{Input1.text}} not supported)

In these scenarios you will have to turn off prpared statements but your queries may be subject to SQL injection. As such we recommend using creating an API instead.
To toggle this setting:

1. Open your SQL query in Appsmith.
2. Next to the query editor, you'll find the "Settings" tab.
3. Look for the option "Use Prepared Statement" and toggle it ON or OFF according to your needs.

## Invoking Stored Procedures

To invoke a stored procedure in Appsmith, you would use the `CALL` statement within your database query. The syntax for invoking a stored procedure may vary slightly depending on the SQL dialect of the database you are using.

Here is an example of how you might call a stored procedure named `get_user` with one parameter:

```sql
CALL get_user({{ Input1.text }});
SELECT 1+1;
```

When calling a stored procedure from Appsmith, you'll need to add an extra dummy SELECT statement to the end of your Appsmith query.
This modification is necessary due to how Appsmith parses SQL and its return values from the database. Without the empty SELECT clause, the stored procedure is still run on the database, but its return values are not accessible from the Appsmith platform.

### Conclusion

Executing SQL queries in Appsmith is made safer and more efficient through the use of bindings and prepared statements. Always evaluate the need for prepared statement bindings in the context of your application’s requirements and complexity of SQL queries. For dynamic operations such as invoking stored procedures, use proper syntax, and make sure to test your queries thoroughly to ensure they function as expected.
