# Select

This page provides information on the Select widget (*formerly known as dropdown*), that enable users to select a single option from a given list.


## Content properties

These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.

### Data

#### Options `array`

<dd>

Use to set labels and values for options in the list of the select widget. Options must be specified as an array of objects with a `label` and `value` property. The `label` property represents the text that's displayed to the user, while the `value` property is the actual data that's stored and used in your application. For example:


```js
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

You can dynamically generate options by fetching data from queries or JS functions by binding the response to the **Options** property. For example, if you have a query named `fetchData`, you can bind its response using:

```js
{{fetchData.data}}
```

If the retrieved data is not in the desired format, you can use JavaScript to transform the data by adding it to the **Options** property in the select widget. 

*Example:* 

```js
{{fetchData.data.map( user => ({label: user.name, value: user.email}))}}
```

</dd>

#### Default selected value `string`

<dd>

Sets the initial option that is automatically chosen when the widget is loaded. It serves as the default selection unless the user manually selects a different option from the list. For example, if you want the default option to be ```Blue```, set the **Default Selected Value** property to `BLUE`.


</dd>

### Label

#### Text `string`

<dd>

Sets the label of the widget.

</dd>


#### Position `string`

<dd>

Sets the placement of the **Label** in the widget.

*Options*:
- **Left**: The label is placed on the left of the widget.
- **Top**: The label gets placed at the top of the widget.
- **Auto**: The label position is determined based on the height of the widget itself. 

</dd>

#### Alignment `string`

<dd>

Sets the label alignment of the widget when the position selected is **left**.

</dd>

#### Width (in columns) `number`

<dd>

Sets the width of the label in the widget when the **left** position is selected.

</dd>

### Search and filters

#### Allow searching `boolean`

<dd>

Enables searching for specific options within the dropdown list. When this option is enabled, a search input field is displayed in the widget. Additionally, you can control it through JavaScript by clicking on the **JS** next to the property.

</dd>

#### Server side filtering `boolean`

<dd>

Enables server-side filtering via a query request. Use this property when the Select widget's option data is being bound to a query.

</dd>

#### onFilterUpdate `string`

<dd>

Triggers and [action](/reference/appsmith-framework/widget-actions) when you update the filter text. 

</dd>

### Validations

#### Required `boolean`

<dd>

Enabling this property for a select widget makes it a mandatory field, meaning that the user must select a value from the dropdown. When the select widget is placed within a Form widget and the **Required** property is enabled, the Form's submit button remains inactive until a value is selected in the select widget.

</dd>

### General 

#### Visible `boolean`

<dd>

Controls the visibility of the widget. If you turn off this property, the widget is not visible in View mode. Additionally, you can use JavaScript by clicking on **JS** next to the **Visible** property to control the widget's visibility conditionally.

For example,  if you want to make the widget visible only when the user checks an item in a Checkbox widget, you can use the following JavaScript expression in the visible property of the select widget:

```js
{{Checkbox1.isChecked}}
```

</dd>

#### Disabled `boolean`

<dd>

Prevents users from selecting the widget. Even though the widget remains visible, user input is not permitted. Additionally, you can use JavaScript by clicking on **JS** next to the `Disabled` property to control the widget's inactive state conditionally.

For example, if you want to allow only a specific user to interact with the select widget, you can use the following JavaScript expression: 
```js
{{appsmith.user.email=="john@appsmith.com"?false:true}}
```

</dd>


#### Animate Loading `boolean`

<dd>

Controls whether the widget is displayed with a loading animation. When enabled, the widget shows a skeletal animation during the loading process. Additionally, you can control it through JavaScript by clicking on the **JS** next to the property.

</dd>

#### Height `string`

<dd>

This property determines how the widget's height adjusts to changes in its content. There are three available options:

- **Fixed:** The height of the widget remains as set using drag and resize.
- **Auto Height:** The widget's height adjusts dynamically in response to changes in its content.
- **Auto Height with limits:** Same as Auto height, with a configurable option to set the minimum and maximum number of rows the widget can occupy.

</dd>

### Events

#### onOptionChange `string`

<dd>

Allows you to specify the [action](/reference/appsmith-framework/widget-actions) to be executed when the user selects an option in the dropdown list. It enables you to capture the user's input and perform specific actions in response.

</dd>

#### onDropdownOpen

<dd>

Allows you to specify the [action](/reference/appsmith-framework/widget-actions) to be executed when the user opens the dropdown list. For example, you could use the **onDropdownOpen** event to retrieve data from a database, populate the options in the dropdown list, or display additional information to the user.

</dd>


#### onDropdownClose 

<dd>

Allows you to specify the [action](/reference/appsmith-framework/widget-actions) to be executed when the user closes the dropdown list. For example, you could use the "onDropdownClose" event to store the selected option in a database, hide additional information, or reset the widget to its original state.

</dd>

## Style properties

Style properties allow you to change the look and feel of the widget.

### Label styles

#### Font color `string`

<dd>

Allows you to set text color for the label. Additionally, you can programmatically modify the text color using JavaScript functions.

</dd>

#### Font size `string`

<dd>

Allows you to control the size of the label text. Additionally, you can programmatically modify the text size using JavaScript functions.

</dd>

#### Emphasis `string`

<dd>

Allows you to choose a font style; bold or italic. you can programmatically modify the font style using JavaScript functions.

</dd>

### Border and shadow

#### Border radius `string`

<dd>

Applies rounded corners to the outer edge of the widget. If JavaScript is enabled, you can specify valid [CSS border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) to adjust the radius of the corners.

</dd>

#### Box Shadow `string`
 

<dd>

This property adds a drop shadow effect to the frame of the widget. If JavaScript is enabled, you can specify valid [CSS box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) values to customize the appearance of the shadow.

</dd>

## Reference properties

Reference properties enable you to access the widget's data and state using the dot operator in other widgets or JavaScript functions. They provide additional information or allow interaction with the widget programmatically. For instance, to retrieve the visibility status of a select widget, you can use `Select1.isVisible`.

#### filterText `string`

<dd>

Returns the text entered in the search filter for Server side filtering.

*Example:*

```js
{{Select1.filterText}}
```

</dd>

#### isDisabled `boolean`

<dd>

It reflects the state of the widget's Disabled setting. It is represented by a boolean value, where `true` indicates that the widget is inactive, and `false` indicates that it is enabled for user interaction.

*Example:*

```js
{{Select1.isDisabled}}
```

</dd>

#### isVisible `boolean`

<dd>

The `isVisible` property indicates the visibility state of a widget, with true indicating it is visible and false indicating it is hidden.

*Example:*
```js
{{Select1.isVisible}}
```

</dd>

####  isDirty `boolean`

<dd>

This property is a boolean value that indicates whether the user has interacted with the widget. If the user selects an option from the dropdown list, the `isDirty` property returns `true`. However, if the user does not make any selection and the initial value remains unchanged, the `isDirty` property returns `false`.

*Example:*

```js
{{Select1.isDirty}}
```

</dd>

#### options `array`

<dd>

Returns an array of objects that contain the label and value of the options in the dropdown list.

*Example:*

```js
{{Select1.options}}
```

</dd>

#### selectedOptionValue `string`

<dd>

Returns the value of the option displayed in the Select widget. It changes if the default value of the widget changes or the user selects an option.

*Example:*

```js
{{Select1.selectedOptionValue}}
```

</dd>

#### selectedOptionLabel `string`

<dd>

Returns the label of the option displayed in the Select widget. It changes if the default value of the widget changes or the user selects an option.

*Example:*

```js
{{Select1.selectedOptionLabel}}
```

</dd>


## Methods

Widget property setters enable you to modify the values of widget properties at runtime, eliminating the need to manually update properties in the editor.

These methods are asynchronous, and you can use the `.then()` block to ensure execution and sequencing of subsequent lines of code in Appsmith.


#### setVisibility (`:boolean`)

<dd>

Sets the visibility of the widget.

*Example*:

```js
Select1.setVisibility(true)
```

To perform sequential actions, use the `.then()` block for execution.

```js
Select1.setVisibility(true).then(() => {
  // code to be executed after visibility is set
})

