---
description: >-
  Datepicker is used to capture the date and time input by a user. It can be
  used to filter data based on the input date range as well as to capture
  personal information such as date of birth.
---

# Datepicker

{% embed url="https://www.youtube.com/watch?v=MFflGf3K324&feature=youtu.be" caption="" %}

## Properties

| Internal Property | Description |
| :--- | :--- |
| **selectedDate** | This is the ISO date string selected in the date widget. This value changes if the default value is updated or the user inputs a value. |
| **formattedDate** | This is the date value displayed to the user in the date widget. This value changes if the default value is updated or the user inputs a value. |

<table>
  <thead>
    <tr>
      <th style="text-align:left">Property</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>Label</b>
      </td>
      <td style="text-align:left">Sets the label of the Datepicker.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Default Date</b>
      </td>
      <td style="text-align:left">
        <p>Sets a default date that will be captured as user input unless it is changed
          by the user. The default date must be an <b>ISO</b> string using the following
          formats:</p>
        <ul>
          <li>YYYY-MM-DD</li>
          <li>YYYY-MM-DD HH:mm</li>
          <li>ISO 8601 as mentioned in the <a href="https://momentjs.com/docs/#/parsing/string/">moment documentation</a>
          </li>
          <li>Others following the ISO 8601 standard.</li>
        </ul>
        <p>This can also be populated using a moment object <b>{{ moment() }}</b> as
          well.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Date Format</b>
      </td>
      <td style="text-align:left">The format of the date selected by the date picker</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Required</b>
      </td>
      <td style="text-align:left">When turned on, it makes a user input required and disables any form submission
        until input is made.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Visible</b>
      </td>
      <td style="text-align:left">Controls widget&apos;s visibility on the page. When turned off, the widget
        will not be visible when the app is published</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Disabled</b>
      </td>
      <td style="text-align:left">Disables input to the widget. The widget will remain visible to the user
        but user input will not be allowed.</td>
    </tr>
  </tbody>
</table>

| Action. | Description |
| :--- | :--- |
| **onDateSelected** | Sets the action to be run when the user selects a date. See a list of [supported actions](../core-concepts/writing-code/appsmith-framework.md) |

