# Video

A widget for playing a variety of URLs, including file paths, YouTube, Facebook, Twitch, SoundCloud, Streamable, Vimeo, Wistia, Mixcloud, and DailyMotion.

{% embed url="https://youtu.be/KvIWaTOmZPo" %}

## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

### Widget Properties

These properties allow you to edit the video widget. All these properties are present in the property pane of the widget. The following table lists all the widget properties.

| Property            | Description                                                                                                          |
| ------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **URL**             | Renders the video from the URL.                                                                                      |
| **AutoPlay**        | Plays video automatically, without action from a user.                                                               |
| **Visible**         | Controls widget's visibility on the page. When turned off, the widget will not be visible when the app is published. |
| **Animate Loading** | Allows you to control a widget’s animation on the page load.                                                         |

### Binding Properties

These properties help you share values between widgets and also allow you to easily access the widget property within Queries or JS functions.

| Property      | Description                                                              | Code Snippet          |
| ------------- | ------------------------------------------------------------------------ | --------------------- |
| **autoPlay**  | This parameter indicates whether or not the autoplay feature is enabled. | `{{Video.autoPlay}}`  |
| **playState** | This field shows whether or not a video is currently playing.            | `{{Video.playState}}` |

### Events

They are a set of actions that you can perform on the widget. The following table lists the actions:

| Events      | Description                                                                                           |
| ----------- | ----------------------------------------------------------------------------------------------------- |
| **onPlay**  | Sets the action to be run when the video plays. See a list of [supported actions](broken-reference).  |
| **onPause** | Sets the action to be run when the video pauses. See a list of [supported actions](broken-reference). |
| **onEnd**   | Sets the action to be run when the video ends. See a list of [supported actions](broken-reference).   |

### Styles

Style properties allow you to change the look and feel of the widget.

| Style                | Description                                            |
| -------------------- | ------------------------------------------------------ |
| **Background color** | Sets the widget's background color.                    |
| **Border Radius**    | Allows you to define curved corners.                   |
| **Box Shadow**       | Allows you to choose from the available shadow styles. |
