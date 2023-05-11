---
sidebar_position: 5
---

# Upload and Download Files from S3

Files can be uploaded to Amazon S3 using the S3 plugin and FilePicker Widget. This document presumes you have successfully [connected to your S3 instance](/reference/datasources/querying-amazon-s3.md)

  <VideoEmbed host="youtube" videoId="pmEmQcd9_KA" /> 

## Uploading a File

To upload a file

1. Drag a [Filepicker widget](/reference/widgets/filepicker.md) onto the canvas.
1. Create a new S3 query named upload\_file to be run onFileSelected.
1. Select the [Create File Action](/reference/datasources/querying-amazon-s3.md#create-file) option for the query.
1. The action should be configured with the bucket name and relative path of the location you want to store the file. `ex. images/`any intermediate folders not existing are automatically created.
1. The name of the file should be configured in the file path field. This value can be picked from the Filepicker using JavaScript `images/{{ Filepicker1.files[0].name }}`
1. The content can be configured using the entire file object of the Filepicker. `{{Filepicker1.files[0]}}`
1. Select a file from the file picker and hit upload.

![](</img/amazon\_s3\_upload\_query\_using\_filepicker_(1).png>)

## Downloading Files

To download a file

1. Drag a Table onto the canvas and name it **s3\_files.**
2. Create a new S3 query named **`fetch\_files`** to fetch all the files in your bucket.
   * Configure it with the [List Files](/reference/datasources/querying-amazon-s3.md#list-files) action.
   * Set the bucket name from where to fetch the files and run the query
   *   Bind the response of the query to the Table using JavaScript in the Table Data Property `{{fetch_files.data}}`.

       Now your table should list all the files present in your S3 bucket.

![Click to expand](/img/bind-list-files-to-table.png)

1. Create a new S3 query named **read\_file** to read file data from S3 bucket.
   * Configure it with the [Read File](/reference/datasources/querying-amazon-s3.md#read-file) action.
   * Set the bucket name from where to fetch the file
   * Set `path` to the file path selected in the table using the [javascript expression](writing-javascript-in-appsmith.md) `{{s3_files.selectedRow.fileName}}`

![Click to expand](/img/s3-read-file-query.png)

1.  To download the file selected in the table

    *   Click the `JS` button next to `onRowSelected` Action and write the

        following JavaScript query:

    ```javascript
    {{read_file.run(
    ()=>{download(atob(read_file.data.fileData),s3_files.selectedRow.fileName.split("/").pop())})}}
    ```

    * Click any row in table `s3_files` to download the corresponding file from your S3 bucket.
