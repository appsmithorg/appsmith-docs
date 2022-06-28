# Audio

Audio widget allows you to play a variety of URLs, including file paths, YouTube, Facebook, Twitch, SoundCloud, Streamable, Vimeo, Wistia, Mixcloud, and DailyMotion.

{% embed url="https://youtu.be/FhY6-yUixto" %}

## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

### Widget Properties

These properties allow you to edit the Audio widget. All of these properties are present in the property pane of the widget. The following table lists all the widget properties.

| Property            | Description                                                                                                                                                                                                                                           |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **URL**             | URL of the audio source to play.                                                                                                                                                                                                                      |
| **Auto Play**       | Plays audio automatically on page load, without any action from the user.                                                                                                                                                                             |
| **Visible**         | Controls the widget's visibility on the page. When turned off: The widget will not be visible when the app is published. It appears translucent when in Edit mode.                                                                                    |
| **Animate Loading** | When turned off, the widget will load without any skeletal animation. You can use a toggle switch to turn it on/off. You can also turn it off/on using javascript by clicking the JS label next to it and writing code that evaluates to a _boolean_. |

### Binding Properties

These properties allow you to bind your Audio widget with any other widget in queries or JS objects. The following table lists all the binding properties.

| Binding Property   | Description                                                                                                                                        |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **url**            | Contains the **URL** of the widget's audio source _(string)_.                                                                                      |
| **autoPlay**       | Reflects the state of the widget's **Auto Play** setting _(bool)_.                                                                                 |
| **isVisible**      | Reflects the state of the widget's **Visible** setting _(bool)_.                                                                                   |
| **animateLoading** | Reflects the state of the widget's **Animate Loading** setting _(bool)_.                                                                           |
| **playState**      | Shows whether the Audio widget is currently playing sound. Represented by a _(string)_ with value "NOT\_STARTED", "PLAYING", "PAUSED", or "ENDED". |

### Events

You can define functions that will be called when these events are triggered in the widget.

| Action      | Description                                                                                                                                                         |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **onPlay**  | Sets the action to run when the audio begins playing. Some default supported actions are: Call API, Navigate to Page, Navigate to URL, Open Modal, or Show Message. |
| **onPause** | Sets the action to run when the audio is paused. Some default supported actions are: Call API, Navigate to Page, Navigate to URL, Open Modal, or Show Message.      |
| **onEnd**   | Sets the action to run when the audio ends. Some default supported actions are: Call API, Navigate to Page, Navigate to URL, Open Modal, or Show Message.           |
