---
description: This page shows you how to download files.
---
# Download Files

This page shows you how to download a file using an API and S3 datasource.

## Prerequisites
- Access to a cloud platform with [API](/connect-data/reference/rest-api) endpoints.
- A [Table](/reference/widgets/table) widget connected to a fetch query that has the data you want to download.

## Download file using public URL
To download a file using the file URL, follow these steps:
1. Configure the download API and specify the request method (GET).
2. Set the Table widget's [onRowSelected](/reference/widgets/table#onrowselected) event to download a file corresponding to a selected row using the [download()](/reference/appsmith-framework/widget-actions/download) function.

   Example:

   ```jsx
   {{download(tbl_fileDetails.selectedRow.file_url,tbl_fileDetails.selectedRow.file_name)}}
   ```
   In the above example, `tbl_fileDetails` is the Table name, `file_url` and `file_name` are the column names.
3. To test the download, click any row on the table.

## Download file using authenticated URL
Authenticated URLs require a different approach since they cannot be opened directly in the browser. To download a file with authentication, you should fetch the file data, and then download the file using the retrieved data.
To download a file using the file data, follow these steps:
1. Configure the download API and specify the request method (GET).
2. In **Headers**, add the key `content_type` and enter the MIME type as its value. 
   For example: `application/pdf`
3. Set the Table widget's [onRowSelected](/reference/widgets/table#onrowselected) event to download a PDF file from the API using the [download()](/reference/appsmith-framework/widget-actions/download) function.
   
   Example:

   ```jsx
   {{fetch_files.run(()=>{download(fetch_files.data,"filename.pdf")})}}
   ```
   To decode an encoded file content, use the [JavaScript `atob()` method](https://developer.mozilla.org/en-US/docs/Web/API/atob).

   Example:
   ```jsx
   {{fetch_files.run(()=>{download(atob(fetch_files.data),"filename.pdf")})}}
   ```
4. To test the download, select any row on the table.

## Download multiple files
To download multiple files, follow these steps:
1. Drag and drop a Button widget on to the canvas and rename it to `Download all`.
2. In **Queries/JS**, click **+ Add a new query/JS Object**, and then select **New JS Object**. Add code to download multiple files.
   
   Example:
   ```jsx
   export default {
   async downloadFiles (url, fileName) {
         download(url, fileName.split("/").pop());
   }}
   ```
3. Set the Button widget's **onClick** event to download all the files using the JS Object created in Step 2.
   
   Example:
   ```jsx
   {{fetch_files.data.forEach(object => bulk_download.downloadFiles(object.signedUrl,object.fileName))}}
   ```
   In the above example, `fetch_files` is the API query to fetch file data and `bulk_download` is the name of the JS Object.
   
4. To test the download, click any row on the table.
