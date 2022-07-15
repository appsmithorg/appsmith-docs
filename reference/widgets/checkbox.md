---
description: >-
  Checkbox is a simple UI widget you can use when you want users to make a
  binary choice.
---

# Checkbox

![Click to expand](../../.gitbook/assets/checkbox.gif)

| Internal Property | Description                                                                    |
| ----------------- | ------------------------------------------------------------------------------ |
| **isChecked**     | This value is a boolean that is set to true if the checkbox is checked.        |
| **isDisabled**    | This value is a boolean that is set to true if the checkbox is disabled.       |
| **isVisible**     | This value is a boolean that is set to true if the checkbox is set as visbile. |

| Property             | Description                                                                                                         |
| -------------------- | ------------------------------------------------------------------------------------------------------------------- |
| **Label**            | Sets the label of the checkbox.                                                                                     |
| **Alignment**        | Sets the alignment of the widget.                                                                                   |
| **Default Selected** | Sets a default option that will be captured as user input unless it is changed by the user.                         |
| **Required**         | When turned on, it disables any form submission until input is made.                                                |
| **Visible**          | Controls widget's visibility on the page. When turned off, the widget will not be visible when the app is published |
| **Disabled**         | Disables input to the widget. The widget will remain visible to the user but user input will not be allowed.        |

| Action            | Description                                                                                                                   |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| **onCheckChange** | Sets the action to be run when the user checks/unchecks a checkbox. See a list of [supported actions](../appsmith-framework/) |
