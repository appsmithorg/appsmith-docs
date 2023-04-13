# Multi-tree-select

The multi-tree-select widget captures the user input from a specified list of permitted options, and these options can have child options within them. It captures multiple choices.

<VideoEmbed host="youtube" videoId="XaaFY0grXjE" title="How to use Multi-tree-select Widget" caption="How to use Multi-tree-select Widget"/>

### Displaying Data

Multi-tree-select's options can be populated from a data source like an API / Query by transforming the incoming data to an array of (label, value). The transformation can be performed using JavaScript. So if the data is an array, you can transform it using the [**Array.map**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/TypedArray/map) function.

```
// Query1.data is assumed to be an array here
{{ Query1.data.map((row) => {
      return { label: row.name, value: row.id, children: {label: row.child.label, value: row.child.value}
   })
}}
```

### Filtering Data

A Multi-tree-select widget can filter a dataset based on the user's input. The selected value can be passed to an API using `{{ MultiTreeSelect1.selectedOptionValues }}` .

### **Form submission**

The multi-tree-select widget can capture from a fixed set of options inside a form such as a gender, role, and status.

:::info
Some forms need to be pre-filled data from a table or API. You can bind the data to the default text property to enable this.
:::

```
{{ Table1.selectedRow.categories }}
/**
* Binding this to the default option will update the selected options
* of the MultiTreeSelect widget with the gender of the selected row in Table1
*/
```

Read more about submitting Input data to an API below.

[Sending widget data in the post body](../../core-concepts/data-access-and-binding/capturing-data-write/capture-form-data.md)

## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

### Widget properties

These properties allow you to edit the Muti-tree select widget. All these properties are present in the property pane of the widget. The following table lists all the widget properties.

| Property                  | Description                                                                                                                                                                                                                |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Mode**                  | Mode to display options.                                                                                                                                                                                                   |
| **Options**               | It lets you set labels and values for different items/options in the list of the multi-select widget. Options must be specified as an array of objects with a label and value property and the optional children property. |
| **Default Value**         | Sets a default option that is captured as user input unless the user changes it. Multiple values can be provided as CSV or an array of value strings for a Multi-Select dropdown.                                     |
| **Placeholder**           | Sets the Placeholder of the multi-select widget.                                                                                                                                                                           |
| **Required**              | When turned on, it makes a user input required and disables any form submission until input is made.                                                                                                                       |
| **Visible**               | Controls widget's visibility on the page. When turned off, the widget isn't visible when the app is published.                                                                                                       |
| **Disabled**              | Disables input/selection to the widget. The widget remains visible to the user but user input/selection isn't allowed.                                                                                           |
| [**Tooltip**](/reference/widgets#tooltip)                           	| It sets a tooltip for the widget. You can add hints or extra information about the required input from the user.      
| **Animate Loading**       | Control’s widget’s loading animation on the page. When turned off, the widget loads without any skeletal animation. This can be controlled with JS until all the widgets are rendered.                                 |
| **Clear All Selections**  | When turned on, it allows users to clear the selection which was the default or the selection made by them.                                                                                                                |
| **Expand all by default** | It shows a dropdown in an expanded state when turned on, revealing all the children options.                                                                                                                               |
| [**Height**](./README.md#height)        | It configures how a widget’s height reacts to content changes. It has three possible configurations:<br/>**Fixed**: The height of the widget remains as set using drag and resize.<br/>**Auto Height**: The height of the widget reacts to content changes.<br/>  **Auto Height with limits**: Same as Auto height, with a configurable option to set the minimum and maximum number of rows that can be occupied by the widget.                                      |


### Binding properties

These properties allow you to bind your widget with any other widget in queries or JS objects. The following table lists all the binding properties.

| Property                 | Description                                                                                                                                                                              |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **options**              | This property shows the values of all the options.                                                                                                                                       |
| **isVisible**            | This property indicates whether the widget is visible or not.                                                                                                                            |
| **isDisabled**           | This property indicates whether the widget is disabled or not.                                                                                                                           |
| **isValid**              | This property indicates whether the values are valid or not.                                                                                                                             |
| **selectedOptionValues** | An array of values of the options are displayed in a MultiTree-Select dropdown. This value changes if the default values of the dropdown change or the user changes an option selection. |
| **selectedOptionLabels** | An array of Labels of the options are displayed in a MultiTree-Select dropdown. This label changes if the default values of the dropdown change or the user changes an option selection. |

### Events

They're a set of actions that you can perform on the widget. The following table lists the actions:

| Events             | Description                                                                                                                                    |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **onOptionChange** | Sets the action to be run when the user selects/unselects an option. See a list of [supported actions](../appsmith-framework/widget-actions/). |
| **onDropdownOpen** | Sets the action to be run when the user opens the dropdown. See a list of [supported actions](../appsmith-framework/widget-actions/). |
| **onDropdownClose** | Sets the action to be run when the user opens the dropdown. See a list of [supported actions](../appsmith-framework/widget-actions/). |

### Label

The property hosts a group of configurations that you can use to associate a display name and define a placement for the widget. These properties are usually useful when you want to design forms that follow a defined alignment for your form fields and give a professional look to your forms. Below are the properties that you can use:

| Label         | Description                                                                                                        |
| ------------- | ------------------------------------------------------------------------------------------------------------------ |
| **Text**      | It's a group of properties that allows you to provide a name to the field and define the placement of the widget. |
| **Position**  | Sets the label position of the widget.                                                                             |
| **Alignment** | Sets the label alignment of the widget.                                                                            |
| **Width**     | Sets the label width of the widget as the number of columns.                                                       |

Let's understand these properties in detail:

#### Text

It allows you to set the display name for the Multi-tree-select widget. For example, if you want the user to add multiple categories, you can enter the text as "Categories."

:::tip
You can leave the text empty if you don't want any display name for your Multi-tree-select widget.
:::

#### Position

It allows you to specify the placement of the label. You can select one of the available options:

* Top - It allows you to align the text at the top of the Multi-tree-select widget.
* Left - It aligns the text to the left of the Multi-tree-select. When you select **Left** alignment, you get additional settings that you can use to control the alignment and define the text's width.
  * Alignment - With the help of alignment, you can define the placement of the text in accordance with the position of the Multi-tree-select widget. You can choose:
    * Left - It aligns the text to the widget's left boundary that's away from the Multi-tree-select widget.
    * Right - It aligns the text closer to the Multi-tree-select widget.
  * Width - With the help of width, you can define the **number of columns** in the **grid** that surrounds the widget. You can specify how close or far the text can be placed to the Multi-tree-select widget.
* Auto - It automatically adjusts the position of the text based on the Multi-tree-select widget's height.

:::info
Columns are the dashed lines (-----) that surround a widget when you try to drag and drop it on the canvas.
:::

<VideoEmbed host="youtube" videoId="g6IIejdNmfU" title=" How to set the label properties?" caption=" How to set the label properties?"/>

### Styles

Style properties allow you to change the look and feel of the widget.

| Styles               | Description                                              |
| -------------------- | -------------------------------------------------------- |
| **Border Radius**    | Allows you to define curved corners.                     |
| **Box Shadow**       | Allows you to choose from the available shadow styles.   |
| **Label Text Color** | Allows you to set text color for the label.              |
| **Label Text Size**  | Allows you to set the size of the label.                 |
| **Label Font Style** | Allows you to choose a font style, that's,  bold or italic. |
