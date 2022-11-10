# Filepicker

Filepicker widget is used to allow users to upload files from their local machines to any cloud storage via API. Cloudinary and Amazon S3 have simple APIs for cloud storage uploads

<VideoEmbed host="youtube" videoId="Sl0zN2CSJaY" title="How to use Filepicker Widget" caption="How to use Filepicker Widget"/>

## Upload File

You can upload files by creating a post API and referring to the base64 or binary version of the file in the post body. The data format is determined by the Data Type property in the property pane

```
{{ Filepicker1.files[0].data }}
```

:::info
When you try to log the data, it appears in the blob format. But, if the user uses it in an API/query, it’ll actually upload base64/binary data.
:::

See our guides on



:::tip
if you are trying to upload large files, please increase the timeout in API configuration. Whenever the file is larger than 5mb it is stored as blob.
:::

## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

### Widget Properties

These properties allow you to edit the Filepicker widget. All of these properties are present in the property pane of the widget. The following table lists all the widget properties.

| Property                      | Type                 | Description                                                                                                                                                                                                                                                                                               | Code Snippet                |
| ----------------------------- | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| **Label**                     | Formatting           | Sets the text shown within the widget.                                                                                                                                                                                                                                                                    | NA                          |
| **Maximum No. of files**      | Formatting           | Sets the maximum number of files allowed to be uploaded by a user.                                                                                                                                                                                                                                        | NA                          |
| **Maximum File Size**         | Formatting           | Sets the maximum allowed size of each file that a user can upload.                                                                                                                                                                                                                                        | NA                          |
| **Allowed File Types**        | Formatting           | Sets the allowed filetypes that a user can upload. Accepts an array of wildcards image/, exact mime types image/jpeg, or file extensions e.g.: '.jpg', '.jpeg', '.png', '.gif'] | NA                          |
| **Data Format**               | Formatting           | Determines the data format of the files uploaded. Choose from Base64, Binary, , Text (plain), and Array(CSV).                                                                                                                                                                                             | NA                          |
| **Infer data-types from CSV** | Formatting           | Controls if the arrays should try to infer the best possible data type based on the values in CSV files.                                                                                                                                                                                                  | NA                          |
| **Required**                  | Validation           | Sets whether the checkbox is a mandatory field. When the checkbox is within a Form widget, that Form's submit button will be automatically disabled until the Checkbox is checked.                                                                                                                        | NA                          |
| **Visible**                   | Binding & Formatting | Controls widget's visibility on the page. When turned off: The widget will not be visible when the app is published. It appears translucent when in Edit mode.                                                                                                                                            | `{{FilePicker.isVisible}}`  |
| **Disable**                   | Binding & Formatting | Makes the widget un-clickable or unusable. The widget will remain visible to the user but user interaction will not be allowed.                                                                                                                                                                           | `{{FilePicker.isDisabled}}` |
| **Animate Loading**           | Formatting           | When turned off, the widget will load without any skeletal animation. You can use a toggle switch to turn it on/off. You can also turn it off/on using javascript by enabling the JS label next to it.                                                                                                    |                             |
| **files**                     | Binding              | Contains an _array of file objects_ selected by the user. Each file object contains the file data on its `data` property.                                                                                                                                                                                 | `{{FilePicker.files}}`      |

#### Data Format

Determines the data format of the files uploaded. The following data formats are supported as of now:

* **Base64**

Base64 is a group of binary-to-text encoding schemes representing binary data in an ASCII string format by translating it into a radix-64 representation. Base64 encodes binary files such as images within scripts, to avoid depending on external files.

You can upload your base64 file and call it using:

```
{{FilePicker1.files[0].data}}

//here [0] represents index of the file.
```


:::info
You can use the [Image widget ](image.md)to display images that are base64 encoded.
:::

* **Binary**

Binary files are a type of files that are used to store data in the form of contiguous bytes, in which the method of reading is not defined.  If you want to upload a binary file, choose Data Format as Binary and then upload your file.

* **Text**

Text refers to data (file contents) that contain readable characters without their graphical representation or other elements. For example, you can upload your**`.txt`** file and use the following code to display it in a [text widget](text.md):

```
{{FilePicker1.files[0].data}}
```



<VideoEmbed host="youtube" videoId="LjSuzxS2lY8" />

* **Array(CSV)**

With the Array data format, CSV data will be directly parsed into an array or array of objects that may be referenced throughout Appsmith.&#x20;

For example, if you have data in a CSV format and want to display it in a [table widget. ](table/)


<VideoEmbed host="youtube" videoId="VcIiy7NuBeA" />

* Select the **Array(Only CSV)** option.
* Upload your CSV file using the **filepicker** widget
* Add the following code in the table widget property:

```
{{FilePicker1.files[0].data}}

//here [0] represents index of the file.
```

This will display your CSV data in a tabular format.

:::info
Currently, only **CSV** data is supported; XLS or other formats are not supported.
:::

### Events

You can define functions that will be called when these events are triggered in the widget. For example, you can navigate to another page, show alert messages, open and close modals, and store data in local storage.

| Event               | Description                                                                                                                                                                                                                            |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **onFilesSelected** | Sets an an action to take place when the user selects a file. Can be set from the GUI list of common actions ([examples here](../appsmith-framework/widget-actions/)), or you can define a custom JavaScript function to call instead. |

### Styles

Style properties allow you to change the look and feel of the widget.

| Style Property    | Description                                                                                                                                                                      |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Button Color**  | Sets the color of the widget's button. Accepts valid CSS [`color` ](https://developer.mozilla.org/en-US/docs/Web/CSS/color)values.                                               |
| **Border Radius** | Rounds the corners of the widget's outer edge. With JS enabled, this accepts valid CSS [`border-radius`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) values. |
| **Box Shadow**    | Casts a drop shadow from the frame of the widget. With JS enabled, this accepts valid CSS [`box-shadow`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) values.    |

:::info
To learn how to upload or manage files on Cloudinary with the Filepicker widget, [read this tutorial](https://www.appsmith.com/blog/upload-and-manage-files-on-cloudinary-with-the-filepicker-widget).
:::

### **What's next?**

The following resources will come in handy as you need to learn new tricks:

* [Connecting to Datasources](/core-concepts/connecting-to-data-sources)
* [Appsmith Framework](../appsmith-framework/)
* [JavaScript Editor](../../core-concepts/writing-code/javascript-editor-beta/)
* [Uploading a File to S3](../../learning-and-resources/how-to-guides/how-to-upload-to-s3.md)

### Troubleshooting

If you encounter any errors during this process, check out our guide on [debugging deployment errors](https://docs.appsmith.com/help-and-support/troubleshooting-guide/deployment-errors). If you are still facing any issues, please reach out to support@appsmith.com or join our [Discord Server](https://discord.com/invite/rBTTVJp) to speak to the Appsmith team directly!
