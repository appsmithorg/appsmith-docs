# Input

This page describes how to use an Input widget to gather and validate user input such as text, numbers, emails, and passwords.

<VideoEmbed host="youtube" videoId="zNGwWO6OXlw" title="How to use Input Widget" caption="How to use Input Widget"/>

## Data validation

Input widgets gather user-provided data, which can be accessed using the widget's `text` property. First, however, it's important to help users provide clean and well-formatted data.

Properties under the "Validation" tab in the properties pane can be configured to enforce specific rules on what the user has entered.

When any of the validation rules have been broken, the widget flags itself as invalid; the border shows red, and its **Error Message** appears. If the widget is part of a Form widget, that Form (by default) can't be submitted while it contains invalid data.

### Regex

The **Regex** property is used to compare input to a regular expression that you have defined. If the user's input doesn't match the pattern, it's considered invalid.

This is useful when you need to guarantee that the content exactly follows the formatting of your dataset.

For example, if you'd like to create an input for a person's name, you can add the following regular expression to restrict input to only alphabetical characters, spaces, and certain special characters:

```
/^[a-z ,.'-]+$/i
```

### Valid

In the **Valid** property field, you can write a code expression to evaluate the user's input. Or, if you have more complex logic, you can define a function in a [JS Object](/core-concepts/writing-code/javascript-editor-beta) to determine whether it's acceptable. The input is acceptable when the **Valid** field evaluates to `true`.

Use this property when you have rules or logic beyond simple formatting that the input must follow.

As an example, imagine that you are creating rules for a "Create Password" field in an account registration form. If you want to be sure that new passwords don't contain certain strings, you may write:

```javascript
// Valid property of an Input widget
{{
  !["password", "123", "admin"].some(subStr => {
    return PasswordInput.text.toLowerCase().includes(subStr)
  })
}}
```

---

Other validation properties include:

- **Required**: Makes the input mandatory. When the field is left blank, it's considered invalid.
- **Max Characters**: Limits the number of characters that the input allows.
- **Min** / **Max**: Input less than **Min** or greater than **Max** is invalid.

