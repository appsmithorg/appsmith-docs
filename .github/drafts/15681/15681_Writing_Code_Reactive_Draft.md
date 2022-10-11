
<!-- 
Amends the "Reactive" section of the "Writing Code" page of the docs, found [here](https://docs.appsmith.com/core-concepts/writing-code#reactive).
Links to individual mentioned widget reference pages will be added when text is ported to GitBook.
-->

## Configuring widgets with code

When data changes within your app, your widgets need to update themselves to reflect these changes. To make this happen, Appsmith follows the reactive programming paradigm.

Instead of managing widget properties and states with direct variable assignment in code (like
`x = 5`), widgets in your applications are connected to each other and share data; when one value is updated in your app, any objects that depend on that changed value also update accordingly. Below is a quick example of using the reactive code style to update a button's label in real-time by taking user input from an Input widget. Take a look at the video below:

{% embed url="https://youtu.be/YXo4PVrw1RQ" %}

The button’s label could be set as a simple static value (like “Submit”) in its properties pane, but if you’d like that property to change at any point, it must be defined differently.

When writing JavaScript to configure a widget’s property, your code should tell that widget where to look to find its data rather than explicitly setting a specific value. Consider the following example scenario:

Imagine that you're creating a dashboard for viewing and editing product inventory information, and you'd like to implement an 'Edit' mode for changing values. Values should not be allowed to change when 'Edit' mode is off; they can only be updated after the user clicks the 'Edit' button, and then can be saved with a 'Save' button when they're finished. In total, there are a handful of Input widgets for handling the product data and two buttons for switching 'Edit' mode on and off.

In an imperative style, you might expect the Input widgets to be toggled with this kind of control:
```javascript
Input1.disable()
// or,
Input1.enabled = false
```

But this won't work in Appsmith! Instead, you might create and store a special value that represents whether 'Edit' mode is enabled, and configure the widgets to behave according to that value. Appsmith provides the `storeValue()` function to make this possible, which you can read about [here]().

```javascript
// in the Disabled field of the Input widgets' properties
{{!appsmith.store.editMode}}

// in the onClick event field of the Edit button's properties
{{storeValue('editMode', true)}}

// in the onClick event field of the Save button's properties
{{storeValue('editMode', false)}}
```

{% embed url="https://youtu.be/yKb6SRonfmQ" %}

With this configuration, the Input widgets behave according to the current state of `editMode` in the Appsmith store. Anytime this value is toggled, the Input widgets are automatically updated.