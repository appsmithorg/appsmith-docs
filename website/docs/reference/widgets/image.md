# Image

This page provides information on how to use the Image widget. You can add images in the form of URLs or base64 strings. The Image widget supports popular formats such as JPG, PNG, SVG, WebP and GIF.

## Content Propeties

These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.

### Data

#### Image `string`

<dd>

Sets the source from which to render the image. Accepts an image URL, data URI, or base64 encoded image data.

</dd>

#### Default image `string`

<dd>

Sets a default image that would be displayed if no image is rendered via the **Image** property. Accepts an image URL, data URI, or base64 encoded image data.

</dd>

### General

#### Object fit `string`

<dd>

Sets how the image should be resized to fit its container. With JS enabled, accepts string values `auto`, `cover`, or `contain`. See CSS [`object-fit`](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) for reference on these behaviors.

</dd>

#### Max zoom level 

## Display static images 

You can specify the image source using the **Image property** to display an image. The Image property can accept a **URL**, a **data URI**, or a **base64** encoded image data as its input. For example, you can add this URL in the image property:

```js
https://jpeg.org/images/jpegsystems-home.jpg
```

You can also set an image in the **Default Image**  property to be displayed if the image source fails to load or is invalid. 

### Inline SVG

To display inline SVG, paste your SVG content in the Image property and escape the special characters with the UTF-8 equivalents.

```js
data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Ccircle cx='50' cy='50' r='40' stroke='green' stroke-width='4' fill='yellow' /%3E%3C/svg%3E
```

## Display images dynamically
This allows you to display images that change based on user input or other components, such as a widget or query. For example, suppose you have a Table displaying a list of users with their respective image URLs stored in a column.

Bind ```{{Table1.selectedRow.image}}``` in the Image property where "Table1" is the name of your table widget and "image" is the name of the column containing the image URL.

<figure>
  <img src="/img/imagetable.gif" style= {{width:"700px", height:"auto"}} alt="Display images on table row selection"/>
  <figcaption align = "center"><i>Display images on table row selection</i></figcaption>
</figure>


## Display images from S3 bucket

To fetch an image from [S3](/connect-data/reference/querying-amazon-s3), follow these steps:

* Click the + icon next to Queries/JS and choose your S3 datasource.
* Select the "List files" method from the Commands drop-down menu.
* Provide the required parameters for reading the file, including the bucket name, file path and file data type.

Once you have added all the required parameters in the Image property pane, add:
```js
{{list_files.data[0].signedUrl}}
```

## Download images
You can toggle the **Enable Download** property in the Image widget's property pane. Once enabled, a download icon appears on the image.

<figure>
  <img src="/img/download-image-ss.png" style= {{width:"700px", height:"auto"}} alt="Download image"/>
  <figcaption align = "center"><i>Download image</i></figcaption>
</figure>

Alternatively, you can use the built-in [Download](/reference/appsmith-framework/widget-actions/download) function and set it to run on the `onClick` event of the Image widget:

```js
{{download(Image1.image,'my-image-name','image/png')}}
```

## Properties
Properties allow you to customize the widget, connect it to other widgets and trigger events on user actions.

### Widget properties

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
These properties can be referenced in other widgets, queries, or JS functions using the dot operator.

 Property | Description                                                      |
| ---------------- | ---------------------------------------------------------------- |
| **image**        | Contains the URL of the image source _(string)._                 |
| **isVisible**    | Reflects the state of the widget's **Visible** setting |

### Style properties
Style properties allow you to change the look and feel of the widget.

| Property    | Description                                                                                                                                                                      |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Border Radius** | Rounds the corners of the widget's outer edge. With JS enabled, this accepts valid CSS [`border-radius`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) values. |
| **Box Shadow**    | Casts a drop shadow from the frame of the widget. With JS enabled, this accepts valid CSS [`box-shadow`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) values.    |

## Events

These are functions that are called when event listeners are triggered in the widget. Use [actions](/reference/appsmith-framework/widget-actions) to execute tasks based on user events.


| Event       | Description                                                                                                                                                                                                                     |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **onClick** | Sets an action when the user clicks this widget. |

## Methods

Widget property setters enable you to modify the values of widget properties at runtime, eliminating the need to manually update properties in the editor.

These methods are asynchronous, and you can use the `.then()` block to ensure execution and sequencing of subsequent lines of code in Appsmith.


#### setVisibility `boolean`

<dd>

Sets the visibility of the widget.

*Example*:

```js
Image1.setVisibility(true)
```

To perform sequential actions, use the `.then()` block for execution.

```js
Image1.setVisibility(true).then(() => {
  // code to be executed after visibility is set
})
```

</dd>


#### setImage `string`

<dd>

Sets the `base64` encoded image in the Image widget.

*Example*:

```js
Image1.setImage('data:image/png;base64,iVBORw0KG...')
```

To perform sequential actions, use the `.then()` block for execution.

```js
Image1.setImage('data:image/png;base64,iVBORw0KG...').then(() => {
  // code to be executed after image is set
})
```

</dd>

## Further reading

* [Amazon S3](/connect-data/reference/querying-amazon-s3)
* [Filepicker widget](/reference/widgets/filepicker)

