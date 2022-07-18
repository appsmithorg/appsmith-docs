# JSON Form

The JSON form widget is useful for quickly generating forms from JSON fields. You can bind this form to queries or APIs to update data instantly.

JSON form abstracts away all the complexity in building the first draft of the forms. Your time is better spent building amazing apps than building long forms for CRUD workflows.

## Add to Canvas

To add a JSON form widget to your canvas, drag a JSON form widget from a widget pane available on the left navigation bar.

Navigate to PAGES —> Select Widget Tab —> Write “**JSON form**".

Now that you have a JSON Form widget added to the canvas, you can move it anywhere on the canvas by simply dragging the widget.

## Properties

Properties allow you to edit the JSON Form widget, connect it with other widgets and customize the user actions.

### Widget Properties

These properties allow you to edit the JSON Form. All these properties are present in the property pane of the widget. The following table lists all the widget properties.

| **Widget Property**   | **Description**                                                                                                                                                                            |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Title                 | It lets you set the form's title, which is useful to explain the form's purpose.                                                                                                           |
| Source Data           | JSON data to generate the default form layout. This can be bound to any query or variable containing JSON data.                                                                            |
| Auto Generate form    | Allows the form layout to change automatically when the fields or the field types inside the source data are changed. It does not impact if the values for these fields are changed.       |
| Generate Form         | The property is only enabled when you select to generate the form automatically by enabling **Auto Generate Form**. It regenerates the form when the Source Data is updated.               |
| Field Configuration   | List of all the generated form fields that can be further customized as needed.                                                                                                            |
| Add New Field         | Allows you to add a new field in the auto-generated form. Fields added this way are known as custom fields You can delete these fields later.                                              |
| Disable Invalid Forms | Disables the submit button for the form fields that don’t meet the validation criteria.                                                                                                    |
| Animate Loading       | Control’s widget’s loading animation on the page. When turned off, the widget will load without any skeletal animation. This can be controlled with JS until all the widgets are rendered. |
| Fixed Footer          | Makes the footer sticky for long forms, helping the users see the submit and reset buttons all the time while filling long forms.                                                          |
| Visible               | It controls the widget's visibility on the page. When turned off, the widget will not be visible when the app is published.                                                                |
| Scroll Contents       | It makes the contents of the form scrollable.                                                                                                                                              |
| Show Reset            | When enabled, it shows the reset button in the form, allowing users to reset the form at any given point.                                                                                  |

Let's understand the widget properties in detail.

#### Source Data

The source data field allows you to add JSON data for your form. Once you drag a new JSON form widget, you will see a default form rendered with some details. You can update the source data field to infer data to generate the form.

* If your source data is coming from a table’s selected row, then you can simply bind using the following snippet:

```
{{<tableName>.selectedRow}}
```

{% embed url="https://youtu.be/-29FuF7YRkg" %}

* If your source data is coming from an API or a DB query, you can bind it to source data using:

```
{{<queryName>.data}}
```

{% hint style="info" %}
If your data is an array type, you can mention the index value to get the source data as an object.
{% endhint %}

{% embed url="https://youtu.be/mQBdt38dWGg" %}

* You can also provide static data directly in the form or use a JS object.

Post binding, the form is automatically generated and ready to use. We optimize the generated form to use the closest possible input field for the data type in the source data.

#### Auto-Generate Form

When you enable auto-generate form, the form fields are generated according to the source data (fields are generated according to the key-value pairs in the source data). Whenever there is a change in the source data, the form fields get updated automatically.

{% embed url="https://youtu.be/8T_nh5VI4-E" %}

When the auto-generate form is disabled, any change in the source data will not affect the Form field. You’ll have to manually generate the form fields on demand by clicking on “<mark style="color:orange;">**Generate form**</mark>.” It prevents the removal of the fields that are essential in the form.

{% embed url="https://youtu.be/3r8GfXKM6y0" %}

#### Field Configuration

Field configuration shows all the fields generated automatically in the forms. You can edit the fields to tweak properties like the field type and default value and bind specific actions by using editable properties.

Most fields use the underlying data type-specific widget’s properties to allow a full level of customization just like the widget would. For example, if the input type is text input, the editable properties are similar to the [input widget](input.md) in Appsmith.

{% embed url="https://youtu.be/DULrXY8WXqo" %}

#### Array Field

