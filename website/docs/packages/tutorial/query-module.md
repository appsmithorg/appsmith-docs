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

A package is a collection of query and JS modules that can be versioned and distributed across instances. Inside packages, you can create multiple query and JS modules, allowing you to bundle and organize your application logic efficiently.

:::tip What will I learn? 📝
You'll create a reusable query module using product inventory data and display that data in a Table widget. By the end of this tutorial, you will learn:

* 🔧 **Basics:** Learn how to create and configure the query module
* 🔄 **Dynamic Data:** Learn how to pass data between the app and query module
* ♻️ **Reusability:** Discover how to reuse the query module within applications
:::


## Create query module

A reusable query module is a query that can be used across multiple applications within the same workspace. They prove beneficial for tasks like fetching details or creating filter queries, eliminating the need to create separate queries for each application.


<div style={{ position: "relative", paddingBottom: "calc(50.52% + 41px)", height: 0, width: "100%" }}>
  <iframe
    src="https://demo.arcade.software/yPMGvRmB4KZ03CcKZZtv?embed"
    frameBorder="0"
    loading="lazy"
    webkitAllowFullScreen
    mozAllowFullScreen
    allowFullScreen
    allow="fullscreen"
    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
    title="Appsmith | Connect Data"
  />
</div>




1. Open your **Appsmith** workspace and click **Create New** on the top-right corner, then select **Package**.


2. Select **Code Package**, and rename it to `UserUtils`.

<dd>

- **Code Packages:** Contain reusable query and JS modules that can be shared across your workspace.

- **UI Packages:** Contain UI modules, bundling widgets, queries, and JavaScript logic into reusable units. See [UI Modules](/packages/tutorial/ui-module).
 
</dd>

3. In the Package UI, click on the **Queries** tab, then add a new datasource and select **Sample Users** Database.


4. Once connected, click + New Reusable Query from the top-right corner of the datasource editor.

5. Rename the query to `GetUsers` and configure it with the following SQL:

<dd>

```sql
SELECT * FROM public."users" LIMIT 10 OFFSET 4;
```

With this setup, you don't need to create separate queries each time you want to fetch user data. You can reuse this query module across multiple applications and widgets. For example:

- Display user information in a Table widget for user management pages.

- Populate user statistics dynamically in a Chart widget to visualize user distribution.

</dd>

6. Click **+ Add Inputs** in the right-side pane. Inputs allow you to pass parameters dynamically from your application to the query module. If no dynamic values are provided, the query will use the default values set.

<dd>

Create two inputs:


* `limit`, with a default value of `5`.
* `offset`, with a default value of `4`.

You can use these inputs to adjust queries based on user interactions, such as pagination or filtering within widgets.

</dd>


7. Update the query by using `inputs` property for dynamic adjustments: 

<dd>


```sql
SELECT * FROM public."users" LIMIT {{inputs.limit}} OFFSET {{inputs.offset}};
```

</dd>

8. **Run** the query to ensure it retrieves the data correctly.


9. **Publish** the query module from top-right corner. This allows the changes to reflect on the app side. 

<dd>

If the package is git-connected, you also need to release a new version for the changes to be available. For more details, refer to [Package Version Control](/packages/reference/versioning).

</dd>



## Use query module

Great job on creating a query module! Now, let's see how you can reuse it in different apps.


<div style={{ position: "relative", paddingBottom: "calc(50.52% + 41px)", height: 0, width: "100%" }}>
  <iframe
    src="https://demo.arcade.software/M6Wcxy6NVNFg51KFihM2?embed"
    frameBorder="0"
    loading="lazy"
    webkitAllowFullScreen
    mozAllowFullScreen
    allowFullScreen
    allow="fullscreen"
    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
    title="Appsmith | Connect Data"
  />
</div>


1. Open your existing App or create a new one from the homepage, ensuring both the App and modules are in the same workspace.

2. From the **Queries** tab, click **+ New query / API** and select the **GetUsers** query module from the `UserUtils` package.

<dd>

When you add a query module into your app, it becomes a query module instance. You can add multiple instances of the same module and pass different parameters to each one

</dd>

4. **Run** the query module instance.

5. To display the data, drag a **Table** widget onto the canvas, click **Connect Data**, and select the `GetUsers1` query module instance.

6. From the **Queries** Tab, open the `GetUsers` query module and set the **inputs** to reference the properties of the Table widget.

<dd>

This configuration dynamically sets the limit and offset based on the values from the Table widget(`Table1`).


- Limit: `{{Table1.pageSize}}`

- Offset: `{{Table1.pageOffset}}`


</dd>

7. Enable the **Server-side pagination** property in the Table.


8. Set the Table widget's **OnPageSizeChange** and **onPageChange** to execute the `GetUsers` query. 

With this, you have connected the query module to the Table widget and enabled server-side pagination, which allows you to dynamically fetch and display data based on the current page and page size.



:::tip Great!!
You have successfully integrated the query module into your app, displaying its data in the Table widget.
:::

## Next steps

- [Create JS Module](/packages/tutorial/js-module)