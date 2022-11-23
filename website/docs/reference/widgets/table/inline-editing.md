# Inline editing

<<<<<<< HEAD
Inline editing for a column can be enabled for the whole column, or you can use code to enable it for only particular cells. You may also allow users to [update existing rows](#row-level-mode) of data, or [add new rows](#adding-new-rows) entirely.

<VideoEmbed host="youtube" videoId="eIecDfvSOsU" title="" caption=""/>
=======
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
>>>>>>> main

## Editing cells

This feature allows users to make changes directly within the table widget, without the need for a separate form or page. Enable editing by toggling columns' **Editable** property, and then handle updates by configuring the table's event handlers to execute API/database queries.

### Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

| Property                                           | Type        | Definition                                                                                                                                                                                                                                                               | Code Snippet                   |
| -------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------ |
| **Update Mode**              | Formatting  | Controls the save experience of an edited cell.<br/> **Single row** - Cells can be saved using the Save/Discard column buttons. <br/> **Multi row** - cells can be saved by using an **onSubmit** event of the column or through an external button widget. | NA                             |
| **Cell Wrapping**            | Formatting  | Controls how overflowing contents of the column are handled.<br/> **on** - Contents get wrapped to the next line.<br/> **off** - Contents are truncated with an ellipsis (...). | NA |
| **Editable**                 | Formatting  | Controls whether cells of the column are editable                                                             | NA                             |
| **Regex**                    | Validation  | Enter a regular expression that user input must match to be considered valid. Displays an error message on failure.                                   | NA                             |
| **Valid**                    | Validation  | Enter a JS expression that evaluates whether the user's input is valid.                                                                | NA                             |
| **Error Message**            | Validation  | The error message displays if the input fails the **Regex** or **Valid** properties' checks.                                        | NA                             |
| **Required**                 | Validation  | Makes input to the widget mandatory.                                                                          | NA                             |
| **Min**                      | Validation  | Sets the minimum allowed value.                                                                               | NA                             |
| **Max**                      | Validation  | Sets the maximum allowed value.                                                                               | NA                             |
| **updatedRows**              | Binding     | Contains all the data of the edited table rows.                                                    | `{{Table1.updatedRows}}`       |
| **updatedRowIndices**        | Binding     | Contains an array of indices of the table rows that have been edited.                                                        | `{{Table1.updatedRowIndices}}` |
| **updatedRow**               | Binding     | Contains the data of the row that triggered the **onSubmit**, **onSave** or **onDiscard** action. | `{{Table1.updatedRow}}`|

<<<<<<< HEAD
#### Update mode
=======
### Update mode
>>>>>>> main

These modes allow you to choose how to handle the flow of updating, saving, and discarding new values within editable tables.

##### Single row

<<<<<<< HEAD
> Cells can be edited within a single row at a time, and then saved using the Save/Discard column buttons. While a row has pending edits, the user isn't allowed to begin editing other rows. Be sure to configure the Save/Discard buttons' **onSave** event to run a query that updates the table's datasource.
=======
#### Row level mode
>>>>>>> main

When one or more columns of a table are **Editable** in Single row mode, a new table column is injected called `Save/Discard`. This new column contains a Save button and a Discard button, which execute the table's **onSave** and **onDiscard** events when clicked. Style options for these buttons are available in the `Save/Discard` column's settings in the Table widget's properties pane.

![](</img/SaveDiscard.jpg>)

The `Save/Discard` column can't be deleted, only hidden; if the update mode is switched to Multi row or if editing is turned off in the table, this column automatically disappears.

:::info
While you are configuring the **onSave** or **onDiscard** events, you can use the `updatedRow` property to access the updated row data.
:::

<<<<<<< HEAD
As an alternative to using the `Save/Discard` buttons and events, you can configure the **onSubmit** event in each column's settings to run a query that saves the new data. The onSubmit event takes place whenever the user clicks away from the edited cell, or presses the Enter key within it.

##### Multi row
=======
#### Custom mode

In custom mode, users can opt to save data at the table level; users are free to choose when to save the edited rows.
>>>>>>> main

> Cells can be edited across any number of rows at a time. Updated rows are saved all at once by using an external Button widget, which you should place onto the canvas and configure to run a query that submits multiple rows to a datasource.

In this mode, users are free to choose when to save their edited rows. To facilitate this, take a look at this example of setting up a new Save button:

<VideoEmbed host="youtube" videoId="nzk-2_9qWtg" title="Table | Update Mode | Multi Row" caption="Save changes with Multi row updating"/>

<<<<<<< HEAD
1. In your Table's properties pane, set your columns to be **Editable** and select **Multi row** mode.
2. Navigate to your query that handles saving the user's changes, or create a new one. This query should be configured to submit multiple rows of data at a time to its datasource. For example, when using [Google Sheets](/reference/datasources/querying-google-sheets/), you should use the [Update Many](/reference/datasources/querying-google-sheets#update-many) type of query.
=======
### Perform an Action when a cell is edited
>>>>>>> main

When you make changes in the table, the affected rows are added to the table's `updatedRows` property. This `updatedRows` object contains all the information about those rows, including their indices, changed values, and their complete set of values.

3. In the query field that expects the data to send, use `Table1.updatedRows` to access your table data. The required format might vary depending on the type of datasource you use, but for this example with Google Sheets, it expects an array of row objects. Be sure to check the [datasource reference](/reference/datasources/) pages to see what format your datasource requires.

To get just an array containing the affected rows, you can use the JS [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) method along with `Table1.updatedRows`:

<<<<<<< HEAD
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
=======
:::info
`currentRow` can be used to access the corresponding row, and currentRow\[”keyName”] can be used to access the updated data.
:::

### Properties
>>>>>>> main

```javascript
// in the button's onClick field
{{myAPI_updateMany.run()}}
```

<<<<<<< HEAD
:::note
For information about handling synchronous/asynchronous code, event handling, and callbacks, visit this page about [workflows in Appsmith](/core-concepts/writing-code/workflows/).
:::

6. Add a callback to automatically refresh the table after a successful query. In this example, `myAPI_get` is a query that refreshes the table data.

![](/img/as_updateMany.png)

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
=======
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
| **updatedRow**               | Binding     | This property contains the details of the row that triggered the action (`onSubmit`, `onSave` or `onDiscard`) | `{{Table1.updatedRow}}`|

#### Update mode

Controls the save experience of an edited cell.
**Row level** - Cells can be saved using the Save/Discard column buttons\
**Custom** - Cells can be saved by using an **onSubmit** action of the column or through an external button.
>>>>>>> main

#### Cell wrapping

Controls how overflowing contents of the column are handled. When turned on, the contents get wrapped to the next line.

#### Editable

Controls whether cells of the column are editable. To make the column editable, click the checkbox inside a column card that makes all the cells in that column editable.

Alternatively, a column can be made editable by turning on the `Editable` switch inside that column's settings.

<VideoEmbed host="youtube" videoId="BW5cVp0GfLE" title="Making column editable" caption="Making column editable"/>

:::info
You can implement user input validation to ensure that only certain values are entered in a cell. The validation features require the column to be editable, and the validation options can be found in a **text** or **numeric** column's settings.
:::

#### Regex
<<<<<<< HEAD

[Regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) (regex) are patterns that describe valid user input. For example, the pattern `[a-zA-Z]` describes a string that contains only letters of the English alphabet. Using regular expressions in the **Regex** property of columns, you can set specific constraints on the input you expect from the user.
=======
>>>>>>> main

When you add a regular expression to a column, all user input in that column is compared to the pattern; it's considered to be valid when it matches the expression, or invalid when it doesn't match. When input is invalid, the cell displays its **Error message** to the user in a tool-tip.

![](/img/as_errormsg.png)

For example, add a regular expression for entering a name. The name can contain only alphabetical characters and spaces between the first and last name:

```
/^[a-z -]+$/i
```

<<<<<<< HEAD
If you enter a value that contains something other than alphabetical or space characters, the widget shows an error message "Invalid input."
=======
If you enter a value other than an alphabet or space (number of special characters), the widget shows an error message "invalid input."

Similarly, you can use `s.` to only display words that start with the letter "**s**".
>>>>>>> main

#### Valid

The **Valid** property is an expression that determines whether the cell input is acceptable. When this expression evaluates to `false`, the input is considered invalid and the widget shows its **Error Message**. The following variables are available for binding:

1. `currentRow` - accesses the values of the whole row that contains the editable cell.
2. `currentIndex` - index of the current editable row.
3. `editedValue` - the newly entered value of the editable cell.

<<<<<<< HEAD
For example, imagine you want the updated value to be `John`. In the **Valid** property field, add:
=======
For example: Imagine you want the updated value to be "John". In the **Valid** property field, add:
>>>>>>> main

```
{{editedValue == "John"}}
```

<<<<<<< HEAD
If a value other than "John" is added to the cell, an error is displayed. Similarly, the previously mentioned binding variables can be used to obtain other values and row indexes.
=======
If a word other than "John" is added to the cell, an error is displayed. Similarly, the previously mentioned binding variables can be used to obtain values and row indexes.&#x20;

>>>>>>> main

<VideoEmbed host="youtube" videoId="c4Ylp9QUAc0" title="Valid" caption="Valid"/>

#### Error message

<<<<<<< HEAD
The error message appears if the regular expression (**Regex**) and/or the **Valid** property determine the input is invalid. If a user enters an incorrect value, the widget shows "invalid input." by default. You can change this message by using the **Error message** property to provide better feedback to the user.
=======
The error message displays if the regular expression (regex) or valid property check fails. If a user enters an incorrect value, the widget shows a message "invalid input." You can change this message by using the `Error message` property to provide better feedback on the input given by the user.
>>>>>>> main

![](/img/table_err_msg.PNG)

#### Required

Makes input to the widget mandatory. Sets whether a non-empty value must be entered for the editable cell input.

#### Min

Sets the minimum allowed value. For example, you could set the minimum value to 2 if you only want values greater than 2. Any number entered that's less than 2 is considered invalid.

:::info
**Min** and **Max** properties are available for **numeric**  column types.
:::

#### Max

Sets the maximum allowed value. For example, you could set the maximum value to 100 if you only want values less than 100. Any number entered that's more than 100 is considered invalid.

<VideoEmbed host="youtube" videoId="bUbGMUuINvg" title="Min & Max Example" caption="Min & Max Example"/>

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

This property contains the details of the row that triggered the **onSubmit**, **onSave** or **onDiscard** action. For example, if you bind this property into a text widget, you get an output something like this:

```javascript
{
  "Name": "Updated Name",
  "Date": "Updated Date",
  "Status ": "Updated Status"
}
```

### Events
<<<<<<< HEAD

These properties can be used run code any time one of the events occurs. Be sure to take a look at the list of [supported actions](/reference/appsmith-framework/widget-actions/) that come built in to Appsmith.

| Events        | Description                                                                                                            |
| ------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **onSubmit**  | Action that gets triggered when the user moves away from editing a cell by pressing the enter key or clicking outside of the cell. |
| **onSave**    | Action that gets triggered when the user clicks the save button for a cell or a new row.                               |
| **onDiscard** | Action that gets triggered when user clicks discard button for a cell or a new row.                                    |

### Enable editing cells

The column list on the Table property pane has a checkbox to make that column editable.

Click the checkbox inside a column card makes all the cells in that column editable. The editable checkbox at the top of the list can be checked to make all the editable columns editable.

Alternatively, A column can be editable by turning on `Editable` property inside the column's settings.

![](</img/Editable_preoperty.png>)

You can also use JS to control the `Editable` property. For example, you might use this feature to make only a subset of the cells editable:

![](</img/Using_JS_in_Editable.png>)

```javascript
// in the Editable property
{{ currentRow.status === "pending" }} // only "pending rows are editable
```

Once a column has been made editable, a pencil icon appears on the column header as an indicator.

![](</img/Edit_icon_on_column_header.png>)

### How to edit a cell

Currently, **four column types** support inline editing: these  are **Text, Number, Switch, and Checkbox**. When one of these types of cells is made editable, it displays a pencil edit icon when the user hovers their cursor over it. Click this icon or double-click the cell to begin making changes.

![](</img/Screen_Recording_2022-09-30_at_12_21_13_PM_AdobeExpress.gif>)

Once the user is finished editing, they can move away from the edit mode in two ways:

1. Pressing the **Enter** key or **clicking outside the cell** keeps the new value and closes the input box.
2. Pressing the **Escape** key discards the new value and closes the input box.

:::info
To save the edits made to your table rows, you'll need to set the table's [**Update mode**](#properties) to [**Single row**](#update-mode-single-row) or [**Multi row**](#update-mode-multi-row) mode and then configure your Save buttons to execute queries.
:::

### Perform an action when a cell is edited

When a column is made editable, the `onSubmit` property appears under the Event section in the column settings.

![](</img/OnSubmit\_editable\_enabled.png>)

Users can bind any trigger action on this property, which gets called anytime cell content is edited and persisted. You can use `currentRow` to access the row of the edited cell, and `currentRow["<key_name>"]` can be used to access the updated value.
=======

| Events        | Description                                                                                                            |
| ------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **onSubmit**  | Action that gets triggered when the user moves away from editing a cell by pressing the enter key or clicking outside. |
| **onSave**    | Action that gets triggered when the user clicks the save button for a cell or a new row.                                                       |
| **onDiscard** | Action that gets triggered when user clicks discard button for a cell or a new row.                                                       |
>>>>>>> main

## Adding new rows

In addition to [editing individual cells](#how-to-edit-a-cell), you may allow users to use the Table UI to submit new rows of data.

### Properties

The following properties are related to adding new rows:

| Property              | Type        | Definition               | Code Snippet        |
| --------------------- | ----------- | ------------------------ | ------------------- |
<<<<<<< HEAD
| **Allow adding a row** | Widget | Toggles a button in the table which allows users to submit new rows of data. Only columns marked as **Editable** can accept user input. Use code or a query in the **onSave** event to update the source of the table's data and reflect the user's changes. |
=======
| **Allow adding a row** | Widget | Toggles a button in the table which allows users to submit new rows of data. Only columns marked as **Editable** can accept user input. Use the **onSave** event to update the source of the table's data and reflect the user's changes. |
>>>>>>> main
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

When a new row is being added to the Table, this variable contains a reference to that new row object being added; otherwise, it's `undefined`. This is useful for accessing the user input to send it via query once the user is ready to submit the new data.

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

## Further reference

The following resources may come in handy:

* [Sample apps for Tables](/learning-and-resources/sample-apps#table)
  * [Editable table rows](https://app.appsmith.com/app/editable-table/row-save-62d8f8d0e1c2ed505a0557cc)
