# Switch

The Switch is a simple UI widget you can use when you want users to make a binary choice.


## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

### Widget properties

These properties allow you to edit the widget. All these properties are present in the property pane of the widget. The following table lists all the widget properties.

| Property             | Description                                                                                                                      |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **Default Selected** | This value is a boolean that is set to true if the switch is turned on.                                                          |
| **Visible**          | Control widget's visibility on the page. When turned off, the widget isn't visible when the app is published              |
| **Disabled**         | Disables input/selection to the widget. The widget remains visible to the user but user input/selection is not allowed. |
| **Animate Loading**  | Allows you to control a widget’s animation on the page load.                                                                     |
| [**Height**](/reference/widgets/#height)        | It configures how a widget’s height reacts to content changes. It has three possible configurations:<br/>**Fixed**: The height of the widget remains as set using drag and resize.<br/>**Auto Height**: The height of the widget reacts to content changes.<br/>  **Auto Height with limits**: Same as Auto height, with a configurable option to set the minimum and maximum number of rows that can be occupied by the widget.                                      |

### Binding properties

These properties help you share values between widgets and also allow you to easily access the widget property within Queries or JS functions.

| Property         | Description                                                                  | Code Snippet                   |
| ---------------- | ---------------------------------------------------------------------------- | ------------------------------ |
| **isDisabled**   | This value is a boolean that is set to true if the switch is disabled.       | `{{widget_name.isDisabled}}`   |
| **isSwitchedOn** | This value is a boolean that is set to true if the switch is turned on.      | `{{widget_name.isSwitchedOn}}` |
| **isVisible**    | This value is a boolean that is set to true if the switch is set as visible. | `{{widget_name.isVisible}}`    |

### Events

They are a set of actions that you can perform on the widget. The following table lists the actions:

| Events       | Description                                                                                                                          |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| **onChange** | Sets the action to be run when the user toggles the switch. See a list of [supported actions](../appsmith-framework/widget-actions/) |

### Label

The property hosts a group of configurations that you can use to associate a display name and define a placement for the widget. These properties are usually useful when you want to design forms that follow a defined alignment for your form fields and give a professional look to your forms. Below are the properties that you can use:

| Label         | Description                            |
| ------------- | -------------------------------------- |
| **Label**     | Sets the label of the switch.          |
| **Position**  | Sets the label position of the widget. |
| **Alignment** | Sets the alignment of the widget.      |

| Label Style          | Description                                              |
| -------------------- | -------------------------------------------------------- |
| **Text Color**       | Allows you to set text color for the label.              |
| **Text Size**        | Allows you to set the size of the label.                 |
| **Label Font Style** | Allows you to choose a font style (bold or italic). |

### Styles

Style properties allow you to change the look and feel of the widget.

| Style            |                                          |
| ---------------- | ---------------------------------------- |
| **Accent color** | Sets the background color of the widget. |

## Methods

Widget property setters enable you to modify the values of widget properties at runtime, eliminating the need to manually update properties in the editor.

These methods are asynchronous, and users have the option to either await them or use the `.then()` block to ensure appsmith reactivity is maintained for subsequent lines of code.


#### setVisibility `boolean`

<dd>

Sets the visibility of the widget.

*Example*:

```js
Switch1.setVisibility(true)

//For appsmith reactivity, await the setter method or use the `.then()` block.
Switch1.setVisibility(true).then(() => {
  // code to be executed after visibility is set
})

```

</dd>


#### setDisabled `boolean`

<dd>

Sets the disabled state of the widget.

*Example*:

```js
Switch1.setDisabled(false)

//For appsmith reactivity, await the setter method or use the `.then()` block.
Switch1.setDisabled(false).then(() => {
  // code to be executed after disabled state is set
})
```

</dd>


#### setRequired `boolean`

<dd>

Sets whether the widget is required or not.

*Example*:

```js
Switch1.setRequired(true)

//For appsmith reactivity, await the setter method or use the `.then()` block.
Switch1.setRequired(true).then(() => {
  // code to be executed after required state is set
})
```

</dd>


#### setValue `boolean`

<dd>

Sets the value to be displayed in the widget.

*Example*:

```js
Switch1.setValue(true)

//For appsmith reactivity, await the setter method or use the `.then()` block.
Switch1.setValue(true).then(() => {
  // code to be executed after options are set
})
```

</dd>



#### setColor `string`

<dd>

Sets the background color of the widget.

*Example*:

```js
Switch1.setColor('#FF0000')

//For appsmith reactivity, await the setter method or use the `.then()` block.
Switch1.setColor('#FF0000').then(() => {
  // code to be executed after color is set
})
```

</dd>

