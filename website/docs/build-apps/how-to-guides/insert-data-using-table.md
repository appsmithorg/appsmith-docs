# Insert data using Table 

To dynamically add new rows to the table, follow these steps:

1. Enable the **Allow adding a row** property in the table's property pane. This displays a button labeled _Add new row_ at the top of the table widget. When a user adds a new row to the table, they see **Save row** and **Discard** buttons to save or discard the new row and its data.

2. Enable the **Editable** property for all the required columns.

3. Create a new INSERT query, using the `newRow` reference property. 

<dd>

_Example_: If you want users to add data for new users, you can use:

```sql
INSERT INTO users 
(id, phone, name, gender, latitude, longitude, dob, email, image, country) 
VALUES 
(
   {{ Table1.newRow.id }}, 
   {{ Table1.newRow.phone }}, 
   {{ Table1.newRow.name }}, 
   {{ Table1.newRow.gender }}, 
   {{ Table1.newRow.latitude }}, 
   {{ Table1.newRow.longitude }}, 
   {{ Table1.newRow.dob }}, 
   {{ Table1.newRow.email }}, 
   {{ Table1.newRow.image }}, 
   {{ Table1.newRow.country }}
);
```

</dd>

4. Set the Table widget's **onSave** event to run the query, and the **onSuccess** callback to trigger the fetch query that refreshes the table data with the updated information.







