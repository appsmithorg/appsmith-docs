# MS SQL

{% hint style="info" %}
The following document assumes that you understand the [basics of connecting to databases on Appsmith](https://docs.appsmith.com/core-concepts/connecting-to-data-sources/connecting-to-databases). If not, please go over them before reading further.
{% endhint %}

[Microsoft SQL Server](https://www.microsoft.com/en-in/sql-server/sql-server-downloads) is a relational database management system developed by Microsoft that supports a wide variety of transaction processing, business intelligence, and analytics applications in corporate IT environments.

{% hint style="warning" %}
Appsmith's backend server supports **TLS1.1** and **TLS1.2** for connecting to endpoints.
{% endhint %}

### Connection Settings

![](https://lh6.googleusercontent.com/D1QUJ7SEGU3ob0-LpYyyxDMEAE-zHQxXjwXX4ndwYfu91Q0qs74os3WRcuahXLZOwYqs36sLnV7mmn2xJKW9ZEhqY08rR0mONeIVL--4O0touLU3O-4qa8KRMMLcYhRx3FGLDEyOrVBBnnbttA)

Appsmith needs the following parameters for connecting to an MsSQL database:

{% hint style="success" %}
All required fields are marked with an asterisk (\*).
{% endhint %}

#### **Connection**

* **Connection Mode:**
  * **Read / Write:** Choosing this mode gives Appsmith both read and write permissions on the database. It allows you to execute all CRUD queries.
  * **Read Only:** Choosing this mode gives Appsmith read-only permission on the database. It only allows you to fetch data and prevents making any changes.
* **Host Address / Port:** Fill in the database host's address and port. If you don't specify a port, Appsmith will try to connect to port 5432 by default.
* **Database Name:** Fill in the name of the database that you want to connect to.

#### **Authentication**

* **Username:** Fill in the username for the database user responsible for approving connection requests.
* **Password:** Fill in the password required to log in with the provided username.

#### **SSL**

In this optional section, you may handle any SSL configuration required to connect to your database.

* **SSL Mode:** Choose your SSL model from the dropdown.
* **Key File:** Upload your SSL key file from here.
* **Certificate:** Upload your SSL certificate here.
* **CA Certificate:** Upload your CA certificate here.
* **PEM Certificate:** Upload your PEM certificate here.
* **PEM Passphrase:** Fill in your PEM passphrase here.

### Querying MsSQL

You can query MsSQL databases using the standard [T-SQL syntax](https://docs.microsoft.com/en-us/sql/t-sql/tutorial-writing-transact-sql-statements?view=sql-server-ver15). When you create a new query, Appsmith can provide some template SQL to help understand the basic syntax:

![Appsmith can provide short SQL templates to guide your query](https://lh3.googleusercontent.com/m9\_HrrEv0zEMoWaK2csmD-2wYctKSFII33ShxnKeSlabGjRUg2oZQPlfRJPxaQPBkXdsmowGcp7N5r9xoLE5QSHTwaoDAE17kogI2YVr\_0tTAXwa6hJfhOUEWfAk77w3bjKPNGmJnW500BK6RQ)

MsSQL queries will return an array of objects; each object represents a row, and each property in that object represents a column.

```
[
  { id: “1”, color: “blue” },
  { id: “1”, color: “periwinkle” },
  { id: “1”, color: “chartreuse” },
]
```

Lastly, you may wish to enable the **"Request confirmation before running query"** setting to help avoid accidentally destructive actions. You can find this option in the Settings tab of the query.

![Enable this setting in your query to require user confirmation before potentially destructive actions](https://lh6.googleusercontent.com/1WDJ0yRW1lPkGOtBQgq1BecR1x2YWjvWg8h0vGgAG8bmbE6E5XuBksWHAnn9suD2Y8d9J69ivHavFtvEmkHutIM\_1ZE9mTgIUyIET0B4Yis0eRCKwNoIyg0ApQ33wvp6DoTjA82HhfDBHx1MNg)

For a more detailed walkthrough of using Appsmith to run queries against an MsSQL database, you can also check out [this blog post](https://appsmith.hashnode.dev/a-simple-front-end-for-your-mssql-datasource)!

### Using Prepared Statement (Beta)

Normal query execution simply string concatenates the evaluated values of the javascript bindings to produce the final query. This opens up the possibility of SQL injection by merging untrusted user input with trusted data for execution. Using a prepared statement is one strategy for mitigating this risk.

Appsmith converts the user query into a parameterized one by replacing the bindings in the query with '?'. The payload is then inserted one by one ensuring that the bindings get properly escaped and sanitized before the query is sent to the database for execution.

Follow the guide on [how to use prepared statements](../../learning-and-resources/how-to-guides/how-to-use-prepared-statements.md) for efficient and secured data transactions.

## Using Queries in Applications

Once you have successfully run a Query, you can use it in your application to

* [Display Data](../../core-concepts/data-access-and-binding/displaying-data-read/)
* [Capture Data](../../core-concepts/data-access-and-binding/capturing-data-write/)
