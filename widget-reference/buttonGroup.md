---
description: Button group widget is used to represent a set of buttons in a group. Group can have simple buttons or menu buttons with drop down items.
---

# Button Group

## Properties

| Property | Description |
| :--- | :--- |
| **orientation** | Control orientation of button group, "horizontal" or "vertical". |
| **buttonVariant** | Sets the variant of the button group. There are 3 different variants to be chosen from. |
| **borderRadius** | Rounds the corners of the icon button's outer border edge. Available options: Sharp, Rounded, and Circle. |
| **boxShadow** | Enables you to cast a drop shadow from the frame of the widget. There are 6 different options. |
| **boxShadowColor** | Sets the shadow color of the widget. |

### Group buttons settings

Each button of the group can now be customized through a set of properties by clicking on the gear icon.

| Property | Description |
| :--- | :--- |
| **buttonType** | Control if this is simple button or a Menu button with dropdown items. |
| **label** | Sets the label of a menu. |
| **buttonColor** | Sets the background color of the widget. |
| **isDisabled** | Disables input to the widget. |
| **isVisible** | Controls the visibility of the widget. |
| **iconName** | Sets the name of an icon to render before or after the text. |
| **iconAlign** | Sets the alignment of the selected icon . |
| **menuItems** | Array of menu items in the dropdown list. This lets you add/remove/edit a menu item and customize the menu item settings. ( Available only for buttonType of "Menu". ) |

| Action | Description |
| :--- | :--- |
| **onClick** | Sets the action to be run when the button is clicked. |

### Menu item settings

For button of type "Menu", user can add any number of menu items to be shown on this button click.
Each menu item can now be customized through a set of properties by clicking on the gear icon.

| Property | Description |
| :--- | :--- |
| **label** | Sets the label of a menu item. |
| **backgroundColor** | Sets the background color of a menu item. |
| **textColor** | Sets the text color of a menu item. |
| **isDisabled** | Disables input to a menu item. |
| **isVisible** | Controls the visibility of a menu item. |
| **iconName** | Sets the name of an icon to render before or after the text. |
| **iconColor** | Sets the icon color of the selected icon. |
| **iconAlign** | Sets the alignment of the selected icon . |

| Action | Description |
| :--- | :--- |
| **onClick** | Sets the action to be run when the a menu item is clicked. |
