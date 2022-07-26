# Filepicker

Filepicker widget is used to allow users to upload files from their local machines to any cloud storage via API. Cloudinary and Amazon S3 have simple APIs for cloud storage uploads

{% embed url="https://youtu.be/Sl0zN2CSJaY" %}

## Upload File

You can upload files by creating a post API and referring to the base64 or binary version of the file in the post body. The data format is determined by the Data Type property in the property pane

```
{{ Filepicker1.files[0].data }}
```

{% hint style="info" %}
When you try to log the data, it appears in the blob format. But, if the user uses it in an API/query, it’ll actually upload base64/binary data.
{% endhint %}

See our guides on

* [Uploading a File to S3](../../learning-and-resources/how-to-guides/how-to-upload-to-s3.md)

{% hint style="info" %}
if you are trying to upload large files, please increase the timeout in API configuration. Whenever the file is larger than 5mb it is stored as blob.
{% endhint %}

## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

### Widget Properties

These properties allow you to edit the Filepicker widget. All of these properties are present in the property pane of the widget. The following table lists all the widget properties.

| Property                 | Description                                                                                                                                                                                                                                                                  |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Label**                | Sets the text shown within the widget.                                                                                                                                                                                                                                       |
| **Maximum No. of files** | Sets the maximum number of files allowed to be uploaded by a user.                                                                                                                                                                                                           |
| **Maximum File Size**    | Sets the maximum allowed size of each file that a user can upload.                                                                                                                                                                                                           |
| **Allowed File Types**   | <p>Sets the allowed filetypes that a user can upload. Accepts an <em>array</em> of wildcards<code>image/*</code>, exact mime types <code>image/jpeg</code>, or file extensions <code>.jpg</code>.<br><br>e.g.: <code>['image/*', '.jpg', '.jpeg', '.png', '.gif']</code></p> |
| **Data Format**          | Determines the data format of the files uploaded. Choose from Base64, Binary, or Text (plain).                                                                                                                                                                               |
| **Required**             | Sets whether the checkbox is a mandatory field. When the checkbox is within a Form widget, that Form's submit button will be automatically disabled until the Checkbox is checked.                                                                                           |
| **Visible**              | Controls widget's visibility on the page. When turned off: The widget will not be visible when the app is published. It appears translucent when in Edit mode.                                                                                                               |
| **Disable**              | Makes the widget un-clickable or unusable. The widget will remain visible to the user but user interaction will not be allowed.                                                                                                                                              |
| **Animate Loading**      | When turned off, the widget will load without any skeletal animation. You can use a toggle switch to turn it on/off. You can also turn it off/on using javascript by enabling the JS label next to it.                                                                       |

### Binding Properties

These properties allow you to bind your Filepicker widget with any other widget in queries or JS objects. The following table lists all the binding properties.

| Binding Properties | Description                                                                                                               |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| **files**          | Contains an _array of file objects_ selected by the user. Each file object contains the file data on its `data` property. |
| **isDisabled**     | Reflects the state of the widget's **Disabled** setting _(bool)_.                                                         |
| **isVisible**      | Reflects the state of the widget's **Visible** setting _(bool)_.                                                          |

### Events

You can define functions that will be called when these events are triggered in the widget.

| Event               | Description                                                                                                                                                                                                                     |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **onFilesSelected** | Sets an an action to take place when the user selects a file. Can be set from the GUI list of common actions ([examples here](../appsmith-framework/actions/)), or you can define a custom JavaScript function to call instead. |

### Styles

Style properties allow you to change the look and feel of the widget.

| Style Property    | Description                                                                                                                                                                      |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Button Color**  | Sets the color of the widget's button. Accepts valid CSS [`color` ](https://developer.mozilla.org/en-US/docs/Web/CSS/color)values.                                               |
| **Border Radius** | Rounds the corners of the widget's outer edge. With JS enabled, this accepts valid CSS [`border-radius`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) values. |
| **Box Shadow**    | Casts a drop shadow from the frame of the widget. With JS enabled, this accepts valid CSS [`box-shadow`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) values.    |

{% hint style="info" %}
To learn how to upload or manage files on Cloudinary with the Filepicker widget, [read this tutorial](https://www.appsmith.com/blog/upload-and-manage-files-on-cloudinary-with-the-filepicker-widget).
{% endhint %}
