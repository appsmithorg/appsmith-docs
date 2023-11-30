---
description: This page shows you how to display a master-detail form and update table data using a JSON form and Form widget.
---
# Update data

This page shows how to update table data using the Form and Modal widgets.


## Prerequisites

A [Table widget](/reference/widgets/table#table-data-arrayobject) connected to a fetch query. To connect data to a table, see the [Bind Data to Widgets guide](/core-concepts/building-ui/dynamic-ui) guide.



## Configure Form and Modal


This section guides you on how to open a Modal by clicking a button in a Table and configure a Form inside the Modal.

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/aeKJ95XYVW3u3Bxs35vy?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "92%", height: "92%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>

1. To open a Modal based on Table row selection, select **Add a new column** and then click on the gear icon ⚙️ from the column's properties pane.

2. Set the [**Column type**](/reference/widgets/table/column-settings#properties) as a Button and set the **onClick** event to show the Modal. If you want the Edit column to be visible at all times, you can use the **Column freeze** property to freeze the column.


:::info
Modal widget remains hidden on the canvas and becomes visible only when an event is triggered. 
:::

3. You can access and edit the Modal widget from the entity explorer.

4. Drag a [Form](/reference/widgets/form) or a [JSON Form](/reference/widgets/json-form) widget within the Modal, and add the required widgets. If you prefer a custom UI, use the Form widget; for a basic form setup, use the JSON Form. Additionally, you can configure the appearance of the form using the styles properties.

5. To display data from the triggered row in the table, connect the data to the widget's **Default value** property using mustache syntax `{{}}`:

<dd>

*Example:* To display the user's name, add the following code in the **Default value** property of the Input widget:

```js
{{Table1.triggeredRow.name}}
// 'name' refers to the column name
```

Learn more about the [triggered row](/reference/widgets/table#triggeredrow-object) property.


</dd>

## Submit Form data

This section shows you how to set up Form validation and update Form data.

1. To validate user inputs, use properties like Regex, Valid, and Required. The submit button remains disabled until all widgets meet the defined validation criteria. You can find these properties under the **Validations** group in the [Widget reference](/reference/widgets). 

<dd>


See [validation examples](/reference/widgets/input#regex-string) for the Input widget.

</dd>


2. Create an update query using the `data` [reference property](/reference/widgets/form#data-object) of the Form widget and [triggered row](/reference/widgets/table#triggeredrow-object) property of the Table widget.

<dd>

*Example:* If you have a `user` table and want to update a record based on the user's ID, you can use the following query:

```sql
-- For JSON Form: {{JSONForm1.formData.name}} 

UPDATE public.users
SET 
  phone = {{Form1.data.PhoneInput1}},
  email = {{Form1.data.Input1}}
  dob = {{DatePicker1.formattedDate}}, -- To get formatted Date
  gender = {{ Form1.data.SelectGender }},
  image = {{ Form1.data.InputImageURL }} -- To add image from Filepicker widget use: {FilePicker1.files[0].data}}
WHERE id = {{Table1.triggeredRow.id}};
```

You can refer to the [datasource reference](/connect-data/reference) for specific instructions on setting up update query for your selected datasource.


</dd>


3. Set the Submit Button's **onClick** event to execute the update query.


##  Refresh Table and close Modal

When data is updated in a datasource, the Table widget does not automatically reflect the changes. To update the Table data, follow these steps.

1. Set the Submit Button's **onSuccess** callback to trigger the fetch query, which retrieves the updated data and displays it in the Table.
 
2. Create a new **onSuccess** callback by clicking the **+** icon and set it to close the Modal.

3. Create a new **onSuccess** callback to show the success alert.




<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/aP6NLTwiJTsGCmhDhnQM?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "92%", height: "92%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>







