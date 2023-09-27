---
sidebar_position: 5
---

# Upload Files to S3 using Filepicker

Files can be uploaded to Amazon S3 using the S3 plugin and FilePicker Widget. This document presumes you have successfully [connected to your S3 instance](/connect-data/reference/querying-amazon-s3)

  <VideoEmbed host="youtube" videoId="pmEmQcd9_KA" /> 

## Prerequisites
* A [Filepicker](/reference/widgets/filepicker) widget to upload files.
* An [AWS S3 bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-bucket.html). You can use an existing bucket if you’d prefer. 
* App connected to [S3 Datasource](/connect-data/reference/querying-amazon-s3)

## Configure query

Follow these steps to configure the S3 query in the Appsmith:

 <figure>
  <img src="/img/s3-filepicler.png" style= {{width:"700px", height:"auto"}} alt="S3 query"/>
  <figcaption align = "center"><i>Configure S3 query</i></figcaption>
</figure>

1. Configure the S3 query to upload data, using the following parameters:

<dd>

* **Commands**: Select either the **Create a new file** command for single-file uploads or the **Create multiple new files** command for multiple-file uploads.

* **Bucket Name:** The object key (or key name) uniquely identifies the object in an Amazon S3 bucket.

* **File Path:** Path of the location you want to store the file. For instance, `images/any` or `users/files`. You can also use `/{{FilePicker1.files[0].name}}` to dynamically set the filename. It automatically creates a new folder if the specified folder does not exist. 

* **Common file path:** This option is applicable for multi-file uploads and allows you to set a common path for storing multiple files in one go. For instance, `gallery/images`.

* **File data type:** Select `base64` when uploading data from the Filepicker widget.

* **Expiry Duration of Signed URL (Minutes):** The timestamp at which the signed URL would expire. The maximum expiration time for a signed URL is one week from the time of creation.

* **Content:**  You can provide all the necessary details for uploading to S3, including the information related to the file you intend to upload, which should be selected from the FilePicker widget:

<dd>

```js
// Single-file upload using the "Create a new file" command
{{FilePicker5.files[0]}}

// Multi-file upload when using the "Create multiple new files" command
{{FilePicker5.files}}

```

</dd>

</dd>

## Configure Filepicker widget

Follow these steps to configure the Filepicker widget to upload files:



