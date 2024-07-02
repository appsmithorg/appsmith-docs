---
title: JS modules
hide_title: true
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>JS modules</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->




A JavaScript module serves as a reusable code unit, encapsulating specific functionalities to promote an organized code structure. 

To learn JS modules in Appsmith, you'll be building a function that formats dates into DD/MM/YYYY format. This function will be used to format the product data obtained from the query module in [lesson 1](/packages/tutorial/query-module).


:::tip What will I learn? 📝
You'll learn how to reuse JavaScript code to format dates within your applications. By the end of this tutorial, you will learn:

* 🔧 **Basics:** Learn how to create and configure the JS module
* 🔄 **Dynamic Data:** Learn how to pass data between the app and JS module
* ♻️ **Reusability:** Discover how to reuse the JS module within applications
:::

## Prerequisites
Before you start, make sure you have the following:

* A self-hosted instance of Appsmith with a [paid subscription](https://www.appsmith.com/pricing). Refer to the [Appsmith installation guides](/getting-started/setup/installation-guides) for detailed instructions on setting up your Appsmith instance.
* If you are new to Appsmith, see [Tutorial - Basics](/getting-started/tutorials/start-building).

## Create JS modules


<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/pB3QuP30nOH0g4Pn7W5B?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>


1. Open an existing package or create a new one from the top-right corner of your workspace.

2. Click the **+** icon in the top-left corner and select **JS Module**. 

3. Rename the module to _formatDate_. 

4. In the _Main_ JS Object, delete the auto-generated code and add the below code to it:

<dd>

To pass data from the app to JS modules, you can pass it by calling the respective function with the necessary parameters, like `formatDDMMYYYY('2023-03-08T09:45:15Z')`.


The following code takes a parameter `dateString` and uses the `toLocalString()` method of the date object to convert the given date into the `DD/MM/YYYY` format.


```js
export default {
  // Function to format a date string as 'DD/MM/YYYY'
  formatDDMMYYYY: (dateString = '2023-03-08T09:45:15Z') => {
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



5. **Publish** the JS Module.

## Integrate modules into your App

Follow these steps to access its data in any application:


<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/ZonOto4ANGQ93dPSGN9Q?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>


1. Open the **App** created in Lesson 1.

2. Select the _JS_ tab on the Entity Explorer.

3. Click the **+ New JS object** and select the **formatDate** JS module.

4. From the UI tab, select Table widget and open the `updated` column by clicking ⚙️ gear icon. 

5. In the **Computed value** property, add:

<dd>

```js
{{formatDate_1.formatDDMMYYYY(currentRow["updated"])}}
```

The `formatDate_1` represents the module instance, and the number corresponds to the order in which the module was added.


This code formats all `updated` column data into the `DD/MM/YYYY` format for each row in the data array.

</dd>


:::info
When you update and publish a package, these modifications automatically apply in the edit mode of the app. However, the live (deployed) version of the app remains unchanged until you redeploy the app. 
:::

### See Also

* [How to Use queries inside JS module](/packages/how-to-guides/use-query-inside-js-module)
* [Refresh OAuth Tokens Using JS Modules](/packages/how-to-guides/create-js-module)
