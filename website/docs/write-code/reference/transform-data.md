# Transform Data 

This page provides information on how to transform data using JavaScript, which allows you to manipulate, format, and display data effectively in your applications.

## Transform array of objects


When working with arrays of objects, you often need to transform specific fields or extract only certain values. The map() function is commonly used for this purpose. It applies a transformation to each object in the array and returns a new array with the transformed values.

<dd>


*Example:* If you want to transform an array of user objects to display just the names, you can bind the query like this:

```js
{{getUsers.data.map(user => user.name)}}
```

*Example 2:* If you want to display the transformed data in a Select widget, you can bind the query like this:


```js
{{getUsers.data.map(user => ({ name: user.name, code: user.id }))}}
```

</dd>

## Conditional display

Conditional transformations allow you to dynamically adjust the display or behavior of widgets based on certain criteria. You can use JavaScript expressions to enable or disable components, change styles, or adjust visibility based on data conditions.


<dd>

*Example:* If you want to disable a button based on a condition, you can bind the data to the **Disabled** property of the widget like:

```js
{{appsmith.user.email == "john@appsmith.com" ? false : true}}
```

*Example 2:* If you want to change a Table cell's background color based on the status of an order, you can bind the data to the **Cell Background** property, like:

```js
{{currentRow.status === "approved" ? "#22c55e" : "#facc15"}}
```
</dd>

## Filtering data based on conditions


If you want to filter data based on certain criteria, you can use the `filter()` function in JavaScript. This allows you to display only the items that meet specific conditions, helping you narrow down large datasets to show only relevant information in your Appsmith widgets.

<dd>

*Example:* If you want to display products that cost less than $100, you can bind the data to a Table like:

```js
{{getProducts.data.filter(product => product.price < 100)}}
```
</dd>

## Format number with decimal points

If you want to format a number to display a specific number of decimal points, you can use JavaScript's toFixed() method. This is useful when you want to display monetary values or control how numbers appear in your Appsmith widgets.

<dd>

*Example:* If you want to display a price with two decimal points, you can bind the data like:

```js
{{product.price.toFixed(2)}}
```

This will format the price field from the product object, ensuring that it always displays two decimal places, such as `19.99` instead of `19.98765`.

</dd>


## Parsing JSON string to object

If you are receiving API data as JSON strings, you may need to convert these strings into objects to display the data in widgets. You can use `JSON.parse() `to parse JSON strings into JavaScript objects, enabling you to access and manipulate the data.




<dd>

*Example:* If you receive a JSON string from an API, you can create a function inside a JS Object and parse it like:

```js
const jsonString = getUsers.data; // {"name": "Alice", "age": 25}
const parsedObject = JSON.parse(jsonString);
console.log(parsedObject);
// Output: { name: 'Alice', age: 25 }
```

</dd>


## Aggregate value

If you want to calculate totals or aggregates from an array of objects, you can use the `reduce()` method in JavaScript. This method iterates through the array, accumulating a single result based on the provided logic, which is especially useful for summarizing data.

<dd>

*Example:* If you want to calculate the total sales amount from an array of sales objects, you can use the following code:

```js
{{getSales.data.reduce((total, sale) => total + sale.amount, 0)}}
```

</dd>


## Transform array of objects to key-value pairs

If you want to convert an array of objects into a more manageable format, such as key-value pairs, you can utilize the `reduce()` method in JavaScript. This transformation is particularly useful when you need to create a lookup object or map specific properties to corresponding values.

<dd>

*Example:* If you want to transform an array of user objects into an object where the keys are user IDs and the values are user names, you can use the following code:

```js
{{getUsers.data.reduce((acc, user) => {
    acc[user.id] = user.name;
    return acc;
}, {})}}
```

</dd>

## Format dates 

If you want to format dates for better readability or to match a specific display format, you can use the `moment` library. This is useful for presenting dates retrieved from APIs or databases in a user-friendly format.


<dd>

*Example:* If you want to display event titles along with their formatted dates, you can use the following code:



```js
{{getEvents.data.map(event => ({
    title: event.title,
    formattedDate: moment(event.date).format('MMMM Do YYYY')
}))}}
```

</dd>