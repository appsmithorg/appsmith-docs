*** Category Slider ***

The Category Slider widget allows users to choose from a fixed set of incremental values.

< TODO: NEED VIDEO DEMO >

---
# Usage
- Example use case: Surveys, i.e. Strongly agree/ agree/ neutral/ disagree/ strongly disagree

---

# Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

## Widget Properties

These properties allow you to edit the Category Slider widget. The following table lists all the widget's unique properties; if you do not see a certain widget property here, it may be listed under [Common Widget Properties]().

| **Property** | **Description** |
|-----------|-----------------|
| **Options** | An _array of objects_ with keys `value` and `label` which define the possible selections that the user can make with the slider. |
| **Default Value** | This sets the slider's initial value, before the user makes any adjustments. This value should be between the slider's **Min Value** and **Max Value**. _(number)_ |
| **Marks** | An _array of objects_ with keys `value` and `label` which define where reference labels should appear below the widget's slider. These labels can be shown or hidden with the **Show Marks** property toggle. |
| **Tooltip Always On** | Hovering over the slider with the mouse cursor shows the slider's selected value in a tooltip; enabling this setting will force the tooltip to always be visible, regardless of the cursor's location. _(bool)_ |

### Options

### Default Start Value

### Marks

### Tooltip Always On

## Binding Properties

These properties allow you to bind your Category Slider widget with any other widget in queries or JS objects. The following table lists all the binding properties.

| **Binding Property** | **Description** |
| **value** | Represents the value the value which is currently selected in the widget. |

## Events

You can define functions that will be called when these events are triggered in the widget.

| **Event** | **Description** |
|-----------|-----------------|
| **onChange** | Sets an an action to take place when the user changes the slider's value. Can be set from the GUI list of common actions (See a list of [supported actions](https://docs.appsmith.com/reference/appsmith-framework/widget-actions)), or you can define a custom JavaScript function to call instead. |

### onChange

## Styles

| **Style** | **Description** |
|-----------|-----------------|
| **Size** | Sets the size of the widget on the canvas; choose from **S** (Small/4px), **M** (Medium/6px), or **L** (Large/8px). |
| **Color** | Sets the fill color of the slider element. Accepts valid CSS [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color) values. |

### Size

### Color
