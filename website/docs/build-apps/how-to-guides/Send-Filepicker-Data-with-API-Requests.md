# Send Filepicker Data with API Requests

To upload a file via API, follow these steps:

* Click the "+" icon next to Queries/JS and create a new blank API.
* As an example, lets consider using the [Cloudinary API](https://cloudinary.com/documentation/image_upload_api_reference): `https://api.cloudinary.com/v1_1/{cloud_name}/image/upload` where `{cloud_name}` represents your Cloudinary username. You can retrieve your `cloud_name` and `upload_preset` from the Cloudinary dashboard.
* Add the Cloudinary API URL and set the header in the API Datasource configuration.
* Configure the request body in a multipart structure, including the image file data and any additional metadata.



<figure>
  <img src="/img/api-filepicker.png" style= {{width:"700px", height:"auto"}} alt="Admin Settings option is available in the left sidebar"/>
  <figcaption align = "center"><i></i></figcaption>
</figure>

Be sure to select `File` in the datatype dropdown. If you would like to submit multiple files in the same request key, you can use `{{ FilePicker1.files }}` to include the entire contents of the Filepicker widget.

* Now, update the `onFilesSelected` property to RUN the API.

:::tip
If you intend to upload files of significant size, adjust the timeout settings in the API configuration.
:::

To learn more,  see [how to use the Filepicker widget](https://www.appsmith.com/blog/upload-and-manage-files-on-cloudinary-with-the-filepicker-widget) to upload or manage files on Cloudinary.


