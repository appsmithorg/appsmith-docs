# Rating

The Rating widget is used to perform a quick rating operation on something.

{% embed url="https://youtu.be/ssm7TYCQtfo" %}

Use the Rate component to rate any sort of information from the connected data source. It's customizable and features rich.

## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

### Widget Properties

These properties allow you to edit the Rating widget. All these properties are present in the property pane of the widget. The rating widget comes with the following settings:

| Property             | Description                                                                                                                      |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **Max Rating**       | <p>The total number of stars you would</p><p>like to rate the information with</p>                                               |
| **Default Rating**   | Sets the default option of the rating widget                                                                                     |
| **Tooltips**         | <p>Sets the tooltip content of starts. This expects an</p><p>an array of strings that can describe the values of each star</p>   |
| **Size**             | The star's sizes can be varied, default is set to `Medium`                                                                       |
| **Allow half stars** | When toggled, half star ratings are accepted                                                                                     |
| **Visible**          | <p>Controls widget's visibility on the page. When turned</p><p>off, the widget will not be visible when the app is published</p> |
| **Disabled**         | Disables input/selection to the widget. The widget will remain visible to the user but user input/selection will not be allowed.
|
| **Read Only**         | Makes the widget non-interactive. |
| **Animate Loading**  | Allows you to control a widget’s animation on the page load.                                                                     |

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
| **Active color**   | <p>Sets the color of stars for that are</p><p>provided in the default rate.</p> |
| **Inactive color** | Sets the color of inactive stars                                                |
