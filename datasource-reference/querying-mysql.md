# MySQL

{% hint style="warning" %}
The following document assumes that you understand the [basics of connecting to databases on Appsmith](../core-concepts/connecting-to-data-sources/connecting-to-databases/). If not, please go over them before reading further.
{% endhint %}

## **Supported versions**

Appsmith supports MySQL versions 5.5, 5.6, 5.7, and 8.0.

## Connection Settings

Appsmith needs the following parameters for connecting to a MySQL database:

{% hint style="success" %}
All required fields are suffixed with an asterisk \(\*\).
{% endhint %}

### **Connection**

You need to fill in the following parameters:

* **Connection Mode\*:** You must choose one of the following two modes:
  * **Read Only:** Choosing this mode gives Appsmith read-only permission on the database. This allows you to only fetch data from the database. 
  * **Read / Write:** Choosing this mode gives Appsmith both read and write permissions on the database. This allows you to execute all CRUD queries.
* **Host Address / Port\*:** Fill in the database host’s address and port. If you don’t specify a port, Appsmith will try to connect to port 3306.
* **Database Name\*:** Fill in the name of the database that you want to connect to. This is your database’s name.

### **Authentication**

You need to fill in the following parameters:

* **Username\*:** Fill username required for authenticating connection requests to your database.
* **Password\*:** Fill password required for authenticating connection requests for the given username to the database. 

### **SSL**

You need to fill in the following parameters:

* **SSL Mode:** Choose your SSL model from the dropdown. 
* **Key File:** Upload your SSL key file from here.
* **Certificate:** Upload your SSL certificate here**.**
* **CA Certificate:** Upload your CA certificate here.
* **PEM Certificate:** Upload your PEM certificate here.
* **PEM Passphrase:** Fill in your PEM passphrase here.

## Querying MySQL

MySQL databases can be queried using the standard [SQL syntax](https://dev.mysql.com/doc/refman/8.0/en/). All MySQL queries return an array of objects where each object is a row returned by the query and each property in the object is a column.

![](../.gitbook/assets/postgres.gif)

## Using Prepared Statement (Beta)

Normal query execution simply string concatenates the evaluated values of the javascript bindings to produce the final query. This opens up a possibility of SQL injection by merging untrusted user input to trusted data for execution. Prepared Statement is one strategy of mitigating this risk. 

Appsmith converts the user query into a parameterized one by replacing the bindings in the query with '?'. The payload is then inserted one by one ensuring that the bindings get properly escaped and sanitized before the query is sent to the database for execution.

Lets look at a sample user query :

```SQL
SELECT * FROM users WHERE id = `{{Input1.text}}` AND name = `{{Input2.text}}`;
```

When using Prepared Statement, the above query is converted automatically to the following by Appsmith :

```SQL
SELECT * FROM users WHERE id = ? AND name = ?;
```

When executing the same query, Appsmith first sanitizes each input to ensure protection against SQL injection. It then sets `Input1.text`'s sanitized value as the first parameter and `Input2.text`'s sanitized value as the second parameter. 


### Enable Prepared Statement

To enable Prepared Statement, go to Settings tab and turn the toggle on for `[Beta] Use Prepared Statement`. Existing MySQL queries which use Javascript bindings to provide content of parameters (and not construct SQL command itself) would run as a Prepared Statement out of the box. 

![](../.gitbook/assets/prepared-statement-setting.png)


## Using Queries in applications

Once you have successfully run a Query, you can use it in your application to

* [Display Data](../core-concepts/displaying-data-read/)
* [Capture Data](../core-concepts/capturing-data-write/)

