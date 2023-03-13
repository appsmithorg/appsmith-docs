# Text

This page explains the use of a Text widget for displaying and binding textual information.



<VideoEmbed host="youtube" videoId="-anmDHXDScQ" title="How to use Text Widget" caption="How to use Text Widget"/>

## Display text manually

If you want to display text manually, enter the desired text directly into the `Text field`. This method of displaying text is static, meaning that the text remains the same until it's manually updated or edited. 

This method is useful when you need to display fixed information, such as **instructions** or **labels**, that don't change based on user interactions. 

Additionally, you can use **HTML code** in the Text field to customize the appearance of the displayed text. Text field can only render inline CSS. To use external CSS, it's recommended to use the [iFrame widget](/reference/widgets/iframe). For instance, you can use:

```js
<p style="color:blue;">{{Input1.text}}</p>
```

## Display text dynamically

You can dynamically display text that's generated in real-time based on user interactions or data from external sources like APIs or other widgets. This method is useful when the text needs to be updated or changed frequently based on changing conditions or user inputs. 


You can achieve this is by binding values from different widgets to display the text. For instance, if you want to display text based on user selection in a table widget, you can utilize the syntax.

```js
{{Table1.selectedRow.task}}
```

## Overflow text

When displaying long strings of text within a Text widget, it's important to ensure that the text is displayed without affecting the layout of the user interface. Overflow text property refers to text that extends beyond the visible boundaries of a widget. 

When the [**height**](/reference/widgets/#height) property of a Text widget is set to "auto," the height of the widget is adjusted automatically based on the length of the text. However, when the height property is set to a **fixed**, it provides options to handle **overflow text**. You can use:

* **Truncate Text:** This feature truncates the text in the Text widget and adds three ellipses at the bottom left corner. If the text is longer than the widget area, clicking on the ellipses opens up a pop-up that displays the entire text.

* **Scroll:** This option enables scrolling within the boundaries of the Text widget. It allows you to display longer text within a small area of the app without truncating it, and lets users scroll through the content to view it in its entirety.

## Downloading the content

Downloading content allows you to save the content for later use or share it with others. To download the content:

* Add a Text widget to the canvas and enter the desired Text.
* Add a Button widget to the canvas.
* Run the Download method in the onClick event of the button created. You can also write JS code like this:

```js
{{download(Text1.text,'LoremIpsum.txt','text/plain')}}
```

## Properties
Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

### Widget properties
These properties are present in the property pane of the widget. The following table lists all the widget properties.


| Property            | Description                                                                                                                                                                                |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Text**            | Sets the text to be displayed.                                                                                                                                                             |
| **Enable Scroll**   | It enables scrolling within a widget's set boundary. It helps you not truncate long text and lets you display it inside a small area on the app.                                           |
| **Truncate text**   | It truncates the text that goes beyond the text box size.                                                                                                                                  |
| **Visible**         | It controls the widget's visibility on the page. When turned off, the widget would not be visible when the app is published.                                                                |
| **Animate Loading** | Control’s widget’s loading animation on the page. When turned off, the widget loads without any skeletal animation. This can be controlled with JS until all the widgets are rendered. |
| **Disable link**    | It parses any link in the widget as standard text.                                                                                                                                         |
| [**Height**](/reference/widgets/#height)        | It configures how a widget’s height reacts to content changes. It has three possible configurations:<br/>**Fixed**: The height of the widget remains as set using drag and resize.<br/>**Auto Height**: The height of the widget reacts to content changes.<br/>  **Auto Height with limits**: Same as Auto height, with a configurable option to set the minimum and maximum number of rows that can be occupied by the widget.                                      |




### Reference properties
These properties allow you to bind your select widget with any other widget in queries or JS objects.

| Property      | Description                                                   | Code Snippet         |
| ------------- | ------------------------------------------------------------- | -------------------- |
| **isVisible** | This property indicates whether the widget is visible or not. | `{{Text.isVisible}}` |
| **text**      | This property returns the widget's text value.                | `{{Text.text}}`      |

### Style properties

Style properties allow you to change the look and feel of the widget.


| Events             | Description                                                                                                                                    |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **Font Family**                	| Allows you to select a font.                                                                                                                                                    	|
| **Font Size**              	       	| Allows you to set the size of the label.                                                                                                                                                                     	|
| **Text Color**              	            	| Allows you to change the color of the text.                                                                                                                                               	|
| **Background Color**                    	|  Allows you to change the background color of the text widget.                                                                                                                            	|
| **Border Color**             	          	| Allows you to change the border color of the text widget.                                                                                                                                                            	|
| **Alignment**             	          	| This property focuses on the text alignment inside the text widget.                                                                                                                                                            	|
| **Emphasis**             	          	| Allows you to choose a font style; bold or italic.                                                                                                                                                   	|
| **Border Width**             	          	| You can define the width of the border here. It takes input in px.                                                                                                              	|

## Troubleshooting

If you run into any other issues while working with the widget, check out the guide on [widget errors guide](/help-and-support/troubleshooting-guide/widget-errors). If your issue isn't covered in the guide, please connect with support@appsmith.com or raise your query on the [Discord Server](https://discord.com/invite/rBTTVJp).


## Further reading

* [Rich Text Editor](/reference/widgets/rich-text-editor)
* [Button widget](/reference/widgets/button)
* [Form widget](/reference/widgets/form)


