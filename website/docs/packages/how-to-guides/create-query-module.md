# Create Reusable Query Modules

Reusable query modules are sets of queries designed for use across multiple applications within the same workspace. They prove beneficial for tasks like fetching details or creating filter queries, eliminating the need to create separate queries for each application.

## Create a Package

A Package is a collection of Modules that can be versioned and distributed across instances. Within packages, you can create multiple query and JS modules.



<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/9SAjlISVyEOMSp1OUgYv?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>

1. **Create a new package** by clicking on the top-right corner of your workspace.

2. Click **New Module** > **Query Module**, and select or create your datasource.

3. Configure the datasource parameters.

4. Click **Create Reusable Query** either from the datasource editor or the entity explorer.

5. Configure the query, making it reusable across different apps.

6. Publish the query module.


## Passing Inputs

To customize the query based on your app's needs, follow these steps to pass input values from any app to the query module for dynamic updates:

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/r1hOjoWH223cGSvq7mw1?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>


1. Open the **Query module** you intend to use and set inputs.

2. In the query editor's property pane, create **Inputs** and add **Default values**. You can create multiple inputs and dynamically pass data to Default value from any other query or JSObject within that module.

3. Configure the query by using `{{inputs.input_name_}}` for dynamic adjustments.

<dd>

_Example_: If you want to add the limit for a SQL query, create an input named `user_limit`, assign a default value, and configure the query, like:



```sql
SELECT * FROM users
LIMIT {{inputs.user_limit}};
```

</dd>

3. Run and publish the query module.

## Integrate Modules into your App


Once you've created a query module, follow these steps to access its data in any application:



<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/BnrzBe3Jl8Do9qEMdVSh?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>


1. Open your **App** from the homepage and ensure that both the app and modules share the same workspace.

2. In the entity explorer, select the query module to view inputs, default values, and query settings.

3. To display query data, drop a Table widget and connect it to the **Query module**.

4. To update the query input values dynamically, use mustache binding `{{}}` to bind data.

<dd>

*Example*: If you want to pass the Table page size to the query module, update the `user_limit` value to:

```js
{{Table1.pageSize}}
```


</dd>

5. Set the Table widget's **OnPageSizeChange** event to trigger the query module.


Whenever there is a change in the Table page size, the query module is triggered, and the data is updated.






