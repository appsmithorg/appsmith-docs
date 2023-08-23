# Communicate Between an App and Iframe

Appsmith offers a secure method for enabling [cross-origin communication](/reference/appsmith-framework/widget-actions/post-message) between the Appsmith app and the Iframe widget. By leveraging the `postMessage` capability, you can establish a seamless exchange of messages between the embedded external page and the Appsmith app. 

### From Appsmith to embedded page


With the Iframe widget, you can send messages from Appsmith to an embedded page. This communication is facilitated by utilizing the [postMessage()](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) method in JavaScript.

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

<figure>
  <img src="/img/iframe-1-.gif" style= {{width:"700px", height:"auto"}} alt="Display external website"/>
  <figcaption align = "center"><i></i>From Appsmith to embedded page</figcaption>
</figure>

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

<figure>
  <img src="/img/iframe-2-.gif" style= {{width:"700px", height:"auto"}} alt="Display external website"/>
  <figcaption align = "center"><i></i>From embedded page to Iframe</figcaption>
</figure>

