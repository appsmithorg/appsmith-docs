# MS SQL

On Appsmith, it’s pretty straightforward to establish a connection with any data source, including MS SQL.

{% hint style="info" %}
The following document assumes that you understand the [basics of connecting to databases on Appsmith](https://github.com/appsmithorg/appsmith-docs/tree/2974d21a1cd2f008630320dd13f2136d10c2249b/core-concepts/connecting-to-databases/README.md). If not, please go over them before reading further.
{% endhint %}

[Microsoft SQL Server](https://www.microsoft.com/en-in/sql-server/sql-server-downloads) is a relational database management system developed by Microsoft that supports a wide variety of transaction processing, business intelligence, and analytics applications in corporate IT environments.

{% hint style="warning" %}
Appsmith's backend server supports **TLS1.1** and **TLS1.2** for connecting to endpoints.
{% endhint %}

## Connection Settings

Appsmith needs the following parameters for connecting to an MsSql database:

{% hint style="success" %}
All required fields are suffixed with an asterisk (\*).
{% endhint %}

### **Connection**

You need to fill in the following parameters:

* **Connection Mode\*:** You must choose one of the following two modes:
  * **Read Only:** Choosing this mode gives Appsmith read-only permission on the database. This allows you to only fetch data from the database.
  * **Read / Write:** Choosing this mode gives Appsmith both read and write permissions on the database. This allows you to execute all CRUD queries.
* **Host Address / Port\*:** Fill in the database host’s address and port. If you don’t specify a port, Appsmith will try to connect to port 5432.
* **Database Name\*:** Fill in the name of the database that you want to connect to. This is your database’s name.

### **Authentication**

You need to fill in the following parameters:

* **Username\*:** Fill in the username required for authenticating connection requests to your database.
* **Password\*:** Fill password required for authenticating connection requests for the given username to the database.

### **SSL**

You need to fill in the following parameters:

* **SSL Mode:** Choose your SSL model from the dropdown.
* **Key File:** Upload your SSL key file from here.
* **Certificate:** Upload your SSL certificate here.
* **CA Certificate:** Upload your CA certificate here.
* **PEM Certificate:** Upload your PEM certificate here.
* **PEM Passphrase:** Fill in your PEM passphrase here.

## Querying MsSQL

MsSQL databases can be queried using the standard [T-SQL syntax](https://docs.microsoft.com/en-us/sql/t-sql/lesson-1-creating-database-objects?view=sql-server-ver15). All MsSQL queries return an array of objects where each object is a row returned by the query and each property in the object is a column. Appsmith provides template queries to help with the syntax

## Using Prepared Statement (Beta)

Normal query execution simply string concatenates the evaluated values of the javascript bindings to produce the final query. This opens up the possibility of SQL injection by merging untrusted user input with trusted data for execution. Using a Prepared Statement is one strategy for mitigating this risk.

Appsmith converts the user query into a parameterized one by replacing the bindings in the query with '?'. The payload is then inserted one by one ensuring that the bindings get properly escaped and sanitized before the query is sent to the database for execution.

Let's look at a sample user query :

```sql
SELECT * FROM users WHERE id = `{{Input1.text}}` AND name = `{{Input2.text}}`;
```

When using Prepared Statement, the above query is converted automatically to the following by Appsmith :

```sql
SELECT * FROM users WHERE id = ? AND name = ?;
```

When executing this query, Appsmith first sanitizes each input to ensure protection against SQL injection. It then sets `Input1.text`'s sanitized value as the first parameter and `Input2.text`'s sanitized value as the second parameter.

### Enable Prepared Statement

To enable Prepared Statement, go to the Settings tab and turn the toggle on for `Use Prepared Statement`. Existing MS-SQL queries that use Javascript bindings to provide content of parameters (and not construct SQL command itself) would run as a Prepared Statement out of the box.

![](../.gitbook/assets/mssqlss.PNG)

## Using Queries in applications

Once you have successfully run a Query, you can use it in your application to

* [Display Data](../core-concepts/displaying-data-read/)
* [Capture Data](../core-concepts/capturing-data-write/)
