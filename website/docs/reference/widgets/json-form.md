# JSON Form


The JSON form widget saves time and effort by automatically generating forms from JSON data, eliminating the need for manual form creation.


<VideoEmbed host="youtube" videoId="Zk6df9mOtQA" title="Configure JSON Form Widget" caption="Configure JSON Form Widget"/>


## Generate JSON Form
To populate the JSON Form widget with data, you can utilize the **Source Data** property, which requires the data to be structured in a JSON format:

```json
{
  "name": "John",
  "date_of_birth": "20/02/1990",
  "age": 29, 
  "employee_id": 1001
}
```
JSON Form automatically detects the appropriate field type for each value. For instance, if the JSON data contains an `age` field, it sets the field type to a *Number Input*. Additionally, you can add/customize field types using the **Field Configuration** property.



You can display dynamic data in a JSON Form widget by binding the response from a query or a JS function to the **Source Data** property. This allows the form to update dynamically as the data changes in the database or API.

---

**Example**: suppose you want a master-detail form that shows details of each record in a form when you select a row in a table. Suppose you have fetched data from the mock database using a SELECT query `fetchUserData`. You can display the fetched data by binding the query response to the **Table Data** property of the Table widget `tblUserData`, as shown below:

```js
{{fetchUserData.data}}
```

To automatically generate the fields in the JSON Form when a table row is selected, add the below code in the **Source Data** property:

```js
{{tbluserData.selectedRow}}
```

You can click on an individual row in the Table and update data in the form fields.


#### Auto generate form

You can enable the **Auto Generate Form** property to have the form fields regenerate automatically when the source data changes, for example, when keys in the JSON data change or if a data type changes, for example, from string to a number. 

However, it's important to note that enabling this feature overrides any custom configurations that you are providing through data transformations using JavaScript.

#### Field configuration

In the **Field Configuration** section of the JSON Form's property pane, you can add fields or update each field's settings by clicking the cog icon ⚙︎ next to it. You can customize each form field using properties, for instance, updating the field type, setting validation and style properties, and triggering actions using event listeners. You can select any one of the following options from the **Field Type** property to update the widget type for that field on the JSON Form:

* Array
* Checkbox
* Currency Input
* Datepicker
* Email Input
* Multiselect
* Multi-line Text Input
* Number Input
* Object
* Password Input
* Phone Number Input
* Radio Group
* Select
* Switch
* Text Input

Each field type has different sets of events and configurations that can be customized. For example, the Number Input field can have a min and max value, while the Datepicker field can have a specific date format.

The configuration options for each field type may include default values, placeholder text, validation rules, and more. These options can be adjusted to fit the specific needs of the form being created.

## Submit form data

To access form data, the values entered in the JSON form are stored in the `formData` property. For instance, if you have a JSON form with a name field, you can access its value using:

```js
{{JSONForm.formData.name}}
```


To submit form data, you can use the `onSubmit` event. This event allows you to perform an action when the user submits the form.

Suppose you have a database with user information `name`, `gender`, and `email` and you want to insert data collected through the JSON Form. To do this, you can create an SQL insert query and pass the data as shown:

```sql
INSERT INTO users
  (name, gender, email)
VALUES
  (
    {{JSONForm1.formData.name}},
    {{JSONForm1.formData.gender}},
    {{JSONForm1.formData.email}}
  );
```

To trigger this insert query, you can set the `onSubmit` event of the **Submit** button on the JSON Form. 


## Form validation

Validating user input is essential for ensuring correct and formatted data. Appsmith provides validation properties such as Valid, Regex, and Required for **Fields** property. 

- The **Valid** property, which checks input against a code expression,
- The **Regex** property, which checks that input matches a regular expression,
- The **Required** property, which indicates that the field must be filled out.

When **Disabled Invalid Forms** is turned on, the JSON Form widget checks the validation properties, and the **Submit** button is automatically disabled if there are failing checks. Using this property guarantees that all user input meets the criteria you have defined in the form fields.


## Clear form fields

To clear form fields, you can enable the **Show Reset** property. When the Show Reset property is enabled, a reset button is added to the form. Clicking this button resets all fields in the form to their default values. This is useful if a user wants to start over with a new entry or if they entered the wrong information and need to clear the form.



## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

### Widget properties

These properties are present in the property pane of the widget. The following table lists all the widget properties.

