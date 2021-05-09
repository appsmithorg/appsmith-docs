---
description: JavaScript guide for building apps on Appsmith
---

# Writing JavaScript in Appsmith

Appsmith is a low-code tool that lets us build tools and user interfaces. We’ll be using JavaScript to interact with the UI Widgets, APIs, and Database Queries during this process of building applications. In this guide, we’ll be looking at some of the basic operations with JavaScript to help us understand how easy and fun building apps on Appsmith is!

## **Moustache Syntax**

The Moustache syntax helps us write JavaScript anywhere in Appsmith. For example, say if you want to render the data onto a table from API, on Appsmith, you can drag and drop the table widget, open the property pane and inside the table data, use moustache syntax to call the API.

```javascript
{{ myApiEndpoint.data.field1 }}
```

## **Binding Data**

Binding data into UI is one of the most common and frequently used operations when building User Interfaces. Now, you’ll look at how you can bind data into charts/table widgets inside Appsmith. For this, we’ll be using a sample query to fetch data from the mock database and then bind it to the widget.

Now create an application under your personal organisation and create a new DB Query by clicking the `+` icon next to it. Rename the query to `get_products`.

> You can rename any page name/widget name/query name by simply double-clicking on the existing one.

Select the Mock database and write a new query under it, in here, we’ll be using a database of the online store. Now fetch all the products of the store by using the following SQL Query:

```sql
select * from products
```

Execute the query by clicking on the Run button, you should see all the products in the Query response section.

Next, add the response; let’s bind this query to the table widget; you can now go to a page and drag and drop a table widget. You can access the table’s property pane by clicking on the cog icon on the top-right of the widget. Now let’s write JS in the Table Data section to access the query. For this, you should be using the Moustache syntax:

```javascript
{{ get_products.data() }}
```

There you go! You should see all your products inside the table. If you want to display only specific products, you can implement a map function and return the necessary items. For example, the below JS code only shows the product name and the price in the table.

```javascript
{{ get_products.data.map(item =>({name:item.productName, price:item.mrp})) }}
```

## **Accessing Widget Property / State**

While building UI you might often need to access the state of the different properties for different things. For example, say you want to display the details of a particular row in a table, you’ll need to write some code. Now, look at how you can utilise JS in Appsmith and access the state and properties of the widget.

For this, let’s use the same table and display all the details of the product when clicked on a row by accessing the state.

First, drag and drop the required text widgets. Now inside the text widget property pane, under the Text property add the following JS snippet:

```javascript
{{ Table1.selectedRow.productName }}
```

Now, when you click on the random row’s in the table, you can see the text automatically changes its state to the product name. In this way, you can access and manipulate the state inside the widgets. Similarly, you can also, add images and many more for your applications.

## **Performing Actions**

Appsmith loves JavaScript! Whenever you want to write custom logic for certain action calls or API calls, you can customise with simple JS. For example, say, you want to show an alert whenever you’re searching through tables. You can select the row and can add logic to the **`onSeachTextChanged`** property.

```javascript
{{ showAlert(Table1.searchText) }}
```

With this, whenever you’re searching for anything on the tables, you’ll see an alert with the value you’ve entered in the search input.

![Configuring Actions on Appsmith](https://lh5.googleusercontent.com/PB37xpaK7u6063ANpW8tnyTQyM16w9XugIt_PSQy2O_Hoy-A-FyP4Dhaq1HR8NUfyCvoVF0CKpx2Q3FMNO3JMifebaORF0MSfXIm3HSsVmyXQ2OWEaa5bGgKVDhpWNB27MNwF4j8)

## **Manually triggering APIs/Query**

You might often want to invoke your API Queries on certain actions. For example, say you’re APIs or DB Queries are updating from time to time and wanted to add a refresh button, you can simply do it with JS in Appsmith.

Now, let’s quickly add a button that will execute the Query when clicked. Next, open the button’s property pane; you’ll find the onclick property under the actions section. Now add a new action and choose to execute a DB Query option; you’ll find all the already defined queries in the application. Select the `get_produts` query you’ll see JS already added to the onclick action.

```javascript
{{get_products.run()}}
```

In this way, you can customise all the actions on Appsmith for different widgets.

## Multiline JavaScript

So far, we’ve seen simple JS operations, but say if you’re working on some API integrations or some different data sources, you might need to write some huge JS code. With Appsmith, you can do that within the same moustache syntax. Here’s a simple example of using multi-line code in Appsmith.

In our `Table1`, where we are binding all our products data, we’ve simply used `get_products.data()` method. Instead of that, you can also write a function, try the below code snippet:

```javascript
{{ 
function(){
    const data = get_products.data.map(item => ({
        name: item.productName,
        price : item.mrp
        }));
     return data;
    }
}}
```

In this way, you can also write multi-line code within Appsmith! For more information on writing code in Appsmith, please refer to this page [Writing Code](../core-concepts/writing-code/).

## Making Table Columns Dynamic in Appsmith

In Appsmith, suppose you want to implement dynamic columns in a table that updates automatically depending on a particular query, you could simply use a Dropdown widget and map it over its columns using simple JS. In this way, you can show columns dynamically by selecting them in a dropdown. Below is the code snippet that can be used in the Dropdown Widget data:

```javascript
{{
[
  {
    "step": "#1",
    "task": "Drag a Table",
    "status": ":white_check_mark:",
    "action": ""
  },
  {
    "step": "#2",
    "task": "Create a Query fetch_users with the Mock DB",
    "status": "--",
    "action": ""
  },
  {
    "step": "#3",
    "task": "Bind the query to the table",
    "status": "--",
    "action": ""
  }
].map((row) => {
const obj = {};
Dropdown1.selectedOptionValues.map((val) => { obj[val] = row[val]  });
return obj;
 })
}}
```

You could check the live example in this app [here](https://app.appsmith.com/applications/6063307b034ece74b148125a/pages/6063307b034ece74b148125c). 



