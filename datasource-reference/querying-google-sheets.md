---
description: >-
  Appsmith Google Sheet Integration (Beta) lets us build powerful applications
  by connecting to any Google Sheet as a data source.
---

# Google Sheets

This integration is present under API sections with Appsmith applications. Using this, one can achieve all the basic operations (CRUD) with a custom UI on Appsmith by minimal configuration within multiple sheets (sub-sheets) on a Google Sheet.

![](<../.gitbook/assets/Screenshot 2021-05-04 at 4.48.19 PM.png>)

### Connection Settings

To use this plugin, select the Google Sheets option on API creation page and then click on the `Create Datasource`. This will redirect to the config page, where scopes can be configured. You can create a Google Sheets data source with one of either of the two permission scopes listed below:

1. **`Read and Write`:** This scope allows you to use all the methods available within Appsmith's Google Sheets integration. You will be asked to provide read and write access to your Google Sheets as well as Google Drive.
2. **`Read Only`:** This scope allows limited access to methods that would list or read your Google Sheets. In order to use this scope, you must provide read access to both Google Sheets and Google Drive.

On completing authorization, you will be redirected back to the data source page. From here, you can create a new API to use this authorized data source.

{% hint style="warning" %}
Creating and authorizing a Google Sheets data source will store your own personal credentials within the Appsmith servers. When you share your application with more developer or administrators, your Google sheets account will be accessible to them.
{% endhint %}

## Query Methods

| Query Name             | Description                                                          |
| ---------------------- | -------------------------------------------------------------------- |
| Fetch Sheet Rows       | Fetches rows of a google sheet with a row limit                      |
| Insert Sheet Row       | Inserts a new row with provided data in the first found an empty row |
| Update Sheet Row       | Updates row data of the provided rowIndex                            |
| Delete Row             | Deletes row data of the provided rowIndex                            |
| List Sheets            | Lists the total number of Sheets present in Google Sheet             |
| Fetch Sheet            | Fetches row data of a particular sheet in a Google Sheet             |
| Create new Spreadsheet | Create a new spreadsheet in a Google Sheet                           |
| Delete Sheet           | Delete a given spreadsheet in a Google Sheet                         |
| Bulk Insert Rows       | Insert multiple rows based on given data                             |
| Bulk Update Rows       | Update multiple rows based on given data                             |

### **Creating Queries**

This section describes each of the parameters expected while creating new query methods using the Google Sheets plugin.

### 1. Fetch Sheet Rows

| Property Name           | Description                                                                       |
| ----------------------- | --------------------------------------------------------------------------------- |
| Spreadsheet URL         | Your Google Sheet URL                                                             |
| Sheet Name              | Name of your Google Sheet (Found at bottom-right on your Google sheet)            |
| Table Heading Row Index | Row number in Google Sheet that has the table headings. Row numbers start from 1. |
| Query Format            | You can query your rows based on row index or row range                           |
| Row Offset              | Relative row from Table Heading Row Number                                        |
| Row Limit               | Number of rows you want to query                                                  |
| Range                   | A1 Notation of range to retrieve                                                  |

**Response Format:**

```javascript
[
  {
    "rowIndex": NUMERIC_STRING,
    "column_heading1": "column_value1",
    "column_heading2": "column_value2"
  }, ...
]
```

### 2. Insert Sheet Row

| Property Name           | Description                                                                       |
| ----------------------- | --------------------------------------------------------------------------------- |
| Spreadsheet URL         | Your Google Sheet URL                                                             |
| Sheet Name              | Name of your Google Sheet (Found at bottom-right on your Google sheet)            |
| Table Heading Row Index | Row number in Google Sheet that has the table headings. Row numbers start from 1. |

**Request Format:**

```javascript
{
  "rowIndex": NUMERIC_STRING,
  "column_heading1": "column_value1",
  "column_heading2": "column_value2"
}
```

{% hint style="info" %}
Use mustache syntax to dynamically pass values from widgets to the request format.
{% endhint %}

### 3. Update Sheet Row

