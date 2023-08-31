---
description: This page shows you how to display a master-detail form and update table data using a JSON form and Form widget.
---
# Update Table Data Using Form

This page shows you how to display a master-detail form and update table data using JSON form and Form widget.

## Prerequisites

* A [Table](/reference/widgets/table) widget connected to a query.
* A [JSON Form](/reference/widgets/json-form) or [Form](/reference/widgets/form) widget for updating table data.


## Submit form data using JSON Form

Follow these steps to set up a JSON Form and configure the query:

 <figure>
  <img src="/img/jsonguide.gif" style= {{width:"700px", height:"auto"}} alt="Update Table Data using JSON Form"/>
  <figcaption align = "center"><i>Update Table Data using JSON Form</i></figcaption>
</figure>

1. To display a master-detail form when a user selects a row in a Table widget, you can add the below code in the **Source Data** property of the JSON Form:

<dd>

*Example*: 

```JS
{{Table1.selectedRow}}
```

Based on the data, the JSON Form automatically identifies the appropriate field type for each value. For instance, if the data contains the field `age`, the form sets the field type to a `Number Input`. In addition, you can add or customize field types using the [**Field Configuration**](/reference/widgets/json-form#field-configuration-list) property.

</dd>

2. Create a query to update the data using the [formData](/reference/widgets/json-form#formdata-object) reference property.

<dd>

*PostgreSQL Example*: 

```sql
UPDATE users
SET 
  phone = {{JSONForm1.formData.phone}},
  email = {{JSONForm1.formData.email}}
WHERE id = {{JSONForm1.formData.id}};
```

The above query updates the `phone` and `email` fields in the `users` table using the JSON form data. It targets the user record with the provided `ID`.


</dd>

3. Configure the [**onSubmit**](/reference/widgets/json-form#events) event to execute the update query. 

This setup submits the JSON Form data to the datasource.

## Submit form data using Form widget

Follow these steps to set up a Form widget and configure the query:

 <figure>
  <img src="/img/form-guide-2.gif" style= {{width:"700px", height:"auto"}} alt="Update Table Data using JSON Form"/>
  <figcaption align = "center"><i>Update Table Data using Form</i></figcaption>
</figure>


1. To display a master-detail form when a user selects a row in a Table widget, drag the relevant widgets into the Form widget (e.g., Text, Inputs, Select).

2. Configure each widget to display data. To bind table data, use the [selectedRow](/reference/widgets/table#selectedrow-object) reference property.

<dd>

*PostgreSQL Example*: suppose you have a `users` table and you want to display the email field when the user selects a row. Add the following code to the Input widget's **Default value** property:

```js
{{Table1.selectedRow.email}}
```

The above code displays the `email` from the selected row in the table. Similarly, you can populate other widgets with table data.


</dd>

3. Create a query to update the data using the [data](/reference/widgets/form#data-object) reference property.


<dd>

*PostgreSQL Example*: 

```sql
UPDATE public.users
SET 
  phone = {{Form1.data.PhoneInput1}},
  email = {{Form1.data.Input1}}
WHERE id = {{Form1.data.Textid}};
```

The above query updates the `phone` and `email` fields in the `users` table using the form data. It targets the user record with the provided `ID`.


</dd>

4. Configure the Button's [**onClick**](/reference/widgets/button#onclick) event to execute the update query.

This setup submits the Form data to the datasource.


## Refresh Table data after updates

When you connect a table to a datasource to display data and then update that datasource, the table does not automatically reflect the changes. You need to manually refresh the table using events or JS code to see the updated data.

<dd>

*Example:*  suppose you have a table that receives its data from a query called `getData`, and you have a JSON form with a **onSubmit** button that updates user input via the query `updateData`.

Configure the **onSubmit** event to perform data updates and set the **onSuccess** callback to execute the `getData` query. When JS is enabled, you can configure as follows:

```js
 {{updateData.run().then(() => {
   getData.run();
 });}}
```


The above code executes the `updateData` query and, once completed, triggers the execution of the `getData` query. This process updates and fetches data to show real-time changes.

</dd>




