# Capturing Data (Write)

This document presumes you have successfully connected to a data source and have a query that can insert/update/delete data. You should also have gone through the basics of [using widgets](/core-concepts/building-ui/dynamic-ui#transform-data).

The following widgets can be used to capture user inputs in an application

* [Checkbox](/reference/widgets/checkbox)
* [Datepicker](/reference/widgets/datepicker)
* [Filepicker](/reference/widgets/filepicker)
* [Form](/reference/widgets/form)
* [Input](/reference/widgets/input)
* [Maps](/reference/widgets/maps)
* [Radio Group](/reference/widgets/radio-group)
* [Rich Text Editor](/reference/widgets/rich-text-editor)
* [Select](/reference/widgets/select)
* [Switch](/reference/widgets/switch)

Widgets store their user input in an internal property that can be referenced using javascript.

### Example SQL

```sql
INSERT INTO users ("name", "createdAt", "gender")
  VALUES ({{nameInput.text}}, {{moment().format("YYYY-MM-DD")}}, 
  {{genderDropdown.selectedOptionValue}});
```

**Example Post Body**

```sql
{
  "name": {{nameInput.text}},
  "createdDate": {{moment().format('YYYY-MM-DD')}},
  "gender": {{genderDropdown.selectedOptionValue}}
}
```

In the examples above, the **`text`** is the internal property of the **`nameInput`** widget while **`selectedOptionValue`** is the internal property of the **`genderDropdown`** widget. The **`createdDate`** key is populated with the value of the current date using the `moment.js` library

## Triggering updates

Since write operations are more expensive, the Query should be triggered once all the user data is captured. To do this, you can make use of a [Button](/reference/widgets/button/) widget and configure the [Query](/connect-data/how-to-guides/query-data) to run in the `onClick` of the [button](/reference/widgets/button).

The property pane has an action section where all the interactions that a user can perform with a widget are listed. You can configure the action to be taken when the interaction takes place in this section.

To [configure the Query](/connect-data/how-to-guides/query-data) when a button is clicked, select the action in the `onClick` dropdown. 

![](</img/button-onclick_(2)_(4)_(1)_(1)_(1)_(1)_(1)_(1)_(1)_(1)_(1)_(1)_(1)_(3)_(5)_(1)_(1)_(1)_(2)_(1)_(1)_(1)_(1)_(1)_(3)_(2)_(2)_(1).gif>)
