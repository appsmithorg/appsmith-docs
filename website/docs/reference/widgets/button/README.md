# Button

The button widget is a clickable entity used to capture user intent by triggering an attached event.

<VideoEmbed host="youtube" videoId="8FOJ1CFRQcU" title="How to use Button Widget" caption="How to use Button Widget"/>

## Trigger actions with buttons

To execute an action or function when the Button widget is clicked, you must use the button's `onClick` event property. This is an event listener that, when the widget is clicked, executes whatever action or code has been added in the button's properties pane in the `onClick` field.

Appsmith has a number of [built-in functions](/reference/appsmith-framework/widget-actions/) that can be selected with the GUI in the properties pane, or you can click the "JS" tag next to **onClick** to allow writing custom code in this field instead.

### Example 1: Built-ins

Imagine that you've created a query that returns a passage of text to be displayed in your app within a [Text widget](/reference/widgets/text/). You might want to provide the user an easy way to copy the text to their clipboard, so they can paste it elsewhere. For this, you can use the built-in [`copyToClipboard()`](/reference/appsmith-framework/widget-actions/copy-to-clipboard/) function.

Drag a Button widget onto the canvas near your Text widget, and find the **onClick** field in its properties pane. By default, this field is a dropdown menu with options to select an action to use. Select "Copy to clipboard."

A new input box has appeared alongside the **onClick** field, which reads "Text to be copied to clipboard." Here, you can use a code snippet to connect the content of your Text widget to the button's action:

```javascript
// in the Button's onClick > "Text to be copied to clipboard" field.
{{ Text1.text }}
```

Now when the user clicks the Button, the text content contained within the Text widget is added to the user's clipboard, ready to paste. (You may want to update the button's **Label** property to something like "Copy").

### Example 2: Custom code

There are some cases where you might want to create more complex flows based on certain conditions; when this is the case, consider writing your own code to handle the logic. This example is going to demonstrate how to use custom code in the event field to achieve a more complex action.

