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

This page shows how to pass data between a query and a JS module, enabling you to efficiently handle, process, and manipulate data fetched from queries within your JS code.


## Prerequisites

A package that has already been created. For more information, see [Package and query modules tutorials](/packages/tutorial/query-module).

## Configure package

Follow these steps to set up JS modules within the package.


<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/HNVD0NV1FGH0HSD5cz3B?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>


1. Create a new Query module by clicking on the **+** icon in the top-left corner.

<dd>

*Example:* If you want to fetch a unique list of countries from your `users` data:

```sql
SELECT DISTINCT country
FROM public."users"
WHERE country IS NOT NULL;
```

</dd>

2. Create a JS module to format the data fetched from the query module.

<dd>

* To access the **query module data in the JS module**, use: `userData.data`.

* To pass data from **JS modules to queries**, you can pass parameters at runtime using `run()`, like `{{ updateLogin.run({ id: user.id }) }}`


*Example*: If you want to display the list of countries in a Select widget, add JS code like:

```js
export default {
  async myFun1() {
    try {
      // Use query1 to run the query and fetch the data
      const data = await query1.run();
      this.myVar1 = data.map(country => {
        return {
          name: country.country, // Ensure this matches the actual data structure
          code: country.country  // Ensure this matches the actual data structure
        };
      });
      return this.myVar1; // Return the formatted data
    } catch (error) {
      console.error('Error running query1:', error);
    }
  },
};
```

</dd>

3. Publish the package.


4. Open your App from the homepage and ensure that both the app and modules share the same workspace.

5. Select the *JS* tab on the Entity Explorer, add the JS module, and configure it to **run on page load**.

6. Drag a Select widget and set the **Source data** property to fetch the data:


<dd>

*Example:* 

```js
{{ countryModule.fetchCountries.data }}
```

</dd>

With this, you can reuse the same JS module to display a list of countries in different apps and pages.





