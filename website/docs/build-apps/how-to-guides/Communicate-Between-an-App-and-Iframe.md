---
description: This page demonstrates how to establish secure cross-origin communication between the Appsmith app and an embedded Iframe widget. 
---
# Communicate Between an App and Iframe

This page shows how to establish secure cross-origin communication between the Appsmith app and an embedded Iframe widget using the `postMessage()` function.

### From Appsmith to embedded page

The Iframe widget allows you to send messages from Appsmith to an embedded page using [postMessage()](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage).

<figure>
  <img src="/img/postmessage_child_incoming.png" style= {{width:"500px", height:"auto"}} alt="Admin Settings option is available in the left sidebar"/>
  <figcaption align = "center"><i></i></figcaption>
</figure>

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

* Set up an event *(like button click or input change event)* to send the message; select the [**Post message**](/reference/appsmith-framework/widget-actions/post-message) option from the action selector and specify the widget input in the **Message** box and the **Target iframe** as the name of the Iframe widget. For instance, enable *JS* for the **onTextChanged** event of the Input widget, and add:

    ```js
    {{postWindowMessage(Input1.text, 'Iframe1', "*");}}
    ```


<figure>
  <img src="/img/fromapptoiframe-1.gif" style= {{width:"700px", height:"auto"}} alt="Display external website"/>
  <figcaption align = "center"><i></i>From Appsmith to embedded page</figcaption>
</figure>

</dd>

### From embedded page to Iframe

The Iframe widget listens for messages sent from the page embedded within it. To send data from the embedded page, you can use the [postMessage()](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) function in Javascript. 

*Example*: If you want to send a message from an embedded website or application to a Text widget, you can achieve this by following the steps below:

* In the **srcDoc** property of the Iframe widget, add the necessary code. For instance, you can use the following code to embed a page that can send a message with `postMessage()` function:

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

    The above code creates a simple HTML document in the Iframe containing a text input, a button, and a script to handle sending the message.

* To display the message in Appsmith, bind the response in any widget. For instance, in the **Text** property of Text Widget add:

   ```js
   {{Iframe1.message}}
   ```
When the page sends data to Appsmith, it receives the message in the Iframe's `message` reference property. This property remains undefined until a message is received.

When a message is received, you can also execute a set of actions using the Iframe’s **onMessageReceived** event, like displaying an alert or executing a query.

<figure>
  <img src="/img/iframe-2-.gif" style= {{width:"700px", height:"auto"}} alt="Display external website"/>
  <figcaption align = "center"><i></i>From embedded page to Iframe</figcaption>
</figure>

