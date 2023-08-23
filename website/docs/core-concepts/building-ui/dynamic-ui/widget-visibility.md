---
description: The visibility of widgets can be controlled using javascript.
---

# Controlling Widget Visibility

The visibility property is usually a switch in the property pane of every widget. This property can be made dynamic by clicking the JS button next to the property which converts it to a text field. Inside the text, the value of the visibility can be conditionally set using JavaScript.

## Control visibility with other widgets

In the example below the visibility of the table is a conditional value based on the selected value of the `RadioGroup1`

```javascript
{{RadioGroup1.selectedOptionValue === "Visible"}}
```

:::note
The Visible property expects the expression to evaluate to a boolean value
:::

![](</img/control_visibility.gif>)

## Control visibility with query responses

Similar to the above example, you can bind the visibility of a widget to the response of a Query.

```javascript
{{ API1.data.value === "trueValue" }}
```

