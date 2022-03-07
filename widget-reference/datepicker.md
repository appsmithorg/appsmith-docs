---
description: >-
  Datepicker is used to capture the date and time input by a user. It can be
  used to filter data based on the input date range as well as to capture
  personal information such as date of birth.
---

# Datepicker

{% embed url="https://www.youtube.com/watch?v=MFflGf3K324&feature=youtu.be" %}

## Properties

| Internal Property | Description                                                                                                                                     |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **selectedDate**  | This is the ISO date string selected in the date widget. This value changes if the default value is updated or the user inputs a value.         |
| **formattedDate** | This is the date value displayed to the user in the date widget. This value changes if the default value is updated or the user inputs a value. |

| Property         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Label**        | Sets the label of the Datepicker.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **Default Date** | <p>Sets a default date that will be captured as user input unless it is changed by the user. The default date must be an <strong>ISO</strong> string using the following formats:</p><ul><li>YYYY-MM-DD</li><li>YYYY-MM-DD HH:mm</li><li>ISO 8601 as mentioned in the <a href="https://momentjs.com/docs/#/parsing/string/">moment documentation</a></li><li>Others following the ISO 8601 standard.</li></ul><p>This can also be populated using a moment object <strong>{{ moment() }}</strong> as well.</p><p>&#x3C;b>&#x3C;/b></p> |
| **Date Format**  | The format of the date selected by the date picker                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| **Required**     | When turned on, it makes a user input required and disables any form submission until input is made.                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **Visible**      | Controls widget's visibility on the page. When turned off, the widget will not be visible when the app is published                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **Disabled**     | Disables input to the widget. The widget will remain visible to the user but user input will not be allowed.                                                                                                                                                                                                                                                                                                                                                                                                                           |

| Action.            | Description                                                                                                                                    |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **onDateSelected** | Sets the action to be run when the user selects a date. See a list of [supported actions](../core-concepts/writing-code/appsmith-framework.md) |

### Month Picker

To select just a month rather than a particular date, you can convert the [**Select widget**](dropdown-1.md) into a month picker. Drag a select widget to the canvas and enter the following snippet:

```
[
 { "label": "January", "value": "january" },
 { "label": "February", "value": "february" },
 { "label": "March", "value": "march" }, 
 { "label": "April", "value": "april" }, 
 { "label": "May", "value": "may" }, 
 { "label": "June", "value": "june" }, 
 { "label": "July", "value": "july" }, 
 { "label": "August", "value": "august" }, 
 { "label": "September", "value": "september" }, 
 { "label": "October", "value": "october" }, 
 { "label": "November", "value": "november" }, 
 { "label": "December", "value": "december" } 
]
```

### Year Picker

To select just a year rather than a particular date or month, you can convert the [**Select widget**](dropdown-1.md) into a year picker. Drag a select widget to the canvas and enter the following snippet:

```
{{ function()
    { 
        let start_year = 1920; //change start year for year picker 
        let end_year = 2120; //change end year for year picker 
        let years = []; 
        for (let i = start_year;i<= end_year;i++)
            { 
            let current_year_object = { "label":i.toString(), "value":i.toString()}
            years.push(current_year_object) 
            } 
         return years; 
     }
 () }}
```

