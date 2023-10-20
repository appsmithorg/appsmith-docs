---
sidebar_position: 5
description: This guide shows steps to fetch and filter data from Google Sheets.
---

# Fetch and Filter Data from Google Sheets

This page shows you how to fetch and filter data from Google Sheets.


## Prerequisites
- An app connected to a [Google Sheets](/connect-data/reference/querying-google-sheets) datasource.
- A [Table](/reference/widgets/table) widget.
- A query configured to fetch all the rows from a specific Google Sheet and bind to the Table widget.

### Filter data using where clause
To fetch data based on a condition using the where clause, follow these steps:
1. In the query, select [Fetch Many](/connect-data/reference/querying-google-sheets#fetch-many) in **Operations**.
2. In **Filter Format**, select **Where Clause**.
3. In **Filter By**, enter the filter conditions that you want to apply.
   You can add multiple conditions or group conditions and combine them using **AND**, **OR**.

    <figure>
      <img src="/img/gsheet-data-filter.png" style= {{width:"700px", height:"auto"}} alt="Filter Google Sheet data using where"/>
      <figcaption align = "center"><i>Filter Google Sheet data using where clause</i></figcaption>
    </figure>

   For example, to bind the value of a [Text](/reference/widgets/text) widget named `gender` to the where clause, use the following code:
   ```jsx
   {{gender.text}}
   ```
4. In **[Sort By](/connect-data/reference/querying-google-sheets#sort-by)** enter the column name you want your data sorted by.
   
:::info
If the **Smart JSON substitution** setting is enabled, Appsmith adds or removes quotation marks from the mustache binding `{{}}` as necessary to correctly cast them into JSON. You must manually format the JSON data if this setting is off. For a video guide on using this feature, see [How to Use Smart JSON Substitution](https://www.youtube.com/watch?v=-Z3y-pdNhXc).
:::

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
3. To dynamically bind the cell range using mustache syntax, use the following format where `Cell_range_row` and `Cell_range_col` are two [Text](/reference/widgets/text) widgets:

   ```jsx
   {{Cell_range_row.text}}:{{Cell_range_col.text}}
   ```
### Pagination
You can configure the page size in the response when the **Filter Format** is set to **Where Clause**.
To set the number of records fetched in the response dynamically, follow these steps:
1. In [Pagination Limit](/connect-data/reference/querying-google-sheets#pagination-limit) set the value according to the page size using the following code where `user_details_table` is the name of the Table widget:

   ```jsx
   {{user_details_table.pageSize}}
   ```

   When you set the **Pagination Limit** dynamically, Appsmith automatically updates the number of records to be fetched in the response based on your page or table size.
2. Set the **Pagination Offset** based on the current page size using the following code:

   ```jsx
   {{user_details_table.pageOffset}}
   ```
3. To set up the [Server-side pagination](/reference/widgets/table#server-side-pagination-boolean) for the Table widget,
   see [Setup Server-Side Pagination on Table](/build-apps/how-to-guides/Server-side-pagination-in-table).

## See also
- [Google Sheets Reference](/connect-data/reference/querying-google-sheets)
- [Google Sheet Errors](/help-and-support/troubleshooting-guide/action-errors/google-sheets-plugin-errors)
