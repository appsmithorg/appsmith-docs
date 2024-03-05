---
title: Lesson 2 - JS modules
hide_title: true
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Lesson 2 - JS modules</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->




A JavaScript module serves as a reusable code unit, encapsulating specific functionalities to promote an organized code structure. 

To learn JS modules in Appsmith, you'll be building a function that formats dates into DD/MM/YYYY format. This function will be used to format the product data obtained from the query module in [lesson 1](/packages/tutorial/query-module).


By the end of this lesson, you will learn how to:

* Create and configure the JS module 
* Integrate and execute the module in your app


## Create JS Module


<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/pB3QuP30nOH0g4Pn7W5B?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>


1. Open the `ProductUtils` package created in [lesson 1](/packages/tutorial/query-module#create-query-module).

2. Click the **+** icon in the top-left corner and select **JS Module**. With JS Modules you can create datasource queries and JS objects inside the module.

3. Rename the module to _formatDate_.

4. In the _Main_ JS Object, delete the auto-generated code and add the below code to it:

<dd>

To pass data from the app to JS modules, you can pass it by calling the respective function with the necessary parameters, like `formatDDMMYYYY('2023-03-08T09:45:15Z')`.

The following code takes a parameter `dateString` and uses the `toLocalString()` method of the date object to convert the given date into the `DD/MM/YYYY` format.


```js
export default {
  // Function to format a date string as 'DD/MM/YYYY'
  formatDDMMYYYY: (dateString) => {
    const date = new Date(dateString);
    const options = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    };

    return date.toLocaleString('en-GB', options);
  },
};
```

</dd>



5. Publish the JS Module.

## Integrate Modules into your App

Follow these steps to access its data in any application:


<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/ZonOto4ANGQ93dPSGN9Q?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>


1. Open the **App** created in Lesson 1.

2. Select the _JS_ tab on the Entity Explorer.

3. Click the **+ New JS object** and select the **formatDate** JS module.

4. From the UI tab, select Table widget and open the `update` column by clicking ⚙️ gear icon. 

<dd>

```js
{{formatDate_1.formatDDMMYYYY(currentRow["updated"])}}
```

This code formats all `updated` column data into the `DD/MM/YYYY` format for each row in the data array.


</dd>


