# Download Files from S3 

This page shows you steps to download a file from an S3 datasource.

## Prerequisites

- An [Amazon S3 bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html) in one of the AWS Regions.
- App connected to [S3](https://docs.appsmith.com/connect-data/reference/querying-amazon-s3) datasource.
- A [Table](https://docs.appsmith.com/reference/widgets/table) widget to bind data and download files.
- Make sure the server from which the file is retrieved is CORS-enabled and returns the required headers. To prevent download blocks, files must be served over HTTPS. For instructions to add a CORS configuration to your S3 bucket, see [CORS configuration](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ManageCorsUsing.html).

## Download single file from S3

To configure the S3 query to fetch all the files from a bucket and download a file using file data, follow these steps:

1. In **Queries/JS**, click the **+ Add a new query/JS Object** and rename it to `list_files`.
2. Select your S3 datasource.
3. Select [List files in bucket](https://docs.appsmith.com/connect-data/reference/querying-amazon-s3#list-files-in-bucket) from **Commands.**
4. Configure the [Table data](https://docs.appsmith.com/reference/widgets/table#table-data-arrayobject) property of the widget to bind the response of the `list_files` query using `{{list_files.data}}`.
5. Set the widget's [onRowSelected](https://docs.appsmith.com/reference/widgets/table#onrowselected) event to download a file corresponding to a selected row by pasting the following code where `s3_files_details` is the name of the Table widget:

   ```jsx
   {{download(s3_files_details.selectedRow.url,s3_files_details.selectedRow.fileName.split("/").pop())}}}
   ```
7. To test the download, click on any row on the table.

## Download multiple files from S3

To download multiple files from an S3 bucket, follow these steps:

1. Drag and drop a [Button widget](https://docs.appsmith.com/reference/widgets/button) on to the canvas and rename it to `Download all`.
2. In **Queries/JS**, click **+ Add a new query/JS Object**, and then select **New JS Object**.
3. Rename it to `BulkDownload`.
4. Paste the following code to add a JavaScript function to download the files:
   ```jsx
   export default {
	async downloadFiles (url, fileName) {
			download(url, fileName.split("/").pop());
	}}
   ```
5. Set the widget's [onClick](https://docs.appsmith.com/reference/widgets/button#onclick) event to download all the files from the S3 bucket by pasting the following code:

   ```jsx
   {{ListFiles.data.forEach(fileobject => BulkDownload.downloadFiles(object.signedUrl,object.fileName))}}
   ```
6. To test the download, click the `Download all` button.