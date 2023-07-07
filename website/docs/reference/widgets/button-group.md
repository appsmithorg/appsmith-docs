# Button Group



The Button group widget represents a set of buttons in a group. Group can have simple buttons or menu buttons with drop-down items.

<VideoEmbed host="youtube" videoId="oWGK1s5nGns" title="How to use Button Group Widget" caption="How to use Button Group Widget"/>

## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

### Widget properties

These properties allow you to edit the Button Group widget. All of these properties are present in the property pane of the widget. The following table lists all the widget properties.

| Property            | Description                                                                                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Orientation**     | Sets whether the group buttons are listed Horizontally or Vertically.                                                                                                                                  |
| **Visible**         | Control widget's visibility on the page. When turned off: The widget isn't visible when the app is published. It appears translucent when in Edit mode.                                         |
| **Disabled**        | Disables input to the widget. The widget is visible to the user, but a user input is not allowed.                                                                                             |
| **Animate Loading** | When turned off, the widget loads without any skeletal animation. You can use a toggle switch to turn it on/off. You can also turn it off/on using JavaScript by enabling the JS label next to it. |

#### Group buttons settings

You can customize each group button through a set of properties by clicking on the gear icon.

| Property           | Description                                                                                                                                                    |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **label**          | Sets the text shown within a button.                                                                                                                           |
| **Button type**    | Control whether this is a simple button, or a menu button with dropdown items.                                                                                 |
| **Button color**   | Sets the background color of the button.                                                                                                                       |
| **Disabled**       | Makes the button inactive or unusable. The button remains visible to the user but user interaction is not allowed.                                |
| **Visible**        | Controls button's visibility on the page. When turned off: The button isn't visible when the app is published. It appears translucent when in Edit mode. |
| **Icon**           | Gives a list of icons you can add to your buttons.                                                                                                             |
| **Icon Alignment** | Sets the alignment of the selected icon.                                                                                                                       |
| **Menu items**     | Array of menu items for a Menu-type button. This lets you add/remove/edit a menu item and customize the its settings.                                          |

| Event       | Description                                                                                                                          |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **onClick** | Sets an action to take place when the user clicks on this widget, or you can define a custom JavaScript function to call instead. |

#### Menu item settings

For the button of type "Menu," you can add several options to be shown in a dropdown menu. Each menu item can now be customized through a set of properties by clicking on the gear icon.

| Property             | Description                                                                                                                                                          |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Label**            | Sets the text shown within the menu item.                                                                                                                            |
| **Background Color** | Sets the background color of a menu item.                                                                                                                            |
| **Text Color**       | Sets the text color of a menu item.                                                                                                                                  |
| **Visible**          | Control menu item's visibility on the page. When turned off: The menu item isn't visible when the app is published. It appears translucent when in Edit mode. |
| **Disabled**         | Makes the menu item inactive or unusable. The menu item remains visible to the user but user interaction is not allowed.                                |
| **Icon**             | Choose from a list of icons you can add to your menu item.                                                                                                           |
| **Icon color**       | Sets the icon color of the selected icon.                                                                                                                            |
| **Icon Alignment**   | Sets the alignment of the selected icon.                                                                                                                             |

### Events

You can define functions that are called when these events are triggered in the widget.

| Event       | Description                                                                                                                                                                                                                                                      |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **onClick** | Sets an action to take place when the user clicks on this widget. Can be set from the GUI list of common actions (See a list of [supported actions](../appsmith-framework/widget-actions/).), or you can define a custom JavaScript function to call instead. |

### Styles

Style properties allow you to change the look and feel of the widget.

| Style Property     | Description                                                                                                                                                                                                                    |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Button Variant** | Sets the button style type to represent its significance - Primary, Secondary, or Tertiary. You can use JavaScript to set this field by writing code that evaluates to the _string_ "PRIMARY," "SECONDARY" or "TERTIARY." |
| **Border Radius**  | Rounds the corners of the widget's outer edge. With JS enabled, this accepts valid CSS [`border-radius`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) values.                                               |
| **Box Shadow**     | Casts a drop shadow from the frame of the widget. With JS enabled, this accepts valid CSS [`box-shadow`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) values.                                                  |

:::info
Currently Appsmith uses the icons from [Blueprint](https://blueprintjs.com) library. You can see the list of icons [here](https://blueprintjs.com/docs/#icons).
:::