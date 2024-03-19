---
title: Use queries inside JS module
hide_title: true
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Use queries inside JS module</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->

This guide shows how to use datasource queries and JSObjects within JavaScript modules, enabling efficient data handling and manipulation for applications.


## Create a package

A package is a collection of Modules that can be versioned and distributed across instances. Within packages, you can create multiple query and JS modules.



<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/yIAUcYcB6uPPuBxoaahD?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>


1. **Create a new package** by clicking on the top-right corner of your workspace.

2. Click **New Module** > **JS Module**. The **Main JS object** represents the JS module code.

3. To pass or format the query data, create a datasource query within this JS module.

<dd>

:::info
Using the query module inside a JavaScript module is not supported.
:::

</dd>

4. Configure the Main JS Object / JS Module Code based on your requirements.


<dd>


*Example:* If you want to format the product data and implement a `showAlert()` function whenever a product's stock falls below 10, you can use:

 You can use the [Appsmith Object](/write-code/reference) and [Functions](/reference/appsmith-framework/widget-actions) within the JS module code, which would be executed in the App.

```js
export default {
  // Function to process data and return the updated array
  async myFun1() {
    try {
      // Assuming Product_Api.run() returns a promise
      await Query1.run();
      const dataArray = Query1.data;

      // Check stock availability
      const updatedDataArray = dataArray.map(item => {
        // Check if stock is below threshold (e.g., 10)
        if (item.stock < 10) {
          // Call showAlert function to display alert
           showAlert(`Low stock for ${item.product_name} [ID: ${item.id}]`, 'warning');
        }

        // Return the item without the formattedDate property
        return {
          ...item
        };
      });

      // Return the updated array directly
      return updatedDataArray;
    } catch (error) {
      // Handle errors during data processing
      console.error('Error processing data:', error);
      // Return an empty array or handle the error as per requirement
      return [];
    }
  },
};
```

</dd>

5. Run and Publish the JS Module.




## Integrate Modules into your App

Once you've created a JS module, follow these steps to access its data in any application:

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/ELyb3WmDXhnZa3WxJC8L?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>


1. Open your **App** from the homepage and ensure that both the app and modules share the same workspace.

2. In the entity explorer, select the JS module and configure the function settings as needed.

3. To display data, add a Table widget and connect it to the **JS module** using mustache binding `{{}}`, like:


<dd>

*Example:*

```js
{{JSModule1_1.myFun1.data}}
```

With this, when the product stock drops below 10, an alert is shown in both the app and the package.



</dd>
