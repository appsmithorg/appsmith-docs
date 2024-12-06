---
title: Stats
hide_title: true
toc_max_heading_level: 2
---
<!-- vale off -->

<div className="tag-wrapper">
 <h1>Stats (AI Assistant)</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>



</div>

<!-- vale on -->

This page provides information on the Stats Widget *(available in AI Assistant Apps)*, which allows you to display numerical values, percentages, and associated text based on dynamic data. It is commonly used to showcase key metrics and performance indicators, offering quick insights to users.


 <ZoomImage
    src="/img/stats-widget.png" 
    alt=""
    caption=""
  /> 


## Content properties

These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.

### Fields

#### Label

<dd>

The Label property sets the main text displayed in the Stats widget. For example, the label could indicate `Active Users`, `Total Sales`, or `Completed Orders` depending on the data you want to showcase.

You can also dynamically update the label based on user interactions or data:

```js
{{TimePeriodDropdown.selectedOptionValue === "Daily" ? "Stats for Today" : "Stats for This Month"}}
```

</dd>

#### Value `string`

<dd>

The Value property allows you to set the displayed value in the Stats widget. You can dynamically change the value using mustache bindings `{{}}`.

*Example:* If you want to display the total amount from a selected row in a table, you can use the following mustache binding:

```js
{{salesTable.selectedRow.amount}}
```

</dd>

#### Value color `string`

<dd>

The **Value color** property sets the color for the value and the icon displayed in the Stats widget. There are predefined color options you can select from, based on your app's theme:

- **Default**: Uses the default color of the app theme (black color for light theme, white color for dark theme).
- **Accent**: Uses the accent color from the app theme. You can update the accent color from the app theme settings.
- **Neutral**: Uses a neutral color, which is black for light theme and white for dark theme.
- **Positive**: Uses a green shade to indicate positive values. The color cannot be customized.
- **Negative**: Uses a red shade to indicate negative values. The color cannot be customized.
- **Warning**: Uses an orange shade to indicate caution or warnings. The color cannot be customized.

You can enable JS to dynamically update the color. The value should be one of the predefined options such as `default`, `accent`, `neutral`, `positive`, `negative`, or `warning`.  You cannot set a custom color directly for this widget. To change the color, you can adjust it through the app theme settings.


</dd>

### Optional Fields

#### Icon 

<dd>

Allows you to set an icon for the Stats widget. You can choose from a predefined list of available icons. By enabling JS, you can dynamically change the icon based on data or user interactions.

*Example:* Display a different icon based on stock levels:

```js
{{ inventoryTable.selectedRow.stock > 10 ? 'trending-up' : 'trending-down' }}
```

</dd>

#### Position

<dd>

Allows you to set the alignment of the icon within the Stats widget. You can either position the icon to the left or right of the value.


</dd>


#### Value change `string`

<dd>


Displays secondary information related to the main value, often used to indicate a percentage or numerical change over time. You can dynamically update this field using `{{}}` bindings based on data or user interactions.

*Example:* If you want to display the percentage increase in sales from a table, you could use:

```js
{{(salesTable.selectedRow.currentMonthSales - salesTable.selectedRow.lastMonthSales) / salesTable.selectedRow.lastMonthSales * 100}}%
```

</dd>


#### Color `string`

<dd>

Specifies the color for emphasizing the semantic impact of the value change, helping users quickly interpret the data. This property uses the same predefined color options as the **Value Color** property:

- **Default**: Uses the default color of the app theme (black color for light theme, white color for dark theme).
- **Accent**: Uses the accent color from the app theme. You can update the accent color from the app theme settings.
- **Neutral**: Uses a neutral color, which is black for light theme and white for dark theme.
- **Positive**: Uses a green shade to indicate positive values. The color cannot be customized.
- **Negative**: Uses a red shade to indicate negative values. The color cannot be customized.
- **Warning**: Uses an orange shade to indicate caution or warnings. The color cannot be customized.

You can enable JS to dynamically update the color. The value should be one of the predefined options such as `default`, `accent`, `neutral`, `positive`, `negative`, or `warning`.  You cannot set a custom color directly for this widget. To change the color, you can adjust it through the app theme settings.

*Example:* If you want to display the performance trend based on sales data, you can dynamically set the Color property as follows:


```js
{{salesChange > 0 ? "Positive" : "Negative"}}
```


</dd>

#### Caption `string`

<dd>

Defines the descriptive text displayed below the main value in the Stats widget. This can be used to provide additional context, such as units of measurement or a brief explanation. You can set this property dynamically using `{{}}` to reflect real-time data changes.

*Example:* If you want to display the date of the last update:

```js
{{"Updated on " + moment().format("MMM DD, YYYY")}}
```



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

#### Animate Loading `boolean`


<dd>

This property controls whether the widget is displayed with a loading animation. When enabled, the widget shows a skeletal animation during the loading process. Additionally, you can control it through JavaScript by clicking on the <code>JS</code> next to the property.

</dd>

### General

General properties are essential configurations that provide overall control over the widget's behavior and appearance. 


#### Visual Separation boolean

<dd>

Controls the visual distinction of the section by adding an elevated background and/or borders. This property helps to visually separate the section from other sections, making it easier for users to distinguish between different content areas on the page.


</dd>

## Reference properties

These properties are not available in the property pane, but can be accessed using the dot operator in other widgets or JavaScript functions. For instance, to get the visibility status, you can use `StatsWidget.isVisible`.


#### isVisible `boolean`

<dd>

The `isVisible` property reflects the state of the widget's **Visible** setting. It is represented by a boolean value, where true indicates that the widget is visible, and false indicates that it is hidden or not displayed on the page.

</dd>


## Methods

Widget property setters enable you to modify the values of widget properties at runtime, eliminating the need to manually update properties in the editor.

These methods are asynchronous and return a [Promise](/core-concepts/writing-code/javascript-promises#using-promises-in-appsmith). You can use the `.then()` block to ensure execution and sequencing of subsequent lines of code in Appsmith.



#### setVisibility (param: boolean): Promise

<dd>

This allows you to change the visibility of widget based on conditions or user interactions within JS.

*Example*:

```js
StatsWidget.setVisibility(true)  // Shows the widget
```

You can also use it to hide the widget based on a condition:

```js
StatsWidget.setVisibility(salesData > 0)  // Shows the widget only when sales data is greater than 0
```

</dd>