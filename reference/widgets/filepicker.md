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

| Internal Property | Description                                                                                                                              |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **files**         | This is the array of files selected in the file picker. The data of each file are present in each array object and can be accessed using |

| Property                 | Description                                                                                                                                                                                                             |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Label**                | Sets the label of the Filepicker.                                                                                                                                                                                       |
| **Maximum No. of files** | Enables you to set the maximum number of files allowed to be uploaded by a user.                                                                                                                                        |
| **Maximum File Size**    | Enables you to set the maximum allowed size of each file that a user can upload.                                                                                                                                        |
| **Data Type**            | This determines the data format of the files uploaded. This can be referenced using                                                                                                                                     |
| **Allowed File Types**   | Enables you to set constraints on the type of file a user can upload. Accepts an _array_ of wildcards`image/*`, exact mime types `image/jpeg`, or file extensions `.jpg`:`['image/*', '.jpg', '.jpeg', '.png', '.gif']` |
| **Required**             | When turned on, it makes a user input required and disables any form submission until an input is made.                                                                                                                 |
| **Visible**              | Controls widget's visibility on the page. When turned off, the widget will not be visible when the app is published                                                                                                     |

| Action              | Description                                                                                                                                                                                                                                                              |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **onFilesSelected** | Sets the action to be run when the user selects files to be uploaded. See a list of [supported actions](../../core-concepts/writing-code/appsmith-framework.md). You can immediately call an API or the S3 plugin to upload the base64 of the file to your cloud storage |

{% hint style="info" %}
To learn how to upload or manage files on Cloudinary with the filepicker widget, [read this tutorial](https://www.appsmith.com/blog/upload-and-manage-files-on-cloudinary-with-the-filepicker-widget).
{% endhint %}
