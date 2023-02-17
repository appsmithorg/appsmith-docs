# Select

The select widget, (*formerly known as dropdown*), enables users to select one input from a predetermined list of permitted options. This document provides information on displaying options in the select widget and explains different properties.

<VideoEmbed host="youtube" videoId="zNw1yMwg-aY" title="How to use Select Widget" caption="How to use Select Widget"/>



## Display options manually
To manually display options in a Select widget, you can use the **Options property**. The Options property is used to specify the available options for the user to choose from. It allows you to set both the label and value for each item in the dropdown list. 

The options must be specified as an array of objects, where each object has two properties: `label` and `value`. The `label` property represents the text that's displayed to the user, while the `value` property is the actual data that's stored and used in your application. For example:

```javascript
[
  {
    "label": "Blue",
    "value": "BLUE"
  },
  {
    "label": "Green",
    "value": "GREEN"
  }
]
```


## Display options dynamically 
Instead of creating a predetermined set of options, you can dynamically generate options by fetching data from an API or querying a data source.

A Dropdown **Options** can be populated from a data source like an API / Query by transforming the incoming data to an array of (label, value). The transformation can be performed using JavaScript. So if the data is an array, it can be transformed using the [**Array.map**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/TypedArray/map) function.

```javascript
// Query1.data is assumed to be an array here
{{ Query1.data.map((row) => { 
      return { label: row.name, value: row.id } 
   }) 
}}
```


