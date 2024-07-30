# Module

This page provides information on all the module properties and settings available inside Packages.




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











