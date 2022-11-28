# Inline Editing

Inline editing for a column can be enabled for the whole column or at the cell level based on a condition. You may also allow users to [update existing rows](#row-level-mode) of data, or [add new rows](#adding-new-rows) entirely.

<VideoEmbed host="youtube" videoId="eIecDfvSOsU" title="" caption=""/>

## Editing cells

The column list on the Table property pane has a checkbox to make that column editable.

![Editable Checkbox](</img/Editable_checkbox_-_Inline_editing.png>)

Click the checkbox inside a column card makes all the cells in that column editable. The editable checkbox at the top of the list can be checked to make all the editable columns editable.

Alternatively, A column can be editable by turning on `Editable` property inside column settings.

![](</img/Editable_preoperty.png>)

JS option of the `Editable` property can be leveraged to make a subset of the cells in a column editable.

![](</img/Using_JS_in_Editable.png>)

Once a column has been made editable, an edit icon appears on the column header as an indicator.

![](</img/Edit_icon_on_column_header.png>)

### How to edit a cell

An edit icon appears on hovering an editable cell, which, when clicked, would make the cell editable.&#x20;

:::info
Currently, **four column types** support inline editing: **Text, Number, Switch, and Checkbox.**
:::

![](</img/Screen_Recording_2022-09-30_at_12_21_13_PM_AdobeExpress.gif>)

Based on the Column type, cell content can be edited. Once done user can move away from the edit mode in two ways.

1. Edited contents can be persisted on the Table cell by either pressing enter key or clicking anywhere outside the cell.
2. You can discard the Edited contents by pressing the escape key.

### Update mode

Once a column is editable, a new property, `Update mode` , appears under the column list.

![](</img/Update_mode.png>)

#### Row level mode

Actions can be performed at the row level. On selecting row level, a new column is injected called `Save/Discard` with two buttons when a column is made editable.

![](</img/SaveDiscard.jpg>)

This column can't be deleted. It can only be made hidden. This column gets deleted when the update mode is switched to custom, or all the columns are made non-editable.

Users can customize the appearance of the Save and Discard button in the column settings. There are two events available `onSave,` and `onDiscard`, which users can use to trigger an action when the corresponding button is clicked.

> Only single row cells are editable in row-level update mode. Users should save or discard the edited row before editing another row.


#### Custom mode

In custom mode, users can opt to save data at the table level; users are free to choose when to save the edited rows.

1. `onSubmit` property of the editable column can be used to save that cell when it's edited.
2. Users can trigger save when a button is clicked outside the table.

:::info
You can edit Multiple rows in custom update mode.
:::

Table exposes two new properties `updatedRows` and `updatedRowIndices`. `updatedRows` has details of all the edited rows. This property can be used in a trigger action to save the edited cells of the table, which gets called with the click of a button widget outside the table.

### Perform an Action when a cell is edited

When a column is made editable, `onSubmit` trigger property appears under the event section in the column settings.

![](</img/OnSubmit\_editable\_enabled.png>)

Users can bind any trigger action on this property, which gets called anytime cell content is edited and persisted. `currentRow` can be used to access the corresponding row and `currentRow[”keyName”]` can be used to access the updated data.

:::info
`currentRow` can be used to access the corresponding row, and currentRow\[”keyName”] can be used to access the updated data.
:::

### Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

| Property                                           | Type        | Definition                                                                                                                                                                                                                                                               | Code Snippet                   |
| -------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------ |
| **Update Mode**              | Formatting  | Controls the save experience of an edited cell.<br/> **Row level** - Cells can be saved using the Save/Discard column buttons. <br/> **Custom** - cells can be saved by using an onSubmit action of the column or through an external button. | NA                             |
| **Cell Wrapping**            | Formatting  | Controls how overflowing contents of the column are handled.<br/> **on** - Contents get wrapped to the next line.<br/> **off** - Contents are truncated with an ellipsis (...). | NA |
| **Editable**                 | Formatting  | Controls whether cells of the column are editable                                                             | NA                             |
| **Regex**                    | Validation  | Regex adds validation to the cell value which displays an error on failure.                                   | NA                             |
| **Valid**                    | Validation  | Valid property shows the validity of the cell.                                                                | NA                             |
| **Error Message**            | Validation  | The error message displays if the **regex** or **valid** property check fails.                                        | NA                             |
| **Required**                 | Validation  | Makes input to the widget mandatory.                                                                          | NA                             |
| **Min**                      | Validation  | Sets the minimum allowed value.                                                                               | NA                             |
| **Max**                      | Validation  | Sets the maximum allowed value.                                                                               | NA                             |
| **updatedRows**              | Binding     | This property contains all the details of the edited rows.                                                    | `{{Table1.updatedRows}}`       |
| **updatedRowIndices**        | Binding     | This property contains an array of edited row indices.                                                        | `{{Table1.updatedRowIndices}}` |
| **updatedRow**               | Binding     | This property contains all the details of the row that recently got updated | `{{Table1.updatedRow}}`|

#### Update mode

Controls the save experience of an edited cell.
**Row level** - Cells can be saved using the Save/Discard column buttons\
**Custom** - Cells can be saved by using an **onSubmit** action of the column or through an external button.

#### Cell wrapping

Controls how overflowing contents of the column are handled. When turned on, the contents get wrapped to the next line.

#### Editable

Controls whether cells of the column are editable. To make the column editable, click the checkbox inside a column card that makes all the cells in that column editable.

Alternatively, A column can be editable by turning on `Editable` property inside column settings.


<VideoEmbed host="youtube" videoId="BW5cVp0GfLE" title="Making column editable" caption="Making column editable"/>


:::info
Validation ensures that only certain values are entered in a field. You have to make the column editable to allow validation. The validation feature is available for **text** and **numeric** column types.
:::

#### Regex

Regex adds validation to the cell value which displays an error on failure. When the input doesn't match the regex expression, the input is considered invalid. Using `Regex` or Regular expression property, you can set specific constraints on the input you expect from the user.

For example, add a regular expression for entering a name. The name can contain only alphabets and spaces between the first and last name.

```
/^[a-z -]+$/i
```

If you enter a value other than an alphabet or space (number of special characters), the widget shows an error message "invalid input."

Similarly, you can use `s.` to only display words that start with the letter "**s**".

#### Valid

Valid property shows the validity of the cell. When the expression evaluates to `false`, the input is considered invalid and the widget shows an Error Message. The following variables are available for binding:

1. `currentRow` - gives access to the row values of the editable cell.
2. `currentIndex` - index of the current editable row.
3. `editedValue` - the newly entered value on the editable input.

For example, imagine you want the updated value to be `John`. In the **Valid** property field, add:

```
{{editedValue == "John"}}
```

If a word other than "John" is added to the cell, an error is displayed. Similarly, the previously mentioned binding variables can be used to obtain values and row indexes.&#x20;


<VideoEmbed host="youtube" videoId="c4Ylp9QUAc0" title="Valid" caption="Valid"/>

#### Error message

The error message displays if the regular expression (regex) or valid property check fails. If a user enters an incorrect value, the widget shows a message "invalid input." You can change this message by using the `Error message` property to provide better feedback on the input given by the user.

![](/img/inline32.PNG)

#### Required

Makes input to the widget mandatory. Sets whether a non-empty value must be entered for the editable cell input.

#### Min

Sets the minimum allowed value. For example, you could set the minimum value to 2 if you only want the numbers from 2 to 100. Any number entered that's less than 2 is considered invalid.

:::info
**Min** and **Max** properties are available for **numeric**  column types.
:::

#### Max

Sets the maximum allowed value. For example, you could set the maximum value to 100 if you only want the numbers from 2 to 100. Any number entered that's more than 100 is considered invalid.

<VideoEmbed host="youtube" videoId="bUbGMUuINvg" title="Min & Max Example" caption="Min & Max Example"/>

#### updatedRows

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

#### updatedRowIndices

This binding property displays the index number of the updated row. It contains an array of edited row indices.&#x20;

For example, if you updated the second row of a table. Now, when you bind this property into a text widget, the property displays the outcome as follows:&#x20;

```
[ 
1
]
```

#### updatedRow

This property consists of the details of the row that recently got updated. Irrespective of the update mode, the `updatedRow` property consists of the row that got recently updated.

```
{
	"step": "Updated step",
	"task": "Updated task",
	"status": "Updated status"
}
```

The default value for this property is an object with keys as column names and blank string as its values. For example,

```
{
	"step": "",
	"task": "",
	"status": ""
}
```
The value gets available as soon as a user updates a table cell. Not edits, but updates.

The `updatedRow` property gets reset to the default value whenever the value is saved(onSave) or when it's discarded(onDiscard).

### Events

| Events        | Description                                                                                                            |
| ------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **onSubmit**  | Action that gets triggered when the user moves away from editing a cell by pressing the enter key or clicking outside. |
| **onSave**    | Action that gets triggered when the user clicks the save button for a cell or a new row.                                                       |
| **onDiscard** | Action that gets triggered when user clicks discard button for a cell or a new row.                                                       |

## Adding new rows

In addition to [editing individual cells](#how-to-edit-a-cell), you may allow users to use the Table UI to submit new rows of data.

### Properties

The following properties are related to adding new rows:

| Property              | Type        | Definition               | Code Snippet        |
| --------------------- | ----------- | ------------------------ | ------------------- |
| **Allow adding a row** | Widget | Toggles a button in the table which allows users to submit new rows of data. Only columns marked as **Editable** can accept user input. Use the **onSave** event to update the source of the table's data and reflect the user's changes. |
| **Default Values** | Widget | The values to automatically populate the new row with when a user begins creating a new row. Expects an object with the same keys as the columns in the existing table data. |
| **isAddRowInProgress** | Binding | Indicates whether a new row is currently being added by the user. | `Table1.isAddRowInProgress` |
| **newRow** | Binding | This variable contains a reference to the new row object added by the user. | `Table1.newRow` |
| **isNewRow** | Validation | When writing code for validation properties, this variable indicates whether the cells being validated are part of a new or an existing row. | `isNewRow` |

The subheadings below describe these properties in more detail:

#### Allow adding a row

Turning this on allows users to click a button on the table to create a new row in the table. Users can only input data for columns that are marked as **Editable** in the table properties.

Use the **onSave** event to update the original datasource to reflect the user's changes. For example, the **onSave** event might be set to trigger a query that sends the data from a new table row to the database that supplies the table with its values.

#### Default values

<VideoEmbed host="youtube" videoId="3KozovP7LNk" title="Table | Add new rows | Default values" caption="Set default values for new Table rows"/>

The values to automatically populate the new row with when a user begins creating a new row. Expects an object with the same keys as the columns in the existing table data.

#### isAddRowInProgress

While the "Add new row" mode is enabled in the Table widget, `isAddRowInProgress` is `true`. You can use this for a variety of reasons, such as providing visual feedback in the UI for the user or for enforcing specific validation rules for user input in new rows (See [isNewRow](#isnewrow)).

#### newRow

When a new row is being added to the Table, this variable contains a reference to that new row object being added; otherwise, it is `undefined`. This is useful for accessing the user input to send it via query once the user is ready to submit the new data.

#### isNewRow

`isNewRow` can be used only within the Validation-related properties (for example, **Regex**, **Valid**, **Error Message**, and **Required**). With it, you may set specific validation rules for new table rows that don't necessarily apply to editing existing cells.

In the following video example, the Table allows editing a client in "Zone AE," however it doesn't allow adding any _new_ rows in Zone AE.

<VideoEmbed host="youtube" videoId="d8hpCBW6rGI" title="Table | Add new rows | isNewRow Validation" caption="Set specific validation rules for new rows"/>

```javascript
// in the Table widget's Valid property:
{{isNewRow? currentRow.zone !== "AE" : true}}
```

A user may make any changes to existing rows, however they're not allowed to add any new row in AE.

### Events

| Events        | Description                                                                                                            |
| ------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **onSave**    | Action that gets triggered when the user clicks the save button for a cell or a new row.                               |
| **onDiscard** | Action that gets triggered when user clicks discard button for a cell or a new row.     

### How to add a new row

<VideoEmbed host="youtube" videoId="uthJ6IrYPXA" title="Table | Add new rows | Enable feature" caption="Enable adding new rows to your table"/>

:::info
If you'd like to add new rows to your table, first ensure that the columns in your Table's properties are marked as [**Editable**](#editable). A column can only accept user input if its **Editable** property is checked.
:::

1. Select your Table widget and turn on the **Allow adding a row** property.
2. A new button should appear in the Table's header called 'Add new row'. Click this button to add a row of empty cells to the top of the table (or if the Table's [**Default Values**](#default-values) property is filled, the new cells are created with that data).
3. Once the cells have been filled in with desired values, clicking the "Save" button closes the editing mode and executes the Table's [**onSave**](#events-1) event. This event should contain code to execute a query that sends the new row to the datasource which supplies the table. Or, clicking "Discard" removes the new row from the table and triggers the [**onDiscard**](#events-1) event.

### Saving new rows

Saving new rows works much like submitting a form. Use the **onSave** event under the **Adding a row** section in the Table's property pane to execute a query or function that sends the new row to the underlying datasource. For example:

<VideoEmbed host="youtube" videoId="09pOAgK9mhk" title="Using newRow to save new table data" caption="Using newRow to save new table data"/>

Imagine that your table gets information from a query called `myAPI_get`, which is a GET request to a datasource called `myAPI`.

```javascript
// In the Table Data field
{{myAPI.data}}

// Returns [{fruit: "pomegranate", color: "red"}, ... ]
```

And perhaps you add a new row to the table with the data:

```javascript
{fruit: "banana", color: "yellow"}
```

To update the original datasource with the new data, you might execute a query like `myAPI_post`, which would be a POST request to `myAPI`. To add the data to the POST request, you can use the Table's [`newRow`](#newrow) attribute to reference the new row.

```javascript
// In our `myAPI_post` query:
{{Table1.newRow}}

// In the Table's `onSave` event:
{{myAPI_post.run()}}
```

Assuming that the POST request is successful, the `myAPI` datasource receives the new information, and the Table should contain the new row the next time it updates.

## Further reading

The following resources can come in handy as you need to learn new tricks:

* [Core Concepts](./../../../core-concepts/connecting-to-data-sources/README.md)
* [Appsmith Framework](../../appsmith-framework/)
* [JavaScript Editor](../../../core-concepts/writing-code/javascript-editor-beta/)
