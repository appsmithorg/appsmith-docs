# Button

The button widget is a clickable entity used to capture user intent by triggering an attached event.

<VideoEmbed host="youtube" videoId="8FOJ1CFRQcU" title="How to use Button Widget" caption="How to use Button Widget"/>

## Trigger actions with buttons


**Example 1:**

TODO: Built-in function

**Example 2:**

TODO: Custom JS object function

## Buttons in forms

TODO: Buttons in forms w/ the 2 unique properties

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