---
description: Iframe widget is used to display iframes in your app.
---

# Iframe

![](<../../.gitbook/assets/cleanshot-2021-07-04-at-23.03.52 (1).gif>)

## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

### Widget Properties

These properties allow you to edit the IFrame widget. All of these properties are present in the property pane of the widget. The following table lists all the widget properties.

| Property            | Description                                                                                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **URL**             | Sets the URL of the page to load within the iframe.                                                                                                                                                    |
| **srcDoc**          | Provide HTML (and CSS within \<style> tags) to render within the iframe instead of using a URL. When this property has a value, the widget's **URL** property will be ignored.                         |
| **Title**           | Sets a title for the iframe content. This title appears in the iframe's HTML tag (`<iframe ... title="MyTitle">`) and on the widget's internal `IFrame1.title` property.                               |
| **Animate Loading** | When turned off, the widget will load without any skeletal animation. You can use a toggle switch to turn it on/off. You can also turn it off/on using javascript by enabling the JS label next to it. |

### Binding Properties

These properties allow you to bind your IFrame widget with any other widget in queries or JS objects. The following table lists all the binding properties.

| Binding Property | Description                                                                                                                                                                                                                                 |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **isVisible**    | Reflects the state of the widget's **Visible** setting _(bool)_.                                                                                                                                                                            |
| **message**      | Contains a message received from the embedded page via the JS [`postMessage()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) method. May be of _any_ type. Before a message received, this property is _undefined_. |
| **source**       | Contains the URL of the embedded page _(string)._ Does not reflect the content set in the widget's **srcDoc** property.                                                                                                                     |
| **title**        | Contains the title of the iframe as set in the widget's **Title** property _(string)._                                                                                                                                                      |

### Events

You can define functions that will be called when these events are triggered in the widget.

| Action                | Description                                                                                                                                                                                                                                                             |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **onURLChanged**      | Sets an an action to take place when the widget's URL is changed. Can be set from the GUI list of common actions ([examples here](../appsmith-framework/widget-actions/)), or you can define a custom JavaScript function to call instead.                              |
| **onSrcDocChanged**   | Sets an an action to take place when the widget's **srcDoc** property is changed. Can be set from the GUI list of common actions ([examples here](../appsmith-framework/widget-actions/)), or you can define a custom JavaScript function to call instead.              |
| **onMessageReceived** | Sets an an action to take place when a `postMessage` event is received from the embedded page. Can be set from the GUI list of common actions ([examples here](../appsmith-framework/widget-actions/)), or you can define a custom JavaScript function to call instead. |

### Styles

Style properties allow you to change the look and feel of the widget.

| Style Properties   | Description                                                                                                                                                                      |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Border Color**   | Sets the color of the widget's border. Accepts valid CSS [`color` ](https://developer.mozilla.org/en-US/docs/Web/CSS/color)values.                                               |
| **Border Opacity** | Sets the opacity of the widget's border. Accepts a _number_ value which is interpreted as a percentage.                                                                          |
| **Border Width**   | Sets the width of the widget's border. Accepts a _number_ value which is interpreted as pixels.                                                                                  |
| **Border Radius**  | Rounds the corners of the widget's outer edge. With JS enabled, this accepts valid CSS [`border-radius`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) values. |
| **Box Shadow**     | Casts a drop shadow from the frame of the widget. With JS enabled, this accepts valid CSS [`box-shadow`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) values.    |
