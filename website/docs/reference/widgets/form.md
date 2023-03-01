# Form

This page describes how to use the Form widget as a container for other widgets that collect, validate, and submit user input.

<VideoEmbed host="youtube" videoId="UgpQ0ZOnzdg" title="How to use Form Widget" caption="How to use Form Widget"/>

## Add widgets to forms

Any widget can be added to the body of a form by dragging that widget within the form's boundaries. This helps keep your inputs logically organized in the form's space and also under the form's name:

If a widget that collects user input is added to the form, you can access that widget's data with `{{ <form_name>.data }}`. For example, if you add an [Input widget](/reference/widgets/input) called "CompanyInput" and write "Appsmith" in it, a new key appears on the `data` property:

```javascript
// Form1.data
{
	"Text": "Form1",
	"CompanyInput": "Appsmith"
}
```

## Special button behavior

Button widgets have two properties that are useful when they're located within forms: [**Disabled Invalid Forms**](#prevent-invalid-submissions) and [**Reset Form on Success**](#clear-form-fields).

### Prevent invalid submissions

The **Disabled Invalid Forms** property helps keep bad data out of your queries.

Several input-collecting widgets have properties that check entries for correctness (like the [Input widget's](/reference/widgets/input) **Valid** property). While **Disabled Invalid Forms** is turned on, the "Submit" [Button widget](/reference/widgets/button) in the form is automatically disabled if any fields contain incorrect data.

Using this property guarantees that all user input meets the criteria you have defined in the form fields, and that all **Required** fields are completed.

### Clear form fields

The **Reset Form on Success** property is useful for resetting all form fields back to default values with one click. When this is turned on, the form is automatically reset any time the button completes its action successfully. For example, a button set to submit the form data clears the fields if the query is successful. Otherwise, on error, the form won't be reset.

The form's "Reset" button can be used anytime; it's configured for "No Action," and thus always completes successfully.

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

Style properties allow you to change the look and feel of the form. These properties are present in the properties pane of the widget.

| **Property**         | **Description**  |
| -------------------- | -----------------|
| **Background Color** | Sets the background color of the widget. Accepts any valid CSS color values.  |
| **Border Color**     | Sets a color for the form's border. Accepts any valid CSS color values. |
| **Border Width**     | Defines the thickness of the border.  |
| **Border Radius**    | Sets the rounded-ness of the form's corners. Use a higher number for a profound curve. |
| **Box Shadow**       | Sets the shadow style of the form.  | 
