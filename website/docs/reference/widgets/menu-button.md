# Menu Button

This page provides information on using the Menu Button, which allows you to create customizable dropdown menus with a range of options for user selection.


## Content properties

These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.


### Basic

#### Label `string`

<dd>
Sets the text on the widget.

</dd>

#### Menu items source `string`

<dd>

Allows you to specify the source of the menu items.

*Options:*
* **Static**: When the Static option is selected, the **Menu Items** property would be visible, allowing you to add and manage the menu items directly from UI.
* **Dynamic**:

</dd>

### General

#### Visible `boolean`

<dd>

Controls the visibility of the widget. If you turn off this property, the widget would not be visible in View Mode. Additionally, you can use JavaScript by clicking on **JS** next to the **Visible** property to conditionally control the widget's visibility.

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

#### Compact `boolean`

<dd>
When enabled, the widget is displayed in compact mode, occupying less space on the page. Compact mode is ideal for tight layouts where space optimization is necessary.
</dd>


## Style properties
Style properties allow you to change the look and feel of the widget.

### General

#### Button variant `string`

<dd>

Specifies the style type of the button to indicate its significance.

*Options:*
* Primary
* Secondary
* Tertiary

This property can be dynamically set using JavaScript by providing a string value of PRIMARY, SECONDARY, or TERTIARY.
</dd>

### Icon

#### Icon `string`

<dd>

Specifies the icon to be displayed on the button. Additionally, you can use **JS** to dynamically set the icon. You can refer to the documentation of [blueprintjs](https://blueprintjs.com/docs/#icons) to explore a wide range of available icons.

</dd>

#### Position `string`

<dd>

This property allows you to configure the **Icon**'s placement.

*Options:*
* **Left**: Aligns the Icon to the left side of the Label.
* **Right**: Aligns the Icon to the right side of the Label.


</dd>

#### Placement `string`

<dd>

Determines the spacing between the **Icon** and the **Label**.

*Options:*
* Start
* Center
* Between

</dd>

### Color

#### Button color `string`

<dd>

Represents the color of the button, specified as a [CSS color value](https://developer.mozilla.org/en-US/docs/Web/CSS/color). Additionally, the font color can be programmatically modified using JavaScript functions.

</dd>

### Border and shadow

#### Border radius `string`

<dd>

Applies rounded corners to the outer edge of the widget. If JavaScript is enabled, you can specify valid [CSS border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) to adjust the radius of the corners.

</dd>

#### Box Shadow `string`
 

<dd>

This property adds a drop shadow effect to the frame of the widget. If JavaScript is enabled, you can specify valid [CSS box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) values to customize the appearance of the shadow.


</dd>

## Reference properties

Reference properties are properties that are not available in the property pane but can be accessed using the dot operator in other widgets or JavaScript functions. They provide additional information or allow interaction with the widget programmatically. For instance, to get the visibility status, you can use `MenuButton1.isVisible`.

#### label

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

## Configure menu items

These properties provide options to customize the formatting of menu items. For **Static** menu items, you can click on the ⚙️ gear icon to access the configuration options. For **Dynamic** menu items, you can click on the **Configure Menu Item** button to configure the properties.


### Basic

#### Label `string`

<dd>

The Label property is used to set the text label for a menu item. It can be a static text value or dynamically bound to a data source. For instance, you can set the label to be the name of a page or a user.

*Example:*

</dd>

#### onClick

<dd>

Allows you to configure one or multiple [actions](/reference/appsmith-framework/widget-actions) to be executed when the menu item is clicked. You can chain multiple actions together, and all the nested actions would run simultaneously.


</dd>

#### Visible `boolean`

<dd>

Allows you to show or hide the menu item based on specific conditions. 

*Example:*

</dd>

#### Disabled `boolean`

<dd>

Allows you to disable input for a menu item. This can be beneficial when you want to restrict user interaction with the menu item in specific situations.

*Example:*

</dd>