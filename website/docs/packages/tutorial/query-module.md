---
title: Lesson 1 - Reuse Query Modules
hide_title: true
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Lesson 1 - Reuse Query Modules</h1>

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


## Create and configure package

A Package is a collection of JS and query modules that can be versioned and distributed across instances. 


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

4. Rename the query module to `GetCountryData`.

5. In the query editor's property pane, create **Inputs** and add **Default values**. For this tutorial, create an input named `country_name` and set its default value to `Canada`.

<dd>

This allows you to pass parameters from your application to modules, facilitating dynamic query adjustments based on user inputs or application requirements.

</dd>



6. Configure the query by using `{{inputs.input_name_}}` for dynamic adjustments. 

<dd>


This SQL query retrieves all columns from the users table where the country column matches the value provided through the inputs parameter.

```sql
SELECT *
FROM users
WHERE country = '{{inputs.country_name}}';
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

2. From the **Queries** Tab, select the `GetCountryData` query module to view inputs, default values, and query settings.

3. To display query data, drop a Table widget and connect it to the **Query module**.

4. To update the query input values dynamically, use mustache binding `{{}}` to bind data.
