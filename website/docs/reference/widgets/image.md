# Image

The Image widget is a fundamental component in displaying images within your application. It enables you to incorporate visual elements by accepting images in the form of URLs or valid base64 strings. 

Appsmith supports a wide range of popular image formats such as JPG, PNG, SVG, WebP, and even GIFs, providing you with flexibility in selecting the format that best suits your application needs.


<VideoEmbed host="youtube" videoId="jdDcydQ8Ho0" title="How to use Image Widget" caption="How to use Image Widget"/>

## Display static image 

To display an image, you can specify the image source using the **Image property**. The Image property can accept a **URL**, a **data URI**, or a **base64** encoded image data as its input. For example, you can add this URL in the image property:

```js
https://jpeg.org/images/jpegsystems-home.jpg
```

Moreover, you can also set a **default image** to be displayed in case the image source fails to load or is invalid. This can be accomplished by specifying the default image as an image URL, data URI, or a base64 encoded image data in the Default Image property. 

### Inline SVG

Inline SVG, or Scalable Vector Graphics, refers to an XML-based markup language used to display vector images on the web. To display inline SVG, paste the URL with your SVG code in the image property:

```js
data:image/svg+xml;charset=UTF-8,{{encodeURI('<svg..<your-svg>.. ></svg>')}}

//example
data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Ccircle cx='50' cy='50' r='40' stroke='green' stroke-width='4' fill='yellow' /%3E%3C/svg%3E
```


## Display image dynamically
You can dynamically generate images by fetching data from an API or querying a data source. This allows you to display images that change based on user input or external data sources.


### By table row selection
You can dynamically populate an image based on another widget. For example, you have a Table displaying a list of users with their respective image URLs stored in a column.

![By table row selection ](</img/imagetable.gif>)

 To do this, use the ```{{Table1.selectedRow.image}}``` in the image property where "Table1" is the name of your table widget and "image" is the name of the column containing the image URL.



## Read image

To access the image data, simply reference the binding property in your code or queries using the following syntax:

```js
{{widget_name.image}}
```

This displays the image corresponding to the URL/Base64 specified in the Image property.

You can also use the ```{{widget_name.image}}``` in your queries or JavaScript code to access and manipulate the image data. For instance, you can use this property to pass the image data to an API or to perform image processing operations.

## Download image
You can add a trigger that runs any API or perform an action when the image is clicked. To do this, you can also toggle the "**Download Image**" property in the image widget's property pane. Once enabled, a download icon would appear on the image widget. Clicking on the download icon triggers the download of the image.


![Download image](</img/download-image-widget.gif>)

In addition you can also write the JavaScript query to run the desired action when the image is clicked. For example, to download an image, you can set the onClick event to:

```js
{{download(Image3.image,'my-image-name','image/png')}}
```
## Properties
Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

### Widget properties
These properties are present in the property pane of the widget. The following table lists all the widget properties.

| Property            | Description                                                                                                                                                                                                                                                   |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Image**           | Sets the source from which to render the image. Accepts an image URL, data URI, or base64 encoded image data.                                                                                                                                                 |
| **Default Image**   | Sets a default image that would be displayed if no image is rendered via the **Image** property. Accepts an image URL, data URI, or base64 encoded image data.                                                                                                 |
| **Object Fit**      | Sets how the image should be resized to fit its container. With JS enabled, accepts string values `auto`, `cover`, or `contain`. See CSS [`object-fit`](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) docs for reference on these behaviors. |
| **Max Zoom Level**  | Sets the maximum allowable zoom level for the image view. With JS enabled, accepts _number_ values.                                                                                                                                                           |
| **Visible**         | Controls widget's visibility on the page. When turned off, the widget won't be visible when the app is published.  |
| **Animate Loading** | Controls the widget’s animation on page load.                          |
| **Enable Rotation** | Toggles a control on the widget that allows the user to rotate the image.                                                                                                                                                                                     |
| **Enable Download** | Toggles a control on the widget that allows the user to download the image.                                                                                                                                                                                   |

### Reference properties
These properties allow you to bind your widget with any other widget in queries or JS objects.

 Binding Property | Description                                                      |
| ---------------- | ---------------------------------------------------------------- |
| **image**        | Contains the URL of the image source _(string)._                 |
| **isVisible**    | Reflects the state of the widget's **Visible** setting |

### Style properties
Style properties allow you to change the look and feel of the widget.

| Style Property    | Description                                                                                                                                                                      |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Border Radius** | Rounds the corners of the widget's outer edge. With JS enabled, this accepts valid CSS [`border-radius`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) values. |
| **Box Shadow**    | Casts a drop shadow from the frame of the widget. With JS enabled, this accepts valid CSS [`box-shadow`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) values.    |

## Events

These are functions that are called when event listeners are triggered in the widget. Use [actions](/reference/appsmith-framework/widget-actions) to execute tasks based on user events.


| Event       | Description                                                                                                                                                                                                                     |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **onClick** | Sets an action to take place when the user clicks this widget. |


## Troubleshooting

If you run into any other issues while working with the widget, check out the guide on [widget errors guide](/help-and-support/troubleshooting-guide/widget-errors). If your issue isn't covered in the guide, please connect with support@appsmith.com or raise your query on the [Discord Server](https://discord.com/invite/rBTTVJp).


## Further reading

* [Filter data based on user input](/reference/widgets/table#server-side-filter)
* [Data Access and Binding](/core-concepts/data-access-and-binding)
* [Widgets Reference](/reference/widgets)

