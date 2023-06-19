# Audio

This page provides information on how to use the Audio widget to play MP3, WAV, OGG audio files. It also supports URLs from YouTube, Facebook, Twitch, SoundCloud, Streamable, Vimeo, Wistia, Mixcloud, and DailyMotion. 

<VideoEmbed host="youtube" videoId="FhY6-yUixto" title="Using the Audio Widget" caption="Using the Audio Widget"/>

## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

### Widget properties

These properties allow you to edit the widget. All of these properties are present in the property pane of the widget.

| Property | Data type | Description                                                                                                                                                    |
| ----------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **URL**        |  String  | URL of the audio source to play. Supports MP3, WAV, OGG format.                                                                                                                                                                                                                   |
| **Auto Play**     |   Boolean   | Plays audio automatically on page load, without any action from the user.                                                                                                                                                                             |
| **Visible**       |   Boolean   | Controls the widget's visibility on the page.                                                                                     |
| **Animate Loading**  |   Boolean | Allows you to control a widget’s animation on the page load.|

### Reference properties

These properties allow you to bind your widget with any other widget in queries or JS objects. For instance, you can use `Audio1.isVisible` to get the visibility status.

| Property | Data type | Description                                                                                                                                                    |
| ----------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **autoPlay**   |   Boolean  | Reflects the state of the widget's **Auto Play** setting.                                                                                 |
| **playState**  |   String  | Shows whether the Audio widget is currently playing sound. Represented by a _(string)_ with value "NOT\_STARTED", "PLAYING," "PAUSED," or "ENDED." |
| **playing**  |   Boolean  | This property provides the playing state of the widget. |

## Events

When the event is triggered, these event handlers can run queries, JS code, or other supported [actions](/reference/appsmith-framework/widget-actions)


| Events      | Description                                                                                                                       |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **onPlay**  | Sets the action to run when the audio begins playing.   |
| **onPause** | Sets the action to run when the audio is paused.    |
| **onEnd**   | Sets the action to run when the audio ends.            |


## Methods

The methods provided by the widget allow users to dynamically update and manipulate its properties, facilitating the creation of dynamic and interactive applications without the need for manual property modifications. 

These setter methods are asynchronous, and users have the option to either await them or use the `.then()` block to ensure appsmith reactivity is maintained for subsequent lines of code.


#### setPlaying `boolean`

<dd>

Updates the playing state of the Audio widget. When the `setPlaying` method is called with `true`, the audio starts playing, and when called with `false`, the audio stops playing.


*Example*:

```js
Audio1.setPlaying(true).then(() => {
  // Perform additional actions or write code to be executed after the playing state is set
});
```

</dd>


#### setURL `string`

<dd>

Updates the URL of the audio to be played in the audio widget. Provide the desired URL as a string parameter to the `setURL` method. 

*Example*:

```js
Audio1.setURL('<https://example.com/image.mp3>').then(() => {
  // code to be executed after URL is set
})

```

</dd>


#### setVisibility `boolean`

<dd>

Updates the visibility of the Audio widget.

*Example*:

```js
Audio1.setVisibility(true).then(() => {
  // code to be executed after visibility is set
})

```

</dd>