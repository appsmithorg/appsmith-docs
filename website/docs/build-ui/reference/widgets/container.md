# Container

This page explains how to use Container widgets to group multiple widgets. To do so, you can either drop the widgets inside a Container widget or select the widgets and use `cmd+g` to create a Container widget.


<VideoEmbed host="youtube" videoId="mfPGTUxr6SY" title="Using the Container Widget" caption="Using the Container Widget"/>

## Configure height

The **Height** property in a Container widget determines how the widget's height reacts to content changes. Selecting **Auto Height** adjusts the height dynamically based on the size of its contents, which is useful for handling dynamic content.

However, you can also enable **Auto height with limits** to set minimum and maximum height limits for the widget, even when its content changes dynamically. To use this feature, set the two handles that appear on the Container widget to drag and set the height limits.

## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.


### Widget properties

These properties allow you to edit the widget. All of these properties are present in the property pane of the widget.

|  Property   | Data type |  Description                                                                                                                                                                      |
| -----------------| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Visible**           | Boolean  | 	Controls widget's visibility on the page. When turned off: The widget won't be visible when the app is published.  |
| **Animate Loading**    | Boolean | Allows you to control a widget’s animation on the page load. |
| **Scroll Contents**    | Boolean  | Enables scrolling in this widget when its contents are larger than its dimensions.  |
| **Height**   | String | This property determines how the widget's height reacts to content changes. It has three possible configurations:<br/>**Fixed**: The height of the widget remains as set using drag and resize.<br/> **Auto Height**: The height of the widget reacts to content changes.<br/>  **Auto Height with limits**: Same as Auto height, with a configurable option to set the minimum and maximum number of rows that can be occupied by the widget.                                      |


### Reference properties

These properties can be referenced in other widgets, queries, or JS functions using the dot operator. For instance, you can use `Container1.isVisible` to get the visibility status.

| Reference Property | Data type | Description                                                                                                                                                    |
| ----------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **backgroundColor**  | String| Represents the widget's **Background Color** setting as a CSS [`color` ](https://developer.mozilla.org/en-US/docs/Web/CSS/color)value _(string)_. |
| **isVisible**       | Boolean | Reflects the state of the widget's **Visible** setting _(bool)_.                                                                                  |

### Style properties

Style properties allow you to change the look and feel of the widget. All of these properties are present in the property pane of the widget.

|  Property   | Data type |  Description                                                                                                                                                                      |
| -----------------| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Background Color** | String | Sets the background color of the widget. Accepts CSS [`color` ](https://developer.mozilla.org/en-US/docs/Web/CSS/color)values.                                                  |
| **Border Color**    | String | Sets the border color of the widget. Accepts CSS [`color` ](https://developer.mozilla.org/en-US/docs/Web/CSS/color)values.                                                      |
| **Border Width**    | Number | Sets the width of the widget's border. Accepts _number_ values only, in px.                                                                                                      |
| **Border Radius**   | String | Rounds the corners of the widget's outer edge. With JS enabled, this accepts valid CSS [`border-radius`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) values. |
| **Box Shadow**      | String | Casts a drop shadow from the frame of the widget. With JS enabled, this accepts valid CSS [`box-shadow`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) values.    |

## Methods

Widget property setters enable you to modify the values of widget properties at runtime, eliminating the need to manually update properties in the editor.

These methods are asynchronous, and you can use the `.then()` block to ensure execution and sequencing of subsequent lines of code in Appsmith.


#### setVisibility `boolean`

<dd>

Sets the visibility of the widget.

*Example*:

```js
Container1.setVisibility(true)
```

To perform sequential actions, use the `.then()` block for execution.

```js
Container1.setVisibility(true).then(() => {
  // code to be executed after visibility is set
})
```

</dd>