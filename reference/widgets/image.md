# Image

The Image widget displays the images in your app. Images must be either a URL or a valid base64.

{% embed url="https://youtu.be/jdDcydQ8Ho0" %}

## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

### Widget Properties

These properties allow you to edit the Image widget. All these properties are present in the property pane of the widget. The following table lists all the widget properties.

| Property            | Description                                                                                                            |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **Image**           | Renders the image from the URL or the Base64 that you set.                                                             |
| **Default Image**   | Sets a default image, from a URL or a Base64, that will be displayed if no image is rendered via the "Image" property. |
| **Object Fit**      | Sets how the image should be resized to fit its container.                                                             |
| **Max Zoom Level**  | Sets the maximum allowable zoom level for the image view                                                               |
| **Visible**         | Controls widget's visibility on the page. When turned off, the widget will not be visible when the app is published    |
| **Animate Loading** | Allows you to control a widget’s animation on the page load.                                                           |
| **Enable Rotation** | Controls if the image is allowed to rotate                                                                             |
| **Enable Download** | Controls if the image is allowed to be downloaded.                                                                     |

### Binding Properties

These properties help you share values between widgets and also allow you to easily access the widget property within Queries or JS functions.

| Property      | Description                                                   | Code Snippet                |
| ------------- | ------------------------------------------------------------- | --------------------------- |
| **image**     | This property displays the URL of the image.                  | `{{widget_name.image}}`     |
| **isVisible** | This property indicates whether the widget is visible or not. | `{{widget_name.isVisible}}` |

### Events

They are a set of actions that you can perform on the widget. The following table lists the actions:

| Event       | Description                                                                                                          |
| ----------- | -------------------------------------------------------------------------------------------------------------------- |
| **onClick** | Sets the action to be run when the user clicks the image. See a list of [supported actions](../appsmith-framework/). |

### Styles

Style properties allow you to change the look and feel of the widget.

| Style             | Description                                            |   |
| ----------------- | ------------------------------------------------------ | - |
| **Border Radius** | Allows you to define curved corners.                   |   |
| **Box Shadow**    | Allows you to choose from the available shadow styles. |   |

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
