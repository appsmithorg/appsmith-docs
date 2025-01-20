# Module Instance



When you incorporate a module from the package into your application, you create a module instance. You can create multiple instances of the same package, each with different settings and configurations. Instances are named sequentially (e.g., `productutil1`, `productutil2`), allowing for customized functionalities.

This page provides information about the module settings and properties available within the app, enabling you to configure the query and JS modules.


<ZoomImage
  src="/img/modules-diagram.png" 
  alt=""
  caption=""
/>


<ZoomImage
  src="/img/query-module-ins.drawio.png" 
  alt=""
  caption=""
/>



## Query module instance

These are all the properties and settings available for a Query Module instance within any app. When you add multiple query modules, whether from the same package or different ones, these properties will be available to configure each module instance according to your specific needs.




### Properties 

These properties are only available if they are defined in the Query Module. 

#### Inputs


<dd>

The input property lets you pass dynamic values from your app to the query module, which allows you to update data based on user interactions or widget bindings.

You cannot edit the **Inputs** name or query configuration directly from the App. You can pass different values to the available inputs at runtime using the `.run()` function. The values passed through `.run()` will take precedence over the default values set on the module instance page.




<ZoomImage
  src="/img/query-module-instance.png" 
  src="/img/query-module-instance.png" 
  alt="Inputs image"
  caption=""
/>


*Example:*

If you have an input named `distinct_id`, you can pass data like this:

```js
//distinct_id
{{appsmith.user.email}}
```

For more information on how to read the dynamic data, see [Module](/packages/reference/package).
For more information on how to read the dynamic data, see [Module](/packages/reference/package).

</dd>



### Settings 

These settings allow you to configure the query module according to your requirements

#### Run query on page load

<dd>

When enabled, this property allows the query to automatically execute each time the page is loaded. You can choose to enable it based on your specific requirements and configure it to execute on page load.


</dd>


#### Request confirmation before running query


<dd>

When enabled, this property displays a confirmation modal each time a query is executed. This ensures that users can confirm their action before executing the query, preventing unintended data updates.






</dd>


## JS module instance

These properties are customizable options available within the JS editor of the JS module. They can be accessed by adding the JS module in the App. Additionally, you can add multiple JS modules from the same package, each with different configurations.


### Parameters 

This property displays all the parameters available for the specified function.


#### Inputs

   <ZoomImage src="/img/inputs-js1.png" alt="" caption="" />

The input property allows you to pass dynamic values from your app to the JS module. You can use these inputs to pass data into a function within the JS module. You cannot edit the input name or JS configuration from the App; you can only pass values to the available inputs. 

To access the data in the JS Module, create a function with parameters that can be utilized when the function is called.



*Example*:

```js
//access the data in JS Module
export default {
  myFunction: (email, password) => {
    console.log("Parameter 1: ", email);
    console.log("Parameter 2: ", password);
    // Perform operations using param1 and param2
  }
}
```



### Function setting

This setting allows you to configure each function available in the JS module according to your requirements.



#### Function name

<dd>

This setting displays all the function names available in the JS module. 



</dd>

#### Run on page load

<dd>

When enabled, this property allows the specified JS function to run when the page loads. You can set this property for each JS function available.


</dd>

