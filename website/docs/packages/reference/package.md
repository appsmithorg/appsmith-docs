# Package Settings

This page provides information about the settings and properties available within Packages, which allows you to configure the package and module settings.


## Query module properties

These properties are customizable options present in the property pane of the query module, allowing you to modify the configuration.

#### Inputs

<dd>

The property allows you to create dynamic inputs for queries, which enables you to pass data from the App to the query module. You can create multiple inputs by clicking on the **+ Add Inputs** button.

To use an input within the query, enclose the input name within double curly braces like this: `{{ inputs.input_name }}`.


<ZoomImage
  src="/img/INPUT-pack.png" 
  alt=""
  caption=""
/>


*Example:*

```sql
SELECT * FROM public."product" LIMIT {{inputs.limit}} OFFSET {{inputs.offset}};
```

Setting default input values ensures successful query execution.



</dd>


### Package import


<dd>

<ZoomImage
  src="/img/settings-pack.png" 
  alt=""
  caption=""
/>


You can access the package import feature from the package settings page at the bottom left of the screen. This feature enables you to import package JSON files, facilitating integration and updates within your project. 

Importing a package file overrides your existing package. For instance, when you import a package containing display data, the existing queries are overwritten with the new queries, reflecting these changes in the app.



















</dd>

