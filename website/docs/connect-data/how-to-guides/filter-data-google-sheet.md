---
sidebar_position: 5
description: This guide shows steps to fetch and filter data from Google Sheets.
---

# Fetch and Filter Data from Google Sheets

This page shows you how to fetch and filter data from a Google Sheet.


## Prerequisites
- An app connected to a Google Sheet datasource.
- A [Table widget](/reference/widgets/table) to bind and display the Google Sheet data.

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

3. In **[Sort By](/connect-data/reference/querying-google-sheets#sort-by)** enter the column name you want your data sorted by.

4. Set the number of records fetched in the response dynamically in [Pagination Limit](/connect-data/reference/querying-google-sheets#pagination-limit) using the following code:

   ```jsx
   {{user_details_table.pageSize}}
   ```

   When you set the **Pagination Limit** dynamically, Appsmith automatically updates the number of records to be fetched in the response based on your page or table size.
5. Set the **Pagination Offset** based on the current page size using the following code:

   ```jsx
   {{(user_details_table.pageNo-1)*user_details_table.pageSize}}
   ```
6. Enable the [Server-side pagination](/reference/widgets/table#server-side-pagination-boolean) property in the Table widget.
7. Set the Table widget's [onPageChange](/reference/widgets/table#onpagechange) event to run the query again to fetch the next set of data.
   For example:
   `{{fetchUserDetails.run()}}`

   For more information on setting up pagination on the Table widget, see [Setup Server-Side Pagination on Table](/build-apps/how-to-guides/Server-side-pagination-in-table).

### Filter data using a cell range
To filter data by a range to fetch data from designated cells in your sheet, follow these steps:
1. In **Filter Format**, select **Cell range**.
2. Specify the range of the cells to fetch data in the following format:
   ```jsx
   A2:Z
   ```
   Selecting cells in this mode uses Google Sheets' row number and column letter syntax.

   For example:
   ```jsx
   A1-B14
   ```
   Your fetched data still includes the column labels even if the column header row does not appear in your selection.
   
   For more information, see [Cell Range](/connect-data/reference/querying-google-sheets#cell-range).
3. To dynamically bind the cell range using mustache syntax, use the following format where `Cell_range_row` and `Cell_range_col` are input fields:

   ```jsx
   {{Cell_range_row.text}}:{{Cell_range_col.text}}
   ```

## Further reading
- [Google Sheets Reference](/connect-data/reference/querying-google-sheets)
- [Google Sheets Errors](/help-and-support/troubleshooting-guide/action-errors/google-sheets-plugin-errors)
