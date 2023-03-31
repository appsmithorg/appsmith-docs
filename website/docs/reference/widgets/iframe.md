
# Iframe


This page explains how to use the Iframe widget to embed third-party applications, and websites into your Appsmith application.

<VideoEmbed host="youtube" videoId="4jXTyxUhnP0" title="Using the Iframe widget" caption="Using the Iframe widget"/>

:::info
The Iframe widget is protected against XSS attacks from v1.8.6 onwards. If you have self-hosted Appsmith and are on an older version, see [Sandboxing Iframe widgets](/product/security#sandboxing-iframe-widgets) to enable this.
:::

## Display external content

To display a website or third-party application within your Appsmith app, you can use the **URL** property. For example, you can display `https://docs.appsmith.com/` in your Appsmith app by adding it to the **URL** property.


<figure>
  <img src="/img/iframe-website.png" style= {{width:"700px", height:"auto"}} alt="Display external website"/>
  <figcaption align = "center"><i></i></figcaption>
</figure>

:::note
* If the Iframe widget has a value in the **srcDoc** property, then it overrides the **URL** property.
* If [X-Frame-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options) is set to DENY on the external page or website, the Iframe fails to load.
:::

## Display HTML and CSS 

To display HTML components within your Appsmith app, you can utilize the **srcDoc** property of the iframe widget. This allows you to add HTML code and CSS within `<style>` tags.


<figure>
  <img src="/img/iframe-html.png" style= {{width:"700px", height:"auto"}} alt="Display HTML components"/>
  <figcaption align = "center"><i></i></figcaption>
</figure>

In addition to static HTML components, you can also display dynamic data by utilizing queries or JavaScript functions. For example, you can display the contents of an API response by using `{{api.data}}` within the **srcDoc** property.

## Custom widget

Appsmith offers a wide range of widgets for building applications, but sometimes you may need to use a custom widget to add specific capability or visual elements. In such cases, you can use the **srcDoc** property of the iFrame widget to display a custom widget inside your Appsmith app.

You can create a wide range of custom widgets in Appsmith, such as advance video players, data visualizations, custom calendar, social media widgets, animations, chat-bots, and more. The possibilities are endless.  

---
**Example**: to add a custom time picker widget to your application, you can use the `select` element for each component of the time (hour, minute, AM/PM) and a `button` to submit the selected time. Once you have the HTML and CSS for the time picker widget, you can add the following JavaScript function to perform any necessary actions with the selected time: 

```html
 <script>
        function sendSelectedTime() {
            var selectedHour = document.getElementById("hourSelect").value;
            var selectedMin = document.getElementById("minSelect").value;
            var selectedAMPM = document.getElementById("ampmSelect").value;
            var selectedTime = selectedHour + ":" + selectedMin + " " + selectedAMPM;
            window.parent.postMessage(selectedTime, "*");
        }
    </script>
```
The JavaScript function, `sendSelectedTime()`, retrieves the selected values from the select elements, concatenates them into a string in the format `"hh:mm AM/PM"`, and then sends that string to the parent window using the `postMessage()` method. This allows the selected time to be passed for further use.


<figure>
  <img src="/img/custom-widget-time-picker.gif" style= {{width:"700px", height:"auto"}} alt="Display external website"/>
  <figcaption align = "center"><i></i></figcaption>
</figure>


## Communication with Iframe

Appsmith allows secure communication between different Window objects, including iframes. There are a number of directions in which your apps may need to communicate. Depending on their parent/embed relationship and the message's target recipient, the configuration is a bit different. 


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

Now, when you add text to the Input widget and trigger the `onTextChanged` event, the message would be sent to the embedded page using the `postMessage()` method, and the text would be displayed in the embedded page's Iframe.

<figure>
  <img src="/img/iframe-2.gif" style= {{width:"700px", height:"auto"}} alt="Display HTML components"/>
  <figcaption align = "center"><i></i></figcaption>
</figure>

### From embedded page to Iframe widget

The Iframe widget listens for messages sent from the page embedded within it. When this page sends data via the Javascript [`postmessage()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) function, Appsmith receives the message and exposes its content to the user on the iframe’s `message` reference property. This property remains undefined until a message is received.

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



## Properties

Properties allow you to customize the widget, connect it to other widgets and trigger events on user actions.


### Widget properties

These properties are present in the property pane of the widget. The following table lists all the widget properties.

| Property            	|         Data type        	| Description                                                                                                                                                                                                                                                                                                                                                                                            	|
|---------------------	|:------------------------:	|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| **URL**          | URL   | Sets the URL of the page to load within the iframe.                                                                                                                                                    |
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
| **source**    | String   | Contains the URL of the embedded page _(string)._ Doesn't reflect the content set in the `srcDoc` property.                                                                                                                                                                                                      |
| **title**     | String   | Contains the title of the Iframe as set in the widget's Title property._                                                                                                                                                                                                                                                           |

### Style properties

Style properties allow you to change the look and feel of the widget.

| Property            	|         Data type        	| Description                                                                                                                                                                                                                                                                                                                                                                                            	|
|---------------------	|:------------------------:	|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| **Border Color**   | String    | Sets the color of the widget's border. Accepts valid CSS [`color` ](https://developer.mozilla.org/en-US/docs/Web/CSS/color)values.                                               |
| **Border Opacity**  | Number  | Sets the opacity of the widget's border. Max: 100                                                                            |
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
