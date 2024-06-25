---
title: Package and query modules
hide_title: true
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Package and query modules</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->

A package is a collection of JS and query modules that can be versioned and distributed across instances. Inside packages, you can create multiple query and JS modules, allowing you to bundle and organize your application logic efficiently.

:::tip What will I learn? 📝
You'll create a reusable query module using product inventory data and display that data in a Table widget. By the end of this tutorial, you will learn:

* 🔧 **Basics:** Learn how to create and configure the query module
* 🔄 **Dynamic Data:** Learn how to pass data between the app and module
* ♻️ **Reusability:** Discover how to reuse the query module within applications
:::

## Prerequisites
Before you start, make sure you have the following:

* A self-hosted instance of Appsmith with a [paid subscription](https://www.appsmith.com/pricing). Refer to the [Appsmith installation guides](/getting-started/setup/installation-guides) for detailed instructions on setting up your Appsmith instance.
* If you are new to Appsmith, see [Tutorial - Basics](/getting-started/tutorials/start-building).


## Create query module

A reusable query module is a query that can be used across multiple applications within the same workspace. They prove beneficial for tasks like fetching details or creating filter queries, eliminating the need to create separate queries for each application.


<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/Zm91UIkEM0nSlq2MGzOQ?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>


1. Click **Create New** on the top-right corner of your workspace, and then select **New Package**.

2. Rename the package to `ProductUtils`.

3. Click the **New Module** button located at the center of the screen. Choose **Query Module** and proceed to create a **new datasource** by selecting PostgreSQL.

4. Enter the following details in the connection parameter fields:

<dd>

* **Connection mode:** `READ_WRITE`
* **Host address:** `aws-0-us-east-1.pooler.supabase.com`
* **Port:** `5432`
* **Database name:** `postgres`
* **Username:** `postgres.hazwlkzitjmrmqbpkqch`
* **Password:** `w9uDFMhmMzOOvPbv`

</dd>

5. Test and save the datasource.

6. Click **+ New Reusable Query** from the top-right corner of the datasource editor.

7. Rename the query module to `GetProducts`.

8. Configure the query to retrieve product details using the following SQL:


<dd>

```sql
SELECT * FROM public."product" LIMIT 5 OFFSET 4;
```

</dd>

9. Click on the **+ Add Inputs** button from the right-side property pane. These inputs allow you to pass parameters from your application to query module, facilitating dynamic query adjustments based on user inputs or application requirements. 

<dd>

Create two inputs:


* `limit`, with a default value of `5`.
* `offset`, with a default value of `4`.

If dynamic values are not passed, it takes the default value.

</dd>


10. Update the query by using `inputs` property for dynamic adjustments: 

<dd>


```sql
SELECT * FROM public."product" LIMIT {{inputs.limit}} OFFSET {{inputs.offset}};
```

</dd>

11. **Run** and **Publish** the query module.




## Use query module

Great job on creating a query module! Now, let's see how you can reuse it in different apps.


<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/t77RIouwmGGXyyuUN8j8?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>


1. Open your App or create a new one from the homepage and ensure that both the app and modules share the same workspace.

2. From the **Queries** Tab, click **+ New query / API**.

3. Select the `Add GetProducts` query module. You can add multiple instances of the same module and pass different parameters to each one.

4. Run the query module.

5. To display query data, drop a Table widget and connect it to the `GetProducts1` **Query module**. 


6. From the **Queries** Tab, open the `GetProducts` query module and set the **inputs** to reference the properties of the Table widget.

<dd>

This configuration dynamically sets the limit and offset based on the values from the Table widget(`Table1`).

```js
//limit input
{{Table1.pageSize}}

//offset input
{{Table1.pageOffset}}
```

</dd>

7. Enable the **Server-side pagination** property in the Table.


8. Set the Table widget's **OnPageSizeChange** and **onPageChange** to execute the `GetProducts` query. 


:::tip Great!!
You have successfully integrated the query module into your app, displaying its data in the Table widget.
:::

