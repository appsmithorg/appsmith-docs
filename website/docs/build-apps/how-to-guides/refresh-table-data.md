---
description: This page shows you how to display a master-detail form and update table data using a JSON form.
---
# Update Table Data using JSON Form

This page shows you how to display a master-detail form and update table data using a JSON form.

 <figure>
  <img src="/img/jsonguide.gif" style= {{width:"700px", height:"auto"}} alt="Update Table Data using JSON Form"/>
  <figcaption align = "center"><i>Update Table Data using JSON Form</i></figcaption>
</figure>



## Prerequisites

* A [Table](/reference/widgets/table) widget connected to a query.
* A [JSON Form](/reference/widgets/json-form) widget for updating table data.


## Submit form data

Follow these steps to setup JSON Form and configure the query:

1. To display a master-detail form when a user selects a row in a Table widget, you can add the below code in the **Source Data** property of the JSON Form:

<dd>

*Example*: 

```JS
{{Table1.selectedRow}}
```

Based on the data, the JSON Form automatically identifies the appropriate field type for each value. For example, if the data contains the field `age`, the form sets the field type to a `Number Input`. Additionally, you have the flexibility to add or customize field types using the [**Field Configuration**](/reference/widgets/json-form#field-configuration-list) property.

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

This query updates the `phone` and `email` fields in the `users` table based on the data provided by a JSON Form, targeting the record with the specified ID.


:::note
Prepared statements are turned on by default in your queries to help prevent SQL injection attacks. For more details, see [Prepared Statements](/connect-data/concepts/how-to-use-prepared-statements).
:::

</dd>

3. Configure the [**onSubmit**](/reference/widgets/json-form#events) event to execute the update query. When JS is enabled, you can configure as follows:

<dd>

*Example*:

```js
{{updateData.run().then(() => {});}}
```

</dd>

## Refresh Table data after updates

When you change the datasource that feeds your table, the table won't show those changes automatically. To fix this, you can use events or write code to run the query again that fills the table with new data when you send new information to the datasource.

<dd>

*Example:*  suppose you have a table that receives its data from a query called `getData`, and you have a JSON form with a **onSubmit** button that updates user input via the query `updateData`.

Configure the **onSubmit** event to perform data updates and set the **onSuccess** callback to execute the `getData` query. When JS is enabled, you can configure as follows:

```js
 {{updateData.run().then(() => {
   getData.run();
 });}}
```

Upon the successful execution of the `updateData` query, the table refreshes automatically through the triggering of the `getData` query.


</dd>

