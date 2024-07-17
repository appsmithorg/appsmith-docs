# Module Instance



When you incorporate a module from the package into your application, you create a module instance. You can create multiple instances of the same package, each with different settings and configurations. Instances are named sequentially (e.g., `productutil1`, `productutil2`), allowing for customized functionalities.

This page provides information about the module settings and properties available within the app, which allows you to configure the query and JS modules.


<ZoomImage
  src="/img/modules-diagram.png" 
  alt=""
  caption=""
/>



## Query module

When you integrate the query module into the app, you can access and modify the parameters that have been set up for the query module using the query editor. You have the option to include multiple query modules, whether they're from the same package or different ones, and supply parameters to each module according to your specific needs.



### Properties 

These properties facilitate dynamic value transmission from your app to the query module. 

#### Inputs


<dd>

The input property enables you to pass dynamic values from your app to the query module. With inputs, you can incorporate dynamic data retrieval based on user interactions or other widget bindings. 

You cannot edit the input name or query configuration from the App; you can only pass values to the available inputs. 

<ZoomImage
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

</dd>



### Settings 

These settings allow you to configure the query module according to your requirements

#### Run query on page load

<dd>

When enabled, this property allows the query to automatically execute each time the page is loaded. You can choose to enable it based on your specific requirements and configure it to execute on page load.


</dd>


#### Request confirmation before running query


<dd>

When enabled, this property displays a confirmation modal each time before refreshing the data. This ensures that users have the opportunity to confirm their action before executing the query, preventing unintended data refreshes.

</dd>


## JS module

These properties are customizable options available within the JS editor of the JS module. They can be accessed by adding the JS module in the App. Additionally, you can add multiple JS modules from the same package, each with different configurations.


### Parameters 

This property displays all the parameters available for the specified function.


#### Inputs


The input property allows you to pass dynamic values from your app to the JS module. The input parameters are only available if they are defined in the JS function. You cannot edit the input name or JS module configuration from the App; you can only pass values to the available inputs. 

  
*Example*: If you have a JS Function with predefined parameters like `email` and `password`, you can pass dynamic data from your application to the module using the **Inputs**.

```js
//JS Module
export default {
  myFunction: (email, passwordHash) => {
    console.log("Parameter 1: ", email);
    console.log("Parameter 2: ", passwordHash);
    // Perform operations using param1 and param2
  }
}
```

```js
//App
email: 
{{email_input.text}}

passwordHash:
{{pass_input.text}}
```
 <ZoomImage src="/img/inputs-js-module.png" alt="" caption="JS Module Instance | App" />



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
