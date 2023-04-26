# Inline Editing

The Table widget allows users to edit and update data directly from the UI through inline editing.

<VideoEmbed host="youtube" videoId="eIecDfvSOsU" title="" caption=""/>




## Edit cells


To enable inline editing for a table, you can make individual columns editable by checking the **Editable** checkbox in the Columns section of the Table widget properties panel. Once inline editing is enabled, you can click on ✏️ icon or double-click on a cell to edit its contents.

:::info
Inline editing is supported for several column types, including **Text**, **Number**, **Date**, **Switch**, **Select**, and **Checkbox**. However, custom columns currently do not have this feature.
:::

<figure>
  <img src="/img/inline-single.gif" style= {{width:"700px", height:"auto"}} alt="Display images on table row selection"/>
  <figcaption align = "center"><i>Edit cells</i></figcaption>
</figure>


Additionally, if you want to restrict the **Editable** property of certain cells based on a specific condition, you can use the JS within the column settings. For instance, you can allow editing for a row only if the status column contains the value `pending`.

```js
{{ currentRow.status === "pending" }}
```
Inline editing does not save changes automatically to the original datasource. To save changes, the table's **Update mode** must be set and Save button's must be configured to execute queries that update the datasource.


### Update single row

To update a single row, select **Single row**  from the **Update mode** property. When one or more columns of a table are **Editable** in Single row mode, a new table column is inserted called **Save/Discard**. This new column contains a Save button and a Discard button, which execute the table's **onSave** and **onDiscard** events when clicked. 

