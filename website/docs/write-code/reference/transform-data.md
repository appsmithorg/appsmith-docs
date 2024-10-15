# Transform data 


## Transform Array of Objects

When working with arrays of objects, you often need to transform specific fields or extract only certain values. The map() function is commonly used for this purpose. It applies a transformation to each object in the array and returns a new array with the transformed values.

<dd>


*Example:* If you want to transform an array of user objects to display just the names, you can bind the query like this:

```js
{{getUsers.data.map(user => user.name)}}
```

*Example 2:* If you want to display the transformed data in a Select widget, you can bind the query like this:


```js
//Extracting Multiple Fields
{{getUsers.data.map(user => ({ name: user.name, code: user.id }))}}
```

</dd>

## Transforming Data for Conditional Display

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

## Filtering Data Based on Conditions


If you want to filter data based on certain criteria, you can use the `filter()` function in JavaScript. This allows you to display only the items that meet specific conditions, helping you narrow down large datasets to show only relevant information in your Appsmith widgets.

<dd>

*Example:* If you want to display products that cost less than $100, you can bind the data to a Table like:

```js
{{getProducts.data.filter(product => product.price < 100)}}
```
</dd>

## Formatting a Number with Decimal Points

If you want to format a number to display a specific number of decimal points, you can use JavaScript's toFixed() method. This is useful when you want to display monetary values or control how numbers appear in your Appsmith widgets.

<dd>

*Example:* If you want to display a price with two decimal points, you can bind the data like:

```js
{{product.price.toFixed(2)}}
```

This will format the price field from the product object, ensuring that it always displays two decimal places, such as `19.99` instead of `19.98765`.

</dd>


## Parsing JSON String to Object

APIs often return data as JSON strings, and you may need to convert these strings into objects to work with them more effectively. You can use `JSON.parse()` to parse JSON strings into JSObjects, allowing you to access and manipulate the data.

<dd>

*Example:* If you receive a JSON string from an API, you can parse it like:

```js
const jsonString = getUsers.data; // {"name": "Alice", "age": 25}
const parsedObject = JSON.parse(jsonString);
console.log(parsedObject);
// Output: { name: 'Alice', age: 25 }
```

</dd>