To see some of these validations in practice, visit the [sample app](https://app.appsmith.com/applications/62074c466b4b1e154a3bf017/pages/6245b7264f1a665b23047e5f).

## Properties

Properties allow you to edit the table, connect it with other widgets, and customize how the user interacts with it.

### General properties

General properties control the data and behavior of the Input widget. These properties are present in the widget's properties pane.

| Property            | Description       |
| ------------------- | ----------------- |
| **Data Type**       | Sets the type of data you want to capture in the user input. Selecting a data type adds the associated validation to the user input. Choose from Single-line text, Multi-line text, Number, Password, or Email.       |
| **Default value**   | Sets the widget's default value before the user has made any changes.       |
| **Text**            | Sets the label text of the widget.                                                                   |
| **Position**        | Sets where the label appears relative to the widget's input area. Choose between Left, Top, or Auto. |
| **Required**        | Sets whether the input field is a mandatory field. When this is turned on and the user has left the field blank, it's considered invalid.       |
| **Max Characters**  | Sets a maximum length allowed for user input. Only appears when **Data Type** is set to a Text type.    |
| **Min**             | Sets a minimum value allowed for user input. Only appears when **Data Type** is set to Number.       |
| **Max**             | Sets a maximum value allowed for user input. Only appears when **Data Type** is set to Number.      |
| **Regex**           | Used to add custom regex validation to perform on user input. When the input doesn't match the regex expression, the input is considered invalid.                                                     |
| **Valid**           | Sets an expression to decide whether the user's input is considered valid. When the expression evaluates to `false`, the input is considered invalid.   |
| **Error message**   | Sets the text of the error message to display if user input is invalid.      |
| **Spellcheck**      | When enabled, user input is checked for spelling errors. This doesn't affect whether the input is considered invalid.   |
| **Tooltip**         | Sets a tooltip for the widget on mouse hover. You can add hints or extra information about the required input.    |
| **Placeholder**     | Sets the placeholder text within the input box. Use to show a hint or example value to the user.    |
| **Show step arrows**  | Controls visibility of step arrows. Turning this toggle off hides the step arrows to increment or decrement the values in the widget. Only appears when **Data Type** is set to Number.  |
| **Visible**         | Controls widget's visibility on the page. When turned off, the widget isn't visible when the app is published. It appears translucent when in Edit mode.     |
| **Disabled**        | Makes the widget un-clickable or unusable. The widget remains visible to the user, but user interaction isn't allowed.     |
| **Animate Loading** | When turned off, the widget loads without any skeletal animation. |
| **Autofocus**       | When enabled, the user's cursor focuses on the input box automatically on page load.      |
| **Height**  | Configures how a widget’s height reacts to content changes. It has three possible configurations:<br/>**Fixed**: The height of the widget remains as set using drag and resize.<br/>**Auto Height**: The height of the widget reacts to content changes.<br/>  **Auto Height with limits**: Same as Auto height, with a configurable option to set the minimum and maximum number of rows that can be occupied by the widget.                                      |
| **Reset on Submit** | Clears the value entered by the user after the user submits with the Enter key.       |

### Reference properties

Reference properties are used to access the widget's data and state using code. When using reference properties, substitute `<input_name>` in the examples below with the name of your Input widget.

| Property         | Description       | Code Snippet |
| ---------------- | ----------------- | ------------ |
| **text**         | Contains the widget's text / user input, either as a _string_ or _number_. depending on the widget's **Data Type** property. | `{{ Input1.text }}` |
| **isDisabled**   | Reflects the state of the widget's **Disabled** setting.    | `{{ Input1.isDisabled }}` |
| **isValid**      | Reflects whether the widget's input is considered **Valid**.  | `{{ Input1.isValid }}` | 
| **isVisible**    | Reflects the state of the widget's **Visible** setting.   | `{{ Input1.isVisible }}` |

### Style properties

Style properties allow you to change the look and feel of the Input widget. These properties are present in the widget's properties pane.

| Property           | Description              |
| ------------------ | ------------------------ |
| **Icon**           | Sets an icon to be included on the button. Uses icons from the [Blueprint](https://blueprintjs.com) library. See the [list of icons here](https://blueprintjs.com/docs/#icons).  |
| **Position**       | Sets whether the icon appears on the left or right of the button's label text.  |
| **Font Color**     | Sets the text color for the label. Accepts valid CSS [`color` ](https://developer.mozilla.org/en-US/docs/Web/CSS/color)values.   |
| **Font Size**      | Sets the size of the label font. Accepts valid CSS [`font-size`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size) values. |
| **Emphasis**       | Toggles font styles (**bold** or _italic)._   |
| **Border Radius**  | Rounds the corners of the widget's outer edge. With JS enabled, this accepts valid CSS [`border-radius`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) values. |
| **Box Shadow**     | Casts a drop shadow from the frame of the widget. With JS enabled, this accepts valid CSS [`box-shadow`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) values.    |


## Events

These event handlers can be used to run queries, JS code, or other [supported actions](/reference/appsmith-framework/widget-actions/) when the event is triggered.

| Event             | Description             |
| ----------------- | ----------------------- |
| **onTextChanged** | Sets an action to take place when the input's value is changed.  |
| **onFocus**      | Sets an action to take place when the widget has focus (when the user's text cursor is in the field). |
| **onBlur**      | Sets an action to take place when the input loses focus. |
| **onSubmit**      | Sets an action to take place when the input is submitted with the Enter key. When the widget's **Data Type** is set to **Multi-line text**, the submit is triggered by CTRL + Enter instead. |

## Methods

Widget property setters enable you to modify the values of widget properties at runtime, eliminating the need to manually update properties in the editor.

These methods are asynchronous, and you can utilize the `.then()` block to ensure execution and sequencing of subsequent lines of code in Appsmith.


#### setVisibility `boolean`

<dd>

Sets the visibility of the widget.

*Example*:

```js
Input1.setVisibility(true)
```

To perform sequential actions, utilize the `.then()` block for execution.

```js
Input1.setVisibility(true).then(() => {
  // code to be executed after visibility is set
})

```

</dd>


#### setDisabled `boolean`

<dd>

Sets the disabled state of the widget.

*Example*:

```js
Input1.setDisabled(false)
```

To perform sequential actions, utilize the `.then()` block for execution.

```js
Input1.setDisabled(false).then(() => {
  // code to be executed after disabled state is set
})
```

</dd>

#### setValue `boolean`

<dd>

Allows you to dynamically set the value of the widget.

*Example*:

```js
Input1.setValue(true)
```

To perform sequential actions, utilize the `.then()` block for execution.

```js
Input1.setValue(true).then(() => {
  // code to be executed after value is set
})
```

</dd>


#### setRequired `boolean`

<dd>

Sets whether the widget is required or not.

*Example*:

```js
Input1.setRequired(true)
```

To perform sequential actions, utilize the `.then()` block for execution.

```js
Input1.setRequired(true).then(() => {
  // code to be executed after required state is set
})
```

</dd>

