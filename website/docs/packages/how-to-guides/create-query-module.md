---
title: Build and use a query module
hide_title: true
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Build and use a query module</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->

A reusable query module is a query that can be used across multiple applications within the same workspace. They prove beneficial for tasks like fetching details or creating filter queries, eliminating the need to create separate queries for each application.

## Create a query module

Module are reusable entities that can be created within Packages. Within packages, you can create multiple query and JS modules.


<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/9SAjlISVyEOMSp1OUgYv?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>

1. **Create a new package** by clicking on the top-right corner of your workspace.

2. Click **New Module** > **Query Module**, and select or create your datasource. 

3. Click **Create Reusable Query** either from the datasource editor or the entity explorer.

4. Configure and Run the query.

5. Publish the query module.


Now, with these steps, you have successfully created a query module within your package. You can now reuse this query across multiple applications.

## Pass parameters

To pass input values from any app to the query module for dynamic updates, follow these steps:


<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/jGJZ8QTEqd4s2FGrIzCg?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>



1. Open the **Package** and select the query module you want to configure.

2. In the query editor's property pane, create **Inputs** and add **Default values**. You can create multiple inputs and dynamically pass data to Default value using mustache binding `{{}}`.

3. Configure the query by using `{{inputs.input_name_}}` for dynamic adjustments.

<dd>

_Example_: If you want to create a pagination query using LIMIT and OFFSET, create two inputs named `limit` and `offset`, assign default values, and configure the query as follows:


```sql
SELECT * FROM public."users" OFFSET {{inputs.offset}} LIMIT {{inputs.limit}};
```

</dd>

3. Run and publish the query module.

## Reuse modules


Once you've created a query module, follow these steps to access its data in any application:



<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/UnflBQTrpoT9dMNNRz45?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>


1. Open your App from the homepage and ensure that both the app and modules share the same workspace.

2. In the entity explorer, select the query module to view inputs, default values, and query settings.

3. To display query data, drop a Table widget and connect it to the **Query module**.

4. To update the query input values dynamically, use mustache binding `{{}}` to bind data.

<dd>

*Example*: If you want to pass the Table `pageSize` and `pageOffset` to the query module, update the input values to:

```js
//limit input
{{Table1.pageSize}}

//offset input
{{Table1.pageOffset}}
```


</dd>

5. Set the Table widget's **OnPageSizeChange** and **onPageChange** event to trigger the query module.


Whenever there is a change in the Table page change, the query module is triggered, and the data is updated.






