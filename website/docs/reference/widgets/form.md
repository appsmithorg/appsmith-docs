# Form

This page describes how to use the Form widget to collect, validate, and submit user input.

<VideoEmbed host="youtube" videoId="UgpQ0ZOnzdg" title="How to use Form Widget" caption="How to use Form Widget"/>

## Form components

Form widgets are used as containers to group and handle related user inputs.

When you add a Form widget to the canvas, it automatically includes a [Text widget](/reference/widgets/text) as a title and two [Button widgets](/reference/widgets/button) that **Submit** and **Reset** the form fields.

To build your Form, drag other input-collecting widgets ([Select](/reference/widgets/select) widget, for example) into the form's boundaries.

## Submit form data

Once you've populated your Form widget with input fields, you are ready to use their values within your query.

For any input-gathering widget in your Form, you can access that widget's current value with `{{ <form_name>.data.<widget_name> }}`. For example, if you add a [Select widget](/reference/widgets/select) called "OrderStatus," a new key appears on the Form's `data` property:

```javascript
// Form1.data
{
	"Text": "Form1",
	"OrderStatus": "SHIPPED"
}
```

On the query screen, use mustache syntax `{{ }}` to access the widget values you need. For example, a SQL query using the "OrderStatus" Select widget looks like:

```sql
SELECT * FROM orders WHERE orderStatus = {{ Form1.data.OrderStatus }} LIMIT 10;
```

Call your query from the Form's **Submit** button in its **onClick** field using code or the properties GUI:

```javascript
// Submit button's onClick
{{ Query1.run() }}
```

You can also run multiple actions sequentially depending on whether the query succeeds or fails. Read more about this in [complex workflows](/core-concepts/writing-code/workflows#complex-workflows).

## Form validation

The **Disabled Invalid Forms** property helps prevent submitting invalid data in your queries.

Several widgets, such as the [Input widget](/reference/widgets/input), have validation properties that check entries for correctness. Some examples are:

- The **Valid** property, which checks input against a code expression,
- The **Regex** property, which checks that input matches a regular expression,
- The **Required** property, which indicates that the field must be filled out.

While **Disabled Invalid Forms** is turned on, the Form widget checks the validation properties of its children and the **Submit** [Button widget](/reference/widgets/button) is automatically disabled if there are failing checks.

Using this property guarantees that all user input meets the criteria you have defined in the form fields.

## Clear form fields

The **Reset Form on Success** property is useful for resetting all form fields back to default values with one click. When this is turned on, the Form is automatically reset any time the button completes its action successfully. For example, a button set to submit the form data clears the fields if the query is successful. Otherwise, if there is an error, the Form won't be reset.

The Form's **Reset** button can be used anytime; it's configured for "No Action," and thus always completes successfully.

## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

### General properties

General properties control the data and behavior of the widget. These properties are present in the properties pane of the widget.

| **Property**         | **Description**  |
| -------------------- | -----------------| 
| **Visible**          | Shows/hides the widget. When turned off, the widget becomes translucent in Edit mode and invisible where the app is deployed.  |
| **Animate Loading**  | Controls a widget’s animation on the page load. When turned off, the widget loads without any skeletal animation. |
| [**Height**](/reference/widgets#height) | Configures how the widget’s height reacts to content changes. It has three possible configurations:<br/>**Fixed**: The height of the widget remains as set using drag and resize.<br/>**Auto Height**: The height of the widget reacts to content changes.<br/>  **Auto Height with limits**: Same as Auto height, with a configurable option to set the minimum and maximum number of rows that can be occupied by the widget. |

### Reference properties

Reference properties are used to access the widget's data and state using code. When using reference properties, substitute `<form_name>` in the examples below with the name of your form widget.

| **Property**         | **Description**  | **Code Snippet** |
| -------------------- | ---------------- | ---------------- |
| **hasChanges**       | Indicates whether the form fields have been changed by the user. | `{{ <form_name>.hasChanges }}` |
| **data**             | Contains the data of the widgets embedded in the form. | `{{ <form_name>.data }}` |

### Style properties

Style properties allow you to change the look and feel of the Form. These properties are present in the properties pane of the widget.

| **Property**         | **Description**  |
| -------------------- | -----------------|
| **Background Color** | Sets the background color of the widget. Accepts any valid CSS color values.  |
| **Border Color**     | Sets a color for the form's border. Accepts any valid CSS color values. |
| **Border Width**     | Defines the thickness of the border.  |
| **Border Radius**    | Sets the rounded-ness of the Form's corners. Use a higher number for a profound curve. |
| **Box Shadow**       | Sets the shadow style of the Form.  | 

## Events

The Form widget doesn't have any event handlers of its own, however there are several events you may want to handle when using Forms. You can find these events on the individual widgets inside the Form, such as the [Button's **onClick**](/reference/widgets/button#events) or the [Input's **onTextChanged**](/reference/widgets/input#events).


## Further reading

- [Queries](/core-concepts/data-access-and-binding/querying-a-database)
- [Widgets](/reference/widgets)
- [Writing code](/core-concepts/writing-code)