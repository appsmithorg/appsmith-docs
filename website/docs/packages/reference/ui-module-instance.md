# UI Module Instance


When you add a UI Module from a package into your application, you create a UI Module Instance.

Each instance acts as a reusable, self-contained UI component that can be configured dynamically without modifying the internal structure of the module.

You can create multiple instances of the same UI Module with different input values and settings.
Instances are named sequentially (e.g., customerProfile1, customerProfile2) for easier identification.

This page provides information about the settings and properties available for configuring a UI Module Instance.





### Properties

These properties are only available if they are defined in the UI Module.


#### Inputs

<dd>

Allows you to pass dynamic values from the application into the UI Module Instance. Inputs listed at the instance level are automatically generated based on the Inputs defined when the UI Module was created.

Inputs enable you to dynamically populate widget properties, run queries, or execute JavaScript logic inside the module based on the data you provide from the app.

You can bind static values, widget outputs, query results, or app/user data into Inputs using JavaScript bindings.


If you want to pass customer details fetched from a query into the module, you can set Inputs using the query response fields.

```js
//inputCustomerName
{{getCustomerDetails.data.name}}
```


</dd>