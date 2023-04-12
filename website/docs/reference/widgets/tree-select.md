# Treeselect

This document explains how to use a Treeselect widget to allow users to select single option from a hierarchical list of predetermined options. 

<VideoEmbed host="youtube" videoId="vSqpSssJdws" title="Using Treeselect Widget" caption="Using Treeselect Widget"/>



## Display options manually

To manually display options in a Treeselect widget, you can use the **Options** property. The Options property is used to specify the available options for the user to choose from. It allows you to set both the label and value for each item in the dropdown list.

To display data, options must be specified as an array of objects. Each object represents an option and must include a `label` and a `value`. If the option has **child** options, the object must also include a `children array` containing the child options in the same format.

```js
[
  {
    "label": "Blue",
    "value": "BLUE",
    "children": [
      {
        "label": "Dark Blue",
        "value": "DARK BLUE"
      },
      {
        "label": "Light Blue",
        "value": "LIGHT BLUE"
      }
    ]
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

Instead of creating a predetermined set of options, you can dynamically generate options by fetching data from queries or JS functions by binding the response to the Options property.

For example, suppose you have a database of device assets with different categories of products and their make, such as `laptop` with the make `Opela`. You can create a query that fetches data in the desired format and bind it to the **Options** property of a Treeselect widget.

<figure>
  <img src="/img/ASSET-TREESELECT.png" style= {{width:"700px", height:"auto"}} alt="Display options dynamically"/>
  <figcaption align = "center"><i>Display options dynamically</i></figcaption>
</figure>




### Transform data using JavaScript

If the data retrieved from the query is not in the desired format, you can use JavaScript to transform it before passing it to the Treeselect widget.

---
**Example**: suppose you want to use a Treeselect widget to filter table data based on country and gender. For instance, selecting "Canada" as the parent option and "male" as the child option would display information on all Canadian males.

1. Fetch data from the [sample database](core-concepts/connecting-to-data-sources/connecting-to-databases#sample-databases) `users` using a SELECT query `fetchData` to retrieve distinct country values:

```sql
SELECT DISTINCT country FROM users LIMIT 10;
```
2. Next, lets use JavaScript to **transform the data** by adding it to the **Options** property.

```js
{{fetchData.data.map( p => ({
      label: p.country,
      value: p.country,
      children: [
        {label: "Male", value: `Male_${p.country}`},
        {label: "Female", value: `Female_${p.country}`}
      ]
   }))
}}
```

The JavaScript code transforms data into a specific format required by the Treeselect widget. It maps through `fetchData` data and creates an array of objects, where each object represents a country with two child options for `Male` and `Female`.

<figure>
  <img src="/img/tree-select.png" style= {{width:"700px", height:"auto"}} alt="Display options dynamically"/>
  <figcaption align = "center"><i>Transform data using JavaScript</i></figcaption>
</figure>



## Set default value in option

The **Default Selected Value** property in a widget allows you to specify an initial value for the widget when it's first displayed. This is useful for pre-populating the widget or ensuring that a specific options are selected by default. To use this property, set its value to the value of the desired option from the **Options** property.

```js
[
  {
    "label": "Blue",
    "value": "BLUE",
    "children": [
      {
        "label": "Dark Blue",
        "value": "DARK BLUE"
      }
    ]
  },
  {
    "label": "Green",
    "value": "GREEN"
  }
]
  ```

For example, if you want the default selected values to be `Dark Blue`, you can set the **Default Selected Value** property to: `DARK BLUE`.


## Access selected option

If you want to retrieve the selected values from a Treeselect widget and bind them to other widgets or JavaScript objects, you can use the following properties:

* **selectedOptionValue**: This property returns the value of the selected option in the Treeselect widget. It updates automatically when the user selects a new option.

```javascript
{{widget_name.selectedOptionValue}}
```

* **selectedOptionLabel**: This property returns the label of the selected option in the Treeselect widget.

```javascript
{{widget_name.selectedOptionLabel}}
```

## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.


### Widget properties

These properties allow you to edit the Modal widget. All of these properties are present in the property pane of the widget.

|  Property   | Data type |  Description                                                                                                                                                                      |
| -----------------| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Options**         | Array	        | It lets you set labels and values for different items/options in the list of the tree select widget. Options must be specified as an array of objects with a label and value property. The tree structure can be added to any option by adding the children field that should be an object. |
| **Default Value**   | String        | Sets a default option that is captured as user input unless the user changes it.                                                                                                                                                                                                       |
| **Placeholder**     | String        | Sets the Placeholder of the Treeselect widget.                                                                                                                                                                                                                                            |
| **Required**      | Boolean          | When turned on, it makes a user input required and disables any form submission until the user makes an input.                                                                                                                                                                              |
| **Visible**       | Boolean          | Controls widget's visibility on the page. When turned off, the widget isn't visible when the app is published                                                                                                                                                                         |
| **Disabled**       | Boolean         | Disables input/selection to the widget. The widget remains visible to the user but user input/selection is not allowed.                                                                                                                                                            |
| **Tooltip**         | String                   	| It sets a tooltip for the widget. You can add hints or extra information about the required input from the user.      
| **Animate Loading**    | Boolean     | Control’s widget’s loading animation on the page. When turned off, the widget loads without any skeletal animation. This can be controlled with JS until all the widgets are rendered.                                                                                                  |
| **Allow Clearing Value**  | Boolean  | When turned on, it allows users to clear the selection, which was the default or the selection made by them.                                                                                                                                                                                |
| **Expand all by default**  | Boolean | It shows a dropdown in an expanded state when turned on, revealing all the children options.                                                                                                                                                                                                |
| **Height**      | String   | It configures how a widget’s height reacts to content changes. It has three possible configurations:<br/>**Fixed**: The height of the widget remains as set using drag and resize.<br/>**Auto Height**: The height of the widget reacts to content changes.<br/>  **Auto Height with limits**: Same as Auto height, with a configurable option to set the minimum and maximum number of rows that can be occupied by the widget.                                      |
| **Text**      | String  | Sets the label of the widget.                                |
| **Position**   | String | Sets the label position of the widget.                       |
| **Alignment**  | String | Sets the label alignment of the widget.                      |
| **Width**      | Number | Sets the label width of the widget as the number of columns. |


### Reference properties

These properties can be referenced in other widgets, queries, or JS functions using the dot operator. For instance, you can use `TreeSelect1.isVisible` to get the visibility status.

| Reference Property | Data type | Description                                                                                                                                                    |
| ----------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **selectedOptionValue** | String| This is the value of the option displayed in a Single Select dropdown. It changes if the default value of the dropdown changes or the user selects an option.                 | 
| **selectedOptionLabel** | String| This is the Label of the option displayed in a Tree-Select dropdown. This label changes if the default value of the dropdown changes or the user changes an option selection. |
| **isDisabled**         | Boolean | This property indicates whether the widget is disabled or not.                                                                                                                | 
| **isValid**            | Boolean | This property indicates whether the widget is valid or not.                                                                                                                   | 
| **isVisible**          | Boolean | This property indicates whether the widget is visible or not.                                                                                                                 | 
| **options**          | Array | This property shows the values of all the options.
                                                                                        


### Style properties

Style properties allow you to change the look and feel of the widget. All of these properties are present in the property pane of the widget.

|  Property   | Data type |  Description                                                                                                                                                                      |
| -----------------| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Border Radius**    | String| Allows you to define curved corners.                     |
| **Box Shadow**       | String| Allows you to choose from the available shadow styles.   |
| **Emphasis** | String| Allows you to choose a font style (bold or italic). |
| **Font Color** | String| Allows you to set text color for the label.              |
| **Font Size** | String | Allows you to set the size of the label.                 |


## Events

When the event is triggered, these event handlers can run queries, JS code, or other supported [actions](/reference/appsmith-framework/widget-actions)

| Events             | Description                                                                                                                 |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| **onOptionChange** | Triggers an action when a user selects an option.  |
| **onDropdownOpen** | Sets the action to be run when the user opens the dropdown.  |
| **onDropdownClose** | Sets the action to be run when the user opens the dropdown.  |
