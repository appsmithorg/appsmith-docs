---
description: Menu buttons are used to represent a set of actions in a group.
---

# Menu Button



sf

{% embed url="https://youtu.be/tDMAOxZTmxY" %}

## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

### Widget Properties

These properties allow you to edit the Menu Button widget. All these properties are present in the property pane of the widget. The following table lists all the widget properties.

| Property            | Description                                                                                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **label**           | Sets the label of a menu.                                                                                                                                                                              |
| **menuItems**       | Array of menu items in the dropdown list. This lets you add/remove/edit a menu item and customize the [menu item settings](https://docs.appsmith.com/widget-reference/menu-button#menu-item-settings). |
| **Disabled**        | Disables input to the widget.                                                                                                                                                                          |
| **Visible**         | Controls the visibility of the widget.                                                                                                                                                                 |
| **Animate Loading** | Allows you to control a widget’s animation on the page load.                                                                                                                                           |
| **Compact**         | Decides if the widget is in compact mode.                                                                                                                                                              |

### Binding Properties

These properties allow you to bind your widget with any other widget in queries or JS objects. The following table lists all the binding properties.

| Binding Properties | Description                                                   |   |
| ------------------ | ------------------------------------------------------------- | - |
| **label**          | This property gets the label value of the widget.             |   |
| **isVisible**      | This property indicates whether the widget is visible or not. |   |

### Styles

Style properties allow you to change the look and feel of the widget.

| Styles             | Description                                             |   |
| ------------------ | ------------------------------------------------------- | - |
| **Menu Color**     | Sets the background color of the widget.                |   |
| **Menu Variant**   | Sets the variant of the menu button.                    |   |
| **Border Radius**  | Allows you to define curved corners.                    |   |
| **Box Shadow**     |  Allows you to choose from the available shadow styles. |   |
| **Icon**           | Sets the icon to be used for menu button.               |   |
| **Placement**      | Sets the space between items.                           |   |
| **Icon Alignment** | Sets the alignment of the selected icon.                |   |

### Menu Item Settings

Each menu item can now be customized through a set of properties by clicking on the gear icon.

![](../../.gitbook/assets/Menu\_items.gif)

| Property     | Description                             |
| ------------ | --------------------------------------- |
| **label**    | Sets the label of a menu item.          |
| **Visible**  | Controls the visibility of a menu item. |
| **Disabled** | Disables input to a menu item.          |

| Icon Options       | Description                               |   |
| ------------------ | ----------------------------------------- | - |
| **Icon**           | Sets the icon to be used for menu button. |   |
| **Icon alignment** | Sets the alignment of the selected icon.  |   |

| Events      | Description                                              |   |
| ----------- | -------------------------------------------------------- | - |
| **onClick** | Sets the action to be run when the menu item is clicked. |   |

| Styles               | Description                               |   |
| -------------------- | ----------------------------------------- | - |
| **Icon color**       | Sets the icon color of menu item          |   |
| **Background Color** | Sets the background color of a menu item. |   |
| **Text Color**       | Sets the text color of a menu item.       |   |

{% hint style="info" %}
We currently use the icons from [Blueprint](https://blueprintjs.com) library. You can see the list of icons [here](https://blueprintjs.com/docs/#icons).
{% endhint %}
