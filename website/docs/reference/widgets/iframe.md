
# Iframe


This page explains how to use the iFrame widget to embed external content, such as apps, websites, or custom widgets, into your Appsmith application, while also providing you with the ability to communicate with them.

<VideoEmbed host="youtube" videoId="4jXTyxUhnP0" title="Using the Iframe widget" caption="Using the Iframe widget"/>



## Display data


### Display external websites

To display a website or third-party application within your Appsmith app, you can utilize the **URL** property by entering the external website or application's URL. For example, you can display `https://docs.appsmith.com/` within your Appsmith app by adding its URL to the **URL** property.


<figure>
  <img src="/img/iframe-website.png" style= {{width:"700px", height:"auto"}} alt="Display external website"/>
  <figcaption align = "center"><i></i></figcaption>
</figure>


However, it's important to note that if the iframe widget also has a **srcDoc** property with a value, the widget's **URL** property would be ignored.


### Display HTML components 

To display HTML components within your Appsmith app, you can utilize the **srcDoc** property of the iframe widget. This allows you to add HTML code and CSS within `<style>` tags.


<figure>
  <img src="/img/iframe-html.png" style= {{width:"700px", height:"auto"}} alt="Display HTML components"/>
  <figcaption align = "center"><i></i></figcaption>
</figure>

In addition to static HTML components, you can also display dynamic data by utilizing queries or JavaScript functions. For example, you can display the contents of an API response by using `{{api.data}}` within the **srcDoc** property.


## Communicate between Appsmith and embedded pages

Appsmith allows secure communication between different Window objects, including iframes. There are a number of directions in which your apps may need to communicate. Depending on their parent/embed relationship and the message's target recipient, the configuration is a bit different. 
Refer to this [document](/reference/appsmith-framework/widget-actions/post-message) for information on embedding your applications externally.

### From embedded page to Iframe widget

