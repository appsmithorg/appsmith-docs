# Display Data (Read)

YOu can display data from a query or JS function in a widget by referencing its name in the respective widget property. This document presumes you have successfully [connected to a data source](/core-concepts/connecting-to-data-sources) and have a Query that fetches data.

## Display data in a widget

Widget properties can be edited via the property pane. Data from a [Query](/core-concepts/data-access-and-binding/querying-a-database) can be set in a widget property by referencing the name of the Query. Each widget property has a specific data type that it validates its value against. If the data type mismatches, it throws an error. This can be fixed using JavaScript to [transform](#transforming-data) the value of the property. 

:::tip
Appsmith is **Reactive** so the widgets are automatically updated whenever the data in the Query changes.
:::

**Example 1:** you can bind the results of the Query named `fetch_users` to the table widget by adding the following code in Table Data property:

```javascript
{{ fetch_users.data }}
```

![](</img/bind-table_(2)_(4).gif>)

For more information about using [Table widgets](/reference/widgets/table) to show data from queries, see [display data in tables](/reference/widgets/table#display-data-in-tables).

When working with [widgets](/reference/widgets) in Appsmith, you may need to update values in the widget properties dynamically. Appsmith follows the **reactive programming paradigm**. Instead of updating widget properties and states through direct variable assignment (x = 5), widgets are connected and share data with each other. When a value is updated, any widgets that depend on that changed value also update automatically.


**Example 2:** suppose you have two Input widgets named `Input1` and `Input 2`. To update `Input2` with the value entered in `Input1`, add the following code in the `Default Value` property of Input2.

```javascript
{{Input1.text}}
```

Enter a value in `Input1` and see how the value updates in `Input2`.

**Example 3:** suppose you have two input widgets and one button widget named `Input1`, `Input2`, and `Button1`, respectively. This example shows how to update `Input2` with the value in `Input1` on the button click. Here, the [storeValue()](/reference/appsmith-framework/widget-actions/store-value) function is used.

Paste the following code in the `onClick` event of `Button1`. 

```javascript
{{storeValue('inputData',Input1.text)}}
```
Paste the following code in the `Default Value` property of Input2.
```javascript
{{appsmith.store.inputData}}
```

Enter a value in `Input1`. On button click, the value updates in `Input2`.

### Display data from async JS function

Widgets have fields/properties where you can bind data or trigger actions.

**Sync fields** are properties that expect input or data. For example, for an Input widget, properties such as `Default Value`, `Max Characters`, `Regex`, and `Error Message` expect input and are sync fields.

**Async fields** are properties that can trigger an action or perform an operation. For example, the properties like `OnTextChanged` and `OnSubmit` of an input widget are async fields. You can use these properties to execute an [action](/reference/appsmith-framework/widget-actions), [Query](/core-concepts/data-access-and-binding/querying-a-database#running-a-query) or a function within a [JS object](/core-concepts/writing-code/javascript-editor-beta).

To display the response from an asynchronous JS function in a synchronous field, you need to retrieve it using the  `.data` property as shown below

```javascript
{{JSObjectName.functionName.data}}
```

 <VideoEmbed host="youtube" videoId="yn_8gs5w04g" title="Display response from async function in widget field" caption="Display response from async function in widget field"/> 

### Display data from sync JS function

To display the response from a synchronous JS function in a widget field, call the function inside the JS Object as shown below:

``` javascript
{{JSObjectName.functionName()}}
```

## Transforming data

You can use Javascript to transform Query data when binding it to a property. For example, consider a Query that returns an array of objects as shown below:  

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

Suppose you have to populate this data in a [select](/reference/widgets/select.md) widget. A select widget only accepts an Array\<label, value> data type in its option field, so directly binding the query data leads to an error due to incorrect data type.

To connect this data to a select widget, you have to transform the data in the [options property](/reference/widgets/select#widget-properties).

**Transformation Code**

The following example iterates over the query data and returns it in an `Array<label, value>` format:

```javascript
{{
  QueryName.data.map((row) => {
      return { label: row.name, value: row.id };
  });
}}
```

## Further reading

* [Capture Data](/core-concepts/data-access-and-binding/capturing-data-write)
* [Creating Workflows](/core-concepts/writing-code/workflows)
* [Using JavaScript Promises](/core-concepts/writing-code/javascript-promises)
* [Working with Appsmith Framework Functions](/reference/appsmith-framework)
