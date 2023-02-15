# Designing an Application

Appsmith provides an intuitive drag-and-drop interface that allows you to create custom applications with ease. It also comes with pre-built templates and components that you can customize to suit your needs. Using UI elements([widgets](/reference/widgets/)), an application can be created by positioning them on a canvas to match your specific needs.

<VideoEmbed host="youtube" videoId="NB8Btt0aw0g" title="How to use Drag and Drop" caption="How to use Drag and Drop"/>


## Adding and arranging widgets

When designing an application, it's essential to position widgets correctly to achieve the desired layout and capability. Widgets are pre-built UI components that can be added to your application by dragging and dropping them onto the canvas. The first step in positioning widgets is to add them to your application. 

To place a widget onto the canvas, first choose the widget from the widget tab, then drag and release it onto the canvas.


### Placing widgets on the canvas

Arranging a sophisticated layout consisting of multiple widgets is made effortless with the help of improved drag and drop gestures. As a new widget is added, the existing widgets on the canvas make room for it by moving aside. Once the widget is added, the user can simply drag it to the desired location. The other widgets in the surrounding area on the canvas adjust automatically by moving or resizing to make space for the new widget.

<VideoEmbed host="youtube" videoId="PovX7V5vPho" title="Placing widgets" caption="Placing widgets"/>


As the widget approaches the boundary of its container, it begins to resize itself to create additional space for the incoming widget. Despite the change in size, the widget maintains its aspect ratio to ensure that it remains proportional.

### Resizing a widget

Resizing widgets is essential when designing an application. You can adjust the size of a widget by selecting it and dragging the resize handle. To do so, select the widget and click and hold on an edge or corner. Then, move the cursor to adjust the widget's size according to your requirements.

<VideoEmbed host="youtube" videoId="b4fISDtt2u0" title="Manual Resize" caption="Manual Resize"/>

Appsmith provides an [auto height](/reference/widgets#auto-height) feature for some of its widgets, which allows the widget to adjust its height automatically in response to changes in its content. This capability enables widgets to grow in height without any limit, providing a more dynamic and versatile user interface. 


### Duplicate widgets

Duplicate widgets are a convenient feature available that allows you to create multiple copies of the same widget. This can save you a significant amount of time and effort when building complex layouts or forms. To duplicate a widget, simply select it and use the appropriate keyboard shortcut - typically `cmd+c` on a Mac or `cntrl+c` on Windows - and then paste the copied widget where you want it to appear.

<VideoEmbed host="youtube" videoId="p3yxwtkeBXk" title="Duplicate widgets" caption="Duplicate widgets"/>

One of the advantages of duplicating widgets is that the copied widgets have the exact same configuration as the original, including any properties or settings that were applied to it. This means that you don't need to manually recreate the widget and apply the same settings again.



## Grouping widgets

You can group widgets to manage their layout, maintain their position on the screen, or apply visibility rules and actions to a group of widgets at once. Grouping widgets is also useful to restrict their movement and prevent them from expanding into unnecessary areas. A container is a widget used to group and organize other widgets into a structured interface. 

:::info
Layout widgets are the ones that can contain other widgets, like - [Container](/reference/widgets/container) widget, [List](/reference/widgets/list) widget, [Tabs](/reference/widgets/tabs) Widget, etc.
:::

You can move a widget into a new container by dragging your cursor.

* Select the widget you want to move and hold it.
* Move the widget inside the layout widget and resize it.

<VideoEmbed host="youtube" videoId="QyRb-PFE2To" title="Moving Across Containers" caption="Moving Across Containers"/>


## Styles and states

Styles are important concepts that allow you to customize the look and behavior of your widgets. With styles, you can change the color, position, font, and other visual properties of your widgets, making them stand out and match your brand. 

<VideoEmbed host="youtube" videoId="8RK5ww3baF4" title="Styles" caption="Styles"/>

States refer to the different states or conditions that a widget can have, such as enabled, disabled, or filled in. By defining these states, you can control the behavior and appearance of your widgets in response to user actions or data changes. For instance, you may need to create components with multiple states, such as a button that's disabled until an input is filled in. 

The widget won't be visible on the published app if you turn off this visible property. You can also write a JS code to link Visible's capability to a user action. Click on JS next to the Visible to write JavaScript code.


## Further reading

* [App Theming](/core-concepts/building-ui/designing-an-application/app-theming)
* [Building dynamic UI](/core-concepts/building-ui/dynamic-ui)