| Property Name           | Description                                                                |
| ----------------------- | -------------------------------------------------------------------------- |
| Spreadsheet URL         | Your Google Sheet URL                                                      |
| Sheet Name              | Name of your Google Sheet (Found at bottom-right on your Google sheet)     |
| Table Heading Row Index | Row number in Sheet that has the table headings. Row numbers start from 1. |

Request Format:

```javascript
{
  "rowIndex": NUMERIC_STRING,
  "column_heading1": "column_value1",
  "column_heading2": "column_value2"
}
```

### 4. Delete Row

| Property Name           | Description                                                                |
| ----------------------- | -------------------------------------------------------------------------- |
| Spreadsheet URL         | Your Google Sheet URL                                                      |
| Sheet Name              | Name of your Google Sheet (Found at bottom-right on your Google sheet)     |
| Table Heading Row Index | Row number in Sheet that has the table headings. Row numbers start from 1. |
| Row Index               | Relative row from Table Heading Row Number                                 |

### 5. List Sheets

This method lists all the Sheets that are present in your drive it does not require any parameters. This list will contain both the file names as well as the Spreadsheet Id associated with them. This Spreadsheet Id will be used in other methods.

Response Format:

```javascript
[
  {
    "name": <File_Name>,
    "id": <Spreadsheet_Id>
  }, ...
]
```

### 6. Fetch Sheet

| Property Name   | Description           |
| --------------- | --------------------- |
| Spreadsheet URL | Your Google Sheet URL |

This method uses an additional Spreadsheet URL input. This method returns a few more details about the spreadsheet.

**Response Format:**

```javascript
{
  "id": <Spreadsheet_Id>,
  "name": <File_Name>,
  "createdTime": <Timestamp_YYYY-MM-DDTHH:mm:ss.SSSZ>,
  "modifiedTime": <Timestamp_YYYY-MM-DDTHH:mm:ss.SSSZ>,
  "permissions": [
    {
      "role": <Role_String>,
      "emailAddress": <User_Email>
    }
  ]
}
```

### 7. Create New Spreadsheet

| Property Name    | Description                                                            |
| ---------------- | ---------------------------------------------------------------------- |
| Spreadsheet Name | Name of your Google Sheet (Found at bottom-right on your Google sheet) |
| Row Objects      | Request Format of Data                                                 |

Request Format (Optional):

```javascript
[
  {
    "rowIndex": NUMERIC_STRING,
    "column_heading1": "column_value1",
    "column_heading2": "column_value2"
  }, ...
]
```

### 8. Delete Sheet

| Property Name   | Description                                                          |
| --------------- | -------------------------------------------------------------------- |
| Spreadsheet URL | Your Google Sheet URL                                                |
| Select Entity   | Select if you want to delete a specific sheet or entire Google Sheet |
| Sheet Name      | Sheet Name you want to delete                                        |

### 9. Bulk Insert Rows

| Property Name           | Description                                                                |
| ----------------------- | -------------------------------------------------------------------------- |
| Spreadsheet URL         | Your Google Sheet URL                                                      |
| Sheet Name              | Name of the Sheet to bulk insert                                           |
| Table Heading Row Index | Row number in Sheet that has the table headings. Row numbers start from 1. |
| Row Objects             | Request Format of the Data                                                 |

Request Format:

```javascript
[
  {
    "rowIndex": NUMERIC_STRING,
    "column_heading1": "column_value1",
    "column_heading2": "column_value2"
  }, ...
]
```

### 10. Bulk Update Rows

| Property Name           | Description                                                                |
| ----------------------- | -------------------------------------------------------------------------- |
| Spreadsheet URL         | Your Google Sheet URL                                                      |
| Sheet Name              | Name of the Sheet to bulk insert                                           |
| Table Heading Row Index | Row number in Sheet that has the table headings. Row numbers start from 1. |
| Row Objects             | Request Format of the Data                                                 |

Request Format:

```javascript
[
  {
    "rowIndex": NUMERIC_STRING,
    "column_heading1": "column_value1",
    "column_heading2": "column_value2"
  }, ...
]
```

### **Using Queries in applications**

Once you have successfully run a Query, you can use it in your application to

* [Display Data](../core-concepts/displaying-data-read/)
* [Capture Data](../core-concepts/capturing-data-write/)
