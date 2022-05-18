# Snowflake

On Appsmith, it’s pretty straightforward to establish a connection with any data source, including SnowflakeDB, be it on the cloud, self-hosted version, or local environment.

{% hint style="warning" %}
The following document assumes that you understand the [basics of connecting to databases on Appsmith](../core-concepts/connecting-to-data-sources/connecting-to-databases.md). If not, please go over them before reading further.
{% endhint %}

## Connection Settings

Appsmith needs the following parameters for connecting to a Snowflake database:

{% hint style="info" %}
All required fields are suffixed with an asterisk (\*).
{% endhint %}

### **Connection**

You need to fill in the following parameters:

* **Account name\*:** Your account name is part of the connection string and consists of one or more components mentioned in the [Snowflake documentation](https://docs.snowflake.com/en/user-guide/admin-account-identifier.html).
* **Warehouse\*:** Specifies the virtual warehouse to use once connected. The specified warehouse should be an existing warehouse for which the default role has privileges.
* **Database\*:** Specifies the default database to use once connected. The specified database should be an existing database for which the default role has privileges.
* **Default Schema:** The connection does not limit queries to this schema. This information is only used to view the schema structure inside Appsmith.

### **Authentication**

Please fill in the following parameters:

* **Username\*:** Fill in the _**username**_ required to authenticate your database connection request.&#x20;
* **Password\*:** Fill _**password**_ required for authenticating connection requests for the given username to the database.

_Getting Started -_ [_Snowflake Documentation_](https://docs.snowflake.com/en/user-guide-getting-started.html)__

## Connecting Snowflake on Appsmith <a href="#heading-getting-started-connecting-snowflake-on-appsmith" id="heading-getting-started-connecting-snowflake-on-appsmith"></a>

What we need to make the connection are the endpoint, database name, and user credentials. With this in mind, let’s get started.

* On your Appsmith application, click on the `+` icon next to Datasources on the left navigation bar under Page1.
* Next, navigate to the Create New tab and choose **SnowflakeDB data source**.
* Rename the Datasource to **SnowflakeDB** CRUD by double-clicking on the existing one.
* Now, add your **SnowflakeDB account details.** All the details are available under the SnowflakeCloud settings:

![Snowflake Database Dashboard](../.gitbook/assets/aW5Lwtslt.avif)

* Here’s what the database configuration would look like:

{% embed url="https://youtu.be/7ZFvDXiIez0" %}
Connecting Snowflake on Appsmith
{% endembed %}

* Next, click on the `Test` button at the bottom right of the screen. It will help you understand whether your configuration is valid or not. If it returns a successful message, hit the ‘**Save**’ button to establish a secure connection between Appsmith and SnowflakeDB.

{% hint style="info" %}
After the connection is established, we can see all the sample data (tables) under the connected data source.
{% endhint %}

![](../.gitbook/assets/2W1WC4sa9.avif)

Now that we have the sample data, we will see how you query the snowflake database in the next section.&#x20;

## Querying Snowflake

Snowflake databases can be queried using the SQL syntax provided in their [command reference documentation](https://docs.snowflake.com/en/sql-reference-commands.html). All Snowflake queries return an array of objects where each object is a row returned by the query and each property in the object is a column. Let's look at an example to see how to query the Snowflake database.

* Click on the `+` icon next to the `datasources` and choose to Create New + from the **SnowflakeDB** CRUD data source.
* Rename the query to _**getCustomers.**_
* Copy the following SQL script to query all the Customers from the CUSTOMER table:

```
SELECT * FROM TPCDS_SF100TCL.CUSTOMER LIMIT 10;
```

* This simple query returns all the customers present in the sample data item. Hit the `RUN` button to view all the results.

The video below demonstrates how to query the Snowflake database.

{% embed url="https://youtu.be/JXOS1dJU8ZM" %}
Querying Snowflake
{% endembed %}

You have your query; you can bind it to various widgets. You can take reference from [this ](https://appsmith.hashnode.dev/a-simple-front-end-for-your-snowflakedb-datasource)example and learn how to build a frontend that can connect to [SnowflakeDB](https://www.snowflake.com) as a data source.

## Using Queries in applications

Once you have successfully run a Query, you can use it in your application to

* [Display Data](../core-concepts/displaying-data-read/)
* [Capture Data](../core-concepts/capturing-data-write/)
* [Execute Queries](https://docs.appsmith.com/core-concepts/connecting-to-data-sources/querying-a-database)
