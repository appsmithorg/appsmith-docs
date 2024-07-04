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

Follow these steps to set up JS and query modules within the package.


<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/vjD1OhwfW8Yz162XQ6KI?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>


1. Create a new Query module to fetch data by clicking on the **+** icon in the top-left corner.


<dd>

*Example:* Suppose you want to display a list of countries in a Select widget. You can create a query to fetch a list of unique countries, like:



```sql
SELECT DISTINCT country
FROM public."users"
WHERE country IS NOT NULL;
```

</dd>

2. Create a JS module to format or transform the data fetched from the query module. 

<dd>

* To access the **Query module data in the JS module**, use the reference properties of the query module, like: `userData.data`.

* To pass data from the **JS module to Query modules**, you can pass parameters at runtime using `run()`, like `{{ updateLogin.run({ id: user.id }) }}`

* To access the **JS module data in the Query module**, create input parameters and use them inside the query, like `{{inputs.id}}`.




*Example*: If you want to transform query data into a format suitable for a Select widget, you can add a JS function like:



```js
export default {
  async fetchCountriesData() {
    try {
      
      const countriesData = await fetchCountryDataQuery.run();
      this.countriesList = countriesData.map(country => {
        return {
          name: country.name, // 'country.name' is where the country name is stored
          code: country.code  
        };
      });
      return this.countriesList; // Return the formatted list of countries
    } catch (error) {
      console.error('Error fetching country data:', error);
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





