# Text

A text widget displays textual information. Whether you want to add a paragraph or a heading to a container, a text widget makes it easy to style and display text.

<VideoEmbed host="youtube" videoId="-anmDHXDScQ" title="How to use Text Widget" caption="How to use Text Widget"/>

## Properties

Properties allow you to edit the text widget, connect it with other widgets and customize the user actions.

### Widget Properties

These properties enable you to edit the text widget. All these properties are present in the property pane of the widget. The following table lists all the widget properties.

| Property            | Description                                                                                                                                                                                |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Text**            | Sets the text to be displayed.                                                                                                                                                             |
| **Enable Scroll**   | It enables scrolling within a widget's set boundary. It helps you not truncate long text and lets you display it inside a small area on the app.                                           |
| **Truncate text**   | It truncates the text that goes beyond the text box size.                                                                                                                                  |
| **Visible**         | It controls the widget's visibility on the page. When turned off, the widget will not be visible when the app is published.                                                                |
| **Animate Loading** | Control’s widget’s loading animation on the page. When turned off, the widget will load without any skeletal animation. This can be controlled with JS until all the widgets are rendered. |
| **Disable link**    | It parses any link in the widget as standard text.                                                                                                                                         |
| [**Height**](./README.md#auto-height)         | Auto height is a capability in widgets to change height in response to content changes. This is a configurable property. The configuration to this property can be found in the property pane under the section `General`, with the property name `Height`.                                      |

Let's understand the widget properties in detail.

#### Text

The `Text` field takes the input for the text widget. You can also add `HTML` code in the Text field manually or dynamically to render it in the widget.

<VideoEmbed host="youtube" videoId="jIOajSSe6vI" title="Text" caption="Text"/>

:::info
Text field can only render inline CSS. If you want to use external CSS, we suggest using the [iFrame widget.](iframe.md)
:::

#### Truncate Text

This property shortens the text in the text box and further adds three ellipses at the bottom left of the widget. Clicking on the three ellipses opens up a pop-up showing all the text inside the text widget. It is enabled by default and truncation will only be applied if the text is longer than what can fit inside the given widget area.

<VideoEmbed host="youtube" videoId="Pex6RAyeHso" title="Truncate Text" caption="Truncate Text"/>

#### Visible

`Visible` controls the widget’s visibility on the app’s page. The widget will not be visible on the published app if you turn off this property. You can also write a `JS`\` code to link Visible’s functionality to a user action. Click on `JS` next to the Visible to write JavaScript code.

For example, let’s drag a checkbox widget `checkbox1` onto the canvas and bind it to the `Visible` property. To enable the `Visible` when the user checks the checkbox, add the following JavaScript code:

```
{{Checkbox1.isChecked}}
```

When you tick the checkbox, it will enable the Visible property, and the text widget will be visible in the app.

<VideoEmbed host="youtube" videoId="NBDZVBKX4jM" title="Visible" caption="Visible"/>

#### Disable link

It prevents the input text from being parsed as a link. You can also write a `JS` code to link Disable the link’s functionality to a user action. Click on `JS` next to the `Disable link` to write JavaScript code.

For example, let’s drag a checkbox widget `checkbox1` onto the canvas and bind it to the `Disable link` property. To enable the `Disable link` when the user checks the checkbox, add the following JavaScript code:

```
{{Checkbox1.isChecked}}
```

When you tick the checkbox, it will enable the Disable link property, and the input will be parsed as text.

<VideoEmbed host="youtube" videoId="bmPk0arvZQM" title="Disable link" caption="Disable link"/>


### Binding Properties

These properties help you share values between widgets and also allow you to easily access the widget property within Queries or JS functions.

| Property      | Description                                                   | Code Snippet         |
| ------------- | ------------------------------------------------------------- | -------------------- |
| **isVisible** | This property indicates whether the widget is visible or not. | `{{Text.isVisible}}` |
| **text**      | This property returns the widget's text value.                | `{{Text.text}}`      |

### Styles

Style properties allow you to modify the text widget visually. It has several options, such as -

* **Cell background color:** It lets you choose the background color of the text widget.
* **Text color:** It gives an option to change the color of the text.
* **Border color:** It allows you to change the border color of the text widget.
* **Border width:** You can define the width of the border here. It takes input in px.
* **Text size:** It gives you an option to specify the text size.
* **Font style:** Using this property, you can modify your text visually.
* **Font Family:** Using this property, you can select a thefont.
* **Text Align:** This property focuses on the text alignment inside the text widget. It has three options - left, center, or right.

<VideoEmbed host="youtube" videoId="kXkGfzGSxYA" title="Styles" caption="Styles"/>
