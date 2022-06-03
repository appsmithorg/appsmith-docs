# Container

When you organize your cupboard or home, you want to pack stuff in boxes and name them. Similarly, you can use a container widget to hold the widgets. A container widget serves as a logical group of related widgets. It gives your page a distinctive layout.

{% embed url="https://youtu.be/mfPGTUxr6SY" %}

You can use a container widget to create rich UI by managing the design of each container differently. You can use different containers to segregate the components and define a logical separation.

## Add to Canvas

To add a container widget to your canvas, drag a container widget from a widget pane available on the left navigation bar.

Navigate to **PAGES** —> Select **Widget** Tab —> Write "**container”** in the search bar —> Drag the widget on the canvas.

{% hint style="info" %}
You can move the container widget along with the widgets embedded into it and position it on the screen according to your convenience. A container widget ensures that the layout of child widgets is intact and not disrupted.
{% endhint %}

## Components

A container widget stores one or more widgets and serves as a logical group defining a functionality. It can include any number of components based on your requirement.

For example, you have an app for a movie library that provides movie listing and search functionality. If you want to design this app, it will be easy to segregate your page into containers.

![How to use the container widget?](<../../.gitbook/assets/Widgets  Container  Components.png>)

* Parent Container - Drag a container widget on the canvas that takes care of the main layout.
* Search Container - Add another container widget to the parent container. It serves as a search bar.
  * Input box to capture the search term provided by the user.
  * Search button that triggers the search action.
* Movie Listing Container - Add one more container widget to the parent container. It takes care of the movie listing.
  * The table widget allows you to display the movie listing.

{% hint style="info" %}
You can create a hierarchy of containers and have one or more widgets embedded into it, including another container widget.
{% endhint %}

## Properties

Properties pane on the right side provides you with the flexibility to change the look and feel of your widget, show and hide the widget, and set scroll for contents in a container.

The properties follow the same structure across the platform, with some properties being common and some being specific to the widget you would have chosen. You can see that the properties of the container widget are categorized into two main categories: **General** and **Styles**.

{% hint style="info" %}
Ensure that you select the widget to access its properties on the right bar.
{% endhint %}

| **Property**         | **Description**                                                  | **Example**                                                                                                                                                                                     | **Code Snippet**             |
| -------------------- | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| **Name**             | Allows you to provide a unique name to the widget                | In the example above for the Movie Listing app. We named container widgets - Parent Container, MovieListingContainer, and SearchContainer.                                                      |                              |
| **Visible**          | Allows you to show/hide a widget.                                | You can either use a toggle or code to turn it off/on.                                                                                                                                          | \{{widget\_name.isVisible\}} |
| **Animate Loading**  | Allows you to control a widget’s animation on the page load.     | You can use a toggle to turn it on/off. When turned off, the widget will load without any skeletal animation. You can also turn it off/on using javascript by enabling the JS label next to it. |                              |
| **Scroll Contents**  | Allows you to enable a scroll bar to scroll the contents.        | You can use a toggle to turn it on/off. Turning it on gives you the flexibility to embed more widgets in a small space.                                                                         |                              |
| **Background Color** | Allows you to set the background color of the widget.            | You can select the color from the pallet or use an HTML Color Code.                                                                                                                             |                              |
| **Border Color**     | Allows you to set a color for displaying the container's border. | You can select the color from the pallet or use an HTML Color Code.                                                                                                                             |                              |
| **Border Width**     | Allows you to define the thickness of the border.                | You can supply a higher number for a thick border.                                                                                                                                              |                              |
| **Border Radius**    | Allows you to define curved corners.                             | You can supply a higher number for a profound curve.                                                                                                                                            |                              |
| **Box Shadow**       | Allows you choose from the available shadow styles.              | You can choose one of the available shadow styles for the widget.                                                                                                                               |                              |
| **Shadow Color**     | Allows you to set the color of the shadow.                       | You can choose the color from the pallet or supply an HTML Color Code.                                                                                                                          |                              |

## General

You can choose the properties under this head to name, show/hide, enable scrolling or animate the loading of the widget.

Let’s deep dive into the properties available under this head.

### Name of Widget

As soon as you select the widget, you can see an editable box available on top of the properties pane. You can use the default name supplied in the box or provide a meaningful name to the widget. You’ll also see the default naming convention follows the pattern WidgetType followed by a number like `Container1`. The `number`**`{1}`** is a running sequence and increments if you add more widgets of the same type, provided you have not given a unique name to your widget. For example, if you add two more container widgets to the canvas, then the default names for these widgets would be `Container`**`1`**`, Container`**`2`**`, and Container`**`3`**.

{% hint style="info" %}
It’s advisable to rename the widget to give some meaningful name. It makes it easy to pass parameters by using the widget name to the APIs or queries.
{% endhint %}

### Visible

You can use Visible to show or hide the widget. By default, visible is toggled **on** that is enabled, so the widget is visible on page load. This property particularly comes in handy when you want to **hide/show** a widget programmatically or hide a widget on page load and then show it when a particular condition or data is available.

{% hint style="info" %}
When you set the visible property of a container widget to false, it’ll hide the container widget and the child widgets embedded into the container. It is generally helpful to use the container widget’s visible property instead of iterating and hiding each widget in a container.
{% endhint %}

There are two ways in which you can manipulate this property.

* Enable the JS label next to Visible and write the javascript code that can handle the show and hide of the widget by manipulating visible property.
* Write your own JS object and javascript code to link to any other widget and manage the show/hide.

{% hint style="info" %}
You can get the reference of visible property by using `{{widget_name.isVisible}}` in your code.
{% endhint %}

For example, let’s drag a checkbox widget Checkbox1 onto the canvas. Rename the checkbox to **ShowHideParentContainer** and bind it to the Visible property of the container widget by enabling the JS label next to it. Add the following JavaScript code in the Visible property.

```
{{ShowHideParentContainer.isChecked}}
```

When you check the checkbox, it will enable the Visible property and shows the container widget and all its child. Whereas the uncheck on the checkbox will hide the widget and its child.

{% embed url="https://youtu.be/ImuDDWfVWas" %}

### Scroll Contents

When you want to embed a container with multiple widgets and save space, you can enable scroll contents by toggling it on. The scroll contents property enables a scroll bar to scroll the contents within a container.

## Styles

Choose properties under this head to change the look and feel of the container. You can choose a background color, border color, width, and radius.

Let’s deep dive into the properties to enhance the look of your container widget.

### Background Color

You can use the property background color to set the widget’s background. You can select the available colors from the color pallet to change the background color. You can also use HTML color codes to change the background.

### Border Color

You can use the property border-color to set the widget’s border color. You can select the colors from the color pallet or supply HTML color codes to set the border color.

### Border Width

It’s often required to set a profound separation between UI elements, and then, you can use border width. Border width allows you to specify how thick or thin the border is.

{% hint style="info" %}
You can supply a higher number to have a thick border. However, a smaller number will result in a thin border.
{% endhint %}

### Border Radius

To beautify the container widget, you might want to have rounded or curved corners. You can achieve this by setting a border-radius for the widget.

{% hint style="info" %}
The higher the number more profound are the curved corners.
{% endhint %}

### Box Shadow

You can use the box-shadow property to attach one or more shadows to the widget. That is, it adds a shadow effect to your widget. You can select one out of the popular available options for a shadow effect.

Use the container widget to organize your UI components and build unique and rich layouts.
