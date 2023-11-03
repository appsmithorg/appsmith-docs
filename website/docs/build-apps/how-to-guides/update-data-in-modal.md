# Update data in Modal

This page shows how to update data within a Modal using the Form widget.


## Prerequisites

A [Table widget](http://localhost:3000/reference/widgets/table) connected to a query that holds the data you want to edit and update.


## Configure form

Follow these steps to set up a Form widget:

1. Drag a [Modal](/reference/widgets/modal) widget and place a [Form](/reference/widgets/form) widget inside it.

:::note
Modal widget remains hidden on the canvas and becomes visible only when an event is triggered. You can access and edit the Modal widget from the entity explorer.
:::


2. To allow users to submit their information, drag the relevant widgets into the Form widget (example: Text, Inputs, Select) and configure their properties.


3. To display data from the selected row in the table, bind the widget using mustache syntax `{{}}`:

<dd>

```js
{{Table1.selectedRow.name}}
```

For example, if you receive a date in the `DD/MM/YY` format from the database and want to display it in a different format using the Datepicker, you can achieve this by binding the Table data to the **Default date** and adjusting the display format through the **Date format** property.

</dd>


## Update Form

Follow these steps to configure the query and update the data:

1. Create a query to update data using the reference properties of the Form widget.

<dd>

*Example: *if you have fields in a form widget and need to retrieve the ID from the selected row in a table, you can do so using the following query:

```sql
UPDATE public.users
SET 
  phone = {{Form1.data.PhoneInput1}},
  email = {{Form1.data.Input1}}
WHERE id = {{Table1.selectedRow.id}};
```

The above query updates the `phone` and `email` fields in the `users` table using the form data. It targets the user record with the provided ID.

//Callout-1

For more detailed information on updating data in SQL, please refer to [Insert and Update data in SQL](/connect-data/how-to-guides/insert-and-update-data-in-sql).

//Callout-2

Check these guides to learn more about updating data in various datasources.

- [SQL](/connect-data/how-to-guides/insert-and-update-data-in-sql)
- [Google Sheets](/connect-data/how-to-guides/insert-and-update-data-in-sql)
- MongoDB

</dd>

2. Set the Submit Button's **onClick** event to execute the update query, and the **onSuccess** callback to close the Modal and trigger the fetch query that refreshes the data with the updated information.

<dd>

You can enable JS for the **onClick** event and execute multiple functions as shown below:


```js
{{ 
    updateUsers.run()
      .then(() => fetchUsers.run()
                  .then(() => { 
                      showAlert('User Updated'); 
                      closeModal('Modal1'); 
                    })
        .catch(() => showAlert("Fetch Users Failed"))
      ).catch(() => showAlert("Update User Failed", "error")) 
}}
```

</dd>

3. Enable the **Reset form on success** to clear form inputs after submission.



