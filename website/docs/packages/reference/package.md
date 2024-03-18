# Package Settings

This page provides information about the settings and properties available within Packages, including configuration options for query modules and JavaScript modules.

## Query module properties

These properties are customizable options present in the property pane of the query module, allowing you to modify the configuration.

#### Inputs

<dd>

The property allows you to create dynamic inputs for queries, which enables you to pass data from the App to the query module. You can create multiple inputs by clicking on the **+ Add Inputs** button.

To use an input within the query, enclose the input name within double curly braces like this: `{{ inputs.input_name }}`.

*Example:*

```sql
SELECT * FROM public."product" LIMIT {{inputs.limit}} OFFSET {{inputs.offset}};
```

The query may fail if no default values have been set for the inputs.



</dd>


### Package import

<dd>

You can access the package import feature from the package settings page at the bottom left of the screen. This feature enables you to import package JSON files, facilitating integration and updates within your project. 

Importing a package file overrides your existing package. Please proceed with caution when selecting the file to import.


















</dd>

