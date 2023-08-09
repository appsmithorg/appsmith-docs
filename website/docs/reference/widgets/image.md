---
description: >-
  Image widget reference
---

# Image

This page describes the properties of the Image widget. You can add images using URLs or base64 strings. The Image widget supports popular formats such as JPG, PNG, SVG, WebP, and GIF.

## Content propeties

These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.

### Data

#### Image `string`

<dd>

Sets the source from which to render the image. Accepts an image URL, data URI, or base64 encoded image data.

*Example*: If you want to display inline SVG, paste your SVG content in the Image property and escape the special characters with the UTF-8 equivalents.

```js
data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Ccircle cx='50' cy='50' r='40' stroke='green' stroke-width='4' fill='yellow' /%3E%3C/svg%3E
```

You can also display images that dynamically change based on user input or other components, such as widgets or queries.

*Example:* Suppose you have a Table widget displaying a list of users with their respective image URLs stored in a column. To bind the images, use `{{Table1.selectedRow.image}}` in the Image property, where "Table1" is the name of your table widget, and "image" is the column name containing the image URL.

<figure>
  <img src="/img/imagetable.gif" style= {{width:"700px", height:"auto"}} alt="Display images on table row selection"/>
  <figcaption align = "center"><i>Display images on table row selection</i></figcaption>
</figure>


</dd>

#### Default image `string`

<dd>

Sets a default image that would be displayed if no image is rendered via the **Image** property. Accepts an image URL, data URI, or base64 encoded image data.

</dd>

### General

#### Object fit `string`

<dd>

Sets how the image should be resized to fit its container.

*Options:*

- **Contain**: The image keeps its aspect ratio, but is resized to fit within the widget dimension.
- **Cover**: The image keeps its aspect ratio and fills the widget dimension, which means the image is clipped to fill the widget.
- **Auto**: The image retains its original dimensions. 

With **JS** enabled, accepts string values `auto`, `cover`, or `contain`. See CSS [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) for reference on these behaviors.

</dd>

#### Max zoom level `number`

<dd>

Sets the maximum allowable zoom level for the image view. Th available options are **2x**, **4x**, **8x**, **16x**. With **JS** enabled, it accepts a number as the zoom level.

</dd>

#### Visible `boolean`

<dd>

Controls the visibility of the widget. If you turn off this property, the widget is not visible in View mode. Additionally, you can use JavaScript by clicking on **JS** next to the **Visible** property to control the widget's visibility conditionally.

For example,  if you want to make the widget visible only when the user checks an item in a Checkbox widget, you can use the following JavaScript expression in the visible property of the Image widget:

```js
{{Checkbox1.isChecked}}
```

</dd>

#### Animate Loading `boolean`

<dd>

Controls whether the widget is displayed with a loading animation. When enabled, the widget shows a skeletal animation during the loading process. Additionally, you can control it through JavaScript by clicking on the **JS** next to the property.

</dd>

#### Enable rotation `boolean`

<dd>

Enables control over image rotation. When enabled, hover over the image and click the rotate icon.

</dd>

#### Enable download `boolean`

<dd>

Enables users to control whether the image is allowed to be downloaded. When enabled, hover over the image and click the download icon. 

Alternatively, you can use the built-in [Download](/reference/appsmith-framework/widget-actions/download) function and set it to run on the [**onClick**](#onclick) event of the Image widget as shown below:


```js
{{download(Image1.image,'my-image-name','image/png')}}
```


</dd>

### Events 

#### onClick 

<dd>

Allows you to configure one or multiple actions (Framework functions, queries, or JS functions) to be executed when the user clicks on the image. You can chain multiple actions together, and all the nested actions would run simultaneously.

</dd>

## Style properties

Style properties allow you to change the look and feel of the widget.

### Border and shadow

#### Border radius `string`

<dd>

Applies rounded corners to the outer edge of the widget. If JavaScript is enabled, you can specify valid [CSS border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) to adjust the radius of the corners.

</dd>

#### Box Shadow `string`
 

<dd>

This property adds a drop shadow effect to the frame of the widget. If JavaScript is enabled, you can specify valid [CSS box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) values to customize the appearance of the shadow.

</dd>

## Reference properties

Reference properties enable you to access the widget's data and state using the dot operator in other widgets or JavaScript functions. They provide additional information or allow interaction with the widget programmatically. For instance, to retrieve the visibility status of an Image widget, you can use `Image1.isVisible`.

#### image `string`

<dd>

Contains the URL of the image source.

*Example:*

```js
{{Image1.image}}
```

</dd>

#### isVisible `boolean`

<dd>

The `isVisible` property indicates the visibility state of a widget, with true indicating it is visible and false indicating it is hidden.

*Example:*
```js
{{Image1.isVisible}}
```

</dd>

## Methods

Widget property setters enable you to modify the values of widget properties at runtime, eliminating the need to manually update properties in the editor.

These methods are asynchronous and return a [Promise](/core-concepts/writing-code/javascript-promises#using-promises-in-appsmith). You can use the `.then()` block to ensure the execution and sequencing of subsequent lines of code in Appsmith.


#### setVisibility (param: boolean): Promise

<dd>

Sets the visibility of the widget.

*Example*:

```js
Image1.setVisibility(true)
```

</dd>


#### setImage (param: string): Promise

<dd>

Sets the `base64` encoded image in the Image widget.

*Example*:

```js
Image1.setImage('data:image/png;base64,iVBORw0KG...')
```

</dd>

## Display images from S3 bucket

To fetch an image from [S3](/connect-data/reference/querying-amazon-s3), follow these steps:

* Click the + icon next to Queries/JS and choose your S3 datasource.
* Select the "List files" method from the Commands drop-down menu.
* Provide the required parameters for reading the file, including the bucket name, file path and file data type.

Once you have added all the required parameters in the Image property pane, add:
```js
{{list_files.data[0].signedUrl}}
```