# Menu Button

The Menu Button widget is a customizable dropdown menu that allows you to add a list of options for users to select from. It's a powerful tool for creating navigation menus, dropdown lists, and options for users to choose from.

<VideoEmbed host="youtube" videoId="tDMAOxZTmxY" title="How to use Menu Button Widget" caption="How to use Menu Button Widget"/>

## Usage

To use the menu buttons widget, simply drag & drop it onto your app canvas from the widget library and customize it using the properties and events available. The widget comes with default styles, but you can also use the styles tab to customize the look and feel of your buttons and menus. 

## Properties

The menu buttons widget has several properties that you can use to customize its behavior and appearance. Properties also allow you to connect it with other widgets and customize the user actions. The table below gives an exhaustive list of available properties for the menu button and menu item.

### Menu Button properties
These properties allow you to perform formatting changes or bind the Menu Button widget to any other widget, query, or JS object. 

| Property            | Type | Description | Code Snippet |
| ------------------- | ---------------- |------------------- | ---------------- |
| **Label**        | Formatting/ Binding | This property sets the label of the menu button. It can be a static text value or dynamically bound to a source of data. For example, you might set the label to be the logged-in user’s name. To dynamically bind the text, use the `{{}}` mustache sign. You can also read the value of the label in the code. | `{{<WIDGET_NAME.label}}`|
| [**Menu Items Source**](#menu-items-source)| Formatting | This property allows you to specify the source for the menu items. You can define a [static](#static) list of items or provide a [dynamic](#dynamic) data source to be displayed as menu items. |                   |
| **Visible**          | Formatting/Binding | This property controls the visibility of the widget. For more information, see [Visible property details](/reference/widgets#visible)| `{{<WIDGET_NAME.visible}}`|
| **Disabled**         | Formatting | This property disables the input to the widget. For more information, see [Disabled property details](/reference/widgets#disabled).|                  |
| **Animate Loading** | Formatting | This property allows you to control a widget’s animation on the page. This can be useful for adding visual feedback to the user when the widget is loading or processing data.|                  |
| **Compact**         | Formatting | This property decides if the widget is in compact mode. In compact mode, the widget takes up less space on the page and can be suitable to use in tight layouts.|                 

### Menu Item properties
These properties allow you to perform formatting changes for menu items that are added manually using [Static](#static) or dynamically added using [Dynamic](#dynamic) source.

| Property            | Type | Description | Code Snippet |
| ------------------- | ---------------- |------------------- | ---------------- |
| **Label**           | Formatting| This property sets the label of a menu item. This can be a static text value, or it can be dynamically bound to a data source. For example, you might set the label to be the name of a page or a user. | |
| **Visible**           | Formatting/Binding | This property controls the visibility of a menu item. This can be useful for showing or hiding the menu item based on certain conditions. For example, you might show the menu item only if a user has permission to access it. For more information, see [Visible property details](/reference/widgets#visible)) | |
| **Disabled**           | Formatting| This property allows you to turn off input to a menu item. This can be useful if you want to prevent users from interacting with the menu item in certain scenarios. For example, you might turn off a menu item when it's not relevant or applicable. For more information, see [Disabled property details](/reference/widgets#disabled).| |
| **Icon** | Style | This property sets the icon to be used for a menu item. This can be useful for adding visual context and branding to the menu item. The icons are used from [Blueprint](https://blueprintjs.com) library. For more information, see the [list of icons available on Blueprint](https://blueprintjs.com/docs/#icons).| |
|**Position** | Style |  This property allows you to select the position where you want to place the icon on the menu item. You can choose between left or right alignment.| |
|**Icon color** | Style | This property sets the color of the icon for the menu item. This can be useful for matching the icon with the overall design of the menu button.| |
|**Text color** | Style |  This property sets the color of the text for the menu item. This can be useful for making the text stand out or blending in with the background.| |
|**Background color**| Style | This property sets the background color of the menu item. This can be useful for adding visual interest or highlighting the selected menu item.| |

The properties are described as follows:

## Menu Items Source
The "Menu Items Source" property lets you define where the menu items come from. You can either define them manually (Static) or use a dynamic source by selecting the "Dynamic" option. Dynamic option allows you to specify a data source such as a [database query](/core-concepts/data-access-and-binding/querying-a-database) or [API](/reference/datasources/authenticated-api), which can be useful when the number of items or properties in each item need to be updated dynamically.

<VideoEmbed host="youtube" videoId="MrvRADv-H9A" title="How to set Menu Items Source for Menu Button Widget" caption="How to set Menu Items Source for Menu Button Widget"/>

### Static
The "Static" source refers to the ability to manually define the menu items. This means that the menu items don't change unless the user manually updates them. For example, if you have a static menu with three items (Home, About, Contact), the menu always displays those items until they’re manually edited using the gear icon next to it. Once you select `Static` as the source, you see the `Menu Items` property, where you can define the items for the menu.

#### Menu Items
This property allows you to define the options you can show in the dropdown list when the menu button is clicked. You can add the items from the property pane by using the `Add a New Menu Item` button. Each menu item can be customized using the gear icon available next to it. For example, you might define a menu item with a label of "Home" and an action of "Navigate to Home page" by using the gear icon.

##### Menu item settings

The gear icon allows you to access and configure settings for a menu item, such as its [properties](#menu-item-properties). This can be useful for customizing the behavior and appearance of the menu item. You can also set [styles specific to the menu item](#menu-item-properties) like Icon, the position of the icon, background color, and more.

To specify an action to be performed when a menu item is clicked, you can bind a supported action to the `onClick` event of the menu item. You can define different actions to be triggered for different menu items using the gear icon next to them. For more information, see the list of [supported actions](/reference/appsmith-framework/widget-actions)

### Dynamic
When you select the dynamic source, you can bind the menu item's property to a data source, such as a database query or API response. This allows the widget to dynamically populate the menu items based on available data. This is useful for creating menus that can change and adapt based on user input or application state. You can configure the menu items by clicking the `Item Configuration` button.

:::note
 Dynamic menu items **only** supports up to 10 menu items. You can define them in the "Source Data" property for a dynamic source.
:::

#### Source data
The "Source Data" property is used to specify the data source for a dynamic menu. By default, this property has an empty value but can be set to an array of values. This array can be the result of a query, an API response, or any other data source that can be represented as an array. The evaluated array generates the menu items for the dynamic menu.

#### Configure Menu Items
With the "Configure Menu Items" option, you define the styles for the menu items. You can add customizations to every item in the array by configuring them using the 'Item Configuration` button.

##### Item configuration
You can access and configure settings for a menu item, such as its properties, events, and styles. This can be useful for customizing the behavior and appearance of the menu item. The configurations are applied to every item in the Menu. You can use `currentItem` and `currentIndex` to configure the labels, appearance, and actions.

###### How to use currentItem and currentIndex
The `currentItem` property references the selected item on the menu button. You can use the `currentItem` to read the attributes of the selected menu item. For example, if you want to set the dynamic value for the label, then you can use a placeholder such as `{{currentItem.Name}}`, where "Name" is the attribute that holds the name of the menu item. This allows you to display different text for each menu item based on its data. 

![using `currentItem` to show labels](/img/MenuButton-Dynamic-Menu-Label-CurrentItem.png)

`currentIndex` is helpful when you want to show a numbered list of menu items or want to set alternate background colors for the menu items.

![Menu items with label using currentItem and currentIndex binding](/img/MenuButton-dynamic-Menu-Label-NumberedList-CurrentIndex.png)

Overall, the Appsmith menu button widget is a powerful and versatile tool for creating dropdown menus, and navigation tools that provide options for users to choose from. With its customizable properties and styles, you can tailor the widget to suit your specific needs and design preferences.
