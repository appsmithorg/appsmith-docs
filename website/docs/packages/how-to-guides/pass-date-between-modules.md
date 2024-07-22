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
  <iframe src="https://demo.arcade.software/vjD1OhwfW8Yz162XQ6KI?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
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


3. 

<dd>

*Example:* If you want to visualize inventory data in a chart widget, this JavaScript module fetches product details based on the selected category. 

</dd>

<dd>

* To access the **Query module data in the JS module**, use the reference properties of the query module, like: `userData.data`.

* To pass data from the **JS module to Query modules**, you can pass parameters at runtime using `run()`, like `{{ updateLogin.run({ id: user.id }) }}`

* To access the **JS module data in the Query module**, create input parameters and use them inside the query, like `{{inputs.id}}`.




*Example*: If you want to transform query data into a format suitable for a Select widget, you can add a JS function like:



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

This code fetches country data, formats it into a list of country names and codes, which can be reused to display the data in a Select widget.

</dd>

3. Publish the package.


4. Open your App from the homepage and ensure that both the app and modules share the same workspace.

5. Select the *JS* tab on the Entity Explorer, add the JS module, and configure it to **Run on page load**.

6. Drag a Select widget and set the **Source data** property to fetch the data:


<dd>

*Example:* 

```js
{{ countryModule.fetchCountries.data }}
```

</dd>

With this, you can reuse the same JS module to display a list of countries in different apps and pages.





