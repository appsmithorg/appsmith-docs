---
sidebar_position: 2
description: Connect Appsmith to an S3 bucket and create queries.
---

# S3

This page provides information for connecting your application to your Amazon S3 bucket and using queries to manage its content.

This datasource can also be used to connect to any S3-compatible object storage provider such as Upcloud, Digital Ocean Spaces, Wasabi, DreamObjects, and MinIO.

## Connect S3

:::caution
If you are a cloud user, you must whitelist the IP address of the Appsmith deployment `18.223.74.85` and `3.131.104.27` on your S3 instance before connecting to the bucket. For more information about whitelisting on Amazon, see [Managing access based on specific IP addresses](https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html#example-bucket-policies-IP).
:::

### Connection parameters

The following section is a reference guide that provides a complete description of all the parameters to connect to an S3 bucket.

<ZoomImage
  src="/img/s3-datasource-config.png" 
  alt="Configure an S3 datasource."
  caption="Configure an S3 datasource"
/>

#### S3 service provider

<dd>Configures the datasource to connect to the specified S3 provider.</dd><br/>
<dd>
    <i>Options:</i>
  <ul>
    <li>Amazon S3</li>
    <li>Upcloud</li>
    <li>Digital Ocean spaces</li>
    <li>Wasabi</li>
    <li>DreamObjects</li>
    <li>MinIO</li>
    <li>Other</li>
  </ul>
</dd>

#### Access key

<dd>The key used to grant programmatic access to your resource.</dd>

#### Secret key

<dd>The secret key used to identify and authenticate your queries.</dd>

#### Endpoint URL

<dd>The network location of your S3 resource. This could be a domain or IP address. This field is required when <b>S3 service provider</b> is not Amazon S3. For a guide about connecting to a local resource, see <a href="/connect-data/how-to-guides/how-to-work-with-local-apis-on-appsmith"><b>Connect Local Database</b></a>.</dd>

#### Region

<dd>

Identifies which regional data center to connect to. This field appears when <b>S3 service provider</b> is MinIO or Other.

</dd>

:::note
If the configuration is correct but the credentials do not have the required permission, the test operation fails.
:::



## Create queries

The following section is a reference guide that provides a complete description of all the read and write operation commands with their parameters to create S3 queries.

<ZoomImage
  src="/img/s3-query-config.png" 
  alt="Configure a List Files query."
  caption="Configure a List Files query"
/>

### List files in bucket

This command returns an array of objects representing items that are contained within the bucket, each including at least a `fileName` property. The following section lists all the fields available for the **List files in a bucket** command.


#### Bucket name

<dd>

The name of the S3 bucket to query.

</dd>

#### Prefix

<dd>

The directory path of the files you'd like to query.

For example, in `sample/path/example.png`, the **Prefix** is `sample/path`. Using the prefix `sample/path` with no filtering returns all files in the `sample/path` directory.

</dd>

#### Where

<dd>

These fields are used to create logic expressions that filter query results based on column values. Available comparison operators are `==`, `!=`, `in`, and `not in`.

</dd>

#### Generate signed URL

<dd>

Requests an authenticated, user-accessible URL for each file in the response. Users may follow the link in their browser to see the content of the file. The URL expires after the amount of time specified in **Expiry duration of signed URL**.

</dd>

#### Expiry duration of signed URL

<dd>

The length of time in minutes that the returned Signed URL is valid. Accepts number values up to `10080` minutes (7 days).

</dd>

#### Generate unsigned URL

<dd>

Requests the plain URL for each file in the query response. This URL does not expire, but it can't be used to access the resource directly, only via API.

</dd>

#### Sort by

<dd>

Orders the query results in ascending or descending order based on a given column's value.

</dd>

#### Pagination limit

<dd>

Limits the number of results that can be returned in a single response. Expects an integer.

</dd>

#### Pagination offset

<dd>

Skips a given number of files before returning the further results. Expects an integer.

</dd>


### Create a new file

This command creates a new object in the S3 bucket. If a file by the same name or path already exists within the bucket, the old file is overwritten by the new one. The following section lists all the fields available for the **Create a new file** command.


#### Bucket name

<dd>

The name of the S3 bucket to query.

</dd>

#### File path

<dd>

The name under which to save the file. Be sure to include directories as prefixes to the filename if necessary.

</dd>

#### File data type

<dd>Sets the data format to use when sending the file content.</dd><br />
<dd>
    <i>Options:</i>
  <ul>
    <li><b>Base64:</b> Sends data from the <b>Content</b> field encoded in Base64 format.</li>
    <li><b>Text:</b> Sends data from the <b>Content</b> field as plain text.</li>
  </ul>
</dd> 

#### Expiry duration of signed URL

<dd>

The length of time in minutes that the returned Signed URL is valid. Accepts number values up to `10080` minutes (7 days).

</dd>

#### Content

<dd>

The file data to be sent to the bucket. Expects a file object. You can use widgets such as a [Filepicker](/reference/widgets/filepicker) or a [Camera](/reference/widgets/camera) to upload files to S3. For guides on this subject, see [Upload or Download Files to and from S3](/connect-data/how-to-guides/how-to-upload-to-s3) or [Upload Images to and from S3](/connect-data/how-to-guides/how-to-use-the-camera-image-widget-to-upload-download-images).

</dd>


### Create multiple new files

This command creates a batch of new objects in the S3 bucket. If a file by the same name/path already exists within the bucket, the old file is overwritten by the new one. The following section lists all the fields available for the **Create multiple new files** command.


#### Bucket name

<dd>

The name of the S3 bucket to query.

</dd>

#### Common file path

<dd>

The prefix that is prepended to each of the new objects' file path as directories.

</dd>

#### File data type

<dd>Sets the data format to use when sending the file content.</dd><br />
<dd>
    <i>Options:</i>
  <ul>
    <li><b>Base64:</b> Sends data from the <b>Content</b> field encoded in Base64 format.</li>
    <li><b>Text:</b> Sends data from the <b>Content</b> field as plain text.</li>
  </ul>
</dd> 

#### Expiry duration of signed URL

<dd>

The length of time in minutes that the returned Signed URL is valid. Accepts number values up to `10080` minutes (7 days).

</dd>

#### Content

<dd>

The file data to be sent to the bucket. Expects an array of file objects. You can use widgets such as a [Filepicker](/reference/widgets/filepicker) to upload files to S3. For a guide on this subject, see [Upload Files to S3](/connect-data/how-to-guides/how-to-upload-to-s3) and [Download Files](/connect-data/how-to-guides/how-to-download-files-using-api).

</dd>


### Read file

This command returns the data from a given file in your S3 bucket. By default, the raw content of the file is returned on the `fileData` property of the response. The following section lists all the fields available for the **Read file** command.



#### Bucket name

<dd>

The name of the S3 bucket to query.

</dd>

#### File path

<dd>

The path to the file in your S3 bucket.

</dd>

#### Base64 Encode File

<dd>Sets whether Appsmith encodes the incoming file's content into Base64.</dd><br />
<dd>
    <i>Options:</i>
  <ul>
    <li><b>Yes:</b> Incoming file data is encoded into Base64 format before it is returned.</li>
    <li><b>No:</b> Incoming file data is returned as sent with no additional encoding.</li>
  </ul>
</dd>


:::tip
If your `fileData` content is in Base64 format and needs to be decoded, use the [JavaScript `atob()` method](https://developer.mozilla.org/en-US/docs/Web/API/atob).
:::

### Delete file

This command deletes a given file from your S3 bucket. The following section lists all the fields available for the **Delete file** command.


#### Bucket name

<dd>

The name of the S3 bucket to query.

</dd>

#### File path

<dd>

The path to the file in your S3 bucket.

</dd>
 

### Delete multiple files

This command deletes a batch of files from your S3 bucket. The following section lists all the fields available for the **Delete multiple files** command.


#### Bucket name

<dd>

The name of the S3 bucket to query.

</dd>

#### List of Files

<dd>

Expects a JSON array of file paths to be deleted from the S3 bucket.

</dd>
 

## Troubleshooting

If you are experiencing difficulties, you can refer to the [Datasource troubleshooting guide](/help-and-support/troubleshooting-guide/action-errors/datasource-errors) or contact the support team using the chat widget at the bottom right of this page.

## See also
- [Upload Files to S3](/connect-data/how-to-guides/how-to-upload-to-s3).