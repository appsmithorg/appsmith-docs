---
title: Lesson 1 - Create Reusable Query Modules
hide_title: true
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Lesson 1 - Create Reusable Query Modules</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->

A reusable query module is a query that can be used across multiple applications within the same workspace. They prove beneficial for tasks like fetching details or creating filter queries, eliminating the need to create separate queries for each application.


In this tutorial, you will learn how to use a query module to fetch and display product data within a Table widget. Additionally, leverage the same query to populate a Select widget with product categories.

By the end of this lesson, you will learn how to:
* Create a package
* Create a query module in a package
* Integrate the query module into your Appsmith app
* Pass parameters from your app to the query module

* Create and configure the query module
* Pass parameters to the module
* Integrate the module into your app


## Create package

A package is a collection of JS and query modules that can be versioned and distributed across instances. Inside packages, you can create multiple query and JS modules, allowing you to bundle and organize your application logic efficiently.


<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/IPU9f2WQccAiY8oalORZ?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>

1. Click **Create New** on the top-right corner of your workspace, and then select **New Package**

2. Rename the package to `ProductUtils`.

3. Click **New Module** > **Query Module**, and create a new datasource by selecting PostgreSQL.

4. Enter the following details in the connection parameter fields:

<dd>

* **Connection mode:** `READ_WRITE`
* **Host address:** `mockdb.internal.appsmith.com`
* **Port:** `5432`
* **Database name:** `mockdb_v2`
* **Username:** `postgres`

</dd>

5. Click **+ New Reusable Query** from the top-right corner of datasource editor.

6. Rename the query module to `GetProducts`.

7. Configure the query to retrieve product details using the following SQL:


<dd>

```sql
SELECT * FROM public."product" LIMIT 10;
```

</dd>

8. Run and Publish the module. 

You have successfully created the first query module.






## Pass parameters to module


In this section, we will update the query module to accept dynamic inputs, allowing us to pass parameters from the app to the query module for tailored and responsive data retrieval. 


<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/5c0ccNd04T81vRQGaqru?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>

1. In the `GetProducts` query editor's property pane, create **Inputs** and add **Default values**. For this tutorial use `LIMIT` and `OFFSET`, create two inputs named `limit` and `offset`, assign default values.

<dd>

Inputs allow you to pass parameters from your application to modules, facilitating dynamic query adjustments based on user inputs or application requirements

</dd>



2. Update the query by using `inputs` property for dynamic adjustments. 

<dd>


```sql
SELECT * FROM public."product" LIMIT {{inputs.limit}} OFFSET {{inputs.offset}};
```

</dd>

3. Run and Publish the query module.

## Use query module

Once you've created a query module, follow these steps to access its data in any application:



<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/ut7D5qD3Osxmg5NjMGHm?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>


1. Open your App from the homepage and ensure that both the app and modules share the same workspace.

2. From the **Queries** Tab, click **+ New query / API**.

3. Select the `Add GetProducts` query module to view inputs, default values, and query settings.

4. Run the query module.

5. To display query data, drop a Table widget and connect it to the `GetProducts` **Query module**.

6. From the **Queries** Tab, select the `GetProducts` query module and set the **inputs** to:

<dd>

```js
//limit input
{{Table1.pageSize}}

//offset input
{{Table1.pageOffset}}
```

</dd>

7. Set the Table widget's **OnPageSizeChange** and **onPageChange** to execute the `GetProducts` query. 


 This module can be utilized across various apps with distinct use cases. If dynamic inputs are not provided, it defaults to predetermined values.