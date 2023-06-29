---
sidebar_position: 4
---

# Google Sheet Errors

Working with [Google Sheets](https://www.google.com/sheets/about/) Plugin on Appsmith is the handiest way to use Google Sheets as a [datasource](../../../connect-data/reference/) for building apps. But sometimes, we often run into minor errors while specific queries while editing and deleting data on Google Sheets. In this guide, we'll look at some of the frequent errors one faces while using Google Sheets.

### Expected a row object

This error occurs when an invalid format is passed to the insert or update sheet operations. The request body must be an object with keys matching the headers of the Google Sheet. The header row is determined by the index of the google sheet. Below is a sample row object

```
{
	"rowIndex":{{Table1.selectedRow.rowIndex}},
	"Name Input": "{{editFund.text}}",
	"Designation": "{{editDesignation.text}}",
	"Location": "{{editLocation.text}}"
}
```

### **Missing required field row index**

**Editing Data on Google Sheets**: To edit data on Google Sheets we'll have to use the **Edit Sheet Row** query from the plugin. While doing this, we might encounter a **Missing required field row index** **error**. This occurs when we miss a `rowIndex` key in the **Row Object** property.

For example, you're editing three fields using Input Widgets from a table (`Table1`) with the following names:

* Name Input: `nameInput`
* Email Input: `emailInput`
* Location Input: `locationInput`

To edit these you're `Row Object` should be set to the following:

```
{
	"rowIndex":{{Table1.selectedRow.rowIndex}},
	"Name Input": "{{editFund.text}}",
	"Designation": "{{editDesignation.text}}",
	"Location": "{{editLocation.text}}"
}
```

As we see for the `Edit Sheet Row` query we must pass a `rowIndex`, else it throws a **Missing required field row index** error.

### Plugin failed to parse JSON Error

While creating or editing the data on Google Sheets from Appsmith, we should pass the object that needs to edit in the Row Object property. Here, we might face errors while parsing the data into the [JSON](https://www.w3schools.com/whatis/whatis\_json.asp) object. Below is an example as a reference to edit/create new row objects on Google Sheets from Appsmith.

Here, our goal is to create a new row on Google Sheets, for this we'll be using the **Insert sheet row** query. In this example, we'll be using the following row object:

```
{
  "Investment Fund": "{{addFund.text}}",
  "Location": "{{addLocation.text}}",
  "Name of Investor": "{{addInvestorInput.text}}",
  "Designation": "{{addDesignation.text}}",
  "Interesting Portfolio Companies": "{{addPortifolio.text}}"
}
```

Here, the keys are usually the column names in the Google Sheets, and the corresponding values are the values evaluated from the input [widgets](../../../reference/widgets/) using the mustache `{{}}` operator.

:::tip
Make sure to remove unnecessary commas at the end of [JSON](https://www.w3schools.com/whatis/whatis\_json.asp)
:::
