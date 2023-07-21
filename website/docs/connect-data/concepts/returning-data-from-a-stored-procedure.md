---
sidebar_position: 10
description: Learn about stored procedures and the way that they're handled in Appsmith.
---

# Stored Procedures

This page explains SQL stored procedures and the modified way that they should be handled in Appsmith.

## Overview

Stored procedures are SQL statements that can be defined and called as reusable pieces of code. In cases where you need to write the same statement across multiple queries, they can reduce the need to rewrite your SQL statement in several different places. Stored procedures can also be configured to accept parameters, which further extends their usefulness.

In Appsmith, you'll need to use a [modified syntax](#modified-syntax) to call the stored procedure.

## Standard syntax

First, this is how a stored procedure normally appears. The following snippet queries a table `users` for records where their `role` matches the parameter passed to it. The snippet uses PostgreSQL syntax as an example; if you're using a different relational database, check its documentation to see the syntax for stored procedures.

```sql
CREATE OR REPLACE PROCEDURE users_by_role(userRole varchar(30))
LANGUAGE plpgsql
AS $$
BEGIN
SELECT * from users WHERE role=userRole;
END $$; 
```

To call this procedure, you'd use a query such as:

```sql
CALL users_by_role('admin');
```

After the query above, you should expect to receive the matching records from your database.

## Modified syntax

When calling a stored procedure from Appsmith, you'll need to add an extra dummy `SELECT` statement to the end of your Appsmith query. Extending the PostgreSQL example above, it appears as:

```sql
CALL users_by_role('admin');
SELECT 1+1;
```

The need for this modification is due to the way that Appsmith parses SQL and its return values from the database. Without the empty `SELECT` clause, the stored procedure is still run on the database but its return values are not accessible from the Appsmith platform.