```

</dd>


#### setDisabled (`:boolean`)

<dd>

Sets the `disabled` state of the widget.

*Example*:

```js
Select1.setDisabled(false)
```

To perform sequential actions, use the `.then()` block for execution.

```js
Select1.setDisabled(false).then(() => {
  // code to be executed after disabled state is set
})
```

</dd>

#### setOptions (`:array<object>`)

<dd>

Sets the options to be displayed in the widget.

*Example*:

```js
Select1.setOptions([{ label: 'Option 1', value: 'option1' }, { label: 'Option 2', value: 'option2' }])
```

To perform sequential actions, use the `.then()` block for execution.

```js
Select1.setOptions([{ label: 'Option 1', value: 'option1' }, { label: 'Option 2', value: 'option2' }]).then(() => {
  // code to be executed after options are set
})
```

</dd>


#### setRequired (`:boolean`)

<dd>

Sets whether the widget is required or not.

*Example*:

```js
Select1.setRequired(true)
```

To perform sequential actions, use the `.then()` block for execution.

```js
Select1.setRequired(true).then(() => {
  // code to be executed after required state is set
})
```

</dd>




#### setSelectedOption (`:object`)

<dd>

Sets the selected option of the Select widget.

*Example*:

```js
Select1.setSelectedOption({ label: 'Option 2', value: 'option2' })
```

To perform sequential actions, use the `.then()` block for execution.

```js
Select1.setSelectedOption({ label: 'Option 2', value: 'option2' }).then(() => {
  // code to be executed after selected option is set
})
```

</dd>


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
