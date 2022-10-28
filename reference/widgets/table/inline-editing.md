# Inline Editing

Inline edit-ability for a column can be enabled for the whole column or at the cell level based on a condition.

{% embed url="https://youtu.be/eIecDfvSOsU" %}

&#x20;

The column list on the Table property pane has a checkbox to make that column editable.

![Editable Checkbox](<../../../.gitbook/assets/Editable checkbox - Inline editing.png>)

Click the checkbox inside a column card makes all the cells in that column editable. The editable checkbox at the top of the list can be checked to make all the editable columns editable.

Alternatively, A column can be editable by turning on `Editable` property inside column settings.

![](<../../../.gitbook/assets/Editable preoperty.png>)

JS option of the `Editable` property can be leveraged to make a subset of the cells in a column editable.

![](<../../../.gitbook/assets/Using JS in Editable.png>)

Once a column has been made editable, an edit icon appears on the column header as an indicator.

![](<../../../.gitbook/assets/Edit icon on column header.png>)

## How to edit a cell

An edit icon appears on hovering an editable cell, which, when clicked, would make the cell editable.&#x20;

{% hint style="info" %}
Currently, **four column types** support inline editing: **Text, Number, Switch, and Checkbox.**
{% endhint %}

<figure><img src="../../../.gitbook/assets/Screen_Recording_2022-09-30_at_12_21_13_PM_AdobeExpress.gif" alt=""><figcaption></figcaption></figure>

Based on the Column type, cell content can be edited. Once done user can move away from the edit mode in two ways.

1. Edited contents can be persisted on the Table cell by either pressing enter key or clicking anywhere outside the cell.
2. You can discard the Edited contents by pressing the escape key.

## Update mode

Once a column is editable, a new property, `Update mode` , appears under the column list.

![](<../../../.gitbook/assets/Update mode.png>)

### **Row level mode**

Actions can be performed at the row level. On selecting row level, a new column is injected called `Save/Discard` with two buttons when a column is made editable.

![](../../../.gitbook/assets/SaveDiscard.jpg)

This column can't be deleted. It can only be made hidden. This column gets deleted when the update mode is switched to custom, or all the columns are made non-editable.

Users can customize the appearance of the Save and Discard button in the column settings. There are two events available `onSave,` and `onDiscard`, which users can use to trigger an action when the corresponding button is clicked.

{% hint style="info" %}
`updatedRow` can be used to access the row that triggered the event
{% endhint %}

{% hint style="info" %}
ONLY single row cells are editable in row-level update mode. Users should save or discard the edited row before editing another row.
{% endhint %}

### **Custom mode**

In custom mode, users can opt to save data at the table level, that is users are free to choose when to save the edited rows.

1. onSubmit property of the editable column can be used to save that cell when it's edited.
2. Users can trigger save when a button is clicked outside the table.

{% hint style="info" %}
You can edit Multiple rows in custom update mode.
{% endhint %}

Table exposes two new properties `updatedRows` and `updatedRowIndices`. `updatedRows` has details of all the edited rows. This property can be used in a trigger action to save the edited cells of the table, which gets called with the click of a button widget outside the table.

## Perform an Action when a cell is edited

When a column is made editable, `onSubmit` trigger property appears under the event section in the column settings.

![](../../../.gitbook/assets/OnSubmit\_editable\_enabled.png)

Users can bind any trigger action on this property, which gets called anytime cell content is edited and persisted. `currentRow` can be used to access the corresponding row and `currentRow[”keyName”]` can be used to access the updated data.

{% hint style="info" %}
currentRow can be used to access the corresponding row, and currentRow\[”keyName”] can be used to access the updated data.
{% endhint %}

## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

| Property                                           | Type        | Definition                                                                                                                                                                                                                                                               | Code Snippet                   |
| -------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------ |
| **Update Mode**                                    | Formatting  | <p>Controls the save experience of an edited cell.<br><strong>Row level</strong> - Cells can be saved using the Save/Discard column buttons<br><strong>Custom</strong> - cells can be saved by using an onSubmit action of the column or through an external button.</p> | NA                             |
| **Cell Wrapping**                                  | Formatting  | <p>Controls how overflowing contents of the column are handled.<br>on - Contents get wrapped to the next line.<br>off - Contents get ellipsised.</p>                                                                                                                     | NA                             |
| **Editable**                                       | Formatting  | Controls whether cells of the column are editable                                                                                                                                                                                                                        | NA                             |
| <h4>Regex</h4>                                     | Validation  | Regex adds validation to the cell value which displays an error on failure.                                                                                                                                                                                              | NA                             |
| <h4>Valid</h4>                                     | Validation  | Valid property shows the validity of the cell.                                                                                                                                                                                                                           | NA                             |
| <h4>Error Message</h4><p></p>                      | Validation  | The error message displays if the regex or valid property check fails.                                                                                                                                                                                                   | NA                             |
| <h4>Required</h4>                                  | Validation  | Makes input to the widget mandatory.                                                                                                                                                                                                                                     | NA                             |
| <h4>Min</h4>                                       | Validation  | Sets the minimum allowed value.                                                                                                                                                                                                                                          | NA                             |
| <h4>Max</h4>                                       | Validation  | Sets the maximum allowed value.                                                                                                                                                                                                                                          | NA                             |
| <h4><strong>updatedRows</strong></h4>              | Binding     | This property contains all the details of the edited rows.                                                                                                                                                                                                               | `{{Table1.updatedRows}}`       |
| <h4><strong>updatedRowIndices</strong></h4><p></p> | Binding     | This property contains an array of edited row indices.                                                                                                                                                                                                                   | `{{Table1.updatedRowIndices}}` |
| <h4><strong>updatedRow</strong></h4>               | Binding     | This property contains the details of the row that triggered the action (`onSubmit`, `onSave` or `onDiscard`)                                                                                                                                                            | `{{Table1.updatedRow}}`        |



