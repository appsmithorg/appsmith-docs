import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Upload Files Using API 

This page shows you how to use the Filepicker widget to upload file data using API.


## Prerequisites

* A [Filepicker](/reference/widgets/filepicker) widget to upload files.
* Access to a cloud platform with an [API](/connect-data/reference/rest-api) endpoints.


## Configure query

Follow these steps to configure the API in the Appsmith app:


1. In the API configuration, specify the request method *(Generally POST or PUT)* and provide your API URL, including any necessary path or query parameters.


2. In the request **Body**, select the method and format that align with the API's requirements. 

<dd>

When uploading files using an API, the choice of data format or encoding method depends on the requirements of the API, the programming language or framework you're using, and the specific use case. 

You can select any of the following methods based on your use case:



<Tabs>
  <TabItem value="json" label="JSON">

   JSON is typically used when uploading files along with structured data, such as metadata or parameters. It is suitable for both single and multiple file uploads.


<figure>
  <img src="/img/filepicker-json.png" style= {{width:"700px", height:"auto"}} alt="Admin Settings option is available in the left sidebar"/>
  <figcaption align = "center"><i></i></figcaption>
</figure>

<dd>

*Example*: 
```json
{
  "file": "{{ FilePicker1.files[0].data }}", // Accessing the file data
  "key1": "value1",
  "key2": "value2"
}
// [0] represents index of the file.
```



In this example:


* `file`, corresponds to the file you want to upload, which should be selected from the FilePicker widget. 
   * If you want to upload just the file data, use: `{{ FilePicker1.files[0].data }}`.
   * If you want to upload all the details of a file, including format, type, name, and data, use: `{{ FilePicker1.files[0] }}`.
   * If you want to upload multiple files, use `{{ FilePicker1.files }}`.

* The `key1` and `key2` parameters can be customized to match the specific data you want to include in your API request. For instance, you can add filename, filepath, access key, or any other relevant parameters.
  


</dd>
   
  </TabItem>
    <TabItem value="FORM_URLENCODED" label="FORM_URLENCODED">

  FORM_URLENCODED is a simple data format for API requests. It is suitable for single file uploads along with some form data. Each key-value pair represents a specific piece of information to be submitted to the API.

<dd>

   
  <figure>
  <img src="/img/filepicker-2-2.png" style= {{width:"700px", height:"auto"}} alt="Admin Settings option is available in the left sidebar"/>
  <figcaption align = "center"><i></i></figcaption>
</figure>

*Example*: 



|      Key      	 	|           Value          	| 
|:-------------:		|:------------------------:	|
| file          		| `{{FilePicker1.files[0].data}}` 	|
| key_filename          		| `{{FilePicker1.files[0].name}}` 	|
| key1 	 	| `value1`                   	|



In this example:


* `file`, corresponds to the file you want to upload, which in this case is represented by `FilePicker1.files[0].data`, where `0` is the index of the selected file, and `data` contains the file data.

* The `key1` parameter can be customized to match the specific data you want to include in your API request. For instance, you can add filename, filepath, access key, or any other relevant parameter.
  


</dd>


  </TabItem>
  <TabItem value="MULTIPART_FORM_DATA" label="MULTIPART_FORM_DATA">

Multi-part form data is a flexible format for API requests. It is used when you need to upload multiple files or a combination of files and other form data.  


<figure>
  <img src="/img/filepicker-m-2.png" style= {{width:"700px", height:"auto"}} alt="Admin Settings option is available in the left sidebar"/>
  <figcaption align = "center"><i></i></figcaption>
</figure>


<dd>

*Example*: 

|      Key      	| Type 	|           Value          	| D
|:-------------:	|:----:	|:------------------------:	|
| file          	| File 	| `{{FilePicker1.files[0]}}` 	|
| key_filename     | Text     		| `{{FilePicker1.files[0].name}}` 	|
| key1 	| Text 	| `value1`                   	|

In this example:

* `file`, corresponds to the file you want to upload, which should be selected from the FilePicker widget. 
   * If you want to upload just the file data, use: `{{ FilePicker1.files[0].data }}`.
   * If you want to upload all the details of a single file, including data format, type, name, and data, use: `{{ FilePicker1.files[0] }}`.
   * If you want to upload multiple files, use `{{ FilePicker1.files }}`.

* The `key1` parameter can be customized to match the specific data you want to include in your API request. For instance, you can add filename, filepath, access key, or any other relevant parameter.
  

</dd>


  </TabItem>
  <TabItem value="RAW" label="RAW">
    Raw binary data is best suited for single binary file uploads without additional form data or metadata. It's efficient for handling large files.

```json
   {{ Filepicker1.files[0]?.data }}
```

Use RAW if your endpoint can't accept multipart-encoded data and requires raw body binary instead. Above, the data property of the file is passed to the query instead of the file object itself because the endpoint expects only raw binary data.


:::caution tip
Be sure to turn off **JSON Smart Substitution** for this query in the [query settings](/connect-data/reference/query-settings). This option usually helps cast data into correct JSON, but it is problematic when used with RAW binary.
:::

  </TabItem>
</Tabs>

</dd>


:::tip
If you intend to upload files of significant size, adjust the timeout settings in the API configuration.
:::








## Configure Filepicker widget

Follow these steps to configure the Filepicker widget to upload files:

* Configure the [**Allowed file types**](/reference/widgets/filepicker#allowed-file-typesarraystring) property of the Filepicker widget to allow users to upload files of specific formats.

* Configure the [**Data Format**](/reference/widgets/filepicker#data-format-string) property to align with the data format expected by the API or platform you are using.

* Set the Filepicker widget's [**onFilesSelected**](/reference/widgets/filepicker#onfilesselected) event to run the Cloudinary query.

After completing these steps, select your file(s) and click the **Upload File(s)** button to send them to the server.







