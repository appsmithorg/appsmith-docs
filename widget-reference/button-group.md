# Button Group

The Button group widget represents a set of buttons in a group. Group can have simple buttons or menu buttons with drop-down items.

### Properties

| Property             | Description                                                                                                                  |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| **Orientation**      | Control orientation of button group, "horizontal" or "vertical".                                                             |
| **Button variant**   | Sets the variant of the button group. There are three different variants to be chosen from - Primary, secondary or tertiary. |
| **Visible**          | Controls widget's visibility on the page. When turned off, the widget will not be visible when the app is published          |
| **Disabled**         | Disables input to the widget. The widget will be visible to the user but a user input will not be allowed.                   |
| **Border Radius**    | Rounds the corners of the icon button's outer border edge. Available options: Sharp, Rounded, and Circle.                    |
| **Box Shadow**       | Enables you to cast a drop shadow from the frame of the widget. There are 6 different options.                               |
| **Box Shadow Color** | Sets the shadow color of the widget.                                                                                         |

#### Group buttons settings

You can customize each group button through a set of properties by clicking on the gear icon.

| Property           | Description                                                                                                                                                             |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **label**          | Sets the label of a menu.                                                                                                                                               |
| **Button type**    | Control if this is simple button or a Menu button with dropdown items.                                                                                                  |
| **Button color**   | Sets the background color of the widget.                                                                                                                                |
| **Disabled**       | Disables input to the button.The button will remain visible to the user but a user input will not be allowed.                                                           |
| **Visible**        | Controls the visibility of the button. If turned off, the button will not be visible when the app is published                                                          |
| **Icon**           | Gives a list of icons you can add to your buttons.                                                                                                                      |
| **Icon Alignment** | Sets the alignment of the selected icon .                                                                                                                               |
| **Menu items**     | Array of menu items in the dropdown list. This lets you add/remove/edit a menu item and customize the menu item settings. ( Available only for Button type of "Menu". ) |

| Action      | Description                                           |
| ----------- | ----------------------------------------------------- |
| **onClick** | Sets the action to be run when the button is clicked. |

#### Menu item settings

For the button of type "Menu," the user can add several menu items shown on this button click. Each menu item can now be customized through a set of properties by clicking on the gear icon.

| Property             | Description                                                                                                          |
| -------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **Label**            | Sets the label of a menu item.                                                                                       |
| **Background Color** | Sets the background color of a menu item.                                                                            |
| **Text Color**       | Sets the text color of a menu item.                                                                                  |
| **Visible**          | Controls item's visibility on the page. When turned off, the menu item will not be visible when the app is published |
| **Disabled**         | Disables input to the menu item although it will be visible but a user input will not be allowed.                    |
| **Icon**             | Gives a list of icons you can add to your menu items.                                                                |
| **Icon color**       | Sets the icon color of the selected icon.                                                                            |
| **Icon Alignment**   | Sets the alignment of the selected icon .                                                                            |

| Action      | Description                                           |
| ----------- | ----------------------------------------------------- |
| **onClick** | Sets the action to run when the menu item is clicked. |
