# JSON Form


The JSON form widget saves time and effort by automatically generating forms from JSON data, eliminating the need for manual form creation for large forms.


<VideoEmbed host="youtube" videoId="Zk6df9mOtQA" title="Configure JSON Form Widget" caption="Configure JSON Form Widget"/>


## Generate JSON Form
To populate the JSON Form widget with data, you can utilize the **Source Data** property, which requires the data to be structured in a JSON format:

```json
{ 
    "name": "John Doe", 
    "age": 29 
}
```
JSON Form automatically detects the appropriate field type for each value. For instance, if the JSON data contains an `age` field, the Form widget sets the input type to a number input. Additionally, you can add/customize field types using the **Field Configuration** property.



You can display dynamic data in a JSON Form widget by binding the response from a query or a JS function to the **Source Data** property. This allows the form to update dynamically as the data changes in the database or API.

For example, suppose you have fetched data from an API using the query `getData` and want to generate the JSON Form using the response returned by the query:
```js
 {{Api1.data[0]}}
 ```

Additionally, you can also enable the **Auto Generate Form** property to have the form fields generated automatically according to the Source data. This means that any changes made in the Source data would be automatically update the form fields without the need for manual intervention. 

However, if the **Auto Generate Form** property is disabled, any changes in the source data would not affect the form fields. In this case, you need to manually generate the form fields by clicking on **Generate Form**. 


#### Complex JSON forms

You can create complex nested JSON forms with structured and organized input fields. Here's an example of a complex nested JSON form schema for an ice cream menu item, where each item has its own unique ID, type, name, image, and thumbnail properties.
```json
{
	"id": "1",
	"type": "icecream",
	"name": "Vanilla Cone",
	"image":
		{
			"url": "img/01.png",
			"width": 200,
			"height": 200
		},
	"thumbnail":
		{
			"url": "images/thumbnails/01.png",
			"width": 32,
			"height": 32
		}
}
```

## Validate submissions

Validating user input is essential for ensuring correct and formatted data. Appsmith provides validation properties such as Valid, Regex, and Required for **Fields** property. 

- The **Valid** property, which checks input against a code expression,
- The **Regex** property, which checks that input matches a regular expression,
- The **Required** property, which indicates that the field must be filled out.

When **Disabled Invalid Forms** is turned on, the JSON Form widget checks the validation properties and the **Submit Button** is automatically disabled if there are failing checks. Using this property guarantees that all user input meets the criteria you have defined in the form fields.

## Access form data

To retrieve form data, you can use the `formData` binding property within JavaScript or widget bindings. This property enables you to obtain the values of form fields.

For instance, to extract the ID from a JSON Form, you can use the following code:

```js
{{JSONForm1.formData.ID}},
```

Simply replace "ID" with the name of the form field you wish to extract.

## Submit form data

To submit form data, you can use the `onSubmit` event. This event allows you to perform an action when the user submits the form.

For example, if you want to insert form data into a Google Sheet, you can create a new insert query and in the Row Object section, add:

```js
{
	"ID": {{JSONForm1.formData.ID}}
}
```

To trigger this insert query, you can set the `onSubmit` event of the submit button to run the insert query. 


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




### Binding properties

These properties can be referenced in other widgets, queries, or JS functions using the dot operator. For instance, to get the formData, you can use `JSONFrom1.formData`.


| Binding Property | Data Type                                                                                                                                                                                                                                                                                                                | Description                 |
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





### Submit and reset button styles

| Property            	|         Data type        	| Description                                                                                                                                                                                                                                                                                                                                                                                            	|
|---------------------	|:------------------------:	|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| **Button Color** |   String  | Sets the color of the widget's button. Accepts valid CSS [`color` ](https://developer.mozilla.org/en-US/docs/Web/CSS/color)values.                                                                                                                                                                                                                                                                                                          |
| **Button Variant** |   String| Sets the button style type to represent its significance - Primary, Secondary, or Tertiary. You can use JavaScript to set this field by writing code that evaluates to the `"PRIMARY", "SECONDARY", or "TERTIARY"`.                                                                                                                                                                                                              |
| **Border Radius** |   String  | Rounds the corners of the widget's outer edge. With JS enabled, this accepts valid CSS [`border-radius`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) values.                                                                                                                                                                                                                                                            |
| **Box Shadow**   |   String  | Casts a drop shadow from the frame of the widget. With JS enabled, this accepts valid CSS [`box-shadow`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) values.                                                                                                                                                                                                                                                               |
| **Icon**       |   String    | Sets an icon to be included on the button.                                                                                                                                                                                                                                                                                                                                                                                                  |
| **Placement**   |   String   | Defines where the button's icon and label appear within the space of the button. **Start:** The icon and label appear at the left-most side of the button; **Center:** The icon and label appear in the center of the button space; **Between:** The icon and label appear at opposite ends of the button's space. You can use JavaScript to set this field by writing code that evaluates to the `"START", "CENTER", or "BETWEEN"`. |
| **Position** |   String | Sets whether the icon appears on the left or right of the button's label text.                                                                                                                                                                                                                                                                                                                                                              |


## Events

These are functions that are called when event listeners are triggered in the widget. [Use actions](/reference/appsmith-framework/widget-actions) to execute tasks based on user events.



| **Event name** | **Description**                                                                                                                                                                                                                                               |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **onSubmit**   | Sets an action to take place when the user clicks the Submit button on this form. |


## Troubleshooting

* [Source data exceeds 50 fields](/help-and-support/troubleshooting-guide/widget-errors#source-data-exceeds-50-fields)

If you run into any other issues while working with the widget, check out the guide on [widget errors guide](/help-and-support/troubleshooting-guide/widget-errors). If your issue isn't covered in the guide, please connect with support@appsmith.com or raise your query on the [Discord Server](https://discord.com/invite/rBTTVJp).
