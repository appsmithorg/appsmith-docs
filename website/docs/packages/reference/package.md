# Module

Modules in Appsmith are integral parts of a Package. A package is a collection of JS and Query Modules that can be distributed across instances, designed to provide consistent results across multiple applications within the same workspace. 

* Query Modules are reusable queries that encapsulate and reuse database queries across multiple applications. They support dynamic inputs to change query parameters based on user interactions.
* JS Modules are reusable objects for JavaScript functions and objects. They promote code reusability and provide a standardized approach to data manipulation.


This page provides information on the various properties and settings available within modules.



## Query module properties

These properties are customizable options present in the property pane of the query module, allowing you to modify the configuration.

#### Inputs

<dd>

The property allows you to create dynamic inputs for queries, which enables you to pass data from the App to the query module. You can create multiple inputs by clicking on the **+ Add Inputs** button.

To use an input within the query, enclose the input name within double curly braces like this: `{{ inputs.input_name }}`.

<ZoomImage
  src="/img/INPUT-pack-.png" 
  alt="Inputs image"
  caption=""
/>


*Example:*

```sql
SELECT * FROM public."product" LIMIT {{inputs.limit}} OFFSET {{inputs.offset}};
```



</dd>











