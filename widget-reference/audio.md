# Audio

Audio widget allows you to play a variety of URLs, including file paths, YouTube, Facebook, Twitch, SoundCloud, Streamable, Vimeo, Wistia, Mixcloud, and DailyMotion.

{% embed url="https://youtu.be/FhY6-yUixto" %}

### Properties

| Property     | Description                                                                                                         |
| ------------ | ------------------------------------------------------------------------------------------------------------------- |
| **URL**      | URL from which audio is to be played                                                                                |
| **AutoPlay** | Plays audio automatically, without action from a user                                                               |
| **Visible**  | Controls widget's visibility on the page. When turned off, the widget will not be visible when the app is published |

| Action      | Description                                                                                                                                                 |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **onPlay**  | Sets the action to run when the audio plays. Some default supported actions are: Call API, Navigate to Page, Navigate to URL, Open Modal, or Show Message.  |
| **onPause** | Sets the action to run when the audio pauses. Some default supported actions are: Call API, Navigate to Page, Navigate to URL, Open Modal, or Show Message. |
| **onEnd**   | Sets the action to run when the audio ends. Some default supported actions are: Call API, Navigate to Page, Navigate to URL, Open Modal, or Show Message.   |
