---
sidebar_position: 2
toc_max_heading_level: 2
---

# Amazon S3

This page describes how to connect your application to your Amazon S3 object storage and use queries to manage its content.

This datasource can also be used to connect to any S3-compatible object storage provider such as Upcloud, Digital Ocean Spaces, Wasabi, DreamObjects, and MinIO.

<VideoEmbed host="youtube" videoId="pmEmQcd9_KA" title="" caption=""/>

## Connect to Amazon S3

To add an Amazon S3 datasource:

1. Click the (**+**) sign in the **Explorer** tab next to **Datasources**.
1. On the next screen, select the **S3** button. This creates the datasource and takes you to the datasource's configuration page.
1. Enter your **Access Key** into the matching field. For **Amazon S3**, you can find this in the AWS Console in the **Security Credentials** section.
1. Enter your **Secret Key** into the appropriate field. The AWS Console only shows the secret key once, when it is first created. If you don't have your secret key, you may need to [generate a new access key and secret key](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey).
1. Once you've entered your credentials, click the **Test** button to check that they are working.
1. Click **Save** when you are finished, and your datasource is ready for queries.

<figure>
  <img src="/img/s3-datasource-config.png" style={{width: "100%", height: "auto"}} alt="Configuring an Amazon S3 datasource." />
  <figcaption align="center"><i>Configuring an Amazon S3 datasource.</i></figcaption>
</figure>

## Create queries

