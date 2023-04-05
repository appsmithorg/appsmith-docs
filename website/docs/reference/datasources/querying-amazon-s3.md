---
sidebar_position: 2
---

# Amazon / Generic S3

:::note
The following document assumes that you understand the [basics of connecting to databases on Appsmith](/core-concepts/connecting-to-data-sources/connecting-to-databases.md). If not, please go over them before reading further.
:::

The Appsmith S3 Datasource can connect to Amazon S3, Upcloud, Digital Ocean Spaces, Wasabi, DreamObjects, MinIO, and any other S3 provider. Below, you can see examples of connecting to your S3 provider and issuing [List](querying-amazon-s3.md#list-files), [Create](querying-amazon-s3.md#create-file), [Read](querying-amazon-s3.md#read-file), and [Delete](querying-amazon-s3.md#delete-file) actions.

<VideoEmbed host="youtube" videoId="pmEmQcd9_KA" title="" caption=""/>

For the examples below, you connect to an **Amazon S3** provider.


## Connection Settings

The S3 Datasource requires the following information to establish a connection:

1. Amazon Access Key ID
2. Amazon Secret Key

For Amazon S3, you can find your Access Key and Secret Key using the following guide: [Generate AWS access key & secret](https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys)

![Provide the name of your S3 provider, your Access Key, Secret Key, and then click "Save"](</img/as_s3_1_(1).png>).

## Signed and Unsigned URLs

A **signed URL** allows the user to follow that link directly and immediately view the related resource. If you only have an **unsigned URL,** then that resource cannot be accessed directly; instead, you need to use the Amazon API to query the resource along with appropriate authentication.

Signed URLs are only valid for a certain amount of time: for Amazon S3, you can specify a length of time of up to 7 days (10,080 minutes). To configure this in the Appsmith platform, enter the desired length of time (in minutes) into the `Expiry Duration of Signed URL` field.

:::info
In any of the S3 actions below that return file information, you can choose to generate a signed URL for each returned file by selecting "Yes" in the `Generate Signed URL` dropdown field in your query's configuration.
:::

If you choose to generate a signed URL, the query response includes two additional fields:

* `signedUrl`: The signed URL for the file.
* `urlExpiryDate`: The timestamp at which the signed URL expires.

With the `Generate Un-signed URL` dropdown option, you may choose to request a regular URL that links to the resource. In that case, you would receive one additional field `url` which does not expire; however, as mentioned, this URL cannot be used to access the resource directly, and instead must be used within a valid API request.

## List Files

This action lists/returns an array of objects which are contained within that bucket, each including at least a `fileName` property.

```json
[
  {
    fileName: "myFile.pdf",
    ...
  },
  ...
]
```

Fill in the **Bucket Name** input with the name of the S3 bucket you'd like to query.

![Use the Prefix field to only query files whose names begin with the specified prefix.](</img/as_s3_list_(1).png>)

You can use the **Prefix** box to narrow your query to return only files that begin with your specified prefix. This is used to access S3 directories; files are stored in a flat structure instead of nested folders, but are grouped by adding common prefixes to the related items' filenames. This emulates the traditional directory tree structure. Take a look at the [Amazon S3 documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-folders.html) for more detail on how files are organized.

```
// directory tree structure
root
|__folderOne
| |__itemOne.png
|
|__folderTwo
  |__folderThree
    |__ itemTwo.pdf
    
// S3 structure
bucket
|__ folderOne/itemOne.png
|__ folderTwo/folderThree/itemTwo.pdf
```

## Create File

This action creates a new file in the specified bucket, named according to the `File Path` field. Remember to include directories in the filename, e.g. `folderTwo/folderThree/itemTwo.png`.

The action returns the following two fields:

* `signedUrl`: A signed URL for the file.
* `urlExpiryDate`: A timestamp at which the signed URL expires.

You can set an expiry duration for the generated signed URLs by editing the `Expiry Duration of Signed URL` field.

![Enter the file path, which is a string representing the complete path relative to the bucket.](/img/as_s3_create.png)

:::note
If a file by the same name/path already exists within the bucket, the old file is _overwritten_ by the new file.

Enable the **"Request confirmation before running query"** setting to help avoid accidentally overwriting files.
:::

![Enable this setting to prevent accidental destructive actions](/img/2)

There are two ways to send content to the S3 bucket:

1. A file can be selected and uploaded with the [Filepicker Widget](./../widgets/filepicker.md). To reference this file in your query (assuming that your Filepicker is named "FilePicker1"), use `{{Filepicker1.files[0]}}` in the `Content` field of your query.
   * Be sure that the `File Data Type` field is set appropriately for the data you are uploading. For example, if your Filepicker's `Data Format` is set to `Base64`, your query should be set to `Base64` also.
2. Alternatively, you can manually add data into the `Content` field by writing an object with a `text` and `data` property like below:

```
{
  "type": "text/plain",
  "data": "This is my text content!"
}
```

In this second case, you'll want to ensure that your `File Data Type` is set to `Text`.

### Creating Multiple Files

There are a couple of extra considerations to make when using the **Create multiple new files** operation:

1. When using the Filepicker, be sure to set the widget's **Max No. Files** property to a value greater than the default "1"; otherwise, the user is not able to upload multiple files for the query.
2. Now when defining the query's Content, you'll pass in the entire `{{Filepicker1.files}}` array, instead of `{{FilePicker1.files[0]}}` as before.
3. You can give all the files a common path/prefix in your bucket by setting the **Common File Path** field in your query. This can be used to achieve a result such as:

```
// a single Create Multiple query with Common Path set to "commonPath/"
commonPath/fileOne.png
commonPath/fileTwo.png
commonPath/fileThree.jpeg
```

**Remember**: the file paths are actually just file names that follow a pattern which looks like directories; this means that, to achieve a result like `commonPath/fileOne.png`, you need to explicitly include the "/" character in the **Common File Path** field (for example, use `commonPath/`, not just `commonPath`).

## Read File

This action fetches a file from the bucket (specified in the `Bucket Name` field) with a `filename/path` matching the contents of the `File Path` field. By default, the raw content of the file is returned on the `fileData` property of the response. File content can also be Base64 encoded by selecting `Yes` in the `Base64 Encode File - Yes/No` dropdown field.

If your `fileData` content is in Base64 format and needs to be decoded, use the [JavaScript `atob()` method](https://developer.mozilla.org/en-US/docs/Web/API/atob).

:::tip
When reading multimedia files or formatted text, please encode the file data using the Base64 Encode dropdown field. Once the data has been received, it can be decoded with `atob()`.
:::

![Access the contents of your file with queryName.data.fileData](/img/as_s3_read.png)

## Delete File

This action deletes a file with the name/path matching the contents of the `File Path` field. Files deleted from the bucket cannot be restored; please ensure you have backed up your files.

This action returns a message on the `status` property describing the outcome of your query.

:::tip
Enable the **"Request confirmation before running query"** setting in your Delete Query to help avoid accidentally deleting files.
:::

![Delete a file by supplying the Bucket name, and the filename to delete.](/img/as_s3_delete.png)

### Deleting Multiple Files

The only difference from the single Delete operation is that you'll now be providing an array of file paths to delete in the **List of Files** field. For example:

```
{{
  [
    "folderOne/itemOne.png",
    "folderTwo/folderThree/itemTwo.pdf"
  ]
}}
```

## Using queries in applications

Once you have successfully run a Query, you can use it in your application to

* [Display Data](./../../core-concepts/data-access-and-binding/displaying-data-read/)
* [Capture Data](./../../core-concepts/data-access-and-binding/capturing-data-write/)
* [Upload files](./../../learning-and-resources/how-to-guides/how-to-upload-to-s3.md)
* [Download files](./../../learning-and-resources/how-to-guides/how-to-upload-to-s3.md#downloading-files)
