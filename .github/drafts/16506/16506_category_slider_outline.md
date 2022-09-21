*** Category Slider ***

The Category Slider widget allows users to choose from a fixed set of incremental values.

< TODO: NEED VIDEO DEMO >

# Properties

Properties allow you to edit the Category Slider widget, connect it with other widgets and customize the user actions.

| **Property** | **Type** | **Description** | **Code Snippet** |
|--------------|----------|-----------------|------------------|
| **Options** | Formatting | An _array of objects_ with keys `value` and `label` which define the possible selections that the user can make with the slider. | `{{<widget-name>.options}}` |
| **Default Value** | Formatting | This sets the slider's initial value, before the user makes any adjustments. This value should be between the slider's **Min Value** and **Max Value**. _(number)_ | `{{<widget-name>.defaultValue}}` |
| **Marks** | Formatting | An _array of objects_ with keys `value` and `label` which define where reference labels should appear below the widget's slider. These labels can be shown or hidden with the **Show Marks** property toggle. | `{{<widget-name>.marks}}` |
| **Show Marks** | Formatting |  | `{{<widget-name>.showMarks}}` |
| **Visible** | Formatting |  | `{{<widget-name>.visible}}` |
| **Disabled** | Formatting |  | `{{<widget-name>.disabled}}` |
| **Animate Loading** | Formatting |  | `{{<widget-name>.animateLoading}}` |
| **value** | Formatting | Represents the value the value which is currently selected in the widget. | `{{<widget-name>.value}}` |

These properties allow you to perform formatting changes or bind it to any other widget in queries or JS objects. Let's understand the properties in detail.

### Options

### Default Start Value

### Marks

## Conclusion
