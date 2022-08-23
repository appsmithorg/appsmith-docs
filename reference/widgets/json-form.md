# JSON Form

The JSON form widget is useful for quickly generating forms from JSON fields. You can bind this form to queries or APIs to update data instantly.

JSON form abstracts away all the complexity in building the first draft of the forms. Your time is better spent building amazing apps than building long forms for CRUD workflows.

## Add to Canvas

To add a JSON form widget to your canvas, drag a JSON form widget from a widget pane available on the left navigation bar.

Navigate to PAGES —> Select Widget Tab —> Write “**JSON form**".

Now that you have a JSON Form widget added to the canvas, you can move it anywhere on the canvas by simply dragging the widget.

## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

### Widget Properties

These properties allow you to edit the JSON Form widget. All of these properties are present in the property pane of the widget. The following table lists all the widget properties.

| Property                  | Description                                                                                                                                                                                                                  |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Title**                 | Sets the text that appears at the top of the form as a title.                                                                                                                                                                |
| **Source Data**           | Takes a JSON _object_ whose data is used to generate the form layout.                                                                                                                                                        |
| **Auto Generate form**    | When enabled, the form layout will update automatically when the field types inside the **Source Data** are changed.                                                                                                         |
| **Generate Form**         | When **Auto Generate Form** is disabled, this button manually regenerates the form layout according to the field types in the **Source Data** object.                                                                        |
| **Field Configuration**   | This is a list of the generated form fields. Click the gear icon to further customize any of these fields, or the eye icon to hide that field. They can also be re-ordered by dragging, and renamed by clicking their names. |
| **Add New Field**         | Adds a new field in the form. Fields added this way are known as custom fields. You can delete these fields later.                                                                                                           |
| **Disable Invalid Forms** | Disables the submit button when one or more of the form fields are considered invalid.                                                                                                                                       |
| **Animate Loading**       | When turned off, the widget will load without any skeletal animation. You can use a toggle switch to turn it on/off. You can also turn it off/on using javascript by enabling the JS label next to it.                       |
| **Fixed Footer**          | Makes the footer sticky for long forms, so the Submit and Reset buttons are always visible on long forms.                                                                                                                    |
| **Visible**               | Controls widget's visibility on the page. When turned off: The widget will not be visible when the app is published. It appears translucent when in Edit mode.                                                               |
| **Scroll Contents**       | Makes the contents of the form scrollable.                                                                                                                                                                                   |
| **Show Reset**            | When enabled, shows a reset button in the form allowing users to reset the form at any time.                                                                                                                                 |
| **Submit Button Label**   | Sets the text for the label on the Submit button.                                                                                                                                                                            |
| **Reset Button Label**    | Sets the text for the label on the Reset button.                                                                                                                                                                             |

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

> We recommend a few suggestions that will help you create user-friendly forms using JSON Form:
>
> * You can group the form manually into different sections. For such categorization, you can use a [tab widget](tabs.md). With a tab widget, you can split the form into multiple subforms and share it with your users.
> * You can logically divide the items like arrays but cannot group the form manually. For such categorization, you can use the [list widget](list.md) to show all the arrays, and the details within an array can be shown in a JSON form.

{% hint style="info" %}
Check out our sample application demonstrating [how you can use the list widget with JSON form](https://app.appsmith.com/app/json-form/multiple-json-forms-62a9803984b91337251a6ebb).
{% endhint %}

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

These properties allow you to bind your JSON form widget with any other widget in queries or JS objects. The following table lists all the binding properties.\\

| Binding Property | Description                                                                                                                                                                                                                                                                                                              | Code Snippet                   |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------ |
| **fieldState**   | <p>A JSON <em>object</em> describing the state of each field in the form. State data includes: <strong>isDisabled</strong>, <strong>isRequired</strong>, <strong>isVisible</strong>, and <strong>isValid</strong> <em>(bool).</em><br><br>e.g. <code>{ "name": {</code> "<code>isVisible": true, ... }, ... }</code></p> | `{{<widget_name>.fieldState}}` |
| **formData**     | Contains a JSON _object_ with the field names and their current values in the form.                                                                                                                                                                                                                                      | `{{<widget_name>.formData}}`   |
| **isValid**      | Reflects whether the widget's inputs are considered **Valid** _(bool)_.                                                                                                                                                                                                                                                  | `{{<widget_name>.isValid}}`    |
| **sourceData**   | Conatins a JSON _object_ of the original source data which was bound to the form.                                                                                                                                                                                                                                        | `{{<widget_name>.sourceData}}` |

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

| **Event name** | **Description**                                                                                                                                                                                                                                               |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **onSubmit**   | Sets an an action to take place when the user clicks the Submit button on this form. Can be set from the GUI list of common actions ([examples here](../appsmith-framework/widget-actions/)), or you can define a custom JavaScript function to call instead. |

### Form Styles

Style properties allow you to change the look and feel of the widget.

| Form Style           | Description                                                                                                                                                                      |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Background Color** | Sets the background color of the widget. Accepts CSS [`color` ](https://developer.mozilla.org/en-US/docs/Web/CSS/color)values.                                                   |
| **Border Radius**    | Rounds the corners of the widget's outer edge. With JS enabled, this accepts valid CSS [`border-radius`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) values. |
| **Border Width**     | Sets the width of the widget's border. Accepts _number_ values only, in px.                                                                                                      |
| **Box Shadow**       | Casts a drop shadow from the frame of the widget. With JS enabled, this accepts valid CSS [`box-shadow`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) values.    |

{% embed url="https://youtu.be/MW_8sn2lDVQ" %}

### Submit and Reset Button Styles

| Button Style       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Button Color**   | Sets the color of the widget's button. Accepts valid CSS [`color` ](https://developer.mozilla.org/en-US/docs/Web/CSS/color)values.                                                                                                                                                                                                                                                                                                          |
| **Button Variant** | Sets the the button style type to represent its significance - Primary, Secondary, or Tertiary. You can use JavaScript to set this field by writing code that evaluates to the _string_ "PRIMARY", "SECONDARY", or "TERTIARY".                                                                                                                                                                                                              |
| **Border Radius**  | Rounds the corners of the widget's outer edge. With JS enabled, this accepts valid CSS [`border-radius`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) values.                                                                                                                                                                                                                                                            |
| **Box Shadow**     | Casts a drop shadow from the frame of the widget. With JS enabled, this accepts valid CSS [`box-shadow`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) values.                                                                                                                                                                                                                                                               |
| **Icon**           | Sets an icon to be included on the button.                                                                                                                                                                                                                                                                                                                                                                                                  |
| **Placement**      | Defines where the button's icon and label appear within the space of the button. **Start:** The icon and label appear at the left-most side of the button; **Center:** The icon and label appear in the center of the button space; **Between:** The icon and label appear at opposite ends of the button's space. You can use JavaScript to set this field by writing code that evaluates to the _string_ "START", "CENTER", or "BETWEEN". |
| **Icon Alignment** | Sets whether the icon appears on the left or right of the button's label text.                                                                                                                                                                                                                                                                                                                                                              |

{% embed url="https://youtu.be/U0vko4TrFmo" %}

{% hint style="info" %}
Are you having trouble? Check out the [troubleshooting guide](../../help-and-support/troubleshooting-guide/widget-errors.md#json-form-errors) or reach out to us on[ Discord](https://discord.com/invite/rBTTVJp) to get support or ask questions on our [community forum](https://community.appsmith.com/).
{% endhint %}
