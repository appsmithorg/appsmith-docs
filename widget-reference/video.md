---
description: >-
  A widget for playing a variety of URLs, including file paths, YouTube,
  Facebook, Twitch, SoundCloud, Streamable, Vimeo, Wistia, Mixcloud, and
  DailyMotion.
---

# Video

{% embed url="https://youtu.be/KvIWaTOmZPo" %}

| Property     | Description                                                                                                         |
| ------------ | ------------------------------------------------------------------------------------------------------------------- |
| **URL**      | Renders the video from the URL                                                                                      |
| **AutoPlay** | Plays video automatically, without action from a user                                                               |
| **Visible**  | Controls widget's visibility on the page. When turned off, the widget will not be visible when the app is published |

| Action      | Description                                                                                                                                                    |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **onPlay**  | Sets the action to be run when the video plays. Some default supported actions are: Call API, Navigate to Page, Navigate to URL, Open Modal, or Show Message.  |
| **onPause** | Sets the action to be run when the video pauses. Some default supported actions are: Call API, Navigate to Page, Navigate to URL, Open Modal, or Show Message. |
| **onEnd**   | Sets the action to be run when the video ends. Some default supported actions are: Call API, Navigate to Page, Navigate to URL, Open Modal, or Show Message.   |
