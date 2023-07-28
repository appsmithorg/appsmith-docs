---
sidebar_position: 2
description: Connect Appsmith to an S3 bucket and create queries.
---

# S3

This page provides information for connecting your application to your Amazon S3 bucket and using queries to manage its content.

This datasource can also be used to connect to any S3-compatible object storage provider such as Upcloud, Digital Ocean Spaces, Wasabi, DreamObjects, and MinIO.

## Connect S3

:::caution
You must whitelist the IP address of the Appsmith deployment `18.223.74.85` and `3.131.104.27` on your S3 instance before connecting to the bucket. For more information about whitelisting on Amazon, see [Managing access based on specific IP addresses](https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html#example-bucket-policies-IP).
:::

### Connection parameters

The following section is a reference guide that provides a complete description of all the parameters to connect to an S3 bucket.

<figure>
  <img src="/img/s3-datasource-config.png" style={{width: "100%", height: "auto"}} alt="Configuring an S3 datasource." />
  <figcaption align="center"><i>Configuring an S3 datasource.</i></figcaption>
</figure>

<dl>
  <dt><b>S3 service provider</b></dt>
  <dd>Configures the datasource to connect to the specified S3 provider.</dd><br/>
  <dd><i>Options:</i>
    <ul>
      <li>Amazon S3</li>
      <li>Upcloud</li>
      <li>Digital Ocean spaces</li>
      <li>Wasabi</li>
      <li>DreamObjects</li>
      <li>MinIO</li>
      <li>Other</li>
    </ul>
  </dd><br />

  <dt><b>Access key</b></dt>
  <dd>The key used to grant programmatic access to your resource.</dd><br />

  <dt><b>Secret key</b></dt>
  <dd>The secret key used to identify and authenticate your queries.</dd><br />

  <dt><b>Endpoint URL</b></dt>
  <dd>The network location of your S3 resource. This could be a domain or IP address. This field is required when <b>S3 service provider</b> is not Amazon S3. For a guide about connecting to a local resource, see <a href="/connect-data/how-to-guides/how-to-work-with-local-apis-on-appsmith"><b>Connect Local Database</b></a>.</dd><br />

  <dt><b>Region</b></dt>
  <dd>Identifies which regional data center to connect to. This field appears when <b>S3 service provider</b> is MinIO or Other.</dd>

</dl>

## Create queries

The following section is a reference guide that provides a complete description of all the read and write operation commands with their parameters to create S3 queries.

<figure>
  <img src="/img/s3-query-config.png" style={{width: "100%", height: "auto"}} alt="Configuring a List Files query." />
  <figcaption align="center"><i>Configuring an S3 query.</i></figcaption>
</figure>

### List files in bucket

This command returns an array of objects representing items that are contained within the bucket, each including at least a `fileName` property. The following section lists all the fields available for the **List files in a bucket** command.

<dl>
  <dt><b>Bucket name</b></dt>
  <dd>

The name of the S3 bucket to query.

  </dd>

  <dt><b>Prefix</b></dt>
  <dd>

The directory path of the files you'd like to query.

For example, in `sample/path/example.png`, the **Prefix** is `sample/path`. Using the prefix `sample/path` with no filtering returns all files in the `sample/path` directory.

  </dd>

  <dt><b>Where</b></dt>
  <dd>

These fields are used to create logic expressions that filter query results based on column values. Available comparison operators are `==`, `!=`, `in`, and `not in`.

  </dd>

  <dt><b>Generate signed URL</b></dt>
  <dd>

Requests an authenticated, user-accessible URL for each file in the response. Users may follow the link in their browser to see the content of the file. The URL expires after the amount of time specified in **Expiry duration of signed URL**.

  </dd>

  <dt><b>Expiry duration of signed URL</b></dt>
  <dd>

The length of time in minutes that the returned Signed URL is valid. Accepts number values up to `10080` minutes (7 days).

  </dd>

  <dt><b>Generate unsigned URL</b></dt>
  <dd>

Requests the plain URL for each file in the query response. This URL does not expire, but it can't be used to access the resource directly, only via API.

  </dd>

  <dt><b>Sort by</b></dt>
  <dd>

Orders the query results in ascending or descending order based on a given column's value.

  </dd>

  <dt><b>Pagination limit</b></dt>
  <dd>

Limits the number of results that can be returned in a single response. Expects an integer.

  </dd>

  <dt><b>Pagination offset</b></dt>
  <dd>

Skips a given number of files before returning the further results. Expects an integer.

  </dd>
</dl>


### Create a new file

This command creates a new object in the S3 bucket. If a file by the same name or path already exists within the bucket, the old file is overwritten by the new one. The following section lists all the fields available for the **Create a new file** command.

<dl>
  <dt><b>Bucket name</b></dt>
  <dd>

The name of the S3 bucket to query.

  </dd>

  <dt><b>File path</b></dt>
  <dd>

The name under which to save the file. Be sure to include directories as prefixes to the filename if necessary.

  </dd>

  <dt><b>File data type</b></dt>
  <dd>Sets the data format to use when sending the file content.</dd><br />
  <dd><i>Options:</i>
    <ul>
     <li><b>Base64:</b> Sends data from the <b>Content</b> field encoded in Base64 format.</li>
     <li><b>Text:</b> Sends data from the <b>Content</b> field as plain text.</li>
    </ul>
  </dd> 

  <dt><b>Expiry duration of signed URL</b></dt>
  <dd>

The length of time in minutes that the returned Signed URL is valid. Accepts number values up to `10080` minutes (7 days).

  </dd>

  <dt><b>Content</b></dt>
  <dd>

The file data to be sent to the bucket. Expects a file object. You can use widgets such as a [Filepicker](/reference/widgets/filepicker) or a [Camera](/reference/widgets/camera) to upload files to S3. For guides on this subject, see [Upload or Download Files to and from S3](/connect-data/how-to-guides/how-to-upload-to-s3) or [Upload Images to and from S3](/connect-data/how-to-guides/how-to-use-the-camera-image-widget-to-upload-download-images).

  </dd>
</dl>

### Create multiple new files

This command creates a batch of new objects in the S3 bucket. If a file by the same name/path already exists within the bucket, the old file is overwritten by the new one. The following section lists all the fields available for the **Create multiple new files** command.

<dl>
  <dt><b>Bucket name</b></dt>
  <dd>

The name of the S3 bucket to query.

  </dd>

  <dt><b>Common file path</b></dt>
  <dd>

The prefix that is prepended to each of the new objects' file path as directories.

  </dd>

  <dt><b>File data type</b></dt>
  <dd>Sets the data format to use when sending the file content.</dd><br />
  <dd><i>Options:</i>
    <ul>
     <li><b>Base64:</b> Sends data from the <b>Content</b> field encoded in Base64 format.</li>
     <li><b>Text:</b> Sends data from the <b>Content</b> field as plain text.</li>
    </ul>
  </dd> 

  <dt><b>Expiry duration of signed URL</b></dt>
  <dd>

The length of time in minutes that the returned Signed URL is valid. Accepts number values up to `10080` minutes (7 days).

  </dd>

  <dt><b>Content</b></dt>
  <dd>

The file data to be sent to the bucket. Expects a file object. You can use widgets such as a [Filepicker](/reference/widgets/filepicker) to upload files to S3. For a guide on this subject, see [Upload or Download Files to and from S3](/connect-data/how-to-guides/how-to-upload-to-s3).

  </dd>
</dl>

### Read file

This command returns the data from a given file in your S3 bucket. By default, the raw content of the file is returned on the `fileData` property of the response. The following section lists all the fields available for the **Read file** command.


<dl>
  <dt><b>Bucket name</b></dt>
  <dd>

The name of the S3 bucket to query.

  </dd>

  <dt><b>File path</b></dt>
  <dd>

The path to the file in your S3 bucket.

  </dd>

  <dt><b>Base64 Encode File</b></dt>
  <dd>Sets whether Appsmith encodes the incoming file's content into Base64.</dd><br />
  <dd><i>Options:</i>
    <ul>
     <li><b>Yes:</b> Incoming file data is encoded into Base64 format before it is returned.</li>
     <li><b>No:</b> Incoming file data is returned as sent with no additional encoding.</li>
    </ul>
  </dd>
</dl>

:::tip
If your `fileData` content is in Base64 format and needs to be decoded, use the [JavaScript `atob()` method](https://developer.mozilla.org/en-US/docs/Web/API/atob).
:::

### Delete file

This command deletes a given file from your S3 bucket. The following section lists all the fields available for the **Delete file** command.

<dl>
  <dt><b>Bucket name</b></dt>
  <dd>

The name of the S3 bucket to query.

  </dd>

  <dt><b>File path</b></dt>
  <dd>

The path to the file in your S3 bucket.

  </dd>
</dl> 

### Delete multiple files

This command deletes a batch of files from your S3 bucket. The following section lists all the fields available for the **Delete multiple files** command.

<dl>
  <dt><b>Bucket name</b></dt>
  <dd>

The name of the S3 bucket to query.

  </dd>

  <dt><b>List of Files</b></dt>
  <dd>

Expects a JSON array of filenames to be deleted from the S3 bucket.

  </dd>
</dl> 

