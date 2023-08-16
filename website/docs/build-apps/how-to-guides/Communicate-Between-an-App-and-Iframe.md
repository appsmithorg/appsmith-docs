# Communicate Between an App and Iframe

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
