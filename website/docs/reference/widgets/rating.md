# Rating

The Rating widget is used to perform a quick rating operation on something.

<VideoEmbed host="youtube" videoId="ssm7TYCQtfo" title="How to use Rating Widget" caption="How to use Rating Widget"/>

Use the Rate component to rate any sort of information from the connected data source. It's customizable and features rich.

## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

### Widget Properties

These properties allow you to edit the Rating widget. All these properties are present in the property pane of the widget. The rating widget comes with the following settings:

| Property             | Description                                                                                                                      |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **Max Rating**       | The total number of stars you would like to rate the information with                                               |
| **Default Rating**   | Sets the default option of the rating widget                                                                                     |
| **Tooltips**         | Sets the tooltip content of starts. This expects an array of strings that can describe the values of each star   |
| **Size**             | The star's sizes can be varied, default is set to `Medium`                                                                       |
| **Allow half stars** | When toggled, half star ratings are accepted                                                                                     |
| **Visible**          | Controls widget's visibility on the page. When turned off, the widget will not be visible when the app is published |
| **Disabled**         | Disables input/selection to the widget. The widget will remain visible to the user but user input/selection will not be allowed. |
| **Read Only**        | Disallows user input, but the stars retain their normal styling and the star's **Tooltips** remain visible when the user hovers with the mouse cursor. When the **Disabled** setting is on, the **Read Only** mode is ignored. |
| **Animate Loading**  | Allows you to control a widget’s animation on the page load.                                                                     |
| **Height**](./README.md#auto-height)         | Auto height is a capability in widgets to change height in response to content changes. This is a configurable property. The configuration to this property can be found in the property pane under the section `General`, with the property name `Height`.                                      |

### Binding Properties

These properties help you share values between widgets and also allow you to easily access the widget property within Queries or JS functions.

| Property      | Description                                                                                    | Code Snippet                |
| ------------- | ---------------------------------------------------------------------------------------------- | --------------------------- |
| **isVisible** | This property indicates whether the widget is visible or not.                                  | `{{widget_name.isVisible}}` |
| **maxCount**  | This property indicates the total number of stars you would like to rate the information with. | `{{widget_name.maxCount}}`  |
| **value**     | This property indicates the value selected by user.                                            | `{{widget_name.value}}`     |

### Events

They are a set of actions that you can perform on the widget.

| Events       | Description                                                                                                            |
| ------------ | ---------------------------------------------------------------------------------------------------------------------- |
| **onChange** | Triggers an action when the rate is changed. See a list of [supported actions](../appsmith-framework/widget-actions/). |

### Styles

Style properties allow you to change the look and feel of the widget.

| Style              | Description                                                                     |
| ------------------ | ------------------------------------------------------------------------------- |
| **Active color**   | Sets the color of stars for that are provided in the default rate. |
| **Inactive color** | Sets the color of inactive stars                                                |
