# Redshift

{% hint style="warning" %}
The following document assumes that you understand the [basics of connecting to databases on Appsmith](../core-concepts/connecting-to-databases/). If not, please go over them before reading further.
{% endhint %}

## Connection Settings

Appsmith needs the following parameters for connecting to a Redshift database:

{% hint style="success" %}
All required fields are suffixed with an asterisk \(\*\).
{% endhint %}

### **Connection**

You need to fill in the following parameters:

* **Connection Mode\*:** You must choose one of the following two modes:
  * **Read Only:** Choosing this mode gives Appsmith read-only permission on the database. This allows you to only fetch data from the database. 
  * **Read / Write:** Choosing this mode gives Appsmith both read and write permissions on the database. This allows you to execute all CRUD queries.
* **Host Address / Port\*:** Fill in the database host’s address and port. If you don’t specify a port, Appsmith will try to connect to port 5439.
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

## Querying Redshift

Redshift databases can be queried using the standard [SQL syntax](https://docs.aws.amazon.com/redshift/latest/dg/cm_chap_SQLCommandRef.html). All Redshift queries return an array of objects where each object is a row returned by the query and each property in the object is a column. Appsmith provides template queries to help with the syntax

![Click to expand](../.gitbook/assets/redshift_select_query.gif)

## Taking Inputs from Widgets

Queries can take inputs from widgets using javascript inside the query and referencing the widget property. Open `{{ }}` inside the query to write javascript and access other entities on the page using their names.

{% hint style="warning" %}
You may need to wrap your string mustache bindings in single quotes to pass string values to Redshift
{% endhint %}

```sql
select * from users where username like '%{{Text1.text}}%'
```

![Click to expand](../.gitbook/assets/redshift_query_widget_input.gif)

{% page-ref page="../core-concepts/connecting-to-databases/querying-a-database.md" %}

