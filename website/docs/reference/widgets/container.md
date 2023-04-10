# Container

When you organize your cupboard or home, you want to pack stuff in boxes and name them. Similarly, you can use a container widget to hold the widgets. A container widget serves as a logical group of related widgets. It gives your page a distinctive layout.

<VideoEmbed host="youtube" videoId="mfPGTUxr6SY" title="How to use Container Widget" caption="How to use Container Widget"/>

You can use a container widget to create a rich UI by managing the design of each container differently. You can use different containers to segregate the components and define a logical separation.

## Add to canvas

To add a container widget to your canvas, drag a container widget from a widget pane available on the left navigation bar.

Navigate to **PAGES** —> Select **Widget** Tab —> Write "**container**" in the search bar —> Drag the widget on the canvas.

:::tip
You can move the container widget along with the widgets embedded into it and position it on the screen according to your convenience. A container widget ensures that the layout of child widgets is intact and not disrupted.
:::

## Components

A container widget stores one or more widgets and serves as a logical group defining a feature. It can include any number of components based on your requirement.

For example, you have an app for a movie library that provides a movie listing and a search feature. If you want to design this app, it's easy to segregate your page into containers.

![How to use the container widget?](</img/Widgets__Container__Components.png>)

* Parent Container - Drag a container widget on the canvas that takes care of the main layout.
* Search Container - Add another container widget to the parent container. It serves as a search bar.
  * Input box to capture the search term provided by the user.
  * Search button that triggers the search action.
* Movie Listing Container - Add one more container widget to the parent container. It takes care of the movie listing.
  * The table widget allows you to display the movie listing.

:::info
You can create a hierarchy of containers and have one or more widgets embedded into it, including another container widget.
:::

## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

### Widget properties

These properties allow you to edit the Container widget. All of these properties are present in the property pane of the widget. The following table lists all the widget properties.

| Property            | Description                                                                                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Visible**         | Control widget's visibility on the page. When turned off: The widget isn't visible when the app is published. It appears translucent when in Edit mode.  |
| **Animate Loading** | When turned off, the widget loads without any skeletal animation. You can use a toggle switch to turn it on/off. You can also turn it off/on using JavaScript by enabling the JS label next to it. |
| **Scroll Contents** | Enables scrolling in this widget when its contents are larger than its dimensions.  |
| [**Height**](/reference/widgets/#height) | It configures how a widget’s height reacts to content changes. It has three possible configurations:<br/>**Fixed**: The height of the widget remains as set using drag and resize.<br/> **Auto Height**: The height of the widget reacts to content changes.<br/>  **Auto Height with limits**: Same as Auto height, with a configurable option to set the minimum and maximum number of rows that can be occupied by the widget.                                      |

### Name

As soon as you select the widget, you can see an editable box available on top of the properties pane. You can use the default name supplied in the box or provide a meaningful name for the widget. You’ll also see the default naming convention follows the pattern widget type followed by a number like `Container1`. The `number`**`{1}`** is a running sequence and increments if you add more widgets of the same type, provided you have not given a unique name to your widget. For example, if you add two more container widgets to the canvas, then the default names for these widgets would be `Container`**`1`**`, Container`**`2`**`, and Container`**`3`**.

:::info
It’s advisable to rename the widget to give some meaningful name. It makes it easy to pass parameters by using the widget name to the APIs or queries.
:::

### Visible

You can use Visible to show or hide the widget. By default, visible is toggled on, so the widget is visible when the page loads. This property particularly comes in handy when you want to **hide/show** a widget programmatically or hide a widget on page load and then show it when a particular condition or data is available.

:::info
When you set the visible property of a container widget to false, it’ll hide the container widget and the child widgets embedded into the container. It's helpful to use the container widget’s visible property instead of iterating and hiding each widget in a container.
:::

There are two ways in which you can manipulate this property.

* Enable the JS label next to Visible and write the JavaScript code that can handle the show and hide for the widget by manipulating the visible property.
* Write your own JS object and JavaScript code to link to any other widget and manage the show/hide.

:::tip
You can get the reference of visible property by using `{{widget_name.isVisible}}` in your code.
:::

For example, let’s drag a checkbox widget Checkbox1 onto the canvas. Rename the checkbox to **ShowHideParentContainer** and bind it to the Visible property of the container widget by enabling the JS label next to it. Add the following JavaScript code in the Visible property.

```
{{ShowHideParentContainer.isChecked}}
```

When you check the checkbox, it enables the Visible property and shows the container widget and all its children. Whereas unchecking the checkbox hides the widget and its children.

<VideoEmbed host="youtube" videoId="ImuDDWfVWas" title="Visible" caption="Visible"/>

### Scroll contents

When you want to embed a container with multiple widgets and save space, you can enable scroll contents by toggling it on. The scroll contents property enables a scroll bar to scroll the contents within a container.

### Binding properties

These properties allow you to bind your Container widget with any other widget in queries or JS objects. The following table lists all the binding properties.

| Binding Property    | Description                                                                                                                                       |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| **backgroundColor** | Represents the widget's **Background Color** setting as a CSS [`color` ](https://developer.mozilla.org/en-US/docs/Web/CSS/color)value _(string)_. |
| **isVisible**       | Reflects the state of the widget's **Visible** setting _(bool)_.                                                                                  |

### Styles

Style properties allow you to change the look and feel of the widget.

| Style Property       | Description                                                                                                                                                                      |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Background Color** | Sets the background color of the widget. Accepts CSS [`color` ](https://developer.mozilla.org/en-US/docs/Web/CSS/color)values.                                                  |
| **Border Color**     | Sets the border color of the widget. Accepts CSS [`color` ](https://developer.mozilla.org/en-US/docs/Web/CSS/color)values.                                                      |
| **Border Width**     | Sets the width of the widget's border. Accepts _number_ values only, in px.                                                                                                      |
| **Border Radius**    | Rounds the corners of the widget's outer edge. With JS enabled, this accepts valid CSS [`border-radius`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) values. |
| **Box Shadow**       | Casts a drop shadow from the frame of the widget. With JS enabled, this accepts valid CSS [`box-shadow`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) values.    |
