---
description: This page shows you how to download files using an API.
---
# Download Files Using API

This page shows you how to download a file using an API using PDF as the file format.

## Prerequisites
- Access to a cloud platform with [API](/connect-data/reference/rest-api) endpoints.
- A [Table](/reference/widgets/table) widget to bind data and download files.

## Download file using URL
To download a file using the file URL, follow these steps:
1. In the API configuration, specify the request method (GET) and provide your API URL, including any necessary path.
2. Configure the [Table data](/reference/widgets/table#table-data-arrayobject) property of the Table widget to bind the response of the API using `{{download_image.data}}` where `download_image` is the name of the query.
3. Set the widget's [onRowSelected](/reference/widgets/table#onrowselected) event to download a file corresponding to a selected row by pasting the following code where `imageCatalog` is the name of the Table widget:

   ```jsx
   {{download_image.run(()=>download(imageCatalog.selectedRow.url,imageCatalog.selectedRow.fileName))}}
   ```
4. To test the download, click on any row on the table.

## Download file using file data
To download a file using the file data, follow these steps:
1. In the API configuration, specify the request method (GET) and provide your API URL, including any necessary path.
2. In **Headers**, add the key `content_type` and enter the MIME type as its value. 
   For example: `application/pdf`
3. Configure the [Table data](/reference/widgets/table#table-data-arrayobject) property of the Table widget to bind the response of the API using `{{list_files.data}}` where `list_files` is the name of the query.
4. Set the widget's [onRowSelected](/reference/widgets/table#onrowselected) event to download a PDF file from the API using the following code:
   
   ```jsx
   {{list_files.run(()=>{download(list_files.data,"filename.pdf")})}}
   ```
   To decode an encoded file content, use the [JavaScript `atob()` method](https://developer.mozilla.org/en-US/docs/Web/API/atob).

   For example:
   ```jsx
   {{list_files.run(()=>{download(atob(list_files.data),"filename.pdf")})}}
   ```

5. To test the download, click on any row on the table.
