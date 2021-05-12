# Google Sheets Plugin Errors

Working with Google Sheets Plugin on Appsmith is the handiest way to use Google Sheets as a data source for building apps. But sometimes, we often run into minor errors while specific queries while editing and deleting data on Google Sheets. In this guide, we'll look at some of the frequent errors one faces while using Google Sheets.

**Editing Data on Google Sheets**: To edit data on Google Sheets we'll have to use the `Edit Sheet Row` query from the plugin. While doing this, we might encounter a **Missing required field row index** error**.** This occurs when we miss a `rowIndex` key in the **Row Object** property. 

For example, you're editing three fields using Input Widgets from a table \(`Table1`\) with the following names:

* Name Input: `nameInput`
* Email Input: `emailInput`
* Location Input: `locationInput`

To edit these you're `Row Object` should be set to the following:

```text
{
	"rowIndex":{{Table1.selectedRow.rowIndex}},
	"Name Input": "{{editFund.text}}",
	"Designation": "{{editDesignation.text}}",
	"Location": "{{editLocation.text}}"
}
```

As we see for the `Edit Sheet Row` query we must pass an `rowIndex`, else it throws a **Missing required field row index** error. 



