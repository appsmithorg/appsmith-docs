---
description: This page shows you how to download files using an API.
---
# Download Files

This page shows you how to download a file using an API and S3 datasource.

## Using API

This section shows how to download files using API or file paths. Make sure you have access to the cloud platform with API endpoints and a Table widget to display and manage the files.


### URL

To download a file using the file URL, follow these steps:
1. In the API configuration, specify the request method (GET) and provide your API URL, including any necessary path.
2. Configure the [Table data](/reference/widgets/table#table-data-arrayobject) property of the Table widget to bind the response of the API using `{{download_image.data}}` where `download_image` is the name of the query.
3. Set the widget's [onRowSelected](/reference/widgets/table#onrowselected) event to download a file corresponding to a selected row by pasting the following code where `imageCatalog` is the name of the Table widget:

   ```jsx
   {{download_image.run(()=>download(imageCatalog.selectedRow.url,imageCatalog.selectedRow.fileName))}}
   ```
4. To test the download, click on any row on the table.

### File data

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

## From S3

This section shows how to download single and multiple files from [S3](https://docs.appsmith.com/connect-data/reference/querying-amazon-s3) datasource.

### Single file from S3

To configure the S3 query to fetch all the files from a bucket and download a file using file data, follow these steps:

:::note
Make sure the server from which the file is retrieved is CORS-enabled and returns the required headers. To prevent download blocks, files must be served over HTTPS. For instructions to add a CORS configuration to your S3 bucket, see [CORS configuration](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ManageCorsUsing.html).
:::

1. In **Queries/JS**, click the **+ Add a new query/JS Object** and rename it to `list_files`.
2. Select your S3 datasource.
3. Select [List files in bucket](https://docs.appsmith.com/connect-data/reference/querying-amazon-s3#list-files-in-bucket) from **Commands.**
4. Configure the [Table data](https://docs.appsmith.com/reference/widgets/table#table-data-arrayobject) property of the widget to bind the response of the `list_files` query using `{{list_files.data}}`.
5. Set the widget's [onRowSelected](https://docs.appsmith.com/reference/widgets/table#onrowselected) event to download a file corresponding to a selected row by pasting the following code where `s3_files_details` is the name of the Table widget:

   ```jsx
   {{download(s3_files_details.selectedRow.url,s3_files_details.selectedRow.fileName.split("/").pop())}}}
   ```
7. To test the download, click on any row on the table.

### Multiple files from S3

To download multiple files from an S3 bucket, follow these steps:

1. Drag and drop a [Button widget](https://docs.appsmith.com/reference/widgets/button) on to the canvas and rename it to `Download all`.
2. In **Queries/JS**, click **+ Add a new query/JS Object**, and then select **New JS Object**.
3. Rename it to `bulkDownload`.
4. Paste the following code to add a JavaScript function to download the files:
   ```jsx
   export default {
	async downloadFiles (url, fileName) {
			download(url, fileName.split("/").pop());
	}}
   ```
5. Set the widget's [onClick](https://docs.appsmith.com/reference/widgets/button#onclick) event to download all the files from the S3 bucket by pasting the following code:

   ```jsx
   {{ListFiles.data.forEach(fileobject => bulkDownload.downloadFiles(object.signedUrl,object.fileName))}}
   ```
6. To test the download, click the `Download all` button.
