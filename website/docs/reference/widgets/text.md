# Text

This document explains how to display static or dynamic textual information using text widget.


<VideoEmbed host="youtube" videoId="-anmDHXDScQ" title="Use the Text widget to Bind Data" caption="Use the Text widget to Bind Data"/>

## Display static text

To display static text enter the desired text directly into the `Text` property. The text remains the same until manually updated or edited. 

This method is useful when you need to display fixed information, such as **instructions** or **labels**, that don't change based on user interactions. 

Additionally, you can use **HTML code** in the Text field to customize the appearance of the displayed text. Text field can only render inline CSS. To use external CSS, it's recommended to use the [Iframe widget](/reference/widgets/iframe). For instance, you can use:

```js
<p style="color:blue;">{{Input1.text}}</p>
```

## Display dynamic text

To display dynamic text that changes based on user interactions or data from external sources, you can use binding values to connect different widgets and their properties.


For example, if you have a table widget with a list of tasks, and you want to display the details of the currently selected task in a text widget, you can use a binding like this:

```js
{{Table1.selectedRow.task}}
```

## Downloading the content

To download the content, you need to add a Text widget to the canvas and enter the desired text. Then, add a Button widget and configure it to run the Download method in the onClick event. Alternatively, you can use the following JS code to download the text:

```js
{{download(Text1.text,'LoremIpsum.txt','text/plain')}}
```
This code downloads the text in the Text widget as a plain text file named `LoremIpsum.txt`. You can customize the filename and type by adjusting the parameters in the download function.

Learn more about the [Download method](/reference/appsmith-framework/widget-actions/download).

## Properties
Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

### Widget properties
These properties are present in the property pane of the widget. The following table lists all the widget properties.


| Property            | Description                                                                                                                                                                                |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Text**            | Sets the text to be displayed.                                                                                                                                                             |
| **Scroll**   | This option enables scrolling within the boundaries of the Text widget. It allows you to display longer text within a small area of the app without truncating it, and lets users scroll through the content to view it in its entirety.                             |
| **Truncate text**   | This feature truncates the text in the Text widget and adds three ellipses at the bottom left corner. If the text is longer than the widget area, clicking on the ellipses opens up a pop-up that displays the entire text.                                                                                                                           |
| **Visible**         | It controls the widget's visibility on the page. When turned off, the widget would not be visible when the app is published.                                                                |
| **Animate Loading** | Controls the widget's loading animation. This can be controlled with JS until all the widgets are rendered. |
| **Disable link**    | It parses any link in the widget as standard text.                                                                                                                                         |
| [**Height**](/reference/widgets/#height)        | It configures how a widget’s height reacts to content changes. It has three possible configurations:<br/>**Fixed**: The height of the widget remains as set using drag and resize.<br/>**Auto Height**: The height of the widget reacts to content changes.<br/>  **Auto Height with limits**: Same as Auto height, with a configurable option to set the minimum and maximum number of rows that can be occupied by the widget.                                      |




### Reference properties
These properties can be referenced in other widgets, queries, or JS functions using the dot operator.

| Property      | Description                                                   | Code Snippet         |
| ------------- | ------------------------------------------------------------- | -------------------- |
| **isVisible** | This property indicates whether the widget is visible or not. | `{{Text.isVisible}}` |
| **text**      | This property returns the widget's text value.                | `{{Text.text}}`      |

### Style properties

Style properties allow you to change the look and feel of the widget.


| Events             | Description                                                                                                                                    |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **Font Family**                	| Allows you to select a font for the text.                                                                                             	|
| **Font Size**              	       	| Allows you to set the size of the label.                                                                                                                                                                     	|
| **Text Color**              	            	| Allows you to change the color of the text.                                                                                                                                               	|
| **Background Color**                    	|  Allows you to change the background color of the text widget.                                                                                                                            	|
| **Border Color**             	          	| Allows you to change the border color of the text widget.                                                                                                                                                            	|
| **Alignment**             	          	| This property focuses on the text alignment inside the text widget.                                                                                                                                                            	|
| **Emphasis**             	          	| Allows you to choose a font style; bold or italic.                                                                                                                                                   	|
| **Border Width**             	          	| You can define the width of the border here. It takes input in px.                                                                                                              	|


## Further reading

* [Rich Text Editor](/reference/widgets/rich-text-editor)
* [Queries](/core-concepts/data-access-and-binding/querying-a-database)
* [Form](/reference/widgets/form)


