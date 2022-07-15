# Checkbox Group

Checkbox group widget allows users to configure multiple checkboxes together.

{% embed url="https://youtu.be/-7cvZ2yCgtE" %}

## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

### Widget Properties

These properties allow you to edit the Checkbox Group widget. All of these properties are present in the property pane of the widget. The following table lists all the widget properties.

| Property                    | Description                                                                                                                                                                        |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Options**                 | Sets a list of options (arranged in key-value pairs) for a user to select. Values must be unique.                                                                                  |
| **Default Selected Values** | Sets a value to be checked by default on page load. Expects the value of the desired box, not its key/name.                                                                        |
| **Required**                | Sets whether the checkbox is a mandatory field. When the checkbox is within a Form widget, that Form's submit button will be automatically disabled until the Checkbox is checked. |
| **Visible**                 | Controls widget's visibility on the page. When turned off: The widget will not be visible when the app is published. It appears translucent when in Edit mode.                     |
| **Disabled**                | Makes the widget un-clickable or unusable. The widget will remain visible to the user but user interaction will not be allowed.                                                    |
| **Inline**                  | Sets whether the checkbox buttons will be displayed [inline ](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline\_elements)horizontally.                                     |
| **Select All Options**      | Enables an extra control for the user to select/deselect all boxes at once.                                                                                                        |

### Label

The property hosts a group of configurations that you can use to associate a display name and define a placement for the widget. These properties are usually useful when you want to design forms that follow a defined alignment for your form fields and give a professional look to your forms. Below are the properties that you can use:

#### **Text**

It allows you to set the display name for the Checkbox Group. For example, if you want the user to give their consent to the terms & conditions, you can enter the text as "Terms & Conditions."

{% hint style="info" %}
You can leave the text empty if you don't want any display name for your Checkbox Group widget.
{% endhint %}

#### **Position**

It allows you to specify the placement of the label. You can select one of the available options:

* Top - It allows you to align the text at the top of the Checkbox Group.
* Left - It aligns the text to the left of the Checkbox Group. When you select **Left** alignment, you get additional settings that you can use to control the alignment and define the text's width.
  * Alignment - With the help of alignment, you can define the placement of the text in accordance with the position of the Checkbox Group. You can choose:
    * Left - It aligns the text to the widget's left boundary that is away from the Checkbox Group.
    * Right - It aligns the text closer to the Checkbox Group.
  * Width - With the help of width, you can define the **number of columns** in the **grid** that surrounds the widget. You can specify how close or far the text can be placed to the Checkbox Group.
* Auto - It automatically adjusts the position of the text based on the Checkbox Group's height.

{% hint style="info" %}
Columns are the dashed lines (-----) that surround a widget when you try to drag and drop it on the canvas.
{% endhint %}

{% embed url="https://youtu.be/KVCjIWWzO5o" %}
How to set the label properties?
{% endembed %}

### Binding Properties

These properties allow you to bind your Checkbox Group widget with any other widget in queries or JS objects. The following table lists all the binding properties.

| Binding Property   | Description                                                                                                                                                                           |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **isDisabled**     | Reflects the state of the widget's **Disabled** setting _(bool)_.                                                                                                                     |
| **isValid**        | Represents whether the user's selection is valid _(bool)_. This will only be _false_ when the widget's **Required** property is enabled/true, and the user has not checked any boxes. |
| **isVisible**      | Reflects the state of the widget's **Visible** setting _(bool)_.                                                                                                                      |
| **options**        | Contains an array of objects representing the widget's checkboxes and their values. E.g. `[{"label": "Blue", "value": "BLUE"}, ... ]`                                                 |
| **selectedValues** | Contains an array of strings representing the values of the checkboxes within the widget that are checked.                                                                            |

### Events

You can define functions that will be called when these events are triggered in the widget.

| Event                 | Description                                                                                                                                                                                                                        |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **onSelectionChange** | Sets an an action to take place when the user selects or deselects a checkbox. Can be set from the GUI list of common actions ([examples here](broken-reference)), or you can define a custom JavaScript function to call instead. |

### Styles

Style properties allow you to change the look and feel of the widget.

| Style Property    | Description                                                                                                                                                                                                                                                                                            |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Alignment**     | Sets how the checkboxes are aligned within the widget. Behaves similarly to CSS [`justify-content`](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content) rules. When using JS to set this property, allowed values are: unset, flex-start, flex-end, center, space-between, space-around. |
| **Accent Color**  | Sets the widget's accent color, which appears as the fill color for the checkbox when checked. Accepts CSS [`color` ](https://developer.mozilla.org/en-US/docs/Web/CSS/color)values.                                                                                                                   |
| **Border Radius** | Rounds the corners of the widget's outer edge. With JS enabled, this accepts valid CSS [`border-radius`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) values.                                                                                                                       |
