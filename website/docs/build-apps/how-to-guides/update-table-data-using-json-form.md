---
description: This page shows you how to display a master-detail form and update table data using a JSON form.
---
# Update Table Data Using JSON Form

This page shows you how to display a master-detail form and update table data using a JSON form.

 <figure>
  <img src="/img/jsonguide.gif" style= {{width:"700px", height:"auto"}} alt="Update Table Data using JSON Form"/>
  <figcaption align = "center"><i>Update Table Data using JSON Form</i></figcaption>
</figure>



## Prerequisites

* A [Table](/reference/widgets/table) widget connected to a query.
* A [JSON Form](/reference/widgets/json-form) widget for updating table data.


## Submit form data

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

3. Configure the [**onSubmit**](/reference/widgets/json-form#events) event to execute the update query. 

This setup submits the JSON Form data to the datasource.

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


## Troubleshooting

Here are some common errors that you may see when using the JSON Form widget:

* [Source data exceeds 50 fields](/help-and-support/troubleshooting-guide/widget-errors#source-data-exceeds-50-fields)

If you face issues, contact the support team using the chat widget at the bottom right of this page.


