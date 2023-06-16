# Audio Recorder

This page provides information on how to use the Audio Recorder widget to record audio using your microphone. The recorded audio is saved in WAV format.

<VideoEmbed host="youtube" videoId="fMovD6hfHQU" title="Using the Audio Recorder widget" caption="Using the Audio Recorder widget"/>


## Upload audio to S3

To upload recorded audio to [Amazon S3](/data/datasource-reference/querying-amazon-s3):

1. Click the **+** icon next to the **queries/js** and choose your S3 datasource.
2. Select the method **Create a new file** from the Commands drop-down.
3. Provide the required parameters such as the bucket name and file type.
4. In the content body, add the following:

```
{"data": {{AudioRecorder1.dataURL}}}
```

4. Configure the **onRecordingComplete** event to run the query. 

When recording is complete, the audio WAV file would be uploaded to the S3 Bucket.


## Properties

Properties allow you to customize the widget, connect it to other widgets and trigger events on user actions.


### Widget properties

These properties allow you to edit the widget. All of these properties are present in the property pane of the widget.

| Property            	|         Data type        	| Description                                                                                                                                                                                                                                                                                                                                                                                            	|
|---------------------	|:------------------------:	|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| **Disabled**     | Boolean   | Makes the widget inactive or unusable. The widget remains visible to the user but user interaction is not allowed.                                                                        |
| **Visible**        | Boolean   | Control widget's visibility on the page. When turned off: The widget isn't visible when the app is published. It appears translucent when in Edit mode.                                         |
| **Animate Loading**  | Boolean | When turned off, the widget loads without any skeletal animation. You can use a toggle switch to turn it on/off. You can also turn it off/on using JavaScript by clicking the JS label next to it. |

### Reference properties

These properties can be referenced in other widgets, queries, or JS functions using the dot operator. For instance, to get the visibility status, you can use `AudioRecorder1.isVisible`.


| Property            	|         Data type        	| Description                                                                                                                                                                                                                                                                                                                                                                                            	|
|---------------------	|:------------------------:	|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| **blobURL**   | String   | Blob URL of the audio, used to store the audio for future use.                                |
| **dataURL**    | String  | Data URL format (Base64) of the audio, used to embed it inline within different applications. |
| **rawBinary**   | String | The audio file in binary format, used to store the audio for future use.                      |
| **isVisible**   | Boolean | Reflects the state of the widget's Visible setting.                              |

### Style properties

Style properties allow you to change the look and feel of the widget.

| Property            	|         Data type        	| Description                                                                                                                                                                                                                                                                                                                                                                                            	|
|---------------------	|:------------------------:	|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| **Button Color** | String  | Sets the color of the widget's button. With JS enabled, accepts valid CSS-sytnax [`color` ](https://developer.mozilla.org/en-US/docs/Web/CSS/color)values _(string)_.            |
| **Border Radius** | String | Rounds the corners of the widget's outer edge. With JS enabled, this accepts valid CSS [`border-radius`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) values. |
| **Box Shadow**    | String | Casts a drop shadow from the frame of the widget. With JS enabled, this accepts valid CSS [`box-shadow`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) values.    |
| **Icon Color**    | String | Sets the color of the widget's Icon. With JS enabled, accepts valid CSS-sytnax [`color` ](https://developer.mozilla.org/en-US/docs/Web/CSS/color)values _(string)_.              |


## Events

When the event is triggered, these event handlers can run queries, JS code, or other supported [actions](/reference/appsmith-framework/widget-actions)


| Events              | Description                                                                                                                                       |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| **onRecordingStart**    | Sets an action to be executed when recording starts. |
| **onRecordingComplete** | Sets an action to be executed when recording ends.  |


