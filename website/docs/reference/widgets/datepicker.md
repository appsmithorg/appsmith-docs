---
description: >-
  Datepicker widget reference
---

# Datepicker

This page describes the properties of the Datepicker widget which can be used to display or capture date/time information. It enables to filter the data based on a date range, format dates and performs date validations. 

## Content properties

These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.


### Data

#### Date format `ISO 8601 date string`

<dd>

The date format selected for  the Datepicker widget. 

</dd>

#### Default date `string`

<dd>

Sets a default date that would be captured as user input unless it is changed by the user.

</dd>

#### First day of the week `number`

<dd>

Sets which day of the week appears first within the calendar of the Datepicker's menu.

</dd>

#### Time precision `string`

<dd>

Decides whether a time is included within the Datepicker, and whether that time is to the minute or second precision. With JS enabled, values may be `None`, `minute`, or `second`.

</dd>

### Label

#### Text `string`

<dd>

Sets the label text displayed in the Datepicker widget.

</dd>

### Validation

#### Required

<dd>

Enables you to designate the Datepicker widget as a mandatory field. 

</dd>

#### Min date `ISO 8601 date string`

<dd>

Sets a minimum/earliest date permitted to be selected in the widget.

</dd>

#### Max date `ISO 8601 date string`

<dd>

Sets a maximum/latest date allowed to be selected with the widget.

</dd>

### General

#### Tooltip

<dd>

Sets a tooltip that appears when the user hovers over the widget. It enables you to add hints or provide additional information for the widget. Additionally, you can control it through JavaScript by clicking on the **JS** next to the property.

</dd>

#### Visible `boolean`

<dd>

Controls the visibility of the widget. If you turn off this property, the widget is not visible in View mode. Additionally, you can use JavaScript by clicking on **JS** next to the **Visible** property to control the widget's visibility conditionally.

For example,  if you want to make the widget visible only when the user checks an item in a Checkbox widget, you can use the following JavaScript expression in the visible property of the Dateoicker widget:

```js
{{Checkbox1.isChecked}}
```

</dd>

#### Disabled `boolean`

<dd>

Prevents users from selecting the widget. Even though the widget remains visible, user input is not permitted. Additionally, you can use JavaScript by clicking on **JS** next to the `Disabled` property to control the widget's disabled state conditionally.

For example, if you want to allow only a specific user to interact with the Datepicker widget, you can use the following JavaScript expression: 
```js
{{appsmith.user.email=="john@appsmith.com"?false:true}}
```

</dd>


#### Animate Loading `boolean`

<dd>

Controls whether the widget is displayed with a loading animation. When enabled, the widget shows a skeletal animation during the loading process. Additionally, you can control it through JavaScript by clicking on the **JS** next to the property.

</dd>

#### Show shortcuts `boolean`

<dd>

When enabled, it adds section within the Datepicker pop-up that contains options - **Today**, **1 week ago**, **1 month ago**,**3 months ago**, **1 year ago**, for quick date selection.

</dd>

#### Close on selection `boolean`

<dd>

Sets whether the Datepicker menu should automatically close upon user selection of a date

</dd>

#### Height `string`

<dd>

This property determines how the widget's height adjusts to changes in its content. There are three available options:

- **Fixed:** The height of the widget remains as set using drag and resize.
- **Auto Height:** The widget's height adjusts dynamically in response to changes in its content.
- **Auto Height with limits:** Same as Auto height, with a configurable option to set the minimum and maximum number of rows the widget can occupy.

</dd>

### Events 

When an event is triggered, these event handlers can execute queries, JS code, or other supported [actions](/reference/appsmith-framework/widget-actions).

#### onDateSelected

<dd>

Triggered when the user selects a date in the Datepicker widget.  

</dd>

#### onFocus

<dd>

Triggered the user clicks on or interacts with the widget

</dd>

#### onBlur

<dd>

Triggered when the widget loses focus, typically when the user clicks outside of the widget or interacts with another element on the page.

</dd>

## Style properties

Style properties allow you to change the look and feel of the widget.

### Label styles

#### Font color `string`

<dd>

Enables you to set text color for the label. Additionally, click the **JS** button to programmatically modify the text color using JavaScript functions.

</dd>

#### Font size `string`

<dd>

Enables you to control the size of the label text. Additionally, click the **JS** button to programmatically modify text size using JavaScript functions.

</dd>

#### Emphasis `string`

<dd>

Enables you to choose a font style; bold or italic. Additionally, click the **JS** button to programmatically modify the font style using JavaScript functions.

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

Reference properties enable you to access the widget's data and state using the dot operator in other widgets or JavaScript functions. They provide additional information or allow interaction with the widget programmatically. For instance, to retrieve the visibility status of a Datepicker widget, you can use `Datepicker1.isVisible`.

#### formattedDate `string`

<dd>

