# Send Filepicker Data with API Requests





## Prerequisites

* A [Filepicker](/reference/widgets/filepicker) widget to upload files.
* An [API](/connect-data/reference/rest-api), for this guide, lets use the [Cloudinary API](https://cloudinary.com/documentation/image_upload_api_reference) as an example.




## Configure query

Follow these steps to configure the Cloudinary API for file uploads via the API:

<figure>
  <img src="/img/api-cloud-2.png" style= {{width:"700px", height:"auto"}} alt="Admin Settings option is available in the left sidebar"/>
  <figcaption align = "center"><i></i></figcaption>
</figure>


1. In the API configuration, select the PUT request method, and in the URL field, add the following:

<dd>

```API
https://api.cloudinary.com/v1_1/{cloud_name}/image/upload
```

In this configuration:

`{cloud_name}`, corresponds to the Cloudinary product environment identifier. You can locate this information in the [Cloudinary dashboard](https://console.cloudinary.com/console).

</dd>

2. In the request **Body**, select **MULTIPART_FORM_DATA** and configure it with the following parameters:

<dd>

|      Key      	| Type 	|           Value          	| D
|:-------------:	|:----:	|:------------------------:	|
| file          	| File 	| `{{FilePicker1.files[0]}}` 	|
| upload_preset 	| Text 	| `<your_upload_preset_id>`                   	|

In this configuration:

* `File`, corresponds to the file you want to upload, which should be selected from the FilePicker widget.
* The `upload_preset` is a configuration setting that defines upload parameters. You can find and configure it in the **Upload** page of the [Console Settings](https://console.cloudinary.com/settings/upload).
  
  For `upload_presets`, make sure to change it from **Signed Upload** to **Unsigned Upload** in Cloudinary settings: **Settings** > **Upload** > **Presets**, then click **Edit** and select **Unsigned Upload**.




<figure>
  <img src="/img/presets-api9.png" style= {{width:"700px", height:"auto"}} alt="Admin Settings option is available in the left sidebar"/>
  <figcaption align = "center"><i></i></figcaption>
</figure>

</dd>






## Configure Filepicker widget

Follow these steps to configure the Filepicker widget to upload data:

Be sure to select `File` in the datatype dropdown. If you would like to submit multiple files in the same request key, you can use `{{ FilePicker1.files }}` to include the entire contents of the Filepicker widget.

* Now, update the `onFilesSelected` property to RUN the API.

:::tip
If you intend to upload files of significant size, adjust the timeout settings in the API configuration.
:::

To learn more,  see [how to use the Filepicker widget](https://www.appsmith.com/blog/upload-and-manage-files-on-cloudinary-with-the-filepicker-widget) to upload or manage files on Cloudinary.


