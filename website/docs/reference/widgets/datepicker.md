# Datepicker

This page explains how to use the Datepicker widget to display or capture date/time information. It enables to filter the data based on a date range, format dates and performs date validations. 

<VideoEmbed host="youtube" videoId="MFflGf3K324" title="Using the Datepicker widget" caption="Using the Datepicker widget"/>



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

1. Fetch data from the [sample database ](https://docs.appsmith.com/core-concepts/connecting-to-data-sources/connecting-to-databases#sample-databases) `users` using a SELECT query `fetchUserData`. 

2. Display the data by binding the query response to the **Table Data** property of the Table widget `tblUserData`, as shown below:

```js
{{fetchUserData.data}}
```
3. Now, add two date pickers to your canvas. Then, create a new query called `filterdata` with the SQL statement:

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
| **Default Date**    | String   | Sets a default date that would be captured as user input unless the user changes it.  |
| **Date Format**    | ISO 8601 date string    | The date format selected by the date picker.                                  |
| **Time Precision**  | String   | Decides whether a time is included within the Datepicker, and whether that time is to the minute or second precision. With JS enabled, values may be `None`, `minute`, or `second`.                                                                                                                                                                                                                                                                                                                                |
| **Required**      | Boolean     | Sets whether the checkbox is a mandatory field.                                                                                                                                                                                                                                                                                                                             |
| **Visible**       | Boolean     | Controls widget's visibility on the page.                                                                                                                                                                                                                                                                                                                                                                  |
| **Disabled**       | Boolean    | Disables input to the widget.                                                                                                                                                                                                                                                                                                                                                                         |
| **Tooltip**          | String               | It sets a tooltip for the widget. You can add hints or extra information about the required input from the user.      
| **Animate Loading** | Boolean   | When this toggle is switched on, it enables a skeleton loading screen, which sets an animated placeholder while the widget is loading and becomes visible. You can also control this toggle using JavaScript code by clicking the JS button.                                                                                                                                                                                                                                                                 |
| **Close On Selection** | Boolean | Sets whether the Datepicker menu would automatically close when the user clicks on a date.                                                                                                                                                                                                                                                                                                                                                                                       |
| **Show Shortcuts**  | Boolean   | Toggles an additional part of the Datepicker menu that allows the user to select from options such as `Today`, `1 week ago`, etc.                                                                                                                                                                                                                                                                                                                                                                      |
| **Min Date**        | ISO 8601 date string   | Sets a minimum/earliest date allowed to be selected with the widget.                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **Max Date**        | ISO 8601 date string   | Sets a maximum/latest date allowed to be selected with the widget.                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| **First Day Of Week**  | Number| Sets which day of the week appears first within the calendar of the Datepicker's menu.                                                                                                                                                                                                                                                                                |
| **Height**    | String   | It configures how a widget’s height reacts to content changes. It has three possible configurations:<br/>**Fixed**: The height of the widget remains as set using drag and resize.<br/>**Auto Height**: The widget's height reacts to content changes.<br/>  **Auto Height with limits**: Same as Auto height, with a configurable option to set the minimum and the maximum number of rows  the widget can occupy.                                      |
| **Text**  | String| This property sets the default text of the Datepicker.                                                                                                                                                                                                                                                                               |
| **Position**    | String   | It allows you to specify the placement of the label.                                     |

### Reference properties

These properties allow you to bind your select widget with any other widget in queries or JS objects. For instance, you can use `DatePicker1.isVisible` to get the visibility status.


| Reference Property | Data type | Description                                                                                                                                                    |
| ----------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **formattedDate** | String | Contains the formatted date value currently selected within the Datepicker widget. This value changes if the default value is updated or the user inputs a new value. |
| **selectedDate**  | String | Contains the ISO date string value selected in the Datepicker widget. This value changes if the default value is updated or the user inputs a new value.          |
| **isDisabled**    | Boolean | This property indicates whether the widget is disabled.                                                                                                |
| **isVisible**     | Boolean | This property indicates whether the widget is visible.                                                                                             |


### Style properties

Style properties allow you to change the look and feel of the widget.

|  Property   | Data type |  Description                                                                                                                                                                      |
| -----------------| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Border Radius** | String | Specifies the radius of the corners of the widget's outer edge. With JS enabled, this accepts valid CSS [`border-radius`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) values. |
| **Box Shadow**  | String  | Adds a drop shadow to the widget. With JS enabled, this accepts valid CSS [`box-shadow`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) values.    |
| **Font Color** | String| Sets the color of the text inside the widget.  |
**Font Size**   | String| Sets the text size inside the widget.     |
| **Emphasis Style** | String | Allows you to choose a font style; bold or italic.



## Events

When the event is triggered, these event handlers can run queries, JS code, or other supported [actions](/reference/appsmith-framework/widget-actions)


| Event              | Description                                                                                                                                                                                                                       |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **onDateSelected** | Triggers an action when a user selects a date.  |
| **onFocus** | Triggers an action when a Datepicker widget is focused. |
| **onBlur** | Triggers an action when a Datepicker widget loses focus. |




