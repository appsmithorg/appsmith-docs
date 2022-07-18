# Input

The input widget allows the user to enter or edit data such as text, number, email, etc. It is helpful in a form widget with custom validations.

{% embed url="https://youtu.be/zNGwWO6OXlw" %}

## Properties

Properties allow you to edit the input widget, connect it with other widgets and customize the user actions.

### Widget Properties

These properties allow you to edit the input box. All these properties are present in the property pane of the widget. The following table lists all the widget properties.

| Widget Property     | Description                                                                                                                                         |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Data Type**       | Sets the type of data you want to capture in the user input. Selecting a data type will add the associated validation to the user input.            |
| **Label**           | It is a group of properties that allows you to provide a name to the field and define the placement of the widget.                                  |
| **Max Chars**       | It sets the maximum length allowed for input.                                                                                                       |
| **Placeholder**     | It sets a placeholder text inside the input. It displays an expected input or hints to the user.                                                    |
| **Tooltip**         | It sets a tooltip for the widget. You can add hints or extra information about the required input from the user.                                    |
| **Default text**    | Sets the default text in the input widget before the user has made any changes. This field can be bound to a table's selectedRow to update a record |
| **Regex**           | Used to add custom validations you want to perform on user input.                                                                                   |
| **Error message**   | Sets the text of the error message to display if Regex validation fails.                                                                            |
| **Required**        | When turned on, user input is required and disables any form submission until the user enters something in the input box.                           |
| **Visible**         | It controls the widget's visibility on the page. When turned off, the widget will not be visible when the app is published                          |
| **Disabled**        | It disables input to the widget. The widget will remain visible to the user, but user input will not be allowed.                                    |
| **Reset on Submit** | It clears the value entered by the user after submit.                                                                                               |
| **Autofocus**       | It focuses your cursor on the input box when it is loaded.                                                                                          |
| **Spellcheck**      | It checks the spelling errors for text input.                                                                                                       |

Let's understand the widget properties in detail.

#### **Data Type**

As the name suggests, data type allows the user to set the type of data you want in the input box, like- Text, Number, Email, Password.

