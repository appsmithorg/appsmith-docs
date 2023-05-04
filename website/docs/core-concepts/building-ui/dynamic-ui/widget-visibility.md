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

## Dynamic forms

Some cases require form fields to dynamically change based on the user input. This can be achieved using a [Tab](/reference/widgets/tabs) widget inside the form and conditionally updating the selected tab value based on the inputs of the [form](/reference/widgets/form)

![](</img/dynamic_forms.gif>)

:::tip
Hide the tabs in the tab widget to make it look like the views are changing in place.
:::
