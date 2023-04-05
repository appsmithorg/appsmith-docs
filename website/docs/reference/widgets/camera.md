# Camera

The camera widget powers users to capture images and videos from their applications and share the data for further use.

## Properties

Properties allow you to edit the camera widget, connect it with other widgets and customize the user actions.

### Widget properties

These properties allow you to edit the Camera widget. All of these properties are present in the property pane of the widget. The following table lists all the widget properties.

| Property     | Description                                                                                                                                                    |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Mode**     | Toggle between Image and Video modes.                                                                                                                          |
| **Visible**  | Control widget's visibility on the page. When turned off: The widget is not visible when the app is published. It appears translucent when in Edit mode. |
| **Disabled** | Makes the widget inactive or unusable. The widget remains visible to the user but user interaction is not allowed.                                |
| **Mirrored** | Mimics the image being captured, toggled on by default. Only available for image capture.                                                                     |

### Binding properties

These properties allow you to bind your camera widget with any other widget in queries or JS objects. The following table lists all the binding properties.

| Binding Property  | Description                                                                | Snippet                                    |
| ------------------ | -------------------------------------------------------------------------- | ------------------------------------------ |
| **imageBlobURL**   | Blob URL of the image to store the image for future use.                   | `{{<camerawidget_name>.imageBlobURL}}`     |
| **imageDataURL**   | Data URL format of the image to embed it inline in different applications. | `{{<camerawidget_name>.`imageDataURL`}}`   |
| **imageRawBinary** | Binary file format of the image to store the image for future use.         | `{{<camerawidget_name>.`imageRawBinary`}}` |
| **videoBlobURL**   | Blob URL of the video to store the image for future use.                   | `{{<camerawidget_name>.`videoBlobURL`}}`   |
| **videoDataURL**   | Data URL format of the video to embed it inline in different applications. | `{{<camerawidget_name>.`videoDataURL`}}`   |
| **videoRawBinary** | Binary file format of the image to store the image for future use.         | `{{<camerawidget_name>.`videoRawBinary`}}` |

### Events

| Event           | Description                                                                                                                                                                                                                                            |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **onImageSave** | Sets an action to take place when the user saves an image. Can be set from the GUI list of common actions (See a list of [supported actions](../appsmith-framework/widget-actions/).), or you can define a custom JavaScript function to call instead. |
| **onVideoSave** | Sets an action to take place when the user saves a video. Can be set from the GUI list of common actions (See a list of [supported actions](../appsmith-framework/widget-actions/).), or you can define a custom JavaScript function to call instead.  |
