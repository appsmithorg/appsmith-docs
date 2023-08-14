---
description: This page explains how to use the Iframe widget to embed third-party applications and websites into your Appsmith application.
---

# Iframe

This page provides information on using the Iframe widget to embed third-party applications and websites into your Appsmith application.

:::info
The Iframe widget is safe from XSS attacks from v1.8.6 onwards. If you have a self-hosted Appsmith and are on an older version, see [Sandboxing Iframe widgets](/product/security#sandboxing-iframe-widgets) to enable this.
:::

## Content properties

These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.


### Data

#### URL `string`

<dd>

Allows you to specify the URL of the page or application you want to display within the Iframe. For instance, by adding `https://docs.appsmith.com/` to the **URL** property, you can display the Appsmith docs in your Appsmith application.


<figure>
  <img src="/img/iframe-website.png" style= {{width:"700px", height:"auto"}} alt="Display external website"/>
  <figcaption align = "center"><i></i>Display external website</figcaption>
</figure>


</dd>



#### srcDoc `string`


<dd>

Allows you to embed HTML and CSS within `<style>` tags to render in the Iframe. When this property has a value, it overrides the URL property.

In addition to static HTML, you can display data generated dynamically from queries or JavaScript functions in the **srcDoc** property using the mustache syntax `{{ }}`.


**Example**: suppose you want to create a simple time-picker: 


```html
<!DOCTYPE html>
<html>
<head>
    <title>Time Picker with AM/PM</title>
    <style>
        /* Add your custom CSS for the time picker here */
        /* Example CSS for a basic time picker */
        .time-picker {
            border: 1px solid #ccc;
            padding: 10px;
            width: 200px;
            font-family: Arial, sans-serif;
            font-size: 14px;
            display: flex;
            align-items: center;
        }
        select {
            padding: 5px;
        }
    </style>
</head>
<body>
    <div class="time-picker">
        <select id="hour">
            <!-- Add options for hours in 12-hour format with AM/PM -->
            <option value="12">12</option>
            <option value="01">01</option>
            <!-- ... Continue with options for 02 to 11 ... -->
            <option value="11">11</option>
        </select>
        <span>:</span>
        <select id="minute">
            <!-- Add options for minutes -->
            <option value="00">00</option>
            <option value="15">15</option>
            <!-- ... Continue with options for 30 and 45 ... -->
            <option value="45">45</option>
        </select>
        <select id="amPm">
            <option value="AM">AM</option>
            <option value="PM">PM</option>
        </select>
    </div>
</body>
</html>
```


<figure>
  <img src="/img/iframe-time-pick.png" style= {{width:"700px", height:"auto"}} alt="Display external website"/>
  <figcaption align = "center"><i></i>Custom Time-picker</figcaption>
</figure>


</dd>

:::info
* If the Iframe widget has a value in the **srcDoc** property, it overrides the **URL** property.
* If [X-Frame-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options) is set to DENY on the external page or website, the Iframe widget fails to load.
:::

See how to [create custom widgets](#create-custom-widgets) using Iframe.


### General

#### Title `string`

<dd>

Set a title for the content displayed within the Iframe.

</dd>

#### Animate Loading `boolean`


<dd>

This property controls whether the widget is displayed with a loading animation. When enabled, the widget shows a skeletal animation during the loading process. Additionally, you can control it through JavaScript by clicking on the <code>JS</code> next to the property. The default value for the property is `true`.

</dd>

### Events

When the event is triggered, these event handlers can execute queries, JS functions, or other [supported actions](/reference/appsmith-framework/widget-actions).



#### onURLChanged

<dd>

Specifies the action to be performed when the widget's **URL** property is changed.

</dd>

#### onSrcDocChanged

<dd>

Specifies the action to be performed when the **srcDoc** property of the widget is changed.


</dd>

#### onMessageReceived

<dd>

Specifies the action to be performed when a `postMessage` event is received from the embedded page.

</dd>


## Style properties

Style properties allow you to change the look and feel of the widget.

### Color

#### Background Color `string`

<dd>

Sets a color for the Iframe's border, specified as a [CSS color value](https://developer.mozilla.org/en-US/docs/Web/CSS/color). It can also be manipulated programmatically using the JavaScript functions.

</dd>


### Border and shadow



#### Border Width `number`

<dd>

Specifies the width of the widget's border, accepting only numerical values in pixels (px). The default value is `1`.

</dd>

#### Border Opacity	`number`

<dd>

This property controls the opacity level of the widget's border. The maximum value is 100, which represents full opacity. Default value is `100`.


</dd>


#### Border radius `string`

<dd>

Applies rounded corners to the outer edge of the widget. If JavaScript is enabled, you can specify valid [CSS border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) to adjust the radius of the corners.

</dd>

#### Box Shadow `string`
 

<dd>

This property adds a drop shadow effect to the frame of the widget. If JavaScript is enabled, you can specify valid [CSS box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) values to customize the appearance of the shadow.


</dd>


## Reference properties

Reference properties are properties that are not available in the property pane but can be accessed using the dot operator in other widgets or JavaScript functions. They provide additional information or allow interaction with the widget programmatically. For instance, to get the visibility status, you can use `Iframe1.isVisible`.

#### isVisible `boolean`

<dd>

Indicates the visibility state of a widget, with `true` indicating it is visible and `false` indicating it is hidden.

*Example:*
```js
{{Iframe1.isVisible}}
```

</dd>

#### source `string`

<dd>

Contains the URL of the embedded page. Doesn't reflect the content set in the **srcDoc** property.

*Example:*
```js
{{Iframe1.source}}
```


</dd>

#### title `string`

<dd>

Contains the title of the Iframe as set in the widget's **Title** property.

*Example:*
```js
{{Iframe1.title}}
```


</dd>

#### message `string`


<dd>

The `message` property contains a message received from the embedded page via the JavaScript `postMessage()` method. This message can be of any type and is `undefined` before a message is received. Learn more about [postMessage().](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage)

*Example:*
```js
{{Iframe1.message}}
```

</dd>

#### messageMetadata `string`


<dd>

The `messageMetadata` property contains metadata related to the message received from the embedded page through the JavaScript `postMessage()` method.

*Example:*
```js
{{Iframe1.messageMetadata}}
```
</dd>

## Methods

Widget property setters enable you to modify the values of widget properties at runtime, eliminating the need to manually update properties in the editor.

These methods are asynchronous and return a [Promise](/core-concepts/writing-code/javascript-promises#using-promises-in-appsmith). You can use the .then() block to ensure execution and sequencing of subsequent lines of code in Appsmith.

#### setVisibility (param: boolean): Promise

<dd>

Sets the visibility of the widget.

*Example*:
```js
Iframe1.setVisibility(true)
```

</dd>

#### setURL (param: string): Promise

<dd>

Allows you to dynamically change the content of the iFrame by providing a new URL. 

*Example*:
```js
Iframe1.setURL('<https://example.com>')
```


</dd>




## Send Message Between App and Iframe

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


## Create custom widgets

Appsmith offers a wide range of widgets for building applications. Still, sometimes you may need a custom widget for a specific purpose, such as a calendar, accordion, social media widget, etc. In such cases, you can create the widget in HTML or a language like React and display it in the Iframe widget.

Lets create a custom Code Editor Widget with the [Ace Code Editor Library](https://ace.c9.io/).

1. In the **srcDoc** property, add the following code:


```html
<head>
<style type="text/css" media="screen">
    #editor { 
        position: absolute;
        top: 40px;
        right: 0;
        bottom: 0;
        left: 0;
    }
</style>
</head>
<body>
<div id="editor">function foo(items) {
    var x = "All this is syntax highlighted";
    return x;
}</div>
<script src="https://cdn.jsdelivr.net/npm/ace-builds@1.19.0/src-min-noconflict/ace.min.js" type="text/javascript" charset="utf-8"></script>
<script>
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/javascript");
    editor.on("change", function() {
        // Get the value of the editor and send it to the parent window
        var code = editor.getValue();
        window.parent.postMessage(code, "*");
    });
</script>
```
This code creates a code editor widget using the Ace code editor library and sends the entered code to the [parent window](#communication-between-app-and-iframe) when the "Submit Code" button is clicked.


2. Next, add Text widget and sets its **Text** property to:

```js
{{Iframe1.message}}
```
This retrieves the entered code from the editor and displays it in a Text widget using the `message` reference property. 

With this setup, users can edit the code in the code editor, and when the submit button is clicked, the entered code would be processed or displayed as desired.


<figure>
  <img src="/img/custom-widget-code.png" style= {{width:"800px", height:"auto"}} alt="Display images on table row selection"/>
  <figcaption align = "center"><i>Custom Code Editor</i></figcaption>
</figure>

### Limitations

You cannot create custom widgets using Iframe that rely on underlying platform capabilities, such as:

* Widgets that act as a canvas or parent for other widgets. Eg: _Container_.
* Widgets that act as a _Modal_ or _Drawer_ on top of the existing canvas.
* Cannot use auto-height or responsiveness features for widgets within the Iframe.


Appsmith currently does not support HTML formatting and error parsing. As a result, Appsmith cannot identify any HTML or CSS errors in the **srcDoc** property.

For complex widgets with frequent updates, it is advisable to utilize an external service like CodeSandbox or host your own code to maintain your solution more efficiently.


