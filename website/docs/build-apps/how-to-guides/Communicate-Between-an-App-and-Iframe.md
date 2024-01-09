---
description: This page demonstrates how to establish secure cross-origin communication between the Appsmith app and an embedded Iframe widget. 
---
# Post Messages Between App and Iframe

This page shows how to establish secure cross-origin communication between the Appsmith app and an embedded Iframe widget.

### From Appsmith to embedded page

You can send messages from Appsmith to an embedded page within an Iframe using [postMessage()](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage), and to receive the message on the embedded page, you can use the `addEventListener()` method.

<ZoomImage
  src="/img/postmessage_child_incoming.png" 
  alt="post message"
  caption=""
/>

<dd>

*Example*: If you want to send a message from an Input widget to an external website or application embedded within an Iframe widget, you can achieve this by following the steps below:

* In the **srcDoc** property of the Iframe widget, add the necessary code. For instance, you can use the following code for handling incoming messages:

    ```html
    <div id="target"></div>

    <script>
    window.addEventListener('message', (event) => {
        const tgt = document.querySelector("#target")
            tgt.textContent = event.data
        });
    </script>
    ```

    The above code listens for incoming messages and, upon receiving a message, it updates the content of an HTML element with the id `target` to display the data.

* Set up an event *(like button click or input change event)* to send the message; select the [**Post message**](/reference/appsmith-framework/widget-actions/post-message) option from the action selector and specify the widget input in the **Message** field and the **Target iframe** as the name of the Iframe widget. 

    For instance, enable *JS* for the **onTextChanged** event of the Input widget, and add:

    ```js
    {{postWindowMessage(Input1.text, 'Iframe1', "*");}}
    ```

<ZoomImage
  src="/img/post-message-from-appsmith-embedded-page.gif" 
  alt="Display external website"
  caption="From Appsmith to embedded page"
/>

</dd>

### From embedded page to Iframe

The Iframe widget listens for messages sent from the page embedded within it. To send data from the embedded page, you can use the [postMessage()](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) method, and for receiving messages, use the [message](/reference/widgets/iframe#message-string) reference property of the Iframe widget.

*Example*: If you want to send a message from an embedded website or application to an Iframe, you can achieve this by following the steps below:

* In the **srcDoc** property of the Iframe widget, add the necessary code. For instance, you can use the following code to embed a page that can send a message with the `postMessage()` method:

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

    The above code creates a simple HTML document in the Iframe containing a text input, a button,  and a script to send the message.

* To display the message in Appsmith, bind the Iframe's `message` property to any widget. For instance, in the **Text** property of Text Widget add:

   ```js
   {{Iframe1.message}}
   ```

When a message is received, you can also execute a set of actions using the Iframe’s [**onMessageReceived**](/reference/widgets/iframe#onmessagereceived) event, like displaying an alert or executing a query.

See also [postWindowMessage()](/reference/appsmith-framework/widget-actions/post-message).

<ZoomImage
  src="/img/post-message-page-to-iframe.gif" 
  alt="Display external website"
  caption="From embedded page to Iframe"
/>

