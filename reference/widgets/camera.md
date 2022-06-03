# Camera

The camera widget powers users to capture images and videos from their applications and share the data for further use.

## Properties

Properties allow you to edit the camera widget, connect it with other widgets and customize the user actions.

### Widget Properties

These properties allow you to edit the camera widget. All these properties are present in the property pane of the widget. The following table lists all the widget properties.

| Property     | Description                                                                                                                       |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| **Mode**     | Toggle between Image and Video modes                                                                                              |
| **Visible**  | Controls widget's visibility on the page. When turned off, the widget will not be visible when the app is published               |
| **Disabled** | Disables input/selection to the widget. The widget will remain visible to the user, but user input/selection will not be allowed. |
| **Mirrored** | Mirrors the image being captured, toggled on by default. Only available for image capture.                                        |

### Binding Properties

These properties allow you to bind your camera widget with any other widget in queries or JS objects. The following table lists all the binding properties.

| Internal Property  | Description                                                                | Snippet                                    |
| ------------------ | -------------------------------------------------------------------------- | ------------------------------------------ |
| **imageBlobURL**   | Blob URL of the image to store the image for future use.                   | `{{<camerawidget_name>.imageBlobURL}}`     |
| **imageDataURL**   | Data URL format of the image to embed it inline in different applications. | `{{<camerawidget_name>.`imageDataURL`}}`   |
| **imageRawBinary** | Binary file format of the image to store the image for future use.         | `{{<camerawidget_name>.`imageRawBinary`}}` |
| **videoBlobURL**   | Blob URL of the video to store the image for future use.                   | `{{<camerawidget_name>.`videoBlobURL`}}`   |
| **videoDataURL**   | Data URL format of the video to embed it inline in different applications. | `{{<camerawidget_name>.`videoDataURL`}}`   |
| **videoRawBinary** | Binary file format of the image to store the image for future use.         | `{{<camerawidget_name>.`videoRawBinary`}}` |

### Events

| Action               | Description                                                                                         |
| -------------------- | --------------------------------------------------------------------------------------------------- |
| **onImageCapture**   | Sets the action to be run when the user captures an Image. See a list of supported actions          |
| **onRecordingStart** | Sets the action to be run when the user starts the video recording. See a list of supported actions |
| **onRecordingStop**  | Sets the action to be run when the user stops the video recording.                                  |
