---
title: Create and use modules
hide_title: true
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Create and use modules</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


A JavaScript module serves as a reusable code unit, encapsulating specific functionalities to promote an organized code structure and ease of maintenance. This tutorial takes you through the process of setting up a JS module and integrating it with your Appsmith app.

The Module feature is only available on a paid plan. For more information, see [Pricing](https://www.appsmith.com/pricing).

By the end of this lesson, you will learn how to:

* Create a JS module
* Configure the module 
* Integrate and Execute the module in your app

## Create module


<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/gCgCD9xeF0wRUFPO9hEO?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>



1. Click the **Create New** button from the top-right corner of your workspace and **Create a new package**.

2. Rename the Package to **DateformatPackage**.

3. Click **New Module** > **JS Module**.

4. Rename the module to **formatTimeZone**.


5. In the Main JS Object, delete the auto-generated code and add the below code to it:

<dd>

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



6. Publish the JS Module.


## Integrate Modules into your App


<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/uAjFJw61QMAS6wGptSlf?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>


1. Create or open an existing **App** from the homepage and ensure that both the app and modules share the same workspace.

2. Drag a Table widget and connect it to **Users** datasource to fetch and convert date data.

3. Select the JS tab on the Entity Explorer to the screen's left.

4. Click the **+ New JS object** and select the **formatWithTimeZone** JS module.

5. Configure the **formatWithTimeZone** function to run on page load.

6. Drop a Datepicker widget, and set the **Default Date** property to:

<dd>

```js
{{formatTimeZone_1.formatWithTimeZone(user_Table.selectedRow.created_at)}}
```

This code ensures that when a row is selected in the Table, the Datepicker widget displays the converted date and time.

</dd>


7. To modify the Table column directly, open the column settings through the gear icon and update the **Computed value** property to:

<dd>

```js
{{formatTimeZone_1.formatWithTimeZone(currentRow['created_at'])}}
```

</dd>