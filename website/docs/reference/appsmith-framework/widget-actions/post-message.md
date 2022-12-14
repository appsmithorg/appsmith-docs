# Post Message

The **Post message** action uses the `postWindowMessage()` function to enable safe cross-origin communication between different [Window](https://developer.mozilla.org/en-US/docs/Web/API/Window) objects; for example, between an app and an iframe embedded within it. This may be useful in situations like:

- Using Appsmith's [Iframe](/reference/widgets/iframe/) widget to embed other applications or pages.
- Embedding Appsmith in an iframe of a parent application.

## Signature

```javascript
postWindowMessage(message, targetIframe, targetOrigin)
```

### Arguments

| Argument Name | Description |
| ------------- | ----------- |
| **message** | This is the message to send to the target iframe or window. Most JavaScript values are acceptable here, except `null` and `undefined`. (Default: `""`) |
| **targetIframe** | This is the window to which you want to send the message. If its value is `"window"`, you are sending a message to the parent application’s window (where Appsmith is embedded). If you want to send a message to an iframe within Appsmith, enter the name of the iframe here. (Default: `"window"`) |
| **targetOrigin** | This is the URL to which you can send messages. The default value of "`*`" means the message can be sent to any URL. If you want to limit sending messages to only the parent application (in which Appsmith is embedded), enter the URL of the parent application here. (Default: `"*"`) |

To see examples of the **Post message** action, take a look at the [sample app](https://app.appsmith.com/applications/61f3d1949d6d6a6720c98681/pages/61f3d1949d6d6a6720c98684).

## Iframe widget in Appsmith app

### From Appsmith to embedded page

Imagine you are building an app in Appsmith that has an Iframe widget called `Iframe1` containing an embedded page. To send data to a page embedded in an Appsmith Iframe widget:

1. Drag and drop an [Input](/reference/widgets/input/) widget and a [Button](/reference/widgets/button) widget onto the canvas.
2. In the button's **onClick** event property, select **Post message**. Set the **Message** to `{{ Input1.text }}` and **Target iframe** to `Iframe1`.
3. On the canvas, enter your piece of data into the input widget, and click the button widget. The iframe has now received the message you sent.

:::note
If you want to try this but you need a page to receive your message, set up your iframe with this HTML string in its **srcDoc** property:

```html
<div id="target"></div>

<script>
    window.addEventListener('message', (event) => {
    const tgt = document.querySelector("#target")
        tgt.textContent = event.data
    });
</script>
```

When the iframe receives your message, it puts the message text into the `#target` div.
:::

### From embedded page to Iframe widget

Imagine you are building an app in Appsmith that has an Iframe widget called `Iframe1` containing an embedded page. To capture and handle a message that was sent to Appsmith from the page embedded in the iframe:

Use the iframe's [**onMessageReceived**](/reference/widgets/iframe#events) event in the properties pane. Choose an action or write code to be executed when the message is received from the embedded page. You can use the `Iframe1.message` property to access the content of the message that was received by Appsmith.

## Appsmith app embedded in parent app

### From Appsmith to parent app

In this example, imagine you are building a page outside of Appsmith, and you have embedded an Appsmith app into it using an [HTML iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe).

To configure your Appsmith application to send messages to its parent page:

1. Drag and drop a [Button](/reference/widgets/button/) widget and an [Input](/reference/widgets/input/) widget onto the canvas.
2. In the button's properties, configure its **onClick** event to execute the **Post message** action. Set its **Message** field to `{{Input1.text}}`, and make sure that the **Target iframe** field is set to `window`.
3. On the canvas, enter some data in the input widget's field and click the button widget. Appsmith has just emitted a message to its parent window.

:::tip
The parent application where Appsmith is embedded should have an event listener set up to receive the message that you send from Appsmith. Read more about setting up message event handling [here](https://developer.mozilla.org/en-US/docs/Web/API/Window/message_event).
:::
