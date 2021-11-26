---
description: >-
  Buttons are used to capture user intent and trigger actions based on that
  intent.
---

# Button

| Property                 | Description                                                                                                                                                                                                      |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Label**                | Sets the label of the button.                                                                                                                                                                                    |
| **Button Style**         | Sets the style of the button. You can choose from three button styles: Primary, Secondary & Danger Button.                                                                                                       |
| **Visible**              | Controls widget's visibility on the page. When turned off, the widget will not be visible when the app is published but shows a translucent state in edit mode                                                   |
| **Disabled**             | Disables input to the widget. The widget will remain visible to the user but user input will not be allowed.                                                                                                     |
| **Google Recaptcha Key** | Adds a [Google ReCAPTCHA v3](https://www.google.com/recaptcha/) check to the button. The token will be accessible from the API pane with the `recaptchaToken` key (see [Google reCAPTCHA](google-recaptcha.md)). |
| **Icon**                 | Gives a list of icons you can add to your buttons.                                                                                                                                                               |
| **Icon Alignment**       | Sets the alignment of the selected icon .                                                                                                                                                                        |

| Action      | Description                                                                                                                                        |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **onClick** | Sets the action to be run when the user clicks a button. See a list of [supported actions](../../core-concepts/writing-code/appsmith-framework.md) |

{% hint style="info" %}
We currently use the icons from [Blueprint](https://blueprintjs.com) library. You can see the list of icons [here](https://blueprintjs.com/docs/#icons).
{% endhint %}
