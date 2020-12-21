# Querying MySQL

{% hint style="warning" %}
The following document assumes that you understand the [basics of connecting to databases on Appsmith](./). If not, please go over them before reading further. 
{% endhint %}

## **Supported versions**

Appsmith supports MySQL versions 5.5, 5.6, 5.7, and 8.0.

## Database connection settings 

Appsmith needs the following parameters for connecting to a MySQL database:  
****

{% hint style="info" %}
All required fields are suffixed with an asterisk \(\*\).
{% endhint %}

### **Connection**

#### **Connection Mode\***

You must choose one of the following two modes:

* **Read Only** - Choosing this mode gives Appsmith only read permission on the datasource. This allows you to write only select queries. 
* **Read / Write** - Choosing this mode gives Appsmith both read and write permissions on the datasource. This allows you to write all CRUD queries.

#### Host Address / Port\*

Fill in the database host’s address and port. If you don’t specify a port, Appsmith tries to connect to port 3306.

#### Database Name\*

Fill in the name of the database that you want to connect to. This is your database’s name.

### **Authentication**

#### **Username\***

Fill username required for authenticating connection requests to your database.

#### **Password\***

Fill password required for authenticating connection requests for the given username to the database. 

### **SSL** 

#### **SSL Mode**

Choose your SSL model from the dropdown. 

**Key File**

Upload your SSL key file from here.

**Certificate**

Upload your SSL certificate here**.**

#### **CA Certificate**

Upload your CA certificate here**.**

#### **PEM Certificate**

Upload your PEM certificate here.

#### **PEM Passphrase**

Fill in your PEM passphrase here.

### **MySQL Specific Parameters**

#### **Server Timezone Override** 

\[Appsmith to fill\]

## Writing a query

You can write any valid MySQL query in the **Query** tab of the Appsmith Query Editor. In addition to that, you can write JavaScript in your query to take input from widgets. To take input from a widget, use the mustache syntax inside the query. For example, the following query fetches marks of a student whose name is entered by the user in the [input widget](../../widget-reference/input.md) **filterInput**:

`SELECT * FROM students WHERE name = {{ filterInput.text }};`

{% hint style="info" %}
A query can take input from as many widgets as needed.
{% endhint %}

## **Testing your query**

We recommend that you always test your query before accessing it from a widget. To test, click on the run button to see if query execution succeeds. If the query execution succeeds then a success message will pop up on the screen in the top right corner.

## **Query Settings**

You can specify the following settings of your MySQL query in the **Query Settings** tab on the Appsmith Query Editor:

#### Run query on page load

This allows you to configure whether the query should load on every page load. By default, it is turned off. You can use this setting to tune the performance of your page as per your requirements.

#### Request confirmation before running query

\[Appsmith to fill\]

#### Query timeout \(in milliseconds\)

It’s the time till which Appsmith server waits for the query to execute before closing the connection. By default, it is set to 10000 ms. If your query takes longer than this to return results \[Appsmith to fill\]

## **Accessing query results**

To access the results of a MySQL query in a widget, use the following syntax: `{{ queryName.data() }}`

All MySQL queries return an array of objects where each object is a row returned by the query and each property in the object is a column.

