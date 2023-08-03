---
description: >-
  Audio Recorder widget reference
---

# Audio Recorder

This page provides information on how to use the Audio Recorder widget to record audio using your microphone. The recorded audio is saved in WAV format.

## Content properties

These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.

### General

#### Visible `boolean`

<dd>

Controls the visibility of the widget. If you turn off this property, the widget is not visible in View mode. Additionally, you can use JavaScript by clicking on **JS** next to the **Visible** property to control the widget's visibility conditionally.

For example,  if you want to make the widget visible only when the user checks an item in a Checkbox widget, you can use the following JavaScript expression in the visible property of the Audio Recorder widget:

```js
{{Checkbox1.isChecked}}
```
</dd>

#### Disabled `boolean`

<dd>

Prevents users from selecting the widget. Even though the widget remains visible, user input is not permitted. Additionally, you can use JavaScript by clicking on **JS** next to the `Disabled` property to control the widget's disabled state conditionally.

For example, if you want to allow only a specific user to interact with the Audio Recorder widget, you can use the following JavaScript expression in the disabled property: 
```js
{{appsmith.user.email=="john@appsmith.com"?false:true}}
```

</dd>

#### Animate Loading `boolean`

<dd>

Controls whether the widget is displayed with a loading animation. When enabled, the widget shows a skeletal animation during the loading process. Additionally, you can control it through JavaScript by clicking on the **JS** next to the property.

</dd>

### Events

#### onRecordingStart

<dd>

Allows you to configure one or multiple actions (Framework functions, queries, or JS functions) to be executed when the recording starts.

</dd>

#### onRecordingComplete

<dd>

Allows you to configure one or multiple actions (Framework functions, queries, or JS functions) to be executed when the recording ends.

</dd>

## Style properties

Style properties allow you to change the look and feel of the widget.

### Styles

#### Icon color `string`

<dd>

Sets the color of the mic icon in the Audio Recorder. If JavaScript is enabled, you can specify valid CSS-sytnax [`color` ](https://developer.mozilla.org/en-US/docs/Web/CSS/color) values to set the color of the icon.

</dd>

#### Button color `string`

<dd>

Sets the color of the widget's button. If JavaScript is enabled, you can specify valid CSS-sytnax [`color` ](https://developer.mozilla.org/en-US/docs/Web/CSS/color) values to set the color of the button.

</dd>

### Border and shadow

#### Border radius `string`

<dd>

Applies rounded corners to the outer edge of the widget. If JavaScript is enabled, you can specify valid [CSS border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) to adjust the radius of the corners.

</dd>

#### Box Shadow `string`
 

<dd>

This property adds a drop shadow effect to the frame of the widget. If JavaScript is enabled, you can specify valid [CSS box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) values to customize the appearance of the shadow.

</dd>

## Reference properties

Reference properties enable you to access the widget's data and state using the dot operator in other widgets or JavaScript functions. They provide additional information or allow interaction with the widget programmatically. For instance, to retrieve the visibility status of a Select widget, you can use `AudioRecorder1.isVisible`.


#### blobURL `string`

<dd>

Returns a blob URL that stores the audio for future use.

*Example:*
```js
{{AudioRecorder1.blobURL}}
```

</dd>

#### dataURL `string`

<dd>

Data URL format (Base64) of the audio, used to embed it inline within different applications.

*Example:*
```js
{{AudioRecorder1.dataURL}}
```

</dd>

#### rawBinary `string`

<dd>

Returns the audio file in binary format, suitable for storing the audio for future use.

*Example:*
```js
{{AudioRecorder1.rawBinary}}
```

</dd>

#### isVisible `boolean`

<dd>

The `isVisible` property indicates the visibility state of a widget, with true indicating it is visible and false indicating it is hidden.

*Example:*
```js
{{AudioRecorder1.isVisible}}
```

</dd>


## Methods

Widget property setters enable you to modify the values of widget properties at runtime, eliminating the need to manually update properties in the editor.

These methods are asynchronous and return a [Promise](/core-concepts/writing-code/javascript-promises#using-promises-in-appsmith). You can use the `.then()` block to ensure execution and sequencing of subsequent lines of code in Appsmith.

#### setVisibility `boolean`

<dd>

Sets the visibility of the Audio Recorder widget.

*Example*:

```js
AudioRecorder1.setVisibility(true)
```


</dd>


#### setDisabled `boolean`

<dd>

Sets the disabled state of the widget.

*Example*:

```js
AudioRecorder1.setDisabled(false)
```

</dd>

## Upload audio to S3

To upload recorded audio to [Amazon S3](/connect-data/reference/querying-amazon-s3):

1. Click the **+** icon next to the **queries/js** and choose your S3 datasource.
2. Select the method **Create a new file** from the Commands drop-down.
3. Provide the required parameters such as the bucket name and file type.
4. In the content body, add the following:

```
{"data": {{AudioRecorder1.dataURL}}}
```

4. Configure the **onRecordingComplete** event to run the query. 

When recording is complete, the audio WAV file would be uploaded to the S3 Bucket.


