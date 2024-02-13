---
title: Lesson 2 - Create Query Modules
hide_title: true
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Lesson 2 - Create Query Modules</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->

A reusable query module is a query that can be used across multiple applications within the same workspace. They prove beneficial for tasks like fetching details or creating filter queries, eliminating the need to create separate queries for each application.


This tutorial demonstrates how to create reusable queries in Appsmith that retrieve user data based on the user's country and display it in the application. By the end of this tutorial, you will know how to:

* Create and configure the query module
* Pass parameters to the module
* Integrate the module into your app


## Create package

A package is a collection of JS and query modules that can be versioned and distributed across instances. Inside packages, you can create multiple query and JS modules, allowing you to bundle and organize your application logic efficiently.


<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/RbjKo7IkDyvrctrUwcro?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>

1. **Create a new package** by clicking on the top-right corner of your workspace.

2. Click **New Module** > **Query Module**, and create a new datasource by selecting PostgreSQL.

3. Enter the following details in the connection parameter fields:

<dd>

* **Connection mode:** `READ_WRITE`
* **Host address:** `mockdb.internal.appsmith.com`
* **Port:** `5432`
* **Database name:** `mockdb_v2`
* **Username:** `postgres`

</dd>

3. Click **+ New Reusable Query** from the top-right corner of datasource editor.

4. Rename the query module to `GetProducts`.

5. Configure the query to retrieve product details using the following SQL:


<dd>

```sql
SELECT * FROM public."product" LIMIT 10;
```

</dd>

6. Run and Publish the module. 



## Pass parameters to module

To pass input values from any app to the query module for dynamic updates, follow these steps:

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/jGJZ8QTEqd4s2FGrIzCg?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>

1. Open the `GetProducts` query module.


2. In the query editor's property pane, create **Inputs** and add **Default values**. For this tutorial, create an input named `type` and set its default value to `All`.

<dd>

This allows you to pass parameters from your application to modules, facilitating dynamic query adjustments based on user inputs or application requirements.

</dd>



3. Update the query by using `{{inputs.input_name_}}` for dynamic adjustments. 

<dd>


This SQL query fetches data from the `product` table. It displays rows where the `type` matches the input provided or shows all data if there is no match.


```sql
SELECT *
FROM public."product"
WHERE type = '{{inputs.type}}' OR type IS NULL OR NOT EXISTS (SELECT 1 FROM public."product" WHERE type = '{{inputs.type}}')
LIMIT 10;
```

</dd>

7. Run and Publish the query module.

## Use query module

Once you've created a query module, follow these steps to access its data in any application:



<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/UnflBQTrpoT9dMNNRz45?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>


1. Open your App from the homepage and ensure that both the app and modules share the same workspace.

2. From the **Queries** Tab, select the `GetProducts` query module to view inputs, default values, and query settings.

3. To display query data, drop a Table widget and connect it to the `GetProducts` **Query module**.

4. Drop a Select widget and set its **Source Data** property to:

<dd>

```js
{{GetProducts_1.data
  .map(obj => obj.type) // Extract all types
  .filter((value, index, self) => self.indexOf(value) === index) // Filter unique types
  .map(type => { return { 'label': type, 'value': type } })
}}
```
</dd>

5. Set the **onOptionChange** event of the Select widget to execute the `GetProducts` query. 

With this setup, whenever a category type is selected in the Select widget, the selected value is passed to the query module, triggering the retrieval of data specific to that chosen type. 