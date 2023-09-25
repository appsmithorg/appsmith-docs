# Send Filepicker Data with API Requests

This page shows you how to use the Filepicker widget to upload file data into API requests.


## Prerequisites

* A [Filepicker](/reference/widgets/filepicker) widget to upload files.
* An [API](/connect-data/reference/rest-api). For this guide, lets use the [Cloudinary API](https://cloudinary.com/) as an example.




## Configure query

Follow these steps to configure the Cloudinary API in the Appsmith app:


<figure>
  <img src="/img/api-cloud-2.png" style= {{width:"700px", height:"auto"}} alt="Admin Settings option is available in the left sidebar"/>
  <figcaption align = "center"><i></i></figcaption>
</figure>


1. In the API configuration, select the **PUT** request method, and in the URL field, add the following:

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
| upload_preset 	| Text 	| `<your_upload_preset_name>`                   	|

In this configuration:

* `File`, corresponds to the file you want to upload, which should be selected from the FilePicker widget. If you would like to submit multiple files in the same request key, you can use `{{ FilePicker1.files }}` to include the entire contents of the Filepicker widget.

* The `upload_preset` is a configuration setting that defines upload parameters. You can find and configure it in the **Upload** page of the [Console Settings](https://console.cloudinary.com/settings/upload).
  
  For `upload_preset`, make sure to change it from **Signed Upload** to **Unsigned Upload** in Cloudinary settings: **Settings** > **Upload** > **Presets**, then click **Edit** and select **Unsigned Upload**.




<figure>
  <img src="/img/presets-api9.png" style= {{width:"700px", height:"auto"}} alt="Admin Settings option is available in the left sidebar"/>
  <figcaption align = "center"><i></i></figcaption>
</figure>

:::tip
If you intend to upload files of significant size, adjust the timeout settings in the API configuration.
:::

</dd>






## Configure Filepicker widget

Follow these steps to configure the Filepicker widget to upload files:

* Configure the [**Allowed file types**](/reference/widgets/filepicker#allowed-file-typesarraystring) property of the Filepicker widget to allow users to upload files of specific formats.

* Set the Filepicker widget's [**onFilesSelected**](/reference/widgets/filepicker#onfilesselected) event to run the Cloudinary query.

After completing these steps, you'll be able to upload single or multiple files to Cloudinary. You can view the uploaded images in the [Media explorer](https://console.cloudinary.com/console/media-explorer) page. 

<figure>
  <img src="/img/cloudinary-upload.gif" style= {{width:"700px", height:"auto"}} alt="Admin Settings option is available in the left sidebar"/>
  <figcaption align = "center"><i></i></figcaption>
</figure>








