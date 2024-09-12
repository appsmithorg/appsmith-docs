---
description: >-
  Camera widget reference
---

# Camera

This page describes the properties of the camera widget, which is used for capturing images and videos.

<ZoomImage src="/img/cam-image.png" alt="Camera widget" caption="Using the Camera widget" />

## Content properties

These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.

### General

#### Mode `button`

<dd>

Toggles the camera between Image and Video mode.

</dd>

#### Visible `boolean`

<dd>

Controls the visibility of the widget. If you turn off this property, the widget is not visible in View mode. Additionally, you can use JavaScript by clicking on **JS** next to the **Visible** property to control the widget's visibility conditionally.

*Example:*  If you want to make the widget visible only when the user checks an item in a Checkbox widget, you can use the following JavaScript expression in the visible property of the Camera widget:

```js
{{Checkbox1.isChecked}}
```

</dd>

#### Disabled `boolean`

<dd>

Prevents users from selecting the widget. Even though the widget remains visible, user input is not permitted. Additionally, you can use JavaScript by clicking on **JS** next to the `Disabled` property to control the widget's disabled state conditionally.

For example, if you want to allow only a specific user to interact with the Camera widget, you can use the following JavaScript expression: 
```js
{{appsmith.user.email=="john@appsmith.com"?false:true}}
```

</dd>

#### Mirrored `boolean`

<dd>

Enabling this property mirrors the camera preview and the resulting captured image or video. Additionally, you can use JavaScript by clicking on **JS** next to the `Mirrored` property to control the mirroring conditionally.

</dd>

### Events 

When an event is triggered, these event handlers can execute queries, JS code, or other supported [actions](/reference/appsmith-framework/widget-actions).

#### onImageSave

<dd>

Triggered when the user captures an image. This event is only available when the camera widget is in Image mode.

</dd>

#### onVideoSave

<dd>

Triggered when the user saves a video. This event is only available when the camera widget is in Video mode.

</dd>

### Style properties

Style properties allow you to change the look and feel of the widget.

### Border and shadow

#### Border radius `string`

<dd>

Applies rounded corners to the outer edge of the widget. If JavaScript is enabled, you can specify valid [CSS border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) to adjust the radius of the corners.

</dd>

#### Box Shadow `string`
 

<dd>

This property adds a drop shadow effect to the frame of the widget. If JavaScript is enabled, you can specify valid [CSS box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) values to customize the appearance of the shadow.

</dd>

### Reference properties 

Reference properties enable you to access the widget's data and state using the dot operator in other widgets or JavaScript functions. They provide additional information or allow interaction with the widget programmatically. For instance, to retrieve the visibility status of a Camera widget, you can use `Camera1.isVisible`.

#### imageBlobURL `string`

<dd>

Returns a binary URL that stores the captured image for future use.

*Example:*

```js
{{Camera1.imageBlobURL}}
```

</dd>

#### imageDataURL `string`

<dd>

Stores the captured image in Data URL format (Base64). You can use it to embed the image inline within different applications. 

*Example:*

```js
{{Camera1.imageDataURL}}
```

You can use this property to upload an image to Amazon S3. For more information, see [Upload Images to and from S3](/connect-data/how-to-guides/how-to-use-the-camera-image-widget-to-upload-download-images).

</dd>

#### imageRawBinary `string`

<dd>

Returns the image file in binary format, suitable for storing the image for future use.

*Example:*

```js
{{Camera1.imageRawBinary}}
```

</dd>

#### videoBlobURL `string`

<dd>

Returns a binary URL that stores the captured video for future use.

*Example:*

```js
{{Camera1.videoBlobURL}}
```

</dd>

#### videoDataURL `string`

<dd>

Stores the recorded video in Data URL format (Base64). You can use it to embed the video inline within different applications.

*Example:*

```js
{{Camera1.videoDataURL}}
```

You can use this property to upload a video to Amazon S3. For more information, see [Upload Images to and from S3](/how-to-guides/how-to-upload-to-s3#configure-query)

</dd>

#### videoRawBinary `string`

<dd>

Returns the video file in binary format, suitable for storing the video for future use.

*Example:*

```js
{{Camera1.videoRawBinary}}
```

</dd>

## Methods

Widget property setters enable you to modify the values of widget properties at runtime, eliminating the need to manually update properties in the editor.

These methods are asynchronous and return a [Promise](/core-concepts/writing-code/javascript-promises#using-promises-in-appsmith). You can use the `.then()` block to ensure the execution and sequencing of subsequent lines of code in Appsmith.


#### setVisibility (param: boolean): Promise

<dd>

Sets the visibility of the widget.

*Example*:

```js
Camera1.setVisibility(true)
```

</dd>


#### setDisabled (param: boolean): Promise

<dd>

Sets the disabled state of the widget.

*Example*:

```js
Camera1.setDisabled(false)
```

</dd>


## See also

- [Upload Images to S3](/how-to-guides/how-to-upload-to-s3#configure-query) - Learn how to upload images to S3 using the camera widget.
- [Upload Files using API](/build-apps/how-to-guides/Send-Filepicker-Data-with-API-Requests) - Learn how to upload images using an API.

