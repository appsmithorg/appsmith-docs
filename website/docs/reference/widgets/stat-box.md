# Stat Box

Statbox widget shows and highlights essential statistics related to the application. The widget comes pre-built with a default layout which can change as per application requirements

<figure>
  <object data="https://www.youtube.com/embed/fcWH9Qpa-DQ?autoplay=0" width='860px' height='515px'></object> 
  <figcaption align="center"><i>How to use Stat Box Widget</i></figcaption>
</figure>

### Stat box Widgets

Statbox widgets are a class of widgets used to show application information. Following are the stat box widgets Appsmith supports -

* [**Icon Button**](icon-button.md)
* [**Text**](text.md)

## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

### Widget Properties

These properties allow you to edit the widget. All these properties are present in the property pane of the widget. The following table lists all the widget properties.

| Property            | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| **Visible**         | Controls the visibility of the widget.                       |
| **Animate Loading** | Allows you to control a widget’s animation on the page load. |
| **Scroll Contents** | Enables scrolling for content inside the widget.             |

### Binding Properties

These properties help you share values between widgets and also allow you to easily access the widget property within Queries or JS functions.

| Property      | Description                                                   | Code Snippet             |
| ------------- | ------------------------------------------------------------- | ------------------------ |
| **isVisible** | This property indicates whether the widget is visible or not. | `{{Statbox1.isVisible}}` |

### Styles

Style properties allow you to change the look and feel of the widget.

| Property            | Description                                                                                |
| ------------------- | ------------------------------------------------------------------------------------------ |
| **backgroundColor** | Control Statbox container background color.                                                |
| **Border Color**    | Controls the color of the border, you can use an HTML color name, HEX, RGB, or RGBA value. |
| **Border Width**    | Sets the value for border width.                                                           |
| **Border Radius**   | Allows you to define curved corners.                                                       |
| **Box Shadow**      | Allows you to choose from the available shadow styles.                                     |
