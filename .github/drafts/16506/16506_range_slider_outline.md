*** Range Slider ***

The Range Slider widget allows users to choose a range of values from numerical data.

< TODO: NEED VIDEO DEMO >

# Properties

Properties allow you to edit the Range Slider widget, connect it with other widgets and customize the user actions.

| **Property** | **Type** | **Description** | **Code Snippet** |
|--------------|----------|-----------------|------------------|
| **Min Value** | Formatting | The starting/smallest possible value of the slider. The value may be negative and/or include decimals, however it must always be less than the **Max Value**. _(number)_ | `{{<widget-name>.minValue}}` |
| **Max Value** | Formatting | The ending/largest possible value of the slider. The value may be negative and/or include decimals, however it must always be greater than the **Min Value**. _(number)_ | `{{<widget-name>.maxValue}}` |
| **Step Size** | Formatting | The increment by which the user can adjust the slider's value. This increment must be at least 0.1, and cannot be less than the **Min Value** or greater than the **Max Value**. _(number)_ | `{{<widget-name>.stepSize}}` |
| **Min Range** | Formatting |  | `{{<widget-name>.minRange}}` |
| **Default Start Value** | Formatting | This sets the initial value for the slider's lesser/left handle, before the user makes any adjustments. This value should be between the slider's **Min Value** and **Max Value**. _(number)_ | `{{<widget-name>.defaultStartValue}}` |
| **Default End Value** | Formatting | This sets the initial value for the slider's greater/right handle, before the user makes any adjustments. This value should be between the slider's **Min Value** and **Max Value**. _(number)_ | `{{<widget-name>.defaultEndValue}}` |
| **Marks** | Formatting | An _array of objects_ with keys `value` and `label` which define where reference labels should appear below the widget's slider. These labels can be shown or hidden with the **Show Marks** property toggle. | `{{<widget-name>.marks}}` |
| **Tooltip Always On** | Formatting | Hovering over the slider with the mouse cursor shows the slider's selected value in a tooltip; enabling this setting will force the tooltip to always be visible, regardless of the cursor's location. _(bool)_ | `{{<widget-name>.tooltipAlwaysOn}}` |
| **startValue** | Binding | Represents the beginning value of the user's selected range. _(number)_ | `{{<widget-name>.startValue}}` |
| **endValue** | Binding | Represents the ending value of the user's selected range. _(number)_ | `{{<widget-name>.endValue}}` |

These properties allow you to perform formatting changes or bind it to any other widget in queries or JS objects. Let's understand the properties in detail.

### Min Value / Max Value

### Step Size

### Min Range

### Default Start / End Value

### Marks

### Tooltip Always On

### startValue / endValue

## Conclusion