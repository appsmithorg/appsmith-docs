---
Description: This page provides information on how to use the Audio widget to play MP3, WAV, OGG audio files. It also supports URLs from YouTube, Facebook, Twitch, SoundCloud, Streamable, Vimeo, Wistia, Mixcloud, and DailyMotion. 
---
# Audio

This page provides information on using the Audio widget to play MP3, WAV, OGG audio files. It also supports URLs from YouTube, Facebook, Twitch, SoundCloud, Streamable, Vimeo, Wistia, Mixcloud, and DailyMotion. 

<VideoEmbed host="youtube" videoId="FhY6-yUixto" title="Using the Audio Widget" caption="Using the Audio Widget"/>

## Content properties

These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.


### Data

#### URL `string`

<dd>

Specifies the audio source to be played. It supports various formats such as MP3, WAV, and OGG. 

*Example*:
```js
https://assets.appsmith.com/widgets/birds_chirping.mp3
```

You can display dynamic data by binding the response from a query or a JavaScript function to the **URL** property. For instance, if you have a table with a column containing audio URLs, clicking on a specific row plays the corresponding audio:

*Example*:

```js
{{Table1.selectedRow.audioURL}}
```



</dd>

### General

#### Auto Play `boolean`

<dd>

Enables the audio to play automatically on page load, without requiring any action from the user. Default value is `false`.

</dd>

#### Visible `boolean`

<dd>

Controls the visibility of the widget. If you turn off this property, the widget would not be visible in View Mode. Additionally, you can use JavaScript by clicking on **JS** next to the **Visible** property to conditionally control the widget's visibility. The default value for the property is `true`.


For example, if you want to make the widget visible only when the user selects "Yes" from a Select widget, you can use the following JavaScript expression: 
```js
{{Select1.selectedOptionValue === "Yes"}}
```



</dd>


#### Animate Loading `boolean`


<dd>

This property controls whether the widget is displayed with a loading animation. When enabled, the widget shows a skeletal animation during the loading process. Additionally, you can control it through JavaScript by clicking on the <code>JS</code> next to the property. The default value for the property is `true`.

</dd>

### Events

When the event is triggered, these event handlers can run queries, JS code, or other [actions](/reference/appsmith-framework/widget-actions).

#### onPlay

<dd>
Specifies the action to be executed when the audio starts playing.

</dd>

#### onPause

<dd>
Specifies the action to be performed when the audio is paused.

</dd>

#### onEnd

<dd>

Specifies the action to be taken when the audio playback is completed.

</dd>


## Reference properties

Reference properties are properties that are not available in the property pane but can be accessed using the dot operator in other widgets or JavaScript functions. They provide additional information or allow interaction with the widget programmatically. For instance, to get the visibility status, you can use `Audio1.isVisible`.

#### autoPlay `boolean`

<dd>

Indicates the current state of the widget's **Auto Play** setting.

*Example:*
```js
{{Audio1.autoPlay}}
```

</dd>


#### playState `string`

<dd>

Indicates the current state of the Audio widget's sound playback. It is represented by a string with values:

* PLAYING: Indicates that the audio is currently playing.
* NOT_STARTED: Represents the state when the audio has not started playing yet.
* PAUSED: Indicates that the audio is paused.
* ENDED: Represents the state when the audio playback has ended.

*Example:*
```js
{{Audio1.playState}}
```

</dd>

#### playing `boolean`


<dd>

Indicates the current playing state of the widget. When the value is `true`, it means the audio is playing.

*Example:*
```js
{{Audio1.playing}}
```


</dd>
 

## Methods

Widget property setters enable you to modify the values of widget properties at runtime, eliminating the need to manually update properties in the editor.

These methods are asynchronous and return a [Promise](/core-concepts/writing-code/javascript-promises#using-promises-in-appsmith). You can use the `.then()` block to ensure execution and sequencing of subsequent lines of code in Appsmith.


#### setPlaying (param: boolean): Promise

<dd>

Updates the playing state of the Audio widget. When the `setPlaying` method is called with `true`, the audio starts playing, and when called with `false`, the audio stops playing.


*Example*:

```js
Audio1.setPlaying(true)
```



</dd>


#### setURL (param: string): Promise

<dd>

Updates the URL of the audio to be played in the audio widget. Provide the desired URL as a string parameter to the `setURL` method. 

*Example*:

```js
Audio1.setURL('<https://example.com/audio.mp3>')
```


</dd>


#### setVisibility (param: boolean): Promise

<dd>

Updates the visibility of the Audio widget.

*Example*:

```js
Audio1.setVisibility(true)
```


</dd>