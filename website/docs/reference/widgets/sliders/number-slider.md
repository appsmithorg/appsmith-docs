---
description: >-
  The Number Slider widget allows users to choose a numerical value from a range
  of data.
---

# Number Slider

Use the Number Slider when you want to allow the user to select a numerical value from a set range of possible data. For example, it may be used to set a variable for some calculation while only allowing values within a reasonable range.

![Number Slider](</img/as_number.png>)

## Properties

Properties allow you to edit the Number Slider widget, connect it with other widgets and customize the user actions.

| Property                                                            | Type       | Description                                                                                                                                                                                                            | Code Snippet              |
| ------------------------------------------------------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| [**Min Value**](number-slider.md#min-value-max-value)       | Formatting | The starting/smallest possible value of the slider. The value may be negative and/or include decimals, however it must always be less than the **Max Value**. _(number)_                                               |                           |
| [**Max Value**](number-slider.md#min-value-max-value)       | Formatting | The ending/largest possible value of the slider. The value may be negative and/or include decimals, however it must always be greater than the **Min Value**. _(number)_                                               |                           |
| [**Step Size**](number-slider.md#step-size)                 | Formatting | The increment by which the user can adjust the slider's value. This increment must be at least 0.1, and can't be greater than the **Max Value**. _(number)_                                                            |                           |
| [**Default Value**](number-slider.md#default-value)         | Formatting | Sets an initial number to be captured as user input unless it's changed by the user. This value should be between the slider's **Min Value** and **Max Value**. _(number)_                                             |                           |
| [**Marks**](number-slider.md#marks)                         | Formatting | An _array of objects_ with keys `value` and `label` which define where reference labels should appear below the widget's slider. These labels can be shown or hidden with the **Show Marks** property toggle. _(bool)_ |                           |
| [**Show Marks**](number-slider.md#show-marks)               | Formatting | Toggles on/off the widget's reference labels below the slider element. _(bool)_                                                                                                                                        |                           |
| [**Visible**](../#visible)                                  | Formatting | Controls widget's visibility on the page. When turned off: The widget won't be visible when the app is published. It appears translucent when in Edit mode. _(bool)_                                                   |                           |
| [**Disabled**](../#disabled)                                | Formatting | Makes the widget un-clickable or unusable. The widget remains visible to the user, but user interaction won't be allowed. _(bool)_                                                                                     |                           |
| **Animate Loading**                                                 | Formatting | When turned off, the widget loads without any skeletal animation. You can use a toggle switch to turn it on/off. You can also turn it off/on using JavaScript by enabling the JS label next to it. _(bool)_            |                           |
| [**Tooltip Always On**](number-slider.md#tooltip-always-on) | Formatting | Hovering over the slider with the mouse cursor shows the slider's selected value in a tooltip; enabling this setting forces the tooltip to always be visible, regardless of the cursor's location. _(bool)_            |                           |
| [**value**](number-slider.md#value)                         | Binding    | Represents the value which is currently selected in the widget. _(number)_                                                                                                                                             | `{{<widget-name>.value}}` |

These properties allow you to perform formatting changes or bind it to any other widget in queries or JS objects.

#### Min Value / Max Value

These properties represent the lower and upper bounds of values that can be selected with the slider. The **Min Value** determines the value at the far left end of the widget, and the **Max Value** determines the value at the far right end. Negative and or decimal values are allowed however, the Min Value must always be less than the Max Value.

<figure>
  <object data="https://www.youtube.com/embed/VphLW50YPKo?autoplay=0" width='860px' height='515px'></object> 
  <figcaption align="center"><i>Min Value/Max Value</i></figcaption>
</figure>


#### Step Size

The `Step Size` property determines the smallest increment by which the user may adjust the value selected by the slider. Smaller values for this property (can't be smaller than 0.1) result in finer control of the selection, whereas larger step sizes result in coarser control.

<figure>
  <object data="https://www.youtube.com/embed/mecwJ-D49gU?autoplay=0" width='860px' height='515px'></object> 
  <figcaption align="center"><i>Step Size</i></figcaption>
</figure>

#### Default Value

Sets an initial number to be captured as user input unless it's changed by the user.

<figure>
  <object data="https://www.youtube.com/embed/GOQ0SguBbp0?autoplay=0" width='860px' height='515px'></object> 
  <figcaption align="center"><i>Default Value</i></figcaption>
</figure>

#### Marks

Marks appear along the bottom of the widget as labels for the different values along the slider. Using the `Marks` property, which is an array of objects with keys `label` and `value`, you can define where these marks appear and how they're labeled. Each mark appears below the place where its `value` is located on the slider, and has the text from its corresponding `label`.

<figure>
  <object data="https://www.youtube.com/embed/9lkNIjJ8EFs?autoplay=0" width='860px' height='515px'></object> 
  <figcaption align="center"><i>Marks</i></figcaption>
</figure>

#### Show Marks

This property is a toggle that enables/disables the marks along the bottom of the slider.

<figure>
  <object data="https://www.youtube.com/embed/-4DS16RBkeI?autoplay=0" width='860px' height='515px'></object> 
  <figcaption align="center"><i>Show Marks</i></figcaption>
</figure>

#### Tooltip Always On

When this property is enabled, the widget's tooltip is _always_ visible, and shows the currently selected value on the slider. If this setting is turned off, the tooltip is only visible when the user hovers over the slider with their mouse cursor.

<figure>
  <object data="https://www.youtube.com/embed/mtlqTYBplqk?autoplay=0" width='860px' height='515px'></object> 
  <figcaption align="center"><i>Tooltip Always On</i></figcaption>
</figure>

#### Value

This binding property allows you to access the value that has been selected with the slider. For example, if the selected value is `50`, then the `value` property would look like:

```
{{NumberSlider1.value}}
// 50
```

<figure>
  <object data="https://www.youtube.com/embed/AD89aGY2Kwc?autoplay=0" width='860px' height='515px'></object> 
  <figcaption align="center"><i>Value</i></figcaption>
</figure>

## Events

Each variant of the Slider widget has events that are called when the user adjusts the widget's values:

| Event        | Description                                                                                                                                                                                                                                                                                       | Example                                                                  |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| **onChange** | Sets an action to take place when the user changes the slider's value. Can be set from the GUI list of common actions (See a list of [supported actions](/reference/appsmith-framework/widget-actions/README.md)), or you can define a custom JavaScript function to call instead. | Fetching a certain page or image from a range based upon user selection. |

Numerical sliders can be helpful when you want to add a visual component to a user's selection of a numerical value. This way, values can be selected at-a-glance for estimations; or even for watching incremental changes in a dataset as the slider value gradually increases or decreases.