Contains the formatted date value currently selected within the Datepicker widget. This value changes if the default value is updated or the user inputs a new value.

*Example:*

```js
{{Datepicker1.formattedDate}}
```

</dd>

#### selectedDate `string`

<dd>

Contains the ISO date string value selected in the Datepicker widget. This value changes if the default value is updated or the user inputs a new value.

*Example:*

```js
{{Datepicker1.selectedDate}}
```

</dd>

#### isDisabled `boolean`

<dd>

It reflects the state of the widget's Disabled setting. It is represented by a boolean value, where `true` indicates that the widget is disabled, and `false` indicates that it is enabled for user interaction.

*Example:*

```js
{{Datepicker1.isDisabled}}
```

</dd>

#### isVisible `boolean`

<dd>

The `isVisible` property indicates the visibility state of a widget, with true indicating it is visible and false indicating it is hidden.

*Example:*
```js
{{Datepicker1.isVisible}}
```

</dd>

## Methods

Widget property setters enable you to modify the values of widget properties at runtime, eliminating the need to manually update properties in the editor.

These methods are asynchronous and return a [Promise](/core-concepts/writing-code/javascript-promises#using-promises-in-appsmith). You can use the `.then()` block to ensure execution and sequencing of subsequent lines of code in Appsmith.


#### setVisibility (param: boolean): Promise

<dd>

Sets the visibility of the widget.

*Example*:

```js
DatePicker1.setVisibility(true)
```

</dd>


#### setDisabled (param: boolean): Promise

<dd>

Sets the disabled state of the widget.

*Example*:

```js
DatePicker1.setDisabled(false)
```

</dd>

#### setValue (param: string): Promise

<dd>

Allows you to dynamically set the value of the widget.

*Example*:

```js
DatePicker1.setValue('11-01-1994')
```

</dd>


#### setRequired (param: boolean): Promise

<dd>

Sets whether the widget is required or not.

*Example*:

```js
DatePicker1.setRequired(true)
```

</dd>

## Update date

To update the date, you can start by setting a **Default Date**. You can also display the date from a query response or JS function and set it to any valid date format that the widget supports. To access the date the user selects in the Datepicker widget, you can use the `formattedDate` or `selectedDate` reference property.

* The `formattedDate` property contains the formatted date value currently selected within the Datepicker widget. The format depends on the **Date Format** property set for the widget.
* The `selectedDate` property contains the ISO date string selected in the Datepicker widget. This value also changes if the default value is updated or the user inputs a new value. The date is in the format: `YYYY-MM-DDTHH:mm:ss.sssZ`, where Z represents the time zone offset from UTC.

---

**Example**: suppose you have a master-detail form showing users' date of birth when you select a row in a table. For this, lets use the same `tblUserData` table.

1. To display the date of birth of each user in the Datepicker widget when a row is selected, set the **Default Date** property of the Datepicker as shown below: 

```js
{{tblUserData.selectedRow.dob}}
```

2. To update the date of birth, you can create a new query called `updateDob` with an UPDATE statement as shown below:

```sql
UPDATE users
  SET dob = {{DatePicker.selectedDate}}
  WHERE id = {{tblUserData.selectedRow.id}};
```

Then, set the `onDateSelected` event listener of the Datepicker widget to run the`updateDob` query. 

You can also use the built-in [**Moment.js**](https://momentjs.com/docs/) library in Appsmith to parse the date in the format required. For instance, if you want to convert the selected date and time to the IST timezone (Asia/Kolkata), use the following code:

```js
{{
  moment(datePickerName.selectedDate).tz("Asia/Kolkata").format()
}}
```

<figure>
  <img src="/img/display-date-datepicker.png" alt="Display date"/>
  <figcaption align = "center"><i>Display date from table row</i></figcaption>
</figure>



## Filter data for a date range
To get data that was collected within a particular time frame, you need to use a query to filter the data based on that time frame. To retrieve data for a specific date range, you can use either the `formattedDate` or `selectedDate` reference property.

--- 

**Example**: suppose you have a table in your database that contains user details, including their date of birth (DOB). You want to allow users to filter data for specific dates, such as retrieving data of users born between `01/01/1980` and `01/01/2010`.

1. Fetch data from the sample **users** database using a SELECT query `fetchUserData`. 

2. Display the data by binding the query response to the **Table Data** property of the Table widget `tblUserData`, as shown below:

```js
{{fetchUserData.data}}
```
3. Now, add two date pickers to your canvas. Then, create a new query called `filterdata` with the SQL statement:

```sql
SELECT * FROM users WHERE dob > {{DatePicker1.selectedDate}} AND dob < {{DatePicker2.selectedDate}} ORDER BY id;
```
This query retrieves data based on the user-selected date range. Next, you can bind the `onDateSelected` event to run the `filterdata` query for both Datepickers.