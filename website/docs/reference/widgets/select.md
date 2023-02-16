# Select

Select widget(*previously dropdown*) captures user input/s from a specified list of permitted inputs. It offers a simple and intuitive interface for users to select a single option from the list, 

<VideoEmbed host="youtube" videoId="zNw1yMwg-aY" title="How to use Select Widget" caption="How to use Select Widget"/>


## Display data

Displaying data in a select widget, is a crucial aspect of creating an interactive user interface. The select widget provides a list of options for the user to choose from and it's important to specify these options to effectively display the data. 

### Display options manually
To manually display options in a Select widget, you can use the Options property. The Options property is used to specify the available options for the user to choose from. It allows you to set both the label and value for each item in the dropdown list. 

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


### Display options dynamically 
Instead of creating a predetermined set of options, you can dynamically generate options by fetching data from an API or querying a data source.

A Dropdown **Options** can be populated from a data source like an API / Query by transforming the incoming data to an array of (label, value). The transformation can be performed using JavaScript. So if the data is an array, it can be transformed using the [**Array.map**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/TypedArray/map) function.

```javascript
// Query1.data is assumed to be an array here
{{ Query1.data.map((row) => { 
      return { label: row.name, value: row.id } 
   }) 
}}
```

To access the values of an object with attribute names that contain spaces, use `obj["<ATTRIBUTE_NAME"]` instead of `obj.<ATTRIBUTE_NAME>`, where `"<ATTRIBUTE_NAME>"` is the placeholder for an attribute name. For example, if the attribute is `income tax`.


