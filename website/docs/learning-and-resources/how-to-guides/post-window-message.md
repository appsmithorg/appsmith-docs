**Introduction:**

**`window.postMessage()`** method safely enables cross-origin communication between [Window](https://developer.mozilla.org/en-US/docs/Web/API/Window) objects *e.g.,* between a page and a pop-up that it spawned, or between a page and an iframe embedded within it.

You can read more about it in detail [here](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage).

In the Appsmith platform, postMessage is exposed as the global function `postWindowMessage`, so anyone can set up communication from
1. Appsmith embedded in an iframe to the parent application is embedded in
2. Appsmith and iframes within Appsmith

Syntax:

```jsx
postWindowMessage(message, targetIframe, targetOrigin)
```

**message** (default value = “”) - This is the message you want to send to the parent application. Most Javascript values are acceptable here except null and undefined.

**target iframe** (default value = “window”) - This is the window to which you want to send the message. If its value is window, you are sending a message to the parent application’s window where Appsmith is embedded. If you want to send a message to an iframe within Appsmith, you have to enter the name of the iframe here.

**targetOrigin** (default value = “*”) - This is the URL to which you can send messages. The default value of “*” means the message can be sent to any URL. If you want to limit sending messages to only the parent application that has Appsmith embedded in it, you will have to enter the URL of the parent application here.

**Different levels of communication:**

This diagram demonstrates all the different layers of communication we have between the parent application, Appsmith, and iframes.

![Post window message diagram](/img/postwindowmsg.png)

**Code Example:**

For this example, we use codesandbox to create an iframe where we are embedding Appsmith. We also create an iframe within Appsmith to demonstrate all levels of communication.

The codesandbox can be found [here](https://codesandbox.io/s/happy-rgb-6jzwtg?file=/index.html), and the Appsmith app can be found [here](https://app.appsmith.com/applications/61f3d1949d6d6a6720c98681/pages/61f3d1949d6d6a6720c98684).

In Appsmith:

1. Create an app with 2 buttons and an iframe (The template can be found in the Appsmith app). Wire up the buttons to send messages to the parent application and to the iframe using `postWindowMessage` in their onClick property. Add a button and an event listener for the message event to the Iframe using the `srcDoc` property (example code can be found in the linked Appsmith app). Set up the `onMessageReceived` property of the iframe to receive messages from itself.
2. Deploy your application by pressing the Deploy button. (PS: every time you make changes to the message or targetOrigin, you need to deploy your application again)

   ![Deploy application screenshot](/img/deploy-app.png)

3. Click the share button your app.

   ![Share application screenshot](/img/share-app.png)
   
4. Copy the application link. We will be adding this URL as the source link to the iframe in codesandbox. Make sure you have marked the application as public.
   ![Copy application link screenshot](/img/copy-app-link.png)

5. Click the buttons to see various levels of messages being sent to the iframe and to Appsmith. To see the sending of messages to the parent application from Appsmith, follow the steps in the codesandbox section to embed Appsmith within an iframe.

In Codesandbox:

1. Create an iframe in the HTML file with the src link set to the URL of the Appsmith app you copied from the previous section

    ```jsx
    <div id="app">
      <iframe
        id="frameEle"
        src="https://app.appsmith.com/applications/61f3d1949d6d6a6720c98681/pages/62b9568220ae3225cef2751a"
        style="height: 800px; width: 800px;"
      ></iframe>
    </div>
    ```

2. In the javascript file, add an event listener listening to a “message” event. In the callback function, receive the event parameter and use [event.data](http://event.data) to capture the message you sent.

    ```jsx
    window.addEventListener(
      "message",
      function (e) {
        console.log(e.data);
      },
      false
    );
    ```

3. You should be able to see that the message is printed on the console.
