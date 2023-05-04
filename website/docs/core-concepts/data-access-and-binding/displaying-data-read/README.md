# Display Data (Read)

You can display data from a query or JS function in a widget. Before reading this page, ensure you have [connected to a data source](/core-concepts/connecting-to-data-sources) and have a query that fetches data.

## Display data from query

Data from a [Query](/core-concepts/data-access-and-binding/querying-a-database) can be set in a widget property by referencing the Query's unique name.

**Example 1:** suppose you have a query named `fetch_users`. You can bind the results of the query to the Table widget by adding the following code in the **Table Data** property:

```javascript
{{ fetch_users.data }}
```

![](</img/bind-table_(2)_(4).gif>)

For more information about using Table widget to show data from queries, see [display data in tables](/reference/widgets/table#display-data-in-tables).


## Transform data

Each widget property has a specific data type that it validates its value against. If the data type mismatches, it throws an error. You can use JavaScript to transform the data when binding it to a property. For example, consider a query that returns an array of objects, as shown below:    

**Example Query Data**

```javascript
[
  {
    "id": 1,
    "name": "test",
    "status": "APPROVED",
    "gender": "",
    "avatar": "https://robohash.org/sednecessitatibuset.png?size=100x100&set=set1",
    "email": "barty.crouch@gmail.com",
    "address": "St Petersberg #911 4th main",
    "createdAt": "2020-03-16T18:00:05.000Z",
    "updatedAt": "2020-08-12T17:29:31.980Z"
  },
  {
    "id": 2,
    "name": "Jenelle Kibbys",
    "status": "APPROVED",
    "gender": "Female",
    "avatar": "https://robohash.org/quiaasperiorespariatur.bmp?size=100x100&set=set1",
    "email": "jkibby1@hp.com",
    "address": "85 Tennessee Plaza",
    "createdAt": "2019-10-04T03:22:23.000Z",
    "updatedAt": "2019-09-11T20:18:38.000Z"
  },
  {
    "id": 3,
    "name": "Demetre",
    "status": "APPROVED",
    "gender": "Male",
    "avatar": "https://robohash.org/iustooptiocum.jpg?size=100x100&set=set1",
    "email": "aaaa@bbb.com",
    "address": "262 Saint Paul Park",
    "createdAt": "2020-05-01T17:30:50.000Z",
    "updatedAt": "2019-10-08T14:55:53.000Z"
  }
]
```

Suppose you want to display this data in a [Select](/reference/widgets/select.md) widget. A Select widget only accepts data as an Array in the `{ "label": "string", "value": "string" }` format in its **Options** property, so you must transform the data from the query to pass it in the required structure.

The following example iterates over the query data and returns it in an `Array<label, value>` format:

```javascript
{{
  QueryName.data.map((row) => {
      return { label: row.name, value: row.id };
  });
}}
```

## Update widgets programmatically

When working with [widgets](/reference/widgets) in Appsmith, you may need to update values in the widget properties dynamically. Appsmith follows the **reactive programming paradigm**. Instead of updating widget properties and states through direct variable assignment (x = 5), widgets are connected and share data with each other. When a value is updated, any widgets that depend on that changed value also update automatically.

**Example 1:** suppose you have two Input widgets named `Input1` and `Input 2`. To update `Input2` with the value entered in `Input1`, add the following code in the `Default Value` property of Input2.

```javascript
{{Input1.text}}
```

Enter a value in `Input1` and see how the value updates in `Input2`.

**Example 2:** suppose you have two input widgets and one button widget named `Input1`, `Input2`, and `Button1`, respectively. This example shows how to update `Input2` with the value in `Input1` on the button click. Here, the [storeValue()](/reference/appsmith-framework/widget-actions/store-value) function is used.

Paste the following code in the `onClick` event of `Button1`. 

```javascript
{{storeValue('inputData',Input1.text)}}
```
Paste the following code in the `Default Value` property of Input2.
```javascript
{{appsmith.store.inputData}}
```
Enter a value in `Input1`. On button click, the value updates in `Input2`.

## Further reading

* [Capture Data](/core-concepts/data-access-and-binding/capturing-data-write)
* [Table Widget](/reference/widgets/table)
* [List Widget](/reference/widgets/list)
* [Working with Appsmith Framework Functions](/reference/appsmith-framework)
