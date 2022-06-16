# Rich Text Editor

The Rich Text Editor is used to capture Rich Text input from a user. The input is captured in HTML format.

{% embed url="https://youtu.be/_KrxFScQJys" %}

## Properties&#x20;

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.&#x20;

### Widget Properties

These properties allow you to edit the Rich text Editor widget. All these properties are present in the property pane of the widget. The following table lists all the widget properties.

| Property            | Description                                                                                                         |
| ------------------- | ------------------------------------------------------------------------------------------------------------------- |
| **Input Type**      | Sets the input type of the default text property in the widget.                                                     |
| **Default Text**    | This property sets the default text of the Rich Text Editor.                                                        |
| **Required**        | Makes input to the widget mandatory.                                                                                |
| **Visible**         | Controls widget's visibility on the page. When turned off, the widget will not be visible when the app is published |
| **Disable**         | Disables input to the widget. The widget will remain visible to the user but a user input will not be allowed.      |
| **Animate Loading** | Controls the loading of the widget.                                                                                 |
| **Hide toolbar**    | Controls the visibility of the toolbar                                                                              |

### Binding Properties

&#x20;These properties help you share values between widgets and also allow you to easily access the widget property within Queries or JS functions.

| Property       | Description                                                    | Code Snippet                     |
| -------------- | -------------------------------------------------------------- | -------------------------------- |
| **isDisabled** | This property indicates whether the widget is disabled or not. | `{{RichTextEditor1.isDisabled}}` |
| **isVisible**  | This property indicates whether the widget is visible or not.  | `{{RichTextEditor1.isVisible}}`  |
| **text**       | It fetches the value that the user has entered.                | `{{RichTextEditor1.text}}`       |

### Events

They are a set of actions that you can perform on the widget.&#x20;

| Events           | Description                                                                                                                                 |   |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | - |
| **onTextChange** | Sets the action to be run when the user inputs text. See a list of [supported actions](../core-concepts/writing-code/appsmith-framework.md) |   |

### Label

The property hosts a group of configurations that you can use to associate a display name and define a placement for the widget. These properties are usually useful when you want to design forms that follow a defined alignment for your form fields and give a professional look to your forms. Below are the properties that you can use:

| Label                | Description                                                  |
| -------------------- | ------------------------------------------------------------ |
| **Text**             | Sets the label text of the widget.                           |
| **Position**         | Sets the label position of the widget.                       |
| **Alignment**        | Sets the label alignment of the widget.                      |
| **Width**            | Sets the label width of the widget as the number of columns. |
| **Label Text Color** | Allows you to set text color for the label.                  |
| **Label Text Size**  | Allows you to set the size of the label.                     |
| **Label Font Style** | Allows you to choose a font style, i.e., bold or italic.     |

#### **Text**

It allows you to set the display name for the Rich Text Editor. For example, if you want the user to write a cover letter, you can enter the text as "Cover Letter."

{% hint style="info" %}
You can leave the text empty if you don't want any display name for your Rich Text Editor widget.
{% endhint %}

#### **Position**

It allows you to specify the placement of the label. You can select one of the available options:

* Top - It allows you to align the text at the top of the Rich Text Editor.
* Left - It aligns the text to the left of the Rich Text Editor. When you select **Left** alignment, you get additional settings that you can use to control the alignment and define the text's width.
  * Alignment - With the help of alignment, you can define the placement of the text in accordance with the position of the Rich Text Editor. You can choose:
    * Left - It aligns the text to the widget's left boundary that is away from the Rich Text Editor.
    * Right - It aligns the text closer to the Rich Text Editor.
  * Width - With the help of width, you can define the **number of columns** in the **grid** that surrounds the widget. You can specify how close or far the text can be placed to the Rich Text Editor.
* Auto - It automatically adjusts the position of the text based on the Rich Text Editor's height.

{% hint style="info" %}
Columns are the dashed lines (-----) that surround a widget when you try to drag and drop it on the canvas.
{% endhint %}

{% embed url="https://youtu.be/WACXsnoBa5Y" %}
How to set the label properties?
{% endembed %}

### Styles&#x20;

Style properties allow you to change the look and feel of the widget.

| Style             | Description                                            |   |
| ----------------- | ------------------------------------------------------ | - |
| **Border Radius** | Allows you to define curved corners.                   |   |
| **Box Shadow**    | Allows you to choose from the available shadow styles. |   |

