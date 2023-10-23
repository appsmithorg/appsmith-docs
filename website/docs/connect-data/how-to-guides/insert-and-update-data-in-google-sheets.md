---
sidebar_position: 5
description: This guide shows steps to insert, update, and delete data from Google Sheet.
---

# Write Data in Google Sheet

This page shows you steps to insert, update, and delete data in a Google Sheet.

## Prerequisites

- App connected to a Google sheet datasource.
- Table widget to bind and display the Google sheet data.
- Form widget to write data into the Google sheet.

## Insert single row

To configure the query to insert a row into your Google Sheet, follow these steps:
1. In **Queries/JS**, select the datasource corresponding to your Google Sheet and rename it to `insertUserDetails`.
2. In **Operation**, select **Insert One**.
3. Select **Sheet Rows** in **Entity**.
4. Select the **Spreadsheet**, **Sheet name**, and enter the **Table heading row index**.
5. Enter the JSON payload to specify the column names and value in **Row objects**.
6. Click **Run**. The response shows a success message once the data is inserted successfully.

For more information, see [Insert One](https://docs.appsmith.com/connect-data/reference/querying-google-sheets#insert-one).

## Insert multiple rows

To configure the query to insert multiple rows into your Google Sheet, follow these steps:
1. In **Queries/JS**, select the datasource corresponding to your Google Sheet and rename it to `insertUserDetails`.
2. In **Operation**, select **Insert Many**.
3. Select **Sheet Rows** in **Entity**.
4. Select the **Spreadsheet**, **Sheet name**, and enter the **Table heading row index**.
5. Create a [JS Object](https://docs.appsmith.com/core-concepts/writing-code/javascript-editor-beta) and name it `generate_userdetails_json`.
6. Paste the following code in the JS object:

   ```jsx
   export default {
	async insertUserData() {
		const userdata = [
			{
				"id": 10,
				"gender": "female",
				"latitude": "-22.1155",
				"longitude": "-50.9185",
				"dob": "1979-10-24T12:21:54.259Z",
				"phone": "07-7691-0989",
				"email": "bonnie.schmidt@example.com",
				"image": "https://randomuser.me/api/portraits/med/women/12.jpg",
				"country": "Australia",
				"name": "Doc User10",
				"created_at": "2023-02-21T06:17:36Z",
				"updated_at": "2023-05-14T13:22:00Z"
			},
			{
				"id": 11,
				"gender": "male",
				"latitude": "-22.1155",
				"longitude": "-50.9185",
				"dob": "1979-10-24T12:21:54.259Z",
				"phone": "07-7691-0989",
				"email": "bonnie.schmidt@example.com",
				"image": "https://randomuser.me/api/portraits/med/women/12.jpg",
				"country": "Australia",
				"name": "Doc User11",
				"created_at": "2023-02-21T06:17:36Z",
				"updated_at": "2023-05-14T13:22:00Z"
			}
		];
        insert_data.run({ updatedData: userdata });
		// Return a message or null to satisfy the return requirement
		return userdata;
	 }
   };
  ```
7. Enter the JSON payload to specify the column names and value in **Row object**.
   
   [TBD: JS Function example to show this.params.data]

8. Click **Run**. The response shows a success message once the data is inserted successfully.

## Add spreadsheet
To configure the query to add a spreadsheet to your Google account, follow these steps:
1. In **Queries/JS**, select the datasource corresponding to your Google Sheet and rename it to `insertUserDetails`.
2. In **Operation**, select **Insert One**.
3. Select **Spreadsheet** in **Entity**.
4. Enter a name in **Spreadsheet Name**.
5. Enter the JSON payload to specify the column names and value in **Row object**.
6. Click **Run**. The response shows a success message once the data is inserted successfully.

## Update single row

1. Configure API to update data.
2. Update an existing row using the Form widget.
3. Include an example.

## Update multiple rows

## Further reading
- [Google Sheets](/connect-data/reference/querying-google-sheets)
- [Google Sheet Errors](/help-and-support/troubleshooting-guide/action-errors/google-sheets-plugin-errors)