The input box will show an error "invalid input" if the entered data does not match the data type or disable the invalid data type input. (If you select the data type as a number, you won't be able to enter text in the input box.)

{% embed url="https://youtu.be/Ehg74WJeCHo" %}

**Label**

The property hosts a group of configurations that you can use to associate a display name and define a placement for the widget. These properties are usually useful when you want to design forms that follow a defined alignment for your form fields and give a professional look to your forms. Below are the properties that you can use:

#### **Text**

It allows you to set the display name of the input box. For example, if you want the user to enter a name in the input box, you can enter the text as "Name."

{% hint style="info" %}
You can leave the text empty if you don't want any display name for your input widget.
{% endhint %}

#### **Position**

It allows you to specify the placement of the label. You can select one of the available options:

* Top - It allows you to align the text at the top of the input box.
* Left - It aligns the text to the left of the input box. When you select **Left** alignment, you get additional settings that you can use to control the alignment and define the text's width.
  * Alignment - With the help of alignment, you can define the placement of the text in accordance with the position of the input box. You can choose:
    * Left - It aligns the text to the widget's left boundary that is away from the input box.
    * Right - It aligns the text closer to the input box.
  * Width - With the help of width, you can define the **number of columns** in the **grid** that surrounds the widget. You can specify how close or far the text can be placed to the input box.
* Auto - It automatically adjusts the position of the text based on the input box's height.

{% hint style="info" %}
Columns are the dashed lines (-----) that surround a widget when you try to drag and drop it on the canvas.
{% endhint %}

{% embed url="https://youtu.be/7VFebef9JZg" %}
**How to set label properties?**
{% endembed %}

**Placeholder**

You can set a proxy text/value inside the input box using the `placeholder` property. It can be any message or hint for the expected input.

{% embed url="https://youtu.be/576Bfo8htf0" %}

#### **Default text**

This property lets you set a default value for the widget before the user has made any changes.

One good example of using this property is to bind it with a column of the selected row of a table. `Default text` will fill the input widget with the value at that table's cell.

{% embed url="https://youtu.be/8oZFBLHoWC8" %}

#### **Regex**

Using `Regex` or Regular expression property, you can set specific constraints on the input you expect from the user.

For example, let's add a regular expression for entering a name. The name can contain only alphabets and space between the first and last name.

```
/^[a-z -]+$/i
```

If you enter a value other than an alphabet or space (number of special characters), the widget will show an error message "invalid input."

{% embed url="https://youtu.be/n6VUQN-wv9U" %}

#### **Error Message**

If a user enters an incorrect value, the input widget shows a message "invalid input." You can change this message by using the `Error message` property to provide better feedback on the input given by the user.

{% embed url="https://youtu.be/oeUHJhM4zyU" %}

#### **Required**

Entering a value in the input box is mandatory when the required property is enabled. You can also write a JS code to link this property to a user action. Click on `JS` next to the `Required` to write JavaScript code.

For example, let's drag a checkbox widget `checkbox1` onto the canvas and bind it to the `Required` property. To enable the `Required` when the user checks the checkbox, add the following JavaScript code in the Required property:

```
{{Checkbox1.isChecked}}
```

When you tick the checkbox, it will enable the Required property, and the input box will show an error message "This field is required" if you have not entered any input.

{% embed url="https://youtu.be/2hqT02HCah8" %}

#### **Visible**

`Visible` controls the widget's visibility on the app's page. The widget will not be visible on the published app if you turn off this property. You can also write a JS code to link Visible's functionality to a user action. Click on `JS` next to the `Visible` to write JavaScript code.

For example, let's drag a checkbox widget `checkbox1` onto the canvas and bind it to the `Visible` property. To enable the `Visible` when the user checks the checkbox, add the following JavaScript code:

```
{{Checkbox1.isChecked}}
```

When you tick the checkbox, it will enable the Visible property, and the input box will be visible in the app.

{% embed url="https://youtu.be/Jb5bNVhFoRE" %}

#### **Disabled**

It disables the user from entering values in the input widget. The widget will be visible (if Visible is enabled), but user input will not be allowed. You can also write a JS code to link Disabled's functionality to a user action. Click on `JS` next to the `Disabled` to write JavaScript code.

For example, let's drag a checkbox widget `checkbox1` onto the canvas and bind it to the `Disabled` property. To enable the `Disabled` when the user checks the checkbox, add the following JavaScript code:

```
{{Checkbox1.isChecked}}
```

When you tick the checkbox, it will enable the Disabled property and prevent a user input in the input box.

{% embed url="https://youtu.be/JEARavnq0vQ" %}

#### **Reset on Submit**

When `Reset on Submit` is enabled, the input widget resets or clears the entered input after the user submits it.\
Let's use the event `onSubmit` to show a message when input is submitted. You'll see once the user submits and the message pops up, the input widget will reset itself to its original state.

{% embed url="https://youtu.be/EtKbP85Z9-s" %}

#### **Autofocus**

When you enable `Autofocus`, the cursor focuses on the input box whenever the widget is loaded.

{% embed url="https://youtu.be/_asmaJ1TuxE" %}

### Binding Properties

These properties allow you to bind your input widget with any other widget in queries or JS objects.

#### **Text**

It fetches the value that the user enters in the input widget. It changes when the default value changes or the user enters a new value in the input field.

To bind the text entered by the user in the input widget to another widget, open the property pane, and add the code snippet (enclosed in mustache syntax) given below:

```
{{<Input_widget_name>.text}}
```

Where `<Input_widget_name>` is the name of your input box.

For example, let's take an Input widget `input1` and bind its text to a text widget. Drag a Text widget onto the canvas and add the following snippet to the Text property of the Text widget:

```
{{input1.text}}
```

The Text widget will then display the text present in the input widget.

{% hint style="info" %}
Property binding has other applications. For example, it helps in parsing the value entered in an input widget to a Query or JS function.
{% endhint %}

{% embed url="https://youtu.be/713Zs2EFPcs" %}

### Events

| Event             | Description                                                                                                                                                                                                                                 |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **onTextChanged** | This event is triggered when the user enters a value or when the existing value is changed. You can specify the actions to be performed when this event is fired. See a list of [supported actions](../appsmith-framework/widget-actions/). |

### Label Styles

You can modify the basic styling of the input widget label. Available options are listed below.

* Text color;
* Text size;
* Font Style (**Bold**, _Italic_).

### Icon Options

You can add icons to your input widget, allowing users to recognize the expected input instantly.

Under Icon options, you can -

* Pick a suitable icon for your input widget;
* Align the icon in the input widget (left or right).

{% hint style="info" %}
We currently use the icons from[ the Blueprint](https://blueprintjs.com) library. You can see the list of icons[ here](https://blueprintjs.com/docs/#icons).
{% endhint %}
