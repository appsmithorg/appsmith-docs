# Image

The Image widget displays the images in your app. Images must be either a URL or a valid base64.

{% embed url="https://youtu.be/jdDcydQ8Ho0" %}

## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

### Widget Properties

These properties allow you to edit the Image widget. All of these properties are present in the property pane of the widget. The following table lists all the widget properties.

| Property            | Description                                                                                                                                                                                                                                                   |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Image**           | Sets the source from which to render the image. Accepts an image URL, data URI, or base64 encoded image data.                                                                                                                                                 |
| **Default Image**   | Sets a default image that will be displayed if no image is rendered via the **Image** property. Accepts an image URL, data URI, or base64 encoded image data.                                                                                                 |
| **Object Fit**      | Sets how the image should be resized to fit its container. With JS enabled, accepts _string_ values "auto", "cover", or "contain". See CSS [`object-fit`](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) docs for reference on these behaviors. |
| **Max Zoom Level**  | Sets the maximum allowable zoom level for the image view. With JS enabled, accepts _number_ values.                                                                                                                                                           |
| **Visible**         | Controls widget's visibility on the page. When turned off: The widget will not be visible when the app is published. It appears translucent when in Edit mode.                                                                                                |
| **Animate Loading** | When turned off, the widget will load without any skeletal animation. You can use a toggle switch to turn it on/off. You can also turn it off/on using javascript by enabling the `JS` label next to it.                                                      |
| **Enable Rotation** | Toggles a control on the widget that allows the user to rotate the image.                                                                                                                                                                                     |
| **Enable Download** | Toggles a control on the widget that allows the user to download the image.                                                                                                                                                                                   |

### Binding Properties

These properties allow you to bind your Image widget with any other widget in queries or JS objects. The following table lists all the binding properties.

| Binding Property | Description                                                      |
| ---------------- | ---------------------------------------------------------------- |
| **image**        | Contains the URL of the image source _(string)._                 |
| **isVisible**    | Reflects the state of the widget's **Visible** setting _(bool)_. |

### Events

You can define functions that will be called when these events are triggered in the widget.

| Event       | Description                                                                                                                                                                                                |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **onClick** | Sets an action to take place when the user clicks this widget. Can be set from the GUI list of common actions ([examples here](broken-reference)), or you can define a custom JS function to call instead. |

### Styles

Style properties allow you to change the look and feel of the widget.

| Style Property    | Description                                                                                                                                                                      |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Border Radius** | Rounds the corners of the widget's outer edge. With JS enabled, this accepts valid CSS [`border-radius`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) values. |
| **Box Shadow**    | Casts a drop shadow from the frame of the widget. With JS enabled, this accepts valid CSS [`box-shadow`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) values.    |

## Supported File Type

Appsmith supports almost every primary image format, including:

* JPG
* PNG
* SVG
* WebP
* GIFs.

You can use the same method to display different image formats. Let’s see how you can display:

* Drag & Drop the Image widget into the canvas.
* Now in the image section, paste your image URL.
* For example,

```
//png:
 https://assets.appsmith.com/widgets/default.png

//jpg:
https://jpeg.org/images/jpegsystems-home.jpg

//gif:
https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5eeea355389655.59822ff824b72.gif

//webp:
https://www.gstatic.com/webp/gallery/4.sm.webp

//svg:
https://assets.codepen.io/3/kiwi.svg
```

#### Inline SVG

Inline SVG refers to SVG markup included in the markup of a webpage. To display inline SVG, follow the below steps:

* Drag & Drop the Image widget into the canvas\*\*.\*\*
* Now in the image section, paste the below mentioned URL with your SVG code:

```
data:image/svg+xml;charset=UTF-8,{{encodeURI('<svg..<your-svg>.. ></svg>')}}
```

You can even use an encoded URL like this:

```
example 1:
data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle r='50' cx='50' cy='50' fill='tomato'/%3E%3Ccircle r='41' cx='47' cy='50' fill='orange'/%3E%3Ccircle r='33' cx='48' cy='53' fill='gold'/%3E%3Ccircle r='25' cx='49' cy='51' fill='yellowgreen'/%3E%3Ccircle r='17' cx='52' cy='50' fill='lightseagreen'/%3E%3Ccircle r='9' cx='55' cy='48' fill='teal'/%3E%3C/svg%3E

example 2:
data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Ccircle cx='50' cy='50' r='40' stroke='green' stroke-width='4' fill='yellow' /%3E%3C/svg%3E
```

{% hint style="info" %}
You can use URL-based SVG files just like any other image.
{% endhint %}
