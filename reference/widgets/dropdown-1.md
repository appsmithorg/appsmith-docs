# Select

‌Select / Dropdown widget is used to capture user input/s from a specified list of permitted inputs.

{% embed url="https://youtu.be/zNw1yMwg-aY" %}

### Displaying Data

A Dropdown's **options** can be populated from a data source like an API / Query by transforming the incoming data to an array of (label, value). The transformation can be performed using javascript. So if the data is an array, we can transform it using the [**Array.map**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/TypedArray/map) function.

```javascript
// Query1.data is assumed to be an array here
{{ Query1.data.map((row) => { 
      return { label: row.name, value: row.id } 
   }) 
}}
```

### Filtering Data

A Dropdown can be used to filter a dataset based on the user's input. The selected value can be passed to an API using\*\*`{{ dropdownName.selectedOptionValue }}` .

### **Form Submission**

Dropdown widgets can be used to capture from a fixed set of options inside a form such as gender, role, and status.

{% hint style="success" %}
Some forms need to be pre-filled data from a table or API. We can bind the data to the default text property to enable this
{% endhint %}

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

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

### Widget Properties

These properties allow you to edit the Select widget. All these properties are present in the property pane of the widget.

| Property                  | Description                                                                                                                                                                       |   |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | - |
| **Options**               | Let's you set labels and values for different items/options in the list of the dropdown widget. Options must be specified as an array of objects with a label and value property. |   |
| **Default Value**         | Sets a default option that will be captured as user input unless it is changed by the user.                                                                                       |   |
| **Placeholder**           | Sets the Placeholder of the dropdown widget.                                                                                                                                      |   |
| **Required**              | When turned on, it makes a user input mandatory and disables any form submission until input is made.                                                                             |   |
| **Visible**               | Controls widget's visibility on the page. When turned off, the widget will not be visible when the app is published                                                               |   |
| **Disabled**              | Disables input/selection to the widget. The widget will remain visible to the user but user input/selection will not be allowed.                                                  |   |
| **Animate Loading**       | Allows you to control a widget’s animation on the page load.                                                                                                                      |   |
| **Filterable**            | Makes the dropdown list filterable.                                                                                                                                               |   |
| **Server Side Filtering** | Enables server-side filtering via an API / Query request. Use this property when your Select option data is being bound to an API / Query.                                        |   |

### Binding Properties

These properties help you share values between widgets and also allow you to easily access the widget property within Queries or JS functions.

| Property                | Description                                                                                                                                                          |                                       |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| **filterText**          | The filter text for Server side filtering                                                                                                                            | `{{widget_name.filterText}}`          |
| **isDisabled**          | This property indicates whether the widget is disabled or not.                                                                                                       | `{{widget_name.isDisabled}}`          |
| **isVisible**           | This property indicates whether the widget is visible or not.                                                                                                        | `{{widget_name.isVisible}}`           |
| **selectedOptionValue** | This is the value of the option that is displayed in a Single Select dropdown. It changes if the default value of the dropdown changes or the user selects an option | `{{widget_name.selectedOptionValue}}` |
| **selectedOptionLabel** | This property indicates label of the selected option.                                                                                                                | `{{widget_name.selectedOptionLabel}}` |

### Events

They are a set of actions that you can perform on the widget.

| Events             | Description                                                                                                                         |   |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------- | - |
| **onOptionChange** | Sets the action to be run when the user selects/unselects an option. See a list of [supported actions](../appsmith-framework-1.md). |   |

### Label

The property hosts a group of configurations that you can use to associate a display name and define a placement for the widget. These properties are usually useful when you want to design forms that follow a defined alignment for your form fields and give a professional look to your forms. Below are the properties that you can use:

| Label         | Description                                                  |   |
| ------------- | ------------------------------------------------------------ | - |
| **Text**      | Sets the label of the widget.                                |   |
| **Position**  | Sets the label position of the widget.                       |   |
| **Alignment** | Sets the label alignment of the widget.                      |   |
| **Width**     | Sets the label width of the widget as the number of columns. |   |

Let's understand the label properties in detail:

#### **Text**

It allows you to set the display name for the Select widget. For example, if you want the user to select a Gender Type, you can enter the text as "Gender."

{% hint style="info" %}
You can leave the text empty if you don't want any display name for your Select widget.
{% endhint %}

#### **Position**

It allows you to specify the placement of the label. You can select one of the available options:

* Top - It allows you to align the text at the top of the Select widget.
* Left - It aligns the text to the left of the Select widget. When you select **Left** alignment, you get additional settings that you can use to control the alignment and define the text's width.
  * Alignment - With the help of alignment, you can define the placement of the text in accordance with the position of the Select widget. You can choose:
    * Left - It aligns the text to the widget's left boundary that is away from the Select widget.
    * Right - It aligns the text closer to the Select widget.
  * Width - With the help of width, you can define the **number of columns** in the **grid** that surrounds the widget. You can specify how close or far the text can be placed to the Select widget.
* Auto - It automatically adjusts the position of the text based on the Select widget's height.

{% hint style="info" %}
Columns are the dashed lines (-----) that surround a widget when you try to drag and drop it on the canvas.
{% endhint %}

{% embed url="https://youtu.be/wyQGr-ggvhM" %}
How to set the label properties?
{% endembed %}

### Styles

Style properties allow you to change the look and feel of the widget.

| Style                | Description                                              |   |
| -------------------- | -------------------------------------------------------- | - |
| **Label Text Color** | Allows you to set text color for the label.              |   |
| **Label Text Size**  | Allows you to set the size of the label.                 |   |
| **Label Font Style** | Allows you to choose a font style, i.e., bold or italic. |   |
| **Border Radius**    | Allows you to define curved corners.                     |   |
| **Box Shadow**       | Allows you to choose from the available shadow styles.   |   |
