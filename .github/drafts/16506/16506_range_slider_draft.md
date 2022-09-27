*** Range Slider ***

The Range Slider widget allows users to choose a range of values from numerical data.

# Properties

Properties allow you to edit the Range Slider widget, connect it with other widgets and customize the user actions.

| **Property** | **Type** | **Description** | **Code Snippet** |
|--------------|----------|-----------------|------------------|
| **Min Value** | Formatting | The starting/smallest possible value of the slider. The value may be negative and/or include decimals, however it must always be less than the **Max Value**. _(number)_ | `{{<widget-name>.minValue}}` |
| **Max Value** | Formatting | The ending/largest possible value of the slider. The value may be negative and/or include decimals, however it must always be greater than the **Min Value**. _(number)_ | `{{<widget-name>.maxValue}}` |
| **Step Size** | Formatting | The increment by which the user can adjust the slider's value. This increment must be at least 0.1, and can't be less than the **Min Value** or greater than the **Max Value**. _(number)_ | `{{<widget-name>.stepSize}}` |
| **Min Range** | Formatting | The minimum difference between the Range Slider's starting and ending values. _(number)_ | `{{<widget-name>.minRange}}` |
| **Default Start Value** | Formatting | This sets the initial value for the slider's lesser/left handle, before the user makes any adjustments. This value should be between the slider's **Min Value** and **Max Value**. _(number)_ | `{{<widget-name>.defaultStartValue}}` |
| **Default End Value** | Formatting | This sets the initial value for the slider's greater/right handle, before the user makes any adjustments. This value should be between the slider's **Min Value** and **Max Value**. _(number)_ | `{{<widget-name>.defaultEndValue}}` |
| **Marks** | Formatting | An _array of objects_ with keys `value` and `label` which define where reference labels should appear below the widget's slider. These labels can be shown or hidden with the **Show Marks** property toggle. | `{{<widget-name>.marks}}` |
| **Tooltip Always On** | Formatting | Hovering over the slider with the mouse cursor shows the slider's selected value in a tooltip; enabling this setting forces the tooltip to always be visible, regardless of the cursor's location. _(bool)_ | `{{<widget-name>.tooltipAlwaysOn}}` |
| **start** | Binding | Represents the beginning value of the user's selected range. _(number)_ | `{{<widget-name>.startValue}}` |
| **end** | Binding | Represents the ending value of the user's selected range. _(number)_ | `{{<widget-name>.endValue}}` |

These properties allow you to perform formatting changes or bind it to any other widget in queries or JS objects.

### Min Value / Max Value
These properties represent the lower and upper bounds of values that can be selected with the slider. The **Min Value** determines the value at the far left end of the widget, and the **Max Value** determines the value at the far right end. Negative and/or decimal values are allowed, however the Min Value must always be less than the Max Value.

![](https://youtu.be/VphLW50YPKo)

### Step Size
The `Step Size` property determines the smallest increment by which the user may adjust the value selected by the slider. Smaller values for this property (can't be smaller than 0.1) result in more fine control of the selection, whereas larger step sizes result in more coarse control.

![](https://youtu.be/mecwJ-D49gU)

### Min Range
This property represents the minimum difference allowed between the low and high ends of the user's selection. This value can't be less than 0.1.

![](https://youtu.be/C40N4hh3SRA)

### Default Start / End Value
When your app is loaded for the first time, or when the page is refreshed, the two ends of the Range Slider widget are automatically set to these values.

![](https://youtu.be/2-iIwfNigbo)

### Marks
Marks appear along the bottom of the widget as labels for the different values along the slider. Using the `Marks` property, which is an array of objects with keys `label` and `value`, you can define where these marks appear and how they're labelled. Each mark appears below the place where its `value` is located on the slider, and has the text from its corresponding `label`.

![](https://youtu.be/9lkNIjJ8EFs)

### Tooltip Always On
When this property is enabled, the widget's tooltip is *always* visible, and shows the currently selected value on the slider. If this setting is turned off, the tooltip is only visible when the user is hovering over the slider with their mouse cursor.

![](https://youtu.be/mtlqTYBplqk)

### start / end
These binding properties allow you to access the values that have been selected with the Range Slider. For example, if the selected slider range is `45` to `80`, then the `start` and `end` values would look like:

```
{{RangeSlider1.start}}
// 45

{{RangeSlider1.end}}
// 80
```

![](https://youtu.be/c5jzfvx1hvQ)

## Conclusion
Range sliders are a great choice when you have a large dataset, but only wish to see a portion of it at a time. They provide an easy way to choose exactly what part you'd like to use, and offer a visual representation of the size of your selection relative to the whole.