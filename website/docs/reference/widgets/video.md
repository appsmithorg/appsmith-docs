# Video

A widget for playing a variety of URLs, including file paths, YouTube, Facebook, Twitch, SoundCloud, Streamable, Vimeo, Wistia, Mixcloud, and DailyMotion.


## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

### Widget properties

These properties allow you to edit the video widget. All these properties are present in the property pane of the widget. The following table lists all the widget properties.

| Property            | Description                                                                                                          |
| ------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **URL**             | Renders the video from the URL.                                                                                      |
| **Autoplay**        | Plays video automatically, without action from a user.                                                               |
| **Visible**         | Controls widget's visibility on the page. When turned off, the widget isn't visible when the app is published. |
| **Animate Loading** | Allows you to control a widget’s animation on the page load.                                                         |

### Binding properties

These properties help you share values between widgets and also allow you to easily access the widget property within Queries or JS functions.

| Property      | Description                                                              | Code Snippet          |
| ------------- | ------------------------------------------------------------------------ | --------------------- |
| **autoPlay**  | This parameter indicates whether the auto play feature is enabled. | `{{Video.autoPlay}}`  |
| **playState** | This field shows whether a video is currently playing.            | `{{Video.playState}}` |

### Events

They're a set of actions that you can perform on the widget. The following table lists the actions:

| Events      | Description                                                                                                                |
| ----------- | -------------------------------------------------------------------------------------------------------------------------- |
| **onPlay**  | Sets the action to be run when the video plays. See a list of [supported actions](../appsmith-framework/widget-actions/).  |
| **onPause** | Sets the action to be run when the video pauses. See a list of [supported actions](../appsmith-framework/widget-actions/). |
| **onEnd**   | Sets the action to be run when the video ends. See a list of [supported actions](../appsmith-framework/widget-actions/).   |

### Styles

Style properties allow you to change the look and feel of the widget.

| Style                | Description                                            |
| -------------------- | ------------------------------------------------------ |
| **Background color** | Sets the widget's background color.                    |
| **Border Radius**    | Allows you to define curved corners.                   |
| **Box Shadow**       | Allows you to choose from the available shadow styles. |

## Methods

Widget property setters enable you to modify the values of widget properties at runtime, eliminating the need to manually update properties in the editor.

These methods are asynchronous, and users have the option to either await them or use the `.then()` block to ensure appsmith reactivity is maintained for subsequent lines of code.


#### setVisibility `boolean`

<dd>

Sets the visibility of the widget.

*Example*:

```js
Video1.setVisibility(true)

//For appsmith reactivity, await the setter method or use the `.then()` block.
Video1.setVisibility(true).then(() => {
  // code to be executed after visibility is set
})

```

</dd>


#### setURL `string`

<dd>

Sets the URL of the video to be displayed in the widget.

*Example*:

```js
Video1.setURL('<https://example.com/video.mp4>')

//For appsmith reactivity, await the setter method or use the `.then()` block.
Video1.setURL('<https://example.com/video.mp4>').then(() => {
  // code to be executed after URL is set
})
```

</dd>


#### setPlaying `boolean`

<dd>
Sets the playing state of the Video widget.

*Example*:

```js
Video1.setPlaying(true)

//For appsmith reactivity, await the setter method or use the `.then()` block.
Video1.setPlaying(true).then(() => {
  // code to be executed after playing state is set
})
```
</dd>