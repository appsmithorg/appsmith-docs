# Download Files from S3 


To download a file

1. Drag a Table onto the canvas and name it **s3\_files.**
2. Create a new S3 query named **`fetch\_files`** to fetch all the files in your bucket.
   * Configure it with the [List Files](/connect-data/reference/querying-amazon-s3#list-files) action.
   * Set the bucket name from where to fetch the files and run the query
   *   Bind the response of the query to the Table using JavaScript in the Table Data Property `{{fetch_files.data}}`.

       Now your table should list all the files present in your S3 bucket.

![Click to expand](/img/bind-list-files-to-table.png)

1. Create a new S3 query named **read\_file** to read file data from S3 bucket.
   * Configure it with the [Read File](/connect-data/reference/querying-amazon-s3#read-file) action.
   * Set the bucket name from where to fetch the file
   * Set `path` to the file path selected in the table using the JS expression `{{s3_files.selectedRow.fileName}}`

![Click to expand](/img/s3-read-file-query.png)

1.  To download the file selected in the table

    *   Click the `JS` button next to `onRowSelected` Action and write the

        following JavaScript query:

    ```javascript
    {{read_file.run(
    ()=>{download(atob(read_file.data.fileData),s3_files.selectedRow.fileName.split("/").pop())})}}
    ```

    * Click any row in table `s3_files` to download the corresponding file from your S3 bucket.
