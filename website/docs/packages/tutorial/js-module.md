---
title: Create Reusable JS Modules
hide_title: true
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Create Reusable JS Modules</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->

A JavaScript module serves as a reusable code unit, encapsulating specific functionalities to promote an organized code structure. 

This lesson will teach you how to create a JavaScript function that formats dates into a designated time zone. The function can be utilized across multiple applications, providing a consistent method for date formatting tailored to a particular time zone.


By the end of this lesson, you will learn how to:

* Create and configure the JS module 
* Integrate and execute the module in your app


## Create package

A package is a collection of JS and query modules that can be versioned and distributed across instances. Inside packages, you can create multiple query and JS modules, allowing you to bundle and organize your application logic efficiently.


<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/gCgCD9xeF0wRUFPO9hEO?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>


1. Click **Create New** on the top-right corner of your workspace, and then select **New Package**

2. Click **New Module** > **JS Module**. With JS Modules you can create datasource queries and JS objects inside the module.

3. Rename the module to **formatTimeZone**.


4. In the Main JS Object, delete the auto-generated code and add the below code to it:

<dd>

To pass data from app to JS modules, you can pass it by calling the respective function with the necessary parameters, like  `functionName(parameter)`. For example,`formatWithTimeZone('2023-03-08T09:45:15Z')`.

The following code formats a given date string to a specified time zone and returns the formatted result, including year, month, day, hour, minute, and second.

```js
// Example: Converts '2023-03-08T09:45:15Z' to '03/08/2023, 03:45:15 IST'

export default {
   // Function to format a date string with a specific time zone
formatWithTimeZone: (dateString) => {
 const date = new Date(dateString);
 const options = {
   year: 'numeric',
   month: '2-digit',
   day: '2-digit',
   hour: '2-digit',
   minute: '2-digit',
   second: '2-digit',
   timeZone: 'Asia/Kolkata', // Setting the time zone
 };

 return date.toLocaleString('en-US', options);
},
};
```

</dd>



5. Publish the JS Module.

## Integrate Modules into your App

Once you've created a JS module, follow these steps to access its data in any application:


<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/9JSxpqoIatUsdkmv5lB3?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>


1. Create or open an existing **App** from the homepage and ensure that both the app and modules share the same workspace.

2. Select the JS tab on the Entity Explorer to the screen's left.

3. Click the **+ New JS object** and select the **formatWithTimeZone** JS module.

4. Configure the **formatWithTimeZone** function to run on page load.

5. Drop a Datepicker and Text widget, and set the **Text** property to:

<dd>

This code passes the date value from a Date Picker widget to the JS module using the `formatWithTimeZone` function.

```js
{{formatTimeZone_1.formatWithTimeZone(DatePicker1.formattedDate)}}
```

Whenever a date is selected in the Datepicker, the Text widget displays the formatted date. It provides a versatile solution for formatting date data in various contexts, such as tables or any other location within your application.

</dd>


