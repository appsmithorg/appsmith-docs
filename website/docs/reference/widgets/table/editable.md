# Editable

This page provides information related to all the editable column properties. 

You can enable the **Editable** property either by selecting the checkbox in the Table's column property settings or directly from the individual column settings. By enabling inline editing and marking specific columns as editable, users can update data directly from the UI by double-clicking on the desired cell

Additionally, you can use JavaScript by clicking on *JS* next to the **Editable** property to control it conditionally. If you are using JS, make sure to enable the **Editable checkbox** at the Table column level before adding your code.

<dd>

*Example*: if you want to allow only certain users to edit the Table:

* Enable the Editable property at the Table Column level.

* Open the column settings, click *JS* for the **Editable** property, and add your code.

```javascript
{{appsmith.user.email === 'john@appsmith.com' ? true : false}}
```

This code checks if the email of the logged-in user is `john@appsmith.com`. If it is, the property is set to true, making the column editable. If it is not, the property is set to false, keeping the column non-editable.

Learn more about [Inline editing](/reference/widgets/table/inline-editing).


<ZoomImage
  src="/img/column-editable.gif" 
  alt=""
  caption=""
/>


</dd>


## Properties

These common properties allow you to edit the column, and customize the user actions.



### Validation

These properties allow you to ensure user input meets specific criteria and maintains data integrity.

#### Regex `string`

<dd>

The Regex property, short for Regular Expression, enables you to apply custom validations on user input by defining specific constraints using regular expressions. If the user enters a value that does not adhere to the specified pattern, an error message can be displayed. 

*Examples:* 

If you want to validate that the user enters a value in multiples of 5, you can set the Regex as:

```js
.*[05]$
```

**Email Validation:** To validate whether an entered email is correct, use the following regular expression code inside the **Regex** property:

```JS
^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$
``` 

**Phone number validation:** If you want to validate international phone numbers starting with a plus sign (+) and a total length between 6 and 14 digits, use the following code inside the **Regex** property:

```js
^\+(?:[0-9]●?){6,14}[0-9]$
```

**Number validation:** If you need to add number validation for fields like currency or prices, you can use the following regular expression code inside the **Regex** property:

```js
//Regex

//Range Validation - 0 to 100:  
^(0*100(\.0*)?)$|^([1-9]?[0-9](\.\d*)?)$

//Positive Number Validation:  
^[1-9][0-9]*$

//Decimal Number Validation:  
^-?\d+(\.\d{2})?$

//Minimum and Maximum Value Validation(1000 and 10,000):
Regex: ^(10000|[1-9][0-9]{3,4})$ 
```

</dd>


#### Required `boolean`

<dd>

Indicates whether the input for this column is mandatory. If set to `true`, users must provide a value before saving the column.

</dd>

#### Valid `boolean`

<dd>

This property allows you to define custom validation rules and error messages to guide users when their input does not meet the required criteria. To access the user's edited values, you can utilize the following reference properties:

- **editedValue**: This property displays the current value of the column being edited or added. It reflects the in-progress value that the user is modifying in that specific cell. For example, if you want to ensure the input length is greater than 2 characters:

<dd>

```js
{{ editedValue.length > 2 }}
```

</dd>


- **currentRow**: This property holds the original, unedited values of the current row. If you are adding a new row, it represents the new row object. The `currentRow` only reflects changes once the Save button is clicked, which means it does not update dynamically as you edit a cell.


<dd>

Example: You're editing a "discount" field in a table and want to validate that the discount percentage does not exceed the product’s original price. You would need to compare the edited discount value with the current row’s "price" column like this:

```js
{{ editedValue <= currentRow.price }}
```

</dd>

- **currentIndex**: This property indicates the index of the row being edited. For existing rows, it reflects the current index in the dataset. If you're adding a new row, it will display `-1` to signify that it does not yet exist in the dataset.


<dd>

