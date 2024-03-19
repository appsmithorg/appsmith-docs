# App-Level Package Settings

This page provides information about the package settings and properties available within the App, which allows you to configure the query and JS modules.



## Query module

When you add the query module inside the app, you can access these customizable options within the query editor. You can add multiple query modules from the same package, each with different configurations.



### Properties 

These properties facilitate dynamic value transmission from your app to the query module. 

#### Inputs


<dd>

The input property enables you to pass dynamic values from your app to the query module. With inputs, you can incorporate dynamic data retrieval based on user interactions or other widget bindings. 

You cannot edit the input name or query configuration from the App; you can only pass values to the available inputs. 

<ZoomImage
  src="/img/inputs_mod_app.png" 
  alt=""
  caption=""
/>


*Example:*

If you have an input named `distinct_id`, you can pass data like this:

```js
//distinct_id
{{appsmith.user.email}}
```


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

These properties are customizable options available within the JS editor of the JS module. They can be accessed by adding the JS module in the App.

Additionally, you can add multiple JS modules from the same package, each with different configurations.


<ZoomImage
  src="/img/js-module-setting.png" 
  alt=""
  caption=""
/>

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


#### Confirm before calling


<dd>

When enabled, this property displays a confirmation modal before calling the specified function. You can set this property for all the available functions.


</dd>

#### Parameters

<dd>

This property displays all the parameters available for the specified function.


</dd>
