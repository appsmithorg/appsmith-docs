# Datepicker

This page explains how to use the Datepicker widget to display or capture date and time information. It can be used to filter data based on a date range, format date and perform date validations. 

<VideoEmbed host="youtube" videoId="MFflGf3K324" title="Using the Datepicker widget" caption="Using the Datepicker widget"/>

## Set date and time

To set the date and time, you can use the **Default Date** property. You can set this property to any valid date format that the widget supports. 

### Format dates
Appsmith provides several date formats that you can choose from in the **Date Format** property.


You can also use the built-in [**Moment.js**](https://momentjs.com/docs/) library in Appsmith to parse the date in the format required.


For example, you can use `LLL` to display a date in a format such as `MMM D, YYYY h:mm A`, or `YYYY-MM` to display the year and month only.



### Set date in a timezone

When working with dates and time, you may want to display them in a specific time zone. You can achieve this using Moment.js and the `moment-timezone` library. 

---
**Example**: suppose you want to convert the selected date and time to the IST time zone (Asia/Kolkata), you can use the following code in a query or widget binding:

```js
{{
  moment(DatePicker.selectedDate).tz("Asia/Kolkata").format()
}}
```

This code creates a `Moment.js` object from the `DatePicker.selectedDate` property, sets the time zone to `"Asia/Kolkata"` using the `tz()` function, and formats the resulting date and time using the default format. To learn more, refer to [MomentJS timezone documentation](https://momentjs.com/timezone/docs/).


### Display date dynamically

To display the date dynamically based on user interaction or query response, you need to provide data in the **Default date** property.


---

**Example**: suppose you want a master-detail form that shows date of birth of users when you select a row in a table. Suppose you have fetched data from the [mock database](https://docs.appsmith.com/core-concepts/connecting-to-data-sources/connecting-to-databases#sample-databases) using a SELECT query `fetchUserData`. 

You can display the fetched data by binding the query response to the Table Data property of the **Table widget** `tblUserData`, as shown below:

```js
{{fetchUserData.data}}
```

Now, to display the date of birth of each user in the Datepicker widget when a row is selected, you can set the default value of the Datepicker to: 

```js
{{tblUserData.selectedRow.dob}}
```



## Access selected date

To access the date selected by the user in a Datepicker widget, you can use the `formattedDate` or `selectedDate` reference property in your widget bindings or JavaScript functions.

* The **`formattedDate`** property contains the formatted date value currently selected within the Datepicker widget. This value changes if the default value is updated or if the user inputs a new value. The format of the date depends on the **Date Format** property that's set for the widget.
* The **`selectedDate`** property contains the ISO date string selected in the Datepicker widget. This value also changes if the default value is updated or if the user inputs a new value. The date is represented in the following format: YYYY-MM-DDTHH:mm:ss.sssZ, where Z represents the time zone offset from UTC.
---
**Example**: lets take the same users example, if you want to update the date of birth, you can create a new query called `updateDob` with an SQL statement like:

```sql
UPDATE users
  SET dob = '{{DatePicker.formattedDate}}'
  WHERE id = {{tblUserData.selectedRow.id}};
```

Then, set the `onDateSelected` event listener of the Datepicker widget to run the`updateDob` query. 

### Filter data for a date range

To obtain data within a specific timeframe, it's necessary to filter the data by setting a date range using a query. 

---
**Example**: suppose you want to allow users to filter data for specific dates, such as retrieving data of users born between `01/01/1980` and `01/01/201`. To accomplish this, you can add two date pickers to your canvas. Then, create a new query called `filterdata` with the SQL statement:

```sql
SELECT * FROM users WHERE dob > {{DatePicker1.selectedDate}} AND dob < {{DatePicker2.selectedDate}} ORDER BY id;
```

This query retrieves data based on the user-selected date range. Next, you can bind the `onDateSelected` event to run the `filterdata` query for both Datepickers.




## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.


### Widget properties

These properties are present in the property pane of the widget. The following table lists all the widget properties.


|  Property   | Data type |  Description                                                                                                                                                                      |
| -----------------| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Default Date**    | String   | Sets a default date that would be captured as user input unless it's changed by the user.	|
| **Date Format**    | ISO 8601 date string    | The format of the date selected by the date picker.	                                |
| **Time Precision**  | String   | Decides whether a time is included within the Datepicker, and whether that time is to minute or second precision. With JS enabled, values may be `None`, `minute`, or `second`.                                                                                                                                                                                                                                                                                                                                |
| **Required**      | Boolean     | Sets whether the checkbox is a mandatory field.	                                                                                                                                                                                                                                                                                                                            |
| **Visible**       | Boolean     | Controls widget's visibility on the page.	                                                                                                                                                                                                                                                                                                                                                                 |
| **Disabled**       | Boolean    | Disables input to the widget.	                                                                                                                                                                                                                                                                                                                                                                        |
| **Tooltip**          | String              	| It sets a tooltip for the widget. You can add hints or extra information about the required input from the user.      
| **Animate Loading** | Boolean   | When turned off, the widget loads without any skeletal animation. You can use a toggle switch to turn it on/off. You can also turn it off/on using javascript by enabling the JS label next to it.                                                                                                                                                                                                                                                                                                         |
| **Close On Selection** | Boolean | Sets whether the Datepicker menu would automatically close when the user clicks on a date.	                                                                                                                                                                                                                                                                                                                                                                                      |
| **Show Shortcuts**  | Boolean   | Toggles an additional part of the Datepicker menu that allows the user to select from options such as `Today`, `1 week ago`, etc.                                                                                                                                                                                                                                                                                                                                                                      |
| **Min Date**        | ISO 8601 date string   | Sets a minimum/earliest date allowed to be selected with the widget.                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **Max Date**        | ISO 8601 date string   | Sets a maximum/latest date allowed to be selected with the widget.                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| **First Day Of Week**  | Number| Sets which day of the week appears first within the calendar of the Datepicker's menu.	                                                                                                                                                                                                                                                                               |
| **Height**    | String   | It configures how a widget’s height reacts to content changes. It has three possible configurations:<br/>**Fixed**: The height of the widget remains as set using drag and resize.<br/>**Auto Height**: The height of the widget reacts to content changes.<br/>  **Auto Height with limits**: Same as Auto height, with a configurable option to set the minimum and maximum number of rows that can be occupied by the widget.                                      |
| **Text**  | String| This property sets the default text of the Datepicker.                                                                                                                                                                                                                                                                               |
| **Position**    | String   | It allows you to specify the placement of the label.                                     |

### Reference properties

These properties allow you to bind your select widget with any other widget in queries or JS objects. For instance, to get the visibility status, you can use `DatePicker1.isVisible`.


| Reference Property | Data type | Description                                                                                                                                                    |
| ----------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **formattedDate** | String | Contains the formatted date value currently selected within the Datepicker widget. This value changes if the default value is updated or if the user inputs a new value. |
| **selectedDate**  | String | Contains the ISO date string value selected in the Datepicker widget. This value changes if the default value is updated or if the user inputs a new value.          |
| **isDisabled**    | Boolean | This property indicates whether the widget is disabled or not.	                                                                                              |
| **isVisible**     | Boolean | This property indicates whether the widget is visible or not.	                                                                                            |


### Style properties

Style properties allow you to change the look and feel of the widget.

|  Property   | Data type |  Description                                                                                                                                                                      |
| -----------------| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Border Radius** | String | Specifies the radius of the corners of the widget's outer edge. With JS enabled, this accepts valid CSS [`border-radius`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) values. |
| **Box Shadow**  | String  | Adds a drop shadow to the widget. With JS enabled, this accepts valid CSS [`box-shadow`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) values.    |
| **Font Color** | String| Sets the color of the text inside the widget.  |
**Font Size**   | String| Sets the size of the text inside the widget.     |
| **Emphasis Style** | String | Allows you to choose a font style; bold or italic.




## Events

These are functions that are called when event listeners are triggered in the widget. Use [actions](/reference/appsmith-framework/widget-actions) to execute tasks based on user events.


| Event              | Description                                                                                                                                                                                                                       |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **onDateSelected** | Triggers an action when a user selects a date.  |
| **onFocus** | Triggers an action when a Datepicker widget is focused. |
| **onBlur** | Triggers an action when a Datepicker widget loses focus. |

## Sample apps

* [Set Min and Max Date](https://app.appsmith.com/applications/61fbff472cd3d95ca414b9ac/pages/61fbff472cd3d95ca414b9af) -  Allows users to select a date within a specified range.
* [Date Formatting](https://app.appsmith.com/applications/61fbff472cd3d95ca414b9ac/pages/6228975df782567d61f15158) - Demonstrates different date formatting options using Moment.js.
* [Date Calculations](https://app.appsmith.com/applications/61fbff472cd3d95ca414b9ac/pages/6215f9a22882606a1df5c9d9) - Calculates the time difference between two dates using Moment.js.
* [Set and Clear Date](https://app.appsmith.com/applications/61fbff472cd3d95ca414b9ac/pages/6256e5e40d3d384069c07baa) - Lets users set or clear a selected date using a button.
* [Filter Data Between Dates](https://app.appsmith.com/applications/61e022f1eb0501052b9fa205/pages/61e02308eb0501052b9fa20c) - Filters data based on a selected date range.


