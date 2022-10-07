*** Number Slider ***

The Number Slider widget allows users to choose a numerical value from a range of data.

# Properties

Properties allow you to edit the Number Slider widget, connect it with other widgets and customize the user actions.

| **Property** | **Type** | **Description** | **Code Snippet** |
|--------------|----------|-----------------|------------------|
| **Min Value** | Formatting | The starting/smallest possible value of the slider. The value may be negative and/or include decimals, however it must always be less than the **Max Value**. _(number)_ | `{{<widget-name>.minValue}}` |
| **Max Value** | Formatting | The ending/largest possible value of the slider. The value may be negative and/or include decimals, however it must always be greater than the **Min Value**. _(number)_ | `{{<widget-name>.maxValue}}` |
| **Step Size** | Formatting | The increment by which the user can adjust the slider's value. This increment must be at least 0.1, and can't be less than the **Min Value** or greater than the **Max Value**. _(number)_ | `{{<widget-name>.stepSize}}` |
| **Default Value** | Formatting | This sets the slider's initial value, before the user makes any adjustments. This value should be between the slider's **Min Value** and **Max Value**. _(number)_ | `{{<widget-name>.defaultValue}}` |
| **Marks** | Formatting | An _array of objects_ with keys `value` and `label` which define where reference labels should appear below the widget's slider. These labels can be shown or hidden with the **Show Marks** property toggle. | `{{<widget-name>.marks}}` |
| **Show Marks** | Formatting | Toggles on/off the widget's reference labels below the slider element.  | `{{<widget-name>.showMarks}}` |
| **Visible** | Formatting | Controls widget's visibility on the page. When turned off: The widget won't be visible when the app is published. It appears translucent when in Edit mode. | `{{<widget-name>.visible}}` |
| **Disabled** | Formatting | Makes the widget un-clickable or unusable. The widget will remain visible to the user but user interaction won't be allowed. | `{{<widget-name>.disabled}}` |
| **Animate Loading** | Formatting | When turned off, the widget loads without any skeletal animation. You can use a toggle switch to turn it on/off. You can also turn it off/on using JavaScript by enabling the JS label next to it. | `{{<widget-name>.animateLoading}}` |
| **Tooltip Always On** | Formatting | Hovering over the slider with the mouse cursor shows the slider's selected value in a tooltip; enabling this setting forces the tooltip to always be visible, regardless of the cursor's location. _(bool)_ | `{{<widget-name>.tooltipAlwaysOn}}` |
| **value** | Binding | Represents the value the value which is currently selected in the widget. _(number)_ | `{{<widget-name>.value}}` |

These properties allow you to perform formatting changes or bind it to any other widget in queries or JS objects.

### Min Value / Max Value
These properties represent the lower and upper bounds of values that can be selected with the slider. The **Min Value** determines the value at the far left end of the widget, and the **Max Value** determines the value at the far right end. Negative and/or decimal values are allowed, however the Min Value must always be less than the Max Value.

![](https://youtu.be/VphLW50YPKo)

### Step Size
The `Step Size` property determines the smallest increment by which the user may adjust the value selected by the slider. Smaller values for this property (can't be smaller than 0.1) result in more fine control of the selection, whereas larger step sizes result in more coarse control.

![](https://youtu.be/mecwJ-D49gU)

### Default Value
When your app is loaded for the first time, or when the page is refreshed, the Number Slider widget will be automatically set to this value.

![](https://youtu.be/GOQ0SguBbp0)

### Marks
Marks appear along the bottom of the widget as labels for the different values along the slider. Using the `Marks` property, which is an array of objects with keys `label` and `value`, you can define where these marks appear and how they're labelled. Each mark appears below the place where its `value` is located on the slider, and has the text from its corresponding `label`.

![](https://youtu.be/9lkNIjJ8EFs)

### Show Marks
This property is a toggle that enables/disables the marks along the bottom of the slider.

![](https://youtu.be/-4DS16RBkeI)

### Tooltip Always On
When this property is enabled, the widget's tooltip is *always* visible, and shows the currently selected value on the slider. If this setting is turned off, the tooltip is only visible when the user is hovering over the slider with their mouse cursor.

![](https://youtu.be/mtlqTYBplqk)

## Conclusion
Numerical sliders can be helpful when you want to add a visual component to a user's selection of a numerical value. This way, values can be selected at-a-glance for estimations; or even for watching incremental changes in a dataset as the slider value gradually increases or decreases.