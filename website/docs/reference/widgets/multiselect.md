# Multiselect

This document explains how to use a multi-select widget to allow users to select multiple options from a predetermined list.


<VideoEmbed host="youtube" videoId="oH7Y-vSMIgM" title="How to use Multiselect" caption="How to use Multiselect"/>

## Display options manually

To manually display options in a Multiselect widget, you can use the **Options** property. The Options property is used to specify the available options for the user to choose from. It allows you to set both the label and value for each item in the dropdown list. 

The options must be specified as an array of objects, where each object has two properties: `label` and `value`. The `label` property represents the text that's displayed to the user, while the `value` property is the actual data that's stored and used in your application. For example:

```json
[
  {
    "label": "Blue",
    "value": "BLUE"
  },
  {
    "label": "Green",
    "value": "GREEN"
  },
  {
    "label": "Red",
    "value": "RED"
  }
]
```

## Display options dynamically 

Instead of creating a predetermined set of options, you can dynamically generate options by fetching data from queries or JS functions by binding the response to the **Options** property.


---
**Example:** suppose you want to get a list of countries based on data stored in a database. 

1.  Fetch data from the [sample database](https://docs.appsmith.com/core-concepts/connecting-to-data-sources/connecting-to-databases#sample-databases) `users` using a SELECT query `fetchData` to retrieve unique country values.

```sql
SELECT DISTINCT country FROM users;
```

This query retrieves only unique country values from the "users" table and is used to generate the options for the Multiselect widget dynamically.

2. Next, lets use JavaScript to **transform the data** by adding it to the **Options** property.

```js
{{fetchData.data.map( p => ({label: p.country, value: p.country}))}}
```

The code uses the `map()` function to transform each item in the `fetchUserData` array to an object with `label` and `value` properties, both set to the `country` value of each object in the array.

## Set default values in options

The **Default Selected Values** property in a widget allows you to specify an initial value for the widget when it's first displayed. This is useful for pre-populating the widget or ensuring that a specific options are selected by default. To use this property, set its value to the value of the desired option from the **Options property**. 

For example, if you want the default selected values to be `RED` and `GREEN,` you can set the **Default Selected Values** property to:

```json
[
  "GREEN",
  "RED"
]
```

## Access selected option
These properties allow you to bind your Multiselect widget with any other widget in queries or JS objects.

* The **selectedOptionValue** in a Multiselect widget is a value that represents the selected option in a dropdown. It updates when the user selects a new option or the default value changes. 

* The **selectedOptionLabel** in a Multiselect widget represents the label of the selected option in a dropdown. It is used to display the label of the selected option in the widget and is updated whenever the user selects a different option from the dropdown list or if the default label changes.

---
**Example**: suppose you want to filter data based on 


## Server side filtering	

The Multiselect widget has the option to configure server-side filtering, where search queries are sent to the back-end, and responses are used to populate options on the Multiselect widget. You can implement server-side filtering of options in the Multiselect widget by using the `filterText` binding property.

The **filterText** is a binding property in a Multiselect widget that allows you to implement server-side filtering of options in the dropdown list. When enabling server-side filtering in the widget, please update the default value to contain both `label` and `value` in this format `{"label":<label>, "value": <value>}` if the default value isn't present in the default options.

You can also configure the `onFilterUpdate` event can be configured to handle server-side filtering in the Multiselect widget. It's triggered when the user types in the search bar and provides the search query as an argument. You can use this query to update the options displayed in the widget based on the server response.


## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.


### Widget properties

These properties allow you to edit the widget. All of these properties are present in the property pane of the widget.

|  Property   | Data type |  Description                                                                                                                                                                      |
| -----------------| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Options**          | Array     | Sets the labels and values for different items/options in the list of the multi-select widget. Options must be specified as an array of objects with a label and value property.  |
| **Default Value**      | Array     | Sets a default option that is captured as user input unless it is changed by the user. Multiple values can be provided as CSV or an array of strings for a Multi-Select dropdown. |
| **Placeholder**         | String  | Sets the Placeholder of the multi-select widget.                                                                                                                                       |
| **Required**        | Boolean       | When turned on, it makes a user input required and disables any form submission until input is made.                                                                                   |
| **Visible**         | Boolean       | Control widget's visibility on the page. When turned off, the widget isn't visible when the app is published                                                                    |
| **Disabled**       | Boolean        | Disables input/selection to the widget. The widget is visible to the user but user input/selection is not allowed.                                                       |
| **Tooltip**         | String                  	| It sets a tooltip for the widget. You can add hints or extra information about the required input from the user.      
| **Animate Loading**   | Boolean     | Allows you to control a widget’s animation on the page load.                                                                                                                           |
| **Server Side Filtering** | Boolean| Enables server-side filtering via an API / Query request. Use this property when your Select option data is being bound to an API / Query.                                             |
| **Allow Select All**     | Boolean  | Controls the visibility of `select all` option in the dropdown.                                                                                                                        |
| **Height**     | String  | It configures how a widget’s height reacts to content changes. It has three possible configurations:<br/>**Fixed**: The height of the widget remains as set using drag and resize.<br/>**Auto Height**: The height of the widget reacts to content changes.<br/>  **Auto Height with limits**: Same as Auto height, with a configurable option to set the minimum and maximum number of rows that can be occupied by the widget.                                      |
| **Text**      | String | Sets the Placeholder of the multi-select widget.             |
| **Position**  | String | Sets the label position of the widget.                       |
| **Alignment** | String | Sets the label alignment of the widget.                      |
| **Allow Searching**   | Boolean   | Makes the dropdown list filterable. |
| **Width**      | Number| Sets the label width of the widget as the number of columns.  |



### Reference properties

These properties allow you to bind your select widget with any other widget in queries or JS objects. For instance, you can use `MultiSelect1.isVisible` to get the visibility status.

| Reference Property | Data type | Description                                                                                                                                                    |
| ----------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **filterText**     | String      | The filter text for Server side filtering                                                                                                                                           |
| **isVisible**     | Boolean       | This property indicates whether the widget is visible or not.                                                                                                                       |
| **isDisabled**     | Boolean      | This property indicates whether the widget is disabled or not.                                                                                                                      |
| **options**        | Array      | This property shows the values of all the options.                                                                                                                                  |
| **selectedOptionLabels** | Array | An array of Labels of the options are displayed in a Multi-Select dropdown. This label changes if the default values of the dropdown change or the user changes an option selection |
| **selectedOptionValues** | Array  | An array of values of the options are displayed in a Multi-Select dropdown. This value changes if the default values of the dropdown change or the user changes an option selection |
| **isDirty** | Boolean | Indicates whether the multi-select widget has been used by the end user during their session. |
| **isValid** | Boolean | This property indicates whether the widget is valid or not.	 |

### Style properties

Style properties allow you to change the look and feel of the widget. All of these properties are present in the property pane of the widget.

|  Property   | Data type |  Description                                                                                                                                                                      |
| -----------------| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Label Text Color** | String| Allows you to set text color for the label.              |
| **Label Text Size**  | String| Allows you to set the size of the label.                 |
| **Emphasis** | String| Allows you to choose a font style (bold or italic). |
| **Border Radius**    | String| Allows you to define curved corners.                     |
| **Box Shadow**       | String | Allows you to choose from the available shadow styles.   |



## Events

When the event is triggered, these event handlers can run queries, JS code, or other supported [actions](/reference/appsmith-framework/widget-actions)

| Events             | Description                                                                                                                                    |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **onOptionChange** | Sets the action to be run when the user selects/unselects an option. |
| **onDropdownOpen** | Sets the action to be run when the user opens the dropdown. |
| **onDropdownClose** | Sets the action to be run when the user opens the dropdown. |
| **onFilterUpdate** | Triggers an action on change of `filterText` |

