# Radio Group

The Radio group widget allows users to configure a group of radio buttons. It lets the user choose one option from a predefined set of options.

<VideoEmbed host="youtube" videoId="ZQ3CKFx3cbM" title="How to use Radio Group Widget" caption="How to use Radio Group Widget"/>

## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

### Widget properties

These properties allow you to edit the Radio Group widget. All these properties are present in the property pane of the widget. The following table lists all the widget properties.

| Property                   | Description                                                                                                          |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **Options**                | It sets a list of options for a user to select. Values must be unique.                                               |
| **Default Selected Value** | Sets a default value that is selected as user input unless it is changed by the user.                                |
| **Inline**                 | Whether the checkbox buttons are to be displayed inline horizontally.                                                |
| **Required**               | When turned on, it makes a user input required and disables any form submission until input is made.                 |
| **Visible**                | Controls widget's visibility on the page. When turned off, the widget isn't visible when the app is published. |
| **Disabled**               | Disables input to this widget.                                                                                       |
| **Animate Loading**        | Allows you to control a widget’s animation on the page load.                                                         |
| **Alignment**              | Sets alignment of the widget.                                                                                        |
| [**Height**](/reference/widgets/#height)        | It configures how a widget’s height reacts to content changes. It has three possible configurations:<br/>**Fixed**: The height of the widget remains as set using drag and resize.<br/>**Auto Height**: The height of the widget reacts to content changes.<br/>  **Auto Height with limits**: Same as Auto height, with a configurable option to set the minimum and maximum number of rows that can be occupied by the widget.                                      |

### Binding properties

These properties help you share values between widgets and also allow you to easily access the widget property within Queries or JS functions.

| Property                | Description                                                                       | Code Snippet                          |
| ----------------------- | --------------------------------------------------------------------------------- | ------------------------------------- |
| **isRequired**          | This property indicates whether the widget is required or not.                    | `{{widget_name.isRequired}}`          |
| **isVisible**           | This property indicates whether the widget is visible or not.                     | `{{widget_name.isVisible}}`           |
| **selectedOptionValue** | This property displays value of selected option. For example- Y for Yes, N for No. | `{{widget_name.selectedOptionValue}}` |

### Events

They are a set of actions that you can perform on the widget:

| Events                | Description                                                                                                                              |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **onSelectionChange** | Sets the action to be run when the selection state is changed. See a list of [supported actions](../appsmith-framework/widget-actions/). |

### Label

The property hosts a group of configurations that you can use to associate a display name and define a placement for the widget. These properties are usually useful when you want to design forms that follow a defined alignment for your form fields and give a professional look to your forms. Below are the properties that you can use:

| Label         | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| **Text**      | Sets the label text of the widget.                           |
| **Position**  | Sets the label position of the widget.                       |
| **Alignment** | Sets the label alignment of the widget.                      |
| **Width**     | Sets the label width of the widget as the number of columns. |

Let's understand these properties in detail:

#### **Text**

It allows you to set the display name for the Radio Group. For example, if you want the user to select a Gender Type, you can enter the text as "Gender."

:::tip
You can leave the text empty if you don't want any display name for your Radio Group widget.
:::

#### **Position**

It allows you to specify the placement of the label. You can select one of the available options:

* Top - It allows you to align the text at the top of the Radio Group.
* Left - It aligns the text to the left of the Radio Group. When you select **Left** alignment, you get additional settings that you can use to control the alignment and define the text's width.
  * Alignment - With the help of alignment, you can define the placement of the text in accordance with the position of the Radio Group. You can choose:
    * Left - It aligns the text to the widget's left boundary that is away from the Radio Group.
    * Right - It aligns the text closer to the Radio Group.
  * Width - With the help of width, you can define the **number of columns** in the **grid** that surrounds the widget. You can specify how close or far the text can be placed to the Radio Group.
* Auto - It automatically adjusts the position of the text based on the Radio Group's height.

:::info
Columns are the dashed lines (-----) that surround a widget when you try to drag and drop it on the canvas.
:::

<VideoEmbed host="youtube" videoId="yhsTdLgmi0c" title="How to set the label properties" caption="How to set the label properties"/>

### Styles

Style properties allow you to change the look and feel of the widget.

| Style                | Description                                              |
| -------------------- | -------------------------------------------------------- |
| **Label Text Color** | Allows you to set text color for the label.              |
| **Label Text Size**  | Allows you to set the size of the label.                 |
| **Label Font Style** | Allows you to choose a font style (bold or italic). |
| **Accent color**     | Sets the accent color of the widget.                     |

## Methods

The methods provided by the widget allow users to dynamically update and manipulate its properties, facilitating the creation of dynamic and interactive applications without the need for manual property modifications. 

These setter methods are asynchronous, and users have the option to either await them or use the `.then()` block to ensure appsmith reactivity is maintained for subsequent lines of code.


#### setVisibility `boolean`

<dd>

Sets the visibility of the widget.

*Example*:

```js
RadioGroup1.setVisibility(true).then(() => {
  // code to be executed after visibility is set
})

```

</dd>


#### setDisabled `boolean`

<dd>

Sets the disabled state of the widget.

*Example*:

```js
RadioGroup1.setDisabled(false).then(() => {
  // code to be executed after disabled state is set
})
```

</dd>

#### setData `array<object>`

<dd>

Allows you to dynamically set the data of the widget.

*Example*:

```js
RadioGroup1.setData([{ label: 'Yes', value: 'y' }, { label: 'No', value: 'n' }]).then(() => {
  // code to be executed after data is set
})
```

</dd>