You can write [queries](https://docs.appsmith.com/core-concepts/data-access-and-binding/querying-a-database/query-settings) to fetch or write data to your object storage by selecting the **+ New Query**  button on the Amazon S3 datasource page, or by clicking (**+**) next to **Queries/JS** in the **Explorer** tab and selecting your Amazon S3 datasource. You'll be brought to a new query screen where you can write queries.

<figure>
  <img src="/img/s3-query-config.png" style={{width: "100%", height: "auto"}} alt="Configuring a List Files query." />
  <figcaption align="center"><i>Configuring a List Files query.</i></figcaption>
</figure>

## List files in bucket

This action lists/returns an array of objects which are contained within that bucket, each including at least a `fileName` property.

The return data should look something like this:

```json
[
  {
    "fileName": "myFile.pdf",
    ...
  },
  ...
]
```

---

#### Example

> Fetch all files contained in a bucket with a certain path prefix, and display the result in a table. Include links to the documents so the user can view the files.

**Setup**:

Create a [Table widget](/reference/widgets/table) to display your data. Create your Amazon S3 datasource and a query called based on it.

**Configure the query**:

1. Set the **Commands** field to `List files in a bucket`.
1. Provide the name of your S3 bucket in **Bucket Name**.
1. In **Prefix**, provide the path or directory where your file is located.
1. Set **Generate Signed URL** to `Yes`.
1. If you want to set up server-side pagination:
    1. Set **Pagination Limit** to `{{ <table-name>.pageSize }}`.
    1. Set **Pagination Offset** to `{{ <table-name>.pageOffset }}`.

**Configure the table**:

1. Set the Table's **Table Data** property to `{{ <query-name>.data }}`.
1. Run your query once by refreshing the page -- now you can access the properties for the `signedUrl` column of the table.
1. In the settings for the `signedUrl` column, set the **Column Type** to `Button`, and its **Text** to `View`.
1. Configure the button's **onClick** action:
    1. Set the action to `Navigate to`.
    1. Set its **Type** to `URL`.
    1. Set **Enter URL** to `{{ currentRow.signedUrl }}`.
    1. Set its **Target** to `New window`.
1. To complete the setup for server-side pagination:
    1. Enable the table's **Server Side Pagination** toggle and configure the **onPageChange** action to execute your query.

Now your Table is ready to page through your S3 bucket's files, and you can click any row's View button to see the file in a new window.

---

### Parameters

| **Parameter**                     | **Description**                                                              |
| --------------------------------- | ---------------------------------------------------------------------------- |
| **Bucket Name**                   | The name of the S3 bucket to query.    |
| **Prefix**                        | The directory path whose files you'd like to query. In `sample/path/example.png`, the **Prefix** is `sample/path`. Using the prefix `sample/path` with no filtering returns all files in the `sample/path` directory.     |
| **Where**                         | Filter conditions to narrow query results based on comparison operators. |
| **Generate Signed URL**           | Requests an authenticated, user-accessible URL for each file in the response. Users may follow the link in their browser to see the content of the file. The URL expires after the amount of time specified in **Expiry Duration of Signed URL**. |
| **Expiry Duration of Signed URL** | The length of time in minutes that the returned Signed URL is valid. Accepts number values up to 10080 minutes (7 days). |
| **Generate Un-signed URL**        | Requests the plain URL for each file in the query response. This URL does not expire, however it can't be used to access the resource directly, only via API. |
| **Sort By**                       | Orders the query results in ascending or descending order based on a given key's value. |
| **Pagination Limit**              | Restricts the number of results returned in the response. |
| **Pagination Offset**             | Skips a given number of files before returning the further results. |

## Create a new file

This command uploads a new file into the specified bucket, named according to the `File Path` field. Remember to include any necessary directories in the filename as the **Prefix**, e.g. `sample/path/file.png`.

If a file by the same name/path already exists within the bucket, the old file is _overwritten_ by the new one.

You can use the [Filepicker widget](/reference/widgets/filepicker) to select files on your machine to upload to S3. Reference the selected file in your query's **Content** field with `{{ Filepicker1.files[0] }}`.

:::tip
If you need to send plain text content to S3, send JSON in the **Content** field with a `text` and `data` property like below:
```json
{
  "type": "text/plain",
  "data": "This is my text content!"
}
```
:::

---

#### Example

> Upload a file to an S3 bucket in a certain directory.

**Setup**:

Create your Amazon S3 datasource and a new query based on it. Add a Filepicker widget to the canvas, and use it to select a .pdf file from your machine.

**Configure the query**:

1. Set the **Commands** field to `Create a new file`.
1. Set the **Bucket Name** field to the name of your S3 bucket. 
1. Set the **File Path** field to the name you'd like to give the file, including any path prefix.
1. In the **Content** field, reference the file you uploaded:
  ```javascript
  // in the query's Content field
  {{ <filepicker-name>.files[0] }}
  ```

Now when your run your query, the file you selected is uploaded to your S3 bucket.

---

### Parameters

| **Parameter**                     | **Description**                                                              |
| --------------------------------- | ---------------------------------------------------------------------------- |
| **Bucket Name**                   | The name of the S3 bucket to query.    |
| **File Path**                     | The name under which to save the file. Be sure to include directories as prefixes to the filename if necessary.     |
| **File Data Type**                | Sets the data format to use when sending the file content. |
| **Expiry Duration of Signed URL** | The length of time in minutes that the returned Signed URL is valid. Accepts number values up to 10080 minutes (7 days). |

## Read file

This command fetches the content of a file from the bucket. By default, the raw content of the file is returned on the `fileData` property of the response.

:::tip
If your `fileData` content is in Base64 format and needs to be decoded, use the [JavaScript `atob()` method](https://developer.mozilla.org/en-US/docs/Web/API/atob).
:::

---

#### Example

> Download the content of a .pdf file from an S3 bucket.

**Setup**:

Create your Amazon S3 datasource and a query based on it. Then create a table widget that is set up to list the files in your S3 bucket as described above in [List files in bucket](#list-files-in-bucket).

**Configure the query**:

1. Set the **Commands** field to `Read file`.

1. Set the **Commands** field to `Read file`.
1. Set the **Bucket Name** field to the name of your S3 bucket. 
1. Set the **File Path** field to `{{ <table-name>.triggeredRow.fileName }}`.

**Configure the table**:

1. In the Table's properties pane, add a custom column with **Column Type** `Button` and **Text** set to `Download`.
1. Configure its **onClick**:
    1. Set the action to `Download`.
    1. Set **Data to download** to:
      ```javascript
      // in the button column's onClick settings
      {{ atob(<read-query-name>.data.fileData) }}
      ```
    1. Set the **File name with extension** to `{{ <table-name>.triggeredRow.fileName }}`.

Now when a user clicks the download button in a table row, the associated .pdf is downloaded to their machine.

---

### Parameters

| **Parameter**                     | **Description**                                                              |
| --------------------------------- | ---------------------------------------------------------------------------- |
| **Bucket Name**                   | The name of the S3 bucket to query.    |
| **File Path**                     | The name under which to save the file. Be sure to include directories as prefixes to the filename if necessary.     |
| **Base64 Encode File**            | Sets whether Appsmith encodes the incoming file's content into Base64. |

## Delete file

This command deletes a file from an S3 bucket.

This action returns a message on the `status` property describing the outcome of your query.

---

#### Example:

> Delete a particular file from an S3 bucket.

**Setup**:

Create your Amazon S3 datasource and a query based on it. Then create a table widget that is set up to list the files in your S3 bucket as described above in [List files in bucket](#list-files-in-bucket).

**Configure the query**:

1. Set the **Commands** field to `Delete file`.
1. Set the **Bucket Name** field to the name of your S3 bucket. 
1. Set the **File Path** field to `{{ <table-name>.triggeredRow.fileName }}`.

**Configure the table**:

1. In the Table's properties pane, add a custom column with **Column Type** `Button` and **Text** set to `Delete`.
1. Configure its **onClick**; toggle the **JS** tag and enter the code:
  ```javascript
  {{
    <delete-query-name>.run().then(() => {
      <list-query-name>.run();
    })
  }}
  ```

Now when you click the delete button in the table, the corresponding file is deleted from the S3 bucket and the table is refreshed.

---

### Parameters

| **Parameter**                     | **Description**                                                              |
| --------------------------------- | ---------------------------------------------------------------------------- |
| **Bucket Name**                   | The name of the S3 bucket to query.    |
| **File Path**                     | The name under which to save the file. Be sure to include directories as prefixes to the filename if necessary.     |

## Commands

**Command** sets the type of action you want to perform with your query.

| **Command**                    | **Description**                                                    |
| ------------------------------ | ------------------------------------------------------------------ |
| **List files in bucket**       | Fetch names and URLs for files in an S3 bucket.                    |
| **Create a new file**          | Upload a new file to an S3 bucket.                                 |
| **Create multiple new files**  | Upload several files to an s3 bucket.                              |
| **Read file**                  | Download the content of a particular file.                         |
| **Delete file**                | Delete the file at a given path.                                   |
| **Delete multiple**            | Delete multiple files by supplying their paths.                    |

## Further reading

* [Upload files](/learning-and-resources/how-to-guides/how-to-upload-to-s3)
* [Download files](/learning-and-resources/how-to-guides/how-to-upload-to-s3#downloading-files)
* [Filepicker widget](/reference/widgets/filepicker)
