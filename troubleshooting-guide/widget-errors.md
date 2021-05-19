# JS Errors

## Data Type Mismatch

This error occurs when the value in the property of the widget does not match the data type required by the property.

### This value does not evaluate to type "Array&lt;Object&gt;"

While working with tables, we see this error often, as the Table Data property expects an Array of objects and we might bind JSON objects from APIs directly without transformation. The solution to this is to find the array in the response object or transform the response object using javascript. Take an example response of the fetch users API as below. Binding it to a table directly would lead to an error.

```javascript
{
  "next": "https://mock-api.appsmith.com/users?page=2&pageSize=10",
  "previous": null,
  "users": [
    {
      "id": 1,
      "name": "Barty Crouch",
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
      "id": 10,
      "name": "Tobin Shellibeer",
      "status": "APPROVED",
      "gender": "Male",
      "avatar": "https://robohash.org/odioeumdolores.png?size=100x100&set=set1",
      "email": "tshellibeer9@ihg.com",
      "address": "4 Ridgeway Lane",
      "createdAt": "2019-11-27T06:09:41.000Z",
      "updatedAt": "2019-09-07T16:35:48.000Z"
    }
  ]
}
```

To overcome this, we can bind the users array of the response instead of the entire response object using javascript

```javascript
{{ fetch_users.data.users }}
```

### **This value does not evaluate to type "Array&lt;{ label: string, value: string }&gt;"**

While adding options to single select or multi-select dropdowns, we might face a data mismatch error**.** In such cases, make sure the options property is an array of objects containing a label and value as strings. In case the response does not contain label and value keys as below, we can map over the response to transform it using javascript

```javascript
// invalid response of fetchColors API
[
  'Blue',
  'Green',
  'Red'
]
```

```javascript
// Transform Response
{{ 
    fetchColors.data.map((color) =>{
        return {
            label: color,
            value: color
        }
    })
}}
```

### **The** **value does not evaluate to type Array&lt;x: string, y: number&gt;**

The below image shows that there is an error in the Chart Data field of the Chart. 

![](../.gitbook/assets/chart-error.png)

The Evaluated Value below indicates the current value of the field and in the image, we can see that the current value is an array while the error indicates that it must be an array&lt;x, y&gt;.

In cases like these, you can use javascript to transform the data to the correct data type or access the correct data inside the object. The below code reduces the fetch\_orders.data array to aggregate orders based on the date into an array &lt;x, y&gt; where x is the date of the order and y is the order amount

```javascript
{{
    _.values(fetch_orders.data.reduce((accumulator, order) => {
        if(accumulator[order.date]) {
            accumulator[order.date].y += order.orderAmount
        } else {
            accumulator[order.date] = { x:order.date, y: order.orderAmount  }; 
        }
        return acc;
    }, {}))
}}
```

### **Value does not match ISO 8601 standard date string**

The date picker expects its default date in the standard ISO format. If the date you provided does not match this, you can transform the date string using moment.js.

```text
// Moment can be used to set the default date to the current date
{{moment()}}
```

```text
// Moment can parse your date format
{{ moment("2021-07-26", "YYYY-MM-DD") }}
```

### This value does not evaluate to type "boolean"

This error typically occurs in the isVisible and isDisabled properties and indicates that the value in the property does not match a boolean type. You can solve this by using a comparison operator.

```text
{{ Dropdown1.selectedOptionValue === "RED" }}
```

## Syntax Error

This error occurs when there is invalid javascript inside the handlebars `{{ }}`. The evaluated value of the field is displayed as undefined in this case. Double-check the number of braces in your code and consider re-writing your JS as [multi-line code](../core-concepts/writing-code/#multi-line-js).

In the example below, fetch is not defined anywhere in the application

![](../.gitbook/assets/syntax-error.png)

## Cyclic Dependency Error

An app gets a cyclic dependency error when a node is directly or indirectly dependent on itself.

### Reactivity and Dependency Map

In Appsmith, we define all user-editable fields as nodes, and to provide reactivity, a dependency map is created between these nodes to find the optimal evaluation order of these nodes. For eg: when you would refer to `{{Api1.data}}` in a Table1's `tableData` field, there is a dependency created between `Api1.data` and `Table1.tableData`. So every time `Api1.data` updates, we know `Table1.tableData` needs to update as well.

```text
// Table1.tableData depends on Api1.data
Api1.data -> Table1.tableData
```

Similarly, all parent nodes are implicitly dependant on the child nodes to ensure updates are propagated up an entity object. A more straightforward way to understand this is that if a child node updates, the parent node and its dependencies should also be updated.

```text
// Implicit. Parent depends on children
Api1.data -> Api1
Table1.tableData -> Table1

// Explicit. Table1.tableData depends on Api1.data
Api1.data -> Table1.tableData
```

The most common scenario that a cycle occurs is when you would try to bind a node to its parent node. Since it is impossible to evaluate an app with a cyclic dependency, we will have to exit out and be in an error state till the cycle is resolved.

```text
// A cycle is formed
Table1 -> Table1.tableData
Table1.isVisible -> Table1
```

