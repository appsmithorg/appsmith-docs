# Treeselect

This page explains how to use the Treeselect widget to allow users to select a single option from a hierarchical list.


<VideoEmbed host="youtube" videoId="vSqpSssJdws" title="Using Treeselect Widget" caption="Using Treeselect Widget"/>



## Display static options

To display static options in a Treeselect widget, you can use the **Options** property.

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
### Set default value

The **Default Selected Value** property in a widget allows you to specify an initial value for the widget when it's first displayed. This is useful for pre-populating the widget or ensuring that specific options are selected by default. To use this property, set its value to the value of the desired option from the **Options** property.


For example, if you want the default selected option to be `Dark Blue`, you can set the **Default Selected Value** property to: `DARK BLUE`.


## Display options dynamically

You can dynamically generate options by fetching data from queries or JS functions by binding the response to the **Options** property.

---
**Example 1**: suppose you have a database that includes a column for product categories (type), as well as other product details such as its name and description. For instance, you might have a category called `Household` with a product name `Measuring Spoons`. 

1. You can construct a query that retrieves the relevant data and formats it to be used as options, something like:

```sql
SELECT 
  type AS label,
  type AS value,
  JSON_AGG(
    JSON_BUILD_OBJECT(
      'label', (name),
      'value', (name)
    )
  ) AS children
FROM product
GROUP BY type
ORDER BY label;
```
This query groups product names by type and creates a nested JSON object for each type, where the `type` is the parent and the `product names` are the children.
`

2. In the Treeselect **Options** property, display the data using:

```sql
{{fetchData.data}}
```

<figure>
  <img src="/img/fetchData-tree.png" style= {{width:"700px", height:"auto"}} alt="Display options dynamically"/>
  <figcaption align = "center"><i>Display options dynamically</i></figcaption>
</figure>

With this configuration, the Treeselect widget displays a list of unique products directly from the query. 

It is recommended to retrieve the data in a structured format directly from the query, as it simplifies the configuration when displaying the options in the Treeselect widget.


---
**Example 2**: if the data retrieved from the query is not in the desired format, you can use JavaScript to transform it before passing it to the Treeselect widget. In the same product example where you have a list of products with their name and type: 

1. You can use a SELECT query to fetch the data from the database.

```sql
SELECT type, name FROM product LIMIT 10;
```
2. Use JavaScript to transform the data in the **Options** property.

```js
{{ getdata.data.reduce((acc, cur) => {
  const group = acc.find(item => item.value === cur.type);
  group ? group.children.push({ label: cur.name, value: cur.name }) : acc.push({ label: cur.type, value: cur.type, children: [{ label: cur.name, value: cur.name }] });
  return acc;
}, []) }}
```

This code takes an array of products and creates a nested data structure that groups the products by their type, making it easier to display them in a hierarchical view.



<figure>
  <img src="/img/tree-js-3.png" style= {{width:"700px", height:"auto"}} alt="Display options dynamically"/>
  <figcaption align = "center"><i>Transform data using JavaScript</i></figcaption>
</figure>




## Access selected option

If you want to retrieve the selected value from a Treeselect widget and bind them to other widgets or JavaScript functions, you can use the following properties:


* **selectedOptionValue**: This property returns the value of the selected option in the Treeselect widget. 

* **selectedOptionLabel**: This property returns the label of the selected option in the Treeselect widget.

Both properties, `selectedOptionValue` and `selectedOptionLabel`, update automatically when the user selects or deselects a new option in the Treeselect widget.

---
**Example**: suppose you want to filter the table data based on the user-selected product name or type from a Treeselect widget.

1. Create a new query called `filterproducts` and add a SQL statement to select all the data from the products table where the type/name column matches the selected options from a Treeselect widget.

```sql
SELECT * FROM product
WHERE type = '{{TreeSelect.selectedOptionValue}}' OR name = '{{TreeSelect.selectedOptionValue}}';
```
:::info
When using dynamic binding with queries that contain SQL keywords such as `SELECT`,`WHERE`, `AND`, and other keywords, a [prepared statement](/learning-and-resources/how-to-guides/how-to-use-prepared-statements#when-not-to-use-prepared-statements-in-appsmith) cannot be used. Therefore, it is recommended to turn off the prepared statement in the `filterproducts` query for the Treeselect widget.
:::

2. Display the data by binding the query response to the **Table Data** property of the Table widget `tblUserData`, as shown below:

```js
{{filterproducts.data}}
```

3. Set the `onOptionChange` event of the Treeselect widget to run the `filterproducts` query. This updates the displayed data in real time as the user selects or deselects options.

<figure>
  <img src="/img/tree-access.gif" style= {{width:"700px", height:"auto"}} alt="Display options dynamically"/>
  <figcaption align = "center"><i>Access selected option</i></figcaption>
</figure>

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
| **selectedOptionLabel** | String| This is the Label of the option displayed in a Treeselect dropdown. This label changes if the default value of the dropdown changes or the user changes an option selection. |
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
