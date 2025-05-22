# Google Drive 

This page provides information on how to connect to Google Drive. It enables users to perform actions such as managing files and folders, exporting documents, and performing custom actions.

## Connect Google Drive

To connect to Google Drive, users must authenticate through OAuth 2.0, obtaining access and refresh tokens to interact with the Google Drive API securely. Follow the Google Drive API documentation for setting up the authentication process and acquiring the necessary permissions.

## Query Google Drive

The following section provides a **reference guide** describing available commands and their parameters.



### Drive Get File By Id

Retrieve a file's metadata and optionally its contents using the file's unique identifier.

#### File Id `string`

<dd>

This property represents the unique identifier of the file you wish to retrieve from Google Drive. It is a required field without which the command cannot pull any file data. File IDs are strings typically resembling `"1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms"`. You can locate a File ID in the file's URL in Google Drive.

*Example*:

```
1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
```

</dd>

#### Additional Fields `JSON object`

<dd>

Specify additional metadata fields to retrieve in a JSON format. If omitted, only default metadata fields will be returned. Use this property to enrich the returned data based on your workflow needs.

*Example*:

```
{"fields": "id, name, mimeType"}
```
</dd>

#### Include File Contents `boolean`

<dd>

Indicates whether to include the actual file contents in the response. Accepts a boolean value—`true` to include contents and `false` otherwise. Defaults to `false` if not specified.


</dd>



### Drive Save File

Upload and save a file to Google Drive with options to specify its location and sharing settings.

#### File `binary`

<dd>

This is the actual file data you want to upload. The command requires this property, accepting files in binary format.

*Example*:




</dd>

#### Parent Id `string`

<dd>

Specify the ID of the parent folder where the file should be saved. Defaults to the user's root folder if this field is left blank. Folder IDs are strings similar to file IDs.


</dd>

#### Shared Drive `boolean`

<dd>

Indicate whether the target location is a shared drive. Accepts a boolean value; if `true`, the upload is directed to a shared drive. Defaults to `false` if unspecified.


</dd>

#### Filename `string`

<dd>

Specify a name for the uploaded file. If left blank, it defaults to the original file name. Use this property to rename the file upon saving.

*Example*:

```
report_2023.xlsx
```
</dd>

#### Additional Fields `JSON object`

<dd>

Include any additional fields to update in the file metadata using a JSON object. This is optional and caters to specific operational needs like setting custom properties.

*Example*:

```
{"description": "Quarterly financial report"}
```
</dd>



### Drive Export Doc

Export a Google Document to a specified MIME type format.

#### File Id `string`

<dd>

The unique File ID of the Google Doc you want to export. This field is necessary for exporting and is located in the document's URL.

*Example*:

```
1s3f4Lgpbhf6NzlMquqc-8dvK7WMbH
```

</dd>

#### Mime Type `string`

<dd>

A string representing the desired export format. Common values include `"application/pdf"` for PDFs or `"application/vnd.openxmlformats-officedocument.wordprocessingml.document"` for Word documents.


</dd>



### Drive Create Folder

Create a new folder in a specified parent directory within Google Drive.

#### Folder Name `string`

<dd>

Provide a name for the new folder. This field is mandatory and must be a string value.


</dd>

#### Parent Id `string`

<dd>

The ID of the parent folder where the new folder will be created. If left unspecified, the folder is created in the user's root directory.

*Example*:

```
1Ks8yUhqKNZ7z8g7GNqYt1_e9RUwhb6cQ
```

</dd>



### Drive Delete Folder

Remove a folder from Google Drive by its identifier.

#### Folder Id `string`

<dd>

Represents the unique ID of the folder to be deleted. This identifier is crucial for executing the delete operation successfully.


</dd>



### Drive Get Folder By Id

Retrieve metadata for a specific folder using its identifier.

#### Folder Id `string`

<dd>

The folder's unique identifier, which is necessary for fetching its metadata. It follows a specific format available in the folder's URL.


</dd>



### Drive Move Folder

Change the parent location of a folder within Google Drive.

#### Folder Id `string`

<dd>

The ID of the folder you intend to move. This identifier is required to accurately perform the move operation.


</dd>

#### Parent Id `string`

<dd>

Designate the target parent ID to which the folder will be moved. Without this, the command defaults to attempting to move it to the root directory.


</dd>



### Drive List Files

Retrieve a list of files from a specific directory with optional inclusion of folders.

#### Include Folders `boolean`

<dd>

Specify if folders should be included in the result. Accepts `true` or `false`. Defaults to `false`.


</dd>

#### Parent Id `string`

<dd>

Provide the parent folder ID to list files from that directory. Defaults to listing files from the user's root folder if left blank.



</dd>

#### Page Size `integer`

<dd>

The maximum number of files to return per page, supporting values between 1 and 1000. Defaults to 100 if not specified.


</dd>

#### Include Shared Items `boolean`

<dd>

Indicate whether to include files from shared drives in the result. By default, this is set to `false`, excluding shared files.


</dd>

#### Additional Fields `JSON object`

<dd>

Specify any additional metadata fields to include in the response via a JSON structure. Omitting this will return standard metadata fields.

*Example*:

```
{"fields": "id, name, owners"}
```
</dd>



### Drive Search Folders

Search for folders within a specified parent or shared drive using filters.

#### Parent Id `string`

<dd>

The parent folder ID within which to conduct the folder search. Critical for scoping the search to specific directories.


</dd>

#### Drive Id `string`

<dd>

Specify a Drive ID to search inside shared drives, especially useful for shared environments. Represents the unique identifier of the shared drive.

*Example*:

```
0AFEN07KuPJfUk9PVA
```
</dd>

#### Page Size `integer`

<dd>

Defines how many folders to return per page, allowing values from 1 through 1000. Defaults to 100 when omitted.



</dd>

#### Filter Formula `string`

<dd>

Set a filter formula to refine search results, expressed in logical syntax like `var1 = "val1"`. This field narrows results based on specified conditions.

*Example*:

```
var1 = "Project", var2 < "2023-12-31"
```

</dd>



