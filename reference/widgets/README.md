# Widgets

[Widgets](./) help the user in building the app layout. Users can [store data](../../core-concepts/data-access-and-binding/displaying-data-read/) from a [Database](../datasources/) or an[ API ](../../core-concepts/connecting-to-data-sources/authentication/connect-to-apis.md)call, [trigger events](broken-reference/), etc.

Widgets can be dragged from the widget pane, positioned on the canvas, and resized to fit the data they need to display. They also come with properties that can be visually edited to set their data, change their styles, and trigger actions from them.

![](<../../.gitbook/assets/spaces\_sRqv8vEmanRWzCklPZou\_uploads\_kpwSwyVV6AnRPtthUHmq\_drop widget.gif>)

### Naming a Widget

A widget must have a unique name that acts as an identifier on the page. It is used to access the properties of the widget everywhere in the application. In that sense, a name is like a variable in a programming language.

{% hint style="warning" %}
Note that [JavaScript keywords](https://www.w3schools.com/js/js\_reserved.asp) and [the window object methods and properties](https://www.w3schools.com/jsref/obj\_window.asp) are not valid as widget names.
{% endhint %}

You can access the various properties of the widget using the widget's name.

```javascript
{{ Table1.selectedRow.id }}
```

### Grouping Widgets

Appsmith supports the grouping of widgets. When you group widgets, they are put in a container and can be moved together. To do this -

* Select multiple widgets with Ctrl + Left Click
* Now click on the dotted square icon or press Ctrl + G

![](../../.gitbook/assets/groupingwidget.gif)
