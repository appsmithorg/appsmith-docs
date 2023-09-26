import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Upload Files Using API 

This page shows you how to use the Filepicker widget to upload file data into API requests.


## Prerequisites

* A [Filepicker](/reference/widgets/filepicker) widget to upload files.
* Access to a cloud platform with an [API](/connect-data/reference/rest-api) setup. For this guide, lets use the [Cloudinary API](https://cloudinary.com/) as an example.


## Configure query

Follow these steps to configure the API in the Appsmith app:


1. In the API configuration, select the request method, typically either **POST** or **PUT**, depending on specific API requirements.

2. In the URL field, add your API URL. Depending on the API you are working with, you may also need to include additional path or query parameters.

<dd>

*Example*: For the Cloudinary API, select **POST** request method, and in the URL field, add the following:

```API
https://api.cloudinary.com/v1_1/{cloud_name}/image/upload
```

In this configuration:

`{cloud_name}`, corresponds to the Cloudinary product environment identifier. You can locate this information in the [Cloudinary dashboard](https://console.cloudinary.com/console).

</dd>


3. In the request **Body**, select the method and format that align with the API's requirements. 

<dd>

When uploading files using an API, the choice of data format or encoding method depends on the requirements of the API, the programming language or framework you're using, and the specific use case. 

You can select any of the following methods based on your use case:



<Tabs>
  <TabItem value="json" label="JSON">

   JSON is typically used when uploading files along with structured data, such as metadata or parameters. It is suitable for both single and multiple file uploads.



<dd>

*Example*: To upload a file using Cloudinary API, select the JSON method and add the following code:

```json
{
  "file": "{{ FilePicker1.files[0].data }}",
  "upload_preset": "okmn123"
}
//here [0] represents index of the file.
```

<figure>
  <img src="/img/json-rest-api.png" style= {{width:"550px", height:"auto"}} alt="Admin Settings option is available in the left sidebar"/>
  <figcaption align = "center"><i></i></figcaption>
</figure>

In this example:


* `file`, corresponds to the file you want to upload, which should be selected from the FilePicker widget. If you would like to submit multiple files in the same request key, you can use `{{ FilePicker1.files }}` to include the entire contents of the Filepicker widget.

* The `upload_preset` is a configuration setting that defines upload parameters. You can find and configure it in the **Upload** page of the [Console Settings](https://console.cloudinary.com/settings/upload).
  


</dd>
   
  </TabItem>
    <TabItem value="FORM_URLENCODED" label="FORM_URLENCODED">

  FORM_URLENCODED is a simple data format for API requests. It is suitable for single file uploads along with some form data. Each key-value pair represents a specific piece of information to be submitted to the API.

<dd>

*Example*: To upload a file using Cloudinary API, select the FORM_URLENCODED method and configure it with the following parameters:



|      Key      	 	|           Value          	| 
|:-------------:		|:------------------------:	|
| file          		| `{{FilePicker1.files[0].data}}` 	|
| upload_preset 	 	| `<your_upload_preset_name>`                   	|

   
  <figure>
  <img src="/img/rest-api-encoded.png" style= {{width:"550px", height:"auto"}} alt="Admin Settings option is available in the left sidebar"/>
  <figcaption align = "center"><i></i></figcaption>
</figure>

In this example:


* `file`, corresponds to the file you want to upload, which in this case is represented by `FilePicker1.files[0].data`, where `0` is the index of the selected file, and `data` contains the file data.

* The `upload_preset` is a configuration setting that defines upload parameters. You can find and configure it in the **Upload** page of the [Console Settings](https://console.cloudinary.com/settings/upload).
  


</dd>


  </TabItem>
  <TabItem value="MULTIPART_FORM_DATA" label="MULTIPART_FORM_DATA">

Multi-part form data is a flexible format for API requests. It is used when you need to upload multiple files or a combination of files and other form data.  

<dd>

*Example*: To upload a file using Cloudinary API, select the MULTIPART_FORM_DATA method and configure it with the following parameters:
  

|      Key      	| Type 	|           Value          	| D
|:-------------:	|:----:	|:------------------------:	|
| file          	| File 	| `{{FilePicker1.files[0]}}` 	|
| upload_preset 	| Text 	| `<your_upload_preset_name>`                   	|


<figure>
  <img src="/img/api-cloud-2.png" style= {{width:"700px", height:"auto"}} alt="Admin Settings option is available in the left sidebar"/>
  <figcaption align = "center"><i></i></figcaption>
</figure>

In this example:

* `file`, corresponds to the file you want to upload, which should be selected from the FilePicker widget. If you would like to submit multiple files in the same request key, you can use `{{ FilePicker1.files }}` to include the entire contents of the Filepicker widget.

* The `upload_preset` is a configuration setting that defines upload parameters. You can find and configure it in the **Upload** page of the [Console Settings](https://console.cloudinary.com/settings/upload). For `upload_preset`, make sure to change it from **Signed Upload** to **Unsigned Upload** in Cloudinary settings: **Settings** > **Upload** > **Presets**, then click **Edit** and select **Unsigned Upload**.


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

After completing these steps, you'll be able to upload single or multiple files to Cloudinary. You can view the uploaded images in the [Media explorer](https://console.cloudinary.com/console/media-explorer) page. 

<figure>
  <img src="/img/cloudinary-upload.gif" style= {{width:"700px", height:"auto"}} alt="Admin Settings option is available in the left sidebar"/>
  <figcaption align = "center"><i></i></figcaption>
</figure>