```javascript
 return { label: obj["income tax"], value: obj["income tax"]} 
```
**Sample app** - Dynamically Add Options to a [Select Widget](https://app.appsmith.com/applications/61fbdf232cd3d95ca414b805/pages/61fbdf232cd3d95ca414b808)

### Set default value in options

The Default Selected Value property in a widget allows you to specify an initial value for the widget when it's first displayed. This is useful for pre-populating the widget or ensuring that a specific option is selected by default. To use this property, set its value to the value of the desired option from the Options property. 

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


## Enable search for options

The **Allow Searching** property of a Select widget enables users to search for a particular option within the dropdown list. When this property is enabled, the Select widget includes a search bar, allowing users to type in the name of the option they're looking for, locate and select it. 

![](/img/Allow-Searching.png)



## Server side filtering	

The Select widget has the option to configure server-side filtering, where search queries are sent to the back-end, and responses are used to populate options on the Select widget. You can implement server-side filtering of options in the Select widget by using the filterText binding property.

The **filterText** is a binding property in a Select widget that allows you to implement server-side filtering of options in the dropdown list. When enabling server-side filtering in the widget, please update the default value to contain both `label` and `value` in this format `{"label":<label>, "value": <value>}` if the default value isn't present in the default options.

<VideoEmbed host="youtube" videoId="QDmTwRaLzHg" title="Server Side Filtering" caption="Server Side Filtering"/>

<<<<<<< HEAD
The preceding video demonstrates how to enable Server Side Filtering, and you can also refer to this [guide](/core-concepts/data-access-and-binding/displaying-data-read/display-data-tables#server-side-searching--filtering) to learn more about Server-Side Searching or Filtering.
=======
The preceding video demonstrates how to enable Server Side Filtering, and you can also refer to this [guide](/reference/widgets/table#server-side-filter) to learn more about Server-Side Searching or Filtering.
>>>>>>> main


**Sample app** for [Server Side Filtering](https://app.appsmith.com/applications/61fbdf232cd3d95ca414b805/pages/6215d4742882606a1df5c695).

## Filter data based on user input

You can implement an external filter for your data that allows users to filter data based on their input. The selected value from the Dropdown can be transmitted to an API/Query through `{{ widgetName.selectedOptionValue }}`.

For instance,if you have a table that displays all the data, and you want to filter the data based on a specific criterion such as gender, you can create a query by adding a WHERE clause that filters the data according to the selected value in a Select widget. The query would resemble something like this:

```javascript
SELECT * FROM users {{Select1.selectedOptionValue !== "all" ? "WHERE gender = '" + Select1.selectedOptionValue + "'": "" }} ORDER BY id LIMIT 100;
```

You can use the query to populate a table widget by setting its Table Data property to `{{fetch_users.data}}`. This displays the filtered data in the table based on the selected value in the Select widget.


**Sample App** for [External Filter - Where Clause](https://app.appsmith.com/applications/61fbdf232cd3d95ca414b805/pages/6200af5c2cd3d95ca414dc78).

## Reset select widget 

When building an application, it's often necessary to reset a widget to its default state. This can be useful when you want to provide users with the ability to clear their selection and start over or if you want to reset the state of the widget after a certain action has been performed.

To reset a widget is by using a button widget and modifying its onClick event with the following code:

```javascript
{{resetWidget("Select1",true)}}
```
This method can be used to reset other types of widgets as well by replacing "Select1" with the appropriate widget name.

**Sample App** for [reset select widget](https://app.appsmith.com/applications/61fbdf232cd3d95ca414b805/pages/6200af5c2cd3d95ca414dc78)

## Properties
Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

### Widget properties
These properties are present in the property pane of the widget. The following table lists all the widget properties.


|        Property        | Description                                                                                                                                    |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |                                                                     
| [**Options**](#options)                           	| Use to set labels and values for different items/options in the list of the dropdown widget. Options must be specified as an array of objects with a label and value property. 	                                    	|
| [**Default Selected Value**](#default-selected-value) 	       	| Sets a default option that's captured as user input unless it's changed by the user.                                                                                           	                                    	|
| **Text**                                 	| Sets the label of the widget.                                                                                                                                                  	                                    	|
| **Position**                             	| Sets the label position of the widget.                                                                                                                                         	                                    	|
| [**Allow Searching**](#default-selected-value)                   	| Makes the dropdown list filterable.                                                                                                                                            	                                    	|
| [**Server Side Filtering**](#default-selected-value) | Enables server-side filtering via an API / Query request. Use this property when the Select widget's Option data is being bound to an API / Query.                             	                                    	|
| [**Required**](/reference/widgets#required)                          	| When turned on, it makes a user input mandatory and disables any form submission until input is made.                                                                             	                                   	|
| [**Tooltip**](/reference/widgets#tooltip)                           	| It sets a tooltip for the widget. You can add hints or extra information about the required input from the user.                                                                        	|
| [**Placeholder**](/reference/widgets#placeholder)                  	| Sets the Placeholder of the dropdown widget.                                                                                                                                      	                                 	|
| [**Visible**](/reference/widgets#visible)                	| Controls widget's visibility on the page. When turned off, the widget won't be visible when the app is published.                                                                	| `{{widget_name.isVisible}}`                  	|
|[**Disabled**](/reference/widgets#disabled)                	| Disables input/selection to the widget. The widget remains visible to the user but user input/selection won't be allowed.                                                     	| `{{widget_name.isDisabled}}`                 	|
| [**Animate Loading**](/reference/widgets)                 	| Controls the widget’s animation on page load.                                                                                                                                    	                                    	|
| [**Height**](/reference/widgets#height)           	| It configures how a widget’s height reacts to content. Learn more about [Height Property changes.                                                                                                                 	                                    	|

### Reference properties
These properties allow you to bind your select widget with any other widget in queries or JS objects.

|        Property         |                                               Description                                                                                  	|   
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| [**filterText**](#filtertext)                     	| The filter text for Server side. filtering                                                                                                                                      `           	|
| **isDisabled**                 	| This property indicates whether the widget is disabled or not.                                                                                                                         	|
| **isVisible**                        	| This property indicates whether the widget is visible or not.                                                                                                                              	|
| [**selectedOptionValue**](#default-selected-value)    	          	| This is the value of the option that's displayed in a Single Select dropdown. It changes if the default value of the dropdown changes or the user selects an option            	|   `{{widget_name.selectedOptionValue}}`  	|
| [**selectedOptionLabel**](#selectedoptionlabel)   	            	| This property indicates label of the selected option.                                                                                                                          `  	|

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

If you are using the Select widget, you may encounter some errors. A list of common errors are included below to assist in troubleshooting these issues.

Common errors:

* `Default value is missing in options. Please update the value` : This error occurs when the Default Selected Value doesn't match any of the values specified in the options property of the widget. Refer to this [guide](/help-and-support/troubleshooting-guide/widget-errors#default-value-is-missing-in-options) to gain a better understanding of this error.

* `Duplicate values found for the following properties, in the array entries, that must be unique -- value`: This error occurs when there are duplicate values in the options property of the Select widget. Refer to this [guide](/help-and-support/troubleshooting-guide/widget-errors#duplicate-values-found) to gain a better understanding of this error.

If you run into any other issues while working with the Select widget, check out the guide on [widget errors guide](/help-and-support/troubleshooting-guide/widget-errors). If your issue isn't covered in the guide, please connect with support@appsmith.com or raise your query on the [Discord Server](https://discord.com/invite/rBTTVJp).


## Further reading

The following resources may come handy as you need to learn new tricks:

* [Data Access and Binding](/core-concepts/data-access-and-binding)
* [Writing Code](/core-concepts/writing-code)


