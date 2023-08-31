---
description: This page shows you how to display a master-detail form and update table data using a JSON form and Form widget.
---
# Update Table Data Using Form

This page shows you how to display a master-detail form and update table data using JSON form and Form widget.

## Prerequisites

* A [Table](/reference/widgets/table) widget connected to a query.
* A [JSON Form](/reference/widgets/json-form) or [Form](/reference/widgets/form) widget for updating table data.


## Submit form data

This section describes how to update a Table using a Form and a JSON form widget.



### Using Form

Follow these steps to set up a Form widget and configure the query:

1. To display a master-detail form when a user selects a row in a Table widget, drag the relevant widgets into the Form widget (example; Text, Inputs, Select).

2. Configure each widget using the [selectedRow](/reference/widgets/table#selectedrow-object) reference property.

<dd>

*Example*: suppose you have a `users` table and you want to display the email field when the user selects a row. Add the following code to the Input widget's **Default value** property:

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

4. Set the Button's [**onClick**](/reference/widgets/button#onclick) event to execute the update query, and the **onSuccess** callback to trigger the fetch query that refreshes the table data with the updated information.

 <figure>
  <img src="/img/refresh-after-update.gif" style= {{width:"810px", height:"auto"}} alt="Submit form data using Form"/>
  <figcaption align = "center"><i>Submit form data using Form</i></figcaption>
</figure>



### Using JSON Form

Follow these steps to set up a JSON Form and configure the query:


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

3. Set the [**onSubmit**](/reference/widgets/json-form#events) event to execute the update query, and the **onSuccess** callback to trigger the fetch query that refreshes the table data with the updated information.

 <figure>
  <img src="/img/json-update.png" style= {{width:"700px", height:"auto"}} alt="Submit form data using JSON Form"/>
  <figcaption align = "center"><i>Submit form data using JSON Form</i></figcaption>
</figure>

