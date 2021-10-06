---
description: >-
  The List widget is used to display a paginated list of similarly structured
  data.
---

# List

{% hint style="info" %}
List widget is in beta right now. It can only render widgets for display purposes in the template as of now. This is a platform limitation that will be solved in future. You won't be able to use any widget that has any default value \( Input, Switch, Checkbox, Select etc \)
{% endhint %}

{% embed url="https://youtu.be/0ePiZlWmp7Q" caption="" %}

## Current Item

List widget is used to repeat a template based on the large data \(collection on objects\). The template is basically a container widget that repeats itself. In each widget in the template, you might need access to the current item, That's where `currentItem` property comes in handy. It gives access to the current item in the loop. For e.g - If you want to show an image widget in the list, you can use:

```text
{{ currentItem.avatar}}

// assuming avatar is a property in the array of objects in the items
```

## Current Index

You can access the current index of the row in the list with `currentIndex` property.

```text
{{ currentIndex }}

// the above statement will give 0 for the first row.
```

## Items

Items is a special property in list widget which contains the data of children's widgets for each row. This property becomes very useful when dealing of input widgets. For e.g - if you want to access the text value of input widget for the first row, You can simply do:

```text
{{ List1.items[0].Input1.text }}
```

In the above example, List1 is the name of the list widget and Input1 is the name of the input widget inside the template container of list widget.

## Use cases

### 1. Getting the value of children widgets

Let's say you have input widget and a button widget inside the list widget and you want send the value of input on click of the button to some api. You can access the value of any children widget for the current row with the combination of `currentIndex` and `items`

```text
{{ List1.items[currentIndex].Input1.text }}
```

{% hint style="info" %}
Note: currentItem and currentIndex is only available in the autocomplete of controls, in the property pane of list widget template's children.
{% endhint %}

| Widget Property | Description |
| :--- | :--- |
| **Items** | This property lets you edit the items in the list. You can either write an array of objects to display as list items or you can bind data from an API using the mustache syntax |
| **Background** | sets the background color of the list widget |
| **Item Background** | sets the background color of list items |
| **Grid Gap** | sets the margin between list items in pixels |

| Actions | Description |
| :--- | :--- |
| **onListItemClick** | Sets the action to be run when the user clicks on a list item. See a list of [supported actions](../core-concepts/writing-code/appsmith-framework.md) |

