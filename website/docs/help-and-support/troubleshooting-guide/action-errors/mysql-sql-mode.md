# MySQL SQL Mode and its impact

### What is SQL Mode in MySQL?

SQL mode (`sql_mode`) is one of the system variables of MySQL. Through this variable, the MySQL Server SQL mode is controlled. Many operational characteristics of MySQL Server can be configured by setting the SQL mode. By setting the SQL mode appropriately, a client program can instruct the server on how strict or forgiving to be about accepting input data, enable or disable behaviors relating to standard SQL conformance, or provide better compatibility with other database systems.

## What are the implications of sql_mode?

By default, the server uses an `sql_mode` value of  `''`  (the empty string), which enables no restrictions. Thus, the server operates in forgiving mode (non-strict mode) by default. In non-strict mode, the MySQL server converts erroneous input values to the closest legal values (as determined from column definitions) and continues on its way. For example, if you attempt to store a negative value into an `UNSIGNED` column, MySQL converts it to zero, which is the nearest legal value for the column.

## How to Change SQL mode?

The SQL mode is controlled by means of the `sql_mode` system variable. To assign a value to this variable, `SET` statement is used. The value should be an empty string, or one or more mode names separated by commas. If the value is empty or contains more than one mode name, it must be quoted. If the value contains a single mode name, quoting is optional. SQL mode values are not case-sensitive. Here are some examples:

To clear the SQL mode or to set `non-strict` mode:

`SET sql_mode = '';`

The most general means of enabling input value restrictions is by using the `STRICT_TRANS_TABLES` or `STRICT_ALL_TABLES` modes:

```sql
SET sql_mode = STRICT_TRANS_TABLES;
SET sql_mode = STRICT_ALL_TABLES;
```

## What is the recommended SQL mode?

The term "**strict mode**" refers collectively to both of these modes. They prevent the entry of invalid values such as those that are out of range, or `NULL` specified for `NOT NULL` columns.

To set the SQL mode using a single mode value:

```sql
SET sql_mode = ANSI_QUOTES;
SET sql_mode = TRADITIONAL;
```

The `TRADITIONAL` mode enables **strict mode** plus other restrictions on date checking and division by zero. Setting the `sql_mode` system variable to `TRADITIONAL` causes MySQL to act like more traditional database servers in its input data handling.  If you want your MySQL server to be as restrictive as possible about input data checking, the simplest way to achieve this is to enable `TRADITIONAL` mode rather than a list of individual more-specific modes.

To set the SQL mode using multiple mode names:

```sql
SET sql_mode = 'IGNORE_SPACE, ANSI_QUOTES';
SET sql_mode = 'STRICT_ALL_TABLES, ERROR_FOR_DIVISION_BY_ZERO';
```

To check the current `sql_mode` setting, select its value like this:

```sql
SELECT @@sql_mode;
```

## Demonstration

**Non-Strict Mode**

Let’s set the `sql_mode` to **non-strict** mode and see how data truncation and unexpected data type conversion happen silently.

