---
sidebar_position: 1
---

# Building a Simple UI

In this section, you will walk through creating a simple web page that displays products fetched from a database in a table for the **Oakry** store.

By the end of part 1, you'll be familiar with:

* Creating Widgets on Appsmith.
* Connecting Databases and writing SQL queries in Appsmith.
* Configuring widgets to render the results of your queries.

## Adding your First Widget

As discussed in the previous sections, Widgets are simple UI Components that can be added to our Apps. Now, let's add a table widget under the **`ProductListPage`** by following the below steps:

1. Navigate to **Widgets** under `ProductListPage`
2. Click on `+`
3. Find the `Table` widget
4. Drag and drop it to the canvas on the right

This will create a new table on `ProductListPage`.

<VideoEmbed host="youtube" videoId="O46_oPfurTc" title="Drag-and-dropping your first widget onto the canvas" caption="Drag-and-dropping your first widget onto the canvas"/>

Let's discuss what has happened now:

* As soon as you add a new `Table` widget, you should see some pre-populated data.
* A floating window, titled **`Table1`**, open's up on the right of the table. This is the widget's property-pane; here, you can configure the widget's properties.
* The `Table Data` property in the pane defines what data will be displayed on the table. You can read more about the table widget's properties [here](/reference/widgets/table/).
* By default, the name of the table is set to **Table1**. It can be renamed to anything you like by simply double-clicking it. Let's now change it to **`ProductsTable`**.

### Understanding the Table Widget

Let's now take a minute to check how the array in `Table Data` maps to the table's columns and their values.

Here are steps to play with **Table Data** to get a hang of how it affects the data displayed in the table:

1. First, go to the **Table Data** property of **`ProductsTable`**.
2. Copy-paste the below JSON data.
3. The above step will update the existing pre-populated data. You'll see the updated table.
4. You can always change the values, to test it quickly, go to the first object of the array and update the value of the key `one` from `1` to `i`.
5. Verify that column **one** of the first row of the table now shows `i`.

```javascript
[
  { "one": "1", "two": "2" },
  { "one": "I", "two": "II" }
]
```

You should see the values of your table like the below screenshot:

![](/img/as_storeTutorial_testTable.png)

Let's go back to the `Table Data` field. When you place your cursor in the Table Data field, you see a floating window consisting of two properties:

1. `Expected Structure`: This field specifies the data type expected by the property field. For the table widget, the **Expected Structure** is `Array<Object>`. Meaning the values can be set to anything that either is or evaluates to Table Object.
2. `Evaluated Value`: This field shows in real-time what the input to the field evaluates to. This comes in handy when you write JavaScript code in the field, and you want to check whether it evaluates as expected.

By now, you have successfully displayed static data in your table. In the next section, we'll display product data from the mock database for the **Oakry** app.

However, when you are building an app for a different use case, you can connect to your own [database](/core-concepts/connecting-to-data-sources/).

## Writing your First Query

Now, let's utilize the mock database to display all the catalog items for the **Oakry** app by following the below steps:

1. First, let's create a new **Datasource** by clicking on the **"+"** icon next to the **Datasource** directory.
2. Select `Create New`, choose Postgres as the Database type, and name it "Mock Database".
3. Fill in the following details, and hit the **Save** button.

```
Host: fake-api.cvuydmurdlas.us-east-1.rds.amazonaws.com
Port: 5432
User: fakeapi
Password: LimitedAccess123#
Database: fakeapi
```

1. Next, click on the _**New Query**_ button, and you'll see a query created with the name **Query1**
2. Rename the query to **ProductsQuery** by double-clicking on the existing name.
3. Next, click on the "Create" option and paste the query shown below into the **Query** tab:

```sql
SELECT "id", "productName", "category", "mrp" FROM products ORDER BY "id";
```

1. Click on the **Run** button to execute your query and print out all the results into the Response window at the bottom of the page.

The query is saved as soon as it's created, without you having to explicitly save it. This is the case with all APIs, widgets, and any changes you make to any object within your app.

Below is a screenshot of how Appsmith renders the outputs of your SQL Query.

![Your successful query results will appear in the bottom section of the screen under the Response tab.](/img/as_storeTutorial_dbRun.png)

## Accessing Query Results to a Widget

The next step is to display the query results in the `ProductsTable`, follow the below steps to do the same:

1. Navigate back to _Widgets_ under `ProductListPage` and select the `ProductsTable`
2. Open `Product_Table` properties, and copy the following property to `Table Data`

```javascript
{{ProductsQuery.data}}
```

> When you use mustache syntax `{{ }}`, Appsmith will resolve the contents of the curly braces as JavaScript code. You can write JavaScript anywhere in Appsmith using `{{ }}`.

Above, we are accessing our query object by its name, `ProductsQuery`; then, we reference its `.data` property to use the data that was returned by the query.

Setting **Table Data** to `{{ ProductsQuery.data }}` also ensures that whenever **ProductListPage** loads, **ProductsQuery** runs automatically. You can, although, change this default behavior by toggling the field "**Run query on page load**" on the **Setting** tab of **ProductsQuery**.

Now, you should see that your table displays the results of `ProductsQuery`. At this point, you could deploy your app and share it to display the Oakry product catalog!

Below is the screenshot:

![You can access the response data of any query that has been run by referencing its data property.](/img/as_storeTutorial_productsQuery.png)

## Variables and Names

In the previous section, we used names to access our query data by referencing a property, `data`, on the query's name. In that sense, think of widgets, APIs, and DB Queries in Appsmith in the same way that you think of variables in other programming languages:

1. They represent an object; in our case, a widget, an API object, or a query object.
2. They have properties and support a set of methods.
3. They have a scope; they can only be accessed from within their parent page.
4. All names within a page must be unique.

As you'll see in the next section, we'll see that a widget's state can also be accessed from within a query definition. All the building blocks of an Appsmith page - Widgets, DB Queries, and APIs can access each other's data and/or state by using their names.

## What's next?

When you're comfortable with the basics of using the table widget, setting up a DB query, and connecting the widget to display query results, read [part 2](using-forms.md) of the tutorial to learn to use widgets that enable you to accept and process user input.
