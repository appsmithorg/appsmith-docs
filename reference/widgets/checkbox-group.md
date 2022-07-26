# Checkbox Group

Checkbox group widget allows users to configure multiple checkboxes together.

{% embed url="https://youtu.be/-7cvZ2yCgtE" %}

### Properties

| Property                    | Description                                                                                                                                               |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **options**                 | Sets a list of options for a user to select. Values must be unique.                                                                                       |
| **Default Selected Values** | Sets values of the options checked by default.                                                                                                            |
| **Label**                   | It is a group of properties that allows you to provide a name to the field and define the placement of the widget. [Learn more](checkbox-group.md#label). |
| **Inline**                  | Whether the checkbox buttons are to be displayed inline horizontally.                                                                                     |
| **Required**                | Makes input to the widget mandatory.                                                                                                                      |
| **Visible**                 | Controls the visibility of the widget.                                                                                                                    |
| **Select All Options**      | Controls whether select all control is shown.                                                                                                             |
| **Disabled**                | Disables input to this widget.                                                                                                                            |

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

## Actions

| Action                | Description                                                                                                     |
| --------------------- | --------------------------------------------------------------------------------------------------------------- |
| **onSelectionChange** | Sets the action to be run when the check state is changed. See a list of [supported actions](broken-reference). |
