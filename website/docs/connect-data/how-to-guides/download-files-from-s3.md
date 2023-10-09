# Download Files from S3 

This page shows you steps to download a file from an S3 datasource.

## Prerequisites

- An [Amazon S3 bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html) in one of the AWS Regions.
- App connected to [S3](https://docs.appsmith.com/connect-data/reference/querying-amazon-s3) datasource.
- A [Table](https://docs.appsmith.com/reference/widgets/table) widget to bind data and download files.

## Configure query to fetch files

To configure the S3 query to fetch all the files from a bucket, follow these steps:

1. In **Queries/JS**, click the **+ Add a new query/JS Object** and rename it to `list_files`.
2. Select your S3 datasource.
3. Select [List files in bucket](https://docs.appsmith.com/connect-data/reference/querying-amazon-s3#list-files-in-bucket) from **Commands.**
4. In **Generate signed URL**, select **Yes**.

## Configure query to read a file

To configure the S3 query to read a file corresponding to a selected row, follow these steps:

1. In **Queries/JS**, click the **+ Add a new query/JS Object** and rename it to `read_files`.
2. Select your S3 datasource.
3. Select [Read file](https://docs.appsmith.com/connect-data/reference/querying-amazon-s3#read-file) from **Commands.**
4. In **File path**, enter the path of the file to read the data. You can set this to the file path selected in the table using the JS expression `{{s3_files_details.selectedRow.filePath}}` where `s3_files_details` is the name of the Table widget.
5. In **Base64 encode file**, select **Yes** to encode the incoming file data to Base64 format. To decode the file content, use the [JavaScript `atob()` method](https://developer.mozilla.org/en-US/docs/Web/API/atob).

## Configure the Table widget to download a file

To bind the data from the S3 query to the Table widget, and download them, follow these steps:

1. Configure the [Table data](https://docs.appsmith.com/reference/widgets/table#table-data-arrayobject) property of the widget to bind the response of the `list_files` query using  `{{list_files.data}}`.
2. You can download files using the following:
   - Object
   - URL
   
   ### Download using object
   Set the widget's [onRowSelected](https://docs.appsmith.com/reference/widgets/table#onrowselected) event to read and download a file corresponding to a selected row by pasting the following code:

      Base64 encoded file:
      ```jsx
      {{read_file.run(
      ()=>{download(atob(read_file.data.fileData),s3_files_details.selectedRow.fileName.split("/").pop())})}}
      ```

      File with no encoding:

      ```jsx
      {{read_file.run(
      ()=>{download(read_file.data.fileData),s3_files_details.selectedRow.fileName.split("/").pop()})}}
      ```

   ### Download using URL
   Set the widget's [onRowSelected](https://docs.appsmith.com/reference/widgets/table#onrowselected) event to read and download a file corresponding to a selected row by pasting the following code:

   ```jsx
   {{download(s3_files_details.selectedRow.signedUrl,s3_files_details.selectedRow.fileName.split("/").pop())}}}
   ```

   Make sure the server from which the file is retrieved is CORS-enabled and returns the required headers. To prevent download blocks, files must be served over HTTPS.

3. To test the download, click on any row on the table.