# Form

A **Form** is the most widely used way of capturing a user’s digital or handwritten information. Keeping this in mind, Appsmith provides a form widget that caters to all your needs to capture the user input and wire it to a database query or an API.

Form widget serves as a parent widget that can store different widgets like texts to display what information to capture, an input box to capture the desired input from the user, a dropdown to allow selection, and many more. From building a user registration to a complex checkout or payment app, you can easily design the forms that best suit your business requirement with all these widgets at your disposal.

{% embed url="https://www.youtube.com/watch?v=HtoWzzje-Vs&feature=youtu.be" %}

## Add to Canvas

To add a form widget to your canvas, drag a form widget from a widget pane available on the left navigation bar.

Navigate to **PAGES** —> Select **Widget** Tab —> Write **Form** in the search bar —> **Drag** the widget on the **canvas**.

{% embed url="https://youtu.be/o-9kl0L6m58" %}

{% hint style="info" %}
You can move the form widget along with the widgets embedded into it and position them on the screen according to your convenience.
{% endhint %}

## Components

A form widget stores one or more widgets to define a logical group for capturing information. Depending on the needs, the widget can store any number of widgets.

{% hint style="info" %}
You can create a hierarchy of forms and have one or more form widgets embedded into it.
{% endhint %}

Once you drag a form widget on the canvas, you can see a [text widget](https://docs.appsmith.com/widget-reference/text) and two [buttons](https://docs.appsmith.com/widget-reference/button) by default embedded into it. You can add more widgets based on your requirements.

![When you drag a form widget, it has embedded widgets.](<../.gitbook/assets/Widgets Form widget Default view.png>)

To add more widgets to your form, navigate to the left bar under **PAGES**, click on the **Widget** tab, and search for a widget like **Text**. Drag the widget on the form widget to embed it.

## Employee Directory

There are a lot of use cases that you can build using a form widget like user registration, checkout, and so on. Let’s take an example to build a search function for an employee directory. The search will look into the employee directory and filter the records based on the given search term. If you do not supply a search term, you can display all employees.

### Search Employee Directory

To build this app, you can use a form widget to trigger the search with an input widget to capture the search term, embedded form buttons to trigger the search, reset the search term, and a table widget to display the search result.

{% embed url="https://youtu.be/Mi_RNg5RVxk" %}

#### **Form Button**

By default, the form widget provides two buttons: Reset and Submit, which help reset the form fields to their original values or save the data by calling an API/Query. The form buttons have the same set of functionality as available for the [button widget](https://docs.appsmith.com/widget-reference/button). This section will focus on the specific attributes that the reset and submit buttons have as embedded widgets in the form.

#### **Reset Button**

The form button with the name “Reset” allows users to reset the form fields to their original values. Say you are building a search app and displaying search results based on the search term provided by the user. You can use the reset button to clear the search term instead of manually clearing the search term field.

**Reset Form on Success**

In the properties pane, for the reset button where you can see the property - **Reset Form on Success** that is on by default. This property lets you clear the form fields whenever you click the reset button.

{% hint style="info" %}
You can use the onClick property in conjunction with the reset form on success. For example, you are recording user actions on your app. You can use the **onClick** event to track the operation, and the **reset form on success** can clear the form fields.
{% endhint %}

#### **Submit Button**

The form button with the name “Submit” allows you to add an action to capture the inputs provided by the user and then process it to generate results. In our search app, rename it to **Search**, and it captures the search term provided by the user. You can then bind a [call to an API or a query to store/display the data](https://docs.appsmith.com/core-concepts/capturing-data-write/capture-form-data).

**Disabled Invalid Forms**

If you have mandatory fields in your form, say the search term, you can see a grayed-out submit button until the user supplies the search term. The platform provides this as an out-of-the-box functionality, and you don’t have to add any additional code to achieve it. By default, the property is on, and you can toggle it off if you would like to disable it. You would want to disable the property, say you have a small data set for search and would want to fetch all the results if the user provides no search term. You can turn off the **Disabled Invalid Forms** property, and the submit button will be enabled on the form and perform the onClick action.

**Reset Form on Success**

The property is on for a submit form button, and it clears the fields after the successful execution of an onClick event. You can turn it off if you would like to restore the values. For example, you would like to preserve the search term supplied by the user on the screen even after you fetch the search results. You can achieve this by turning off the property.

## Display Search Results

Now that the search is in place, you can use the table widget to bind the query's response and display the results, as shown in the video. You can do a lot of manipulation in data in a table widget, like hiding some columns, format column values, and more. [Read more on how to use the table widget to structure your data](https://docs.appsmith.com/widget-reference/table).

{% embed url="https://youtu.be/Upn7LDy7UQQ" %}

You saw that your form is a logical group of widgets that allows you to capture user-related information and perform an operation like a search.

{% hint style="info" %}
You can embed a lot of widgets into the form. Typically, all the widgets that can capture user input are eligible for embedding like input, checkbox, datepicker, select, etc.
{% endhint %}

## Properties

The widget properties allow you to enhance the look and feel of a form widget and personalize the same as per your needs. You can find the properties pane on the right side of the canvas.

{% hint style="info" %}
Ensure that you select the widget to access its properties on the right bar.
{% endhint %}

The properties pane follows the same structure for almost all the widgets and includes or excludes properties not specific to the selected widget.

| **Property**         | **Description**                                                           | **Type**   | **Example**                                                                                                                                                                                     | **Code Snippet**             |
| -------------------- | ------------------------------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| **Name**             | Allows you to provide a unique name to the widget                         | Formatting | In the example above for capturing the Job applicant’s information app. We named a form widget **SearchTermForm**.                                                                              |                              |
| **Visible**          | Allows you to show/hide a widget.                                         | Binding    | You can either use a toggle or code to turn it off/on.                                                                                                                                          | `{{widget_name.isVisible}}`  |
| **Animate Loading**  | Allows you to control a widget’s animation on the page load.              | Formatting | You can use a toggle to turn it on/off. When turned off, the widget will load without any skeletal animation. You can also turn it off/on using javascript by enabling the JS label next to it. |                              |
| **Scroll Contents**  | Allows you to enable a scroll bar to scroll the contents.                 | Formatting | You can use a toggle to turn it on/off. Turning it on gives you the flexibility to embed more widgets in a small space.                                                                         |                              |
| **Background Color** | Allows you to set the background color of the widget.                     | Formatting | You can select the color from the pallet or use an HTML Color Code.                                                                                                                             |                              |
| **Border Color**     | Allows you to set a color for displaying the form's border.               | Formatting | You can select the color from the pallet or use an HTML Color Code.                                                                                                                             |                              |
| **Border Width**     | Allows you to define the thickness of the border.                         | Formatting | You can supply a higher number for a thick border.                                                                                                                                              |                              |
| **Border Radius**    | Allows you to define curved corners.                                      | Formatting | You can supply a higher number for a profound curve.                                                                                                                                            |                              |
| **Box Shadow**       | Allows you to choose from the available shadow styles.                    | Formatting | You can choose one of the available shadow styles for the widget.                                                                                                                               |                              |
| **Shadow Color**     | Allows you to set the color of the shadow.                                | Formatting | You can choose the color from the pallet or supply an HTML Color Code.                                                                                                                          |                              |
| **hasChanges**       | It helps you to know if the form has been changed by the application user | Binding    | You can use the property to verify if any fields in the form have been changed.                                                                                                                 | `{{widget_name.hasChanges}}` |
| **data**             | Allows you to access the data of embedded widgets.                        | Binding    | You can use the property to access the widget data.                                                                                                                                             | `{{widget_name.data}}`       |

## General

You can choose the properties under this head to name, show/hide, enable scrolling or animate the loading of the widget.

Let’s deep dive into the properties available under this head.

### Name of Widget

As soon as you select the widget, you can see an editable box available on top of the properties pane. You can use the default name supplied in the box or provide a meaningful name to the widget. You’ll also see the default naming convention follows the pattern WidgetType followed by a number. For example, `Form1`. The `number`**`{1}`** is a running sequence and increments if you add more widgets of the same type, provided you have not given a unique name to your widget. For example, if you add two more form widgets to the canvas, then the default names for these widgets would be `Form1`, `Form2`, and `Form3`.

{% hint style="info" %}
It’s advisable to rename the widget to give some meaningful name. It makes it easy to pass parameters by using the widget name to the APIs or queries.
{% endhint %}

### Visible

You can use `Visible` to show or hide the widget. By default, `Visible` is toggled **on** that is enabled, so the widget is visible on page load. This property particularly comes in handy when you want to **hide/show** a widget programmatically or hide a widget on page load and then show it when a particular condition or data is available.

{% hint style="info" %}
When you set the visible property of a form widget to false, it’ll hide the form widget and the child widgets embedded into the form. It is generally useful to use the form widget’s visible property instead of iterating and hiding each widget in a form.
{% endhint %}

There are two ways in which you can manipulate this property.

* Enable the JS label next to `Visible` and write the JavaScript code to control the widget's visibility.
* Write your own JS object and JavaScript code to link to any other widget and manage the show/hide.

{% hint style="info" %}
You can get the reference of visible property by using `{{widget_name.isVisible}}` in your code.
{% endhint %}

For example, let’s drag a checkbox widget `Checkbox1` onto the canvas. Rename the checkbox to `ShowHideForm` and bind it to the Visible property of the form widget by enabling the JS label next to it. Add the following JavaScript code in the Visible property.

```
{{ShowHideForm.isChecked}}
```

When you check the checkbox, it will enable the Visible property and show the form widget and all its children. Whereas the uncheck on the checkbox will hide the widget and its children.

{% embed url="https://youtu.be/P_98MzwE_lI" %}

### Scroll Contents

You can enable scroll contents em on when you want to embed multiple widgets. The scroll contents property enables a scroll bar to scroll the contents within a form.

### hasChanges

Whenever the application is loaded the `hasChanges` property is set to **false.** Whenever the application user changes the values of the widgets embedded in the form, Appsmith sets the property `hasChanges` to **true**. You can use this property to verify if the fields are modified and can prompt the users with a confirmation message to save or discard the changes.

{% embed url="https://youtu.be/UsZQ6q48sKw" %}
How to use hasChanges property?
{% endembed %}

```
export default {
	checkDataChanges: () => {
		//checks if the form has changed.
		if (EmployeeForm.hasChanges) {
		   showAlert("You have unsaved changes on the form. Please save to proceed.");
		   return false;
		}		
	}
}
```

You can see that the `hasChanges` value can be read into the code, and the user can be prompted to save the data.

### data

You can use the property **data** to access the values of embedded widgets in the form. For example, you have added an input widget with the name `FirstName` to form `EmployeeForm`. You can access the value provided by the user in the **FirstName** field by using the code snippet:

```
EmployeeForm.data.FirstName;
```

{% embed url="https://youtu.be/pKrOLPDYelc" %}
How to use the data property of the form to read embedded widgets' values?
{% endembed %}

## Styles

Choose properties under this head to change the look and feel of the form. You can choose a background color, border color, width, and radius.

Let’s deep dive into the properties to enhance the look of your form widget.

### Background Color

You can use the property background color to set the widget’s background. You can select the available colors from the color pallet to change the background color. You can also use HTML color codes to change the background.

### Border Color

You can use the property border-color to set the widget’s border color. You can select the colors from the color pallet or supply HTML color codes to set the border color.

### Border Width

It’s often required to set a profound separation between UI elements, and then, you can use border width. Border width allows you to set how thick or thin the border is.

{% hint style="info" %}
You can supply a higher number to have a thick border. However, a smaller number will result in a thin border.
{% endhint %}

### Border Radius

To beautify the form widget, you might want rounded or curved corners. You can achieve this by setting a border-radius for the widget.

{% hint style="info" %}
The higher the number more profound are the curved corners.
{% endhint %}

### Box Shadow

You can use the box-shadow property to attach one or more shadows to the widget. That is, it adds a shadow effect to your widget. You can select one out of the popular available options for a shadow effect.

### Shadow Color

You can choose from the popular color options to add a color effect to the widget shadow.

Build your apps using the form widget and capture user information seamlessly.
