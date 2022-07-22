# Inline Editing

Inline edit-ability for a column can be enabled for the whole column or at the cell level based on a condition. The column list on the Table property pane has a checkbox to make that column editable.

![Editable Checkbox](<../../.gitbook/assets/Editable checkbox - Inline editing.png>)

Click on the checkbox inside a column card makes all the cells in that column editable. The editable checkbox at the top of the list can be checked to make all the editable columns editable.

{% hint style="info" %}
Only Plain text & Number columns are editable.
{% endhint %}

Alternatively, A column can be editable by turning on `Editable` property inside column settings.

![](<../../.gitbook/assets/Editable preoperty.png>)

JS option of the `Editable` property can be leveraged to make a subset of the cells in a column editable.

![](<../../.gitbook/assets/Using JS in Editable.png>)

Once a column has been made editable, an edit icon appears on the column header as an indicator.

![](<../../.gitbook/assets/Edit icon on column header.png>)

### How to edit a cell

An edit icon appears on hovering an editable cell, which, when clicked, would make the cell editable.

![](<../../.gitbook/assets/Edit a cell.gif>)

Based on the Column type, cell content can be edited. Once done user can move away from the edit mode in two ways.

1. Edited contents can be persisted on the Table cell by either pressing enter key or clicking anywhere outside the cell.
2. Edited contents can be discarded by pressing the escape key.

### Update mode

Once a column is editable, a new property, `Update mode` , appears under the column list.

![](<../../.gitbook/assets/Update mode.png>)

#### **Row level mode**

Actions can be performed at the row level. On selecting row level, a new column will be injected called `Save/Discard` with two buttons when a column is made editable.

![](../../.gitbook/assets/SaveDiscard.jpg)

This column cannot be deleted. It can only be made hidden. This column will be removed when the update mode is switched to custom, or all the columns are made non-editable.

Users can customize the appearance of the Save and Discard button in the column settings. There are two events available, `onSave` and `onDiscard`, which users can use to trigger an action when the corresponding button is clicked.

{% hint style="info" %}
`updatedRow` can be used to access the row that triggered the event
{% endhint %}

{% hint style="info" %}
ONLY single row cells are editable in row-level update mode. Users should save or discard the edited row before editing another row.
{% endhint %}

#### **Custom mode**

In custom mode, users can opt to save data at the table level, i.e, users are free to choose when to save the edited rows.

1. onSubmit property of the editable column can be used to save that cell when it is edited.
2. Users can trigger save when a button is clicked outside the table.

{% hint style="info" %}
Multiple rows can be edited in custom update mode.
{% endhint %}

Table exposes two new properties `updatedRows` and `updatedRowIndices`. `updatedRows` has details of all the edited rows. This property can be used in a trigger action to save the edited cells of the table, which will get called with the click of a button widget outside the table.

### Perform an action when a cell is edited

When a column is made editable, `onSubmit` trigger property appears under the event section in the column settings.

![](../../.gitbook/assets/OnSubmit\_editable\_enabled.png)

Users can bind any trigger action on this property, and it will get called anytime a cell content is edited and persisted. `currentRow` can be used to access the corresponding row and `currentRow[”keyName”]` can be used to access the updated data.

{% hint style="info" %}
currentRow can be used to access the corresponding row and currentRow\[”keyName”] can be used to access the updated data.
{% endhint %}

### Binding properties

#### **updatedRows**

This property contains all the details of the edited rows. It has the following structure.

```jsx
[
  {
    "index": 0, // Index of the row in tableData,
    "PRIMARY_KEY": "PRIMARY_KEY_VALUE", // if the user has chosen a primary column id, its value will be present otherwise it will be ignored
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

This property contains an array of edited row indices.

#### **updatedRow**

This property contains the details of the row that triggered the action (`onSubmit`, `onSave` or `onDiscard`)

### **Widget properties**



| Property      | Definition                                                                                                                                                                                                                             |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Update Mode   | <p>Controls the save experience of an edited cell.<br>Row level - Cells can be saved using the Save/Discard column buttons<br>Custom - cells can be saved by using an onSubmit action of the column or through an external button.</p> |
| Cell Wrapping | <p>Controls how overflowing contents of the column are handled.<br>on - Contents get wrapped to the next line.<br>off - Contents get ellipsised.</p>                                                                                   |
| Editable      | Controls whether cells of the column are editable                                                                                                                                                                                      |
| onSubmit      | Action that gets triggered when the user moves away from editing a cell by pressing the enter key or clicking outside.                                                                                                                 |
| onSave        | Action that gets triggered when the user clicks the save button.                                                                                                                                                                       |
| onDiscard     | Action that gets triggered when user clicks discard button                                                                                                                                                                             |
