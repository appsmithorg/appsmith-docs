# Button

The button widget is a clickable entity that triggers any event attached to it. It captures user intent and triggers an action accordingly.

{% embed url="https://www.youtube.com/watch?v=8FOJ1CFRQcU" %}

## Properties

Properties allow you to edit the button widget, connect it with other widgets and customize the user actions.

### Widget Properties

These properties allow you to edit the button widget. All these properties are present in the property pane of the widget. The following table lists all the widget properties.

| Property                 | Description                                                                                                                                                                                                      |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Label**                | Sets the label of the button.                                                                                                                                                                                    |
| **Tooltip**              | It sets a tooltip for the widget. You can add hints or extra information about the required input from the user.                                                                                                 |
| **Google Recaptcha Key** | Adds a [Google ReCAPTCHA v3](https://www.google.com/recaptcha/) check to the button. The token will be accessible from the API pane with the `recaptchaToken` key (see [Google reCAPTCHA](google-recaptcha.md)). |
| **Visible**              | Controls widget's visibility on the page. When turned off, the widget will not be visible when the app is published but shows a translucent state in edit mode                                                   |
| **Disabled**             | It makes the button un-clickable or unusable. The widget will remain visible to the user but user input will not be allowed.                                                                                     |
| **Animate loading**      | Controls widget’s loading animation on the page. When turned off, the widget will load without any skeletal animation. This can be controlled with JS until all the widgets are rendered.                        |

Let's understand the widget properties in detail.

#### Label

It lets the user set the text inside the button, describing the function it performs. For example, if a button performs an action that updates the data, you can enter the label as "Update."

{% embed url="https://youtu.be/VdUrYvo06mc" %}

#### Visible

`Visible` controls the widget's visibility on the app's page. The widget will not be visible on the published app if you turn off this property. You can also write a JS code to link Visible's functionality to a user action. Click on `JS` next to the `Visible` to write JavaScript code.

For example, let's drag a checkbox widget `checkbox1` onto the canvas and bind it to the `Visible` property. To enable the `Visible` when the user checks the checkbox, add the following JavaScript code:

```
{{Checkbox1.isChecked}}
```

When you tick the checkbox, it will enable the Visible property, and the button will be visible in the app.

{% embed url="https://youtu.be/mFVSVgbGsSA" %}

#### Disabled

When it is enabled, It makes the button unclickable and removes the focus from the button widget. The widget will be visible (if Visible is enabled) in a disabled state, but user click will not be allowed. You can also write a JS code to link Disabled's functionality to a user action. Click on `JS` next to the `Disabled` to write JavaScript code.

For example, let's drag a checkbox widget `checkbox1` onto the canvas and bind it to the `Disabled` property. To enable the `Disabled` when the user checks the checkbox, add the following JavaScript code:

```
{{Checkbox1.isChecked}}
```

When you tick the checkbox, it will enable the Disabled property and prevent a user input on the button.

{% embed url="https://youtu.be/iaubB0XGouU" %}

### Events

| Event       | Description                                                                                                                                        |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **onClick** | Sets the action to be run when the user clicks a button. See a list of [supported actions](../../core-concepts/writing-code/appsmith-framework.md) |

### Styles

Style properties allow you to modify the button widgets visually. It has several options such as -

* **Button Color:** You can change the color of the button here by entering the hex value of the color of your choice
* **Button Variant:** It sets the type of the button based on its significance - Primary, secondary, or tertiary. You can write JavaScript code to change the button variant conditonally.
* **Border Radius:** It gives an option to make the button's corners either curved or edged.
* **Box Shadow:** It casts a drop shadow around the frame of the widget.
* **Shadow Color:** It lets you choose the color of the casted shadow.
* **Icon:** It lets you add icons to your button to provide extra information about the functionality of that button.
* **Placement:** This option lets you place the elements inside the button, like the label and icon. By default, there are three placement options - Start, between, and center. You can create custom placements using JavaScript.
* **Icon Alignment:** It helps align the icon inside the button with respect to the label.

{% embed url="https://youtu.be/LOBPY1O4Wrc" %}

{% hint style="info" %}
We currently use the icons from [Blueprint](https://blueprintjs.com) library. You can see the list of icons [here](https://blueprintjs.com/docs/#icons).
{% endhint %}
