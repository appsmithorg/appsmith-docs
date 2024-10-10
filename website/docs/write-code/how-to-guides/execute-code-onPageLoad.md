# Execute Code on Page Load


## Run Queries/JS on Page Load

The onPageLoad function allows you to run queries and JavaScript functions during the initial state or load of a page. Follow these steps to configure a query or function to run on page load:


1. Navigate to the query or JS function you want to execute on page load.

2. Click on the **Settings** tab within the query or JS editor.

3. Enable the **On Page Load** property for the desired query or function.

Once configured, the specified query or JS function will automatically run every time the app's page is loaded. If multiple queries and JS functions are set to run on page load, all of them will execute together


## Run Queries/JS in a Specific Order

To control the execution order of multiple queries and JavaScript functions, you can use a JavaScript object to run them sequentially. This approach ensures that each query or function completes before the next one begins. Follow these steps to run queries and JS functions in a specific order:

1. Create a new JSObject.

2. Define the queries and functions using the `await` method to ensure that each query or function completes before the next one starts. 

<dd>

*Example*: If you want to fetch product stock information first and then retrieve order details when the page is loaded, you can define a JSObject as follows:

```js
export default {
  loadProductDetails: async () => {
    // Fetch product stock information
    const productStock = await getProducts.run(); 
    console.log("getProducts query:", productStock); 

    // Fetch order details for the product
    const orderDetails = await getOrders.run(); 
    console.log("getOrders query:", orderDetails); // Log success and result

    // Return or display the fetched data as needed
    return { productStock, orderDetails }; // Return both results as an object
  },
};
```

This code defines a JSObject that asynchronously fetches product stock information and order details. If the initial query fails to load, the subsequent query/function will not run.


</dd>

3. Enable the **On Page Load** property for the function.

With this the function will be executed on page load, allowing it to run the queries and functions sequentially.






