---
title: Reuse JS modules
hide_title: true
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Reuse JS modules</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A JavaScript module is a reusable code unit that encapsulates specific functionalities, facilitating organized code structure and maintenance. It enables developers to group related variables, functions, promoting code reusability and separation of concerns.

The Module feature is only available on a paid plan. For more information, see [Pricing](https://www.appsmith.com/pricing).

By the end of this lesson, you will learn how to:

* Create a JS module
* Configure the module 
* Integrate and Execute the module in your app

## Create module

Follow these steps to create a new module within your workspace. The newly created module will be accessible across all apps in the same workspace:

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/gCgCD9xeF0wRUFPO9hEO?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>



1. Click the **Create New** button from the top-right corner of your workspace and **Create a new package**.


2. Click **New Module** > **JS Module**.

3. Rename it to **formatTimeZone**.


:::note
You can create queries and JSObjects specific to this module. The **Main** JS object represents the JS module code.
:::

4. In the Main JS Object, delete the auto-generated code and add the below code to it:

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

<dd>


*Example:* Create a function that formats the date ("x years ago" or in a specific time zone format), you can add code like:

* **Time Zone Formatter:** Formats a given date string using the specified time zone ('Asia/Kolkata') and returns the formatted result, including year, month, day, hour, minute, and second.
* **Year Ago Formatter:** Determines the time difference between the current date and a provided creation date.



<Tabs>
  <TabItem value="apple" label="Format Time Zone" default>
    
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

  </TabItem>
  <TabItem value="orange" label="Time Ago Formatter">
   
   ```js
  // Example: Converts '2023-03-28T12:54:35Z' to '3 years ago'

  export default {
  // Calculate time difference in a human-readable format
  timeAgo: (createdAt) => {
    const currentDate = new Date(); // Get current date
    const createdAtDate = new Date(createdAt); // Get creation date

    const timeDifference = currentDate - createdAtDate; // Calculate time difference in milliseconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Calculate days

    if (days < 30) {
      return `${days} days ago`; // Display days ago if less than 30 days
    }

    const months = Math.floor(days / 30); // Calculate months

    if (months < 12) {
      return `${months} months ago`; // Display months ago if less than 12 months
    }

    const years = Math.floor(months / 12); // Calculate years and remaining months

    return `${years} years and ${months % 12} months ago`; // Display years and remaining months ago
  },
};
  ```
  </TabItem>
</Tabs>



</dd>

5. Run and Publish the JS Module.




## Integrate Modules into your App

Follow the steps below to integrate the modules into your App

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/uAjFJw61QMAS6wGptSlf?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>


1. Open your **App** from the homepage and ensure that both the app and modules share the same workspace.

2. Select the JS tab on the Entity Explorer to the screen's left.

3. Click the **+ New JS object** and select the JS module.

4. Configure the function to run on page load.

5. To pass the date data to the JS module, create a query and connect it to the Table widget. Ensure that the table data includes a field with date information.


6. Drop a text widget, and set the **Text** property to:

<dd>

```js
{{formatTimeZone_1.formatWithTimeZone(user_Table.selectedRow.created_at)}}
```

</dd>

3. To display data, add a Table widget and connect it to the **JS module** using mustache binding `{{}}`, like:


<dd>

*Example:*

```js
{{JSModule1.myFun1.data}}
```

With this, a new column displays the formatted data in the "year ago" format. You can connect events to execute the functions in the JS module.


</dd>
