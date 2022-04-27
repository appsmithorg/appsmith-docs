# Radio Group

The Radio group widget allows users to configure a group of radio buttons. It lets the user choose one option from a predefined set of options.

{% embed url="https://youtu.be/ZQ3CKFx3cbM" %}

### Properties

| Property                   | Description                                                                                                                                            |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Options**                | It sets a list of options for a user to select. Values must be unique.                                                                                 |
| **Default Selected Value** | Sets a default value that is selected as user input unless it is changed by the user.                                                                  |
| **Label**                  | It is a group of properties that allows you to provide a name to the field and define the placement of the widget. [Learn more](radio-group.md#label). |
| **Required**               | When turned on, it makes a user input required and disables any form submission until input is made.                                                   |
| **Visible**                | Controls widget's visibility on the page. When turned off, the widget will not be visible when the app is published.                                   |
| **Disabled**               | Disables input to this widget.                                                                                                                         |

### Label

The property hosts a group of configurations that you can use to associate a display name and define a placement for the widget. These properties are usually useful when you want to design forms that follow a defined alignment for your form fields and give a professional look to your forms. Below are the properties that you can use:

#### **Text**

It allows you to set the display name for the Radio Group. For example, if you want the user to select a Gender Type, you can enter the text as "Gender."&#x20;

{% hint style="info" %}
You can leave the text empty if you don't want any display name for your Radio Group widget.
{% endhint %}

#### **Position**

It allows you to specify the placement of the label. You can select one of the available options:

* Top - It allows you to align the text at the top of the Radio Group.
* Left - It aligns the text to the left of the Radio Group. When you select **Left** alignment, you get additional settings that you can use to control the alignment and define the text's width.
  * Alignment - With the help of alignment, you can define the placement of the text in accordance with the position of the Radio Group. You can choose:
    * Left - It aligns the text to the widget's left boundary that is away from the Radio Group.
    * Right - It aligns the text closer to the Radio Group.
  * Width - With the help of width, you can define the **number of columns** in the **grid** that surrounds the widget. You can specify how close or far the text can be placed to the Radio Group.
* Auto - It automatically adjusts the position of the text based on the Radio Group's height.

{% hint style="info" %}
Columns are the dashed lines (-----) that surround a widget when you try to drag and drop it on the canvas.
{% endhint %}

{% embed url="https://youtu.be/yhsTdLgmi0c" %}
How to set the label properties.
{% endembed %}

## Actions

| Action                | Description                                                    |
| --------------------- | -------------------------------------------------------------- |
| **onSelectionChange** | Sets the action to be run when the selection state is changed. |
