# Module

Modules in Appsmith are integral components of a Package tailored. They are reusable components containing queries and JSOjects that can yield results across multiple applications within the same workspace.

This page provides information on the various properties and settings available within modules.



## Query module properties

These properties are customizable options present in the property pane of the query module, allowing you to modify the configuration.

#### Inputs

<dd>

The property allows you to create dynamic inputs for queries, which enables you to pass data from the App and JS modules to the query module. You can create multiple inputs by clicking on the **+ Add Inputs** button.

- To access JS module data in the query module, create input parameters and use them inside the query, like `{{inputs.id}}`. You can pass parameters at runtime using `run()`, like `{{ updateLogin.run({ id: user.id }) }}`.

- To access app data in the query module, create input parameters and use them inside the query. Pass data from the module instance on the app side.




*Example:* 
To use an input within the query, enclose the input name within double curly braces like this: `{{ inputs.input_name }}`. If dynamic values are not provided, the default values will be used.



```sql
SELECT * FROM public."product" LIMIT {{inputs.input1}} OFFSET {{inputs.input2}};
```





<ZoomImage
  src="/img/INPUT-pack.png" 
  alt="Inputs image"
  caption=""
/>







</dd>


### Package import


<dd>



You can access the package import feature from the package settings page at the bottom left of the screen. This feature enables you to import package JSON files, facilitating integration and updates within your project. 

Importing a package file overrides your existing package. For instance, when you import a package containing display data, the existing queries are overwritten with the new queries, reflecting these changes in the app.


<ZoomImage
  src="/img/settings-pack.png" 
  alt="Package settings image"
  caption=""
/>

















</dd>

