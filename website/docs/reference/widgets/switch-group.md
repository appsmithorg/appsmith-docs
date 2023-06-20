# Switch Group

Switch group widget captures user inputs from a set of binary choices. This widget captures multiple choices.

<VideoEmbed host="youtube" videoId="p--j-QyBlAY" title="How to use Switch Group Widget" caption="How to use Switch Group Widget"/>

### Displaying Data

Switch group’s **options** can be populated from a data source like an API / Query by transforming the incoming data to an array of \\(label, value\\). The transformation can be performed using JavaScript. So if the data is an array, you can transform it using the [**Array.map**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/TypedArray/map) function.

```
// Query1.data is assumed to be an array here
{{ Query1.data.map((row) => {
      return { label: row.name, value: row.id }
   })
}}
```

### Filtering Data

A Switch Group widget can show a set of binary choices for users. The selected values can be passed to an API using `{{ SwitchGroup1.selectedValues }}`.

### **Form submission**

Switch group widgets can capture a fixed set of choices for the user like, showing, and hiding or enabling and disabling.

:::info
Some forms need to be pre-filled data from a table or API. You can bind the data to the default text property to enable this.
:::

```
{{Table1.selectedRow.subscription_choices}}
/**
* Binding this to the default option will update the selected choices
* of the Switch group widget with the subscription_choices of the selected row in Table1
*/
```

Read more about submitting Input data to an API below.

[Sending widget data in the post body](../../core-concepts/data-access-and-binding/capturing-data-write/capture-form-data.md)

## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

### Widget properties

These properties allow you to edit the widget. All these properties are present in the property pane of the widget. The following table lists all the widget properties.

| Property                    | Description                                                                                                                                                                                |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Placeholder**             | Sets the Placeholder of the multi-select widget.                                                                                                                                           |
| **Default Selected Values** | Sets a default option that captures the user input unless it is changed by the user. Multiple values can be provided as CSV or an array of value strings.                           |
| **Inline**                  | Whether the checkbox buttons are to be displayed inline horizontally.                                                                                                                      |
| **Required**                | Makes input of the widget mandatory.                                                                                                                                                       |
| **Visible**                 | Control widget's visibility on the page. When turned off, the widget isn't visible when the app is published                                                                        |
| **Disabled**                | Disables input/selection to the widget. The widget remains visible to the user, but user input/selection is not allowed.                                                          |
| **Animate Loading**         | Control’s widget’s loading animation on the page. When turned off, the widget loads without any skeletal animation. This can be controlled with JS until all the widgets are rendered. |
| **Alignment**               | Controls the switch alignment on the page. Switches can be left or right-aligned.                                                                                                          |
| [**Height**](/reference/widgets/#height)        | It configures how a widget’s height reacts to content changes. It has three possible configurations:<br/>**Fixed**: The height of the widget remains as set using drag and resize.<br/>**Auto Height**: The height of the widget reacts to content changes.<br/>  **Auto Height with limits**: Same as Auto height, with a configurable option to set the minimum and maximum number of rows that can be occupied by the widget.                                      |

### Binding properties

These properties help you share values between widgets and also allow you to easily access the widget property within Queries or JS functions

| Property            | Description                                                                                                                                                              | Code Snippet                     |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- |
| **Selected Values** | An array of values of the options that are selected in a switch group. This value changes if the default values of the switch group change or the user changes a switch. | `{{widget_name.selectedValues}}` |

### **Events**

They are a set of actions that you can perform on the widget. The following table lists the actions:

|                       | Description                                                                                                                                            |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **onSelectionChange** | Sets the action to be run when the user turns any of the switches on or off. See a list of [supported actions](../appsmith-framework/widget-actions/). |

### Label

The property hosts a group of configurations that you can use to associate a display name and define a placement for the widget. These properties are usually useful when you want to design forms that follow a defined alignment for your form fields and give a professional look to your forms. Below are the properties that you can use:

| Label         | Description                                                  |   |
| ------------- | ------------------------------------------------------------ | - |
| **Text**      | Sets the label of the widget.                                |   |
| **Position**  | Sets the label position of the widget.                       |   |
| **Alignment** | Sets the label alignment of the widget.                      |   |
| **Width**     | Sets the label width of the widget as the number of columns. |   |

Let's understand the label properties in detail:

#### **Text**

It allows you to set the display name for the Switch Group. For example, if you want the user to select a payment option, you can enter the text as "Payment Options."

:::info
You can leave the text empty if you don't want any display name for your Switch Group widget.
:::

#### **Position**

It allows you to specify the placement of the label. You can select one of the available options:

* Top - It allows you to align the text at the top of the Switch Group.
* Left - It aligns the text to the left of the Switch Group. When you select **Left** alignment, you get additional settings that you can use to control the alignment and define the text's width.
  * Alignment - With the help of alignment, you can define the placement of the text in accordance with the position of the Switch Group. You can choose:
    * Left - It aligns the text to the widget's left boundary that is away from the Switch Group.
    * Right - It aligns the text closer to the Switch Group.
  * Width - With the help of width, you can define the **number of columns** in the **grid** that surrounds the widget. You can specify how close or far the text can be placed to the Switch Group.
* Auto - It automatically adjusts the position of the text based on the Switch Group's height.

:::info
Columns are the dashed lines (-----) that surround a widget when you try to drag and drop it on the canvas.
:::

<VideoEmbed host="youtube" videoId="mXkHx0W-xdM" title="How to set the label properties?" caption="How to set the label properties?"/>

### Styles

Style properties allow you to change the look and feel of the widget.

| Style                | Description                                              |
| -------------------- | -------------------------------------------------------- |
| **Label Text Color** | Allows you to set text color for the label.              |
| **Label Text Size**  | Allows you to set the size of the label.                 |
| **Label Font Style** | Allows you to choose a font style (bold or italic). |
| **Accent color**     | Sets the background color of the widget.                 |

## Methods

Widget property setters enable you to modify the values of widget properties at runtime, eliminating the need to manually update properties in the editor.

These methods are asynchronous, and users have the option to either await them or use the `.then()` block to ensure appsmith reactivity is maintained for subsequent lines of code.


#### setVisibility `boolean`

<dd>

Sets the visibility of the widget.

*Example*:

```js
SwitchGroup1.setVisibility(true)

//For appsmith reactivity, await the setter method or use the `.then()` block.
SwitchGroup1.setVisibility(true).then(() => {
  // code to be executed after visibility is set
})
```

</dd>


#### setDisabled `boolean`

<dd>

Sets the disabled state of the widget.

*Example*:

```js
SwitchGroup1.setDisabled(false)

//For appsmith reactivity, await the setter method or use the `.then()` block.
SwitchGroup1.setDisabled(false).then(() => {
  // code to be executed after disabled state is set
})
```

</dd>


#### setRequired `boolean`

<dd>

Sets whether the widget is required or not.

*Example*:

```js
SwitchGroup1.setRequired(true)

//For appsmith reactivity, await the setter method or use the `.then()` block.
SwitchGroup1.setRequired(true).then(() => {
  // code to be executed after required state is set
})
```

</dd>