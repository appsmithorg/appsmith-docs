---
description: >-
 You'll learn about common JS errors and how to resolve them on Appsmith.
---


# JS Errors
Errors may be encountered when using [JS Objects](/core-concepts/writing-code/javascript-editor-beta) or writing [JS functions](/core-concepts/writing-code/javascript-editor-beta/#types-of-js-functions). They can be caused by syntax errors in the code, data type mismatch, or attempts to access properties or functions that don't exist.


This section helps you troubleshoot common JS errors on the Appsmith platform.


## Data type evaluation errors


This error occurs when the value in the property of the widget doesn't match the data type required by the property.


#### Error message


<Message
messageContainerClassName="error"
messageContent="This value does not evaluate to type Array[Object]"></Message>




#### Cause


While working with [Tables](/reference/widgets/table/) or [Lists](/reference/widgets/list), you may encounter this error, as the data property expects an [Array](https://www.w3schools.com/js/js\_arrays.asp) of objects which might not match the data type of the [API](/reference/datasources/authenticated-api) response.


#### Solution


The solution to this is to bind the array inside the response object or transform the response object using JavaScript. Take an example response of the fetch users [API](/reference/datasources/authenticated-api) as below. Binding it to a [table](/reference/widgets/table/) directly would lead to an error.


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


To overcome this, you can bind the user's array of the response instead of the entire response object using JavaScript:


```javascript
{{ fetch_users.data.users }}
```
#### Error message


<Message
messageContainerClassName="error"
messageContent="This value does not evaluate to type Array[{`label: string, value: string`}]"></Message>




#### Cause


While adding options to single-select or multi-select dropdowns, you might face a data mismatch error. In such cases, make sure the `options` property is an array of objects containing a label and value as strings.


#### Solution


In case the response doesn't contain label and value keys as below, you can map over the response to transform it using JavaScript.


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
#### Error message


<Message
messageContainerClassName="error"
messageContent="The value does not evaluate to type Array [{x: string, y: number}]"></Message>


#### Cause


The below image shows that there is an error in the `Chart Data field` of the [Chart](/reference/widgets/chart) widget. The Evaluated Value here indicates the current value of the field, and in the screenshot below, you can see that the current value is an array while the error indicates that it must be an array\<x, y>.


![](/img/chart_error.png)


#### Solution


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
#### Error message


<Message
messageContainerClassName="error"
messageContent="Value does not match ISO 8601 standard date string"></Message>


#### Cause


The date picker expects its default date in the standard [ISO format](https://www.iso.org/iso-8601-date-and-time-format.html). If the date you provided doesn't match this, you'll see this error.


#### Solution


To resolve this, you can transform the date string using moment.js.


```
// Moment can be used to set the default date to the current date
{{moment()}}
```


```
// Moment can parse your date format
{{ moment("2021-07-26", "YYYY-MM-DD") }}
```
#### Error message


<Message
messageContainerClassName="error"
messageContent="This value does not evaluate to type `boolean"></Message>




#### Cause
This error typically occurs in the `isVisible` and `isDisabled` properties and indicates that the value in the property doesn't match a `boolean` type.


#### Solution


You can solve this by using a comparison operator.


```
{{ Dropdown1.selectedOptionValue === "RED" }}
```


#### Error message


<Message
messageContainerClassName="error"
messageContent="This value does not evaluate to type string"></Message>


#### Cause
When working with widgets, you may come across an error where the data property is expecting a string value that doesn't match the data type of the query response.


#### Solution


The solution to this issue is to convert the data type of the API response to a string. This can be done using JavaScript methods. Additionally, make sure that the data being passed to the widget is in the correct format. For example:


```
To get text,
{{Text1.text}}


To get image,
{{Image1.image}}
```


In case the preceding doesn't work, you can also check the EVALUATED VALUE section to make sure that it's returning a string value and not an object or other data type.


#### Error message

<Message
messageContainerClassName="error"
messageContent="This value must be number"></Message>


#### Cause
You may come across an error where the data property is expecting a numeric value that doesn't match the data type of the API response.


#### Solution


It's important to ensure that the data being passed to the widget's data property matches the expected data type. One solution to this issue is to use JavaScript to convert the API response to the correct data type, or to access the correct data type from the API response. 

You can also check the EVALUATED VALUE section to make sure that it's returning a numeric value and not an object or other data type.


## Syntax error


This error occurs when there is invalid JavaScript inside the handlebars `{{ }}`. The evaluated value of the field is displayed as undefined in this case. Verify the number of braces in your code and consider re-writing your [JS as multi-line ](../../core-concepts/writing-code/#multi-line-javascript)code.


In the example below, fetch isn't defined anywhere in the application


![](/img/syntax_error.png)




## Cyclic dependency error


An app gets a cyclic dependency error when a node is directly or indirectly dependent on itself.


#### Reactivity and dependency map


In Appsmith, all user-editable fields are defined as nodes, and to provide reactivity, a dependency map is created between these nodes to find the optimal evaluation order of these nodes. For example, when you would refer to `{{Api1.data}}` in a Table1's `tableData` field, there is a dependency created between `Api1.data` and `Table1.tableData`. So every time `Api1.data` updates, `Table1.tableData` needs to be updated.


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


The most common scenario where a cycle occurs is when you would try to bind a node to its parent node. Since it's impossible to evaluate an app with a cyclic dependency, you have to exit out and be in an error state till the cycle is resolved.


```
// A cycle is formed
Table1 -> Table1.tableData
Table1.isVisible -> Table1
```


## Infinite loop error
An infinite loop error occurs when a function or code block repeats indefinitely, causing the app or function to become unresponsive, and can even prevent users from accessing certain features of the app.
#### Cause
The problem may be due to a page load function that's stuck in a loop. This can happen if you have added code that uses the `navigateTo` function and is executed on `onPageLoad`, which can cause the page to become inaccessible or cause the app to get stuck in a loop and constantly routing to the destination page.


#### Solution
To fix this problem, you can use debugger statements in Appsmith to halt the execution of the code and identify the source of the infinite loop. Here are the steps to do this:


1. Open the app in Appsmith and go to the page where the infinite loop is occurring.
2. Locate the function or code block that's causing the infinite loop.
3. Insert a debugger statement at the beginning of the function or code block that pauses the execution of the code and allows you to inspect its state. For more information, see [debugging statement and how to use it](/core-concepts/writing-code/javascript-editor-beta/#debugger-statements).
4. Use the debugger console of the browser to step through the code and identify the cause of the infinite loop.
5. Once you have identified the issue, make the necessary changes to the code to fix it.
6. Save the changes and test the app again to ensure the infinite loop issue has been resolved.


If you can't find what you are looking for and need help debugging an error, please raise your issue on [Discord Server](https://discord.com/invite/rBTTVJp) or email at support@appsmith.com.



