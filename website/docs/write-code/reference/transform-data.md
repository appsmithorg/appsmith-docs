# Transform Data 

This page provides information on how to transform data using JavaScript, which allows you to manipulate, format, and display data in your applications.

## Array transformation

The `map()` function allows you to transform arrays of objects, such as extracting specific fields or formatting data. For example, if you want to transform an array of user objects to display only the names, you can bind the query like this:


```js
{{getUsers.data.map(user => user.name)}}
```

*Example 2:* If you want to display the transformed data in a Select widget, you can bind the query like this:


```js
{{getUsers.data.map(user => ({ name: user.name, code: user.id }))}}
```



## Display based on conditions


You can use JavaScript expressions to enable or disable components, change styles, or adjust visibility based on data conditions. For example, if you want to disable a button based on a condition, you can bind the data to the **Disabled** property of the widget like:

```js
{{appsmith.user.email == "john@appsmith.com" ? false : true}}
```

*Example 2:* If you want to change a Table cell's background color based on the status of an order, you can bind the data to the **Cell Background** property, like:

```js
{{currentRow.status === "approved" ? "#22c55e" : "#facc15"}}
```


## Filter data 

The `filter()` function allows you to narrow down datasets, displaying only relevant information. For example, if you want to display products that cost less than $100, you can bind the data to a Table like:

```js
{{getProducts.data.filter(product => product.price < 100)}}
```





## Parse JSON

Use `JSON.parse()` to convert JSON strings into objects for easier data manipulation. For example, if you receive a JSON string from an API, you can create a function inside a JSObject and parse it like:

```js
const jsonString = getUsers.data; // {"name": "Alice", "age": 25}
const parsedObject = JSON.parse(jsonString);
console.log(parsedObject);
// Output: { name: 'Alice', age: 25 }
```



## Aggregate value


Use `reduce()` to calculate totals or other aggregated values from arrays of objects. For example, if you want to calculate the total sales amount from an array of sales objects, you can use the following code:

```js
{{getSales.data.reduce((total, sale) => total + sale.amount, 0)}}
```




## Transform to Key-Value pairs

Use `reduce()` to convert an array of objects into key-value pairs. For example, if you want to transform an array of user objects into an object where the keys are user IDs and the values are user names, you can use the following code:

```js
{{getUsers.data.reduce((acc, user) => {
    acc[user.id] = user.name;
    return acc;
}, {})}}
```



## Format dates 

Use `moment` to format dates into readable or specific display formats. For example, if you want to display event titles along with their formatted dates, you can use the following code:



```js
{{getEvents.data.map(event => ({
    title: event.title,
    formattedDate: moment(event.date).format('MMMM Do YYYY')
}))}}
```

## Format number 

You can use `toFixed()` to format numbers with a specific number of decimal places. For example, if you want to display a price with two decimal points, you can bind the data like:

```js
{{product.price.toFixed(2)}}
```

This will format the price field from the product object, ensuring that it always displays two decimal places, such as `19.99` instead of `19.98765`.
