---
description: This page shows you how to display a master-detail form and update table data using a JSON form and Form widget.
---
# Update Form data in Modal

This page shows how to update data within a Modal using the Form widget.

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/eFTz0xQWOYjW79EcjU5S?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>

## Prerequisites

A [Table widget](/reference/widgets/table#table-data-arrayobject) connected to a query that holds the data you want to edit and update.


## Configure Form and Modal

Follow these steps to set up a Form widget inside a Modal:

1. To open a Modal based on Table row selection, select **Add a new column** and then click on the gear icon ⚙️ from the column's properties pane.

2. Configure the column type as a Button and set the **onClick** event to show the Modal. If you want the Edit column to be visible at all times, you can use the **Column freeze** property to freeze the column.


<figure>
  <img src="/img/show-modal-2.gif" style= {{width:"560px", height:"auto"}} alt="Setup Server-side Searching on Table"/>
   <figcaption align = "center"><i></i></figcaption>
</figure>




:::note
Modal widget remains hidden on the canvas and becomes visible only when an event is triggered. You can access and edit the Modal widget from the entity explorer.
:::


3. Drag a [Form](/reference/widgets/form) widget within the Modal, and add the relevant widgets into the Form widget (example: Text, Inputs, Select) and configure their properties.


4. To display data from the triggered row in the table, connect the data to the widget's **Default value** property using mustache syntax `{{}}`:

<dd>

```js
{{Table1.triggeredRow.dob}}
// 'dob' refers to the column name
```

For example, when using Datepicker if the date is in `ISO` format and you want to display it in `DD/MM/YYYY` format, then you can achieve this by binding the Table data to the **Default date** and changing the display format through the **Date format** property.

</dd>

## Submit Form data

Follow these steps to configure form validation and update form data:


1. To validate Form fields based on specific criteria, you can use various validation properties such as Regex, Valid, and Required, available for different widgets. You can find validation properties under the **Validations** group in [widget references](/reference/widgets).

<dd>

*Example:* To validate whether an entered email is in the correct format, use the following regular expression code inside the [**Regex**](/reference/widgets/input#regex-string) property of an Input widget:

```js
//regex
^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$
```

:::note
The submit button remains disabled until all widgets meet the defined validation criteria.
:::



See [validation examples](/reference/widgets/input#regex-string) for Input widget.

</dd>


2. Create a query to update data using the reference properties of the Form widget.

<dd>

*Example: *if you have fields in a form widget and need to retrieve the ID from the selected row in a table, you can do so using the following query:

```sql
UPDATE public.users
SET 
  phone = {{Form1.data.PhoneInput1}},
  email = {{Form1.data.Input1}}
  dob = {{DatePicker1.formattedDate}}, -- To get formatted Date
  gender = {{ Form1.data.SelectGender }},
  image = {{ Form1.data.InputImageURL }} -- To add image from Filepicker widget use: {FilePicker1.files[0].data}}
WHERE id = {{Table1.selectedRow.id}};
```

The above query updates the various fields in the `users` table using the form data. It targets the user record with the provided ID.


For more detailed information on updating data in different datasources, please refer to [Update data guide](/connect-data/how-to-guides/insert-and-update-data-in-sql).


</dd>


3. Set the Submit Button's **onClick** event to execute the update query.


##  Refresh Table data and close Modal

When data is updated in a datasource, the Table widget does not automatically reflect the changes. You need to manually refresh the Table using events or JS code to see the updated data.

1. To refresh Table data, set the Button's **onClick** event to execute the `updateData` query,  and the **onSuccess** callback to trigger the fetch query.
 
2. To close the Modal in same event, set **onSuccess** event of the fetch query to close the Modal and display a success alert.


<dd>


<figure>
  <img src="/img/trigger-multi-query-1.gif" style= {{width:"560px", height:"auto"}} alt="Setup Server-side Searching on Table"/>
   <figcaption align = "center"><i></i></figcaption>
</figure>




</dd>

## See also

* [Sample app](https://app.appsmith.com/applications/61e11a42eb0501052b9fab3e/pages/61efe524be698f35db551f91) - Row Selection Action
* [Sample app](https://app.appsmith.com/applications/623cca594d9aea1b062b33c6/pages/623cca594d9aea1b062b33cd) - Show Data in Table
* [Sample app](https://app.appsmith.com/applications/61e11a42eb0501052b9fab3e/pages/6241f4e8c99df2369931a9c3) - Reset Table


