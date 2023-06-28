# Select

This page explains how to use a Select widget(*formerly known as dropdown*) to allow users to select single option from a given list.

<VideoEmbed host="youtube" videoId="zNw1yMwg-aY" title="Using the Select Widget" caption="Using the Select Widget"/>



## Display static options

To display static options in a Select widget, you can use the **Options** property.

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

### Set default value

The **Default Selected Value** property in a widget allows you to specify an initial value for the widget when it's first displayed. This is useful for pre-populating the widget or ensuring that a specific option is selected by default. To use this property, set its value to the value of the desired option from the Options property. 

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
For example, if you want the default option to be ```Blue```, set the **Default Selected Value** property to ```BLUE```.


## Display options dynamically 

You can dynamically generate options by fetching data from queries or JS functions by binding the response to the **Options** property.


---
**Example 1:** suppose you want to use a Select widget to allow users to select one country from a database, with the dynamic population of options.


1.  Fetch data from the sample **users** database using a SELECT query `fetchData` to retrieve distinct country values as `label` and `value`:


```sql
SELECT DISTINCT country as label, country as value FROM users;
```

2. In the Select **Options** property, display the data using:

```js
{{fetchData.data}}
```

With this configuration, the Select widget displays a list of unique country values directly from the query. It is recommended to retrieve the data in a structured format directly from the query, as it simplifies the configuration when displaying the options in the Select widget.

---
**Example 2:** if the data retrieved from the query is not in the desired format, you can use JavaScript to transform it before passing it to the Select widget. 

1. Use the `users` table in the sample database and fetch the unique country values using the following `getdata` SQL query:

```sql
SELECT DISTINCT country FROM users;
```

This query retrieves unique country values from the `users` table. The retrieved data is in the form of an array of objects, where each object has a country `key`.

2. Use JavaScript to **transform the data** by adding it to the **Options** property.

```js
{{getdata.data.map( p => ({label: p.country, value: p.country}))}}
```

The code transforms each item in the `getdata` array by using the `map()` function to create a new object with a `label` and `value` property, both set to the country value of each object in the array.


## Access selected option
These properties allow you to bind your select widget with any other widget in queries or JS objects.

* **selectedOptionValue**: This property returns the value of the selected option in the Select widget.

* **selectedOptionLabel**: This property returns the label of the selected option in the Select widget.

Both properties, `selectedOptionValue` and `selectedOptionLabel`, update automatically when the user selects or deselects a new option in the Select widget.

---
**Example**: suppose you want to filter the table data based on the user-selected country from a Select widget. 

1. Create a new query called `filterdata` and add a SQL statement to select all the data from the `users` table where the `country` column matches the selected option from a Select widget. 

```sql
SELECT *
FROM users
WHERE country IN ({{Select1.selectedOptionValue}})
LIMIT 10;
```

2. Display the data by binding the query response to the **Table Data** property of the Table widget `tblUserData`, as shown below:

```js
{{filterdata.data}}
```

3. Set the `onOptionChange` event of the Select widget to run the `filterdata` query. This updates the displayed data in real-time as the user selects or deselects option.


<figure>
  <img src="/img/select-access.gif" style= {{width:"800px", height:"auto"}} alt="Display images on table row selection"/>
  <figcaption align = "center"><i>Access selected option</i></figcaption>
</figure>



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


### Events

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

