---
description: >-
  The Category Slider widget allows users to choose from a fixed set of
  incremental values.
---

# Category Slider

The Category Slider widget can be useful for situations where users must provide feedback from a fixed set of ascending options. Surveys, for example, often have questions that ask respondents to rate how much they agree or disagree with certain statements (that is, Strongly agree/ agree/ disagree/ strongly disagree).

<figure><img src="../../../.github/drafts/16506/as_category.png" alt=""><figcaption><p>An example of the Category Slider</p></figcaption></figure>

## Properties

Properties allow you to edit the Category Slider widget, connect it with other widgets and customize the user actions.

| Property                                                      | Type       | Description                                                                                                                                                                                            | Code Snippet              |
| ------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------- |
| ****[**Options**](category-slider.md#options)****             | Formatting | An _array of objects_ with keys `value` and `label` which define the possible selections that the user can make with the slider.                                                                       |                           |
| ****[**Default Value**](category-slider.md#default-value)**** | Formatting | Sets an initial option to be captured as user input unless it's changed by the user. This property should be set to match the `value` attribute of your desired option from the **Options** object.    |                           |
| ****[**Show Marks**](category-slider.md#show-marks)****       | Formatting | Toggles on/off the widget's reference labels below the slider element.                                                                                                                                 |                           |
| ****[**Visible**](../#visible)****                            | Formatting | Controls widget's visibility on the page. When turned off: The widget won't be visible when the app is published. It appears translucent when in Edit mode.                                            |                           |
| ****[**Disabled**](../#disabled)****                          | Formatting | Makes the widget un-clickable or unusable. The widget will remain visible to the user but user interaction won't be allowed.                                                                           |                           |
| **Animate Loading**                                           | Formatting | When turned off, the widget will load without any skeletal animation. You can use a toggle switch to turn it on/off. You can also turn it off/on using JavaScript by enabling the JS label next to it. |                           |
| ****[**value**](category-slider.md#value)****                 | Binding    | Represents the value the value which is currently selected in the widget.                                                                                                                              | `{{<widget-name>.value}}` |

These properties allow you to perform formatting changes or bind it to any other widget in queries or JS objects.

#### Options

Use the `Options` property to define the set of choices that the user may choose from with the slider. This property should be an array of objects, each with a `label` key (text to be displayed to the user) and a `value` key (the corresponding value to use within your widgets and code).

{% embed url="https://youtu.be/VpdlnhOL3Eo" %}

#### Default Value

Sets an initial option to be captured as user input unless it's changed by the user. Please note that this property should be set to match the `value` attribute of your desired option from the **Options** object.

{% embed url="https://youtu.be/GOQ0SguBbp0" %}

#### Show Marks

This property is a toggle that enables/disables the label markings along the bottom of the slider.

{% embed url="https://youtu.be/-4DS16RBkeI" %}

#### value

This binding property allows you to access the value that has been selected with the slider. For example, if the selected value is `"agree"`, then the `value` property would look like:

```
{{CategorySlider1.value}}
// agree
```

{% embed url="https://youtu.be/AD89aGY2Kwc" %}

## Events

Each variant of the Slider widget has events that are called when the user adjusts the widget's values:

| Event        | Description                                                                                                                                                                                                                                                                                       | Example                                                                  |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| **onChange** | Sets an action to take place when the user changes the slider's value. Can be set from the GUI list of common actions (See a list of [supported actions](https://docs.appsmith.com/reference/appsmith-framework/widget-actions)), or you can define a custom JavaScript function to call instead. | Fetching a certain page or image from a range based upon user selection. |

The Category Slider widget is great for collecting input that falls along a range of possible values. Consider using this widget when your users' responses are expected to fall along a fixed set of ascending data.
