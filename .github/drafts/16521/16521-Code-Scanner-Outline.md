# Introduction

 * Code Scanner Intro

  * Video

# Usage

Explain the functionality in brief and provide some use cases where this widget can be helpful to the user.

* **Warehouse Example**- With the help of a code scanner widget, employees can easily keep track of their warehouse inventories. They can use a code scanner in their app to scan codes rather than manually entering them.
* **Restaurant Example**- Exaplain use of QR codes in Restaurants

# Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

| Property        | Type                 | Description                                                                                                         | Code Snippet                |
|-----------------|----------------------|---------------------------------------------------------------------------------------------------------------------|-----------------------------|
| Text            | Formatting           | Sets the label text of the widget.                                                                                  | -                           |
| [Visible](https://docs.appsmith.com/reference/widgets)          | Binding & Formatting | Controls widget's visibility on the page. When turned off, the widget will not be visible when the app is published. Learn more about [Visible Property](https://docs.appsmith.com/reference/widgets)   | {{CodeScanner1.isVisible}}  |
| [Disabled](https://docs.appsmith.com/reference/widgets)         | Binding & Formatting | Disables input to the widget. The widget will remain visible to the user but a user input will not be allowed. Learn more about [Disable Property](https://docs.appsmith.com/reference/widgets)      | {{CodeScanner1.isDisabled}} |
| [Animate Loading](https://docs.appsmith.com/reference/widgets)  | Formatting           | Controls the loading of the widget. Learn more about [Tooltip](https://docs.appsmith.com/reference/widgets)                                                                                 | -                           |
| [Animate Loading](https://docs.appsmith.com/reference/widgets)           | Formatting           | It sets a tooltip for the widget. You can add hints or extra information about the required input from the user. Learn more about [Tooltip](https://docs.appsmith.com/reference/widgets)    | -                           |
| value           | Binding              | Fetches the value of scanned code                                                                                   | {{CodeScanner1.value}}      |
|                 |                      |                                                                                                                     |                             |



### Text

### Value


# Events

Event Intro
| Event          |  Description                                     | Example                       | Code Snippet                                                      |
|----------------|--------------------------------------------------|-------------------------------|-------------------------------------------------------------------|
| onCodeDetected | Triggers an action when a valid code is detected | <Describe the example usage.> | <Add code snippets for reading data when the event is triggered.> |

### onCodeDetected 


# Styles
  Style properties allow you to change the look and feel of the widget. 
  | Style          | Description                                            |
|----------------|--------------------------------------------------------|
| Icon           | Sets an icon to be included in the input field.        |
| Position       | Sets the label position of the widget.                 |
| Placement      | Sets the label alignment of the widget.                |
| Button Color   | Allows you to set color for the button.                |
|  Border Radius | Allows you to define curved corners.                   |
| Box Shadow     | Allows you to choose from the available shadow styles. |

## Conclusion
## Cross Reference Section
 The following resources will come in handy as you need to learn new tricks:
* Core Concepts
* Widgets
* Appsmith Framework
* JavaScript Editor
 
 ## Troubleshooting