#### Update Mode

Controls the save experience of an edited cell.\
**Row level** - Cells can be saved using the Save/Discard column buttons\
**Custom** - Cells can be saved by using an onSubmit action of the column or through an external button.

#### Cell Wrapping

Controls how overflowing contents of the column are handled.  When turned on the Contents get wrapped to the next line.&#x20;

#### Editable

Controls whether cells of the column are editable. To make the column editable, click the checkbox inside a column card that makes all the cells in that column editable.&#x20;

Alternatively, A column can be editable by turning on `Editable` property inside column settings.

{% embed url="https://youtu.be/BW5cVp0GfLE" %}
Making column editable&#x20;
{% endembed %}

{% hint style="info" %}
Validation ensures that only certain values are entered in a field. You have to make the column editable to allow validation. The validation feature is available for **text** and **numeric** column types.
{% endhint %}

#### Regex

Regex adds validation to the cell value which displays an error on failure. When the input doesn't match the regex expression, the input is considered invalid. Using `Regex` or Regular expression property, you can set specific constraints on the input you expect from the user.

For example, add a regular expression for entering a name. The name can contain only alphabets and spaces between the first and last name.

```
/^[a-z -]+$/i
```

If you enter a value other than an alphabet or space (number of special characters), the widget shows an error message "invalid input."&#x20;

Similarly, you can use `s.`to only display words that start with the letter "**s**".

#### Valid

Valid property shows the validity of the cell. When the expression evaluates to `false`, the input is considered invalid and the widget shows an Error Message. The following variables are available for binding:

1. `currentRow` - gives access to the row values of the editable cell.
2. `currentIndex` - index of the current editable row.
3. `editedValue` - the newly entered value on the editable input.

Let's take an example to understand how the valid property works. If you want the updated value to be "John", so in the valid property section, add:

```
{{editedValue == "John"}}
```

If a word other than "John" is added to the cell, an error will be displayed. Similarly, the above-mentioned binding variables can be used to obtain values and row indexes.&#x20;

{% embed url="https://youtu.be/c4Ylp9QUAc0" %}

#### Error Message

The error message displays if the regular expression(regex) or valid property check fails. If a user enters an incorrect value, the widget shows a message "invalid input." You can change this message by using the `Error message` property to provide better feedback on the input given by the user.

<figure><img src="../../../.gitbook/assets/inline32.PNG" alt=""><figcaption></figcaption></figure>

#### Required

Makes input to the widget mandatory. Sets whether a non-empty value must be entered for the editable cell input.

#### Min

Sets the minimum allowed value. For example, you could set the minimum value to 2 if you only want the numbers from 2 to 100. Any number entered that's less than 2 is considered invalid.

{% hint style="info" %}
**Min** and **Max** properties are available for numeric **** column types.
{% endhint %}

#### Max

Sets the maximum allowed value. For example, you could set the maximum value to 100 if you only want the numbers from 2 to 100. Any number entered that's more than 100 is considered invalid.

{% embed url="https://youtu.be/bUbGMUuINvg" %}
Min & Max Example
{% endembed %}

#### **updatedRows**

This property contains all the details of the edited rows. It has the following structure.

```jsx
[
  {
    "index": 0, // Index of the row in tableData
		"PRIMARY_KEY": "PRIMARY_KEY_VALUE", 
    "updatedFields": { // contains all the edited cell values from the row
      "step": "#11"
    },
    "allFields": { // contains all the cell values (including the edited cells) from the row
      "step": "#11",
      "task": "Drop a table",
      "status": "✅",
      "action": "",
      "EditActions1": ""
    }
  }
]
```

#### **updatedRowIndices**

This binding property displays the index number of the updated row. It contains an array of edited row indices.&#x20;

For example, if you updated the second row of a table. Now, when you bind this property into a text widget, the property displays the outcome as follows:&#x20;

```
[ 
1
]
```

#### **updatedRow**

This property contains the details of the row that triggered the action (`onSubmit`, `onSave` or `onDiscard`). For example, if you bind this property into a text widget, you get an output something like this:

```
{
  "Name": "Updated Name",
  "Date": "Updated Date",
  "Status ": "Updated Status",
  "rowIndex": "Row Index"
}
```

## Events

| Events        | Description                                                                                                            |
| ------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **onSubmit**  | Action that gets triggered when the user moves away from editing a cell by pressing the enter key or clicking outside. |
| **onSave**    | Action that gets triggered when the user clicks the save button.                                                       |
| **onDiscard** | Action that gets triggered when user clicks discard button                                                             |

### **What's next?**

The following resources can come in handy as you need to learn new tricks:

* [Core Concepts](../../../learning-and-resources/tutorials/review-moderator-dashboard/broken-reference/)
* [Appsmith Framework](../../appsmith-framework/)
* [JavaScript Editor](../../../core-concepts/writing-code/javascript-editor-beta/)
