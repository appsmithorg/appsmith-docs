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

<ZoomImage src="/img/iframe-website.png" alt="Display external website" caption="Display external website" />

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
    <div className="time-picker">
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

<ZoomImage src="/img/iframe-time-pick.png" alt="Custom Time-picker" caption="Custom Time-picker" />

</dd>

:::info
* If the Iframe widget has a value in the **srcDoc** property, it overrides the **URL** property.
* If [X-Frame-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options) is set to DENY on the external page or website, the Iframe widget fails to load.
:::

See how to [create custom widgets](/build-apps/how-to-guides/Create-Custom-Widgets-Using-Iframe) using Iframe.


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


Learn how to [Communicate Between an App and Iframe](/build-apps/how-to-guides/Communicate-Between-an-App-and-Iframe)
 



### Limitations

You cannot create custom widgets using Iframe that rely on underlying platform capabilities, such as:

* Widgets that act as a canvas or parent for other widgets. Eg: _Container_.
* Widgets that act as a _Modal_ or _Drawer_ on top of the existing canvas.
* Cannot use auto-height or responsiveness features for widgets within the Iframe.


Appsmith currently does not support HTML formatting and error parsing. As a result, Appsmith cannot identify any HTML or CSS errors in the **srcDoc** property.

For complex widgets with frequent updates, it is advisable to utilize an external service like CodeSandbox or host your own code to maintain your solution more efficiently.

## See also
- [Post Messages Between App and Iframe](/build-apps/how-to-guides/Communicate-Between-an-App-and-Iframe)
- [Create Custom Widgets Using Iframe](/build-apps/how-to-guides/Create-Custom-Widgets-Using-Iframe)


