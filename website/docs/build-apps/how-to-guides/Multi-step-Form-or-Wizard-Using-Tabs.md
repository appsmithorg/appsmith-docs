# Create a Multi-step Wizard 

This page shows you how to create a multi-step form using the Tabs widget, which allows you to collect user input over multiple steps.

<!--
<figure>
  <img src="/img/multi-step-form1.gif" style= {{width:"700px", height:"auto"}} alt="Display images on table row selection"/>
  <figcaption align = "center"><i>Multi-step form using Tabs</i></figcaption>
</figure>
-->


<iframe src="https://app.appsmith.com/app/anthropic-integration/page1-65769e76eba2285a9c3c78f2?embed=true&navbar=false" width="700" height="510" frameborder="0" allowfullscreen></iframe>




## Prerequisites

* A [Tabs](/reference/widgets/tabs) widget.
* Basic knowledge of how the [storeValue()](/reference/appsmith-framework/widget-actions/store-value) function works.


## Configure the Tabs

Follow these steps to set up a Tabs widget with form fields and validation:


<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/DrYCwqdPWdevGtwRIETJ?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>

*Example:* If you want to set up a multi-step form for lead creation with three tabs – one for basic info, another for lead details, and a third for company information:


1. Add and rename tabs as required. In this example, rename Tab 1 to `Basic-Info`, Tab 2 to `Lead-Info`, and Tab 3 to `Company-Info`.

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

1. On Tab 1 (`Basic-Info`), set the Submit Button's widget **onClick** event to trigger the **Store value** action and specify:  


<dd>

<!--
<figure>
  <img src="/img/tabs-next.png" style= {{width:"530px", height:"auto"}} alt="Configure Store value"/>
  <figcaption align = "center"><i>Configure Store value</i></figcaption>
</figure>
-->

| Field Name	| Value    	|
|-------	|---------------	|
| Key   	| `defaulttab`   	|
| Value 	| `Lead-Info` 	|


In this configuration, `defaulttab` acts as a unique identifier, while the Value field represents the name of the tab you want to navigate to, which, in this case, is the next tab `Lead-Info`. 

This setup stores the next Tab's name in the `defaulttab` key, which can then be used for navigation in subsequent steps.



</dd>


2. Similarly, on Tab 2 (`Lead-Info`) tab, add a new Button widget and configure its **onClick** event to allow users to go back to the previous tab. For this, select **Store value** option from the action selector and specify:
   
<dd>

| Field Name	| Value    	|
|-------	|---------------	|
| Key   	| `defaulttab`   	|
| Value 	| `Basic-Info` 	|

In this configuration, the same `defaulttab` key is used to store the name of the previous tab, which, in this case, is `Basic-Info`. This setup stores the previous Tab's name in the `defaulttab` key, which can then be used for navigation in subsequent steps.

Similarly, for each Tab, configure two Button widgets - one for navigating to the next tab and another for navigating to the previous tab.


</dd>


4. To display the Tab based on the `storeValue`, add the following code into the **Default Tab** property of the Tabs widget:


<dd>

```js
{{appsmith.store.defaulttab}}
```

This allows you to access the Tab name from the store using the `defaulttab` key. 

</dd>

5. Disable the **Show Tabs** property to hide tabs, which prevents manual selection and ensures controlled navigation.

With this setup, you can navigate between Tabs using Button widgets and the `storeValue` function.

See how to [Submit Form data](/build-apps/how-to-guides/submit-form-data#submit-form-data).

You can customize the style of your Tabs by adding Buttons and Progress bar. Take a look at the sample app to understand how these elements can enhance the appearance of your multi-step form.



See the sample app to find out how these elements can enhance the appearance of your multi-step form.









