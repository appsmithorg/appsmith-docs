---
description: This page demonstrates how to establish secure cross-origin communication between the Appsmith app and an embedded Iframe widget. 
---
# Post Messages Between Appsmith and Iframe widget

Cross-origin communication between an Appsmith app and an embedded Iframe widget can be achieved through message passing. This page shows how to send messages between the Appsmith app and an embedded Iframe widget.

## Prerequisites

* An Iframe widget configured to embed your app in Appsmith.

## Send messages to Iframe widget

The Iframe widget serves as the communication bridge between Appsmith and the embedded app. To send messages from Appsmith to your embedded app follow these steps:

<ZoomImage
  src="/img/post-message-from-appsmith-to-iframe-widget.png" 
  alt="Post message from Appsmith to Iframe widget"
  caption="Post message from Appsmith to Iframe widget"
/>

* To send a message from Appsmith to an embedded app within an Iframe widget, use the global function [postWindowMessage](/reference/appsmith-framework/widget-actions/post-message) in your JS Object or configure a post message action for your widget in the Properties pane. For example, to send a message on the click of a button widget, select the **Post message** action for the **onClick** event, add the message details in the **Message** field, and set the **Target** as the name of the Iframe widget (Iframe1). Alternatively, use the `postWindowMessage()` by enabling the JS as shown below:

    ```js
    //replace the "Message content" with your actual message.
    //Set the Target as an Iframe widget. Replace "Iframe1" with the name of the Iframe widget
    //replace the "<Appsmith_hosted_url>" with the Appsmith domain
    postWindowMessage("Message content", 'Iframe1', "<Appsmith_hosted_url>");
    ```

* To capture the messages, use the `addEventListener()` method of the `window` object that adds an event listener in your embedded app. 

    ```js
    //add this code in your app that you've embedded in Appsmith using the Iframe widget
    window.addEventListener('message', (event) => {
        //The message sent is available in the event object.
        if(event) {
        // Read the message by using the event.data property
        const messageReceived = event.data;
        console.log(messageReceived);
        //Add code to manipulate the received message
        }
    });
    ```
    Read the received message using the `event.data` property. Add or update the code in the `addEventListener()` method to process the received message.


## Send messages to Appsmith

The Iframe widget also helps in sending messages to Appsmith from your embedded app. To send messages from your embedded app follow these steps:

<ZoomImage
  src="/img/post-message-from-iframe-widget-to-appsmith.png" 
  alt="Post message from Iframe widget to Appsmith"
  caption="Post message from Iframe widget to Appsmith"
/>

* To send messages to Appsmith, use the [postMessage()](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) method of the `window` object. Add the below code snippet in your app to send a message:

    ```js
    //add this code to your embedded app.
    //message is the content of the message that you want to send to Appsmith
    function sendMessage(message) {
        if(message) {
            //Send the message in postMessage
            //replace the "<Appsmith_hosted_url>" with your Appsmith domain
            window.parent.postMessage(message, "<Appsmith_hosted_url>");
        }
    }
    ```
    Call the `sendMessage()` function whenever you want to send a message. Alternatively, you can directly use `window.parent.postMessage(message, '*')` in your code.

* For receiving the message at Appsmith, configure the `onMessageReceived()` event of the Iframe widget in the Properties pane and show an alert or execute query by passing the received message. Read the received message using the `message` property of the Iframe widget (Iframe1) as shown below:

   ```js
   //Iframe1 is the name of the Iframe widget.
   //replace it with the name of your Iframe widget
   {{Iframe1.message}}
   ```
You may also choose to execute actions by adding callbacks to the [**onMessageReceived**](/reference/widgets/iframe#onmessagereceived) event, like showing a success or a failure message.

## See also
* [Post messages Between your app and Appsmith](/build-apps/how-to-guides/send-messages-between-your-app-and-appsmith)

