# Input

The input widget allows the user to enter or edit data such as text, number, email, etc. it's helpful in a form widget with custom validations.

<VideoEmbed host="youtube" videoId="zNGwWO6OXlw" title="How to use Input Widget" caption="How to use Input Widget"/>

## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

### Widget properties

These properties allow you to edit the Input widget, and are present in the property pane of the widget. The following table lists all the widget properties.

| Widget Property     | Description                                                                                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Data Type**       | Sets the type of data you want to capture in the user input. Selecting a data type adds the associated validation to the user input. Choose from Text, Number, Password, or Email.                 |
| **Default text**    | Sets the widget's default value before the user has made any changes.                                                                                                                                  |
| **Max Chars**       | Sets a maximum length allowed for user input. Only appears when **Data Type** is set to Text.                                                                                                          |
| **Min**             | Sets a minimum value allowed for user input. Only appears when **Data Type** is set to Number.                                                                                                         |
| **Max**             | Sets a maximum value allowed for user input. Only appears when **Data Type** is set to Number.                                                                                                         |
| **Regex**           | Used to add custom regex validation to perform on user input. When the input doesn't match the regex expression, the input is considered invalid.                                                     |
| **Valid**           | Sets an expression to decide whether the user's input is considered valid. When the expression evaluates to `false`, the input is considered invalid and the widget shows its **Error Message**.   |
| **Error message**   | Sets the text of the error message to display if user input is considered invalid.                                                                                                                     |
| **Placeholder**     | Sets the placeholder text within the input box. Use to show a hint or example value to the user.                                                                                                       |
| **Tooltip**         | Sets a tooltip for the widget. You can add hints or extra information about the required input from the user.                                                                                          |
| **Show step arrows**              | Controls visibility of step arrows. Turning this toggle off hides the step arrows to increment or decrement the values in the widget.                                                                        |
| **Required**        | Sets whether the input field is a mandatory field. When the input widget is within a Form widget, that Form's submit button automatically disables until a user adds input to the field.       |
| **Visible**         | Controls widget's visibility on the page. When turned off: The widget isn't visible when the app is published. It appears translucent when in Edit mode.                                         |
| **Disabled**        | Makes the widget un-clickable or unusable. The widget remains visible to the user, but user interaction isn't allowed.                                                                       |
| **Reset on Submit** | Clears the value entered by the user after form submission.                                                                                                                                            |
| **Autofocus**       | When enabled, the user's cursor focuses on the input box automatically on page load.                                                                                                           |
| **Animate Loading** | When turned off, the widget loads without any skeletal animation. You can use a toggle switch to turn it on/off. You can also turn it off/on using javascript by enabling the JS label next to it. |
| **Spellcheck**      | When enabled, user input is checked for spelling errors.                                                                                                                                          |
| [**Height**](/reference/widgets/#height)        | It configures how a widget’s height reacts to content changes. It has three possible configurations:<br/>**Fixed**: The height of the widget remains as set using drag and resize.<br/>**Auto Height**: The height of the widget reacts to content changes.<br/>  **Auto Height with limits**: Same as Auto height, with a configurable option to set the minimum and maximum number of rows that can be occupied by the widget.                                      |


#### Data type

As the name suggests, data type allows the user to set the type of data you want in the input box, like- Text, Number, Email, Password.

The input box shows an error "invalid input" if the entered data doesn't match the data type or disable the invalid data type input. (If you select the data type as a number, you won't be able to enter text in the input box.)

<VideoEmbed host="youtube" videoId="Ehg74WJeCHo" title="Data type" caption="Data type"/>

#### Label

The property hosts a group of configurations that you can use to associate a display name and define a placement for the widget. These properties are usually useful when you want to design forms that follow a defined alignment for your form fields and give a professional look to your forms. Below are the properties that you can use:

##### Text

It allows you to set the display name of the input box. For example, if you want the user to enter a name in the input box, you can enter the text as "Name."

:::tip
You can leave the text empty if you don't want any display name for your input widget.
:::

##### Position

It allows you to specify the placement of the label. You can select one of the available options:

* Top - It allows you to align the text at the top of the input box.
* Left - It aligns the text to the left of the input box. When you select **Left** alignment, you get additional settings that you can use to control the alignment and define the text's width.
  * Alignment - With the help of alignment, you can define the placement of the text in accordance with the position of the input box. You can choose:
    * Left - It aligns the text to the widget's left boundary that's away from the input box.
    * Right - It aligns the text closer to the input box.
  * Width - With the help of width, you can define the **number of columns** in the **grid** that surrounds the widget. You can specify how close or far the text can be placed to the input box.
