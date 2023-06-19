---
sidebar_position: 15
---
# Redshift
This page provides information for connecting to Redshift and using queries to manage data in Appsmith.

## Connection settings

Appsmith needs the following parameters for connecting to a Redshift database:

:::tip
All required fields are suffixed with an asterisk (\*).
:::

### **Connection**

You need to fill in the following parameters:

* **Connection Mode\*:** You must choose one of the following two modes:
  * **Read Only:** Choosing this mode gives Appsmith read-only permission on the database. This allows you to only fetch data from the database.
  * **Read / Write:** Choosing this mode gives Appsmith both read and write permissions on the database. This allows you to execute all CRUD queries.
* **Host Address / Port\*:** Fill in the database host’s address and port. If you don’t specify a port, Appsmith connects to port 5439.
* **Database Name\*:** Fill in the name of the database that you want to connect to. This is your database’s name.

### **Authentication**

You need to fill in the following parameters:

* **Username\*:** Fill username required for authenticating connection requests to your database.
* **Password\*:** Fill password required for authenticating connection requests for the given username to the database.

### **SSL**

You need to fill in the following parameters:

* **SSL Mode:** Choose your SSL model from the dropdown.
* **Key File:** Upload your SSL key file from here.
* **Certificate:** Upload your SSL certificate here.
* **CA Certificate:** Upload your CA certificate here.
* **PEM Certificate:** Upload your PEM certificate here.
* **PEM Passphrase:** Fill in your PEM passphrase here.

## Querying Redshift

Redshift databases can be queried using the standard [SQL syntax](https://docs.aws.amazon.com/redshift/latest/dg/cm\_chap\_SQLCommandRef.html). All Redshift queries return an array of objects where each object is a row returned by the query and each property in the object is a column. Appsmith provides template queries to help with the syntax

![Click to expand](/img/redshift_query_widget_input.gif)

## Using queries in applications

Once you have successfully run a Query, you can use it in your application to

* [Display Data](/core-concepts/data-access-and-binding/displaying-data-read/)
* [Capture Data](/core-concepts/data-access-and-binding/capturing-data-write/)
