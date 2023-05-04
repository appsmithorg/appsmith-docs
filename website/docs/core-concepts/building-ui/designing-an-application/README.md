# Designing an Application


Appsmith provides an intuitive drag-and-drop interface that enables you to build an app using [widgets](/reference/widgets/) by placing them on the canvas as per your requirement. It also comes with pre-built [templates](https://www.appsmith.com/templates) that you can customize to suit your needs.


<VideoEmbed host="youtube" videoId="NB8Btt0aw0g" title="Designing an application using widgets" caption="Designing an application using widgets"/>




## Add widgets on canvas


When creating an app, you might need several UI elements for purposes like storing data, triggering an action, etc. Widgets are pre-built UI components that can be added to your application anywhere on the canvas.


To add a widget to the canvas, select the `widget` from the Widgets tab on the entity explorer to the left of your screen, drag it onto the canvas and drop it.


### Arrange widgets


While working on an app, adding, and placing multiple widgets is easy and intuitive with the drag-and-drop gestures in Appsmith. When you add a new widget, the widgets already present on the canvas move aside and provide space for the incoming widget. You can drag the widget to the desired location, and other widgets in the same area on the canvas automatically moves or resize to accommodate the incoming widget.


![Arrange widgets](</img/arrange-widgets.gif>)




When the widget hits the boundary of its container, it starts resizing itself to provide more room for the incoming widget. The aspect ratio is still maintained even when the size changes.


### Resize widgets


You can adjust the size of a widget by selecting it and dragging the resize handle.


Appsmith provides an [auto height](/reference/widgets#auto-height) feature for some widgets, which allows the widget to adjust its height automatically in response to changes in its content. This capability enables widgets to grow in height without any limit, providing a more dynamic user interface. 

![auto height](</img/auto-height.gif>)

When a widget changes height, the layout adjusts to maintain the distance between the widget undergoing a height change and the sibling widgets below this widget occupying one or more of the same columns.



### Duplicate widgets


To save significant amount of time and effort when building complex layouts or forms, you can create multiple copies of the same widget. To duplicate a widget, select it and copy and paste the widget where you want it to appear. In addition to duplicating individual widgets, you can also copy **multiple widgets at once** by selecting them with your cursor. 


One of the advantages of duplicating widgets is that the copied widgets have the exact same configuration as the original, including any properties or settings that were applied to it. This means that you don't need to manually recreate the widget and apply the same settings again.


## Group widgets


You can group widgets to manage their layout, maintain their position on the screen, or apply visibility rules and actions to a group of widgets at once. Grouping widgets is also useful to restrict their movement and prevent them from expanding into unnecessary areas.


To group widgets, you can select them using your cursor, and then click the "Group" icon or use the keyboard shortcut to group the widgets together.


![Group widgets](</img/group-widgets.gif>)


## Move widgets across containers


A widget can move across containers. A container can be the canvas or a layout widget. Layout widgets are the ones that can contain other widgets, like - [Container](/reference/widgets/container) widget, [List](/reference/widgets/list) widget, [Tabs](/reference/widgets/tabs) Widget, etc. You can move a widget into a new container by dragging your cursor.




![Moving Across Containers](</img/move-widgets.gif>)


## Widget styling


Styles allow you to customize the look and feel of your widgets. With the style properties in the property pane, you can change the color, position, font, etc. to modify the appearance of your widgets. Each widget can have unique styling options or attributes that are specific to its type and purpose.




![Moving Across Containers](</img/style-widgets-2.gif>)


## Further reading

* [App Theming](/core-concepts/building-ui/designing-an-application/app-theming)
* [Building dynamic UI](/core-concepts/building-ui/dynamic-ui)
