# Audio Recorder

The Audio recorder widget allows users to record using their microphone, listen to its playback and export the data to a data source.

<VideoEmbed host="youtube" videoId="fMovD6hfHQU" title="How to use Audio Recorder widget" caption="How to use Audio Recorder widget"/>


## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

### Widget properties

These properties allow you to edit the Audio Recorder widget. All of these properties are present in the property pane of the widget. The following table lists all the widget properties.

| Widget Property     | Description                                                                                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Disabled**        | Makes the widget inactive or unusable. The widget remains visible to the user but user interaction is not allowed.                                                                        |
| **Visible**         | Control widget's visibility on the page. When turned off: The widget isn't visible when the app is published. It appears translucent when in Edit mode.                                         |
| **Animate Loading** | When turned off, the widget loads without any skeletal animation. You can use a toggle switch to turn it on/off. You can also turn it off/on using JavaScript by clicking the JS label next to it. |

### Binding properties

These properties allow you to bind your Audio Recorder widget with any other widget in queries or JS objects. The following table lists all the binding properties.

| Binding Property | Description                                                                                   |
| ---------------- | --------------------------------------------------------------------------------------------- |
| **blobURL**      | Blob URL of the audio, used to store the audio for future use.                                |
| **dataURL**      | Data URL format (Base64) of the audio, used to embed it inline within different applications. |
| **rawBinary**    | The audio file in binary format, used to store the audio for future use.                      |
| **isVisible**    | Reflects the state of the widget's **Visible** setting _(bool)_.                              |

### Events

You can define functions are called when these events are triggered in the widget.

| Event                   | Description                                                                                                                    |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **onRecordingStart**    | Sets an action to be executed when recording starts. See a list of [supported actions](../appsmith-framework/widget-actions/). |
| **onRecordingComplete** | Sets an action to be executed when recording ends. See a list of [supported actions](../appsmith-framework/widget-actions/).   |

### Styles

Style properties allow you to change the look and feel of the widget.

| Style Property    | Description                                                                                                                                                                      |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Button Color**  | Sets the color of the widget's button. With JS enabled, accepts valid CSS-sytnax [`color` ](https://developer.mozilla.org/en-US/docs/Web/CSS/color)values _(string)_.            |
| **Border Radius** | Rounds the corners of the widget's outer edge. With JS enabled, this accepts valid CSS [`border-radius`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) values. |
| **Box Shadow**    | Casts a drop shadow from the frame of the widget. With JS enabled, this accepts valid CSS [`box-shadow`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) values.    |
| **Icon Color**    | Sets the color of the widget's Icon. With JS enabled, accepts valid CSS-sytnax [`color` ](https://developer.mozilla.org/en-US/docs/Web/CSS/color)values _(string)_.              |
