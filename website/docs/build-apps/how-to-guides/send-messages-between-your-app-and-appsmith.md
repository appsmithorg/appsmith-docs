---
description: This page demonstrates how to establish communication between the embedded Appsmith app and your App. 
---

# Post Messages Between your App and Appsmith

Cross-origin communication between an embedded Appsmith app and your app can be achieved through sending messages. This page shows how to send messages between the embedded Appsmith app and your parent app.

## Prerequisites

* A HTML Iframe configured to embed Appsmith app in your parent app. For more information, see [Embed Appsmith](/advanced-concepts/embed-appsmith-into-existing-application).

## Send messages to parent app

To send messages from the embedded Appsmith app to the parent app, follow these steps:

<ZoomImage style={{"height": "300px"}}
  src="/img/send-message-from-embedded-appsmith-to-app.svg" 
  alt="Send message from Embedded Appsmith to Parent app"
  caption="Send message from Embedded Appsmith to Parent app"
/>

* To send a message from embeeded Appsmith to the parent app, use the global function [postWindowMessage](/reference/appsmith-framework/widget-actions/post-message) in your JS Object or configure a post message action for your widget in the Properties pane. For example, to send a message on the click of a button widget, select the **Post message** action for the **onClick** event, add the message details in the **Message** field, and set the **Target** as `window`. Alternatively, use the `postWindowMessage()` by enabling the JS as shown below:

    ```js
    //replace the "Message content" with your actual message.
    //Set the Target as window, and replace 
    //the "<Parent_app_hosted_url>" with the Parent app domain
    //highlight-next-line
    postWindowMessage("Message content", 'window', "<Parent_app_hosted_url>");
    ```

* To receive the messages in the parent app, use the `addEventListener()` method of the `window` object that adds an event listener in your parent app. 

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

## Send messages to embedded Appsmith

To send messages to the embedded Appsmith app from the parent app, follow these steps:

<ZoomImage style={{"height": "300px"}}
  src="/img/send-message-from-parent-app-to-embedded-appsmith.svg" 
  alt="Send message from Parent app to embedded Appsmith"
  caption="Send message from Parent app to embedded Appsmith"
/>

* To send messages to embedded Appsmith, use the [postMessage()](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) method of the `contentWindow` object. Add the below code snippet in your app to send a message:

    ```js
    //add this code to your embedded app.
    //message is the content of the message that you want to send to Appsmith
    function sendMessage(message) {
        if(message) {
            //Send the message in postMessage
            //replace the "<Appsmith_hosted_url>" with your Appsmith domain
            //highlight-next-line
            iFrame.contentWindow.postMessage(message, "<Appsmith_hosted_url>");
        }
    }
    ```
    Call the `sendMessage()` function whenever you want to send a message. Alternatively, you can directly use `iFrame.contentWindow.postMessage(message, "<Appsmith_hosted_url>")` in your code.

* For receiving the message at Appsmith, use the global function [windowMessageListener()](reference/appsmith-framework/widget-actions/window-message-listener) in your JS Object. Alternatively, use the `windowMessageListener()` by enabling the JS as shown below:

  ```js
  //replace the '<origin' placeholder with your application domain
  // from where the message had originated
  //highlight-next-line
  windowMessageListener('<origin>', (message) => {
    if(message) {
        console.log(message);
        //Add code to manipulate the received message
        }
  ```
You may also choose to execute APIs, queries or store the message in Appsmith store by adding or updating the code in the `windowMessageListener()` method to process the received message.

## See also

* [Post Messages Between Appsmith and Iframe widget](/build-apps/how-to-guides/Communicate-Between-an-App-and-Iframe)
* [unlistenWindowMessage()](/reference/appsmith-framework/widget-actions/unlisten-window-message)