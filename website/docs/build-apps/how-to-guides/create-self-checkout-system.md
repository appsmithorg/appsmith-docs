# Create Self-Checkout System with the Code Scanner


<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/hh7vjUcPe8f5yVNCQ8CH?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>

## Prerequisites

App connected to a datasource containing inventory information.

## Configure query and function

Follow these steps to configure the query and functions:


1. Drop a Code scanner and configure the **Scanner layout** property as required. 

2. Configure the query to retrieve product information based on the value obtained from the Code scanner:

<dd>

```sql
SELECT * FROM inventory WHERE id = '{{CodeScanner1.value}}';
```

</dd>

3. Create a new JSOject and add a function to find the products:

<dd>

```js
export default {
  // Find function: Locates an item in the checkout array and returns its index, quantity, and the entire checkout array.
  find: (item) => {
    const checkout = appsmith.store.checkout || [];
    const i = checkout.findIndex(i => i.id == item.id);
    const q = checkout[i]?.quantity;
    return [i, q, checkout];
  },...
};

```

This function searches for a specific product in the checkout array, retrieving its index, quantity, and the entire array if found.

</dd>


4. Create new functions within the same JSObject to add and remove products to the checkout array:

<dd>

```js
// addToCheckout Function: Adds or increments the quantity of an item in the checkout array.

addToCheckout: (item) => {
  const [i, q, checkout] = this.find(item);

  // If the item is found, increment its quantity in the checkout array.
  if (~i) {
    checkout[i] = { ...checkout[i], quantity: q + 1 };
  } else {
    checkout.push({ ...item, quantity: 1 });
  }

  // Update the checkout array in the store.
  storeValue('checkout', checkout);
},

// removeFromCheckout Function: Decreases the quantity of an item in the checkout array or removes it if the quantity is 1.

removeFromCheckout: (item) => {
  const [i, q, checkout] = this.find(item);
  if (q > 1) {
    checkout[i] = { ...checkout[i], quantity: q - 1 };
  } else {
    checkout.splice(i, 1);
  }
  storeValue('checkout', checkout);
},

```

In the above code `addToCheckout` function searches for the item in the checkout array and either increments its quantity or adds it with a quantity of 1. `removeFromCheckout` function searches for the item in the checkout array, decrements its quantity if greater than 1, or removes it if the quantity is 1.



</dd>


5. Add a new function to retrieve product information from the query:

<dd>

```js
getProduct: async ()=> {
	const [res] = await get_products.run();
	this.addToCheckout(res);
},
```

Then above function asynchronously fetches product information and then adds the obtained product to the checkout array through the `addToCheckout` function.

</dd>


## Display products 

Follow these steps to display the products based on the values retrieved from the code scanner.


1. Drop a Table widget and set the **Table data** property to: 

<dd>

```js
{{appsmith.store.checkout}}
```

The `store` allows dynamic updates to the Table based on changes in the checkout array.

</dd>

2. Add a new custom column in the Table, select the column type as an Icon button, and set its **OnClick** event to remove the item:

<dd>

```js
{{checkout_obj.removeFromCheckout(currentRow)}}
```

When triggered, this code removes the item associated with the current row in the Table from the checkout.

</dd>

3. Set the Code Scanner widget's **OnCodeDetected** event to run the `getProduct()` function:

<dd>

```js
{{checkout_obj.getProduct()}}
```
</dd>


With this setup, whenever a valid barcode is scanned using the Code Scanner, the system retrieves product information through the query and adds the data to the Table. You can create additional functions to handle the checkout process according to your specific requirements.