| Property            	|         Data type        	| Description                                                                                                                                                                                                                                                                                                                                                                                            	|
|---------------------	|:------------------------:	|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| **Title**           | String        | Sets the text that appears at the top of the form as a title.                                                                                                                                                                |
| **Source Data**       | JSON      | Takes a JSON _object_ whose data is used to generate the form layout.                                                                                                                                                        |
| **Auto Generate form** | Boolean     | When enabled, the form layout updates automatically when the field types inside the **Source Data** are changed.                                                                                                         |
| **Generate Form**      | Button     | When **Auto Generate Form** is disabled, this button manually regenerates the form layout according to the field types in the **Source Data** object.                                                                        |
| **Field Configuration**  | List   | This is a list of the generated form fields. Click the gear icon to further customize any of these fields, or the eye icon to hide that field. They can also be re-ordered by dragging, and renamed by clicking their names. |
| **Add New Field**     | Button      | Adds a new field in the form. Fields added this way are known as custom fields. You can delete these fields later.                                                                                                           |
| **Disable Invalid Forms** | Boolean   | Disables the submit button when one or more of the form fields are considered invalid.                                                                                                                                       |
| **Animate Loading**   | Boolean      | When turned off, the widget loads without any skeletal animation. You can use a toggle switch to turn it on/off. You can also turn it off/on using javascript by enabling the JS label next to it.                       |
| **Fixed Footer**       | Boolean     | Makes the footer sticky for long forms, so the Submit and Reset buttons are always visible on long forms.                                                                                                                    |
| **Visible**          | Boolean       | Controls widget's visibility on the page. When turned off: The widget would not be visible when the app is published. It appears translucent when in Edit mode.                                                               |
| **Hidden Fields in Data**      | Boolean           | When turned on, the output data is updated to contain data from hidden fields. The hidden field values are referenced from the source data.                                                               |
| **Scroll Contents**   | Boolean      | Makes the contents of the form scrollable.                                                                                                                                                                                   |
| **Show Reset**       | Boolean       | When enabled, shows a reset button in the form allowing users to reset the form at any time.                                                                                                                                 |
| **Submit Button Label** | String    | Sets the text for the label on the Submit button.                                                                                                                                                                            |
| **Reset Button Label** | String     | Sets the text for the label on the Reset button.                                                                                                                                                                             |
| **Height**  | String        | It configures how a widget’s height reacts to content changes. It has three possible configurations:<br/>**Fixed**: The height of the widget remains as set using drag and resize.<br/>**Auto Height**: The height of the widget reacts to content changes. In JSON form widget, auto height is enabled by default.<br/>  **Auto Height with limits**: Same as Auto height, with a configurable option to set the minimum and maximum number of rows that can be occupied by the widget.                                      |




### Reference properties

These properties can be referenced in other widgets, queries, or JS functions using the dot operator. For instance, to get the formData, you can use `JSONFrom1.formData`.


| Property | Data Type                                                                                                                                                                                                                                                                                                                | Description                 |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------ |
| **fieldState**  | Object   | 8A JSON *object* describing the state of each field in the form. State data includes: **isDisabled**, **isRequired**, **isVisible**, and **isValid** <br/>e.g. `{ "name": {"isVisible": true, ... }, ... }` 
| **formData**   | Object    | Contains a JSON _object_ with the field names and their current values in the form.                                                                                                                                                                                                                                    
| **isValid**  | Boolean      | Reflects whether the widget's inputs are considered **Valid**.                                                                                                                                                                                                                                                 
| **sourceData**  | Object   | Contains a JSON _object_ of the original source data which was bound to the form.                                                                                                                                                                                                                           


### Styles properties

Style properties allow you to change the look and feel of the widget.

| Property            	|         Data type        	| Description                                                                                                                                                                                                                                                                                                                                                                                            	|
|---------------------	|:------------------------:	|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| **Background Color** |   String| Sets the background color of the widget. Accepts CSS [`color` ](https://developer.mozilla.org/en-US/docs/Web/CSS/color)values.                                                   |
| **Border Radius**  |   String  | Rounds the corners of the widget's outer edge. With JS enabled, this accepts valid CSS [`border-radius`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) values. |
| **Border Width**   |   Number  | Sets the width of the widget's border. Accepts _number_ values only, in px.                                                                                                      |
| **Box Shadow**   |   String | Casts a drop shadow from the frame of the widget. With JS enabled, this accepts valid CSS [`box-shadow`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) values.    |
| **Border Color**   |   String    | Sets the Border color of the widget.    |
| **Button Color** |   String  | Sets the color of the submit and reset button. Accepts valid CSS [`color` ](https://developer.mozilla.org/en-US/docs/Web/CSS/color)values.                                                                                                                                                                                                                                                                                                          |
| **Button Variant** |   String| Sets the button style type to represent its significance - Primary, Secondary, or Tertiary. You can use JavaScript to set this field by writing code that evaluates to the `"PRIMARY", "SECONDARY", or "TERTIARY"`.                                                                                                                                                                                                              |
| **Border Radius** |   String  | Rounds the corners of the widget's outer edge. With JS enabled, this accepts valid CSS [`border-radius`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) values.                                                                                                                                                                                                                                                            |
| **Box Shadow**   |   String  | Casts a drop shadow from the frame of the widget. With JS enabled, this accepts valid CSS [`box-shadow`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) values.                                                                                                                                                                                                                                                               |
| **Icon**       |   String    | Sets an icon to be included on the submit and reset button.                                                                                                                                                                                                                                                                                                                                                                                                  |
| **Placement**   |   String   | Defines where the button's icon and label appear within the space of the button. **Start:** The icon and label appear at the left-most side of the button; **Center:** The icon and label appear in the center of the button space; **Between:** The icon and label appear at opposite ends of the button's space. You can use JavaScript to set this field by writing code that evaluates to the `"START", "CENTER", or "BETWEEN"`. |
| **Position** |   String | Sets whether the icon appears on the left or right of the button's label text.                                                                                                                                                                                                                                                                                                                                                              |


## Events

These are functions that are called when event listeners are triggered in the widget. [Use actions](/reference/appsmith-framework/widget-actions) to execute tasks based on user events.



| **Event name** | **Description**                                                                                                                                                                                                                                               |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **onSubmit**   | Sets an action to take place when the user clicks the Submit button on this form. |

## Troubleshooting

Here are some common errors that you may see when using the JSON Form widget:

* [Source data exceeds 50 fields](/help-and-support/troubleshooting-guide/widget-errors#source-data-exceeds-50-fields)

If you encounter other issues while working with the widget, see [widget errors](/help-and-support/troubleshooting-guide/widget-errors). If the guide doesn't cover your issue, contact the [support team](mailto:support@appsmith.com).
