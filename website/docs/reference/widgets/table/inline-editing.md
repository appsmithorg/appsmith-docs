# Inline Editing

The Table widget comes with features such as inline editing to provide a quick way to add and update data without needing to move away from the current screen.

<VideoEmbed host="youtube" videoId="eIecDfvSOsU" title="" caption=""/>

To try this feature yourself, take a look at the [sample app for inline editing](https://app.appsmith.com/app/editable-table/row-save-62d8f8d0e1c2ed505a0557cc).

## Properties

| Property                                           | Type        | Definition                                                                                                                                                                                                                                                               | Code Snippet                   |
| -------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------ |
| [**Editable**](#editable)                 | Formatting  | Controls whether cells of the column are editable                                                             | NA                             |
| [**Min**](#min)                      | Validation  | Sets the minimum allowed value. Only available for columns that are type _Number_.                                                                               | NA                             |
| [**Max**](#max)                      | Validation  | Sets the maximum allowed value. Only available for columns that are type _Number_.                                                                              | NA                             |
| [**Regex**](#regex)                    | Validation  | Enter a regular expression that user input must match to be considered valid. Displays an error message on failure.                                   | NA                             |
| [**Valid**](#valid)                    | Validation  | Enter a JS expression that evaluates whether the user's input is valid.                                                                | NA                             |
| [**Error Message**](#error-message)            | Validation  | The error message displays if the input fails the **Regex** or **Valid** properties' checks.                                        | NA                             |
| [**Required**](#required)                 | Validation  | Makes input to the widget mandatory.                                                                          | NA                             |
| [**Min Date**](#min-date)                 | Validation  | Sets the minimum allowed date. Only available for columns that are type _Date_.                                                            | NA                             |
| [**Max Date**](#max-date)                 | Validation  | Sets the maximum allowed date. Only available for columns that are type _Date_.                                                            | NA                             |
| [**Update Mode**](#update-modes)              | Formatting  | Controls the save experience of an edited cell.<br/> **Single row** - Cells can be saved using the Save/Discard column buttons. <br/> **Multi row** - cells can be saved by using an **onSubmit** event of the column or through an external button widget. | NA                             |
| [**updatedRows**](#updatedrows)              | Binding     | Contains all the data of the edited table rows. Useful in **Multi row** update mode.                                                    | `{{Table1.updatedRows}}`       |
| [**updatedRowIndices**](#updatedrowindices)        | Binding     | Contains an array of indices of the table rows that have been edited. Useful in **Multi row** update mode.                                                        | `{{Table1.updatedRowIndices}}` |
| [**updatedRow**](#updatedrow)               | Binding     | Contains the all the data of the row that was recently updated. Useful in **Single row** update mode. | `{{Table1.updatedRow}}`|
| [**Allow adding a row**](#allow-adding-a-row) | Widget | Toggles a button in the table which allows users to submit new rows of data. Only columns marked as **Editable** can accept user input. Use code or a query in the **onSave** event to update the source of the table's data and reflect the user's changes. |
| [**Default Values**](#default-values) | Widget | The values to automatically populate the new row with when a user begins creating a new row. Expects an object with the same keys as the columns in the existing table data. |
| [**isAddRowInProgress**]( #isaddrowinprogress) | Binding | Indicates whether a new row is currently being added by the user. | `Table1.isAddRowInProgress` |
| [**newRow**](#newrow) | Binding | This variable contains a reference to the new row object added by the user. | `Table1.newRow` |
| [**isNewRow**](#isnewrow) | Validation | When writing code for validation properties, this variable indicates whether the cells being validated are part of a new or an existing row. | `isNewRow` |
| **First Day of Week** | Date Settings | Sets the first day of week that should be shown in the Date Picker while editing Date cells. Only available for columns that are type _Date_.  | `isNewRow` |
| **Show Shortcuts** | Date Settings | Sets whether shortcuts should be shown in the Date Picker while editing Date cells. Only available for columns that are type _Date_.  | `isNewRow` |

## Events

These event handlers can be used to run queries, JS code, or other [supported actions](/reference/appsmith-framework/widget-actions/) when the event is triggered.

| Events        | Description                                                                                                            |
| ------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **onSubmit**  | Triggered when the user moves away from editing a cell by pressing the Enter key or clicking outside of the cell.      |
| **onSave**    | Triggered when the user clicks the save button for a new or existing row.                                                |
| **onDiscard** | Triggered when the user clicks the discard button for a new or existing row.                                             |
| **onDateSelected** | Triggered when the user selects a date from Date Picker while editing a date type column.                                             |

---

## Editing cells

This feature enables users to make changes directly in the table cell. Currently, there are several column types support inline editing - **Text**, **Number**, **Date**, **Switch**, **Select**, and **Checkbox**. Custom user-added columns don't support inline editing at this time.

![](</img/Screen_Recording_2022-09-30_at_12_21_13_PM_AdobeExpress.gif>)

The **properties** that can be used for editing cells are explained in detail below.

#### Editable

The Editable checkbox at the top of the Columns list in the property pane can be checked to make _all_ the supported columns editable. You can also control editing using the checkbox next to each individual column in the list.
<img src="/img/Editable_preoperty.png" alt="Editable checkboxes" width="267"/>

You can also use the JS toggle to control the `Editable` property in each column's settings. This is useful for making only a subset of the cells editable based on a condition. For example, if you only want cells containing a particular value to be editable:

  ```javascript
    // only cells with the text "pending" in the status column can be updated
    {{ currentRow.status === "pending" }}
  ```

<img src="/img/Using_JS_in_Editable.png" alt="JS in Editable property" width="275"/>

When a supported column is made editable, it displays a pencil edit icon when the user hovers their cursor over it. Click this icon or double-click the cell to begin making changes.

![](</img/Screen_Recording_2022-09-30_at_12_21_13_PM_AdobeExpress.gif>)

<VideoEmbed host="youtube" videoId="BW5cVp0GfLE" title="Making column editable" caption="Making columns editable"/>

Once the user has finished editing a cell, they can perform either of the following actions to close editing:

1. Press the **Enter** key or **click outside the cell** keeps the new value and close the input box.
2. Press the **Escape** key to discard the new value and close the input box.

These edits are only reflected on the Table widget UI and aren't updated in the source of truth database. Learn how to [save the changes](#saving-edits) you've made.

#### Validation properties

You can implement user input validation to ensure that only certain values are entered in a cell. The validation features require the column to be editable, and the validation options can be found in a **text** or **numeric** column's settings.

##### Valid

The **Valid** property is an expression that determines whether the cell input is acceptable. When this expression evaluates to `false`, the input is considered invalid and the widget shows its **Error Message**. The following variables are available for binding:

1. `currentRow` - accesses the values of the whole row that contains the editable cell.
2. `currentIndex` - index of the current editable row.
3. `editedValue` - the newly entered value of the editable cell.

For example, suppose you want the updated value to be `John`. In the **Valid** property field, add:

```
{{editedValue == "John"}}
```

If a value other than "John" is added to the cell, an error is displayed. Similarly, the previously mentioned binding variables can be used to obtain other values and row indexes.

<VideoEmbed host="youtube" videoId="c4Ylp9QUAc0" title="Valid" caption="Valid"/>

##### Error message

The error message appears if the regular expression (**Regex**) and/or the **Valid** property determine the input is invalid. If a user enters an incorrect value, the widget shows "invalid input." by default. You can change this message by using the **Error message** property to provide better feedback to the user.

<img src="/img/table_err_msg.PNG" alt="Error message when input is invalid" width="524"/>

##### Regex

[Regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) (regex) are patterns that describe valid user input. For example, the pattern `[a-zA-Z]` describes a string that contains only letters of the English alphabet. Using regular expressions in the **Regex** property of columns, you can set specific constraints on the input you expect from the user.

When you add a regular expression to a column, all user input in that column is compared to the pattern; it's considered to be valid when it matches the expression, or invalid when it doesn't match. When input is invalid, the cell displays its **Error message** to the user in a tool-tip.

<img src="/img/as_errormsg.png" alt="Error message when input is invalid" width="511"/>

For example, add a regular expression for entering a name. The name can contain only alphabetical characters and spaces between the first and last name:

```
/^[a-z -]+$/i
```

If you enter a value that contains something other than alphabetical or space characters, the widget shows an error message "Invalid input."

##### Required

Makes input to the widget mandatory. Sets whether a non-empty value must be entered for the editable cell input.

##### Min

Sets the minimum allowed value. For example, you could set the minimum value to 2 if you only want values greater than 2. Any number entered that's less than 2 is considered invalid. Only available for columns that are type **Number**.

##### Max

Sets the maximum allowed value. For example, you could set the maximum value to 100 if you only want values less than 100. Any number entered that's more than 100 is considered invalid. Only available for columns that are type **Number**.

<VideoEmbed host="youtube" videoId="bUbGMUuINvg" title="Min & Max Example" caption="Min & Max Example"/>

##### Min date

Sets the maximum allowed date. For example, you could set the minimum date to 1900/01/01 if you only want dates after that. Any date before 1900/01/01 can't be selected in the Date Picker. Only available for columns that are type **Date**.

##### Max date

Sets the maximum allowed date. For example, you could set the maximum date to 2100/12/31 if you only want dates before that. Any date after 2100/12/31 can't be selected in the Date Picker. Only available for columns that are type **Date**.

---

### Saving edits

The changes made to the cells with inline editing are visible within the table, however they're not saved to the original datasource automatically.

To save the edits made to your table rows, you'll first need to set the table's **Update mode**, which determines the behavior and flow of making changes. Choose from [**Single row**](#single-row) or [**Multi row**](#multi-row) mode.

Once this is done, configure your Save buttons to execute queries that update the table's source of data to save your changes permanently. 

The **properties** that can be used for saving edited rows are explained in detail below:

#### Update modes

These modes allow you to choose how to handle the flow of updating, saving, and discarding new values within editable tables.

##### Single row

Cells can be edited within a single row at a time, and then saved using the Save/Discard column buttons. While a row has pending edits, the user isn't allowed to begin editing other rows. Be sure to configure the Save/Discard buttons' **onSave** event to run a query that updates the table's datasource.

When one or more columns of a table are **Editable** in Single row mode, a new table column is injected called `Save/Discard`. This new column contains a Save button and a Discard button, which execute the table's **onSave** and **onDiscard** events when clicked. Style options for these buttons are available in the `Save/Discard` column's settings in the Table widget's properties pane.

![](</img/SaveDiscard.jpg>)

The `Save/Discard` column can't be deleted, only hidden; if the update mode is switched to Multi row or if editing is turned off in the table, this column automatically disappears.

:::note
While you are configuring the **onSave** or **onDiscard** events, you can use the `updatedRow` property to access the updated row data.
:::

As an alternative to using the `Save/Discard` buttons and events, you can configure the **onSubmit** event in each column's settings to run a query that saves the new data. The onSubmit event takes place whenever the user clicks away from the edited cell, or presses the Enter key within it.

After configuring your save button to send data back to your datasource, set up a success callback nested within the button's onClick to automatically pull the latest information into the table. In this example, `myAPI_get` is a query that refreshes the table data.

```javascript
{{
  // in the button's onClick field
  myAPI_update.run(
    () => myAPI_get.run(), // success callback
    () => {} // error callback
  )
}}
```

###### updatedRow

This property contains the details of the row that was recently updated. This is available regardless of the **Update mode**, however it's most useful in **Single row** mode. Once edits have been made, this property contains an object that looks like:

```javascript
{
  "address": "<updated-address-value>",
	"client-id": "<updated-client-id-value>",
	"zone": "<updated-zone-value>",
  "status": "<updated-status-value>"
}
```

The default value for this property is an object with keys as column names and blank strings as its values. For example:

```javascript
{
	"address": "",
	"client-id": "",
	"zone": "",
  "status": ""
}
```
The new values become available as soon as a user updates a table cell and navigates away from it (triggering the **onSubmit** event).

The `updatedRow` property is reset to the default value whenever the cell changes are saved (**onSave**) or discarded (**onDiscard**).

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

6. Add a callback to automatically refresh the table after a successful query. In this example, `myAPI_get` is a query that refreshes the table data.

<img src="/img/as_updateMany.png" alt="Set onClick to update table and refresh" width="587"/>

```javascript
{{
  // in the button's onClick field
  myAPI_updateMany.run(
    () => myAPI_get.run(), // success callback
    () => {} // error callback
  )
}}
```

Now you are ready to edit your table in any number of rows, and the "Save All" button should submit all your changes to the datasource and refresh the table.

###### updatedRows

This property contains all the details of the edited rows (only useful when **Update mode** is set to **Multi row**). It has the following structure:

```javascript
[
  {
    "index": 0, // Index of the row in tableData
		"PRIMARY_KEY": "PRIMARY_KEY_VALUE", 
    "updatedFields": { // contains all the edited cell values from the row
      "address": "123 Maple St."
    },
    "allFields": { // contains all the cell values (including the edited cells) from the row
      "client-id": "1",
      "address": "123 Maple St.",
      "zone": "X",
      "status": "processing"
    }
  }
]
```

###### updatedRowIndices

This binding property displays the index number of the updated row. It contains an array of edited row indices.

For example, if you update the second and fourth rows of a table, the `updatedRowIndices` property contains the value:

```javascript
[ 
  1,
  3
]
```

---

## Adding new rows

In addition to editing individual cells, you can use the Table UI to submit new rows of data.

<VideoEmbed host="youtube" videoId="fI_rqVtNRnk" title="Table | Add new rows | Enable feature" caption="Enable adding new rows to your table"/>

:::info Important
If you'd like to add new rows to your table, ensure that the columns in your Table's properties are marked as [**Editable**](#editable). A column can only accept user input if its **Editable** property is checked.
:::

1. Select your Table widget and turn on the **Allow adding a row** property.
2. A new button should appear in the Table's header called 'Add new row'. Click this button to add a row of empty cells to the top of the table (or if the Table's [**Default Values**](#default-values) property is filled, the new cells are created with that data).
3. Once the cells have been filled in with desired values, clicking the "Save" button closes the editing mode and executes the Table's [**onSave**](#events) event. This event should contain code to execute a query that sends the new row to the datasource which supplies the table. Or, clicking "Discard" removes the new row from the table and triggers the [**onDiscard**](#events-1) event.

The **properties** that can be used for adding new rows are explained in detail below:

#### Allow adding a row

When this property is turned on:
  - Users are able to click a button on the table to create a new row of data. Users can only input data for columns that are marked as **Editable** in the table properties.
  - The **Default Values** property and the **onSave** and **onDiscard** events appear in the table's properties pane under the **Adding a row** section. Use these to configure the table's behavior when adding new rows.

#### Default values

<VideoEmbed host="youtube" videoId="3KozovP7LNk" title="Table | Add new rows | Default values" caption="Set default values for new Table rows"/>

The values to automatically populate the new row with when a user begins creating a new row. Expects an object with the same keys as the columns in the existing table data.

#### isAddRowInProgress

While the "Add new row" mode is enabled in the Table widget, `isAddRowInProgress` is `true`. You can use this property for  providing visual feedback in the UI for the user or for enforcing specific validation rules for user input in new rows (See [isNewRow](#isnewrow)).

#### newRow

When a new row is being added to the Table, this property contains a reference to that new row object being added; otherwise, it is `undefined`. This is useful for accessing the user input to send it via query once the user is ready to submit the new data.

#### isNewRow

`isNewRow` can be used only within the Validation properties (**Regex**, **Valid**, **Error Message**, and **Required**). With it, you may set specific validation rules for new table rows that don't necessarily apply to editing existing cells.

In the following video example, the Table allows editing a client in "Zone AE," however it doesn't allow adding any _new_ rows in Zone AE.

<VideoEmbed host="youtube" videoId="d8hpCBW6rGI" title="Table | Add new rows | isNewRow Validation" caption="Set specific validation rules for new rows"/>

```javascript
// in the Table widget's Valid property:
{{isNewRow? currentRow.zone !== "AE" : true}}
```

A user may make any changes to existing rows, however they're not allowed to add any new row where the `zone` is `"AE"`.

---

### Saving new rows

Saving new rows works much like submitting a form. Use the **onSave** event under the **Adding a row** section in the Table's property pane to execute a query or function that sends the new row to the underlying datasource.

<VideoEmbed host="youtube" videoId="09pOAgK9mhk" title="Using newRow to save new table data" caption="Using newRow to save new table data"/>

As shown in the video, suppose that your table gets information from a query called `myAPI_get`, which is a GET request to a datasource called `myAPI`. After you add a new row to the table, to update the original datasource with the new data, you might execute a query like `myAPI_post`, which would be a POST request to `myAPI`. To add the newly added data to the POST request, you can use the Table's [`newRow`](#newrow) attribute to reference the new row. When the POST request is successful, the `myAPI` datasource receives the new information, and the Table shows the new row the next time it updates.

Once the save button is configured to send the new row back to your datasource, set up a success callback nested within the button's onClick to automatically pull the latest information into the table.

```javascript
{{
  // in the button's onClick field
  myAPI_post.run(
    () => myAPI_get.run(), // success callback to refresh table
    () => {} // error callback
  )
}}
```
