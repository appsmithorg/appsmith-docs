# Package Settings Inside App

This page provides information about the package settings and properties available within the App.

## Query module

These properties are customizable options available within the query editor of the query module. They can be accessed by adding the query module in the App.

Additionally, you can add multiple query modules from the same package, each with different configurations.


<ZoomImage
  src="/img/inputs_mod_app.png" 
  alt=""
  caption="∂"
/>

#### Inputs


<dd>

The input property enables you to pass dynamic values from your app to the query module. With inputs, you can incorporate dynamic data retrieval based on user interactions or other widget bindings. 

You cannot edit the input name or query configuration from the App; you can only pass values to the available inputs. 


*Example:*

If you have two inputs named `limit` and `offset`, you can pass data like this:

```js
//limit input
{{Table1.pageSize}}

//offset input
{{Table1.pageOffset}}
```


</dd>




#### Run query on page load

<dd>

When enabled, this property allows the query to automatically execute each time the page is loaded. This ensures that the data is refreshed dynamically, providing users with the most up-to-date information whenever they access the page.

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
  caption="∂"
/>

### Function name

<dd>

This setting displays all the function names available in the JS module. 



</dd>

#### Run on page load

<dd>

When enabled, this property allows the specified JS function to run when the page loads. You can set this property for all the available functions.


</dd>


#### Confirm before calling


<dd>

When enabled, this property displays a confirmation modal before calling the specified function. You can set this property for all the available functions.


</dd>

#### Parameters

<dd>

This property displays all the parameters available for the specified function.


</dd>
