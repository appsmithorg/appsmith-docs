# Cross-origin Communication

Appsmith provides a way to enable safe cross-origin communication between different [Window](https://developer.mozilla.org/en-US/docs/Web/API/Window) objects such as application/parent window and iframes. This is useful when:

- Using Appsmith's [Iframe](/reference/widgets/iframe/) widget to embed other applications or pages.
- Embedding Appsmith in an iframe of a parent application.

## Methods
In Appsmith, you can use the following methods for cross-origin communication -
* [postWindowMessage()](#postwindowmessage)
* [windowMessageListener()](#windowmessagelistener)
* [unlistenWindowMessage()](#unlistenwindowmessage)


### postWindowMessage()

`postWindowMessage()` method can be used to send messages between the application or parent windows and iframes.

#### Signature

```javascript
postWindowMessage(message, targetIframe, targetOrigin)
```

##### Arguments

| Argument Name | Description |
| ------------- | ----------- |
| **message** | This is the message to send to the target iframe or window. Most JavaScript values are acceptable here, except `null` and `undefined`. (Default: `""`) |
| **targetIframe** | This is the window to which you want to send the message. If its value is `"window"`, you are sending a message to the parent application’s window (where Appsmith is embedded). If you want to send a message to an iframe within Appsmith, enter the name of the iframe here. (Default: `"window"`) |
| **targetOrigin** | This is the URL to which you can send messages. The default value of "`*`" means the message can be sent to any URL. If you want to limit sending messages to only the parent application (in which Appsmith is embedded), enter the URL of the parent application here. (Default: `"*"`) |

To see examples of the **postWindowMessage** function, take a look at the [sample app](https://app.appsmith.com/applications/61f3d1949d6d6a6720c98681/pages/61f3d1949d6d6a6720c98684).



### windowMessageListener()

`windowMessageListener()` function enables an appsmith app to react to the messages incoming from the parent website. This is a page level action that's specific to the current page and won't continue on other pages.

:::info
This feature is available only in Appsmith's [business edition](https://www.appsmith.com/pricing).
:::

#### Signature

```javascript
windowMessageListener(
	"https://your-site.github.io", 
	(message) => { showAlert(message) }
)
```

##### Arguments

| Argument | Description |
| --- | --- |
| domain | This is the address of the website that sends the message (`https://mywebsite.com`). The app only listens to messages from the given domain when embedded. If the app is embedded in some other website(`https://myother-website.com`)the callback  won’t be triggered. If an active action is already in place, it won't be overridden and a warning appears in the console. The use of ** * ** is not allowed in the domain field, as Appsmith requires specific website address.|
| callback | A callback comes to action whenever a message is sent from the defined domain. It accepts a parameter that  returns the response to the incoming message. |

### unlistenWindowMessage()

`unlistenWindowMessage()` allows you to disable an Appsmith app from reacting to messages from the parent website.

:::info
This feature is available only in Appsmith's [business edition](https://www.appsmith.com/pricing).
:::

#### Signature

```javascript
unlistenWindowMessage(”domain”)
```

##### Arguments

| Argument | Description |
| --- | --- |
| domain | This is the address of the website with an already active action. If no active action exists in this domain, a warning appears in the console. |

## Types of communication

There are a number of directions in which your apps may need to communicate. Depending on their parent/embed relationship and the message's target recipient, the configuration is a bit different.

<!-- TODO: Collin to add infographic -->
<!-- ![Reference: Communication between windows with postWindowMessage](/img/postmessage_diagram.png) -->

### Iframe widget in Appsmith app

In this scenario, you are building an app that has an Iframe widget called `Iframe1`. There is an external page embedded within that Iframe widget, and you are setting up communication between the embedded page and the Iframe in Appsmith.

#### From Appsmith to embedded page

![](/img/postmessage_child_incoming.png)

To send data to a page that's embedded in an Appsmith Iframe widget:

1. Drag and drop an [Input](/reference/widgets/input/) widget and a [Button](/reference/widgets/button) widget onto the canvas.
2. In the button's **onClick** event property, select **Post message**. Set the **Message** to `{{ Input1.text }}` and **Target iframe** to `Iframe1`.
3. On the canvas, enter your piece of data into the input widget, and click the button widget. The iframe has now received the message you sent.

If you want to try this but you need a sample page to receive your message, set up your iframe with this HTML string in its **srcDoc** property:

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

#### From embedded page to Iframe widget

To capture and handle a message that was sent to an Appsmith Iframe widget from the page embedded in the iframe:

Use the iframe's [**onMessageReceived**](/reference/widgets/iframe#events) event in the properties pane. Choose an action or write code to be executed when the message is received from the embedded page. You can use the `Iframe1.message` property to access the content of the message that was received by Appsmith.

### Appsmith app embedded in parent app

In this scenario, you are building an app outside of Appsmith, and you have used an [HTML iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) element to embed a deployed Appsmith app in that page. Now you are setting up communication between the non-Appsmith parent app and the Appsmith app embedded within it.

#### From Appsmith to parent app

![](/img/postmessage_parent_outgoing.png)

To configure your Appsmith application to send messages to its parent page:

1. Drag and drop a [Button](/reference/widgets/button/) widget and an [Input](/reference/widgets/input/) widget onto the canvas.
2. In the button's properties, configure its **onClick** event to execute the **Post message** action. Set its **Message** field to `{{Input1.text}}`, and make sure that the **Target iframe** field is set to `window`.
3. On the canvas, enter some data in the input widget's field and click the button widget. Appsmith has just emitted a message to its parent window.

:::tip
The parent application where Appsmith is embedded should have an event listener set up to receive the message that you send from Appsmith. Read more about setting up message event handling [here](https://developer.mozilla.org/en-US/docs/Web/API/Window/message_event).
:::

#### From parent app to Appsmith

:::info
This feature is available only in Appsmith's [business edition](https://www.appsmith.com/pricing).
:::

![](/img/postmessage_parent_incoming.png)

When you embed an Appsmith app as an iframe on a website, the event listeners allow you to listen to the message from that parent website. You can use this method to make Appsmith react to events from the parent website. 
   
On your Appsmith app, you can enable/disable a page to react to these messages using the following functions - 

* [windowMessageListener()](#windowmessagelistener)
* [unlistenWindowMessage()](#unlistenwindowmessage)

For example, a parent website (`https://mywebsite.com`) where an appsmith app is embedded calls this function when a button is clicked - 

```javascript
const iFrame = document.getElementById(”#appsmith-iframe”);
iFrame.contentWindow.postMessage("Parent message", 'https://your-appsmith-domain.com');
```   
In the Appsmith app, if you want to run an API called `Api1` in reaction to this message, you can use the `windowMessageListener()` function as follows - 
```javascript
windowMessageListener(”https://mywebsite.com”, () => Api1.run());
```
To stop the Appsmith app from reacting to the incoming messages from the parent website (`https://mywebsite.com`), you can use the `unlistenWindowMessage` method as follows -
```javascript
unlistenWindowMessage(”https://mywebsite.com”)
```
:::tip
You can automatically set up an action in a page by calling the `windowMessageListener` in a JS object method and have it run when the page loads.
:::

