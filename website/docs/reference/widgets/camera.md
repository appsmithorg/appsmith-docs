---
description: >-
  Camera widget reference
---

# Camera

This page provides instructions on how to use the camera widget to capture images and videos.

<figure>
  <img src="/img/cam-image.png" style= {{width:"700px", height:"auto"}} alt="Camera widget"/>
  <figcaption align = "center"><i>Using the Camera widget</i></figcaption>
</figure>

## Content propeties

These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.

### General

#### Mode `button`

<dd>

Toggles the camera between Image and Video mode.

</dd>

#### Visible `boolean`

<dd>

Controls the visibility of the widget. If you turn off this property, the widget is not visible in View mode. Additionally, you can use JavaScript by clicking on **JS** next to the **Visible** property to control the widget's visibility conditionally.

For example,  if you want to make the widget visible only when the user checks an item in a Checkbox widget, you can use the following JavaScript expression in the visible property of the Camera widget:

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

#### onImageSave

<dd>

Allows you to configure one or multiple actions (Framework functions, queries, or JS functions) to be executed when the user captures an image. You can also write custom JavaScript logic for this event by clicking on the **JS** button next to the property.

</dd>

#### onVideoSave

<dd>

Allows you to configure one or multiple actions (Framework functions, queries, or JS functions) to be executed when the user saves a video. You can also write custom JavaScript logic for this event by clicking on the **JS** button next to the property.

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

Reference properties enable you to access the widget's data and state using the dot operator in other widgets or JavaScript functions. They provide additional information or allow interaction with the widget programmatically. For instance, to retrieve the visibility status of a Select widget, you can use `Camera1.isVisible`.

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

</dd>

#### imageRawBinary `string`

<dd>

Returns the image file in binary format, suitable for storing the audio for future use.

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

These methods are asynchronous and return a [Promise](/core-concepts/writing-code/javascript-promises#using-promises-in-appsmith). You can use the `.then()` block to ensure execution and sequencing of subsequent lines of code in Appsmith.


#### setVisibility `boolean`

<dd>

Sets the visibility of the widget.

*Example*:

```js
Camera1.setVisibility(true)
```

</dd>


#### setDisabled `boolean`

<dd>

Sets the disabled state of the widget.

*Example*:

```js
Camera1.setDisabled(false)
```

</dd>

## Upload media to S3

This guide shows you how to capture and upload an image or video to Amazon S3.

1. Connect to [Amazon S3](/connect-data/reference/querying-amazon-s3) datasource.
2. Click the **+** icon next to the **Queries/JS** and choose your S3 datasource.
3. Select **Create a new file** from the **Commands** list.
4. Specify the necessary parameters, such as the **Bucket Name** and **File Data Type**. Select the `base64` option from **File Data Type** when uploading data from the Camera widget.
5. In the content box, add the data you want to upload. For instance, if you want to upload an image, use: 

 ```js
  //For image
   {
    "data": {{Camera1.imageDataURL}}
   }
  ```
To upload the video, use:
 ```js
  //For video
   {
    "data": {{Camera1.videoDataURL}}
   }
  ```

<figure>
  <img src="/img/cam-to-s3.png" style= {{width:"700px", height:"auto"}} alt="Upload media to S3"/>
  <figcaption align = "center"><i>Upload media to S3</i></figcaption>
</figure>


5. Set the **onImageCapture** or **onVideoSave** event to run the query. When you capture an image or video using the Camera widget, it gets uploaded to the S3 bucket.



