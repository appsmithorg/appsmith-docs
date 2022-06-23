# Audio Recorder

The Audio recorder widget allows users to record using their microphone, listen to its playback and export the data to a data source.

{% embed url="https://youtu.be/fMovD6hfHQU" %}

## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

### Widget Properties

These properties allow you to edit the Audio Recorder widget. All of these properties are present in the property pane of the widget. The following table lists all the widget properties.

| Widget Property     | Description                                                                                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Disabled**        | Makes the widget un-clickable or unusable. The widget will remain visible to the user but user interaction will not be allowed.                                                                        |
| **Visible**         | Controls widget's visibility on the page. When turned off: The widget will not be visible when the app is published. It appears translucent when in Edit mode.                                         |
| **Animate Loading** | When turned off, the widget will load without any skeletal animation. You can use a toggle switch to turn it on/off. You can also turn it off/on using javascript by clicking the JS label next to it. |

### Binding Properties

These properties allow you to bind your Audio Recorder widget with any other widget in queries or JS objects. The following table lists all the binding properties.

| Binding Property   | Description                                                                                                                                                   |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **blobURL**        | Blob URL of the audio, used to store the audio for future use.                                                                                                |
| **dataURL**        | Data URL format (Base64) of the audio, used to embed it inline within different applications.                                                                 |
| **rawBinary**      | The audio file in binary format, used to store the audio for future use.                                                                                      |
| **isVisible**      | Reflects the state of the widget's **Visible** setting _(bool)_.                                                                                              |
| **isDisabled**     | Reflects the state of the widget's **Disabled** setting _(bool)_.                                                                                             |
| **animateLoading** | Reflects the state of the widget's **Animate Loading** setting _(bool)_.                                                                                      |
| **accentColor**    | Represents the widget's accent color as a hexadecimal color code _(string)_.                                                                                  |
| **borderRadius**   | Represents the widget's **Border Radius** as a CSS-sytnax [`border-radius`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) value _(string)_. |
| **boxShadow**      | Represents the widget's **Box Shadow** as a CSS-sytnax [`box-shadow`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) value _(string)_.          |
| **iconColor**      | Represents the widget's **Icon Color** as a CSS-sytnax [`color` ](https://developer.mozilla.org/en-US/docs/Web/CSS/color)value _(string)_.                    |

### Events

You can define functions that will be called when these events are triggered in the widget.

| Event                   | Description                                          |
| ----------------------- | ---------------------------------------------------- |
| **onRecordingStart**    | Sets an action to be executed when recording starts. |
| **onRecordingComplete** | Sets an action to be executed when recording ends.   |

### Styles

Style properties allow you to change the look and feel of the widget.

| Style Property    | Description                                                                                                                                                                      |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Button Color**  | Sets the color of the widget's button. With JS enabled, accepts valid CSS-sytnax [`color` ](https://developer.mozilla.org/en-US/docs/Web/CSS/color)values _(string)_.            |
| **Border Radius** | Rounds the corners of the widget's outer edge. With JS enabled, this accepts valid CSS [`border-radius`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) values. |
| **Box Shadow**    | Casts a drop shadow from the frame of the widget. With JS enabled, this accepts valid CSS [`box-shadow`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) values.    |
| **Icon Color**    | Sets the color of the widget's Icon. With JS enabled, accepts valid CSS-sytnax [`color` ](https://developer.mozilla.org/en-US/docs/Web/CSS/color)values _(string)_.              |
