---
description: JavaScript guide for building apps on Appsmith,
sidebar_position: 2
---

# Writing JavaScript in Appsmith

Appsmith is an open source developer tool that lets you build tools and user interfaces. You’ll be using JavaScript to interact with the UI Widgets, APIs, and Database Queries during this process of building applications. In this guide, You’ll be looking at some basic operations with JavaScript to help you understand how easy and fun it is to build apps on Appsmith.

## **Mustache syntax**

The Mustache syntax helps you write JavaScript anywhere in Appsmith. For example, say if you want to render the data onto a table from API, on Appsmith, you can drag and drop the table widget, open the property pane and inside the table data, use mustache syntax to call the API.

```javascript
{{ myApiEndpoint.data.field1 }}
```

## **Binding Data**

Binding data into UI is one of the most common and frequently used operations when building User Interfaces. Now, you’ll look at how you can bind data into charts/table widgets inside Appsmith. For this, you’ll be using a sample query to fetch data from the mock database and then bind it to the widget.

Now create an application under your personal workspace and create a new DB Query by clicking the `+` icon next to it. Rename the query to `get_products`.

> You can rename any page name/widget name/query name by simply double-clicking on the existing one.

Select the Mock database and write a new query under it, in here, you’ll be using a database of the online store. Now fetch all the products of the store by using the following SQL Query:

```sql
select * from products
```

Execute the query by clicking on the Run button, you should see all the products in the Query response section.

Next, add the response; let’s bind this query to the table widget; you can now go to a page and drag and drop a table widget. You can access the table’s property pane by clicking on the cog icon on the top-right of the widget. Now let’s write JS in the Table Data section to access the query. For this, you should be using the Mustache syntax:

```javascript
{{ get_products.data }}
```

You should see all your products inside the table. If you want to display only specific products, you can implement a map function and return the necessary items. For example, the below JS code only shows the product name and the price in the table.

```javascript
{{ get_products.data.map(item =>({name:item.productName, price:item.mrp})) }}
```

## **Accessing widget property / state**

While building UI you might often need to access the state of the different properties for different things. For example, say you want to display the details of a particular row in a table, you’ll need to write some code. Now, look at how you can utilize JS in Appsmith and access the state and properties of the widget.

For this, let’s use the same table and display all the details of the product when clicked on a row by accessing the state.

Drag and drop the required text widgets. Now inside the text widget property pane, under the Text property add the following JS snippet:

```javascript
{{ Table1.selectedRow.productName }}
```

Now, when you click on the random row’s in the table, you can see the text automatically changes its state to the product name. In this way, you can access and manipulate the state inside the widgets. Similarly, you can also, add images and many more for your applications.

## **Performing Actions**

 Whenever you want to write custom logic for certain action calls or API calls, you can customize with simple JS. For example, say, you want to show an alert whenever you’re searching through tables. You can select the row and can add logic to the **`onSeachTextChanged`** property.

```javascript
{{ showAlert(Table1.searchText) }}
```

With this, whenever you’re searching for anything on the tables, you’ll see an alert with the value you’ve entered in the search input.

![Configuring Actions on Appsmith](https://lh5.googleusercontent.com/PB37xpaK7u6063ANpW8tnyTQyM16w9XugIt\_PSQy2O\_Hoy-A-FyP4Dhaq1HR8NUfyCvoVF0CKpx2Q3FMNO3JMifebaORF0MSfXIm3HSsVmyXQ2OWEaa5bGgKVDhpWNB27MNwF4j8)

## **Manually triggering APIs/Query**

You might often want to invoke your API Queries on certain actions. For example, say your APIs or DB Queries are updating from time to time and wanted to add a refresh button, you can simply do it with JS in Appsmith.

Now, let’s quickly add a button that executes the Query when clicked. Next, open the button’s property pane; you’ll find the `onclick` property under the actions section. Now add a new action and choose to execute a DB Query option; you’ll find all the already defined queries in the application. Select the `get_produts` query you’ll see JS already added to the `onclick` action.

```javascript
{{get_products.run()}}
```

In this way, you can customize all the actions on Appsmith for different widgets.

## Multi-line JavaScript

So far, you’ve seen simple JS operations, but say if you’re working on some API integrations or some different data sources, you might need to write some huge JS code. With Appsmith, you can do that within the same mustache syntax. Here’s a simple example of using multi-line code in Appsmith.

In your `Table1`, where you are binding all your products' data, you’ve simply used `get_products.data()` method. Instead of that, you can also write a function, try the below code snippet:

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

In this way, you can also write multi-line code within Appsmith. For more information on writing code in Appsmith, please refer to this page [Writing Code](/core-concepts/writing-code/).

## Making Table columns dynamic in Appsmith

In Appsmith, suppose you want to implement dynamic columns (show only necessary columns based on selection) in a table, you could write simple JavaScript inside the `Table Data` property. With this, you could show only columns that are selected from a dropdown.

![](</img/dynamic-table_(1).gif>)

For example, say your table has the following in the Table Data:

```
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
]
```

Now you wanted to show columns based on the selection in a dropdown, add a dropdown with values that are the same as columns in the table.

Drag and drop a Dropdown widget onto the canvas and add the following to the `Options` List and make it a Multi-Select dropdown in the `Selection Type` property.

```
[
  {
    "label": "task",
    "value": "task"
  },
  {
    "label": "status",
    "value": "status"
  },
  {
    "label": "action",
    "value": "action"
  }
]
```

Lastly, update the code in the table widget, map the data in the `Table Data` property using a mustache syntax and only return the data that's selected from the dropdown widget:

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
