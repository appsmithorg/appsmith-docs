---
description: This page provides information on using the Filepicker widget, which simplifies file uploading and selection for seamless user experiences.
---
# Filepicker

This page provides information on using the Filepicker widget, which allows users to select and upload multiple files.

## Content properties

These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.


### Basic

#### Allowed file types	`array<string>`

<dd>

Allows you to control the types of files users can upload with the Filepicker widget. It accepts an array of wildcards, MIME types, or specific file extensions, such as `.jpg`, `.jpeg`, `.png`, and `.gif`. 

_Options_ :

* Any *(allows users to upload files of all the mentioned file types)*
* Images 
* Videos 
* Audio
* Text
* MS Word
* JPEG
* PNG



When JS is enabled, you can provide the data as an array of strings, specifying accepted file types.

_Example_:

```js
[
  "audio/*",
  "text/*",
  "video/*"
]
```

</dd>

:::caution
* Any file exceeding 5 MB would be saved as a blob URL, and the upper limit for file size is 100 MB.
* When using the data in a query, it is uploaded in the selected format, despite appearing in the blob URL format when you log the data.
:::

#### Data Format `string`

<dd>

This property allows you to choose the data format of the uploaded files. Appsmith supports various file types and data formats, including:

_Options_:

* **Binary**: Binary files store data in the form of contiguous bytes, without a defined reading method.
* **Text**: Text files store data as human-readable characters. 
* **Base64**: Base64 is a binary-to-text encoding scheme that represents binary data in an ASCII string format.
* **Array (CSV)**: CSV files store tabular data as plain text, with each row separated by a line break and each value separated by a comma. 


</dd>

#### Maximum No. of files	`number`

<dd>

Sets the maximum number of files that a user can select. The default value is `1`.
</dd>

### Label

#### Text `string`

<dd>

Sets the text on the widget. The default value is `Select Files`.

</dd>

### Validation

#### Required `boolean`


<dd>

Enabling this property makes the Filepicker widget mandatory, requiring users to select a file. I When the widget is placed within a Form widget, enabling the **Required** property ensures that the Form's submit button remains disabled untila a file is selected.

</dd>

#### Maximum File Size	`number`

<dd>

Sets the maximum allowed size of each file that a user can upload. The default value is set to `5 MB`.

</dd>

### General

#### Visible `boolean`

<dd>

Controls the visibility of the widget. If you turn off this property, the widget would not be visible in View Mode. Additionally, you can use JavaScript by clicking on **JS** next to the **Visible** property to conditionally control the widget's visibility. The default value for the property is `true`.

For example, if you want to make the widget visible only when the user selects "Yes" from a Select widget, you can use the following JavaScript expression: 
```js
{{Select1.selectedOptionValue === "Yes"}}
```



</dd>

#### Disabled `boolean`

<dd>

Prevents users from selecting the widget. Even though the widget remains visible, user input is not permitted. Additionally, you can use JavaScript by clicking on **JS** next to the **Disabled** property to control the widget's disable state conditionally. The default value for the property is `false`.

For example, if you want to allow only a specific user to fill the input, you can use the following JavaScript expression: 
```js
{{appsmith.user.email=="john@appsmith.com"?false:true}}
```

</dd>

#### Animate Loading `boolean`


<dd>

This property controls whether the widget is displayed with a loading animation. When enabled, the widget shows a skeletal animation during the loading process. Additionally, you can control it through JavaScript by clicking on the <code>JS</code> next to the property. The default value for the property is `true`.

</dd>

### Events

#### onFilesSelected	

<dd>

Allows you to configure one or multiple actions (Framework functions, queries, or JS functions) to be executed when the user select a file through the widget.

</dd>


### Color

#### Button color `string`

<dd>

Represents the color of the button, specified as a [CSS color value](https://developer.mozilla.org/en-US/docs/Web/CSS/color). When JS is enabled, the font color can be programmatically modified using JavaScript functions.

</dd>

### Border and shadow

#### Border radius `string`

<dd>

Applies rounded corners to the outer edge of the widget. If JavaScript is enabled, you can specify valid [CSS border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) to adjust the radius of the corners.

</dd>

#### Box Shadow `string`
 

<dd>

This property adds a drop shadow effect to the frame of the widget. If JavaScript is enabled, you can specify valid [CSS box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) values to customize the appearance of the shadow.


</dd>

## Reference properties

Reference properties are properties that are not available in the property pane but can be accessed using the dot operator in other widgets or JavaScript functions. They provide additional information or allow interaction with the widget programmatically. For instance, to get the visibility status, you can use `FilePicker1.isVisible`.

#### files `array`

<dd>

The `files` property stores file objects that the user has selected. Each file object contains the file data, which can be accessed through its `data` property.

*Example:*

```js
// Accessing the data
{{ FilePicker1.files[0].data }}

// Accessing the data format
{{FilePicker1.files[0].dataFormat}}

//here [0] represents index of the file.
```

See how to [Upload Files to S3 using Filepicker](connect-data/how-to-guides/how-to-upload-to-s3)

</dd>

#### isValid `boolean`

<dd>

The `isValid` property indicates the validation status of a widget, providing information on whether the widget's current value is considered valid or not.

Example:

```js
{{FilePicker1.isValid}}
```

</dd>

#### isDisabled `boolean`

<dd>

The `isDisabled` property reflects the state of the widget's Disabled setting. It is represented by a boolean value, where true indicates that the widget is not available, and false indicates that it is enabled for user interaction.

Example:

```js
{{FilePicker1.isDisabled}}
```

</dd>


#### isVisible `boolean`

<dd>

The `isVisible` property indicates the visibility state of a widget, with true indicating it is visible and false indicating it is hidden.

Example:

```js
{{FilePicker1.isVisible}}
```

</dd>

#### isDirty `boolean`

<dd>

Indicates whether the FilePicker has been used by the end user during the session. It is `true` if the user has interacted with the FilePicker at least once during their session, and `false` if they haven't used it yet.

Example:

```js
{{FilePicker1.isDirty}}
```


</dd>



## Methods

Widget property setters enable you to modify the values of widget properties at runtime, eliminating the need to manually update properties in the editor.

These methods are asynchronous and return a [Promise](/core-concepts/writing-code/javascript-promises#using-promises-in-appsmith). You can use the .then() block to ensure execution and sequencing of subsequent lines of code in Appsmith.


#### setVisibility(param: boolean): Promise

<dd>

Sets the visibility of the widget.

*Example*:

```js
FilePicker1.setVisibility(true)
```

</dd>


#### setDisabled(param: boolean): Promise

<dd>

Sets the disabled state of the widget.

*Example*:

```js
FilePicker1.setDisabled(false)
```

</dd>

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


## Upload CSV data in Table using Filepicker

To display CSV data in a [Table widget](/reference/widgets/text), use the Array data format. This format allows CSV data to be directly parsed into an array or array of objects that can be referenced throughout the platform. To achieve this, follow these steps:

* Select the **Array(Only CSV)** option.
* Upload your **CSV** file using the Filepicker widget
* In the Table widget property, add the following code:
```js
{{FilePicker1.files[0].data}}
```


This displays your CSV data in a tabular format.

Similarly, you can use the [Image widget ](/reference/widgets/image) to display images that are base64 encoded, and the [Text widget ](/reference/widgets/text) to display text files with a `.txt` extension.


:::caution
Currently, only CSV data is supported; XLS or other formats aren't supported.
:::


