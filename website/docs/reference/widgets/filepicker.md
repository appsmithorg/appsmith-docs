# FilePicker

This document guides you on how to use the FilePicker widget to upload files from your local machine to cloud storage platforms or manage them within your app.

<VideoEmbed host="youtube" videoId="Sl0zN2CSJaY" title="Configure Filepicker Widget" caption="Configure Filepicker Widget"/>


##  Upload files

To upload a file or multiple files, you can drag and drop them onto the FilePicker widget or select files from your local machine. To access the uploaded file's data, you can use the following code in query or widget bindings. 

```js
{{ FilePicker1.files[0].data }}

//here [0] represents index of the file.
```

:::info
Any file exceeding 5 MB would be saved as a blob URL, and the upper limit for file size is 100 MB.
:::

Appsmith supports various file types and data formats, including:

* **Binary**: Binary files store data in the form of contiguous bytes, without a defined reading method. To upload a binary file, choose Data Format as Binary and then upload the file.
* **Text**: Text files store data as human-readable characters. 
* **Base64**: Base64 is a binary-to-text encoding scheme that represents binary data in an ASCII string format.
* **Array (CSV)**: CSV files store tabular data as plain text, with each row separated by a line break and each value separated by a comma. 


:::tip
If the user uses the data in an API or query, it would be uploaded as base64 or binary data, despite appearing in the blob URL format when you log the data. If you intend to upload files of significant size, kindly adjust the timeout settings in the API configuration.
:::

### Upload file to S3


To upload a file to [S3](/reference/datasources/querying-amazon-s3), follow these steps:



* Click the **+** icon next to Queries/JS and choose your S3 datasource.
* From the Commands drop-down menu, select the "**Create a new file**" method.
* Provide the necessary parameters for reading the file, such as the bucket name, file path, and file data type. For instance, to get name of the file, you can use `{{ FilePicker1.files[0].name }}`.
* In the content body, add the following:

```js
{{ FilePicker1.files[0].data }}
```

If using the S3 multiple file upload command, you only need to provide `{{FilePicker1.files}}`.

You can refer to this [tutorial](https://www.appsmith.com/blog/upload-and-manage-files-on-cloudinary-with-the-filepicker-widget) to understand how to use the FilePicker widget to upload or manage files on Cloudinary.




## Display data in table

To display CSV data in a [Table widget](/reference/widgets/text), use the Array data format. This format allows CSV data to be directly parsed into an array or array of objects that can be referenced throughout the platform. To achieve this, follow these steps:

* Select the Array(Only CSV) option.
* Upload your CSV file using the Filepicker widget
* In the Table widget property, add the following code:
```js
{{FilePicker1.files[0].data}}
```


This displays your CSV data in a tabular format. Similarly, you can use the [Image widget ](/reference/widgets/image) to display images that are base64 encoded, and the [Text widget ](/reference/widgets/text) to display text files with a `.txt` extension.


:::info
Currently, only CSV data is supported; XLS or other formats aren't supported.
:::

## Properties


Properties allow you to customize the widget, connect it to other widgets and trigger events on user actions.


### Widget properties
These properties are present in the property pane of the widget. The following table lists all the widget properties.


|        Property         |                                               Description                                                                                   |  
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **Label**                                | Sets the text displayed within the widget.                                                                                                                                                                                                                                                     |
| **Maximum No. of files**              | Sets the maximum number of files allowed to be uploaded by a user.                                                                                                                                                                                                                                                                 |
| **Maximum File Size**              | Sets the maximum allowed size of each file that a user can upload.                                                                                                                                                                                                                                |
| **Allowed File Types**                | Controls which types of files a user is allowed to upload. Accepts an array of wildcards image/, exact mime types image/jpeg, or file extensions e.g.: '.jpg', '.jpeg', '.png', '.gif']. The following file types are supported: Images, Videos, Audio, Text, MS Word, JPEG, and PNG.                          |
| **Data Format**                   | Determines the data format of the files uploaded. You can choose from Base64, Binary, , Text, and Array(CSV).                                                                                                                                                                                                                      |
| **Infer data-types from CSV**       | Enables or disables the automatic inference of data types from CSV files.                                                                                      |
| **Required**                           | Makes input to the widget mandatory.                                                                                                            |
| **Visible**             | Controls widget's visibility on the page.                                                                           | `{{FilePicker.isVisible}}`  |
| **Disabled**                 | Makes the widget un-clickable or unusable. The widget remains visible to the user but user interaction won't be allowed.                                                                                                                                                                           | `{{FilePicker.isDisabled}}` |
| **Animate Loading**               | Allows you to control a widget’s animation on the page load.                                                                                                   |                             |




### Reference properties
These properties can be referenced in other widgets, queries, or JS functions using the dot operator. For example, to check the visibility setting of the widget, you can use `FilePicker1.isVisible`.

|        Property         |                                               Description                                                                                   |  
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **files**                |  An array of file objects that have been selected by the user. Each file object contains the file data, which can be accessed through its `data` property.                                                                                                                                                                           
| **isVisible**                | Indicates the state of the widget's Visible setting.  
| **isDisabled**                | Indicates the state of the widget's Disabled setting.
| **isDirty**                | Indicates whether the file picker has been used by the end user during their session.
| **isValid**                | Indicates whether the file type selected by the user is considered valid for the widget.


### Styles


Style properties allow you to change the look and feel of the widget.


| Style Property    | Description                                                                                                                                                                      |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Button Color**  | Sets the color of the widget's button. Accepts valid CSS [`color` ](https://developer.mozilla.org/en-US/docs/Web/CSS/color)values.                                               |
| **Border Radius** | Rounds the corners of the widget's outer edge. With JS enabled, this accepts valid CSS [`border-radius`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) values. |
| **Box Shadow**    | Casts a drop shadow from the frame of the widget. With JS enabled, this accepts valid CSS [`box-shadow`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) values.    |


### Events


These are functions that are called when event listeners are triggered in the widget. Use [actions](/reference/appsmith-framework/widget-actions) to execute tasks based on user events.




| Event               | Description                                                                                                                                                                                                                            |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **onFilesSelected** | The onFilesSelected event is triggered when a user selects a file through the widget, allowing you to define a specific action.




### Further reading


* [Document Viewer](/reference/widgets/document-viewer)
* [Form](/reference/widgets/form)
* [Queries](/core-concepts/data-access-and-binding/querying-a-database)
