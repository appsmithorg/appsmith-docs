---
description: Learn how to display documents using the Document Viewer widget.
---
# Document Viewer

This page provides an introduction on how to utilize the Document Viewer widget for displaying documents.

<VideoEmbed host="youtube" videoId="UuecSUqFOpQ" title="Using the Document Viewer Widget" caption="Using the Document Viewer Widget"/>

## Content properties
These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.


### Data
#### Document Link `URL / Base64`

<dd>

This property allows you to include a URL or base64-encoded content to view various file formats. The supported file extensions for the widget are:

* .txt
* .pdf
* .ppt *(not supported by base64)*
* .pptx
* .docx
* .xlsx

Additionally, you can populate the document by retrieving data from a source such as an API or Datasource Query. 

</dd>

#### Visible `Boolean`

<dd>

This property controls the visibility of the widget. If you turn off this property, the widget would not be visible in view mode. Additionally, you can use JavaScript by clicking on `JS` next to the Visible property to conditionally control the widget's visibility.

</dd>

#### Animate Loading `Boolean`

<dd>

This property controls whether the widget is displayed with a loading animation. When enabled, the widget shows a skeletal animation during the loading process. Additionally, you can control it through JavaScript by clicking on the `JS` next to the property.

</dd>

## Reference properties
These properties are not available in the property pane, but can be accessed using the dot operator in other widgets or JavaScript functions. For instance, to get the visibility status, you can use `DocumentViewer1.isVisible`.


#### docUrl `String`
<dd>

The `docUrl` property contains the URL of the uploaded document and is used to display the link to access the document. 

</dd>


#### isVisible `Boolean`
<dd>

The `isVisible` property reflects the state of the widget's **Visible** setting. It is represented by a boolean value, where true indicates that the widget is visible, and false indicates that it is hidden or not displayed on the page.
</dd>


Watch the following videos to learn how to generate PDF reports using [Apitemplate.io](https://www.youtube.com/watch?v=8j6Z9bZvLqA) and [Carbone.io](https://www.youtube.com/watch?v=xlthDth2S6Q).

## Methods

Widget property setters enable you to modify the values of widget properties at runtime, eliminating the need to manually update properties in the editor.

These methods are asynchronous, and users have the option to either await them or use the `.then()` block to ensure appsmith reactivity is maintained for subsequent lines of code.


#### setVisibility `boolean`

<dd>

Sets the visibility of the widget.

*Example*:

```js
DocumentViewer1.setVisibility(true)
```

To perform additional actions based on the completed state setting, use the `.then()` block.

```js
DocumentViewer1.setVisibility(true).then(() => {
  // code to be executed after visibility is set
})
```

</dd>


#### setURL `boolean`

<dd>

Updates the URL of the document to be displayed in the Document Viewer widget. 

*Example*:

```js
DocumentViewer1.setURL('<https://example.com/file.txt>')
```

To perform additional actions based on the completed state setting, use the `.then()` block.

```js
DocumentViewer1.setURL('<https://example.com/file.txt>').then(() => {
  // code to be executed after URL is set
})
```

</dd>