Arrays are repeated sets of information(lists) that the user can add, update or remove, like the number of jobs a user has held. With array fields, the form supports adding, removing, and updating a group of fields together. It’s very useful if the form user has multiple sets of the same data they need to add or update. You can check a sample app [here](https://app.appsmith.com/untitled-application-20/page1-6245477eae85b361029c1894).

#### Object Field

Objects are groups of fields clubbed together for easier management, like the details of a job a user has held. The form supports grouping fields together with object fields for a visual distinction. This can flow directly from the source data if its objects are used in it.

Object fields can also be created within the form while customizing by adding a new field on the field configuration at the source level or within another array or object field.

#### Add New Field

You can also add new fields from the **Add new field** button in the Field configuration. These are called **Custom fields**. Once you add the field, you can customize it similar to any existing form field. For example, its “property name” can be updated within the field configuration for easier management of the form data. You can delete the custom fields later using the field configuration section in the widget.

{% embed url="https://youtu.be/GmgFNppZhOM" %}

#### Disable Invalid Forms

It disables the **Submit** button for the form if the form fields don’t meet the validation criteria, like, as a form field left empty that must be filled. For example, in the default JSON form, if we make the name text widget as required and turn on the `Disable Invalid form`, the Submit button will stay disabled till a name is entered in the text field.

You can also add JavaScript code to control the functionality of `Disable Invalid form` by clicking on the JS button.

#### Visible

`Visible` controls the widget’s visibility on the app’s page. The widget will not be visible on the published app if you turn off this property. You can also write a JS code to link Visible’s functionality to a user action. Click on `JS` next to the Visible to write JavaScript code.

For example, let’s drag a checkbox widget `checkbox1` onto the canvas and bind it to the `Visible` property. To enable the `Visible` when the user checks the checkbox, add the following JavaScript code:

```
{{Checkbox1.isChecked}}
```

{% embed url="https://youtu.be/VgO6S4I7XSQ" %}

When you tick the checkbox, it will enable the Visible property, and the JSON Form will be visible in the app.

### Binding Properties

These properties allow you to bind your JSON form widget with any other widget in queries or JS objects. The following table lists all the binding properties.

| Property   | Description                                                                                                               | Code Snippet                   |
| ---------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| formData   | It stores the values provided by a user in JSON Format. You can pass the JSON to queries or other widgets.                | `{{<widget_name>.formData}}`   |
| fieldState | JSON of the state of all the fields in the form. State includes whether a field is disabled, required, visible, or valid. | `{{<widget_name>.fieldState}}` |
| sourceData | JSON of the source data which is bound to the form.                                                                       | `{{<widget_name>.sourceData}}` |

#### formData

`formData` fetches the data entered by the user in the form of JSON format. You can pass this data to queries, or other widgets.

For example, let's take a JSON Form widget `JSONform1` and bind the data in the form fields to a text widget. Drag a Text widget onto the canvas and add the following snippet to the Text property of the Text widget:

```
{{JSONform1.formData}}
```

{% embed url="https://youtu.be/e49oc0s8elw" %}

#### fieldState

`fieldState` captures the state of the fields present in the form in JSON format. The states include the properties of the fields (widgets) like disabled, required, visible, etc.

{% embed url="https://youtu.be/ml7gEgkqq8w" %}

#### sourceData

`sourceData` fetches the data coming from the source data that is bound to the form in a JSON format. The source data may have static JSON data or data coming in from a query or an API.

{% embed url="https://youtu.be/xEBuu5rUpqE" %}

### Events

| **Event name** | **Description**                                                                                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| onSubmit       | Sets the action to run when a user clicks the submit button in the form. See a list of [supported actions](../appsmith-framework/widget-actions/). |

### Form Styles

| **Style**        | **Description**                                       |
| ---------------- | ----------------------------------------------------- |
| Background color | Allows you to set the background color of the widget. |
| Border radius    | Allows you to define curved corners.                  |
| Border width     | Allows you to define the thickness of the border.     |
| Box shadow       | Allows you choose from the available shadow styles.   |
| Shadow color     | Allows you to set the color of the shadow.            |

{% embed url="https://youtu.be/MW_8sn2lDVQ" %}

### Submit and Reset button Styles

| **Property**   | **Description**                                                                                                                                                                                                    |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Button color   | You can change the color of the button here by entering the hex value of the color of your choice                                                                                                                  |
| Button variant | Sets the type of the button based on its significance - Primary, secondary, or tertiary. You can write JavaScript code to change the button variant conditionally.                                                 |
| Border radius  | It gives an option to make the button's corners either curved or edged.                                                                                                                                            |
| Box shadow     | It casts a drop shadow around the frame of the widget.                                                                                                                                                             |
| Shadow color   | It lets you choose the color of the casted shadow.                                                                                                                                                                 |
| Icon           | It lets you add icons to your button to provide extra information about the functionality of that button.                                                                                                          |
| Placement      | This option lets you place the elements inside the button, like the label and icon. By default, there are three placement options - Start, between, and center. You can create custom placements using JavaScript. |

{% embed url="https://youtu.be/U0vko4TrFmo" %}
