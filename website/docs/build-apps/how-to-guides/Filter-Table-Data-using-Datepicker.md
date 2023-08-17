# Filter Table Data using Datepicker

To get data that was collected within a particular time frame, you need to use a query to filter the data based on that time frame. To retrieve data for a specific date range, you can use either the `formattedDate` or `selectedDate` reference property.
 

*Example*: suppose you have a table in your database that contains user details, including their date of birth (DOB). You want to allow users to filter data for specific dates, such as retrieving data of users born between `01/01/1980` and `01/01/2010`.

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