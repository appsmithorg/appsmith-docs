---
sidebar_position: 8
toc_max_heading_level: 2
description: Reset a widget to its default state using the resetWidget() Appsmith framework function.
---
# resetWidget()

The `resetWidget()` framework function sets a widget to its default state. All user input changes are reverted and its properties' default values are applied.

### Signature

```javascript
resetWidget(widgetName: string, resetChildren?: boolean = true) -> Promise
```

### Parameters

#### widgetName

<dd>

A string which is the name of the widget to reset.

</dd>

#### resetChildren

<dd>

An optional boolean which determines whether all child widgets should also be reset. This is `true` by default.

</dd>

_Example 1:_

Reset a Container widget and all other widgets that it contains:

```javascript
{{ resetWidget("Conatiner1") }}
```

_Example 2:_

Reset the state of a List widget without affecting the contents of Input widgets contained within the list items:

```javascript
{{ resetWidget("List1", false) }}
```
