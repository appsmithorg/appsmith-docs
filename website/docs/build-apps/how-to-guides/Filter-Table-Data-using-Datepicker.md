# Filter Table Data Using Datepicker

This page shows you how to use the Datepicker widget to filter and view table data based on specific date ranges.
 

 <figure>
  <img src="/img/filter-date.gif" style= {{width:"700px", height:"auto"}} alt="Filter Table Data Using Datepicker"/>
  <figcaption align = "center"><i>Filter Table Data Using Datepicker</i></figcaption>
</figure>

## Prerequisites

* A [Table](/reference/widgets/table) widget connected to a query containing a date column.
* Two [Datepicker](/reference/widgets/datepicker) widgets for selecting a date range.

## Query configuration

To filter table data, use a query to filter data within the designated time frame 

1. Create a query using either the [formattedDate](/reference/widgets/datepicker#formatteddate-string) or [selectedDate](/reference/widgets/datepicker#selecteddate-string) reference property. 

<dd>

*Example*: suppose you have a table in your database that contains user details, including their date of birth (DOB). You want to allow users to filter data for specific dates, such as retrieving data of users born between `01/01/1980` and `01/01/2010`.

* For PostgreSQL, you can configure the query as follows:
```sql
SELECT * FROM users WHERE dob > {{DatePicker1.selectedDate}} AND dob < {{DatePicker2.selectedDate}} ORDER BY id;
```

To configure queries for specific datasources, please refer to the [datasource reference](/connect-data/reference).

</dd>


2. Display the data by binding the query response to the **Table Data** property of the Table widget:

<dd>

*Example*:
```js
{{fetchUserData.data}}
```

</dd>

3. Configure **onDateSelected** event to run the filter query for both Datepickers.


Whenever a user selects dates from `Datepicker1` or `Datepicker2`, the table data automatically updates to reflect the data from the selected date range.




