# Update Data Using Table

This page shows you how to add and edit Table data through inline editing.


<VideoEmbed host="youtube" videoId="eIecDfvSOsU" title="" caption=""/>


## Prerequisites

* A [Table widget](/reference/widgets/table) connected to a query that holds the data you want to edit and update.



:::info
Inline editing is supported for **Text**, **Number**, **Date**, **Switch**, **Select**, and **Checkbox** column types. Custom columns currently do not have this feature.
:::


## Enable inline editing 

Enable inline editing by checking the **Editable** checkbox for the desired columns in the Table widget properties panel. Once inline editing is enabled, you can edit cell contents by clicking on the ✏️ icon or double-clicking on a cell.

<figure>
  <img src="/img/inline-22.png" style= {{width:"600px", height:"auto"}} alt="Display images on table row selection"/>
  <figcaption align = "center"><i>Enable inline editing</i></figcaption>
</figure>


## Update single row

To update a single row, follow these steps:


1. Select **Single row** from the **Update mode** property. This enables the **Save/Discard** column with Save and Discard buttons.

2. Create a new query that uses the `updatedRow` reference property to update the relevant data.

<dd>

_Example_: If you want to modify the `name`  and `phone` field in a `users` database.

```sql
UPDATE users SET 
  name = {{Table1.updatedRow.name}},
  phone = {{Table1.updatedRow.phone}}
  WHERE id = {{ Table1.updatedRow.id }};
```

</dd>

3. Click on the gear icon ⚙️ next to the **Save/Discard** column in the property pane.

4. Set the **onSave** event to run the update query, and the **onSuccess** callback to trigger the fetch query that refreshes the table data with the updated information.
 
Alternatively, you can configure the **onSubmit** event for each [Column](/reference/widgets/table/column-settings) to run a query that saves the new data. The **onSubmit** event is triggered when the user clicks away from the edited cell or presses the Enter key within it. 

<figure>
  <img src="/img/inline-single.gif" style= {{width:"700px", height:"auto"}} alt="Display images on table row selection"/>
  <figcaption align = "center"><i>Edit cells</i></figcaption>
</figure>

## Update multiple rows

To update multiple rows at once using the inline editing feature, follow these steps:

1. Select **Multiple rows** from the **Update mode** property.

2. Configure the columns you want to enable for inline editing and set the **Primary Key** column for row identification during updates.

3. Create a new query that uses `updatedRows` reference property to update the relevant data. 

<dd>

_Example_: If you want to modify the `name`  and `phone` columns in a `users` database.

```sql
UPDATE users
SET name = CASE
  {{Table2.updatedRows.map((user) => `WHEN id = ${user.id} THEN '${user.updatedFields.name}'`).join('\n')}}
END,
phone = CASE
 {{Table2.updatedRows.map((user) => `WHEN id = ${user.allFields.id} THEN '${user.updatedFields.phone}'`).join('\n')}}
END
WHERE id IN ({{Table2.updatedRows.map((user) => user.allFields.id).join(',')}});
```

</dd>

4. Drop a Button widget, and set its **onClick** event to run the update query, and the **onSuccess** callback to trigger the fetch query that refreshes the table data with the updated information.





