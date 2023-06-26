# Button

This page describes how to use a Button widget to trigger actions and code in your application.

<VideoEmbed host="youtube" videoId="8FOJ1CFRQcU" title="How to use Button Widget" caption="How to use Button Widget"/>

## Trigger actions with buttons

To execute an action or function when the Button widget is clicked, you must use the button's `onClick` event property. When the widget is clicked, it executes whatever function is contained in the `onClick` field.

Appsmith has a number of [built-in functions](/reference/appsmith-framework/widget-actions/) that can be selected with the GUI in the properties pane, or you can click the "JS" toggle next to **onClick** to allow writing custom code in this field instead.

**Example 1**

Buttons are often used to execute [queries](/core-concepts/data-access-and-binding/querying-a-database/). In the button's **onClick** field dropdown, you can find an "Execute a query" menu item that exposes a list of all the queries available on this page of your app. Once you select your query from the list, the button widget is ready for use.

**Example 2**

There are some cases where you might want to create more complex flows:

Once you've selected a query (see prior example), two new fields appear in the properties pane: **onSuccess** and **onError**. You can use these fields to set up subsequent functions to run after your query completes. If the query is successful, the action in the **onSuccess** field is executed. If the query returns an error response, **onError** is executed.

If you'd like even more control or more [complex workflows](/core-concepts/writing-code/workflows#complex-workflows), consider writing custom code in a [JS Object](/core-concepts/writing-code/javascript-editor-beta) to handle the logic. Once you've created a function in the JS Object, you can set the button to execute it just like you did with the query before -- this time, look for your JS Object under the "Execute a JS function" menu item.

## Buttons in forms

Buttons can have some special behaviors when they're located within the boundaries of a [Form widget](/reference/widgets/form). Its form-specific behavior is controlled by two of the button's properties:

### Disabled invalid forms 

When this button property is turned on, the button is **Disabled** while the form has any required fields that are incomplete, or while any of the fields have input that's considered invalid.

For example, imagine that you have a form with an [Input widget](/reference/widgets/input/) whose **Required** property is turned on. If that input field hasn't been completed by the user, then the button won't be usable.

Similarly, if an Input widget's **Valid** property is ```{{ Input1.text.length > 5 }}``` but the user input is only 2 characters long, the input is considered invalid and the button is disabled.

### Reset form on success

When this button property is turned on, the button can be used to reset all fields present in the form's area to their default state. This is useful for clearing inputs after the form is submitted; when both **Disabled invalid forms** and **Reset form on success** are turned on, submitting the form automatically resets the input fields so they can be used again.

## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

### General properties

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

### Reference properties

Reference properties are used to access the widget's data and state using code. When using reference properties, substitute `<button_name>` in the examples below with the name of your button widget.

|    Property     |    Description    |    Code Snippet    |
| --------------- | ----------------- | ------------------ |
| **text**               | Reflects the **Label** property, which contains the text shown in the button's area _(string)._      | `{{ <button_name>.text }}` |
| **googleRecaptchaKey** | Reflects the **Google reCAPTCHA Key** property, contains the button's reCAPTCHA site key _(string)._ [Read more about using Google reCAPTCHA Keys in Appsmith](/reference/widgets/button/google-recaptcha/). | `{{ <button_name>.googleRecaptchaKey }}` |
| **isVisible**          | Reflects the state of the widget's **Visible** setting _(bool)_.                                     | `{{ <button_name>.isVisible }}` |
| **isDisabled**         | Reflects the state of the widget's **Disabled** setting _(bool)_.                                    | `{{ <button_name>.isDisabled }}` |

### Style properties

Style properties allow you to change the look and feel of the button. These properties are present in the properties pane of the widget.

|    Style    | Description    |
| ----------- | -------------- |
| **Button Color**   | Sets the color of the widget's button. Accepts valid CSS [`color` ](https://developer.mozilla.org/en-US/docs/Web/CSS/color)values.   |
| **Button Variant** | Sets the button style type to represent its significance - Primary, Secondary, or Tertiary. You can use JavaScript to set this field by writing code that evaluates to the _string_ "PRIMARY," "SECONDARY," or "TERTIARY." |
| **Border Radius**  | Rounds the corners of the widget's outer edge. With JS enabled, this accepts valid CSS [`border-radius`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) values.  |
| **Box Shadow**     | Casts a drop shadow from the frame of the widget. With JS enabled, this accepts valid CSS [`box-shadow`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) values.    |
| **Icon**           | Sets an icon to be included on the button. Uses icons from the [Blueprint](https://blueprintjs.com) library. See the [list of icons here](https://blueprintjs.com/docs/#icons).  |
| **Icon Alignment** | Sets whether the icon appears on the left or right of the button's label text.  |
| **Placement**      | Defines where the button's icon and label appear within the space of the button. **Start:** The icon and label appear at the left-most side of the button; **Center:** The icon and label appear in the center of the button space; **Between:** The icon and label appear at opposite ends of the button's space. You can use JavaScript to set this field by writing code that evaluates to the _string_ "START," "CENTER," or "BETWEEN." |

## Events

These event handlers can be used to run queries, JS code, or other [supported actions](/reference/appsmith-framework/widget-actions/) when the event is triggered.

|    Event    |    Description     |
| ----------- | ------------------ |
| **onClick** | Sets an action to take place when the user clicks on this widget. Can be set from the GUI list of built-in actions, or you can define a custom JavaScript function to call instead. |

## Further reading

You may be interested in these pages that can come in handy with the Button widget:

1. [Built-in functions](/reference/appsmith-framework/widget-actions/)
2. [Queries](/core-concepts/data-access-and-binding/querying-a-database)
3. [Widgets](/reference/widgets/)