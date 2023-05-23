# Camera

This page provides instructions on how to use the camera widget to capture images and videos.

<figure>
  <img src="/img/cam-image.png" style= {{width:"700px", height:"auto"}} alt="Camera widget"/>
  <figcaption align = "center"><i>Using the Camera widget</i></figcaption>
</figure>

## Upload media to S3

To upload the captured image or video to [Amazon S3](/reference/datasources/querying-amazon-s3):

1. Click the **+** icon next to the **queries/js** and choose your S3 datasource.
2. Select the method **Create a new file** from the Commands drop-down.
3. Specify the necessary parameters, including the bucket name and file type. When uploading data from the Camera widget, select the `base64` option.
4. In the content body, add the following:

```js
//For image
{"data": {{Camera1.imageDataURL}}}

//For video
{"data": {{Camera1.videoDataURL}}}
```

5. Configure the **onImageCapture/onVideoSave** event to run the query. 

Upon capturing an image or video using the camera widget, the resulting file would be automatically uploaded to the S3 bucket.


## Properties

Properties allow you to customize the widget, connect it to other widgets and trigger events on user actions.


### Widget properties

These properties are present in the property pane of the widget. The following table lists all the widget properties.

| Property            	|         Data type        	| Description                                                                                                                                                                                                                                                                                                                                                                                            	|
|---------------------	|:------------------------:	|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| **Mode**     | Button | Toggle between Image and Video modes.                                                                                                                          |
| **Visible**  | Boolean| Controls the visibility of the widget on the page. When set to off, the widget is not visible in published apps. It appears translucent in Edit mode. |
| **Disabled** | Boolean| Disables the widget, making it inactive and preventing user interaction. It remains visible on the page.                                |
| **Mirrored** | Boolean| Enables mirroring of the captured image. Only applicable to image capture mode.                                                                   |

### Reference properties

These properties can be referenced in other widgets, queries, or JS functions using the dot operator. For instance, to get the visibility status, you can use `Camera1.isVisible`.


| Property            	|         Data type        	| Description                                                                                                                                                                                                                                                                                                                                                                                            	|
|---------------------	|:------------------------:	|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| **imageBlobURL**    | String| Blob URL of the image, allowing the image to be stored for future use. | 
| **imageDataURL**    | String| Data URL format of the image, enabling it to be embedded inline in various applications. | 
| **imageRawBinary**  | String| Binary file format of the image, providing a means to store the image for future use. | 
| **videoBlobURL**    | String| Blob URL of the video to store the image for future use.                   |
| **videoDataURL**    | String| Data URL format of the video, allowing it to be embedded inline in different applications.| 
| **videoRawBinary**  | String| Binary file format of the image to store the image for future use.         | 


### Style properties

Style properties allow you to change the look and feel of the widget. All of these properties are present in the property pane of the widget.


|         Property         	| Data type 	|                                                                                                          Description                                                                                                          	|
|:------------------------:	|-----------	|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:	|
| **Border Radius** | String | Rounds the corners of the widget's outer edge. With JS enabled, this accepts valid CSS [`border-radius`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) values. |
| **Box Shadow**  | String  | Casts a drop shadow from the frame of the widget. With JS enabled, this accepts valid CSS [`box-shadow`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) values.    |


### Events

When the event is triggered, these event handlers can run queries, JS code, or other supported [actions](/reference/appsmith-framework/widget-actions).


| Events              | Description                                                                                                                                       |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| **onImageSave** | Specifies the action to be performed when the user saves an image.  |
| **onVideoSave** | Specifies the action to be performed when the user saves a video. |
