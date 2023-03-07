# Input

This page describes how to use an Input widget to gather and validate textual and numerical user input.

<VideoEmbed host="youtube" videoId="zNGwWO6OXlw" title="How to use Input Widget" caption="How to use Input Widget"/>

## Input validation

Input widgets gather user-provided data, which can be accessed on the widget's `text` property. However, to prevent polluting your dataset with messy or incorrectly formatted data, it's important to guide users toward providing input in a usable format.

### User instruction

The Input widget has useful properties for communicating expected data formats and boundaries to users. Providing instructions and expectations to the user up-front helps improve their responses and reduces the chance of messy data.

When you create your Input widget, give it a **Placeholder** value that shows the user an example of your expected response. These values are shown in grey when the widget loads and disappear instantly when the user starts typing.

You can also provide a **Tooltip** filled with a more detailed outline of what you want. This is especially useful if your input field has special rules or requirements that aren't obvious, such as requirements for building a strong password.

<figure>
  <img src="/img/input-tooltip-placeholder.png" style={{width:"100%", height:"auto"}} alt="Use Tooltips and Placeholders to show users how to format their input."/>
  <figcaption align = "center"><i>Use Tooltips and Placeholders to show users how to format their input.</i></figcaption>
</figure>

### Validation properties

Properties under the "Validation" tab in the properties pane can be configured to enforce specific rules on what the user has entered.

When any of the validation rules have been broken, the widget flags itself as invalid; the border shows red, and its **Error Message** appears to inform the user that there is a mistake. If the widget is part of a Form widget, that Form (by default) can't be submitted while it contains invalid data.

The most flexible and customizable validation properties are **Valid** and **Regex**.

In the **Valid** property field, you can write a code expression to evaluate the user's input. Or, if you have more complex logic, you can define a function in a JS Object to determine whether it's acceptable. The input is acceptable when the **Valid** field evaluates to `true`.

As an example, imagine that you are creating rules for a "Create Password" field in an account registration form. If you want to be sure that new passwords don't contain certain strings, you may write:

```javascript
// Valid property of an Input widget
{{
  !["password", "123", "admin"].some(subStr => {
    return PasswordInput.text.toLowerCase().includes(subStr)
  })
}}
```

The **Regex** property is used to compare input to a regular expression that you have defined. If the user's input doesn't match the pattern, it's considered invalid. This is important when you need to be sure that the content exactly follows the formatting of your datasource.

## Properties

Properties allow you to edit the table, connect it with other widgets, and customize how the user interacts with it.

### General properties

General properties control the data and behavior of the Input widget. These properties are present in the widget's properties pane.

| Widget Property     | Description       |
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
| [**Height**](/reference/widgets/#height)  | Configures how a widget’s height reacts to content changes. It has three possible configurations:<br/>**Fixed**: The height of the widget remains as set using drag and resize.<br/>**Auto Height**: The height of the widget reacts to content changes.<br/>  **Auto Height with limits**: Same as Auto height, with a configurable option to set the minimum and maximum number of rows that can be occupied by the widget.                                      |
| **Reset on Submit** | Clears the value entered by the user after the user submits with the Enter key.       |

### Reference properties

Reference properties are used to access the widget's data and state using code. When using reference properties, substitute `<input_name>` in the examples below with the name of your Input widget.

| Reference Property | Description       | Code Snippet |
| ---------------- | ----------------- | ------------ |
| **text**         | Contains the widget's text / user input, either as a _string_ or _number_. depending on the widget's **Data Type** property. | `{{ Input1.text }}` |
| **isDisabled**   | Reflects the state of the widget's **Disabled** setting.    | `{{ Input1.isDisabled }}` |
| **isValid**      | Reflects whether the widget's input is considered **Valid**.  | `{{ Input1.isValid }}` | 
| **isVisible**    | Reflects the state of the widget's **Visible** setting.   | `{{ Input1.isVisible }}` |

### Style properties

Style properties allow you to change the look and feel of the Input widget. These properties are present in the widget's properties pane.

| Style Property     | Description              |
| ------------------ | ------------------------ |
| **Font Color**       | Sets the text color for the label. Accepts valid CSS [`color` ](https://developer.mozilla.org/en-US/docs/Web/CSS/color)values.   |
| **Font Size**        | Sets the size of the label font. Accepts valid CSS [`font-size`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size) values. |
| **Emphasis** | Toggles font styles (**bold** or _italic)._   |
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

## Further reading

- [Currency Input](/reference/widgets/currency-input)
- [Phone Input](/reference/widgets/phone-input)
- [Form widget](/reference/widgets/form)