* Auto - It automatically adjusts the position of the text based on the input box's height.

:::info
Columns are the dashed lines (-----) that surround a widget when you try to drag, and drop it on the canvas.
:::

<VideoEmbed host="youtube" videoId="7VFebef9JZg" title="How to set label properties?" caption="How to set label properties?"/>

#### Placeholder

You can set a proxy text/value inside the input box using the `placeholder` property. It can be any message or hint for the expected input.

<VideoEmbed host="youtube" videoId="576Bfo8htf0" title="Placeholder" caption="Placeholder"/>

#### Default text

This property lets you set a default value for the widget before the user has made any changes.

One good example of using this property is to bind it with a column of the selected row of a table. `Default text` fills the input widget with the value at that table's cell.

<VideoEmbed host="youtube" videoId="8oZFBLHoWC8" title="Default text" caption="Default text"/>

#### Regex

Using `Regex` or Regular expression property, you can set specific constraints on the input you expect from the user.

For example, add a regular expression for entering a name. The name can contain only alphabets and space between the first and last name.

```
/^[a-z -]+$/i
```

If you enter a value other than an alphabet or space (number of special characters), the widget shows an error message "invalid input."

<VideoEmbed host="youtube" videoId="n6VUQN-wv9U" title="Regular Expression (Regex)" caption="Regular Expression (Regex)"/>


#### Error message

If a user enters an incorrect value, the input widget shows a message "invalid input." You can change this message by using the `Error message` property to provide better feedback on the input given by the user.

<VideoEmbed host="youtube" videoId="oeUHJhM4zyU" title="Error Message" caption="Error Message"/>

#### Required

Entering a value in the input box is mandatory when the required property is enabled. You can also write a JS code to link this property to a user action. Click on `JS` next to the `Required` to write JavaScript code.

For example, drag a checkbox widget `checkbox1` onto the canvas and bind it to the `Required` property. To enable the `Required` when the user checks the checkbox, add the following JavaScript code in the Required property:

```
{{Checkbox1.isChecked}}
```

When you tick the checkbox, it enables the Required property, and the input box shows an error message "This field is required" if you haven't entered any input.

<VideoEmbed host="youtube" videoId="2hqT02HCah8" title="Required" caption="Required"/>

### Show step arrows
`Show step arrows` controls the visibility of the increase and decrease arrows in the widget. They aren't visible on the widget if you turn off this property. You can also write `JS` code to show or hide the arrows.

#### Visible

`Visible` controls the widget's visibility on the app's page. The widget is visible on the published app if you turn off this property. You can also write a JS code that links the Visible property to a user action. Click on `JS` next to the `Visible` to write JavaScript code.

For example, drag a checkbox widget `checkbox1` onto the canvas and bind it to the `Visible` property. To enable the `Visible` when the user checks the checkbox, add the following JavaScript code:

```
{{Checkbox1.isChecked}}
```

When you tick the checkbox, it enables the Visible property, and the input box is visible in the app.

<VideoEmbed host="youtube" videoId="Jb5bNVhFoRE" title="Visible" caption="Visible"/>

#### Disabled

It disables the user from entering values in the input widget. The widget is visible (if Visible is enabled), but user input is allowed. You can also write a JS code that links the Disabled property to a user action. Click on `JS` next to the `Disabled` to write JavaScript code.

For example, drag a checkbox widget `checkbox1` onto the canvas and bind it to the `Disabled` property. To enable the `Disabled` when the user checks the checkbox, add the following JavaScript code:

```
{{Checkbox1.isChecked}}
```

When you tick the checkbox, it enables the Disabled property and prevent a user input in the input box.

<VideoEmbed host="youtube" videoId="JEARavnq0vQ" title="Disabled" caption="Disabled"/>

#### Reset on submit

When `Reset on Submit` is enabled, the input widget resets or clears the entered input after the user submits it. Use the event `onSubmit` to show a message when input is submitted. You'll see once the user submits and the message pops up, the input widget resets itself to its original state.

<VideoEmbed host="youtube" videoId="EtKbP85Z9-s" title="Reset on Submit" caption="Reset on Submit"/>

#### Autofocus

