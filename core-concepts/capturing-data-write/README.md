# Capturing Data \(Write\)

This document presumes you have successfully [connected to a data source](../connecting-to-data-sources/) and have an API / DB Query that can insert/update/delete data. You should also have gone through the basics of [using widgets](../displaying-data-read/#widgets).

 The following widgets can be used to capture user inputs in an application

* [Checkbox](../../widget-reference/checkbox.md)
* [Datepicker](../../widget-reference/datepicker.md)
* [Dropdown](../../widget-reference/dropdown.md)
* [Filepicker](../../widget-reference/filepicker.md)
* [Form](../../widget-reference/form.md)
* [Input](../../widget-reference/input.md)
* [Maps](../../widget-reference/maps.md)
* [Radio](../../widget-reference/radio.md)
* [Rich Text Editor](../../widget-reference/rich-text-editor.md)

Each of these widgets stores its user input in an internal property which can be referenced inside an API/Query using javascript.

#### Example SQL

```sql
INSERT INTO users ("name", "createdAt", "gender")
  VALUES ('{{nameInput.text}}', '{{moment().format("YYYY-MM-DD")}}', 
  '{{genderDropdown.selectedOptionValue}}');
```

**Example Post Body**

```sql
{
  "name": "{{nameInput.text}}",
  "createdDate": "{{moment().format('YYYY-MM-DD')}}",
  "gender": "genderDropdown.selectedOptionValue"
}
```

In the examples above, **`text`** is the internal property of the **`nameInput`** widget while **`selectedOptionValue`** is the internal property of the **`genderDropdown`** widget. The **`createdDate`** key is populated with the value of the current date using the `moment.js` library

## Triggering Updates

Since write operations are more expensive, the API/Query should be triggered once all the user data is captured. To do this we can make use of a [Button](../../widget-reference/button/) widget and configure the API/Query to run in the onClick of the button.

The property pane has an action section where all the interactions that a user can perform with a widget are listed. We can configure the action to be taken when the interaction takes place in this section.

To configure the API / Query we want to call when a button is clicked, we can select the action in the onClick dropdown.

![](../../.gitbook/assets/button-action.gif)

