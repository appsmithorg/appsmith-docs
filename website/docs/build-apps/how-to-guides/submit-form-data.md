---
description: This page shows you how to display a master-detail form and update table data using a JSON form and Form widget.
---
# Submit Form Data

This page shows you how to display and submit data using [JSON Form](/reference/widgets/json-form) and [Form](/reference/widgets/form) widget.


## Using Form

Follow these steps to set up a Form widget and configure the query:

1. To allow users to submit their information, drag the relevant widgets into the Form widget (example: Text, Inputs, Select) and configure their properties.

<dd>

*Example*: suppose you have a `users` database and you want to display specific data based on user selections. Add the following code to the Input widget's **Default value** property:

```js
//To display the email field when the user selects a row in Table widget, use:
{{Table1.selectedRow.email}}

//To display the email field when the user selects a item in List widget, use:
{{List1.selectedItem.email}}
```

The above code displays the `email` based on user selections. Similarly, you can populate other widgets with data.


</dd>

2. Create a query to either insert new data or update existing data using the [reference properties](/reference/widgets/form#reference-properties) of the Form widget.

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

3. Set the Button's [**onClick**](/reference/widgets/button#onclick) event to execute the update query, and the **onSuccess** callback to trigger the fetch query that refreshes the data with the updated information.

 <figure>
  <img src="/img/refresh-after-update.gif" style= {{width:"810px", height:"auto"}} alt="Submit form data using Form"/>
  <figcaption align = "center"><i>Submit form data using Form</i></figcaption>
</figure>



## Using JSON Form

Follow these steps to set up a JSON Form and configure the query:


1. To display data based on a user's selection, you can add the following code in the **Source Data** property of the JSON Form:

<dd>

*Example*: 

```js
//To display data when the user selects a row in Table widget, use:
{{Table1.selectedRow}}

//To display data when the user selects a item in List widget, use:
{{List1.selectedItem}}
```

Similarly, you can populate other widgets with data. Based on the data, the JSON Form automatically identifies the appropriate field type for each value. For instance, it sets `age` to a `Number Input`. In addition, you can add or customize field types using the [**Field Configuration**](/reference/widgets/json-form#field-configuration-list) property.



</dd>

2. Create a query to either insert new data or update existing data using the [formData](/reference/widgets/json-form#formdata-object) reference property.


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

3. Set the [**onSubmit**](/reference/widgets/json-form#events) event to execute the update query, and the **onSuccess** callback to trigger the fetch query that refreshes the data with the updated information.

 <figure>
  <img src="/img/json-update.png" style= {{width:"700px", height:"auto"}} alt="Submit form data using JSON Form"/>
  <figcaption align = "center"><i>Submit form data using JSON Form</i></figcaption>
</figure>

