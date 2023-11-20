---
description: This guide shows steps to insert and update data in Google Sheets.
---

# Insert and Update Data in Google Sheets

This guide shows you how to insert and update data in Google Sheets.

## Prerequisites

- An app connected to a [Google Sheets](/connect-data/reference/querying-google-sheets) datasource.
- A [Table](/reference/widgets/table) widget with [inline editing](/reference/widgets/table/inline-editing) enabled.
- A query configured to fetch all the rows from a specific Google Sheet and bind to the Table widget.
- A [Form](/reference/widgets/form) widget matching the table's structure to insert or update data.

## Insert single row

To insert a row into your Google Sheet, follow these steps:

1. Drag and drop a [Button](/reference/widgets/button) widget to the Form widget and rename it to `Submit`.
2. In **Queries/JS**, add a new query.
3. Select the datasource corresponding to your Google Sheet and rename it to `insertUserDetails`.
4. In **Operation**, select **Insert One**.
5. Select **Sheet Rows** in **Entity**.
6. Select the **Spreadsheet** and **Sheet name**.
7. Enter the **Table heading row index**.
   The row index refers to the row in your spreadsheet that contains the headings or labels for your table columns.
8. In **Row objects**, paste the following code to insert a new row into the sheet where `user_details_form` is the name of the Form widget:

```jsx
{
   "id": {{ user_details_form.data.id }},
   "phone": {{ user_details_form.data.phone }},
   "name": {{ user_details_form.data.name }},
   "gender": {{ user_details_form.data.gender }},
   "latitude": {{ user_details_form.data.latitude }},
   "longitude": {{ user_details_form.data.longitude }},
   "dob": {{ user_details_form.data.dob }},
   "email": {{ user_details_form.data.email }},
   "image": {{ user_details_form.data.image }},
   "country": {{ user_details_form.data.country }}
}
```

9.  In the Form widget, set the **onClick** event for the `Submit` button using the following code:

```jsx
{
  {
    insertUserDetails.run();
  }
}
```

10. To test, enter the data in the form and click **Submit**.

## Insert multiple rows

You can insert multiple rows of data into your sheet by using an array of objects to specify the row details. This guide shows you how to insert multiple rows by uploading data from a CSV file using the [FilePicker](/reference/widgets/filepicker) widget.

To upload a CSV file and configure the query to insert multiple rows into your Google Sheet, follow these steps:

1. Drag and drop a [Filepicker](/reference/widgets/filepicker) widget on the canvas and rename it to `userDetailsFiles`.
2. In the **Data format** property, select **Array of Objects**.
3. In **Queries/JS**, select the datasource corresponding to your Google Sheet and rename it to `insert_new_users`.
4. In **Operation**, select **Insert Many**.
5. Select **Sheet Rows** in **Entity**.
6. Select the **Spreadsheet**, **Sheet name**, and enter the **Table heading row index**.
7. In **Row objects**, paste the following code to insert data using the [files](/reference/widgets/filepicker#files-array) reference property of the Filepicker widget:

   ```jsx
   {
     {
       userDetailsFiles.files[0].data;
     }
   }
   ```

8. Drag and drop a Button widget on the canvas and rename it to `insert_users`.
9. Set the **onClick** event of the widget using the following code:

```jsx
{
  {
    insert_new_users.run();
  }
}
```

10. To test, upload a CSV file using the Filepicker widget and click the `insert_users` button.

    :::caution important
    Column details in the Google Sheet should match the column details in the data you are inserting. Appsmith does not insert data for a mismatched column.
    :::

## Update single row

To configure the query to update specific fields of a row using the Form widget, follow these steps:

1. Set the widget properties within the form to populate data corresponding to the selected row of the Table widget.

   For example, to set the `Name` Input widget's data property with the name of the selected row, paste the following code in **Default value**:

   ```jsx
   {
     {
       user_details_table.selectedRow.name;
     }
   }
   ```

2. In **Queries/JS**, add a new query.
3. Select the datasource corresponding to your Google Sheet and rename it to `updateUser`.
4. In **Operation**, select **Update One**.
5. Select **Sheet Rows** in **Entity**.
6. Select the **Spreadsheet**, **Sheet name**, and enter the **Table heading row index**.
7. Paste the following code in **Update row object**:

   ```jsx
   {{
   	{
   		rowIndex: user_details_table.selectedRow.rowIndex, // includes rowIndex key
   		"id": user_details_form.data.id,
   		"phone": user_details_form.data.phone,
   		"name": user_details_form.data.name,
   		"gender": user_details_form.data.gender,
   		"latitude": user_details_form.data.latitude,
   		"longitude": user_details_form.data.longitude,
   		"dob": user_details_form.data.dob,
   		"email": user_details_form.data.email,
   		"image": user_details_form.data.image,
   		"country": user_details_form.data.country
   	}
   }}
   ```

   To update data in Google Sheets, you must specify a `rowIndex` to identify which row you wish to update.
   The above example uses the following code to fetch the row index based on the row selected on the Table widget:

   ```jsx
   rowIndex: user_details_table.selectedRow.rowIndex;
   ```

8. In the Form widget, set the **onClick** event for the `Submit` button using the following code:
   ```jsx
   {
     {
       updateUser.run();
     }
   }
   ```
9. To test, edit the data in the form and click **Submit**.

## Update multiple rows

To configure the query to update multiple rows, follow these steps:

1. In the **Update mode** property of the Table widget, select **Multiple Rows**.
2. In **Queries/JS**, add a new query.
3. Select the datasource corresponding to your Google Sheet and rename it to `updateUsers`.
4. In **Operation**, select **Update Many**.
5. Select **Sheet Rows** in **Entity**.
6. Select the **Spreadsheet**, **Sheet name**, and enter the **Table heading row index**.
7. Paste the following code in **Update row objects**:

   ```jsx
   {
     {
       user_details_table.updatedRows.map((row) => {
         return row.allFields;
       });
     }
   }
   ```

8. Drag and drop a [Button](/reference/widgets/button) widget on the canvas and rename it to `update_all`.
9. Set the **onClick** event of the button using the following code:

   ```jsx
   {
     {
       updateUsers.run();
     }
   }
   ```

10. To test, edit the data of a few rows in the table and click the `update_all` button.

## See also

- [Google Sheets](/connect-data/reference/querying-google-sheets)
