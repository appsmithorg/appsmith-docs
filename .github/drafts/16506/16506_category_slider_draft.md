*** Category Slider ***

The Category Slider widget allows users to choose from a fixed set of incremental values.

# Properties

Properties allow you to edit the Category Slider widget, connect it with other widgets and customize the user actions.

| **Property** | **Type** | **Description** | **Code Snippet** |
|--------------|----------|-----------------|------------------|
| **Options** | Formatting | An _array of objects_ with keys `value` and `label` which define the possible selections that the user can make with the slider. | `{{<widget-name>.options}}` |
| **Default Value** | Formatting | This sets the slider's initial value, before the user makes any adjustments. This value should be between the slider's **Min Value** and **Max Value**. _(number)_ | `{{<widget-name>.defaultValue}}` |
| **Marks** | Formatting | An _array of objects_ with keys `value` and `label` which define where reference labels should appear below the widget's slider. These labels can be shown or hidden with the **Show Marks** property toggle. | `{{<widget-name>.marks}}` |
| **Show Marks** | Formatting | Toggles on/off the widget's reference labels below the slider element.  | `{{<widget-name>.showMarks}}` |
| **Visible** | Formatting | Controls widget's visibility on the page. When turned off: The widget won't be visible when the app is published. It appears translucent when in Edit mode. | `{{<widget-name>.visible}}` |
| **Disabled** | Formatting | Makes the widget un-clickable or unusable. The widget will remain visible to the user but user interaction won't be allowed. | `{{<widget-name>.disabled}}` |
| **Animate Loading** | Formatting | When turned off, the widget will load without any skeletal animation. You can use a toggle switch to turn it on/off. You can also turn it off/on using JavaScript by enabling the JS label next to it. | `{{<widget-name>.animateLoading}}` |
| **value** | Formatting | Represents the value the value which is currently selected in the widget. | `{{<widget-name>.value}}` |

These properties allow you to perform formatting changes or bind it to any other widget in queries or JS objects. Let's understand the properties in detail.

### Options
Use the `Options` property to define the set of choices that the user may choose from with the slider. This property should be an array of objects, each with a `label` key (text to be displayed to the user) and a `value` key (the corresponding value to use within your widgets and code).

![](https://youtu.be/VpdlnhOL3Eo)

### Default Value
When your app is loaded for the first time, or when the page is refreshed, the Category Slider widget is automatically set to this value. Please note that this property should be set to match the `value` attribute of your desired option from the **Options** object.

![](https://youtu.be/GOQ0SguBbp0)

### Show Marks
This property is a toggle that enables/disables the label markings along the bottom of the slider.

![](https://youtu.be/-4DS16RBkeI)

## Conclusion
The Category Slider widget is great for collecting non-numerical data that falls along a range of possible values. Consider using this widget when your users' responses are expected to fall along a spectrum or range.