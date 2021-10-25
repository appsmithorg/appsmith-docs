---
description: Part One of Review Moderator Tutorial
---

# Connecting to Data Source and Binding Queries

### **Connecting to Postgres Mock DB**

Appsmith supports various data sources and lets you write queries on them to perform different actions from the application. In this tutorial, you'll connect to a Postgres data source that has the following tables:

1. **Business Table**: This contains detailed information about a few businesses that were filtered from the Yelp Data.
2. **Review Table**: This table has reviews associated with the businesses listed in the business table.

Now, let's utilise this mock data source to fetch all the businesses items for the Review Moderator app by following the below steps:

1. First, click on the `+` icon next to the `Datasources`.
2. Next, you’ll see a list of datasource options that you can connect to.
3. Choose Postgres and rename the data source to `Postgres Mock DB`.
4. Next, use the following details to connect with the data source.

```text
Connection Mode: Read / Write
Host Address: ec2-52-5-1-20.compute-1.amazonaws.com
Port: 5432
Database Name: d5ckn16780s3fo
User: rotnyypwviosem
Password: 5a07d165235aa9d0980ee8189c73fcfcef39f76872890a19e314b3d553698d63
```

To verify if this data source is valid or not, you can click on the `Test` button on your mid-bottom right. You should see a pop-up with the connection status.

Below is the GIF showing how you can connect to the data source:

![Connecting to a Datasource on Appsmith](https://lh6.googleusercontent.com/wrgdx_gBWDc3vMr6GrrC90ELXuNTTvPrBlcNpXlemvf3uWJ50KTbbaj3IqgsrP0F1-UHK9RwSVyLJOp0icGxOuJA84Mr--3VowK-zMzuBkNr9E9ECjzYkaN5FFkyhxXCVbhmMtb-)

![Testing the Datasource on Appsmith](https://lh3.googleusercontent.com/6dd0e0oudKxsfS5yFuj4pBlDI0RUSBRj1V5KxBTeZYScZ_GRyV4cR7SZ_nb7MbbjW2mfRi_Yq973wDdVLPGyzXEdpk9vh2wk61eVpjo9hJolbLCl60Xbr14F5oO8xHKxVvO6totY)

### **Writing your First Query**

The data source is successfully connected; now, let’s write a simple DB query to fetch all the business from the business table. Follow the below steps to do so:

1. First, click on the `+` icon next to the `Datasources`.
2. Find the created `Postgres Mock DB` datasource under the Active tab and click `NEW QUERY`.
3. This will create a new DB Query that you can use across the Page.
4. Name this query as `getBusinessData` and click select.
5. Use the following query in the query pane to get all the business data:

```sql
select * from yelp_business;
```

* To run this query, click on the `RUN` button on the top-right corner of the DB query.

Just like that, we should see the response from the DB Query in the Response Pane below.

Below is a GIF showing the same:

![Running Queries on Appsmith](https://lh4.googleusercontent.com/gzno-n4ukb9e8UqPaVxomkelkZO3ktVn23bvnvTPPGJ2UJxxkRdVwRt4teyn7TYeJBXBetrvs1G41ElAKtjcEASTgVOPg1IYlTc0NT0Zb3xRUnVjZZ1rNKcT6Y3ZB_yeQVeP-g-4)

Let’s bind this data onto the powerful table widget of Appsmith!

### Binding Queries onto Widgets

In the previous section, you’ve created a DB query named `getBusinessData`; let’s bind the query onto a table widget by following the below steps:

1. Click on the `+` icon next to the `Widgets` from entity explorer.
2. You’ll find a great set of UI widgets here that you can use to build the application
3. Drag and drop a Table widget onto the canvas.

Now, you’ll find a new floating window as soon as you drop the table onto the canvas; you can call it the Widget property pane. Here, you can find all the configurations of the table and customisation properties. Here’s a screenshot of the table widget and its property pane:

![Appsmith Table Widget and Property Pane](https://lh6.googleusercontent.com/n_uOOPk4lVhZ8W_a6KEIRMOsRHLbG2DNbsM0kS0zH9rbFNfCzvA8B2Qfg8_SeIXqYVy81e18OQw_Pz6N5wgF-gjPssUioYDpMU4QVaW_NDZ3eQjR9JVMqOX9Hgi3N4HfnLHUjxIg)

Now let’s look at the Table’s Property Pane:

**Table Data**: To add data to the table, we can update the property pane's `Table Data` property. By default, it has some initial configuration; you can update it based on your preferences. But also make sure that it will only accept array data types. To learn more about the table widget, go through the detailed documentation [here](https://docs.appsmith.com/widget-reference/table).

**Table Columns**: Beneath the Table Data property, you can configure all your column data. You can click on the cog icon and set the column data type individually.

These are the two fundamental properties that are needed for the table widget. However, many other properties allow you to add different actions and customise UI.

Now, in the `Table Data` property, let’s bind the response from the DB Query. To do this, you’ll have to use the Moustache Operator.

{% hint style="success" %}
In Appsmith, the moustache operator `{{ /* This is JavaScript */ }}` can be used anywhere to write JavaScript. For example, when binding data onto widget’s, sending params to APIs, sharing data across pages and many more.
{% endhint %}

Now copy the following onto the `Table Data` property:

```javascript
{{ getBusinessData.data  }}
```

When you copy this onto the Table Data, you should see the data magically populated onto the Table. Then, based on your preference, you can customise the column names and style your table widget with the other properties. Below is the screenshot of the Table data:

![](https://lh6.googleusercontent.com/-6nc-MyTFtR61saffFNb4sTAOj_XJn81A_alkq3ofkLmBhlHTmOp1yjmMWQzrjM1rbtfIkO_KzHgVypRtiSb6ppoOs7PLtnW5AKD2-qLrm7macsddznbYRPkv30OuysQ9gvzcgJp)

But what just happened here?

Here, we are accessing the entire query object using the query name `getBusinessData`, and the `.data`property allows us to attach data.

Setting Table Data to `{{ getBusinessData.data }}` also ensures that whenever `Busines Page` loads, `getBusinessData` runs automatically. You can, although, change this default behaviour by toggling the field "Run query on page load" on the Setting tab of `getBusinessData`.

### Variables and Names

In the previous sections, we've used names to access widgets and queries. For example, you accessed a query's result by accessing a property on the query's name. In that sense, think of widgets, APIs and DB Query in Appsmith as variables having a name. Similar to variables in other programming languages:

1. They represent an object, be it a widget, an API object, or a query object
2. They support a set of methods
3. They have a scope; they can be accessed from only within their parent page
4. All names within a page must be unique, including widget names, query names, or API names.

As you'll see in the next section, the inverse of this is also possible, and a query can also access i.e. a widget’s state. Furthermore, all the building blocks of an Appsmith page - Widgets, DB Queries, and APIs can access each other's data and/or state using their names.

  


