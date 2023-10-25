---
sidebar_position: 5
description: This guide shows steps to insert, update, and delete data from Google Sheet.
---

# Insert and Update Data in Google Sheets

This guide shows you how to insert and update data in a Google Sheets.

## Prerequisites

- An app connected to a [Google Sheets](/connect-data/reference/querying-google-sheets) datasource.
- A [Table](/reference/widgets/table) widget with [inline editing](/reference/widgets/table/inline-editing) enabled.
- A query configured to fetch all the rows from a specific Google Sheet and bind to the Table widget.

## Insert single row
To insert a row into your Google Sheet, follow these steps:
1. In **Queries/JS**, add a new query.
2. Select the datasource corresponding to your Google Sheet and rename it to `insertUserDetails`.
3. In **Operation**, select **Insert One**.
4. Select **Sheet Rows** in **Entity**.
5. Select the **Spreadsheet**, **Sheet name**.
6. Enter the **Table heading row index**.
   This is the row index of the row in your spreadsheet that contains the headings or labels for your table columns.
7. In **Row objects**, paste the following code to insert a new row into the sheet where `user_details_table` is the name of the Table widget:

   ```jsx
   {
	  "id": {{ user_details_table.newRow.id }}, 
      "phone": {{ user_details_table.newRow.phone }}, 
      "name": {{ user_details_table.newRow.name }}, 
      "gender": {{ user_details_table.newRow.gender }}, 
      "latitude": {{ user_details_table.newRow.latitude }}, 
      "longitude": {{ user_details_table.newRow.longitude }}, 
      "dob": {{ user_details_table.newRow.dob }}, 
      "email": {{ user_details_table.newRow.email }}, 
      "image": {{ user_details_table.newRow.image }}, 
      "country": {{ user_details_table.newRow.country }}
   }
   ```
8. Enable **Allow adding a row** in the Table widget and set it's **onSave** event by using the following code:

   ```jsx
   {{insertUserDetails.run()}}
   ```
9. To test, click **Add new row**, enter the user details and click **Save row**.

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
   {{userDetailsFiles.files[0].data}}
   ```
8. Drag and drop a Button widget on the canvas and rename it to `insert_users`.
9. Set the **onClick** event of the widget to `{{insert_new_users.run()}}`.
10. To test, upload a CSV file using the Filepicker widget and click the `insert_users` button.

## Update single row
This guide uses the inline editing feature of the Table widget to update a single row of a Google Sheet. You can also use a [Form](/reference/widgets/form) widget to update data in Google Sheets.

To configure the query to update specific fields of a row, follow these steps:
1. In the **Update mode** property of the Table widget, select **Single Row**.
2. In **Queries/JS**, add a new query.
3. Select the datasource corresponding to your Google Sheet and rename it to `updateUser`.
4. In **Operation**, select **Update One**.
5. Select **Sheet Rows** in **Entity**.
6. Select the **Spreadsheet**, **Sheet name**, and enter the **Table heading row index**.
7. To update data in Google Sheets, you must specify a `rowIndex` to identify which row you wish to update.
   Use the following code to fetch the row index based on the row selected on the Table widget:

   ```jsx
   user_details_table.selectedRow.rowIndex
   ```
8. Paste the following code in **Update row object**:

   ```jsx
	{{
		{
			rowIndex: user_details_table.selectedRow.rowIndex, // includes rowIndex key
			"id": user_details_table.selectedRow.id, 
			"phone": user_details_table.selectedRow.phone, 
			"name": user_details_table.selectedRow.name, 
			"gender": user_details_table.selectedRow.gender, 
			"latitude": user_details_table.selectedRow.latitude, 
			"longitude": user_details_table.selectedRow.longitude, 
			"dob": user_details_table.selectedRow.dob, 
			"email": user_details_table.selectedRow.email, 
			"image": user_details_table.selectedRow.image, 
			"country": user_details_table.selectedRow.country
		}
	}}
   ```
9. Set the **onSave** event of the widget in **Save/Discard** to `{{updateUser.run()}}`.
10. To test, edit the data of a specific row in the table and click **Save**.

## Update multiple rows
To configure the query to update multiple rows, follow these steps:
1. In the **Update mode** property of the Table widget, select **Multiple Rows**.
2. In **Queries/JS**, add a new query.
3. Select the datasource corresponding to your Google Sheet and rename it to `updateUsers`.
4. In **Operation**, select **Update Many**.
5. Select **Sheet Rows** in **Entity**.
6. Select the **Spreadsheet**, **Sheet name**, and enter the **Table heading row index**.
7. Paste the following code in Update row objects:

   ```jsx
	{{
    user_details_table.updatedRows.map(row => {
        return row.allFields
    })}}
   ```
8. Drag and drop a Button widget on the canvas and rename it to `update_all`.
9. Set the **onClick** event of the button to `{{updateUsers.run()}}`.
10. To test, edit the data of a few rows in the table and click the `update_all` button.

## Further reading
- [Google Sheets](/connect-data/reference/querying-google-sheets)
- [Google Sheet Errors](/help-and-support/troubleshooting-guide/action-errors/google-sheets-plugin-errors)
