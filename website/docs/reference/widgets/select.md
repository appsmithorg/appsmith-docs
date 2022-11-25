# Select

‌Select / Dropdown widget is used to capture user input/s from a specified list of permitted inputs.

<VideoEmbed host="youtube" videoId="zNw1yMwg-aY" title="How to use Select Widget" caption="How to use Select Widget"/>

### Displaying data

A Dropdown's **options** can be populated from a data source like an API / Query by transforming the incoming data to an array of (label, value). The transformation can be performed using JavaScript. So if the data is an array, it can be transformed using the [**Array.map**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/TypedArray/map) function.

```javascript
// Query1.data is assumed to be an array here
{{ Query1.data.map((row) => { 
      return { label: row.name, value: row.id } 
   }) 
}}
```

### Filtering data

A Dropdown can be used to filter a dataset based on the user's input. The selected value can be passed to an API using\*\*`{{ dropdownName.selectedOptionValue }}` .

### **Form submission**

Dropdown widgets can be used to capture from a fixed set of options inside a form such as gender, role, and status.

:::info
Some forms need to be pre-filled data from a table or API. You can bind the data to the default text property to enable this
:::

```
{{ Table1.selectedRow.gender }}
/**
* Binding this to the default option will update the selected option 
* of the dropdown with the gender of the selected row in Table1
*/
```

Read more about submitting Input data to an API below.

[Sending widget data in the post body](../../core-concepts/data-access-and-binding/capturing-data-write/capture-form-data.md)

## Properties

Properties allow editing the widget, connecting it with other widgets, and customizing user actions.

### Widget properties

These properties allow editing the Select widget. All these properties are present in the property pane of the widget.

| Property                  | Description                                                                                                                                                                       |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Options**               | Use to set labels and values for different items/options in the list of the dropdown widget. Options must be specified as an array of objects with a label and value property. |
| **Default Value**         | Sets a default option that's captured as user input unless it's changed by the user.                                                                                       |
| **Placeholder**           | Sets the Placeholder of the dropdown widget.                                                                                                                                      |
| **Required**              | When turned on, it makes a user input mandatory and disables any form submission until input is made.                                                                             |
| **Visible**               | Controls widget's visibility on the page. When turned off, the widget won't be visible when the app is published                                                               |
| **Disabled**              | Disables input/selection to the widget. The widget remains visible to the user but user input/selection won't be allowed.                                                  |
| **Animate Loading**       | Controls the widget’s animation on page load.                                                                                                                      |
| **Filterable**            | Makes the dropdown list filterable.                                                                                                                                               |
| **Server Side Filtering** | Enables server-side filtering via an API / Query request. Use this property when the Select widget's Option data is being bound to an API / Query.                                        |

### Binding properties

These properties help to share values between widgets and also allow easy access to the widget property within Queries or JS functions.

| Property                | Description                                                                                                                                                          |                                       |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| **filterText**          | The filter text for Server side filtering                                                                                                                            | `{{widget_name.filterText}}`          |
| **isDisabled**          | This property indicates whether the widget is disabled or not.                                                                                                       | `{{widget_name.isDisabled}}`          |
| **isVisible**           | This property indicates whether the widget is visible or not.                                                                                                        | `{{widget_name.isVisible}}`           |
| **selectedOptionValue** | This is the value of the option that's displayed in a Single Select dropdown. It changes if the default value of the dropdown changes or the user selects an option | `{{widget_name.selectedOptionValue}}` |
| **selectedOptionLabel** | This property indicates label of the selected option.                                                                                                                | `{{widget_name.selectedOptionLabel}}` |

### Events

These are functions that are called when event listeners are triggered in the widget.

| Events             | Description                                                                                                                                    |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **onOptionChange** | Sets the action to be run when the user selects/unselects an option. See a list of [supported actions](../appsmith-framework/widget-actions/). |

### Label

The property hosts a group of configurations that are used to associate a display name and define a placement for the widget. Below are the properties that affect Labels:

| Label         | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| **Text**      | Sets the label of the widget.                                |
| **Position**  | Sets the label position of the widget.                       |
| **Alignment** | Sets the label alignment of the widget.                      |
| **Width**     | Sets the label width of the widget as the number of columns. |

Here are the label properties in detail:

#### **Text**

Sets the display name for the Select widget. Users see this name on the page with the widget, like a title.

:::tip
Leaving the field empty sets the widget to have no display name.
:::

#### **Position**

It allows specifying the placement of the label. You can select one of the available options:

* Top - Aligns the text at the top of the Select widget.
* Left - It aligns the text to the left of the Select widget. When the **Left** alignment is selected, there are additional settings that can be used to control the alignment and define the text's width.
  * Alignment - Controls the placement of text relative to the Select widget. The options are:
    * Left - Aligns the text to the widget's left boundary that's away from the Select widget.
    * Right - Aligns the text closer to the Select widget.
  * Width - Sets how much space is allocated to the label, measured in number of columns of the canvas grid.
* Auto - Automatically adjusts the position of the text based on the Select widget's height.

:::info
Columns are the dashed lines (-----) that surround a widget when it's being placed on the canvas.
:::

<VideoEmbed host="youtube" videoId="wyQGr-ggvhM" title="How to set the label properties?" caption="How to set the label properties?"/>

### Styles

Style properties allow for customizing the look and feel of the widget.

| Style                | Description                                              |
| -------------------- | -------------------------------------------------------- |
| **Label Text Color** | Sets text color for the label.                           |
| **Label Text Size**  | Sets the size of the label.                              |
| **Label Font Style** | Sets the font style, such as **bold** or _italic_.       |
| **Border Radius**    | Sets the rounded-ness of the widget's corners.            |
| **Box Shadow**       | Sets the widget's shadow style.                          |

### Server-side filtering

The Select widget has the option to configure server-side filtering, where search queries are sent to the back-end, and responses are used to populate options on the Select widget. When enabling server-side filtering in the widget, please update the default value to contain both `label` and `value` in this format `{"label":<label>, "value": <value>}` if the default value isn't present in the default options.

<VideoEmbed host="youtube" videoId="QDmTwRaLzHg" title="Server Side Filtering" caption="Server Side Filtering"/>

As shown in the Server Side Filtering video, follow these steps:

1. Drag a Select widget onto the canvas.
1. Create a [query](/core-concepts/data-access-and-binding/querying-a-database/) `get_users` that retrieves user data to use in the widget. For example, try working with Appsmith's `users` Postgresql test database. Use the following statement as the query:
  ```sql
  SELECT id, name FROM users ORDER BY id LIMIT 10;
  ```
1. In the Select widget's properties pane, add the query's `data` to the widget's **Options** property. To control how the returned data is structured, use the JS [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) method:
  ```javascript
  {{
    get_users.data.map( user => {
      return { label: user.name, value: user.id }
    })
  }}
  ```
1. Enable the Select widget's **Server Side Filtering** property, and set the **onFilterUpdate** event to execute the query.
  ```javascript
  {{ get_users.run() }}
  ```
  ![](/img/as_select_filtering.png)
1. Now that the widget is configured for server side filtering, update the `get_users` query with a `WHERE` statement that incorporates the filter text from the Select widget:
  ```sql
  SELECT id, name FROM users
  WHERE name LIKE '{{'%'+ Select1.filterText + '%'}}'
  ORDER BY id LIMIT 10;
  ```

In the Select widget's filter field, enter text to narrow the query's results.

![](/img/select_filtered.png)

View the sample app for ([Select Widget - Server Side Filtering](https://app.appsmith.com/applications/61fbdf232cd3d95ca414b805/pages/6215d4742882606a1df5c695)).