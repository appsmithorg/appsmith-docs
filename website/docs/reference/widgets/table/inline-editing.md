# Inline Editing

Inline editing provides a quick way to edit data on the Table widget without navigating to the row details or moving away from the current screen.

Use this feature for

  - [Editing cells](#editing-cells)
  - [Updating rows](#updating-rows)
  - [Adding new rows](#adding-new-rows)

<VideoEmbed host="youtube" videoId="eIecDfvSOsU" title="" caption=""/>

To try this feature yourself, take a look at the sample app for [inline editing](https://app.appsmith.com/app/editable-table/row-save-62d8f8d0e1c2ed505a0557cc).

## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

| Property                                           | Type        | Definition                                                                                                                                                                                                                                                               | Code Snippet                   |
| -------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------ |
| [**Editable**](#editable)                 | Formatting  | Controls whether cells of the column are editable                                                             | NA                             |
| [**Cell Wrapping**](#cell-wrapping)            | Formatting  | Controls how overflowing contents of the column are handled.<br/> **on** - Contents get wrapped to the next line.<br/> **off** - Contents are truncated with an ellipsis. | NA |
| [**Min**](#min)                      | Validation  | Sets the minimum allowed value.                                                                               | NA                             |
| [**Max**](#max)                      | Validation  | Sets the maximum allowed value.                                                                               | NA                             |
| [**Regex**](#regex)                    | Validation  | Enter a regular expression that user input must match to be considered valid. Displays an error message on failure.                                   | NA                             |
| [**Valid**](#valid)                    | Validation  | Enter a JS expression that evaluates whether the user's input is valid.                                                                | NA                             |
| [**Error Message**](#error-message)            | Validation  | The error message displays if the input fails the **Regex** or **Valid** properties' checks.                                        | NA                             |
| [**Required**](#required)                 | Validation  | Makes input to the widget mandatory.                                                                          | NA                             |
| [**Update Mode**](#update-mode)              | Formatting  | Controls the save experience of an edited cell.<br/> **Single row** - Cells can be saved using the Save/Discard column buttons. <br/> **Multi row** - cells can be saved by using an **onSubmit** event of the column or through an external button widget. | NA                             |
| [**Allow adding a row**](#allow-adding-a-row) | Widget | Toggles a button in the table which allows users to submit new rows of data. Only columns marked as **Editable** can accept user input. Use code or a query in the **onSave** event to update the source of the table's data and reflect the user's changes. |
| [**Default Values**](#default-values) | Widget | The values to automatically populate the new row with when a user begins creating a new row. Expects an object with the same keys as the columns in the existing table data. |
| [**updatedRows**](#updatedrows)              | Binding     | Contains all the data of the edited table rows.                                                    | `{{Table1.updatedRows}}`       |
| [**updatedRowIndices**](#updatedrowindices)        | Binding     | Contains an array of indices of the table rows that have been edited.                                                        | `{{Table1.updatedRowIndices}}` |
| [**updatedRow**](#updatedrow)               | Binding     | Contains the all the data of the row that was recently updated. | `{{Table1.updatedRow}}`|
| [**isAddRowInProgress**]( #isaddrowinprogress) | Binding | Indicates whether a new row is currently being added by the user. | `Table1.isAddRowInProgress` |
| [**newRow**](#newrow) | Binding | This variable contains a reference to the new row object added by the user. | `Table1.newRow` |
| [**isNewRow**](#isnewrow) | Validation | When writing code for validation properties, this variable indicates whether the cells being validated are part of a new or an existing row. | `isNewRow` |

## Events

These properties can be used run code any time one of the events occurs. Be sure to take a look at the list of [supported actions](/reference/appsmith-framework/widget-actions/) that come built in to Appsmith.

| Events        | Description                                                                                                            |
| ------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **onSubmit**  | Triggered when the user moves away from editing a cell by pressing the Enter key or clicking outside of the cell.      |
| **onSave**    | Triggered when the user clicks the save button for a new or existing row.                                                |
| **onDiscard** | Triggered when the user clicks the discard button for a new or existing row.                                             |

---

## Editing cells

This feature allows users to make changes directly within the table widget, without the need for a separate form or page. Enable editing by toggling columns' **Editable** property, and then handle updates by configuring the table's event handlers to execute API/database queries.

#### Editable

Tick a table column's checkbox in the properties pane to make all the cells in that column editable. The editable checkbox at the top of the list can also be checked to make _all_ the supported columns editable.

<img src="/img/Editable_preoperty.png" alt="Editable checkboxes" width="267"/>

<VideoEmbed host="youtube" videoId="BW5cVp0GfLE" title="Making column editable" caption="Making columns editable"/>

You can also use JS to control the `Editable` property in the column's settings. This is useful for making only a subset of the cells editable. For example, if you only want cells containing a particular value to be editable:

  ```javascript
    // only "pending" cells can be updated
    {{ currentRow.status === "pending" }}
  ```

<img src="/img/Using_JS_in_Editable.png" alt="JS in Editable property" width="275"/>

Currently, **four column types** support inline editing: these  are **Text**, **Number**, **Switch**, and **Checkbox**. When one of these types of cells is made editable, it displays a pencil edit icon when the user hovers their cursor over it. Click this icon or double-click the cell to begin making changes.

![](</img/Screen_Recording_2022-09-30_at_12_21_13_PM_AdobeExpress.gif>)

:::info
You can implement user input validation to ensure that only certain values are entered in a cell. The validation features require the column to be editable, and the validation options can be found in a **text** or **numeric** column's settings.
:::

Once the user is finished editing a cell, they can perform either of the following actions to close editing:

1. Pressing the **Enter** key or **clicking outside the cell** keeps the new value and closes the input box.
2. Pressing the **Escape** key discards the new value and closes the input box.

Read further to see how to [save the changes](#updating-rows) you've made.

#### Cell wrapping

<VideoEmbed host="youtube" videoId="bNMV_WhTUU4" title="Table | Inline Editing | Cell Wrapping" caption="Wrapping text within cells"/>

Controls how overflowing contents of the column are handled. When turned on, the contents get wrapped to the next line.

#### Validation properties

##### Valid

The **Valid** property is an expression that determines whether the cell input is acceptable. When this expression evaluates to `false`, the input is considered invalid and the widget shows its **Error Message**. The following variables are available for binding:

1. `currentRow` - accesses the values of the whole row that contains the editable cell.
2. `currentIndex` - index of the current editable row.
3. `editedValue` - the newly entered value of the editable cell.

For example, imagine you want the updated value to be `John`. In the **Valid** property field, add:

```
{{editedValue == "John"}}
```

If a value other than "John" is added to the cell, an error is displayed. Similarly, the previously mentioned binding variables can be used to obtain other values and row indexes.

<VideoEmbed host="youtube" videoId="c4Ylp9QUAc0" title="Valid" caption="Valid"/>

##### Error message

The error message appears if the regular expression (**Regex**) and/or the **Valid** property determine the input is invalid. If a user enters an incorrect value, the widget shows "invalid input." by default. You can change this message by using the **Error message** property to provide better feedback to the user.

<!-- ![](/img/table_err_msg.PNG) -->
<img src="/img/table_err_msg.png" alt="Error message when input is invalid" width="524"/>

##### Regex

[Regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) (regex) are patterns that describe valid user input. For example, the pattern `[a-zA-Z]` describes a string that contains only letters of the English alphabet. Using regular expressions in the **Regex** property of columns, you can set specific constraints on the input you expect from the user.

When you add a regular expression to a column, all user input in that column is compared to the pattern; it's considered to be valid when it matches the expression, or invalid when it doesn't match. When input is invalid, the cell displays its **Error message** to the user in a tool-tip.

<!-- ![](/img/as_errormsg.png) -->
<img src="/img/as_errormsg.png" alt="Error message when input is invalid" width="511"/>

For example, add a regular expression for entering a name. The name can contain only alphabetical characters and spaces between the first and last name:

```
/^[a-z -]+$/i
```

If you enter a value that contains something other than alphabetical or space characters, the widget shows an error message "Invalid input."

##### Required

Makes input to the widget mandatory. Sets whether a non-empty value must be entered for the editable cell input.

##### Min

Sets the minimum allowed value. For example, you could set the minimum value to 2 if you only want values greater than 2. Any number entered that's less than 2 is considered invalid. Only available for columns that are type **numeric**.

##### Max

Sets the maximum allowed value. For example, you could set the maximum value to 100 if you only want values less than 100. Any number entered that's more than 100 is considered invalid. Only available for columns that are type **numeric**.

<VideoEmbed host="youtube" videoId="bUbGMUuINvg" title="Min & Max Example" caption="Min & Max Example"/>

---

## Updating rows

The changes made to the cells with inline editing are visible within the table, however they're not permanently saved to the original datasource automatically.

To save the edits made to your table rows, you'll first need to set the table's **Update mode**, which determines the behavior and flow of making changes. Choose from [**Single row**](#single-row) or [**Multi row**](#multi-row) mode.

Once this is done, configure your Save buttons to execute queries that update the table's source of data. Read further for more information on the update modes and how to use them to save your changes permanently.

#### Update modes

These modes allow you to choose how to handle the flow of updating, saving, and discarding new values within editable tables.

##### Single row

Cells can be edited within a single row at a time, and then saved using the Save/Discard column buttons. While a row has pending edits, the user isn't allowed to begin editing other rows. Be sure to configure the Save/Discard buttons' **onSave** event to run a query that updates the table's datasource.

When one or more columns of a table are **Editable** in Single row mode, a new table column is injected called `Save/Discard`. This new column contains a Save button and a Discard button, which execute the table's **onSave** and **onDiscard** events when clicked. Style options for these buttons are available in the `Save/Discard` column's settings in the Table widget's properties pane.

![](</img/SaveDiscard.jpg>)

The `Save/Discard` column can't be deleted, only hidden; if the update mode is switched to Multi row or if editing is turned off in the table, this column automatically disappears.

:::info
While you are configuring the **onSave** or **onDiscard** events, you can use the `updatedRow` property to access the updated row data.
:::

As an alternative to using the `Save/Discard` buttons and events, you can configure the **onSubmit** event in each column's settings to run a query that saves the new data. The onSubmit event takes place whenever the user clicks away from the edited cell, or presses the Enter key within it.

##### Multi row

Cells can be edited across any number of rows at a time. Updated rows are saved all at once by using an external Button widget, which you should place onto the canvas and configure to run a query that submits multiple rows to a datasource.

In this mode, users are free to choose when to save their edited rows. To facilitate this, take a look at this example of setting up a new Save button:

<VideoEmbed host="youtube" videoId="nzk-2_9qWtg" title="Table | Update Mode | Multi Row" caption="Save changes with Multi row updating"/>

1. In your Table's properties pane, set your columns to be **Editable** and select **Multi row** mode.
2. Navigate to your query that handles saving the user's changes, or create a new one. This query should be configured to submit multiple rows of data at a time to its datasource. For example, when using [Google Sheets](/reference/datasources/querying-google-sheets/), you should use the [Update Many](/reference/datasources/querying-google-sheets#update-many) type of query.

When you make changes in the table, the affected rows are added to the table's `updatedRows` property. This `updatedRows` object contains all the information about those rows, including their indices, changed values, and their complete set of values.

3. In the query field that expects the data to send, use `Table1.updatedRows` to access your table data. The required format might vary depending on the type of datasource you use, but for this example with Google Sheets, it expects an array of row objects. Be sure to look at the [datasource reference](/reference/datasources/) pages to see what format your datasource requires.

To get just an array containing the affected rows, you can use the JS [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) method along with `Table1.updatedRows`:

```javascript
// in a Google Sheets "Update Many" query
{{
	Table1.updatedRows.map(row => {
		return row.allFields
	})	
}}
```

4. Back on the canvas, drop a Button widget near the table. Update its [label](/reference/widgets/button/#label) to "Save All" or whatever else you'd like.
5. In the button's [**onClick**](/reference/widgets/button/#events) event, configure it to execute the Update Many query. Use either the dropdown menu or code:

```javascript
// in the button's onClick field
{{myAPI_updateMany.run()}}
```

:::note
For information about handling synchronous/asynchronous code, event handling, and callbacks, visit this page about [workflows in Appsmith](/core-concepts/writing-code/workflows/).
:::

6. Add a callback to automatically refresh the table after a successful query. In this example, `myAPI_get` is a query that refreshes the table data.

<!-- ![](/img/as_updateMany.png) -->
<img src="/img/as_updateMany.png" alt="Set onClick to update table and refresh" width="587"/>

```javascript
{{
  //in the button's onClick field
  myAPI_updateMany.run(
    () => myAPI_get.run(), // success callback
    () => {} // error callback
  )
}}
```

Now you are ready to edit your table in any number of rows, and the "Save All" button should submit all your changes to the datasource and refresh the table.

#### updatedRows

This property contains all the details of the edited rows. It has the following structure:

```javascript
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

This binding property displays the index number of the updated row. It contains an array of edited row indices.

For example, if you update the second and fourth rows of a table, the `updatedRowIndices` property contains the value:

```javascript
[ 
  1,
  3
]
```

#### updatedRow

This property contains the details of the row that was recently updated, regardless of the **Update mode**. For example, if you bind this property into a text widget, you get an output something like this:

```javascript
{
  "step": "<updated-step-value>",
	"task": "<updated-task-value>",
	"status": "<updated-status-value>"
}
```

The default value for this property is an object with keys as column names and blank strings as its values. For example,

```
{
	"step": "",
	"task": "",
	"status": ""
}
```
The new values become available as soon as a user updates a table cell and navigates away from it (triggering the **onSubmit** event).

The `updatedRow` property is reset to the default value whenever the cell changes are saved (**onSave**) or discarded (**onDiscard**).

---

## Adding new rows

In addition to [editing individual cells](#how-to-edit-a-cell), you may allow users to use the Table UI to submit new rows of data.

### How to add a new row

<VideoEmbed host="youtube" videoId="uthJ6IrYPXA" title="Table | Add new rows | Enable feature" caption="Enable adding new rows to your table"/>

:::info
If you'd like to add new rows to your table, first ensure that the columns in your Table's properties are marked as [**Editable**](#editable). A column can only accept user input if its **Editable** property is checked.
:::

1. Select your Table widget and turn on the **Allow adding a row** property.
2. A new button should appear in the Table's header called 'Add new row'. Click this button to add a row of empty cells to the top of the table (or if the Table's [**Default Values**](#default-values) property is filled, the new cells are created with that data).
3. Once the cells have been filled in with desired values, clicking the "Save" button closes the editing mode and executes the Table's [**onSave**](#events) event. This event should contain code to execute a query that sends the new row to the datasource which supplies the table. Or, clicking "Discard" removes the new row from the table and triggers the [**onDiscard**](#events-1) event.

#### Allow adding a row

When this property is turned on:
  - Users are able to click a button on the table to create a new row of data. Users can only input data for columns that are marked as **Editable** in the table properties.
  - The **Default Values** property and the **onSave** and **onDiscard** events appear in the table's properties pane under the **Adding a row** section. Use these to configure the table's behavior when adding new rows.

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

A user may make any changes to existing rows, however they're not allowed to add any new row where the `zone` is `"AE"`.

---

### Saving changes

Saving changes you've made to the table works much like submitting a form. Use the **onSave** event in the Table's property pane to execute a query or function that sends the new data to the underlying datasource. For example:

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

:::note
When a column is made editable, the `onSubmit` property appears under the Event section in the column settings. This event is called anytime cell content is edited and persisted. In addition to the **onSave** event, this is another option for executing queries to save new table data.

<!-- ![](</img/OnSubmit\_editable\_enabled.png>) -->
<img src="/img/OnSubmit_editable_enabled.png" alt="onSubmit" width="281"/>

Within this field, you can use `currentRow` to access the row of the edited cell, and `currentRow["<key_name>"]` to access the updated value.
:::
