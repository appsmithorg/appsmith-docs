# Upload Files to S3

This page shows you how to use the Filepicker widget to upload file data to S3.


  <VideoEmbed host="youtube" videoId="pmEmQcd9_KA" /> 

## Prerequisites

* An [AWS S3 bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-bucket.html).
* App connected to [S3](/connect-data/reference/querying-amazon-s3) Datasource.
* A [Filepicker](/reference/widgets/filepicker) widget to upload files.

## Configure query

Configure the S3 query to upload file data, using the following parameters:

 <ZoomImage
    src="/img/s3-file-upload-2.png" 
    alt="Configure S3 query"
    caption="Configure S3 query"
  /> 

<dd>

1. In the **Commands** dropdown, select the appropriate command:
    * For single-file uploads, select **Create a new file**.
    * For multi-file uploads, select **Create multiple new files**.

2. Add the S3 bucket name to the **Bucket Name** field.

3. Specify the file path in the **File Path** field. For instance, `images/any` or `users/files`. You can also use `/{{FilePicker1.files[0].name}}` to dynamically set the filename. It automatically creates a new folder if the specified folder does not exist.

 4. For multi-file uploads, set the common path in the **Common file path** field, such as `gallery/images`.

5. Select base64 from **File data type** dropdown.

6. Define the expiry duration for the signed URL in the **Expiry Duration of Signed URL (Minutes)** field. The maximum allowed expiration time is one week from the time of creation.

7. In the **Content** field, add all the necessary details for uploading to S3, including the information related to the file you want to upload, which should be selected from the Filepicker widget:

<dd>

```js
// Single-file upload using the "Create a new file" command
{{upload_FilePicker.files[0]}}

// Multi-file upload when using the "Create multiple new files" command
{{upload_FilePicker.files}}

```

Similarly, if you want to upload an image using the Camera widget, set the **OnImageCapture** event of the Camera widget to trigger the S3 query and set **Content** field to:

```js
{
   "data": "{{userCamera.imageDataURL}}"
}
```

</dd>

</dd>

## Configure Filepicker widget

Follow these steps to configure the Filepicker widget to upload files:

* Configure the [**Allowed file types**](/reference/widgets/filepicker#allowed-file-typesarraystring) property of the Filepicker widget to allow users to upload files of specific formats.

* Select Base64 from the [**Data Format**](/reference/widgets/filepicker#data-format-string) property.

* Set the Filepicker widget's [**onFilesSelected**](/reference/widgets/filepicker#onfilesselected) event to execute the S3 query.

After completing these steps, select the file(s) and click the **Upload File(s)** button to send them to the Amazon S3.






