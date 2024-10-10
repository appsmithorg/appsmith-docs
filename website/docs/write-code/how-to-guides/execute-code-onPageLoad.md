# Execute Code on Page Load

This page shows you how to run queries or JavaScript functions during the initial load of a page using the Run on page load property.




1. Navigate to the query or JS function you want to execute on page load.

<dd>

**Example 1:** If you want to display a login modal when the page loads, you can create a function inside a JSObject using [showModal()](/reference/appsmith-framework/widget-actions/show-modal) like:

```js
export default {
    // Function to show Modal
    showMyModal() {
        showModal(LoginModal.name); 
    }
}
// Enable "Run on Page Load" from JSObject settings
```

**Example 2:** If you want to execute functions or queries in a specific order, create a new JSObject and use the `await` method to ensure each query or function completes before the next one starts.

```js
export default {
  loadProductDetails: async () => {
    // Fetch product stock information
    const productStock = await getProducts.run(); 
    console.log("getProducts query:", productStock); 

    // Fetch order details for the product
    const orderDetails = await getOrders.run(); 
    console.log("getOrders query:", orderDetails);

    // Return or display the fetched data as needed
    return { productStock, orderDetails }; 
  },
};
```

This code defines a JSObject that asynchronously fetches product stock information and order details. If the initial query fails to load, the subsequent query/function will not run.


</dd>

2. Click on the **Settings** tab within the query or JS editor.

<dd>
<ZoomImage
  src="/img/showmodal-pageload.png" 
  alt=""
  caption=""
/>
</dd>

3. Enable the **Run on page load property** property for the desired query or function.

Once configured, the specified query or JS function will automatically run every time the app's page is loaded. If multiple queries and JS functions are set to run on page load, all of them will execute together




