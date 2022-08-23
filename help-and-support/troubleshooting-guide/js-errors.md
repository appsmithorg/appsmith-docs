# JS Errors

## JS Errors

### Data Type Mismatch

This error occurs when the value in the property of the widget does not match the data type required by the property.

#### This value does not evaluate to type Array\[Object]

**Why do you see this error?**

While working with [Tables](../../reference/widgets/table/) or [Lists](../../reference/widgets/list.md), you may encounter this error, as the data property expects an [Array](https://www.w3schools.com/js/js\_arrays.asp) of objects which might not match the data type of the [API](../../core-concepts/connecting-to-data-sources/authentication/) response.

**Solution:**

The solution to this is to bind the array inside the response object or transform the response object using javascript. Take an example response of the fetch users [API](../../core-concepts/connecting-to-data-sources/authentication/) as below. Binding it to a [table](../../reference/widgets/table/) directly would lead to an error.

```javascript
{
  "next": "https://mock-api.appsmith.com/users?page=2&pageSize=10",
  "previous": null,
  "users": [
    {
      "id": 1,
      "name": "Barty Crouch",
      "status": "APPROVED",
      "avatar": "https://robohash.org/sednecessitatibuset.png?size=100x100&set=set1",
      "email": "barty.crouch@gmail.com",
    },
    {
      "id": 2,
      "name": "Jenelle Kibbys",
      "status": "APPROVED",
      "avatar": "https://robohash.org/quiaasperiorespariatur.bmp?size=100x100&set=set1",
      "email": "jkibby1@hp.com",
    }
  ]
}
```

To overcome this, we can bind the user's array of the response instead of the entire response object using javascript:

```javascript
{{ fetch_users.data.users }}
```

#### **This value does not evaluate to type Array\[{ label: string, value: string }]**

**Why do you see this error?**

While adding options to single-select or multi-select dropdowns, we might face a **data mismatch error**. In such cases, make sure the options property is an array of objects containing a label and value as strings.

**Solution:**

In case the response does not contain label and value keys as below, we can map over the response to transform it using javascript

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

#### **The** **value does not evaluate to type Array\[{x: string, y: number}]**

**Why do you see this error?**

The below image shows that there is an error in the `Chart Data field` of the [Chart](../../reference/widgets/chart.md), giving us the same error. The Evaluated Value here indicates the current value of the field, and in the screenshot below, you can see that the current value is an array while the error indicates that it must be an array\<x, y>.

![](<../../.gitbook/assets/chart error.png>)

**Solution:**

In cases like these, you can use JavaScript to transform the data to the correct data type or access the correct data inside the object. The below code reduces the fetch\_orders.data array to aggregate orders based on the date into an array \<x, y> where x is the date of the order and y is the order amount

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

#### **Value does not match ISO 8601 standard date string**

**Why do you see this error?**

The date picker expects its default date in the standard[ ISO format](https://www.iso.org/iso-8601-date-and-time-format.html). If the date you provided does not match this, you'll see this error.

**Solution:**

To resolve this, you can transform the date string using moment.js.

```
// Moment can be used to set the default date to the current date
{{moment()}}
```

```
// Moment can parse your date format
{{ moment("2021-07-26", "YYYY-MM-DD") }}
```

#### This value does not evaluate to type boolean

This error typically occurs in the isVisible and `isDisabled` properties and indicates that the value in the property does not match a boolean type. You can solve this by using a comparison operator.

```
{{ Dropdown1.selectedOptionValue === "RED" }}
```

### Syntax Error

This error occurs when there is invalid javascript inside the handlebars `{{ }}`. The evaluated value of the field is displayed as undefined in this case. Double-check the number of braces in your code and consider re-writing your [JS as multi-line ](../../core-concepts/writing-code/#multi-line-javascript)code.

In the example below, fetch is not defined anywhere in the application

![](<../../.gitbook/assets/syntax error.png>)

### Cyclic Dependency Error

An app gets a cyclic dependency error when a node is directly or indirectly dependent on itself.

#### Reactivity and Dependency Map

In Appsmith, we define all user-editable fields as nodes, and to provide reactivity, a dependency map is created between these nodes to find the optimal evaluation order of these nodes. For eg: when you would refer to `{{Api1.data}}` in a Table1's `tableData` field, there is a dependency created between `Api1.data` and `Table1.tableData`. So every time `Api1.data` updates, we know `Table1.tableData` needs to update as well.

```
// Table1.tableData depends on Api1.data
Api1.data -> Table1.tableData
```

Similarly, all parent nodes are implicitly dependent on the child nodes to ensure updates are propagated up an entity object. A more straightforward way to understand this is that if a child node updates, the parent node, and its dependencies should also be updated.

```
// Implicit. Parent depends on children
Api1.data -> Api1
Table1.tableData -> Table1

// Explicit. Table1.tableData depends on Api1.data
Api1.data -> Table1.tableData
```

The most common scenario where a cycle occurs is when you would try to bind a node to its parent node. Since it is impossible to evaluate an app with a cyclic dependency, we will have to exit out and be in an error state till the cycle is resolved.

```
// A cycle is formed
Table1 -> Table1.tableData
Table1.isVisible -> Table1
```

## Debugging

For debugging JS logic inside widget actions, you can use a [`debugger`](../../core-concepts/writing-code/javascript-editor-beta/#debugger-statements) statement.

### Description

The debugger statement invokes any available debugging functionality, such as setting a breakpoint. If no debugging functionality is available, this statement has no effect.

### Syntax

```
debugger;
```

### Examples

#### Using the debugger statement

The following example shows code where a debugger statement has been inserted, to invoke a debugger (if one exists) when the function is called.

```
function potentiallyBuggyCode() {
debugger;
// do potentially buggy stuff to examine, step through, etc.
}
```

When the debugger is invoked, execution is paused at the debugger statement. It is like a breakpoint in the script source.

{% hint style="info" %}
You need to have the browser console open to make the debugger work.
{% endhint %}

### Debugging Errors With Console.log()

Aside from using the `debugger`, it is also possible to use `console.log()` to inspect various parts of your code. The video below illustrates how to do this:

{% embed url="https://youtu.be/YLnvb9_k96s" %}
