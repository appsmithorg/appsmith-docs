# Button

The button widget is a clickable entity that triggers any event attached to it. It captures user intent and triggers an action accordingly.

<figure>
 <object data="https://www.youtube.com/embed/8FOJ1CFRQcU?autoplay=0" width='860px' height='515px'></object>
 <figcaption align="center"><i>How to use Button Widget</i></figcaption>
</figure>

## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

### Widget Properties

These properties allow you to edit the Button widget. All of these properties are present in the property pane of the widget. The following table lists all the widget properties.

| Property                     | Description                                                                                                                                                                                                                                                                                                                                            |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Label**                    | Sets the text shown within the widget.                                                                                                                                                                                                                                                                                                                 |
| **Tooltip**                  | Sets a tooltip that appears when the user hovers over the widget with the mouse. Use this to provide hints or extra information to the user.                                                                                                                                                                                                           |
| **Google reCAPTCHA Key**     | Providing a Google reCAPTCHA [site key](https://cloud.google.com/recaptcha-enterprise/docs/create-key) here adds a [Google reCAPTCHA](https://www.google.com/recaptcha/about/) check to the button. The token is accessible from the API pane with the`recaptchaToken` key (see our [Google reCAPTCHA](https://www.google.com/recaptcha/about/) docs). |
| **Google reCAPTCHA Version** | Sets the Google reCAPTCHA version to use for the button, either v2 or v3.                                                                                                                                                                                                                                                                              |
| **Visible**                  | Controls widget's visibility on the page. When turned off: The widget will not be visible when the app is published. It appears translucent when in Edit mode.                                                                                                                                                                                         |
| **Disabled**                 | Makes the widget un-clickable or unusable. The widget will remain visible to the user but user interaction will not be allowed.                                                                                                                                                                                                                        |
| **Animate loading**          | When turned off, the widget will load without any skeletal animation. You can use a toggle switch to turn it on/off. You can also turn it off/on using javascript by enabling the JS label next to it.                                                                                                                                                 |

Let's understand the widget properties in detail.

#### Label

It lets the user set the text inside the button, describing the function it performs. For example, if a button performs an action that updates the data, you can enter the label as "Update."

<figure>
 <object data="https://www.youtube.com/embed/VdUrYvo06mc?autoplay=0" width='860px' height='515px'></object>
 <figcaption align="center"><i>Label</i></figcaption>
</figure>

#### Visible

`Visible` controls the widget's visibility on the app's page. The widget will not be visible on the published app if you turn off this property. You can also write a JS code to link Visible's functionality to a user action. Click on `JS` next to the `Visible` to write JavaScript code.

For example, let's drag a checkbox widget `checkbox1` onto the canvas and bind it to the `Visible` property. To enable the `Visible` when the user checks the checkbox, add the following JavaScript code:

```
{{Checkbox1.isChecked}}
```

When you tick the checkbox, it will enable the Visible property, and the button will be visible in the app.

<figure>
 <object data="https://www.youtube.com/embed/mFVSVgbGsSA?autoplay=0" width='860px' height='515px'></object>
 <figcaption align="center"><i>Visible</i></figcaption>
</figure>

#### Disabled

When it is enabled, It makes the button unclickable and removes the focus from the button widget. The widget will be visible (if Visible is enabled) in a disabled state, but user click will not be allowed. You can also write a JS code to link Disabled's functionality to a user action. Click on `JS` next to the `Disabled` to write JavaScript code.

For example, let's drag a checkbox widget `checkbox1` onto the canvas and bind it to the `Disabled` property. To enable the `Disabled` when the user checks the checkbox, add the following JavaScript code:

```
{{Checkbox1.isChecked}}
```

When you tick the checkbox, it will enable the Disabled property and prevent a user input on the button.

<figure>
 <object data="https://www.youtube.com/embed/iaubB0XGouU?autoplay=0" width='860px' height='515px'></object>
 <figcaption align="center"><i>Disabled</i></figcaption>
</figure>

### Binding Properties

These properties allow you to bind your Button widget with any other widget in queries or JS objects. The following table lists all the binding properties.

| Binding Property       | Description                                                                                          |
| ---------------------- | ---------------------------------------------------------------------------------------------------- |
| **text**               | Reflects the **Label** property, contains the text that is shown in the button _(string)._           |
| **googleRecaptchaKey** | Reflects the **Google reCAPTCHA Key** property, contains the button's reCAPTCHA site key _(string)._ |
| **isVisible**          | Reflects the state of the widget's **Visible** setting _(bool)_.                                     |
| **isDisabled**         | Reflects the state of the widget's **Disabled** setting _(bool)_.                                    |

### Events

You can define functions that will be called when these events are triggered in the widget.

| Event       | Description                                                                                                                                                                                                                                                         |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **onClick** | Sets an an action to take place when the user clicks on this widget. Can be set from the GUI list of common actions (See a list of [supported actions](../../appsmith-framework/widget-actions/).), or you can define a custom JavaScript function to call instead. |

### Styles

Style properties allow you to change the look and feel of the widget.

| Style Property     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Button Color**   | Sets the color of the widget's button. Accepts valid CSS [`color` ](https://developer.mozilla.org/en-US/docs/Web/CSS/color)values.                                                                                                                                                                                                                                                                                                          |
| **Button Variant** | Sets the the button style type to represent its significance - Primary, Secondary, or Tertiary. You can use JavaScript to set this field by writing code that evaluates to the _string_ "PRIMARY", "SECONDARY", or "TERTIARY".                                                                                                                                                                                                              |
| **Border Radius**  | Rounds the corners of the widget's outer edge. With JS enabled, this accepts valid CSS [`border-radius`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) values.                                                                                                                                                                                                                                                            |
| **Box Shadow**     | Casts a drop shadow from the frame of the widget. With JS enabled, this accepts valid CSS [`box-shadow`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) values.                                                                                                                                                                                                                                                               |
| **Icon**           | Sets an icon to be included on the button.                                                                                                                                                                                                                                                                                                                                                                                                  |
| **Icon Alignment** | Sets whether the icon appears on the left or right of the button's label text.                                                                                                                                                                                                                                                                                                                                                              |
| **Placement**      | Defines where the button's icon and label appear within the space of the button. **Start:** The icon and label appear at the left-most side of the button; **Center:** The icon and label appear in the center of the button space; **Between:** The icon and label appear at opposite ends of the button's space. You can use JavaScript to set this field by writing code that evaluates to the _string_ "START", "CENTER", or "BETWEEN". |

<figure>
 <object data="https://www.youtube.com/embed/LOBPY1O4Wrc?autoplay=0" width='860px' height='515px'></object>
 <figcaption align="center"><i>Button styling</i></figcaption>
</figure>

:::info
We currently use the icons from [Blueprint](https://blueprintjs.com) library. You can see the list of icons [here](https://blueprintjs.com/docs/#icons).
:::