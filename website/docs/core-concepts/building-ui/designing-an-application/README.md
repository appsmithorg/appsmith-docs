# Designing an Application

An app can be built using UI elements ([widgets](../../../reference/widgets/)) by placing them on the canvas as per your requirement.

<figure>
 <object data="https://www.youtube.com/embed/NB8Btt0aw0g?autoplay=0" width='750px' height='400px'></object>
 <figcaption align="center"><i>How to use Drag and Drop</i></figcaption>
</figure>

## Adding and Arranging Widgets

To add a widget to the canvas, select the widget from the widget tab, drag it onto the canvas and drop it there!

When creating an app, you might need several widgets for various purposes like storing data, triggering an action, etc. You can place the widgets anywhere on the canvas.

### Placing Widgets on the Canvas

While working on an app, creating a complex layout (adding and placing multiple widgets) is easy and intuitive with the enhanced drag and drop gestures in Appsmith!

When you add a new widget, the widgets already present on the canvas move aside and provide the space for the incoming widget. You can drag the widget to the desired location, and other widgets in the same area on the canvas will automatically move or resize to accommodate the incoming widget.

<figure>
 <object data="https://www.youtube.com/embed/_JOeo0dfk8Y?autoplay=0" width='750px' height='400px'></object>
 <figcaption align="center"><i>Placing widgets</i></figcaption>
</figure>


When the widget hits the boundary of its container, it starts resizing itself to provide more room to the incoming widget. The aspect ratio is still maintained even when the size changes.

<figure>
 <object data="https://www.youtube.com/embed/Frw_E1dfhvg?autoplay=0" width='750px' height='400px'></object>
 <figcaption align="center"><i>Resizing</i></figcaption>
</figure>



### Moving Widgets across Containers

A widget can move across containers. A container can be the canvas or a layout widget.

:::info
Layout widgets are the ones that can contain other widgets, like - [Container](../../../reference/widgets/container.md) widget, [List](../../../reference/widgets/list.md) widget, [Tabs](../../../reference/widgets/tabs.md) Widget, etc.
:::

You can move a widget into a new container by dragging your cursor.

* Select and hold the widget you want to move.
* If you move it slowly towards a layout widget, the selected widget moves and resizes it.
* However, if you move your cursor with an increased velocity, the widget jumps inside the droppable widget.

<figure>
 <object data="https://www.youtube.com/embed/FL57bXMYeL4?autoplay=0" width='750px' height='400px'></object>
 <figcaption align="center"><i>Moving Across Containers</i></figcaption>
</figure>


### Resizing a widget

You can change the size of the widget. To resize a widget, select the widget, click and hold an edge or a corner and move the cursor to change the widget’s size.

<figure>
 <object data="https://www.youtube.com/embed/nnmYtv1gb5M?autoplay=0" width='750px' height='400px'></object>
 <figcaption align="center"><i>Manual Resize</i></figcaption>
</figure>

