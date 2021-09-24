---
description: >-
  An input text field is used to capture a user's textual input such as their
  names, numbers, emails etc. Inputs can be used in a form and can have custom
  validations.
---

# Input

{% embed url="https://youtu.be/4BUbbZsxrus" caption="" %}

## Searching data

Input widgets can be used to allow users to search through records. The text of the input can be accessed in an API by referencing the text property **`{{ InputName.text }}`**

The same can be used to filter data on the client-side by writing a filter function using the text property

```javascript
{{ apiName.data.filter((row) => { 
    return row.name.includes(InputName.text) 
    }) 
}}
```

## **Form Submission**

Input widgets can be used to capture information inside a form such as name, email, phone number. We can add the respective validation using the regex property and even mark it as a required field.

{% hint style="success" %}
Some forms need to be pre-filled data from a table or API. We can bind the data to the default text property to enable this
{% endhint %}

```text
{{ Table1.selectedRow.name }}
/**
* Binding this to the default text will update the input
* with the name column of the selected row in Table1
*/
```

Read more about submitting Input data to an API below

[Sending widget data in post body](input.md)

## Properties

| Internal property | Description |
| :--- | :--- |
| **text** | This is the value of the text that is currently displayed on the widget. It changes when the default value changes or the user inputs a new value |

| Property | Description |
| :--- | :--- |
| **Label** | Sets the label for input. It can be left empty if you don't want any label. |
| **Data Type** | Sets the type of data you want to capture in the user input. Selecting a data type will add the associated data validation on the user input. |
| **Placeholder** | Sets a placeholder text inside the input. It is generally used to display an expected input or hint to the user. |
| **Default Input** | Sets the default text in the input widget before the user has made any changes. This field can be bound to a table's selectedRow to update a record |
| **Regex** | Used to add custom validations you want to perform on user input. |
| **Error Message** | Sets the text of the error message to display if Regex validation fails. |
| **Required** | When turned on, it makes a user input required and disables any form submission until an input is made. |
| **Visible** | Controls widget's visibility on the page. When turned off, the widget will not be visible when the app is published |
| **Disabled** | Disables input to the widget. The widget will remain visible to the user but a user input will not be allowed. |

| Action | Description |
| :--- | :--- |
| **onTextChanged** | Sets the action to be run when the user inputs text. See a list of [supported actions](../core-concepts/writing-code/appsmith-framework.md). |