In [example 1](#example-1-built-ins), you used the properties pane GUI to set up an action that copies the text content of a [Text widget](/reference/widgets/text/) to the user's clipboard, using the built-in [`copyToClipboard()`](/reference/appsmith-framework/widget-actions/copy-to-clipboard/) function. Let's add an alert message to this event to let the user know that the content was successfully copied.

When inside of the button's properties pane, you can toggle the "JS" flag next to the **onClick** field to allow writing code in it. If there is already a function selected with the GUI, toggling the "JS" tag will convert that selected action to equivalent code that you can modify.

After example 1, the contents of the button's **onClick** field are:

```javascript
{{ copyToClipboard(Text1.text) }}
```

To add an alert message using the built-in [`showAlert()`](/reference/appsmith-framework/widget-actions/show-alert/) function, we can simply add a semicolon after the `copyToClipboard()` call, and then write the `showAlert()` call directly after:

```javascript
{{ copyToClipboard(Text1.text); showAlert("Copied to clipboard!", "success") }}
```

This is valid, shows the user a success message when they use the button. Unfortunately though, the fields of the properties pane become crowded and difficult to maintain when they have more than a single simple function call in them. For this reason, when you are writing more than a very small code snippet, it's recommended to use [JS Objects](/core-concepts/writing-code/javascript-editor-beta). This way, you can use Appsmith's [code editor](/core-concepts/writing-code/javascript-editor-beta#working-with-javascript-editor) to write multi-line, well-organized functions that take advantage of the code editor's features like the debugger.

Let's move the code into a JS Object and connect it to the button's event.

1. First, [create a JS Object](/core-concepts/writing-code/javascript-editor-beta#js-object) and name it something meaningful, like `eventFunctions`.
2. Remove the placeholder code in the object, and update the object so that it contains:
    ```javascript
    export default {

	    button1Event: () => {
            copyToClipboard(Text1.text)
            showAlert("Copied to clipboard!", "success")
	    }

    }
    ```
    :::tip
    Since JS Objects are written in the code editor and not a simple input box, you don't have to use mustache syntax `{{ }}` here.
    :::
3. Back in the button's properties pane, update the **onClick** field so that it only contains:
    ```javscript
    {{ eventFunctions.button1Event() }}
    ```

The button actions should work again as before. But now, you can add as much complexity or logic as you like to the function in the JS Object without making the button's properties cramped and unreadable; the button's **onClick** can simply be a reference to the JS Object's function, where the real working code is located.

## Buttons in forms

Every [Form widget](/reference/widgets/button/) comes with two buttons automatically: one labeled "Submit," and another labeled "Reset." These buttons (and any other button you drag _into the form widget's area_) can have some special behavior, controlled by two of the button's properties:

### Disabled invalid forms 

When this button property is turned on, the button is **Disabled** while the form has any required fields that are incomplete.

For example, imagine that you have a form with an [Input widget](/reference/widgets/input/) whose **Required** property is turned on. If that input field hasn't been completed by the user, then the button won't be usable.

### Reset form on success

When this button property is turned on, the button can be used to reset all fields present in the form's area to their default state.

## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

### General

General properties control the data and behavior of the widget. These properties are present in the properties pane of the widget.

|    Property    |    Description    |
| -------------- | ----------------- |
| **Label**                    | Sets the text shown within the widget.   |
| **Tooltip**                  | Sets a tooltip that appears when the user hovers over the widget with the mouse. Use this to provide hints or extra information to the user.         |
| **Google reCAPTCHA Key**     | Providing a Google reCAPTCHA [site key](https://cloud.google.com/recaptcha-enterprise/docs/create-key) here adds a [Google reCAPTCHA](https://www.google.com/recaptcha/about/) check to the button. The token is accessible from the API pane with the`recaptchaToken` key (see the [Google reCAPTCHA](https://www.google.com/recaptcha/about/) docs). [Read more about using Google reCAPTCHA Keys in Appsmith](/reference/widgets/button/google-recaptcha/).  |
| **Google reCAPTCHA Version** | Sets the Google reCAPTCHA version to use for the button, either v2 or v3.  |
| **Visible**                  | Controls widget's visibility on the page. When turned off: The widget won't be visible in the published app. It appears translucent when in Edit mode.  |
| **Disabled**                 | Makes the widget un-clickable or unusable. The widget remains visible to the user but user interaction won't be allowed.   |
| **Animate loading**          | When turned off, the widget loads without any skeletal animation. You can use a toggle switch to turn it on/off. You can also turn it off/on using javascript by enabling the JS label next to it. |

### Reference

Reference properties are used to access the widget's data and state using code. When using reference properties, substitute `<button_name>` in the examples below with the name of your button widget.

|    Property     |    Description    |    Code Snippet    |
| --------------- | ----------------- | ------------------ |
| **text**               | Reflects the **Label** property, which contains the text shown in the button's area _(string)._      | `{{ <button_name>.text }}` |
| **googleRecaptchaKey** | Reflects the **Google reCAPTCHA Key** property, contains the button's reCAPTCHA site key _(string)._ [Read more about using Google reCAPTCHA Keys in Appsmith](/reference/widgets/button/google-recaptcha/). | `{{ <button_name>.googleRecaptchaKey }}` |
| **isVisible**          | Reflects the state of the widget's **Visible** setting _(bool)_.                                     | `{{ <button_name>.isVisible }}` |
| **isDisabled**         | Reflects the state of the widget's **Disabled** setting _(bool)_.                                    | `{{ <button_name>.isDisabled }}` |

### Style

Style properties allow you to change the look and feel of the button. These properties are present in the properties pane of the widget.

|    Style    | Description    |
| ----------- | -------------- |
| **Button Color**   | Sets the color of the widget's button. Accepts valid CSS [`color` ](https://developer.mozilla.org/en-US/docs/Web/CSS/color)values.   |
| **Button Variant** | Sets the button style type to represent its significance - Primary, Secondary, or Tertiary. You can use JavaScript to set this field by writing code that evaluates to the _string_ "PRIMARY", "SECONDARY", or "TERTIARY".  |
| **Border Radius**  | Rounds the corners of the widget's outer edge. With JS enabled, this accepts valid CSS [`border-radius`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) values.  |
| **Box Shadow**     | Casts a drop shadow from the frame of the widget. With JS enabled, this accepts valid CSS [`box-shadow`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) values.    |
| **Icon**           | Sets an icon to be included on the button.   |
| **Icon Alignment** | Sets whether the icon appears on the left or right of the button's label text.  |
| **Placement**      | Defines where the button's icon and label appear within the space of the button. **Start:** The icon and label appear at the left-most side of the button; **Center:** The icon and label appear in the center of the button space; **Between:** The icon and label appear at opposite ends of the button's space. You can use JavaScript to set this field by writing code that evaluates to the _string_ "START", "CENTER", or "BETWEEN". |

:::info
Appsmith uses icons from the [Blueprint](https://blueprintjs.com) library. See the [list of icons here](https://blueprintjs.com/docs/#icons).
:::

### Events

These event handlers can be used to run queries, JS code, or other [supported actions](/reference/appsmith-framework/widget-actions/) when the event is triggered.

|    Event    |    Description     |
| ----------- | ------------------ |
| **onClick** | Sets an action to take place when the user clicks on this widget. Can be set from the GUI list of built-in actions, or you can define a custom JavaScript function to call instead. |

## Further reading

You may be interested in these pages that can come in handy with the Button widget:

1. [Appsmith Framework built-in actions](/reference/appsmith-framework/widget-actions/)
2. [Queries](https://docs.appsmith.com/core-concepts/data-access-and-binding/querying-a-database)
3. [Form widget](/reference/widgets/form)