---
title: Menu Button
hide_title: true
toc_max_heading_level: 2
---
<!-- vale off -->

<div className="tag-wrapper">
 <h1>Menu Button (AI Assistant)</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>


</div>

<!-- vale on -->

This page provides information on the Menu Button widget *(available in AI Assistant Apps)*, which allows you to display a list of actions or options in a dropdown menu. 


## Content properties

These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.


### Basic
The Basic properties allow you to configure the fundamental settings of the widget, such as its label, appearance, and layout.

#### Label


<dd>

Specifies the text displayed on the Menu Button.


</dd>

#### Menu items source `string`

<dd>

Allows you to specify the source of the menu items.

*Options:*
* **Static**: When the Static option is selected, the **Menu Items** property would be visible, allowing you to add and manage the menu items directly from UI. You can click on the ⚙️ gear icon to access the configuration options. 
* **Dynamic**: With Dynamic source, the menu items are populated dynamically by binding the query to **Source data**. To configure the properties of the menu items, click on the **Configure Menu Item** button. The menu items would not be displayed until you configure them using the `currentItem` or `currentIndex` property. 

:::note
The dynamic menu option supports a maximum of 10 menu items. 
:::

</dd>

#### Menu items `string`

<dd>

Displays a list of available menu items in the dropdown. Each item can trigger specific actions or navigation events when selected. You can customize, rearrange, or configure these items by clicking on the ⚙️ gear icon. 

See the <a href="/reference/widgets/menu/menu-items">Menu Items</a> reference guide for configuring menu items.

</dd>

#### Source data `array`

<dd>

It is used to provide the datasource for **Dynamic** menus. It accepts an array of values, which can be obtained from queries or JS. You can directly reference your query in the **Source Data** property, like: 

```js
{{fetchData.data}}
```

If the data retrieved from the query is not in the desired format, you can use JavaScript to **transform** it before passing it to the widget. For instance, if you have a list of product names and you want to display only the unique names in a Menu Button, you can use:


```js
{
    {
        fetchData.data.reduce((acc, cur) => {
            const existingItem = acc.find((item) => item.value === cur.name);
            if (!existingItem) {
                acc.push({ label: cur.name, value: cur.name });
            }
            return acc;
        }, []);
    }
}
```

The code filters the data to create a new array with unique items based on the `type` property.

</dd>


### General

General properties are essential configurations that provide overall control over the widget's behavior and appearance. 


#### Visible `boolean`

<dd>

Controls the visibility of the widget. If you turn off this property, the widget is not visible in View Mode. Additionally, you can use JavaScript by clicking on **JS** next to the **Visible** property to control the widget's visibility conditionally.

For example, if you want to make the widget visible only when the user selects "Yes" from a Select widget, you can use the following JavaScript expression: 
```js
{{Select1.selectedOptionValue === "Yes"}}
```

</dd>

#### Disabled `boolean`

<dd>

Prevents users from selecting the widget. Even though the widget remains visible, user input is not permitted. Additionally, you can use JavaScript by clicking on **JS** next to the **Disabled** property to control the widget's disable state conditionally.

For example, if you want to allow only a specific user to select menu item, you can use the following JavaScript expression: 
```js
{{appsmith.user.email=="john@appsmith.com"?false:true}}
```

</dd>


#### Animate Loading `boolean`


<dd>

Controls whether the widget is displayed with a loading animation. When enabled, the widget shows a skeletal animation during the loading process. Additionally, you can control it through JavaScript by clicking on the **JS** next to the property.

</dd>



## Style properties
Style properties allow you to change the look and feel of the widget.

### General

General properties are essential configurations that provide overall control over the widget's behavior and appearance. 


#### Button variant `string`

<dd>

Specifies the style type of the button to indicate its significance. You can choose from the following options:


*Options:*

* **Filled:** A solid button with a background color, typically used for primary actions or important buttons.
* **Outlined:** A button with only a border and no background, used for secondary actions or less important buttons.
* **Subtle:** A button with minimal styling, often used for less prominent actions, providing a cleaner and more subtle look.
* **Ghost:** A button with no visible border or background, ideal for actions that are even more subtle or when you want to maintain a clean, unobtrusive interface.

This property can also be dynamically set using JS, allowing you to change the button's appearance based on conditions or user interactions.




</dd>

#### Button color `string`

<dd>

Specifies the color of the button to emphasize its importance or action. You can select from the following predefined color options:

- **Accent:** Uses the accent color from the app theme. You can change the accent color from the app theme settings.
- **Neutral**: Uses a neutral color, which is black for light theme and white for dark theme.
- **Positive**: Uses a green shade to indicate positive values. The color cannot be customized.
- **Negative**: Uses a red shade to indicate negative values. The color cannot be customized.
- **Warning**: Uses an orange shade to indicate caution or warnings. The color cannot be customized.

You can enable JS to dynamically update the color. The value should be one of the predefined options such as `accent`, `neutral`, `positive`, `negative`, or `warning`.  You cannot set a custom color directly for this widget. To change the color, you can adjust it through the app theme settings.

*Example:* If you want to change the button color based on whether a checkbox is checked or not, use the following JS expression:

```js
{{ Checkbox1.isChecked ? "positive" : "negative" }}
```

</dd>

#### Icon `string`

<dd>

Specifies the icon to display on the button. You can choose from a predefined list of available icons. By enabling JS, you can dynamically change the icon based on data or user interactions.

*Example:* If you want to change the button's icon based on whether a checkbox is checked or not, use the following JS expression:

```js
{{ Checkbox1.isChecked ? "check" : "alert-circle" }}
```

</dd>



#### Position

<dd>

Specifies the alignment of the icon relative to the button label. You can set it to one of the following values:

- **Left**: Aligns the icon to the left of the label on the button.
- **Right**: Aligns the icon to the right of the label on the button.

</dd>


## Reference properties

Reference properties are properties that are not available in the property pane but can be accessed using the dot operator in other widgets or JavaScript functions. They provide additional information or allow interaction with the widget programmatically. For instance, to get the visibility status, you can use `MenuButton1.isVisible`.

#### label

The Label property is a group of customizable settings that define the main text displayed on the widget. 

<dd>

Returns the value of the label associated with the widget.

*Example:*
```js
{{MenuButton1.label}}
```

</dd>

#### isVisible `boolean`

<dd>

The `isVisible` property indicates the visibility state of a widget, with true indicating it is visible and false indicating it is hidden.

*Example:*
```js
{{MenuButton1.isVisible}}
```

</dd>

## Methods

Widget property setters enable you to modify the values of widget properties at runtime, eliminating the need to manually update properties in the editor.

These methods are asynchronous, and you can use the `.then()` block to ensure execution and sequencing of subsequent lines of code in Appsmith.


#### setVisibility `boolean`

<dd>

Sets the visibility of the widget.

*Example*:

```js
MenuButton1.setVisibility(true).then(() => {
  // code to be executed after visibility is set
})

```

</dd>


#### setDisabled `boolean`

<dd>

Sets the disabled state of the widget.

*Example*:

```js
MenuButton1.setDisabled(false).then(() => {
  // code to be executed after disabled state is set
})
```

</dd>

