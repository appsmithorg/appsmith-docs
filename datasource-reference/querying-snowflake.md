# Snowflake

{% hint style="warning" %}
The following document assumes that you understand the [basics of connecting to databases on Appsmith](../core-concepts/connecting-to-data-sources/connecting-to-databases/). If not, please go over them before reading further.
{% endhint %}

## Connection Settings

Appsmith needs the following parameters for connecting to a Snowflake database:

{% hint style="success" %}
All required fields are suffixed with an asterisk \(\*\).
{% endhint %}

### **Connection**

You need to fill in the following parameters:

* **Account name\*:** Your account name is part of the connection string and consists one or more of the components mentioned in the [Snowflake documentation](https://docs.snowflake.com/en/user-guide/admin-account-identifier.html).
* **Warehouse\*:** Specifies the virtual warehouse to use once connected. The specified warehouse should be an existing warehouse for which the default role has privileges.
* **Database\*:** Specifies the default database to use once connected. The specified database should be an existing database for which the default role has privileges.
* **Default Schema:** The connection does not limit queries to this schema. This information is only used to provide a view of the schema structure inside Appsmith.

### **Authentication**

You need to fill in the following parameters:

* **Username\*:** Fill username required for authenticating connection requests to your database.
* **Password\*:** Fill password required for authenticating connection requests for the given username to the database. 

## Querying Snowflake

Snowflake databases can be queried using the SQL syntax provided in their [command reference documentation](https://docs.snowflake.com/en/sql-reference-commands.html). All Snowflake queries return an array of objects where each object is a row returned by the query and each property in the object is a column.

![](../.gitbook/assets/snowflake.gif)

## Using Queries in applications

Once you have successfully run a Query, you can use it in your application to

* [Display Data](../core-concepts/displaying-data-read/)
* [Capture Data](../core-concepts/capturing-data-write/)

