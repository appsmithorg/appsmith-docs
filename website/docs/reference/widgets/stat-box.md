# Stats Box

A Stat Box widget shows and highlights essential statistics related to the application. The widget comes pre-built with a default layout which can change as per application requirements


### Stats Box widget

Stats Box widgets are a class of widgets used to show application information. Following are the Stats Box widgets Appsmith supports -

* [**Icon Button**](icon-button.md)
* [**Text**](text.md)

## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

### Widget properties

These properties allow you to edit the widget. All these properties are present in the property pane of the widget. The following table lists all the widget properties.

| Property            | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| **Visible**         | Controls the visibility of the widget.                       |
| **Animate Loading** | Allows you to control a widget’s animation on the page load. |
| **Scroll Contents** | Enables scrolling for content inside the widget.             |
| [**Height**](/reference/widgets/#height)        | It configures how a widget’s height reacts to content changes. It has three possible configurations:<br/>**Fixed**: The height of the widget remains as set using drag and resize.<br/>**Auto Height**: The height of the widget reacts to content changes.<br/>  **Auto Height with limits**: Same as Auto height, with a configurable option to set the minimum and maximum number of rows that can be occupied by the widget.                                      |

### Binding properties

These properties help you share values between widgets and also allow you to easily access the widget property within Queries or JS functions.

| Property      | Description                                                   | Code Snippet             |
| ------------- | ------------------------------------------------------------- | ------------------------ |
| **isVisible** | This property indicates whether the widget is visible or not. | `{{Statbox1.isVisible}}` |

### Styles

Style properties allow you to change the look and feel of the widget.

| Property            | Description                                                                                |
| ------------------- | ------------------------------------------------------------------------------------------ |
| **backgroundColor** | Control Stats Box container background color.                                                |
| **Border Color**    | Controls the color of the border, you can use an HTML color name, HEX, RGB, or RGBA value. |
| **Border Width**    | Sets the value for border width.                                                           |
| **Border Radius**   | Allows you to define curved corners.                                                       |
| **Box Shadow**      | Allows you to choose from the available shadow styles.                                     |


## Methods

Widget property setters enable you to modify the values of widget properties at runtime, eliminating the need to manually update properties in the editor.

These methods are asynchronous, and users have the option to either await them or use the `.then()` block to ensure appsmith reactivity is maintained for subsequent lines of code.

#### setVisibility `boolean`

<dd>

Sets the visibility of the widget.

*Example*:

```js
Statbox1.setVisibility(true)
```

To perform additional actions based on the completed state setting, use the `.then()` block.

```js
Statbox1.setVisibility(true).then(() => {
  // code to be executed after visibility is set
})

```

</dd>