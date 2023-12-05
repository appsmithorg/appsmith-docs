# Update Data Using Table Inline 

This page shows you how to add and edit Table data through inline editing.



## Prerequisites

A [Table widget](/reference/widgets/table) connected to a query that holds the data you want to edit and update.



:::info
Inline editing is supported for **Text**, **Number**, **Date**, **Switch**, **Select**, and **Checkbox** column types. Custom columns currently do not have this feature.
:::



## Update single row

To update a single row, follow these steps:


<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/S8kwcnl9DTtJXbwCxqeB?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>



1. Enable inline editing by checking the **Editable** checkbox for the desired columns in the Table widget properties panel.

2. Select **Single row**  from the **Update mode** property. This enables the **Save/Discard** column with Save and Discard buttons.

3. Create a new query that uses the `updatedRow` reference property to update the relevant data.

<dd>

_Example_: Suppose you want to modify the `name`  and `phone` field in a `users` database.

```sql
UPDATE users SET 
  name = {{Table1.updatedRow.name}},
  phone = {{Table1.updatedRow.phone}}
  WHERE id = {{ Table1.updatedRow.id }};
```

</dd>

4. Click on the gear icon ⚙️ next to the **Save/Discard** column in the property pane.

5. Set the **onSave** event to run the update query, and the **onSuccess** callback to trigger the fetch query that refreshes the table data with the updated information.
 
Alternatively, you can configure the **onSubmit** event for each [Column](/reference/widgets/table/column-settings) to run a query that saves the new data. The **onSubmit** event is triggered when the user clicks away from the edited cell or presses the Enter key within it. 


## Update multiple rows

To update multiple rows at once using the inline editing feature, follow these steps:

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/S0qBslqcYGmCfBWTqWgd?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>

1. Configure the columns you want to enable for inline editing and set the **Primary Key** column for row identification during updates.


2. Select **Multiple rows** from the **Update mode** property.


3. Create a new query that uses `updatedRows` reference property to update the relevant data. 

<dd>

_Example_: Suppose you want to modify the `name`  and `phone` columns in a `users` database.

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

4. Turn off prepared statements in the query editor for this configuration. For more details, see [Prepared Statements](/connect-data/concepts/how-to-use-prepared-statements).

5. Drop a Button widget, and set its **onClick** event to run the update query, and the **onSuccess** callback to trigger the fetch query that refreshes the table data with the updated information.