The iframe widget listens for messages sent from the page embedded within it. When this page sends data via the Javascript [`postmessage()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) function, Appsmith receives the message and exposes its content to the user on the iframe’s `message` reference property. This property remains undefined until a message is received.

---
**Example**: suppose you want to send a message using a custom input element, you can use the following code into the **srcDoc** property:


```html
<input id="messageinput" type="text" placeholder="Type your message here..."></input>
<input id="sendbutton" type="button" onclick="sendMyMessage()" value="SEND" />

<script>
    function sendMyMessage() {
        const msgText = document.getElementById("messageinput").value;
        window.parent.postMessage(msgText, "*");
    }
</script>
<div id="target"></div>
```

The code includes an `input field`, a `SEND` button, and a `div` with the ID `"target"`. When the user types a message in the input field and clicks the "SEND" button, the function `sendMyMessage()` is called.

The `sendMyMessage()` function retrieves the value of the input field and then uses the **`postMessage()`** method to send a message to the parent window. The `postMessage()` method takes two arguments: the message to send, and the target origin. In this case, the target origin is set to `"*"`, which means that the message can be sent to any domain.

Now, to display this message, you can use query or widget bindings. For instance, you can use the text widget and add `{{Iframe.message}}` to its property to display the message.

In addition, you can utilize the [**onMessageReceived**](#events) event to specify the action to be taken when a `postMessage()` event is received from the embedded page.

<figure>
  <img src="/img/to-iframe.gif" style= {{width:"700px", height:"auto"}} alt="Display HTML components"/>
  <figcaption align = "center"><i></i></figcaption>
</figure>


### From Appsmith to embedded page

To send data from Appsmith to an embedded page, you can use the `postMessage()` method in Javascript. This method allows you to send messages between different windows or frames in a web page. When the embedded page receives the message, it can perform actions based on its content. 

---
**Example**:  suppose you want to send a message to an embedded page. To achieve this, you need to insert the following code into the **srcDoc** property:

```html
<div id="target"></div>

<script>
 window.addEventListener('message', (event) => {
    const tgt = document.querySelector("#target")
        tgt.textContent = event.data
    });
</script>
```

This code listens for a message event and updates the text content of an HTML element with the ID `target` based on the data received in the event. When the message event is triggered, the `querySelector()` method is used to find the HTML element, and its `textContent` property is set to the data received in the event.

You can send the message using the Input widget, you need to set its  `onTextChanged` property to `"Post message"`. Set the `"Message"` to `{{Input1.text }}`and the `"Target iframe"` to `Iframe1`.

Now, when you add text to the Input widget and trigger the `onTextChanged` event, the message would be sent to the embedded page using the `postMessage()` method, and the text would be displayed in the embedded page's iframe.

<figure>
  <img src="/img/iframe-2.gif" style= {{width:"700px", height:"auto"}} alt="Display HTML components"/>
  <figcaption align = "center"><i></i></figcaption>
</figure>

## Custom widget


## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

### Widget properties

These properties are present in the property pane of the widget. The following table lists all the widget properties.

| Property            	|         Data type        	| Description                                                                                                                                                                                                                                                                                                                                                                                            	|
|---------------------	|:------------------------:	|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| **URL**          | URL   | Sets the URL of the page to load within the iframe.                                                                                                                                                    |
| **srcDoc**        | String  | Provide HTML (and CSS within `<style>` tags) to render within the iframe instead of using a URL. When this property has a value, the widget's **URL** property is ignored.                         |
| **Title**         | String  | Sets a title for the iframe content.                                |
| **Animate Loading** | Boolean | When turned off, the widget loads without any skeletal animation. You can use a toggle switch to turn it on/off. You can also turn it off/on using javascript by enabling the JS label next to it. |

### Reference properties

These properties can be referenced in other widgets, queries, or JS functions using the dot operator. For instance, to get the visibility status, you can use `Iframe1.isVisible`.


| Property            	|         Data type        	| Description                                                                                                                                                                                                                                                                                                                                                                                            	|
|---------------------	|:------------------------:	|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| **isVisible**  | Boolean  | This property indicates whether the widget is visible or not.                                                                                                                                                                                         |
| **message**    | Any  | Contains a message received from the embedded page via the JS [`postMessage()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) method. It may be of _any_ type. The property is `undefined` before a message is received. |
| **messageMetadata**    | Any  | 	Contains metadata associated with the message received from the embedded page via the JavaScript `postMessage()` method.  |
| **source**    | String   | Contains the URL of the embedded page _(string)._ Doesn't reflect the content set in the `srcDoc` property.                                                                                                                                                                                                      |
| **title**     | String   | Contains the title of the iframe as set in the widget's Title property._                                                                                                                                                                                                                                                           |

### Styles properties

Style properties allow you to change the look and feel of the widget.

| Property            	|         Data type        	| Description                                                                                                                                                                                                                                                                                                                                                                                            	|
|---------------------	|:------------------------:	|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| **Border Color**   | String    | Sets the color of the widget's border. Accepts valid CSS [`color` ](https://developer.mozilla.org/en-US/docs/Web/CSS/color)values.                                               |
| **Border Opacity**  | Number Max: 100   | Sets the opacity of the widget's border.                                                                           |
| **Border Width**    | Number   | Sets the width of the widget's border.                                                                                  |
| **Border Radius**   | String   | Rounds the corners of the widget's outer edge. With JS enabled, this accepts valid CSS [`border-radius`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) values. |
| **Box Shadow**     | String    | Casts a drop shadow from the frame of the widget. With JS enabled, this accepts valid CSS [`box-shadow`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) values.    |

## Events

These are functions that are called when event listeners are triggered in the widget. [Use actions](/reference/appsmith-framework/widget-actions) to execute tasks based on user events.


| Action                | Description                                                                                                                                                                                                                                                                     |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **onURLChanged**      | Sets the action to take place when the widget's URL is changed.                                     |
| **onSrcDocChanged**   | Sets the action to take place when the `srcDoc`property is changed.  |
| **onMessageReceived** | Sets the action to take place when a `postMessage` event is received from the embedded page.       |
