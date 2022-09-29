*** Range Slider ***

The Range Slider widget allows users to choose a range of values from numerical data.

# Properties

Properties allow you to edit the Range Slider widget, connect it with other widgets and customize the user actions.

| **Property** | **Type** | **Description** | **Code Snippet** |
|--------------|----------|-----------------|------------------|
| **Min Value** | Formatting | The starting/smallest possible value of the slider. The value may be negative and/or include decimals, however it must always be less than the **Max Value**. _(number)_ |  |
| **Max Value** | Formatting | The ending/largest possible value of the slider. The value may be negative and/or include decimals, however it must always be greater than the **Min Value**. _(number)_ |  |
| **Step Size** | Formatting | The increment by which the user can adjust the slider's value. This increment must be at least 0.1, and can't be greater than the **Max Value**. _(number)_ |  |
| **Min Range** | Formatting | The minimum distance allowed between the selected values. _(number)_ |  |
| **Default Start Value** | Formatting | Sets an initial value to be captured as the starting value of the range, unless it's changed by the user. This value should be between the slider's **Min Value** and **Max Value**, and should be less than its **Default End Value**. _(number)_ |  |
| **Default End Value** | Formatting | Sets an initial value to be captured as the ending value of the range, unless it's changed by the user. This value should be between the slider's **Min Value** and **Max Value**, and should be greater than its **Default Start Value**. _(number)_ |  |
| **Marks** | Formatting | An _array of objects_ with keys `value` and `label` which define where reference labels should appear below the widget's slider. These labels can be shown or hidden with the **Show Marks** property toggle. |  |
| **Tooltip Always On** | Formatting | Hovering over the slider with the mouse cursor shows the slider's selected value in a tooltip; enabling this setting forces the tooltip to always be visible, regardless of the cursor's location. _(bool)_ |  |
| **start** | Binding | Represents the beginning value of the user's selected range. _(number)_ | `{{<widget-name>.startValue}}` |
| **end** | Binding | Represents the ending value of the user's selected range. _(number)_ | `{{<widget-name>.endValue}}` |

These properties allow you to perform formatting changes or bind it to any other widget in queries or JS objects.

### Min Value / Max Value
These properties represent the lower and upper bounds of values that can be selected with the slider. The **Min Value** determines the value at the far left end of the widget, and the **Max Value** determines the value at the far right end. Negative and/or decimal values are allowed, however the Min Value must always be less than the Max Value.

{% embed url="https://youtu.be/VphLW50YPKo" %}

### Step Size
The `Step Size` property determines the smallest increment by which the user may adjust the value selected by the slider. Smaller values for this property (can't be smaller than 0.1) result in finer control of the selection, whereas larger step sizes result in coarser control.

{% embed url="https://youtu.be/mecwJ-D49gU" %}

### Min Range
This property represents the minimum difference allowed between the low and high ends of the user's selection. This value can't be less than 0.1.

{% embed url="https://youtu.be/C40N4hh3SRA" %}

### Default Start / End Value
Sets an initial start/end value for the range to be captured as user input unless it's changed by the user.

{% embed url="https://youtu.be/2-iIwfNigbo" %}

### Marks
Marks appear along the bottom of the widget as labels for the different values along the slider. Using the `Marks` property, which is an array of objects with keys `label` and `value`, you can define where these marks appear and how they're labeled. Each mark appears below the place where its `value` is located on the slider, and has the text from its corresponding `label`.

{% embed url="https://youtu.be/9lkNIjJ8EFs" %}

### Tooltip Always On
When this property is enabled, the widget's tooltip is *always* visible, and shows the currently selected value on the slider. If this setting is turned off, the tooltip is only visible when the user is hovering over the slider with their mouse cursor.

{% embed url="https://youtu.be/mtlqTYBplqk" %}

### start / end
These binding properties allow you to access the values that have been selected with the Range Slider. For example, if the selected slider range is `45` to `80`, then the `start` and `end` values would look like:

```
{{RangeSlider1.start}}
// 45

{{RangeSlider1.end}}
// 80
```

{% embed url="https://youtu.be/c5jzfvx1hvQ" %}

## Events

Each variant of the Slider widget has events that are called when the user adjusts the widget's values:

| **Event** | **Description** | **Example** | **Code Snippet** |
|-----------|-----------------|-------------|------------------|
| **onStartValueChange** | (Range Slider) Sets an action to take place when the user changes the range's start value. Can be set from the GUI list of common actions (See a list of [supported actions](https://docs.appsmith.com/reference/appsmith-framework/widget-actions)), or you can define a custom JavaScript function to call instead. | Filtering a dataset according to user input. |  |
| **onEndValueChange** | (Range Slider) Sets an action to take place when the user changes the range's end value. Can be set from the GUI list of common actions (See a list of [supported actions](https://docs.appsmith.com/reference/appsmith-framework/widget-actions)), or you can define a custom JavaScript function to call instead. | Filtering a dataset according to user input. |  |

## Conclusion
Range sliders are a great choice when you have a large dataset, but only wish to see a portion of it at a time. They provide an easy way to choose exactly what part you'd like to use, and offer a visual representation of the size of your selection relative to the whole.