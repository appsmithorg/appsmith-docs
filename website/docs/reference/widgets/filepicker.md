# Filepicker

This document explains how to use a datapicker widget to capture date and time input from users.


##  Upload files

To upload a file or multiple files, you can drag and drop them onto the Filepicker widget or select files from your local machine. Appsmith supports various file types and data formats, including:

* **Binary**: Binary files store data in the form of contiguous bytes, without a defined reading method. To upload a binary file, choose Data Format as Binary and then upload the file.
* **Text**: Text files store data as human-readable characters. 
* **Base64**: Base64 is a binary-to-text encoding scheme that represents binary data in an ASCII string format.
* **Array (CSV)**: CSV files store tabular data as plain text, with each row separated by a line break and each value separated by a comma. 

:::info
* Any file exceeding 5 MB would be saved as a blob URL, and the upper limit for file size is 100 MB.
* When using the data in a query, it is uploaded in the selected format, despite appearing in the blob URL format when you log the data.
:::

To access the uploaded file's data, you can use the following code in a query or JS code. 

```js
{{ FilePicker1.files[0].data }}

//here [0] represents index of the file.
```






## Send file data with API requests

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
If you intend to upload files of significant size, kindly adjust the timeout settings in the API configuration.
:::

To learn more,  see [how to use the Filepicker widget](https://www.appsmith.com/blog/upload-and-manage-files-on-cloudinary-with-the-filepicker-widget) to upload or manage files on Cloudinary.


## Display CSV data in table

To display CSV data in a [Table widget](/reference/widgets/text), use the Array data format. This format allows CSV data to be directly parsed into an array or array of objects that can be referenced throughout the platform. To achieve this, follow these steps:

* Select the **Array(Only CSV)** option.
* Upload your **CSV** file using the Filepicker widget
* In the Table widget property, add the following code:
```js
{{FilePicker1.files[0].data}}
```


This displays your CSV data in a tabular format.

Similarly, you can use the [Image widget ](/reference/widgets/image) to display images that are base64 encoded, and the [Text widget ](/reference/widgets/text) to display text files with a `.txt` extension.


:::info
Currently, only CSV data is supported; XLS or other formats aren't supported.
:::

## Properties


Properties allow you to customize the widget, connect it to other widgets and trigger events on user actions.


### Widget properties
These properties are present in the property pane of the widget. The following table lists all the widget properties.


| Property                      	| Data Type       	| Description                                                                                                                                                                                                                                                                           	|
|-------------------------------	|-----------------	|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| **Label**                     	| String          	| Sets the text displayed within the widget.                                                                                                                                                                                                                                            	|
| **Maximum No. of files**      	| Number          	| Sets the maximum number of files allowed to be uploaded by a user.                                                                                                                                                                                                                    	|
| **Maximum File Size**         	| Number          	| Sets the maximum allowed size of each file that a user can upload.                                                                                                                                                                                                                    	|
| **Allowed File Types**        	| Array   	| Controls which types of files a user is allowed to upload. Accepts an array of wildcards image/, exact mime types image/jpeg, or file extensions e.g.: '.jpg', '.jpeg', '.png', '.gif']. The following file types are supported: Images, Videos, Audio, Text, MS Word, JPEG, and PNG. 	|
| **Data Format**               	| String 	| Determines the data format of the files uploaded. You can choose from Base64, Binary, , Text, and Array(CSV).                                                                                                                                                                         	|
| **Infer data-types from CSV** 	| Boolean         	| Enables or disables the automatic inference of data types from CSV files.                                                                                                                                                                                                             	|
| **Required**                  	| Boolean         	| Makes input to the widget mandatory.                                                                                                                                                                                                                                                  	|
| **Visible**                   	| Boolean        	| Controls widget's visibility on the page.                                                                                                                                                                                                                                             	|
| **Disabled**                  	| Boolean         	| Makes the widget un-clickable or unusable. The widget remains visible to the user but user interaction won't be allowed.                                                                                                                                                              	|
| **Animate Loading**           	| Boolean         	| Allows you to control a widget’s animation on the page load.     



### Reference properties
These properties can be referenced in other widgets, queries, or JS functions using the dot operator. For example, to check the visibility setting of the widget, you can use `FilePicker1.isVisible`.

| Property                      	| Data Type       	| Description                                                                                                                                                                                                                                                                           	|
|-------------------------------	|-----------------	|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| **files**             	| Array    |  An array of file objects that have been selected by the user. Each file object contains the file data, which can be accessed through its `data` property.                                                                                                                                                                           
| **isVisible**         	| Boolean        | Indicates the state of the widget's Visible setting.  
| **isDisabled**        	| Boolean         | Indicates the state of the widget's Disabled setting.
| **isDirty**          	| Boolean       | Indicates whether the file picker has been used by the end user during their session.
| **isValid**          	| Boolean       | Indicates whether the file type selected by the user is considered valid for the widget.


### Styles


Style properties allow you to change the look and feel of the widget.


| Property                      	| Data Type       	| Description                                                                                                                                                                                                                                                                           	|
|-------------------------------	|-----------------	|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| **Button Color**  	| String | Sets the color of the widget's button. Accepts valid CSS [`color` ](https://developer.mozilla.org/en-US/docs/Web/CSS/color)values.                                               |
| **Border Radius** 	| String | Rounds the corners of the widget's outer edge. With JS enabled, this accepts valid CSS [`border-radius`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) values. |
| **Box Shadow**    	| String | Casts a drop shadow from the frame of the widget. With JS enabled, this accepts valid CSS [`box-shadow`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) values.    |


## Events


These are functions that are called when event listeners are triggered in the widget. Use [actions](/reference/appsmith-framework/widget-actions) to execute tasks based on user events.




| Event               | Description                                                                                                                                                                                                                            |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **onFilesSelected** | The onFilesSelected event is triggered when a user selects a file through the widget, allowing you to define a specific action.




## Methods

Widget property setters enable you to modify the values of widget properties at runtime, eliminating the need to manually update properties in the editor.

These methods are asynchronous, and users have the option to either await them or use the `.then()` block to ensure appsmith reactivity is maintained for subsequent lines of code.


#### setVisibility `boolean`

<dd>

Sets the visibility of the widget.

*Example*:

```js
FilePicker1.setVisibility(true).then(() => {
  // code to be executed after visibility is set
})

```

</dd>


#### setDisabled `boolean`

<dd>

Sets the disabled state of the widget.

*Example*:

```js
FilePicker1.setDisabled(false).then(() => {
  // code to be executed after disabled state is set
})
```

</dd>