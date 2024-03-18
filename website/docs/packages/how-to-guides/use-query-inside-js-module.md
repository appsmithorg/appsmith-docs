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

This guide shows how to use database queries within JavaScript modules, enabling efficient data handling and manipulation for applications.

You can create queries and JS objects specific to this JS module. The **Main JS object** represents the JS module code.



## Create a package

A package is a collection of Modules that can be versioned and distributed across instances. Within packages, you can create multiple query and JS modules.



<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/cEtKWdgXbr8zXooVxkg3?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>


1. **Create a new package** by clicking on the top-right corner of your workspace.

2. Click **New Module** > **JS Module**.


3. To pass query data, create a datasource within this JS module.

<dd>

:::info
Passing Query Module data to JS modules is not supported.
:::

*Example:* To fetch product data, create a new API and configure the URL:

```js
https://mock-api.appsmith.com/products
```

</dd>

4. Configure the Main JS Object / JS Module Code based on your requirements.


<dd>


*Example:*  If you want to format the availability date of the products into the `DD Mon, YYYY` format (eg: "April 2, 2024"), you can add the following code:

```js
export default {
  myVar1: [],

  // Function to process data and update myVar1
  async myFun1() {
    try {
      // Assuming Api1.run() returns a promise
      await Product_Api.run();
      const dataArray = Product_Api.data.products;

      // Map over dataArray and format the availabilityDate
      const updatedDataArray = dataArray.map(item => {
        const dateToFormat = new Date(item.availabilityDate);

        // Format the availabilityDate using toLocaleDateString()
        const formattedDate = dateToFormat.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });

        // Create a new formattedDate property with the formatted date
        return {
          ...item,
          formattedDate: formattedDate
        };
      });

      // Assign the updated array to myVar1
      this.myVar1 = updatedDataArray;

      // Return the updated array if needed
      return updatedDataArray;
    } catch (error) {
      // Handle errors during data processing
      console.error('Error processing data:', error);
    }
  },
};
```

</dd>

5. Run and Publish the JS Module.




## Integrate Modules into your App

Once you've created a JS module, follow these steps to access its data in any application:

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/qIaxZg11BtrJBPQBuxJm?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
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

With this, a new column displays the formatted data in the new format. 


</dd>
