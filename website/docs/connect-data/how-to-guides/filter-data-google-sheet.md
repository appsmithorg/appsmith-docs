---
sidebar_position: 5
description: This guide shows steps to fetch and filter data from Google Sheets.
---

# Fetch and Filter Data in Google Sheet

This page shows you steps to fetch and filter data from a Google Sheet.


## Prerequisites
- An app connected to a Google Sheet datasource.
- A [Table widget](https://docs.appsmith.com/reference/widgets/table) to bind and display the Google Sheet data.

## Fetch data
To configure the query to fetch all the rows from a specific Google Sheet and bind to the Table widget, follow these steps:

1. In **Queries/JS**, select the datasource corresponding to your Google Sheet and rename it to `fetchUserDetails`.
2. In **Operations**, select [Fetch Many](https://docs.appsmith.com/connect-data/reference/querying-google-sheets#fetch-many).
3. In **Entity**, select **Sheet Rows** to bind all the rows of a specific Sheet from your Google account.
4. Select your **Spreadsheet** and **Sheet name**.
5. Appsmith automatically populates the columns present in your Google Sheet in **Columns**. Select the columns from which you want to retrieve data.
6. Configure the [Table data](https://docs.appsmith.com/reference/widgets/table#table-data-arrayobject) property of the widget to bind the Google Sheet data using `{{fetchUserDetails.data}}`.


### Filter data using where clause
To fetch data based on a condition using the where clause, follow these steps:
1. In **Filter Format**, select **Where Clause**.
2. In **Filter By**, enter the filter conditions that you want to apply.
   You can add multiple conditions or group conditions and combine them using **AND**, **OR**.

    <figure>
      <img src="/img/gsheet-data-filter.png" style= {{width:"700px", height:"auto"}} alt="Filter Google Sheet data using where"/>
      <figcaption align = "center"><i>Filter Google Sheet data using where clause</i></figcaption>
    </figure>

    If the **Smart JSON substitution** setting is enabled, Appsmith adds or removes quotation marks from your JavaScript data as necessary to correctly cast them into JSON. You must manually format the JSON data if this setting is off. For a video guide on using this feature, see [How to Use Smart JSON Substitution](https://www.youtube.com/watch?v=-Z3y-pdNhXc).

3. In **[Sort By](https://docs.appsmith.com/connect-data/reference/querying-google-sheets#sort-by)** enter the column name you want your data sorted by.

4. Set the number of records fetched in the response dynamically in [Pagination Limit](https://docs.appsmith.com/connect-data/reference/querying-google-sheets#pagination-limit) using the following code:

   ```jsx
   {{user_details_table.pageSize}}
   ```

   When you set the **Pagination Limit** dynamically, Appsmith automatically updates the number of records to be fetched in the response based on your page or table size.
5. Set the **Pagination Offset** based on the current page size using the following code:

   ```jsx
   {{(user_details_table.pageNo-1)*user_details_table.pageSize}}
   ```
6. Enable the [Server-side pagination](https://docs.appsmith.com/reference/widgets/table#server-side-pagination-boolean) property in the Table widget.
7. Set the Table widget's [onPageChange](https://docs.appsmith.com/reference/widgets/table#onpagechange) event to run the query again to fetch the next set to data.
   For example:
   `{{fetchUserDetails.run()}}`

   For more information to set up pagination on the Table widget, see [Setup Server-Side Pagination on Table](https://docs.appsmith.com/build-apps/how-to-guides/Server-side-pagination-in-table).

### Filter data using a cell range
To fetch data corresponding to a specific block of cells, follow these steps:
1. In **Filter Format**, select **Cell range**.
2. Specify the range of the cells to fetch data in the following format:

   `A2:Z`

   For example:

   `A1-B14`

   For more information, see [Cell Range](https://docs.appsmith.com/connect-data/reference/querying-google-sheets#cell-range).

## Further reading
- [Google Sheets Reference](https://docs.appsmith.com/connect-data/reference/querying-google-sheets)
- [Google Sheets Troubleshooting](https://docs.appsmith.com/help-and-support/troubleshooting-guide/action-errors/google-sheets-plugin-errors)