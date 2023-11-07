# Update data in Modal

This page shows how to update data within a Modal using the Form widget.

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/eFTz0xQWOYjW79EcjU5S?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>

## Prerequisites

A [Table widget](http://localhost:3000/reference/widgets/table) connected to a query that holds the data you want to edit and update.


## Configure form

Follow these steps to set up a Form widget:

1. To open a Modal based on row selection, you can either use a button as a new column or configure the **onRowSelected** event in the Table.

2. Set up the event to show the Modal, and select your desired Modal.


<figure>
  <img src="/img/showmodal-table1.gif" style= {{width:"560px", height:"auto"}} alt="Setup Server-side Searching on Table"/>
   <figcaption align = "center"><i></i></figcaption>
</figure>




:::note
Modal widget remains hidden on the canvas and becomes visible only when an event is triggered. You can access and edit the Modal widget from the entity explorer.
:::


3. Drag a [Form](/reference/widgets/form) widget within the Modal.


4. To allow users to submit their information, drag the relevant widgets into the Form widget (example: Text, Inputs, Select) and configure their properties.


5. To display data from the selected row in the table, bind the data to the widget's **Default value** property using mustache syntax `{{}}`:

<dd>

```js
{{Table1.selectedRow.name}}
// 'name' refers to the column name
```

For example, if the date is in `ISO` format and you want to display it in `DD/MM/YYYY` format, then you can achieve this by binding the Table data to the **Default date** and changing the display format through the **Date format** property.

</dd>

Check this guide to learn how to validate the form based on specific criteria.


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
  dob = {{ Form1.data.DatePicker1 }}, -- To get formatted Date use: {{DatePicker1.formattedDate}}
  gender = {{ Form1.data.SelectGender }},
  image = {{ Form1.data.InputImageURL }} -- To add image from Filepicker widget use: {FilePicker1.files[0].data}}
WHERE id = {{Table1.selectedRow.id}};
```

The above query updates the various fields in the `users` table using the form data. It targets the user record with the provided ID.


For more detailed information on updating data in different datasources, please refer to [Update data Guide](/connect-data/how-to-guides/insert-and-update-data-in-sql).

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