```sql
mysql> create table sql_mode_demo(
    ->    id INT NOT NULL AUTO_INCREMENT,
    ->    tiny_int_value TINYINT,
    ->    int_value INT,
    ->    string_value VARCHAR(255) NOT NULL,
    ->    PRIMARY KEY ( id )
    -> );
Query OK, 0 rows affected (0.02 sec)

mysql> INSERT INTO sql_mode_demo(tiny_int_value, int_value, string_value)
    -> VALUES
    -> (123, 33738, 'Hello, World!'),
    -> (-83, -8373, 'Hello, World 2!');
Query OK, 2 rows affected (0.00 sec)
Records: 2  Duplicates: 0  Warnings: 0

mysql> select @@sql_mode;
+----------------------------------------------------------------------------------------------------------------------------------+
| @@sql_mode                                                                                                                       |
+----------------------------------------------------------------------------------------------------------------------------------+
| STRICT_TRANS_TABLES,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,TRADITIONAL,NO_ENGINE_SUBSTITUTION |
+----------------------------------------------------------------------------------------------------------------------------------+
1 row in set (0.00 sec)

mysql> SET sql_mode = '';
Query OK, 0 rows affected (0.01 sec)

mysql> select @@sql_mode;
+------------+
| @@sql_mode |
+------------+
|            |
+------------+
1 row in set (0.00 sec)
**--Now we are operating under non-strict SQL mode. Let's figure out some weird characteristics now**

mysql> UPDATE sql_mode_demo set tiny_int_value = 3232 where id = 1;
Query OK, 1 row affected, 1 warning (0.00 sec)
Rows matched: 1  Changed: 1  Warnings: 1

mysql> show warnings;
+---------+------+---------------------------------------------------------+
| Level   | Code | Message                                                 |
+---------+------+---------------------------------------------------------+
| Warning | 1264 | Out of range value for column 'tiny_int_value' at row 1 |
+---------+------+---------------------------------------------------------+
1 row in set (0.00 sec)

mysql> select * from sql_mode_demo;
+----+----------------+-----------+-----------------+
| id | tiny_int_value | int_value | string_value    |
+----+----------------+-----------+-----------------+
|  1 |            127 |     33738 | Hello, World!   |
|  2 |            -83 |     -8373 | Hello, World 2! |
+----+----------------+-----------+-----------------+
2 rows in set (0.00 sec)

mysql> UPDATE sql_mode_demo set tiny_int_value = -255 where id = 2;
Query OK, 1 row affected, 1 warning (0.00 sec)
Rows matched: 1  Changed: 1  Warnings: 1

mysql> show warnings;
+---------+------+---------------------------------------------------------+
| Level   | Code | Message                                                 |
+---------+------+---------------------------------------------------------+
| Warning | 1264 | Out of range value for column 'tiny_int_value' at row 1 |
+---------+------+---------------------------------------------------------+
1 row in set (0.00 sec)

mysql> select * from sql_mode_demo;
+----+----------------+-----------+-----------------+
| id | tiny_int_value | int_value | string_value    |
+----+----------------+-----------+-----------------+
|  1 |            127 |     33738 | Hello, World!   |
|  2 |           -128 |     -8373 | Hello, World 2! |
+----+----------------+-----------+-----------------+
2 rows in set (0.00 sec)

mysql> UPDATE sql_mode_demo set int_value = 'providing string value to int column' where id = 1;
Query OK, 1 row affected, 1 warning (0.01 sec)
Rows matched: 1  Changed: 1  Warnings: 1

mysql> show warnings;
+---------+------+-------------------------------------------------------------------------------------------------+
| Level   | Code | Message                                                                                         |
+---------+------+-------------------------------------------------------------------------------------------------+
| Warning | 1366 | Incorrect integer value: 'providing string value to int column' for column 'int_value' at row 1 |
+---------+------+-------------------------------------------------------------------------------------------------+
1 row in set (0.00 sec)

mysql> select * from sql_mode_demo;
+----+----------------+-----------+-----------------+
| id | tiny_int_value | int_value | string_value    |
+----+----------------+-----------+-----------------+
|  1 |            127 |         0 | Hello, World!   |
|  2 |           -128 |     -8373 | Hello, World 2! |
+----+----------------+-----------+-----------------+
2 rows in set (0.00 sec)

mysql> alter table sql_mode_demo add column bigint_value BIGINT;
Query OK, 0 rows affected (0.01 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> select * from sql_mode_demo;
+----+----------------+-----------+-----------------+--------------+
| id | tiny_int_value | int_value | string_value    | bigint_value |
+----+----------------+-----------+-----------------+--------------+
|  1 |            127 |         0 | Hello, World!   |         NULL |
|  2 |           -128 |     -8373 | Hello, World 2! |         NULL |
+----+----------------+-----------+-----------------+--------------+
2 rows in set (0.00 sec)

mysql> UPDATE sql_mode_demo set bigint_value = 2147483647 + id;
Query OK, 2 rows affected (0.01 sec)
Rows matched: 2  Changed: 2  Warnings: 0

mysql> select * from sql_mode_demo;
+----+----------------+-----------+-----------------+--------------+
| id | tiny_int_value | int_value | string_value    | bigint_value |
+----+----------------+-----------+-----------------+--------------+
|  1 |            127 |         0 | Hello, World!   |   2147483648 |
|  2 |           -128 |     -8373 | Hello, World 2! |   2147483649 |
+----+----------------+-----------+-----------------+--------------+
2 rows in set (0.00 sec)

mysql> alter table sql_mode_demo MODIFY COLUMN bigint_value SMALLINT;
Query OK, 2 rows affected, 2 warnings (0.02 sec)
Records: 2  Duplicates: 0  Warnings: 2

mysql> show warnings;
+---------+------+-------------------------------------------------------+
| Level   | Code | Message                                               |
+---------+------+-------------------------------------------------------+
| Warning | 1264 | Out of range value for column 'bigint_value' at row 1 |
| Warning | 1264 | Out of range value for column 'bigint_value' at row 2 |
+---------+------+-------------------------------------------------------+
2 rows in set (0.01 sec)

mysql> select * from sql_mode_demo;
+----+----------------+-----------+-----------------+--------------+
| id | tiny_int_value | int_value | string_value    | bigint_value |
+----+----------------+-----------+-----------------+--------------+
|  1 |            127 |         0 | Hello, World!   |        32767 |
|  2 |           -128 |     -8373 | Hello, World 2! |        32767 |
+----+----------------+-----------+-----------------+--------------+
2 rows in set (0.00 sec)
```

