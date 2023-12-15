---
description: This page shows you how to download files.
---
# Download Files

This page shows you how to download a file using an API using PDF as the file format.

## Prerequisites
- Access to a cloud platform with [API](/connect-data/reference/rest-api) endpoints.
- A [Table](/reference/widgets/table) widget to bind data and download files.

## Download file using public URL
To download a file using the file URL, follow these steps:
1. In the API configuration, specify the request method (GET) and provide your API URL, including any necessary path.
2. Configure the [Table data](/reference/widgets/table#table-data-arrayobject) property of the Table widget to bind the response of the API using `{{download_image.data}}` where `download_image` is the name of the query.
3. Set the widget's [onRowSelected](/reference/widgets/table#onrowselected) event to download a file corresponding to a selected row by pasting the following code where `imageCatalog` is the name of the Table widget:

   ```jsx
   {{download_image.run(()=>download(imageCatalog.selectedRow.url,imageCatalog.selectedRow.fileName))}}
   ```
4. To test the download, click on any row on the table.


## Download file using authenticated URL
Authenticated URLs require a different approach since they cannot be opened directly in the browser. To download a file with authentication, you should fetch the file data, and then download the file using the retrieved data.
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
5. To test the download, select any row on the table.

## Download multiple files
To download multiple files, follow these steps:
1. Drag and drop a Button widget on to the canvas and rename it to Download all.
2. In **Queries/JS**, click **+ Add a new query/JS Object**, and then select **New JS Object**. Add code to download multiple files.
   
   Example:
   ```jsx
   export default {
   async downloadFiles (url, fileName) {
         download(url, fileName.split("/").pop());
   }}
   ```
3. Set the widget's **onClick** event to download all the files using the following code where `bulkDownload` is the JS Object:

   ```jsx
   {{ListFiles.data.forEach(fileobject => bulkDownload.downloadFiles(object.signedUrl,object.fileName))}}
   ```
4. To test the download, click the Download all button.
