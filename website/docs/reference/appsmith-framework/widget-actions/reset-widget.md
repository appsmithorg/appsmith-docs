---
sidebar_position: 8
---
# Reset Widget

Use the resetWidget function to revert a widget to its default state. Any user input changes are reverted and the values in the default properties is applied.

### Signature

```javascript
resetWidget(widgetName: string, resetChildren?: boolean = true) -> Promise
```

### Arguments

| **Argument Name**            | **Description**                                        |
| ---------------------------- | ------------------------------------------------------ |
| **widgetName**               | The name of the widget that needs to be reset          |
| **`resetChildren`** (optional) | Should all children be reset as well. Defaults to true |

![Click to expand](/img/resetWidget.gif)
