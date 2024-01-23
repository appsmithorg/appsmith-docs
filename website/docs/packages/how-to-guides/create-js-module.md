---
title: Build and use a JS module
hide_title: true
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Build and use a JS module</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->

A JavaScript module is a reusable code unit that encapsulates specific functionalities, facilitating organized code structure and maintenance. It enables developers to group related variables, functions, or classes, promoting code reusability and separation of concerns.


## Create a module

A Package is a collection of Modules that can be versioned and distributed across instances. Within packages, you can create multiple query and JS modules.



<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/smRCw39JntP5g2IyVV8Q?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>



1. **Create a new package** by clicking on the top-right corner of your workspace.

2. Click **New Module** > **JS Module**.


:::info
* You can create queries and JS objects specific to this module. The **Main** JS object represents the JS module code.

* Passing Query Module data to JS modules is not supported.
:::



3. To pass query data, create a datasource within this JS module.

<dd>

*Example:* To fetch user data, create a new API and configure the URL:

```js
https://mock-api.appsmith.com/users
```

</dd>

4. Configure the Main JS Object / JS Module Code based on your requirements.


<dd>


*Example:* If you want to format the date of user data, transforming the `updatedAt` column into the "x years ago" format, you can use the following code:

```js
export default {
  myVar1: [],

  // Function to process data and update myVar1
  async myFun1() {
    try {
      // Assuming Api1.run() returns a promise
      await Api1.run();
      const dataArray = Api1.data.users;

      const currentDate = new Date();

      // Map over dataArray and format the dates
      const updatedDataArray = dataArray.map(item => {
        const dateToFormat = new Date(item.updatedAt);
        const timeDifference = currentDate - dateToFormat;

        // Calculate years and months from timeDifference
        const years = Math.floor(timeDifference / (365 * 24 * 60 * 60 * 1000));
        const months = Math.floor((timeDifference % (365 * 24 * 60 * 60 * 1000)) / (30 * 24 * 60 * 60 * 1000));

        let formattedDate = '';

        // Build the formatted date string
        if (years > 0) {
          formattedDate += `${years} ${years === 1 ? 'year' : 'years'}`;
        }

        if (months > 0) {
          if (years > 0) {
            formattedDate += ' ';
          }
          formattedDate += `${months} ${months === 1 ? 'month' : 'months'}`;
        }

        formattedDate += ' ago';

        return {
          ...item,
          formattedDate: formattedDate.trim()
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
  <iframe src="https://demo.arcade.software/4JWwouLYCxQ94M5Lb7YQ?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>



1. Open your **App** from the homepage and ensure that both the app and modules share the same workspace.

2. In the entity explorer, select the JS module and configure the function settings as needed.

3. To display data, add a Table widget and connect it to the **JS module** using mustache binding `{{}}`, like:


<dd>

*Example:*

```js
{{JSModule1.myFun1.data}}
```

With this, a new column displays the formatted data in the "year ago" format. You can connect events to execute the functions in the JS module.


</dd>


