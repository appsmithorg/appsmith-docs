# Audio

The Audio widget allows you to play a variety of URLs, including file paths, YouTube, Facebook, Twitch, SoundCloud, Streamable, Vimeo, Wistia, Mixcloud, and DailyMotion.

<VideoEmbed host="youtube" videoId="FhY6-yUixto" title="How to use Audio Widget" caption="How to use Audio Widget"/>

## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

### Widget properties

These properties allow you to edit the Audio widget. All of these properties are present in the property pane of the widget. The following table lists all the widget properties.

| Property            | Description                                                                                                                                                                                                                                           |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **URL**             | URL of the audio source to play.                                                                                                                                                                                                                      |
| **Auto Play**       | Plays audio automatically on page load, without any action from the user.                                                                                                                                                                             |
| **Visible**         | Controls the widget's visibility on the page. When turned off: The widget isn't visible when the app is published. It appears translucent when in Edit mode.                                                                                    |
| **Animate Loading** | When turned off, the widget loads without any skeletal animation. You can use a toggle switch to turn it on/off. You can also turn it off/on using JavaScript by clicking the JS label next to it and writing code that evaluates to a _boolean_. |

### Binding properties

These properties allow you to bind your Audio widget with any other widget in queries or JS objects. The following table lists all the binding properties.

| Binding Property | Description                                                                                                                                        |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **autoPlay**     | Reflects the state of the widget's **Auto Play** setting _(bool)_.                                                                                 |
| **playState**    | Shows whether the Audio widget is currently playing sound. Represented by a _(string)_ with value "NOT\_STARTED", "PLAYING," "PAUSED," or "ENDED." |

### Events

You can define functions that are called when these events are triggered in the widget.

| Action      | Description                                                                                                                      |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **onPlay**  | Sets the action to run when the audio begins playing. See a list of [supported actions](../appsmith-framework/widget-actions/).  |
| **onPause** | Sets the action to run when the audio is paused. See a list of [supported actions](../appsmith-framework/widget-actions/).       |
| **onEnd**   | Sets the action to run when the audio ends. See a list of [supported actions](../appsmith-framework/widget-actions/).            |
