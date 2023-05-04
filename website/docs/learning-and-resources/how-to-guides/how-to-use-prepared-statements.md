---
sidebar_position: 16
---

# How to Use Prepared Statements?

A [Prepared Statement](https://en.wikipedia.org/wiki/Prepared\_statement) is a feature provided by Database Management Systems (DBMS) to execute the same statement with dynamic data bindings repeatedly and efficiently. It uses a pre-compiled SQL code without data to speed up the execution.

Let's take a closer look at the prepared statement below:

```
[Select id, name, email from users where id = ] {?};
```

The SQL code enclosed in the square bracket **`([ ])`** is pre-compiled, and the Question Mark **(?)** enclosed in the curly braces **`({})`** shows the data bindings appended at runtime based on the different values supplied by the calling application.

In this guide, you'll learn how to use prepared statements in Appsmith and some examples for different data sources. You'll also learn when and when not to use prepared statements.

To understand how prepared statements work in Appsmith, first understand how prepared statements work at a database level.

## How do prepared statements work?

A prepared statement workflow consists of three stages:- Prepare, Process, and Execute.

### Prepare

In the prepare stage, a statement template is sent to the database server. In this template, some values are left unspecified and called parameters labeled using a question mark (?) sign.

For example, in the below statement, the text in the square bracket\*\*`([])`\*\* is the statement template, and question mark signs in curly braces \*\*`({})`\*\*are the parameters supplied at runtime.

```
[Insert into users(name, email) values ]{(?,?)};
```

### Process

The database server parses, compiles, optimizes, and stores the result without executing the statement template. The statement is optimized and ready to be executed whenever the parameters (labeled with question marks) are supplied.

### Execute

Whenever the parameters are supplied for the given prepared statement, the database binds the values to the statement and executes it. The database can execute the statements as often as the application triggers by supplying the same or different parameters.

## **Why should you use prepared statements?**

The benefits of using Prepared Statements are:

### **Efficiency**

The prepared statement uses a pre-compiled SQL code, so the code is not compiled for every execution run. It speeds up the execution, thus enhancing efficiency.

### **Security**

The prepared statement is a parameterized and reusable block of code. It forces the user to write the SQL command and send the user inputs data separately. Thus, the data bindings defined in the prepared statements are sent to the server to execute the pre-compiled code block and generate the response accordingly. Due to this, a prepared statement provides a secured environment and avoids [SQL injection](https://en.wikipedia.org/wiki/SQL\_injection), that is the most common web hacking technique.

## **Prepared statement in Appsmith**

Appsmith supports using prepared statements by converting the user query into a parameterized query by replacing the bindings. That means the query created on the Appsmith has bindings for reading the widget values selected by users. Appsmith internally replaces these widget bindings with question marks('?') and translates Appsmith queries into Prepared Statements.

For example, the query created on Appsmith looks as below:

```
SELECT * FROM users where id = {{Table1.selectedRow.Id}};
```

Appsmith internally replaces `{{Table1.selectedRow.Id}}` with a question mark `(?)`. The payload inserts params one by one, ensuring that the bindings get properly escaped and sanitized before the query is sent to the database for execution. Thus, translating an Appsmith query into a prepared statement.

:::info
Appsmith first **sanitizes** each input so that the apps you build on Appsmith are **protected** against **SQL injection**.
:::

For example, your query has multiple bindings as below:

```
SELECT * FROM users where id = {{Table1.selectedRow.Id}} and name = {{Table1.selectedRow.name}};
```

For the example query, the first binding for **Id** `{{Table1.selectedRow.Id}}` is set as the first parameter and second binding for **name** `{{Table1.selectedRow.name}}` as second parameter.

:::info
The multiple bindings added to the Appsmith queries are translated into the number of parameters that are supplied to a prepared statement.
:::

### Prepared statement support

You can use prepared statements for the below data sources on Appsmith:


* [MS SQL](/reference/datasources/querying-mssql.md)
* [MySQL](/reference/datasources/querying-mysql.md)
* [PostgreSQL](/reference/datasources/querying-postgres.md)


### Enable prepared statement

To use prepared statements for a datasource, you'll have to enable the prepared statement for query execution.

<VideoEmbed host="youtube" videoId="PSw1iyyv6UM" title="How to enable a prepared statement" caption="How to enable a prepared statement"/>

:::info
Whenever you **create a new query**, the **prepared statement setting** is **enabled**. You can **turn it off manually** if you wish to.
:::

You can choose to enable or disable the prepared statement by using the `Use Prepared Statement` toggle available on the **Query** screen or navigate to the **Settings** tab where the same toggle `Use Prepared Statement` is available.

#### **Using a toggle on the Query tab**

![Enable or Disable Prepared Statement from Query Tab](</img/How-to-guide_Prepared_Statements__Enable_Prepared_Statement__Query__Query_tab.png>)

#### **Using a toggle on the Settings tab**

![Enable or Disable Prepared Statement from Settings Tab](</img/How-to-guide_Prepared_Statements__Enable_Prepared_Statement__Query__Settings_tab.png>)

:::info
Both the toggles `Use Prepared Statement`work in sync, and you can choose any to enable or disable the prepared statements.
:::

The [above data sources have some syntactic changes](how-to-use-prepared-statements.md#prepared-statement-support) in query creation. However, you can enable or disable the prepared statements for almost every scenario, as illustrated below.

### When to use prepared statements in Appsmith

You can use prepared statements when doing dynamic data bindings in the `where` clause. Remember to keep the query before the `where` clause static and provide the column names used to filter the data. However, the data can be dynamically set based on the user's inputs.

As shown in the code snippet below, you can dynamically add the data binding embedded in the mustache sign\*\*`({{}})`\*\* based on user input.

```
 SELECT * FROM USERS WHERE ID = {{Table1.selectedRow.Id}}
```

:::info
You can **only** have **bindings** for the **data supplied** to the **columns** in the **where** clause while **using prepared statements**.
:::

Below are some example use cases showcasing when and how you can use prepared statements:

#### Simple prepared statement

You can use prepared statements whenever you want to perform a simple Create, Read, Update, or Delete (CRUD) operation, which manipulates database table data with the dynamic data bindings.

For example, you want to create a user record into the `users` table for user registration, and capture the details from a registration form available on Appsmith for your user registration application. You can create a simple insert query to capture the user's input and store the record in the `users` table by enabling prepared statements.

```
Insert into users (name, email) values({{userRegistrationForm.data.name}}, {{userRegistrationForm.data.email}});
```

Here, `userRegistrationForm` is the name of the [form](/reference/widgets/form.md) widget, and `name` and `email` are the names of the input widget embedded into the [form](/reference/widgets/form.md).

:::info
You can use **join queries** or **sub-queries** to have **dynamic data binding** as long as the **query** is **static,** and **only** **data** bindings are added to the **where** clause.
:::

**Data Type Cast**

Appsmith out-of-the-box handles the data type casting based on the type of the data supplied for a column as a data binding.

For example, you are updating a user's data for the location. You are updating the latitude and longitude for the same. The latitude and longitude have values like `42.9756` and `105.8589` respectively.

The data supplied for latitude and longitude suggests that the column could have a floating data type. If the latitude and longitude have a floating data type in your `users` table, the updates happen seamlessly with prepared statements being turned on. However, suppose the data type of latitude and longitude is anything other than float, say text. To use prepared statements, you'll have to typecast the values manually in your queries, as shown in the below code snippet:

```
// you can see that **:: text** is used for latitude and 
// longitude to type cast the column data
Update users set latitude = {{userUpdateForm.data.latitude}} :: text, 
longitude = {{userUpdateForm.data.longitude}} :: text
where id = {{userUpdateForm.data.id}}
```

**In Clause**

You have a search feature allowing users to select different statuses to filter the result. A user can select more than one status to view the data. You translate this into a select query and use an in clause which takes up an array of data, and would write a query as below:

```
SELECT * from users where status in ({{userStatus.selectedOptionValues}})
```

Here, `userStatus` is a [Multiselect](/reference/widgets/multiselect.md) widget. There are two scenarios for the `in clause` queries; You don't know how many options the user selects, so you supply a dynamic length of an array, or you know the data bindings and so supply a static length of the array to the in clause.

**Dynamic Array Length**

When you supply an array with varying lengths, you generate a dynamic `in clause` with indefinite bindings determined at runtime. The problem with using an array for generating a dynamic `in clause` is that no definite values are available as selected options are not fixed and may vary. Because of this, the binding to the number of parameters with the query fails.

To use prepared statements for queries which dynamic data bindings for in clause, you can use a query as below:

```
SELECT * from users where status in = ANY ({{userStatus.selectedOptionValues}})
```

The example query binds the parameters and sanitize the values for your queries.

:::info
The **`= ANY`** combination is **supported** on [**PostgreSQL**](/reference/datasources/querying-postgres.md), but [**MySQL**](/reference/datasources/querying-mysql.md) **doesn’t** **support** it. For [**MySQL**](/reference/datasources/querying-mysql.md), when you have a dynamic array binding, you'll have to use it by **disabling prepared statements**.
:::

#### **Static array length**

When you know that the `in clause` will have a fixed number of data bindings you capture by different widgets, it is static. Here, you are aware of the number of data bindings present for a `in clause`. The prepared statement can work for such bindings, and you can write a query as follows:

```
SELECT * from users where status in ({{userActiveStatus.text}} , {{userInActiveStatus.text}})
```

Here, the `userActiveStatus` and `userInActiveStatus` are two different [text widgets](/reference/widgets/text.md) that are **added as** data binding for in clause.

### When not to use prepared statements in Appsmith

You can choose to turn off the prepared statement use when your query falls under one of the below criteria:

#### Dynamic table name

You are generating a table name dynamically based on some criteria in your code logic and then supplying it as a binding to the query.

```
Select * from {{Generated_Table_Name.text}} 
```

In this query, you read the table name from a [Text widget ](/reference/widgets/text.md)**(Generated\_Table\_Name)**, and as the query does not have a static block that tells which table to refer to the prepared statements fail to execute the binding. In such cases, you can turn off the prepared statements and continue to use the query to generate responses.

#### Dynamic queries

You generate the query on the fly based on some parameters and then execute it. For example, `{{Query\_to\_Execute.text}}` where the [Text Widget](/reference/widgets/text.md) **(Query\_to\_Execute)** has the query that is executed, which could be generated on the fly based on some logic in the code. As the static query that is executed is not available for pre-compilation, the prepared statements fail to execute. For such scenarios, you can disable the prepared statements and continue to use the query to generate responses.

#### Dynamic where clause

You want to generate a where clause based on some code logic. For example, you have a search feature where a user can select some parameters to filter the data. If the user selects particular criteria, you add that to the where clause to filter the records. The user may choose not to add the parameter, so the where clause does not have a column for filtering. It means you are dynamically generating the column name bindings and the data for the columns based on the user's input.

For such scenarios, the query can't be pre-compiled as there are too many unknowns, and every run could result in a different query, so the prepared statements fail to execute. You can toggle off the prepared statement and continue to use the query for result generation.

Look at the code snippet below, where you are generating a `where` clause with a null check.

```
SELECT * FROM users WHERE {{ !!Input1.text ? "name =" +  Input1.text : "name IS NULL" }}
```

For the scenario, also turn off the prepared statement. The query can’t be pre-compiled and evaluated as a new query for every run, as the where clause is dynamically generated and evaluated at runtime.

:::info
A **prepared statement** **requires** you to supply **a static part of the query** to understand the **type of operation** (Create, Read, Update or Delete) performed on the database table (Table name) and the **columns** that are used in the **where** clause to filter the data from the database table.
:::

## **Quick tips**

A few quick tips to remember so that you can quickly steer it through when using prepared statements:

* The commented code blocks in your queries should not have any bindings, as when you enable the prepared statement, it translates all the bindings. As the commented block has bindings, the translation fails, and you are not able to run the queries. To avoid this, remove the mustache **`{{}}`** sign around the binding whenever you are commenting code, and the prepared statement works.
* If you are using a dynamic array to supply the `in clause` and using [PostgreSQL](/reference/datasources/querying-postgres.md), then you can use `= ANY`. However, turn off the prepared statements to run the query if you are on [MySQL](/reference/datasources/querying-mysql.md).

## Conclusion

Prepared statements bring [efficiency](how-to-use-prepared-statements.md#efficiency) and [security](how-to-use-prepared-statements.md#security) to the data manipulation for the apps built on Appsmith. With sanitization done out-of-the-box by Appsmith for prepared statements, you can seamlessly build complex apps that suit your requirements.
