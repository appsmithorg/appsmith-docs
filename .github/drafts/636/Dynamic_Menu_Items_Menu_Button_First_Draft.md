# Menu Button

Previously, the Menu Button Widget only allowed users to add menu items using the UI in the property pane. They would simple click on "Add a new menu item" button and then go on to configure this individual menu item using the settings icon after the menu item.

This prevented super users to add the menu options dynamically, using JS.

With [#17652](https://github.com/appsmithorg/appsmith/pull/17652), users will be able to add upto 10 menu items using JS. They simply need to select Menu Item Source (a new property) as Dynamic, bind a source data, and then they can configure each menu item by referencing `currentItem` inside the configuration.

### TL;DR

-   Dropdown to select Menu Items Source as Static (default) or Dynamic
-   If dynamic, get menu items from a source (an array of values/objects, max length 10)
-   Configure the menu items individually using  `{{ currentItem }}`. An autocomplete will also help here. Control item's
    -   Label
    -   Visibility
    -   Disabled state
    -   onClick event
    -   Icon
        -   Position
        -   Color
    -   Background color
    -   Text color

### New Widget Properties
**1. Menu Items Source** - Options - Static, and Dynamic; Default value - Static

When static is selected, the menu button works exactly the same as it did previously.
When `Dynamic`, the new option, is selected, two new properties, `Source Data` and `Configure Menu Items` show up. More on these below.

**2. Source Data** - Default value - [], Expected value - Array of values

Any array can be binded here. It can be a query's response, an API response, or even our own Table's `Table.tableData` works. The evaluated array here will be used as the base for our menu items. Using `Configure Menu Items` we will essentially loop over each item inside this array to configure the menu item's appearance and behaviour.
We have added one important validation here on the source data array - it's length cannot be more than 10. This translates to the following - 

> When using dynamic menu items inside the menu button widget, we can create a menu button having a maximum of 10 menu items.

**3. Configure Menu Items** - 

When you click the `Item Configuration` button, a new child panel opens up. Here, we can configure how each menu item will appear and behave. There are two ways we can configure a menu item here.
1. By using the UI - all menu items will have a similar configuration. 
For example, if I have the label set to `Menu Item`, all menu items inside the menu button dropdown will have the label `Menu Item`
2. Using the `currentItem` and `currentIndex` binding - All menu items will be customized.
For example, if the `Source Data` is 
```js
["yellow", "red", "blue"]
```
and my label is set to be
```js
Color - {{currentItem}}, Index - {{currentIndex}}
```
The menu items list will now be 

![](label.png)

Using these bindings, we can also apply properties conditionally. For example, `source data` is -
```js
["yellow", "red", "blue"]
```
and `background color` can be - 
```js
{{currentItem === "blue" ? "black" : "gray"}}
```
The menu items list will now be 

![](background-color.png)

### Note
Right now, dynamic menu items are only supported inside the menu button and the list widget. Two more issues for adding dynamic menu items inside the table widget ([#17955](https://github.com/appsmithorg/appsmith/issues/17955)) and in the button group widget have been created ([#17956](https://github.com/appsmithorg/appsmith/issues/17956)). We will add the support inside table and button group in the upcoming weeks.