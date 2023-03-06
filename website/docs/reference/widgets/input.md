# Input

The input widget allows the user to enter or edit data such as text, number, email, etc. it's helpful in a form widget with custom validations.

<VideoEmbed host="youtube" videoId="zNGwWO6OXlw" title="How to use Input Widget" caption="How to use Input Widget"/>

## Input validation



### User instruction



### Validation properties



## Properties

Properties allow you to edit the table, connect it with other widgets, and customize how the user interacts with it.

### General properties

General properties control the data and behavior of the Input widget. These properties are present in the widget's properties pane.

| Widget Property     | Description       |
| ------------------- | ----------------- |
| **Data Type**       | Sets the type of data you want to capture in the user input. Selecting a data type adds the associated validation to the user input. Choose from Single-line text, Multi-line text, Number, Password, or Email.       |
| **Default text**    | Sets the widget's default value before the user has made any changes.       |
| **Max Chars**       | Sets a maximum length allowed for user input. Only appears when **Data Type** is set to Text.    |
| **Min**             | Sets a minimum value allowed for user input. Only appears when **Data Type** is set to Number.       |
| **Max**             | Sets a maximum value allowed for user input. Only appears when **Data Type** is set to Number.      |
| **Regex**           | Used to add custom regex validation to perform on user input. When the input doesn't match the regex expression, the input is considered invalid.                                                     |
| **Valid**           | Sets an expression to decide whether the user's input is considered valid. When the expression evaluates to `false`, the input is considered invalid and the widget shows its **Error Message**.   |
| **Error message**   | Sets the text of the error message to display if user input is considered invalid.      |
| **Placeholder**     | Sets the placeholder text within the input box. Use to show a hint or example value to the user.    |
| **Tooltip**         | Sets a tooltip for the widget. You can add hints or extra information about the required input from the user.    |
| **Show step arrows**  | Controls visibility of step arrows. Turning this toggle off hides the step arrows to increment or decrement the values in the widget.                                                                        |
| **Required**        | Sets whether the input field is a mandatory field. When the input widget is within a Form widget, that Form's submit button automatically disables until a user adds input to the field.       |
| **Visible**         | Controls widget's visibility on the page. When turned off: The widget isn't visible when the app is published. It appears translucent when in Edit mode.     |
| **Disabled**        | Makes the widget un-clickable or unusable. The widget remains visible to the user, but user interaction isn't allowed.     |
| **Reset on Submit** | Clears the value entered by the user after form submission.       |
| **Autofocus**       | When enabled, the user's cursor focuses on the input box automatically on page load.      |
| **Animate Loading** | When turned off, the widget loads without any skeletal animation. You can use a toggle switch to turn it on/off. You can also turn it off/on using javascript by enabling the JS label next to it. |
| **Spellcheck**      | When enabled, user input is checked for spelling errors.    |
| [**Height**](/reference/widgets/#height)  | It configures how a widget’s height reacts to content changes. It has three possible configurations:<br/>**Fixed**: The height of the widget remains as set using drag and resize.<br/>**Auto Height**: The height of the widget reacts to content changes.<br/>  **Auto Height with limits**: Same as Auto height, with a configurable option to set the minimum and maximum number of rows that can be occupied by the widget.                                      |

### Reference properties

Reference properties are used to access the widget's data and state using code. When using reference properties, substitute `<input_name>` in the examples below with the name of your Input widget.

| Binding Property | Description       |
| ---------------- | ----------------- |
| **isDisabled**   | Reflects the state of the widget's **Disabled** setting _(`bool`)_.    |
| **isValid**      | Reflects whether the widget's input is considered **Valid** _(`bool`)_.    |
| **isVisible**    | Reflects the state of the widget's **Visible** setting _(`bool`)_.   |
| **text**         | Contains the widget's text / user input, either as a _string_ or _number_. depending on the widget's **Data Type** property. |

### Style properties

Style properties allow you to change the look and feel of the Input widget. These properties are present in the widget's properties pane.

| Style Property     | Description              |
| ------------------ | ------------------------ |
| **Text**      | Sets the label text of the widget.                                                                   |
| **Position**  | Sets where the label appears relative to the widget's input area. Choose between Left, Top, or Auto. |
| **Alignment** | Sets whether the label is left- or right-aligned.                                                    |
| **Width**     | Sets the width of the label. The number represents how many characters/columns wide the label is.    |
| **Text Color**       | Sets the text color for the label. Accepts valid CSS [`color` ](https://developer.mozilla.org/en-US/docs/Web/CSS/color)values.       |   |
| **Text Size**        | Sets the size of the label font. Accepts valid CSS [`font-size`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size) values. |   |
| **Label Font Style** | Toggles font styles (**bold** or _italic)._   |
| **Icon**           | Sets an icon to be included in the input field. Icons are from the [Blueprint](https://blueprintjs.com) library. See the [icons here](https://blueprintjs.com/docs/#icons).  |
| **Icon Alignment** | Sets whether the icon appears on the left or right of the input field.                                                                                                           |
| **Border Radius**  | Rounds the corners of the widget's outer edge. With JS enabled, this accepts valid CSS [`border-radius`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) values. |
| **Box Shadow**     | Casts a drop shadow from the frame of the widget. With JS enabled, this accepts valid CSS [`box-shadow`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) values.    |

## Events

These event handlers can be used to run queries, JS code, or other [supported actions](/reference/appsmith-framework/widget-actions/) when the event is triggered.

| Event             | Description             |
| ----------------- | ----------------------- |
| **onTextChanged** | Sets an action to take place when the input's value is changed. Can be set from the GUI list of common actions ([examples here](../appsmith-framework/widget-actions/)), or you can define a custom JavaScript function to call instead.  |
| **onFocus**      | Sets an action to take place when the input is focused. Can be set from the GUI list of common actions ([examples here](../appsmith-framework/widget-actions/)), or you can define a custom JavaScript function to call instead. |
| **onBlur**      | Sets an action to take place when the input is blurred or loses focus. Can be set from the GUI list of common actions ([examples here](../appsmith-framework/widget-actions/)), or you can define a custom JavaScript function to call instead. |
| **onSubmit**      | Sets an action to take place when the input is submitted with the ENTER key. Can be set from the GUI list of common actions ([examples here](../appsmith-framework/widget-actions/)), or you can define a custom JavaScript function to call instead. |

## Further reading

- [Form widget](/reference/widgets/form)