```js
{{ currentIndex >= 0 }}
```

</dd>

- **isNewRow**: This property indicates whether the current entry is for a new row. If the value is being entered for a new row, this property will be true; otherwise, it will be false. For example, you can check if a new row is being added and perform a comparison, such as:


<dd>

```js
{{ isNewRow > 10 }}
```

</dd>



</dd>


#### Error Message `string`

<dd>

This property allows customization of the error message displayed when the user enters an incorrect value. By default, the input widget shows a generic `invalid input` message. 


</dd>

#### Min `number`

<dd>

This property ensures that any value entered must be greater than or equal to the specified minimum. It is only available when the column type is set to **Number**, **Currency**, or **Date**.

</dd>

#### Max `number`

<dd>

This property ensures that any value entered must be less than or equal to the specified maximum. It is only available when the column type is set to **Number**, **Currency**, or **Date**.

</dd>


### Select properties

These properties become available only when the column type is set to Select. They enable you to customize the behavior and appearance of the select column


#### Options `array`

<dd>

This property defines the options to be displayed in the select dropdown. It should be provided as an array of objects, where each object contains a `label` and a `value`. 

Example: If you want to create a gender selection dropdown, you could define the options as follows:



```js
[
  {"label": "Male", "value": "male"},
  {"label": "Female", "value": "female"}
]
```

</dd>

#### Placeholder `string`

<dd>

The placeholder provides a hint to users about what type of information is expected in the field.

</dd>

#### Filterable `boolean`

<dd>

This property allows you to make the dropdown list filterable. When enabled, it adds a search bar inside the select component, letting users quickly find options by typing in the input field

</dd>

#### Reset filter text on close `boolean`

<dd>

This property determines whether the filter text in the dropdown is reset when the dropdown is closed. When set to `true`, any text entered in the search bar will be cleared upon closing the dropdown.

</dd>

#### Server Side Filtering `boolean`

<dd> 
This property enables server-side filtering of the dropdown data. When set to `true`, the application sends filter queries to the server based on user input, retrieving only the relevant options. This is beneficial for large datasets, improving performance and reducing loading times by fetching only necessary items as users type. 
</dd>

### Date settings

These editable properties become available only when the column type is set to Date. 


#### First day of the week `number`

<dd>

This property sets which day of the week appears first within the calendar of the Date type. It allows you to customize the starting point of the week according to regional preferences or organizational standards.

For example, if you set this property to `0`, the calendar will start on Sunday, whereas setting it to `1` will start the week on Monday. 

</dd>

#### Show shortcuts `boolean`

<dd>

When enabled, it adds section within the Datepicker pop-up that contains options - **Today, 1 week ago, 1 month ago,3 months ago, 1 year ago**, for quick date selection.


</dd>

## Events

When the event is triggered, these event handlers can execute queries, JS functions, or other [supported actions](/reference/appsmith-framework/widget-actions). These events may be available only for specific column types or when certain properties are enabled

#### onSubmit

<dd>

Allows you to configure one or multiple actions (Framework functions, queries, or JS functions) to be executed when the **Save** button of any input column type is clicked. This includes various column types such as Number, Plain Text, and more.

</dd>

#### onOptionChange

<dd>

Allows you to configure one or multiple actions (Framework functions, queries, or JS functions) to be executed when the user selects an option in the dropdown list. It enables you to capture the user's input and perform specific actions in response.

</dd>

#### onFilterUpdate

<dd>

This event allows you to configure one or multiple actions (Framework functions, queries, or JS functions) to be executed when you update the filter text. You can also write custom JavaScript logic for this event by clicking on the JS next to the property.

</dd>

#### onChange

<dd>

This event allows you to configure one or multiple actions to be executed in response to changes in the **Switch** state. 

</dd>

#### onDateSelected

<dd>

This event allows you to configure one or multiple actions to be executed when a date is selected from the date column type.

</dd>