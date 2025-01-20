---
sidebar_position: 8
toc_max_heading_level: 2
description: Reset a widget to its default state using the resetWidget() Appsmith framework function.
---
# resetWidget()

This page provides information about the `resetWidget()` function signature and parameters, which sets a widget to its default state. All user input changes are reverted and its properties' default values are applied.




### Signature

```javascript
resetWidget(widgetName: string, resetChildren?: boolean = true) -> Promise
```

### Parameters

#### widgetName

<dd>

This property specifies the name of the widget you want to reset, given as a string. For example, to reset an input widget named userInput, you can use: `{{resetWidget("userInput");}}`.


</dd>

#### resetChildren

<dd>

An optional boolean value that determines whether all child widgets of the specified widget should also be reset. By default, this is set to true.

* When `true`: All child widgets of the specified widget will be reset along with the parent widget. This ensures that the entire widget hierarchy is cleared to its default state.

* When `false`: Only the specified widget will be reset, leaving any child widgets unchanged. This allows for more granular control if you only need to reset the parent widget without affecting its children.

</dd>

## Usage

Here are a few examples of how to reset a widget in different situations:

#### Reset all widgets in a container


If you want to reset a Container widget and all the widgets contained within it, you can use the following code. 

Example:

```javascript
{{ resetWidget("Container1") }}
```


#### Reset a widget without affecting its child inputs


 If you want to reset a List widget but keep the state of Input widgets contained within the list items unchanged, you can use this approach. 

Example:

```javascript
{{ resetWidget("List1", false) }}
```
