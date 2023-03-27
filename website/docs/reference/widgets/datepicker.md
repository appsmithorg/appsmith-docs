# Date Picker

This document explains how to use a Datepicker widget to capture date and time input from users.

<VideoEmbed host="youtube" videoId="MFflGf3K324" title="Configure Datepicker Widget" caption="Configure Datepicker Widget"/>


## Set default date
When working with a Datepicker widget, you may want to set a default date value to be displayed to the user before they select anything. This can be useful for providing context or a starting point for the user.

To set a default date, you can use the **Default Date** property. You can set this property to any valid date format that the widget supports. 

### Date format
Appsmith provides several date formats that you can choose from, such as:

* ISO 8601
* LLL
* LL
* YYYY-MM-DD HH:mm
* YYYY-MM-DDTHH:mm:ss
* YYYY-MM-DD hh:mm:ss A
* DD/MM/YYYY HH:mm
* D MMMM, YYYY
* H:mm A D MMMM, YYYY
* YYYY-MM-DD
* MM-DD-YYYY
* DD-MM-YYYY
* MM/DD/YYYY
* DD/MM/YYYY
* DD/MM/YY


If you need more advanced date formatting options, you can use the [**Moment.js**](https://momentjs.com/docs/) library which is installed by default in Appsmith. Moment.js is a JavaScript library for parsing, validating, manipulating, and formatting dates. With Moment.js, you can define your own custom date formats using a simple syntax.

To use Moment.js with Appsmith, you can simply write JavaScript code in the widget's **Date Format** property. For example, you can use the following code to set the default date value to **today's date** in a specific format:

```JS
{{moment().format('YYYY-MM-DD')}}
```

This code uses the `moment()` function to get the current date and then formats it using the `format()` method with the desired [format string](https://momentjs.com/docs/#/parsing/string-format/).


## Display date dynamically

You can display the date dynamically based on user interaction or by fetching the date from a query response.


---

**Example**: suppose you want to display the date of birth of users in the [mock database](https://docs.appsmith.com/core-concepts/connecting-to-data-sources/connecting-to-databases#sample-databases).

You can fetch the users data from the database using a query like `fetchUserData`. You can then bind the query response to the **Table Data** property of the Table widget `tblUserData` to display the fetched data:

```js
{{fetchUserData.data}}
```

Now, to display the date of birth of each user in the Datepicker widget when a row is selected, you can set the default value of the Datepicker to: 

```js
{{tblUserData.selectedRow.dob}}
```



## Access selected date

To access the date selected by the user in a Datepicker widget, you can use the `formattedDate` or `selectedDate` binding property in your widget bindings or JavaScript functions.

* The **`formattedDate`** property contains the formatted date value currently selected within the Datepicker widget. This value changes if the default value is updated or if the user inputs a new value. The format of the date depends on the `dateFormat` property that's set for the widget.
* The **`selectedDate`** property contains the ISO date string selected in the Datepicker widget. This value also changes if the default value is updated or if the user inputs a new value. The date is represented in the following format: YYYY-MM-DDTHH:mm:ss.sssZ, where Z represents the time zone offset from UTC.
---
**Example**: lets take the same users example, if you want to update the date of birth, you can create a new query called `updateDob` with an SQL statement like:

```sql
UPDATE users
  SET dob = '{{DatePicker.formattedDate}}'
  WHERE id = {{tblUserData.selectedRow.id}};
```
Then, set the `onDateSelected` property of the Datepicker widget to run the`updateDob` query. 


### Retrieve data for a range

Retrieving data for a specific date involves using a query to retrieve data that falls within a specified date range.

For example, suppose you want to allows users to filter data for specific dates, such as retrieving data of users born between `01/01/1980` and `01/01/201`. To accomplish this, you can add two date pickers to your canvas. Then, create a new query called `filterdata` with the SQL statement:

```sql
SELECT * FROM users WHERE dob > {{DatePicker1.selectedDate}} AND dob < {{DatePicker2.selectedDate}} ORDER BY id;
```

This query retrieves data based on the user-selected date range. Next, you can bind the `onDateSelected` event to run the `filterdata` query for both Datepickers.


## Set min and max date limit

To set a minimum and maximum date limit for the date pickers, you can make use of the **Min Date** and **Max Date** properties. These properties allow you to set the minimum and maximum selectable dates for the date pickers. Once you set these limits, only the dates that fall within the specified range would be displayed and selectable.


## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.


### Widget properties

These properties are present in the property pane of the widget. The following table lists all the widget properties.


|  Property   | Data type |  Description                                                                                                                                                                      |
| -----------------| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Default Date**    | String   | Sets a default date that would be captured as user input unless it's changed by the user.	|
| **Date Format**    | String    | The format of the date selected by the date picker.	                                |
| **Time Precision**  | String   | Decides whether a time is included within the Datepicker, and whether that time is to minute or second precision. With JS enabled, values may be `None`, `minute`, or `second`.                                                                                                                                                                                                                                                                                                                                |
| **Required**      | String     | Sets whether the checkbox is a mandatory field.	                                                                                                                                                                                                                                                                                                                            |
| **Visible**       | String     | Controls widget's visibility on the page.	                                                                                                                                                                                                                                                                                                                                                                 |
| **Disabled**       | String    | Disables input to the widget.	                                                                                                                                                                                                                                                                                                                                                                        |
| **Tooltip**          | String              	| It sets a tooltip for the widget. You can add hints or extra information about the required input from the user.      
| **Animate Loading** | String   | When turned off, the widget loads without any skeletal animation. You can use a toggle switch to turn it on/off. You can also turn it off/on using javascript by enabling the JS label next to it.                                                                                                                                                                                                                                                                                                         |
| **Close On Selection** | String | Sets whether the Datepicker menu would automatically close when the user clicks on a date.	                                                                                                                                                                                                                                                                                                                                                                                      |
| **Show Shortcuts**  | String   | Toggles an additional part of the Datepicker menu that allows the user to select from options such as `Today`, `1 week ago`, etc.                                                                                                                                                                                                                                                                                                                                                                      |
| **Min Date**        | String   | Sets a minimum/earliest date allowed to be selected with the widget.                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **Max Date**        | String   | Sets a maximum/latest date allowed to be selected with the widget.                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| **First Day Of Week**  | String| Sets which day of the week appears first within the calendar of the Datepicker's menu.	                                                                                                                                                                                                                                                                               |
| **Height**    | String   | It configures how a widget’s height reacts to content changes. It has three possible configurations:<br/>**Fixed**: The height of the widget remains as set using drag and resize.<br/>**Auto Height**: The height of the widget reacts to content changes.<br/>  **Auto Height with limits**: Same as Auto height, with a configurable option to set the minimum and maximum number of rows that can be occupied by the widget.                                      |


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

