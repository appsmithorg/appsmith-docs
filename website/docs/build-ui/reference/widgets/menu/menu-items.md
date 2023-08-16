# Menu Items
These properties provide options to customize the formatting of menu items. For **Static** menu items, you can click on the ⚙️ gear icon to access the configuration options. For **Dynamic** menu items, you can click on the **Configure Menu Item** button to configure the properties.



## Content properties

These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.


### Basic


#### Label `string`

<dd>

The Label property is used to set the text label for a menu item. It can be a static text value or dynamically bound to a data source. For instance, you can set the label to be the name of a page or a user.

</dd>

#### onClick

<dd>

Allows you to configure one or multiple [actions](/write-code/reference/widget-actions) to be executed when the menu item is clicked. You can chain multiple actions together, and all the nested actions would run simultaneously.


</dd>

#### Visible `boolean`

<dd>

Allows you to show or hide the menu item based on specific conditions. 


</dd>

#### Disabled `boolean`

<dd>

Allows you to disable input for a menu item. This can be beneficial when you want to restrict user interaction with the menu item in specific situations.


</dd>


## Style properties
Style properties allow you to change the look and feel of the widget.

### Icon

#### Icon `string`

<dd>

Specifies the icon to be displayed on the button. Additionally, you can use **JS** to dynamically set the icon. Appsmith utilizes the icons from the [Blueprintjs](https://blueprintjs.com/docs/#icons) library.

</dd>

#### Position `string`

<dd>

This property allows you to configure the **Icon**'s placement.

*Options:*
* **Left**: Aligns the Icon to the left side of the Label.
* **Right**: Aligns the Icon to the right side of the Label.


</dd>

### Color


#### Icon color `string`

<dd>

Specifies the color of the icon displayed for the menu item. 
</dd>

#### Text color `string`

<dd>

Specifies the color of the text displayed for the menu item. This property allows you to customize the text color to enhance visibility or achieve a specific visual effect for the menu item.
</dd>

#### Background color `string`

<dd>

Determines the background color of the menu item. 
</dd>


## Reference properties

Reference properties are specific to the menu configuration pane and are not available in the general property pane for the widget. These properties are only accessible when you select the dynamic source data option.

#### currentItem `object`


<dd>

The `currentItem` property refers to the currently selected item on the menu button. It allows you to access and read the attributes of the selected menu item. 


<figure>
  <img src="/img/MenuButton-Dynamic-Menu-Label-CurrentItem.png" style= {{width:"700px", height:"auto"}} alt="Display images on table row selection"/>
  <figcaption align = "center"><i>Display menu items using currentItem</i></figcaption>
</figure>

*Example:*

If you want to dynamically display the label based on the selected item's name, you can use `{{currentItem.Name}}`, where `Name` represents the attribute that stores the name of the menu item. This enables you to show different text for each menu item based on its associated data.



</dd>


#### currentIndex `number`

<dd>

The `currentIndex` property is useful when you want to display a numbered list of menu items or apply alternate background colors to the menu items. You can use the `currentIndex` value to determine the index position of the currently selected menu item or to perform conditional styling based on the index value.

<figure>
  <img src="/img/MenuButton-dynamic-Menu-Label-NumberedList-CurrentIndex.png" style= {{width:"700px", height:"auto"}} alt="Display images on table row selection"/>
  <figcaption align = "center"><i>Display menu items using currentIndex</i></figcaption>
</figure>


*Example:*

To change the color based on the index, using a different color for even numbers, you can use following code in **Background color** property:

```js
{{currentIndex % 2 === 0 ? "#22c55e" : "#facc15"}}
```



</dd>

