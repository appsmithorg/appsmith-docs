# Switch

The Switch is a simple UI widget you can use when you want users to make a binary choice.

{% embed url="https://youtu.be/5kNWJ9mtlOw" %}

## Properties&#x20;

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.&#x20;

### Widget Properties&#x20;

These properties allow you to edit the widget. All these properties are present in the property pane of the widget. The following table lists all the widget properties.

| Property             | Description                                                                                                                      |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **Default Selected** | This value is a boolean that is set to true if the switch is turned on.                                                          |
| **Visible**          | Controls widget's visibility on the page. When turned off, the widget will not be visible when the app is published              |
| **Disabled**         | Disables input/selection to the widget. The widget will remain visible to the user but user input/selection will not be allowed. |
| **Animate Loading**  | Allows you to control a widget’s animation on the page load.                                                                     |

### Binding Properties&#x20;

These properties help you share values between widgets and also allow you to easily access the widget property within Queries or JS functions.

| Property         | Description                                                                  | Code Snippet                   |
| ---------------- | ---------------------------------------------------------------------------- | ------------------------------ |
| **isDisabled**   | This value is a boolean that is set to true if the switch is disabled.       | `{{widget_name.isDisabled}}`   |
| **isSwitchedOn** | This value is a boolean that is set to true if the switch is turned on.      | `{{widget_name.isSwitchedOn}}` |
| **isVisible**    | This value is a boolean that is set to true if the switch is set as visbile. | `{{widget_name.isVisible}}`    |

### Events&#x20;

They are a set of actions that you can perform on the widget. The following table lists the actions:

| Events       | Description                                                                                                                                        |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **onChange** | Sets the action to be run when the user toggles the switch. See a list of [supported actions](../core-concepts/writing-code/appsmith-framework.md) |

### Label

The property hosts a group of configurations that you can use to associate a display name and define a placement for the widget. These properties are usually useful when you want to design forms that follow a defined alignment for your form fields and give a professional look to your forms. Below are the properties that you can use:

| Label         | Description                            |
| ------------- | -------------------------------------- |
| **Label**     | Sets the label of the switch.          |
| **Position**  | Sets the label position of the widget. |
| **Alignment** | Sets the alignment of the widget.      |

| Label Style          | Description                                              |   |
| -------------------- | -------------------------------------------------------- | - |
| **Text Color**       | Allows you to set text color for the label.              |   |
| **Text Size**        | Allows you to set the size of the label.                 |   |
| **Label Font Style** | Allows you to choose a font style, i.e., bold or italic. |   |

### Styles&#x20;

Style properties allow you to change the look and feel of the widget.

| Style            |                                           |   |
| ---------------- | ----------------------------------------- | - |
| **Accent color** | Sets the background color of the widget.  |   |
