# Radio Group



{% embed url="https://youtu.be/yhsTdLgmi0c" %}
How to set the label properties.
{% endembed %}

{% embed url="https://youtu.be/ZQ3CKFx3cbM" %}

## Properties&#x20;

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.&#x20;

### Widget Properties&#x20;

These properties allow you to edit the Radio Group widget. All these properties are present in the property pane of the widget. The following table lists all the widget properties.

| Property                   | Description                                                                                                          |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **Options**                | It sets a list of options for a user to select. Values must be unique.                                               |
| **Default Selected Value** | Sets a default value that is selected as user input unless it is changed by the user.                                |
| **Inline**                 | Whether the checkbox buttons are to be displayed inline horizontally.                                                |
| **Required**               | When turned on, it makes a user input required and disables any form submission until input is made.                 |
| **Visible**                | Controls widget's visibility on the page. When turned off, the widget will not be visible when the app is published. |
| **Disabled**               | Disables input to this widget.                                                                                       |
| **Animate Loading**        | Allows you to control a widget’s animation on the page load.                                                         |
| **Alignment**              | Sets alignment of the widget.                                                                                        |

### Binding Properties&#x20;

These properties help you share values between widgets and also allow you to easily access the widget property within Queries or JS functions.

| Property                | Description                                                                       | Code Snippet                          |
| ----------------------- | --------------------------------------------------------------------------------- | ------------------------------------- |
| **isRequired**          | This property indicates whether the widget is required or not.                    | `{{widget_name.isRequired}}`          |
| **isVisible**           | This property indicates whether the widget is visible or not.                     | `{{widget_name.isVisible}}`           |
| **selectedOptionValue** | This property dispays value of selected option. For example- Y for Yes, N for No. | `{{widget_name.selectedOptionValue}}` |

### Events

&#x20;They are a set of actions that you can perform on the widget:

| Events                | Description                                                    |   |
| --------------------- | -------------------------------------------------------------- | - |
| **onSelectionChange** | Sets the action to be run when the selection state is changed. |   |

### Label

The property hosts a group of configurations that you can use to associate a display name and define a placement for the widget. These properties are usually useful when you want to design forms that follow a defined alignment for your form fields and give a professional look to your forms. Below are the properties that you can use:

| Label         | Description                                                  |   |
| ------------- | ------------------------------------------------------------ | - |
| **Text**      | Sets the label text of the widget.                           |   |
| **Position**  | Sets the label position of the widget.                       |   |
| **Alignment** | Sets the label alignment of the widget.                      |   |
| **Width**     | Sets the label width of the widget as the number of columns. |   |

Let's understand these properties in detail:

#### **Text**

It allows you to set the display name for the Radio Group. For example, if you want the user to select a Gender Type, you can enter the text as "Gender."

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

### Styles&#x20;

Style properties allow you to change the look and feel of the widget.

| Style                | Description                                              |   |
| -------------------- | -------------------------------------------------------- | - |
| **Label Text Color** | Allows you to set text color for the label.              |   |
| **Label Text Size**  | Allows you to set the size of the label.                 |   |
| **Label Font Style** | Allows you to choose a font style, i.e., bold or italic. |   |
| **Accent color**     | Sets the accent color of the widget.                     |   |