When you enable `Autofocus`, the cursor focuses on the input box whenever the widget is loaded.

<VideoEmbed host="youtube" videoId="_asmaJ1TuxE" title="Autofocus" caption="Autofocus"/>

### Binding properties

These properties allow you to bind your input widget with any other widget in queries or JS objects.

| Binding Property | Description                                                                                                                  |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| **isDisabled**   | Reflects the state of the widget's **Disabled** setting _(`bool`)_.                                                            |
| **isValid**      | Reflects whether the widget's input is considered **Valid** _(`bool`)_.                                                        |
| **isVisible**    | Reflects the state of the widget's **Visible** setting _(`bool`)_.                                                             |
| **text**         | Contains the widget's text / user input, either as a _string_ or _number_. depending on the widget's **Data Type** property. |

#### Text

It fetches the value that the user enters in the input widget. It changes when the default value changes or the user enters a new value in the input field.

To bind the text entered by the user in the input widget to another widget, open the property pane, and add the code snippet (enclosed in mustache syntax) given below:

```
{{<Input_widget_name>.text}}
```

Where `<Input_widget_name>` is the name of your input box.

For example, take an Input widget `input1` and bind its text to a text widget. Drag a Text widget onto the canvas and add the following snippet to the Text property of the Text widget:

```
{{input1.text}}
```

The Text widget displays the text present in the input widget.

:::info
Property binding has other applications. For example, it helps in parsing the value entered in an input widget to a Query or JS function.
:::

<VideoEmbed host="youtube" videoId="713Zs2EFPcs" title="Text" caption="Text"/>

### Events

| Event             | Description                                                                                                                                                                                                                                              |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **onTextChanged** | Sets an action to take place when the input's value is changed. Can be set from the GUI list of common actions ([examples here](../appsmith-framework/widget-actions/)), or you can define a custom JavaScript function to call instead.              |
| **onFocus**      | Sets an action to take place when the input is focused. Can be set from the GUI list of common actions ([examples here](../appsmith-framework/widget-actions/)), or you can define a custom JavaScript function to call instead. |
| **onBlur**      | Sets an action to take place when the input is blurred or loses focus. Can be set from the GUI list of common actions ([examples here](../appsmith-framework/widget-actions/)), or you can define a custom JavaScript function to call instead. |
| **onSubmit**      | Sets an action to take place when the input is submitted with the ENTER key. Can be set from the GUI list of common actions ([examples here](../appsmith-framework/widget-actions/)), or you can define a custom JavaScript function to call instead. |

### Label

The property hosts a group of configurations that you can use to associate a display name and define a placement for the widget. These properties are usually useful when you want to design forms that follow a defined alignment for your form fields and give a professional look to your forms. Below are the properties that you can use:

| Label         | Description                                                                                          |   |
| ------------- | ---------------------------------------------------------------------------------------------------- | - |
| **Text**      | Sets the label text of the widget.                                                                   |   |
| **Position**  | Sets where the label appears relative to the widget's input area. Choose between Left, Top, or Auto. |   |
| **Alignment** | Sets whether the label is left- or right-aligned.                                                    |   |
| **Width**     | Sets the width of the label. The number represents how many characters/columns wide the label is.    |   |

| Label Styles         | Description                                                                                                                          |   |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | - |
| **Text Color**       | Sets the text color for the label. Accepts valid CSS [`color` ](https://developer.mozilla.org/en-US/docs/Web/CSS/color)values.       |   |
| **Text Size**        | Sets the size of the label font. Accepts valid CSS [`font-size`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size) values. |   |
| **Label Font Style** | Toggles font styles (**bold** or _italic)._                                                                                          |   |

### **Styles**

Style properties allow you to change the look and feel of the widget.

| Style Property     | Description                                                                                                                                                                      |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Icon**           | Sets an icon to be included in the input field.                                                                                                                                  |
| **Icon Alignment** | Sets whether the icon appears on the left or right of the input field.                                                                                                           |
| **Border Radius**  | Rounds the corners of the widget's outer edge. With JS enabled, this accepts valid CSS [`border-radius`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) values. |
| **Box Shadow**     | Casts a drop shadow from the frame of the widget. With JS enabled, this accepts valid CSS [`box-shadow`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) values.    |

:::info
The icons use the [Blueprint](https://blueprintjs.com) library. for more information, see the list of icons available at [Blueprint](https://blueprintjs.com/docs/#icons).
:::
