# Upload / Download Files from S3

Files can be uploaded to Amazon S3 using the S3 plugin and FilePicker Widget. This document presumes you have successfully [connected to your S3 instance](../datasource-reference/querying-amazon-s3.md)

## Uploading a File

To upload a file

1. Drag a [Filepicker widget](../widget-reference/filepicker.md) onto the canvas
2. Create a new S3 query named upload\_file to be run onFileSelected



1. Select the [Create File Action](../datasource-reference/querying-amazon-s3.md#create-file) option for the query.
2. The action should be configured with the bucket name and relative path of the location you want to store the file. `ex. images/`any intermediate folders not existing will be automatically created.
3. The name of the file should be configured in the file path field. This value can be picked from the Filepicker using javascript`images/{{ Filepicker1.files[0].name }}`
4. The content can be configured using the raw property of the Filepicker. `{{Filepicker1.files[0].raw}}`
5. Select a file from the file picker and hit upload

![Click to expand](../.gitbook/assets/amazon_s3_upload_query_using_filepicker.png)

## Downloading Files

To download a file

1. Drag a Table onto the canvas and name it **S3\_Files**
2. Create a new S3 query named **fetch\_files** to fetch all the files in your bucket
3. Configure the [List Files](../datasource-reference/querying-amazon-s3.md#list-files-in-bucket) action for the query
4. Set the bucket name from where to fetch the files and run the query
5. Bind the response of the query to the Table using javascript in the Table Data Property `{{fetch_files.data}}`



1. Add a row action to the table named Download
2. Create a new S3 query for the row action named **fetch\_file**
3. Configure the **fetch\_file** query with the [Read File](../datasource-reference/querying-amazon-s3.md#read-file) action.
4. Configure the bucket name in the query
5. Pass the file path selected in the table to the query using javascript `{{S3_Files.selectedRow.file}}`
6. Configure the onSuccess of the Row Action in the Table to download the file.
7. Configure the download function with
   1. **Data to Download:** `{{fetch_file.data}}`
   2. File name with extension:`{{S3_Files.selectedRow.file.substring(S3_Files.selectedRow.file.lastIndexOf("/")) }}`
8. Click the download button to download any file in your S3 bucket

## 

