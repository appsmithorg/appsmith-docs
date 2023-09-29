
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create Custom Widgets Using Iframe

Appsmith offers a wide range of widgets for building applications. Still, sometimes you may need a custom widget for a specific purpose, such as a calendar, accordion, social media widget, etc. In such cases, you can create the widget in HTML or a language like React and display it in the Iframe widget.


## Prerequisites

* You should have the code for the custom widget you want to embed, which can be written in JavaScript, React, Angular, or HTML.
* Iframe Widget.

## Configure Iframe

Follow these steps to configure an Iframe widget for embedding custom widgets:


###  Custom Widgets Using JavaScript 

1. In the **srcDoc** property, add the HTML and JavaScript code to define the custom widget:

<dd>

*Examples:*

</dd>

2. To access messages from the embedded widget, use the `message` reference property. For example, add Text widget and set its **Text** property to:

<dd>

```js
{{Iframe1.message}}
```

</dd>

This retrieves the entered code from the editor and displays it in a Text widget using the `message` reference property. 



### Custom Widgets Using React

To create a custom widget using React, you need to develop a React component, host it on a platform of your choice, and then use it for integration.

1. In the **URL** property, add the deployed app's link. For instance, if you have hosted your code on Replit, you can use:

<dd>

```
https://appname.username.repl.co
```

</dd>

2. To send a message to the react app, you can use the `postWindowMessage` function, like:


<dd>

```js
{{ postWindowMessage({"key": Select1.selectedOptionValue}, 'Iframe1', '*')}}
```

</dd>




