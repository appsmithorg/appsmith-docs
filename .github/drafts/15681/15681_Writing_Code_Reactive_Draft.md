
<!-- 
Amends the "Reactive" section of the "Writing Code" page of the docs, found [here](https://docs.appsmith.com/core-concepts/writing-code#reactive).
Links to individual mentioned widget reference pages will be added when text is ported to GitBook.
-->

## Reactive

When data changes within your app, your widgets need to update themselves to reflect these changes. To make this happen, Appsmith follows the reactive programming paradigm.

Instead of managing widget properties and states with direct variable assignment in code (like
`x = 5`), widgets in your applications are connected to each other and share data; when one value is updated in your app, any objects that depend on that changed value also update accordingly. Below is a quick example of using the reactive code style to update a button's label in real-time by taking user input from an Input widget. Take a look at the video below:

{% embed url="https://youtu.be/YXo4PVrw1RQ" %}

The button’s label could be set as a simple static value (like “Submit”) in its properties pane, but if you’d like that property to change at any point, it must be defined differently.

When writing JavaScript to configure a widget’s property, your code should tell that widget where to look to find its data rather than explicitly setting a specific value. Consider the following example scenario:

Imagine that you're creating an issue tracker, and you'd like to make certain questions available for the user depending on the type of issue they'd like to submit. To accomplish this, you might use a Tab widget to show the appropriate set of questions. To control which page of questions is displayed to the user, you use something like the Select widget.

In an imperative style, something like this might be familiar:
```javascript
//When the user selects the "Bug" option
BugScreen.show()

//or,
TabWidget.showPage("Bug")
```
But this won't work in Appsmith!

To make this work using the reactive code style, you would add the appropriate options to the Select widget (Bug, Enhancement, etc.) and configure the Tab widget's **Default Tab** property to:
```javascript
// Our Select widget has the option labels
// "Bug", "Feature Request", and "Enhancement"
{{Select1.selectedOptionLabel}}
```

{% embed url="https://youtu.be/RL3HVzP0fMk" %}

Now when you choose an option with the Select widget, the Tab widget automatically updates to show the appropriate page of questions.