---
description: Iframe widget is used to display iframes in your app.
---

# Iframe

![Use iframes to embed other webpages within your applications](</img/as_iframe_cover.png>)

## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

### Widget Properties

These properties allow you to edit the IFrame widget. All of these properties are present in the property pane of the widget. The following table lists all the widget properties.

| Property            | Description                                                                                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **URL**             | Sets the URL of the page to load within the iframe.                                                                                                                                                    |
| **srcDoc**          | Provide HTML (and CSS within `<style>` tags) to render within the iframe instead of using a URL. When this property has a value, the widget's **URL** property will be ignored.                         |
| **Title**           | Sets a title for the iframe content. This title appears in the iframe's HTML tag (`<iframe ... title="MyTitle">`) and on the widget's internal `IFrame1.title` property.                               |
| **Animate Loading** | When turned off, the widget will load without any skeletal animation. You can use a toggle switch to turn it on/off. You can also turn it off/on using javascript by enabling the JS label next to it. |

### Binding Properties

These properties allow you to bind your IFrame widget with any other widget in queries or JS objects. The following table lists all the binding properties.

| Binding Property | Description                                                                                                                                                                                                                                                                                                                                      |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **isVisible**    | Reflects the state of the widget's **Visible** setting _(bool)_.                                                                                                                                                                                                                                                                                 |
| **message**      | Contains a message received from the embedded page via the JS [`postMessage()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) method. It may be of _any_ type. The property is `undefined` before a message is received. |
| **source**       | Contains the URL of the embedded page _(string)._ Does not reflect the content set in the `srcDoc` property.                                                                                                                                                                                                      |
| **title**        | Contains the title of the iframe as set in the widget's **Title** property _(string)._                                                                                                                                                                                                                                                           |

Let’s take a closer look at the **message** property.

#### Message

The iframe widget listens for messages sent from the page embedded within it. When this page sends data via the Javascript [`postmessage()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) function, Appsmith receives the message and exposes its content to the user on the iframe’s `message` property.

The message content may be of any type; before any message is received, this property is undefined.

You can try out the message property by following the steps below:

<figure>
  <object data="https://www.youtube.com/embed/kDJ56AMsXrM?autoplay=0" width='860px' height='515px'></object> 
  <figcaption align="center"><i>Follow these steps to test out how to receive messages posted from the sites embedded in your iframe!</i></figcaption>
</figure>

1. On a blank canvas, drag and drop a new iframe widget.

2. We need to embed a page that is able to send a message with `postMessage()`. In the iframe widget’s settings, copy and paste the following snippet into its **srcDoc** property:

```html
{{
    `
        <input id="messageinput" type="text"></input>
        <input type="button" onclick="sendMyMessage()" value="SEND" />
        <script>
            function sendMyMessage() {
                const msgText = document.getElementById("messageinput").value;
                window.parent.postMessage(msgText, "*");
            }
        </script>
    `
}}
```

You’ve created a very simple HTML document in the iframe containing a text input, a button, and a script to handle sending the message.

3. Drag and drop a new [Text](text.md) widget onto the canvas, and set its Text property to `{{Iframe1.message}}`.

4. Type a string into the iframe’s input box and click the "Send” button. You should see your [Text widget](text.md) update to contain the string that you sent from the iframe.

:::info
When a message is received, Appsmith will also execute any code or actions set within the iframe’s [`onMessageReceived` ](iframe.md#events)event. Try it out – set an action within the `onMessageReceived` event, and send another message to watch the results!
:::

### Events

You can define functions that will be called when these events are triggered in the widget.

| Action                | Description                                                                                                                                                                                                                                                                     |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **onURLChanged**      | Sets the action to take place when the widget's URL is changed. It can be set from the GUI list of common actions ([examples here](../appsmith-framework/widget-actions/)), or you can define a custom JavaScript function to call instead.                                     |
| **onSrcDocChanged**   | Sets the action to take place when the `srcDoc`property is changed. It can be set from the GUI list of common actions ([examples here](../appsmith-framework/widget-actions/)), or you can define a custom JavaScript function to call instead. |
| **onMessageReceived** | Sets the action to take place when a `postMessage` event is received from the embedded page. It can be set from the GUI list of common actions ([examples here](../appsmith-framework/widget-actions/)), or you can define a custom JavaScript function to call instead.        |

### Styles

Style properties allow you to change the look and feel of the widget.

| Style Properties   | Description                                                                                                                                                                      |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Border Color**   | Sets the color of the widget's border. Accepts valid CSS [`color` ](https://developer.mozilla.org/en-US/docs/Web/CSS/color)values.                                               |
| **Border Opacity** | Sets the opacity of the widget's border. Accepts a _number_ value which is interpreted as a percentage.                                                                          |
| **Border Width**   | Sets the width of the widget's border. Accepts a _number_ value which is interpreted as pixels.                                                                                  |
| **Border Radius**  | Rounds the corners of the widget's outer edge. With JS enabled, this accepts valid CSS [`border-radius`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) values. |
| **Box Shadow**     | Casts a drop shadow from the frame of the widget. With JS enabled, this accepts valid CSS [`box-shadow`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) values.    |