**Sample app** - [Dynamically Add Options to a Select Widget](https://app.appsmith.com/applications/61fbdf232cd3d95ca414b805/pages/61fbdf232cd3d95ca414b808)

## Set default value in options

The Default Selected Value property in a widget allows you to specify an initial value for the widget when it's first displayed. This is useful for pre-populating the widget or ensuring that a specific option is selected by default. To use this property, set its value to the value of the desired option from the Options property. 

```javascript
[
  {
    "label": "Blue",
    "value": "BLUE"
  },
  {
    "label": "Green",
    "value": "GREEN"
  }
]
```
For example, if you want the default value to be ```Blue```, set the **Default Selected Value** property to ```BLUE```.



## Access selected option
These properties allow you to bind your select widget with any other widget in queries or JS objects.

The **selectedOptionValue** in a Select widget is a value that represents the selected option in a  dropdown. It updates when the user selects a new option or the default value changes. 

```javascript
{{widget_name.selectedOptionValue}}
```

The **selectedOptionLabel** in a Select widget represents the label of the selected option in a dropdown. This property is used to display the label of the selected option in the widget and is updated whenever the user selects a different option from the dropdown list or if the default label changes. 

```javascript
{{widget_name.selectedOptionLabel}}
```



## Server side filtering	

The Select widget has the option to configure server-side filtering, where search queries are sent to the back-end, and responses are used to populate options on the Select widget. You can implement server-side filtering of options in the Select widget by using the filterText binding property.

The **filterText** is a binding property in a Select widget that allows you to implement server-side filtering of options in the dropdown list. When enabling server-side filtering in the widget, please update the default value to contain both `label` and `value` in this format `{"label":<label>, "value": <value>}` if the default value isn't present in the default options.

<VideoEmbed host="youtube" videoId="QDmTwRaLzHg" title="Server Side Filtering" caption="Server Side Filtering"/>

The preceding video demonstrates how to enable Server Side Filtering, and you can also refer to this [guide](/reference/widgets/table#server-side-filter) to learn more about Server-Side Searching or Filtering.


**Sample app** for [Server Side Filtering](https://app.appsmith.com/applications/61fbdf232cd3d95ca414b805/pages/6215d4742882606a1df5c695).


## Properties
Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

### Widget properties
These properties are present in the property pane of the widget. The following table lists all the widget properties.


|        Property        | Description                                                                                                                                    |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |                                                                     
| **Options**                           	| Use to set labels and values for different items/options in the list of the dropdown widget. Options must be specified as an array of objects with a label and value property. 	                                    	|
| **Default Selected Value** 	       	| Sets a default option that's captured as user input unless it's changed by the user.                                                                                           	                                    	|
| **Text**                                 	| Sets the label of the widget.                                                                                                                                                  	                                    	|
| **Position**                             	| Sets the label position of the widget.                                                                                                                                         	                                    	|
| **Allow Searching**                  	| Makes the dropdown list filterable.                                                                                                                                            	                                    	|
| **Server Side Filtering** | Enables server-side filtering via an API / Query request. Use this property when the Select widget's Option data is being bound to an API / Query.                             	                                    	|
| **Required**                         	| When turned on, it makes a user input mandatory and disables any form submission until input is made.                                                                             	                                   	|
| **Tooltip**                           	| It sets a tooltip for the widget. You can add hints or extra information about the required input from the user.                                                                        	|
| **Placeholder**                  	| Sets the Placeholder of the dropdown widget.                                                                                                                                      	                                 	|
| **Visible**                	| Controls widget's visibility on the page. When turned off, the widget won't be visible when the app is published.                                                                	| `{{widget_name.isVisible}}`                  	|
|**Disabled**                	| Disables input/selection to the widget. The widget remains visible to the user but user input/selection won't be allowed.                                                     	| `{{widget_name.isDisabled}}`                 	|
| **Animate Loading**                 	| Controls the widget’s animation on page load.                                                                                                                                    	                                    	|
| **Height**           	| It configures how a widget’s height reacts to content. Learn more about [Height Property changes.                                                                                                                 	                                    	|

### Reference properties
These properties allow you to bind your select widget with any other widget in queries or JS objects.

|        Property         |                                               Description                                                                                  	|   
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **filterText**                     	| The filter text for Server side. filtering                                                                                                                                      `           	|
| **isDisabled**                 	| This property indicates whether the widget is disabled or not.                                                                                                                         	|
| **isVisible**                        	| This property indicates whether the widget is visible or not.                                                                                                                              	|
| **selectedOptionValue**    	          	| This is the value of the option that's displayed in a Single Select dropdown. It changes if the default value of the dropdown changes or the user selects an option            	|   `{{widget_name.selectedOptionValue}}`  	|
| **selectedOptionLabel**   	            	| This property indicates label of the selected option.                                                                                                                          `  	|

### Style properties

Style properties allow you to change the look and feel of the widget.


| Events             | Description                                                                                                                                    |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **Font Color**                	| Allows you to set text color for the label.                                                                                                                                                     	|
| **Font Size**              	       	| Allows you to set the size of the label.                                                                                                                                                                     	|
| **Emphasis**              	            	| Allows you to choose a font style; bold or italic.                                                                                                                                               	|
| **Border Radius**                    	| Rounds the corners of the widget's outer edge.                                                                                                                                                                      	|
| **Box Shadow**             	          	| Casts a drop shadow from the frame of the widget.                                                                                                                                                            	|


## Events

These are functions that are called when event listeners are triggered in the widget. Use [actions](/reference/appsmith-framework/widget-actions) to execute tasks based on user events.

| Events             | Description                                                                                                                                    |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **onOptionChange** | The "onOptionChange" property allows you to specify the action that should occur when the user selects an option in the dropdown list. This is an important feature that enables you to capture the user's input and perform specific actions in response.  |
| **onDropdownOpen** | The "onDropdownOpen" property allows you to specify the action that should occur when the user opens the dropdown list. For example, you could use the "onDropdownOpen" event to retrieve data from a database, populate the options in the dropdown list, or display additional information to the user.   |
| **onDropdownClose** | The "onDropdownClose" property allows you to specify the action that should occur when the user closes the dropdown list. For example, you could use the "onDropdownClose" event to store the selected option in a database, hide additional information, or reset the widget to its original state.  |



## Troubleshooting


* [Default value is missing in options](/help-and-support/troubleshooting-guide/widget-errors#default-value-is-missing-in-options)

* [Duplicate values found](/help-and-support/troubleshooting-guide/widget-errors#duplicate-values-found) 

If you run into any other issues while working with the Select widget, check out the guide on [widget errors guide](/help-and-support/troubleshooting-guide/widget-errors). If your issue isn't covered in the guide, please connect with support@appsmith.com or raise your query on the [Discord Server](https://discord.com/invite/rBTTVJp).


## Further reading

* [Filter data based on user input](/reference/widgets/table#server-side-filter)
* [Data Access and Binding](/core-concepts/data-access-and-binding)
* [Widgets Reference](/reference/widgets)


