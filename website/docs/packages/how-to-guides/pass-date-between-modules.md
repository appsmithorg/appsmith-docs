---
title: Pass data between modules
hide_title: true
---
<!-- vale off -->

<div className="tag-wrapper">
 <h1>Pass data between modules</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->

This page shows how to pass data between a query and a JS module, which allows you to handle and manipulate data efficiently within your JS code.



## Prerequisites

A package that has already been created. For more information, see [Package and query modules tutorials](/packages/tutorial/query-module).

## Configure package

Follow these steps to set up JS and query modules within the package.

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/xA1AYQZs2KIdFl5qwWD9?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>


1. Create a new Query module to fetch data by clicking on the **+** icon in the top-left corner.


<dd>

*Example:* If you want to display product details in a chart widget based on the category selected by the user, you can create a SQL query like:

```sql
SELECT * FROM public."product" 
WHERE category = `Apparel`;
```

</dd>

2. Create an **Input** from the right-side property pane to dynamically pass data to the query. 

<dd>

*Example:* To dynamically pass category information to your query, use the `inputs` property as shown below:

```sql
SELECT * FROM public."product" 
WHERE category = {{inputs.category}};
```

</dd>


3. Create a new JS module to run the query module and manipulate the query data:


<dd>

* To access the **Query module data in the JS module**, use the reference properties of the query module, like: `productData.data`.

* To pass data from the **JS module to Query modules**, you can pass parameters at runtime using `run()`, like `{{ productData.run({ id: product.category }) }}`.

* To access the **JS module data in the Query module**, create input parameters and use them inside the query, like `{{inputs.category}}`.



*Example:* If you want to visualize inventory data in a chart widget, this JS module fetches product details based on the selected category. 

```js
export default {
  async fetchProductsByCategory(categoryName) {
    try {
      // Pass category name to Query module
      const productsData = await fetchProductsByCategoryQuery.run({ category: categoryName });

      // Format product data for display
      const formattedProductsData = productsData.map(product => {
        return {
          x: product.product_name,
          y: product.stock,
          // Add more fields as needed
        };
      });

      return formattedProductsData; // Return formatted product data
    } catch (error) {
      console.error('Error fetching product data:', error);
      throw error; // Propagate the error for handling elsewhere if needed
    }
  },
};
```

</dd>



3. Publish the package.

4. Open your App from the homepage and ensure that both the app and modules share the same workspace.

5. Select the *JS* tab on the Entity Explorer, add the JS module, and configure it to **Run on page load**.

6. Drag a Chart widget and configure the **Series data** property to display data from the JS module.

<dd>

*Example:*

```js
{{productModule1.fetchProductsByCategory.data}}
```

</dd>

7. Drag a Select widget and configure the **Source data** property to display a list of product categories.


8. Configure the **onOptionChange** event of the Select widget to run the JS module function when an option is selected.

<dd>

*Example:* 

```js
{{productModule1.fetchProductsByCategory(Select1.selectedOptionValue);}}
```

</dd>




