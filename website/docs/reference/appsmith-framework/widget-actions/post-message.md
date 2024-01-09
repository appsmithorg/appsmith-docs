---
toc_max_heading_level: 2
description: Communicate between Appsmith and Iframe widget.
---
# postWindowMessage()

Appsmith provides a way to enable safe cross-origin communication between different [Window](https://developer.mozilla.org/en-US/docs/Web/API/Window) objects such as application or parent window and iframes using the postWindowMessage() function.

`postWindowMessage()` is used to send messages between parent apps or windows and child iframes.

## Signature

```javascript
postWindowMessage(message, targetIframe, targetOrigin)
```

### Parameters

#### message

<dd>

The message to send to the target iframe or window. Most JavaScript values are acceptable here, except `null` and `undefined`. This is an empty string (`""`) by default.

</dd>

#### targetIframe

<dd>

A string that sets where to send the message. If its value is `"window"`, the message is sent to the parent application’s window (where Appsmith is embedded). To send a message to an iframe embedded within Appsmith, the string should be the name of the Iframe widget. This parameter is `"window"` by default.

</dd>

#### targetOrigin

<dd>

A string that is the URL or domain where messages are allowed to be sent. A value of `"*"` allows sending to any URL. To limit sending messages to only the parent application where Appsmith is embedded, enter the URL of the parent application. By default, this parameter is `"*"`.

</dd>

To see examples of `postWindowMessage()`, take a look at the [sample app](https://app.appsmith.com/applications/61f3d1949d6d6a6720c98681/pages/61f3d1949d6d6a6720c98684).


## See also
- [windowMessageListener()](/reference/appsmith-framework/widget-actions/window-message-listener)
- [unlistenWindowMessage()](/reference/appsmith-framework/widget-actions/unlisten-window-message)
- [Send Messages Between an App and Iframe](/build-apps/how-to-guides/Communicate-Between-an-App-and-Iframe)
- [Send Messages Between Appsmith and Parent App](/advanced-concepts/embed-appsmith-into-existing-application#send-messages-between-appsmith-and-parent-app)
