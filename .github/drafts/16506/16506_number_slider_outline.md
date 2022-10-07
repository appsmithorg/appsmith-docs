*** Number Slider ***

The Number Slider widget allows users to choose a numerical value from a range of data.

< TODO: NEED VIDEO DEMO >

# Properties

Properties allow you to edit the Number Slider widget, connect it with other widgets and customize the user actions.

| **Property** | **Type** | **Description** | **Code Snippet** |
|--------------|----------|-----------------|------------------|
| **Min Value** | Formatting | The starting/smallest possible value of the slider. The value may be negative and/or include decimals, however it must always be less than the **Max Value**. _(number)_ | `{{<widget-name>.minValue}}` |
| **Max Value** | Formatting | The ending/largest possible value of the slider. The value may be negative and/or include decimals, however it must always be greater than the **Min Value**. _(number)_ | `{{<widget-name>.maxValue}}` |
| **Step Size** | Formatting | The increment by which the user can adjust the slider's value. This increment must be at least 0.1, and cannot be less than the **Min Value** or greater than the **Max Value**. _(number)_ | `{{<widget-name>.stepSize}}` |
| **Default Value** | Formatting | This sets the slider's initial value, before the user makes any adjustments. This value should be between the slider's **Min Value** and **Max Value**. _(number)_ | `{{<widget-name>.defaultValue}}` |
| **Marks** | Formatting | An _array of objects_ with keys `value` and `label` which define where reference labels should appear below the widget's slider. These labels can be shown or hidden with the **Show Marks** property toggle. | `{{<widget-name>.marks}}` |
| **Tooltip Always On** | Formatting | Hovering over the slider with the mouse cursor shows the slider's selected value in a tooltip; enabling this setting will force the tooltip to always be visible, regardless of the cursor's location. _(bool)_ | `{{<widget-name>.tooltipAlwaysOn}}` |
| **Show Marks** | Formatting |  | `{{<widget-name>.showMarks}}` |
| **Visible** | Formatting |  | `{{<widget-name>.visible}}` |
| **Disabled** | Formatting |  | `{{<widget-name>.disabled}}` |
| **Animate Loading** | Formatting |  | `{{<widget-name>.animateLoading}}` |
| **value** | Binding | Represents the value the value which is currently selected in the widget. _(number)_ | `{{<widget-name>.value}}` |

These properties allow you to perform formatting changes or bind it to any other widget in queries or JS objects. Let's understand the properties in detail.

### Min Value / Max Value

### Step Size

### Default Value

### Marks

### Tooltip Always On

## Conclusion