**Strict Mode**

Now we will run the same set of queries but let’s set the `sql_mode` to **strict** mode before doing so.

```sql
mysql> SET sql_mode = TRADITIONAL;
Query OK, 0 rows affected (0.00 sec)

mysql> select @@sql_mode;
+----------------------------------------------------------------------------------------------------------------------------------+
| @@sql_mode                                                                                                                       |
+----------------------------------------------------------------------------------------------------------------------------------+
| STRICT_TRANS_TABLES,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,TRADITIONAL,NO_ENGINE_SUBSTITUTION |
+----------------------------------------------------------------------------------------------------------------------------------+
1 row in set (0.00 sec)

--We are operating under Strict mode. Silent data truncation and unexpected conversion of types won't take place in this mode.

mysql> UPDATE sql_mode_demo set tiny_int_value = 3232 where id = 1;
ERROR 1264 (22003): Out of range value for column 'tiny_int_value' at row 1

mysql> UPDATE sql_mode_demo set int_value = 'providing string value to int column' where id = 1;
ERROR 1366 (HY000): Incorrect integer value: 'providing string value to int column' for column 'int_value' at row 1

mysql> alter table sql_mode_demo MODIFY COLUMN bigint_value BIGINT;
Query OK, 2 rows affected (0.03 sec)
Records: 2  Duplicates: 0  Warnings: 0

mysql> UPDATE sql_mode_demo set bigint_value = 2147483647 + id;
Query OK, 2 rows affected (0.01 sec)
Rows matched: 2  Changed: 2  Warnings: 0

mysql> alter table sql_mode_demo MODIFY COLUMN bigint_value SMALLINT;
ERROR 1264 (22003): Out of range value for column 'bigint_value' at row 1
mysql>
```

## Takeaways

- It’s always recommended to use strict mode in MySQL
- Users may not be aware of what potential issues this crucial system variable might have. Let’s create awareness of this
- Once data truncation and unexpected data type conversion take place due to operating under non-strict SQL mode, getting back the lost data will never be easy
