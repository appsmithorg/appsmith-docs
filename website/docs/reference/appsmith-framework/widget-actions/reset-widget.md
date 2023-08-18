---
sidebar_position: 8
description: Reset a widget to its default state using the resetWidget() Appsmith framework function.
---

# resetWidget()

The `resetWidget()` framework function reverts a widget to its default state. All user input changes are reverted and its properties' default values are applied.

### Signature

```javascript
resetWidget(widgetName: string, resetChildren?: boolean = true) -> Promise
```

This function accepts the following parameters:
* A parameter of type _string_ which is the name of the widget to reset.
* An optional parameter of type _boolean_ which determines whether all child widgets should also be reset. This is set to `true` by default.
