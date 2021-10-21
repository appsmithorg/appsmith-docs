---
description: Iframe widget is used to display iframes in your app.
---

# Iframe



![](../.gitbook/assets/cleanshot-2021-07-04-at-23.03.52%20%281%29.gif)

### Properties

| Property | Description |
| :--- | :--- |
| **source** | Sets the URL of the page to embed. |
| **srcDoc** | Sets the inline HTML to embed, overriding the src attribute. If a browser does not support the srcdoc attribute, it will fall back to the URL in the src attribute. |
| **title** | Labels the content of the page to embed. |
| **borderColor** | Sets the color of the border surrounding the page to embed. |
| **borderOpacity** | Sets the color opacity of the border surrounding the page to embed. |
| **borderWidth** | Sets the width of the border surrounding the page to embed. |

| Action | Description |
| :--- | :--- |
| **onURLChanged** | Sets the action to be run when the source url is changed. |
| **onMessageReceived** | Sets the action to be run when a postMessage event is received from the embedded page. |

