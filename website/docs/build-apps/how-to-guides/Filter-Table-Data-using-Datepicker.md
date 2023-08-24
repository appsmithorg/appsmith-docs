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

Follow these steps to filter data within the designated time frame:

1. Create a query to fetch data from the datasource by using the reference properties of the Datepicker widget.

<dd>

*PostgreSQL Example*: suppose you have a table in your database that contains user details, including their date of birth (DOB). You want to allow users to filter data for specific dates, such as retrieving data of users born between `01/01/1980` and `01/01/2010`.

```sql
SELECT * FROM users WHERE dob > {{DatePicker1.selectedDate}} AND dob < {{DatePicker2.selectedDate}} ORDER BY id;
```

This SQL query retrieves all columns from the `users` table where the DOB is within the range specified. Additionally, you can use either the [formattedDate](/reference/widgets/datepicker#formatteddate-string) or [selectedDate](/reference/widgets/datepicker#selecteddate-string) reference property based on your preferred date formatting.

To configure queries for specific datasources, please refer to the [datasource reference](/connect-data/reference).

</dd>


2. Display the data by binding the query response to the [**Table data**](/reference/widgets/table#table-data-arrayobject) property of the Table widget:

<dd>

*Example*:
```js
{{fetchUserData.data}}
```

</dd>

3. For both Datepickers, configure the [**onDateSelected**](/reference/widgets/datepicker#ondateselected) event to execute the filter query. 

Whenever a user selects dates from `Datepicker1` or `Datepicker2`, the table data automatically updates to reflect the data from the selected date range.




