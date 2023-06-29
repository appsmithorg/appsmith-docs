# Text

This document explains how to display static or dynamic textual information using the Text widget.


<VideoEmbed host="youtube" videoId="-anmDHXDScQ" title="Use the Text widget to display data" caption="Use the Text widget to display data"/>

## Display static text

To display static text enter the desired text directly into the `Text` property. The text remains the same until manually updated or edited. 

This method is useful when you need to display fixed information, such as **instructions** or **labels**, that don't change based on user interactions. 

Additionally, you can use **HTML code** in the Text field to customize the appearance of the displayed text. Text field can only render inline CSS. To use external CSS, it's recommended to use the [Iframe widget](/reference/widgets/iframe). For instance, you can use:

```js
<p style="color:blue;">Hello World</p>
```

## Display dynamic text

To display dynamic text that changes based on user interactions or data from external sources, you can use binding values to connect different widgets and their properties.


For example, if you have a Table widget that displays a list of tasks, where each row contains the task name, the person assigned to the task, and the deadline for completion.

```json
[
  {
    "Name": "John",
    "Task": "Create report",
    "Deadline": "2023-04-01"
  },
  {
    "Name": "Alice",
    "Task": "Review proposal",
    "Deadline": "2023-04-03"
  },
  {
    "Name": "Bob",
    "Task": "Update website",
    "Deadline": "2023-04-05"
  }
]
```

Now, if you want to display the details of a particular task in a Text widget when the user clicks on the corresponding row in the Table widget, you can use the following steps:

```js
{{Table1.selectedRow.task}}
```



## Properties
Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

### Widget properties
These properties are present in the property pane of the widget. The following table lists all the widget properties.


| Property            	|         Data type        	| Description                                                                                                                                                                                                                                                                                                                                                                                            	|
|---------------------	|:------------------------:	|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| **Text**                	| String                   	| Sets the text to be displayed.                                                                                                                                                                                                                                                                                                                                                                         	|
| **Overflow Text**       	| String 	| Controls the text behavior when the length of the text exceeds. You can choose between Scroll, Truncate and None. Scroll: This option enables scrolling within the boundaries of the Text widget. Truncate: This option shortens text in a Text widget and adds ellipses at the bottom left. Clicking on the ellipses reveals a pop-up with the full text if it exceeds the widget area.               	|
| **Visible**             	| Boolean                 	| Controls the widget's visibility on the page. When turned off, the widget would not be visible when the app is published.                                                                                                                                                                                                                                                                              	|
| **Animate Loading**     	| Boolean                  	| Controls the widget's loading animation. This can be controlled with JS until all the widgets are rendered.                                                                                                                                                                                                                                                                                            	|
| **Disable link**        	| Boolean                  	| It parses any link in the widget as standard text.                                                                                                                                                                                                                                                                                                                                                     	|
| **Height**              	| String                   	| It configures how a widget’s height reacts to content changes. It has three possible configurations:<br/>**Fixed**: The height of the widget remains as set using drag and resize.<br/>**Auto Height**: The height of the widget reacts to content changes.<br/>  **Auto Height with limits**: Same as Auto height, with a configurable option to set the minimum and maximum number of rows that can be occupied by the widget.                                                                                                                                                                         	|



### Reference properties
These properties can be referenced in other widgets, queries, or JS functions using the dot operator. For instance, to get the text, you can use `Text1.text`.

| Property            	|         Data type        	| Description                                                                                                                                                                                                                                                                                                                                                                                            	|
|---------------------	|:------------------------:	|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| **isVisible** | Boolean    | This property indicates whether the widget is visible or not. |
| **text**      | String    | This property returns the widget's text value.                |

### Style properties

Style properties allow you to change the look and feel of the widget.



| Property            	|         Data type        	| Description                                                                                                                                                                                                                                                                                                                                                                                            	|
|---------------------	|:------------------------:	|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| **Font Family**     | String             	| Allows you to select a font for the text.                                                                                             	|
| **Font Size**      | String          	       	| Allows you to set the size of the label.                                                                                                                                                                     	|
| **Text Color**     | String           	            	| Allows you to change the color of the text.                                                                                                                                               	|
| **Background Color**   | String                   	|  Allows you to change the background color of the text widget.                                                                                                                            	|
| **Border Color**      | String         	          	| Allows you to change the border color of the text widget.                                                                                                                                                            	|
| **Alignment**        | String       	          	| This property focuses on the text alignment inside the text widget.                                                                                                                                                            	|
| **Emphasis**      | String         	          	| Allows you to choose a font style; bold or italic.                                                                                                                                                   	|
| **Border Width**   | Number            	          	| You can define the width of the border here. It takes input in px.                                                                                                              	|

## Methods

Widget property setters enable you to modify the values of widget properties at runtime, eliminating the need to manually update properties in the editor.

These methods are asynchronous, and you can use the `.then()` block to ensure execution and sequencing of subsequent lines of code in Appsmith.


#### setVisibility `boolean`

<dd>

Sets the visibility of the widget.

*Example*:

```js
Text1.setVisibility(true)
```

To perform sequential actions, use the `.then()` block for execution.

```js
Text1.setVisibility(true).then(() => {
  // code to be executed after visibility is set
})

```

</dd>


#### setDisabled `boolean`

<dd>

Sets the disabled state of the widget.

*Example*:

```js
Text1.setDisabled(false)
```

To perform sequential actions, use the `.then()` block for execution.

```js
Text1.setDisabled(false).then(() => {
  // code to be executed after disabled state is set
})
```

</dd>

#### setRequired `boolean`

<dd>

Sets whether the widget is required or not.

*Example*:

```js
Text1.setRequired(true)
```

To perform sequential actions, use the `.then()` block for execution.

```js
Text1.setRequired(true).then(() => {
  // code to be executed after required state is set
})
```

</dd>

#### setText `string`

<dd>

Sets the text value of the widget.

*Example*:

```js
Text1.setText('Hello, world!')
```

To perform sequential actions, use the `.then()` block for execution.

```js
Text1.setText('Hello, world!').then(() => {
  // code to be executed after text value is set
})
```

</dd>







#### setTextColor `string`

<dd>

Sets the selected option of the Select widget.

*Example*:

```js
Text1.setColor('#FF0000')
```

To perform sequential actions, use the `.then()` block for execution.

```js
Text1.setColor('#FF0000').then(() => {
  // code to be executed after color is set
})
```

</dd>

