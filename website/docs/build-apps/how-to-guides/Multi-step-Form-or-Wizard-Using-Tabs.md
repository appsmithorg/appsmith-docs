# Create a Multi-step Wizard 

This page shows you how to create a multi-step form using the Tabs widget, which allows you to collect user input over multiple steps. See the [sample app](https://app.appsmith.com/app/create-a-multi-step-wizard/page1-65769e76eba2285a9c3c78f2).

<ZoomImage
  src="/img/multi-step-form1.gif" 
  alt="multi-step-form"
  caption="Multi-step form using Tabs"
/>

## Prerequisites

* A [Tabs](/reference/widgets/tabs) widget.
* Basic knowledge of how the [storeValue()](/reference/appsmith-framework/widget-actions/store-value) function works.


## Configure the Tabs

Follow these steps to set up a Tabs widget with form fields and validation:


<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/DrYCwqdPWdevGtwRIETJ?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>

*Example:* If you want to set up a multi-step form with three tabs:


1. Add and rename tabs as required. For example, rename them to `BasicInfo`, `LeadInfo`, and `CompanyInfo`.

2. Drop a Form widget for each tab and add relevant widgets like Input, Select, inside the form.


3. To validate user inputs, use properties like Regex, Valid, and Required. The submit Button remains disabled until all widgets meet the defined validation criteria. 

<dd>

See [validation examples](/reference/widgets/input#regex-string) for the Input widget.


</dd>

## Set up navigation

Follow these steps to navigate between Tabs using [storeValue()](/reference/appsmith-framework/widget-actions/store-value) and Button widgets:

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/Vby7KG2v4JK0C187CC6f?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>

1. To navigate to the next Tab, configure the **onClick** event of the Button within each Tab to trigger the **Store value** action and specify a unique key and Tab name.

<dd>

*Example:* On Tab 1 (`BasicInfo`), set the Submit Button's widget **onClick** event to trigger the **Store value** action and specify:  

| Field Name	| Value    	|
|-------	|---------------	|
| Key   	| `defaulttab`   	|
| Value 	| `LeadInfo` 	|


In this configuration, `defaulttab` acts as a unique identifier, while the Value field represents the name of the tab you want to navigate to, which, in this case, is the next tab `LeadInfo`. 

This setup stores the next Tab's name in the `defaulttab` key, which can then be used for navigation in subsequent steps.



</dd>

2. Similarly, to navigate to the previous tab, add a new Button widget to each tab and configure the **onClick** event to trigger the **Store value** action and specify the same unique key.


<dd>

*Example:* on Tab 2 (`LeadInfo`) tab, add a new Button widget and configure its **onClick** event to allow users to go back to the previous tab. For this, select **Store value** option from the action selector and specify:


| Field Name	| Value    	|
|-------	|---------------	|
| Key   	| `defaulttab`   	|
| Value 	| `BasicInfo` 	|

In this configuration, the same `defaulttab` key is used to store the name of the previous tab, which, in this case, is `BasicInfo`. This setup stores the previous Tab's name in the `defaulttab` key, which can then be used for navigation in subsequent steps.

Similarly, for each Tab, configure two Button widgets - one for navigating to the next tab and another for navigating to the previous tab.


</dd>


4. To display the Tab based on the `storeValue`, add the following code into the **Default Tab** property of the Tabs widget:


<dd>

```js
{{appsmith.store.defaulttab}}
```

This allows you to access the Tab name from the store using the `defaulttab` key. 

</dd>

5. Configure the final submit Button's **onClick** event to execute the update query. See how to [Submit Form data](/build-apps/how-to-guides/submit-form-data#submit-form-data).


6. Disable the **Show Tabs** property to hide tabs, which prevents manual selection and ensures controlled navigation.

With this setup, you can navigate between Tabs using Button widgets and the `storeValue` function.


You can customize the style of your Tabs by adding Buttons and Progress bar. Additionally, use the Setter methods to configure the UI elements according to your preferences.




## Save Partial Data

To persistently store data while users are in the process of filling out the form, you have two options:

- Using the `storeValue` function to store data locally, so users can resume their form-filling journey even if they navigate away. The data gets inserted into the datasource only when the submit button (executing the update query), is triggered.

- Direct server or datasource saving to ensure real-time, and storage of user data, which can be beneficial for immediate updates or backend integration. 

For partial data saving using API, follow these steps:

1. Set up an API endpoint to handle the initial insertion of data on `Next` button's **onClick** event. In this step, save the details that are already filled out in the form, and set the rest of the fields as null or with default values.

<dd>

*Example:* To insert data, add the following into the JSON body of the REST API.


```js
{
   "name": {{user_name.text ? user_name.text : null}},
   "role": {{user_role.text ? user_role.text : null}},
   "lead_date": {{Date_created.formattedDate ? Date_created.formattedDate : null}}
   // Add more fields as needed
}

```
The above code dynamically constructs a JSON object with optional properties, setting them to input field values or `null` if unavailable.

</dd>

2. Following the initial data insertion, use the `storeValue` function to save the data's unique identifier or `ID`. 


<dd>

*Example:* To save the `ID` upon the successful execution of the API, add the following code in the **onClick** event of the Next button:


```js
{{user_api.run().then(() => {
  storeValue('userid', Api1.data.id);
});}}
```

</dd>

3. Create a new API to update the existing record with additional data as the user advances through the form. Trigger this API execution when the user clicks on the Next buttons. 


<dd>

*Example:* For this, consider using the `PATCH` method, which is designed for partial updates: 

```js
//URL
https://yourapi.in/api/users/{{appsmith.store.userid}}
```

And in the content BODY pass the input data:

```js
//BODY
{
   "company_name": {{company_name.text ? company_name.text : null}},
   "product_name": {{product_name.text ? product_name.text : null}},
      // Add more fields as needed
}

```

</dd>

4. When the user completes the form and clicks the final Submit button, trigger an API to send the remaining or updated data to the server.


With this setup, data is directly saved to the server as users click on the Next button. Additionally, you can implement functions to check tab status, open relevant tabs on login, and dynamically fetch and display stored data.