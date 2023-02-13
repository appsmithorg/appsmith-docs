# Select

Select / Dropdown widget captures user input/s from a specified list of permitted inputs. It offers a simple and intuitive interface for users to select a single option from the list, making it an essential tool for capturing user inputs in various forms and applications. 

<VideoEmbed host="youtube" videoId="zNw1yMwg-aY" title="How to use Select Widget" caption="How to use Select Widget"/>


## Properties
Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

|        Property        	|         Type         	|                                                                                   Description                                                                                  	|              Code Snippet              	|
|:----------------------:	|:--------------------:	|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:	|:--------------------------------------:	|
| [**Options**](#options)                	| Formatting           	| Use to set labels and values for different items/options in the list of the dropdown widget. Options must be specified as an array of objects with a label and value property. 	| NA                                     	|
| [**Default Selected Value**](#default-selected-value) 	| Formatting           	| Sets a default option that's captured as user input unless it's changed by the user.                                                                                           	| NA                                     	|
| **Text**                   	| Formatting                	| Sets the label of the widget.                                                                                                                                                  	| NA                                     	|
| **Position**               	| Formatting                	| Sets the label position of the widget.                                                                                                                                         	| NA                                     	|
| [**Allow Searching**](#default-selected-value)        	| Formatting           	| Makes the dropdown list filterable.                                                                                                                                            	| NA                                     	|
| [**Server Side Filtering**](#default-selected-value) 	| Formatting           	| Enables server-side filtering via an API / Query request. Use this property when the Select widget's Option data is being bound to an API / Query.                             	| NA                                     	|
| **Required**               	| Formatting           	| When turned on, it makes a user input mandatory and disables any form submission until input is made. Learn more about [Required Property](/reference/widgets#required)                                                                           	| NA                                     	|
| **Tooltip**                	| Formatting           	| It sets a tooltip for the widget. You can add hints or extra information about the required input from the user. Learn more about   Tooltip. Learn more about [Tooltip](/reference/widgets#tooltip)                                      	| NA                                     	|
| **Placeholder**            	| Formatting           	| Sets the Placeholder of the dropdown widget. Learn more about [Placeholder](/reference/widgets#placeholder)                                                                                                                                    	| NA                                     	|
| **Visible**                	| Binding & Formatting 	| Controls widget's visibility on the page. When turned off, the widget won't be visible when the app is published. Learn more about [Visible Property](/reference/widgets#visible)                                                               	| `{{widget_name.isVisible}}`                  	|
| **Disabled**               	| Binding & Formatting 	| Disables input/selection to the widget. The widget remains visible to the user but user input/selection won't be allowed. Learn more about [Disable Property](/reference/widgets#disabled)                                                     	| `{{widget_name.isDisabled}}`                 	|
| **Animate Loading**        	| Formatting           	| Controls the widget’s animation on page load. Learn more about [Animate Loading](/reference/widgets)                                                                                                                                   	| NA                                     	|
| **Height**                 	| Formatting           	| It configures how a widget’s height reacts to content. Learn more about [Height Property](/reference/widgets#height)   changes.                                                                                                                 	| NA                                     	|
| [**filterText**](#filtertext)             	| Binding              	| The filter text for Server side filtering                                                                                                                                      	|   `{{widget_name.filterText}}`           	|
| **isDisabled**             	| Binding              	| This property indicates whether the widget is disabled or not.                                                                                                                 	|   `{{widget_name.isDisabled}}`           	|
| **isVisible**             	| Binding              	| This property indicates whether the widget is visible or not.                                                                                                                  	|   `{{widget_name.isVisible}}`            	|
| [**selectedOptionValue**](#default-selected-value)    	| Binding              	| This is the value of the option that's displayed in a Single Select dropdown. It changes if the default value of the dropdown changes or the user selects an option            	|   `{{widget_name.selectedOptionValue}}`  	|
| [**selectedOptionLabel**](#selectedoptionlabel)   	| Binding              	| This property indicates label of the selected option.                                                                                                                          	|   `{{widget_name.selectedOptionLabel}}`  	|
| **Font Color**             	| Style                	| Allows you to set text color for the label.                                                                                                                                    	| NA                                     	|
| **Font Size**              	| Style                	| Allows you to set the size of the label.                                                                                                                                       	| NA                                     	|
| **Emphasis**              	| Style                	| Allows you to choose a font style; bold or italic.                                                                                                                       	| NA                                     	|
| **Border Radius**          	| Style                	| Rounds the corners of the widget's outer edge.                                                                                                                                 	| NA                                     	|
| **Box Shadow**             	| Style                	| Casts a drop shadow from the frame of the widget.                                                                                                                              	| NA                                     	|


## Displaying data

Displaying data in a select widget, is a crucial aspect of creating an interactive user interface. The select widget provides a list of options for the user to choose from and it's important to specify these options to effectively display the data. 

### Options

The Options property in a Select widget is used to specify the available options for the user to choose from. It allows you to set both the label and value for each item in the dropdown list. 

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

### Default selected value

This property allows you to specify a default value when the widget is first displayed. This can be useful if you want to pre-populate the widget with a specific value, or if you want to ensure that a certain option is selected by default. The Default Selected Value should be set to the value of the option from the Options property. 

For example, if your Options property is an array of objects with a **label** and a **value** property, such as
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
If you want the default value to be ```Blue```, set the 'Default Selected Value' property to ```BLUE```.

<VideoEmbed host="youtube" videoId="KP3qdEi4i3w" title="Default selected value" caption="Default selected value"/>


### Data from an API or query

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

## Accessing data
These properties allow you to bind your select widget with any other widget in queries or JS objects.

#### selectedOptionValue

The "selectedOptionValue" in a Select widget is a value that represents the selected option in a  dropdown. It updates when the user selects a new option or the default value changes. 

```javascript
{{widget_name.selectedOptionValue}}
```

#### selectedOptionLabel

The "selectedOptionLabel" in a Select widget represents the label of the selected option in a dropdown. This property is used to display the label of the selected option in the widget and is updated whenever the user selects a different option from the dropdown list or if the default label changes. 

```javascript
{{widget_name.selectedOptionLabel}}
```


## Search and filters

A Dropdown can be used to filter a dataset based on the user's input. The selected value can be passed to an API using `{{ widgetName.selectedOptionValue }}` .


### Allow searching	

The "Allow Searching" property in a Select widget refers to the ability for users to search for a specific option within the dropdown list. When this property is enabled, the Select widget includes a search bar, allowing users to type in the name of the option they're looking for, locate and select it. 

![](/img/Allow-Searching.png)

### filterText	

The filterText is a binding property in a Select widget that allows you to implement server-side filtering of options in the dropdown list. This feature enables you to provide real-time search capability for the user, allowing them to find and select the desired option. 

```javascript
{{widget_name.filterText}}
```

![](/img/filter_text_select.png)

### Server side filtering	

The Select widget has the option to configure server-side filtering, where search queries are sent to the back-end, and responses are used to populate options on the Select widget. When enabling server-side filtering in the widget, please update the default value to contain both `label` and `value` in this format `{"label":<label>, "value": <value>}` if the default value isn't present in the default options.

<VideoEmbed host="youtube" videoId="QDmTwRaLzHg" title="Server Side Filtering" caption="Server Side Filtering"/>

As shown in the Server Side Filtering video, follow these steps:

1. Drag a Select widget onto the canvas.
1. Create a [query](/core-concepts/data-access-and-binding/querying-a-database/) `get_users` that retrieves user data to use in the widget. For example, try working with Appsmith's `users` Postgresql test database. Use the following statement as the query:
  ```sql
  SELECT id, name FROM users ORDER BY id LIMIT 10;
  ```
1. In the Select widget's properties pane, add the query's `data` to the widget's **Options** property. To control how the returned data is structured, use the JS [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) method:
  ```javascript
  {{
    get_users.data.map( user => {
      return { label: user.name, value: user.id }
    })
  }}
  ```
1. Enable the Select widget's **Server Side Filtering** property, and set the **onFilterUpdate** event to execute the query.
  ```javascript
  {{ get_users.run() }}
  ```
  ![](/img/as_select_filtering.png)
1. Now that the widget is configured for server side filtering, update the `get_users` query with a `WHERE` statement that incorporates the filter text from the Select widget:
  ```sql
  SELECT id, name FROM users
  WHERE name LIKE '{{'%'+ Select1.filterText + '%'}}'
  ORDER BY id LIMIT 10;
  ```

In the Select widget's filter field, enter text to narrow the query's results.

![](/img/select_filtered.png)

View the sample app for ([Select Widget - Server Side Filtering](https://app.appsmith.com/applications/61fbdf232cd3d95ca414b805/pages/6215d4742882606a1df5c695)).


### Capturing data in forms

Select widget can be used to capture from a fixed set of options inside a form, such as a gender, role, and status.

:::info
Some forms need to be pre-filled data from a table or API. You can bind the data to the default text property to enable this
:::

```
{{ Table1.selectedRow.gender }}
/**
* Binding this to the default option will update the selected option 
* of the dropdown with the gender of the selected row in Table1
*/
```

[Read more](/core-concepts/data-access-and-binding/capturing-data-write/capture-form-data) about submitting Input data to an API below.

## Events

These are functions that are called when event listeners are triggered in the widget.

| Events             | Description                                                                                                                                    |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **onOptionChange** | The "onOptionChange" property allows you to specify the action that should occur when the user selects an option in the dropdown list. This is an important feature that enables you to capture the user's input and perform specific actions in response.  |
| **onDropdownOpen** | The "onDropdownOpen" property allows you to specify the action that should occur when the user opens the dropdown list. For example, you could use the "onDropdownOpen" event to retrieve data from a database, populate the options in the dropdown list, or display additional information to the user.   |
| **onDropdownClose** | The "onDropdownClose" property allows you to specify the action that should occur when the user closes the dropdown list. For example, you could use the "onDropdownClose" event to store the selected option in a database, hide additional information, or reset the widget to its original state.  |



## Troubleshooting

If you run into any issues while working with select widget, check out this guide on [widget errors guide](/help-and-support/troubleshooting-guide/widget-errors). If you are still facing any issues, please connect with support@appsmith.com or raise your query on [Discord Server](https://discord.com/invite/rBTTVJp).


## Further reading

The following resources may come handy as you need to learn new tricks:

* [Appsmith Framework](/reference/appsmith-framework/)
* [JavaScript Editor](/core-concepts/writing-code/javascript-editor-beta/)