As an alternative you can configure the **onSubmit** event in each [column's settings](/reference/widgets/table/column-settings) to run a query that saves the new data. The **onSubmit** event takes place whenever the user clicks away from the edited cell, or presses the Enter key within it. 


---
**Example**: suppose you want to modify the `name`  and `phone` field in a users database.

1. Fetch data from the [sample database](/core-concepts/connecting-to-data-sources/connecting-to-databases#sample-databases) `users` using a SELECT query `fetchData` to retrieve the data.

```sql
SELECT * FROM users ORDER BY id LIMIT 10;
```

2. In the Table's **Table Data** property, display the data using:


```js
{{fetchData.data}}
```

3. Select the columns that you want to make editable, for instance `name` and `phone`.

4. Create an UPDATE query using the `updatedRow` reference property to fetch all the information related to the row that was recently modified.

```sql
UPDATE users SET 
  name = {{Table1.updatedRow.name}},
	phone = {{Table1.updatedRow.phone}}
  WHERE id = {{ Table1.updatedRow.id }};
```

5. Set the table widget's **onSave** event to run the update query, and **onSuccess** callback to run `fetchData` query.




### Update multiple rows

To update multiple rows, select **Multiple rows** from the **Update mode** property. To update the datasource, you can use a Button widget to trigger the query that saves the updated data. 

As an alternative you can configure the **onSubmit** event in each [column's settings](/reference/widgets/table/column-settings) to run a query that saves the new data. The **onSubmit** event takes place whenever the user clicks away from the edited cell, or presses the Enter key within it. 

---
**Example**: suppose you want to modify the `name` and `phone` fields in a users database.

1. Fetch data from the [sample database](/core-concepts/connecting-to-data-sources/connecting-to-databases#sample-databases) `users` using a SELECT query `fetchData` to retrieve the data.

```sql
SELECT * FROM users ORDER BY id LIMIT 10;
```

2. In the Table's **Table Data** property, display the data using:

```js
{{fetchData.data}}
```

3. Select the columns that you want to make editable, for instance `name` and `phone`, and **set Primary key column** to `id`.

4. Select **Multi Row** property, and make the columns **Editable**, for instance `revenue` and `title`.

5. Create a new query using the `updatedRows` reference property to retrieve all the data associated with the updated rows.

```sql
UPDATE users
SET name = CASE
  {{Table6.updatedRows.map((user) => `WHEN id = ${user.id} THEN '${user.updatedFields.name}'`).join('\n')}}
END,
phone = CASE
 {{Table6.updatedRows.map((user) => `WHEN id = ${user.allFields.id} THEN '${user.updatedFields.phone}'`).join('\n')}}
END
WHERE id IN ({{Table6.updatedRows.map((user) => user.allFields.id).join(',')}});
```

6. Drag a [Button](/reference/widgets/button) widget, and set its **onClick** event to run the update query, and **onSuccess** callback to run `fetchData` query. 



## Add new rows

To allow users to add a new row to a table, you can turn on the **Allow adding a row** property in the table's property pane. This would enable a button labeled `Add new row` at the top of the table widget. When a user adds a new row to the table, they would see **Save row** and **Discard** buttons to save or discard the new row and its data.

---
**Example**: suppose you want to add new data into users database.

1. Fetch data from the [sample database](/core-concepts/connecting-to-data-sources/connecting-to-databases#sample-databases) `users` using a SELECT query `fetchData` to retrieve the data.

```sql
SELECT * FROM users ORDER BY id LIMIT 10;
```

2. In the Table's **Table Data** property, display the data using:


```js
{{fetchData.data}}
```
3. Enable the **Allow adding a row** property.

4. Make all columns **Editable** by selecting them.

5. Create a new INSERT query, using `newRow` reference property:

```sql
INSERT INTO users 
(id, phone, name, gender, latitude, longitude, dob, email, image, country) 
VALUES 
(
   {{ Table1.newRow.id }}, 
   '{{ Table1.newRow.phone }}', 
   '{{ Table1.newRow.name }}', 
   '{{ Table1.newRow.gender }}', 
   '{{ Table1.newRow.latitude }}', 
   '{{ Table1.newRow.longitude }}', 
   '{{ Table1.newRow.dob }}', 
   '{{ Table1.newRow.email }}', 
   '{{ Table1.newRow.image }}', 
   '{{ Table1.newRow.country }}'
);
```

4. Set the table widget's **onSave** event to run the query and **onSuccess** callback to run `fetchData` query.


<figure>
  <img src="/img/addnewrow.gif" style= {{width:"700px", height:"auto"}} alt="Display images on table row selection"/>
  <figcaption align = "center"><i>Add new row</i></figcaption>
</figure>

Check out the [sample app for inline editing](https://app.appsmith.com/app/editable-table/row-save-62d8f8d0e1c2ed505a0557cc).

## Properties

These common properties allow you to edit the widget, and customize the user actions.

### Widget properties

These properties allow you to edit the widget. All of these properties are present in the property pane of the widget.

| Property                                           | Data type        | Description                                                                                                                                                                                                                                                               |                  
| -------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Editable**                | Boolean  | Controls whether cells of the column are editable                                                             | NA                             |
| **Min**                     | Number  | Sets the minimum allowed value. Only available for columns that are type _Number_.                                                                               | NA                             |
| **Max**                     | Number  | Sets the maximum allowed value. Only available for columns that are type _Number_.                                                                              | NA                             |
| **Regex**                  | regExp  | Enter a regular expression that user input must match to be considered valid. Displays an error message on failure.                                   | NA                             |
| **Valid**                  | Boolean  | Enter a JS expression that evaluates whether the user's input is valid.                                                                | NA                             |
| **Error Message**           | String | The error message displays if the input fails the **Regex** or **Valid** properties' checks.                                        | NA                             |
| **Required**                 | Boolean  | Makes input to the widget mandatory.                                                                          | NA                             |
| **Min Date**                | Date  | Sets the minimum allowed date. Only available for columns that are type _Date_.                                                            | NA                             |
| **Max Date**                | Date  | Sets the maximum allowed date. Only available for columns that are type _Date_.                                                            | NA                             |
| **Update Mode**             | Button  | Controls the save experience of an edited cell.<br/> **Single row** - Cells can be saved using the Save/Discard column buttons. <br/> **Multi row** - cells can be saved by using an **onSubmit** event of the column or through an external button widget. | NA                             |
| **Allow adding a row** |  Boolean| Toggles a button in the table which allows users to submit new rows of data. Only columns marked as **Editable** can accept user input. Use code or a query in the **onSave** event to update the source of the table's data and reflect the user's changes. |
| **Default Values** | String | The values to automatically populate the new row with when a user begins creating a new row. Expects an object with the same keys as the columns in the existing table data. |
 **First Day of Week** | Date Settings | Sets the first day of week that should be shown in the Date Picker while editing Date cells. Only available for columns that are type _Date_.  | `isNewRow` |
| **Show Shortcuts** | Date Settings | Sets whether shortcuts should be shown in the Date Picker while editing Date cells. Only available for columns that are type _Date_.  | `isNewRow` |
| **Same options in new row**| Boolean | When this property is turned on, it ensures that the same options are available for new rows as well.  | `Table1.newRow` |
| **New row options** | Array |  If you want to provide different options for new rows, you can turn off the Same options in new row property. This would make the New row options property visible, where you can add options specifically for the new row.  | `isNewRow` |

### Reference properties
These properties can be referenced in other widgets, queries, or JS functions using the dot operator. For instance, you can use `Table1.isVisible` to get the visibility status.


| Property                                           | Data type        | Description                                                                                                                                                                                                                                                               |                  
| -------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **updatedRows**            | Array     | Contains all the data of the edited table rows. Useful in **Multi row** update mode.                                                    | `{{Table1.updatedRows}}`       |
| **updatedRowIndices**       | Array     | Contains an array of indices of the table rows that have been edited. Useful in **Multi row** update mode.                                                        | `{{Table1.updatedRowIndices}}` |
| **updatedRow**              | Object     | Contains the all the data of the row that was recently updated. Useful in **Single row** update mode. | `{{Table1.updatedRow}}`|
| **isAddRowInProgress** | Boolean | Indicates whether a new row is currently being added by the user. | `Table1.isAddRowInProgress` |
| **newRow**| Array | This variable contains a reference to the new row object added by the user. | `Table1.newRow` |

## Events

These event handlers can be used to run queries, JS code, or other [supported actions](/reference/appsmith-framework/widget-actions/) when the event is triggered.

| Events        | Description                                                                                                            |
| ------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **onSubmit**  | Triggered when the user moves away from editing a cell by pressing the Enter key or clicking outside of the cell.      |
| **onSave**    | Triggered when the user clicks the save button for a new or existing row.                                                |
| **onDiscard** | Triggered when the user clicks the discard button for a new or existing row.                                             |
| **onDateSelected** | Triggered when the user selects a date from Date Picker while editing a date type column.    
| **onOptionChange** | The "onOptionChange" property allows you to specify the action that should occur when the user selects an option in the dropdown list. |
| **onCheckChange** | Triggered when the user checks/unchecks a checkbox.  |
| **onChange** | Triggered when the user toggles the switch.|

