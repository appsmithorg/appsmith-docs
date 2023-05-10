
# Iframe

This page explains how to use the Iframe widget to embed third-party applications and websites into your Appsmith application.

<VideoEmbed host="youtube" videoId="4jXTyxUhnP0" title="Using the Iframe widget" caption="Using the Iframe widget"/>

:::info
The Iframe widget is safe from XSS attacks from v1.8.6 onwards. If you have a self-hosted Appsmith and are on an older version, see [Sandboxing Iframe widgets](/product/security#sandboxing-iframe-widgets) to enable this.
:::

## Display external content

To display a website or third-party application within your Appsmith app, you can use the **URL** property. For example, you can display `https://docs.appsmith.com/` in your Appsmith app by adding it to the **URL** property.

<figure>
  <img src="/img/iframe-website.png" style= {{width:"700px", height:"auto"}} alt="Display external website"/>
  <figcaption align = "center"><i></i>Display external website</figcaption>
</figure>

:::note
* If the Iframe widget has a value in the **srcDoc** property, it overrides the **URL** property.
* If [X-Frame-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options) is set to DENY on the external page or website, the Iframe widget fails to load.
:::

### HTML and CSS 

To display HTML and CSS content in your Appsmith app, you can use the **srcDoc** property.


<figure>
  <img src="/img/html-iframe-1.png" style= {{width:"700px", height:"auto"}} alt="Display HTML components"/>
  <figcaption align = "center"><i></i></figcaption>
</figure>

In addition to static HTML, you can display data generated dynamically from queries or JavaScript functions in the **srcDoc** property using the mustache syntax `{{ }}`.

### Custom widgets

Appsmith offers a wide range of widgets for building applications. Still, sometimes you may need a custom widget for a specific purpose, such as a calendar, accordion, social media widget, etc. In such cases, you can create the widget in HTML or a language like React and display it in the Iframe widget.

---
**Example**: a color picker widget created using HTML as shown below: 


```html
<label for="favcolor">Pick Color: </label> 
<input type="color" id="favcolor" name="favcolor" value="#ff0000">
```

<figure>
  <img src="/img/iframe-color-picker.png" style= {{width:"700px", height:"auto"}} alt="Custom color picker"/>
  <figcaption align = "center"><i>Custom color picker</i></figcaption>
</figure>


## Communication between app and Iframe

Appsmith provides a way to enable safe [cross-origin communication](/reference/appsmith-framework/widget-actions/post-message) between the Appsmith app and the Iframe widget.

Suppose you are building an app with an Iframe widget embedding an external page and want to post messages between the external page and the Appsmith app.

### From Appsmith to embedded page

![](/img/postmessage_child_incoming.png)

---

**Example**:  suppose you want to send the text entered in the Input widget to an app in the Iframe. 

1. Drop an Input widget named `inputMessage` and a Button widget onto the canvas.

2. Drop an Iframe widget named `iframeExample` on the canvas. In the **srcDoc** property, insert the following code:

    ```html
    <div id="target"></div>

    <script>
    window.addEventListener('message', (event) => {
        const tgt = document.querySelector("#target")
            tgt.textContent = event.data
        });
    </script>
    ```
    This code listens for a message sent from the Input widget in Appsmith and displays the text inside the `<div>` HTML element in the Iframe.

3. In the button's **onClick** event, select the **Post message** option. Set the **Message** box to `{{inputMessage.text}}` and **Target iframe** box to `iframeExample`.

4. Enter some text in the Input widget, and click the button. The Iframe receives the message and displays it.

### From embedded page to Iframe

The Iframe widget listens for messages sent from the page embedded within it. To send data from the embedded page, you can use the [postMessage()](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) method in Javascript. Appsmith receives the message in the Iframe’s `message` reference property when the page sends data. This property remains undefined until a message is received.

---
**Example**: 

1. Drop an Iframe widget named `iframeExample` on the canvas.
2. Embed a page that can send a message with `postMessage()` function. To do this,  paste the following code in the srcDoc property:

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

    This code creates a simple HTML document in the Iframe containing a text input, a button, and a script to handle sending the message.

3. Drop a Text widget onto the canvas, and set its Text property to `{{iframeExample.message}}`.

4. Type something in the Iframe's input box and click the **Send** button. The Text widget displays the text that you sent from the Iframe.

5. When a message is received, you can also execute a set of actions in the Iframe’s `onMessageReceived` event. For example, in the `onMessageReceived` event, select the **Show message** action and set the message to 'Message received'. When you click the **Send** button in the Iframe, a toast message appears on the top of the screen.


## Properties

Properties allow you to customize the widget, connect it to other widgets and trigger events on user actions.


### Widget properties

These properties are present in the property pane of the widget. The following table lists all the widget properties.

| Property            	|         Data type        	| Description                                                                                                                                                                                                                                                                                                                                                                                            	|
|---------------------	|:------------------------:	|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| **URL**          | URL   | Sets the URL of the page to load within the Iframe.                                                                                                                                                    |
| **srcDoc**        | String  | Embed HTML and CSS (within `<style>` tags) to render within the Iframe. When this property has a value, it overrides the **URL** property.   |
| **Title**         | String  | Sets a title for the Iframe content.                                |
| **Animate Loading** | Boolean | When this toggle is switched on, it enables a skeleton loading screen, which sets an animated placeholder while the widget is loading and becomes visible. You can also control this toggle using JavaScript code by clicking the **JS** button |

### Reference properties

These properties can be referenced in other widgets, queries, or JS functions using the dot operator. For instance, to get the visibility status, you can use `Iframe1.isVisible`.


| Property            	|         Data type        	| Description                                                                                                                                                                                                                                                                                                                                                                                            	|
|---------------------	|:------------------------:	|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| **isVisible**  | Boolean  | This property indicates whether the widget is visible or not.                                                                                                                                                                                         |
| **message**    | String  | Contains a message received from the embedded page via the JS [`postMessage()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) method. It may be of _any_ type. The property is `undefined` before a message is received. |
| **messageMetadata**    | String  | 	Contains metadata associated with the message received from the embedded page via the JavaScript `postMessage()` method.  |
| **source**    | String   | Contains the URL of the embedded page. Doesn't reflect the content set in the `srcDoc` property.                                                                                                                                                                                                      |
| **title**     | String   | Contains the title of the Iframe as set in the widget's Title property._                                                                                                                                                                                                                                                           |

### Style properties

Style properties allow you to change the look and feel of the widget.

| Property            	|         Data type        	| Description                                                                                                                                                                                                                                                                                                                                                                                            	|
|---------------------	|:------------------------:	|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| **Border Color**   | String    | Sets the color of the widget's border. Accepts valid CSS [color ](https://developer.mozilla.org/en-US/docs/Web/CSS/color)values.                                               |
| **Border Opacity**  | Number  | Sets the opacity of the widget's border. Max: 100                                                                            |
| **Border Width**    | Number   | Sets the width of the widget's border.                                                                                  |
| **Border Radius**   | String   | Rounds the corners of the widget's outer edge. With JS enabled, this accepts valid CSS [border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) values. |
| **Box Shadow**     | String    | Casts a drop shadow from the frame of the widget. With JS enabled, this accepts valid CSS [box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) values.    |

## Events

When the event is triggered, these event handlers can run queries, JS code, or other supported actions.

| Event                | Description                                                                                                                                                                                                                                                                     |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **onURLChanged**      | Sets the action to take place when the widget's URL is changed.                                     |
| **onSrcDocChanged**   | Sets the action to take place when the `srcDoc`property is changed.  |
| **onMessageReceived** | Sets the action to take place when a `postMessage` event is received from the embedded page.       |
