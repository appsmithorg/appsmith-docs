# Sliders


---
## Usage

### Category Slider
- Example use case: Surveys, i.e. Strongly agree/ agree/ neutral/ disagree/ strongly disagree

[Link Card to Category Slider subpage]()

### Number Slider
- Example use case: Page turner/selector for a multi-page document or content

[Link Card to Number Slider subpage]()

### Range Slider
- Example use case: Search filtering (i.e. Min/ Max price)

[Link Card to Range Slider subpage]()

---

## Events

You can define functions that will be called when these events are triggered in the widget.

| **Event** | **Description** | **Example** | **Code Snippet** |
|-----------|-----------------|-------------|------------------|
| **onChange** | Sets an an action to take place when the user changes the slider's value. Can be set from the GUI list of common actions (See a list of [supported actions](https://docs.appsmith.com/reference/appsmith-framework/widget-actions)), or you can define a custom JavaScript function to call instead. |  |  |
| **onStartValueChange** | Sets an an action to take place when the user changes the range's start value. Can be set from the GUI list of common actions (See a list of [supported actions](https://docs.appsmith.com/reference/appsmith-framework/widget-actions)), or you can define a custom JavaScript function to call instead. |  |  |
| **onEndValueChange** | Sets an an action to take place when the user changes the range's end value. Can be set from the GUI list of common actions (See a list of [supported actions](https://docs.appsmith.com/reference/appsmith-framework/widget-actions)), or you can define a custom JavaScript function to call instead. |  |  |


## Styles

| **Style** | **Description** |
|-----------|-----------------|
| **Size** | Sets the size of the widget on the canvas; choose from **S** (Small/4px), **M** (Medium/6px), or **L** (Large/8px). |
| **Color** | Sets the fill color of the slider element. Accepts valid CSS [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color) values. |