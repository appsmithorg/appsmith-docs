
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create Custom Widgets Using Iframe

Appsmith offers a wide range of widgets for building applications. Still, sometimes you may need a custom widget for a specific purpose, such as a calendar, accordion, social media widget, etc. In such cases, you can create the widget in HTML or a language like React and display it in the Iframe widget.


<Tabs>
  <TabItem value="Ace-Editor" label="Ace Code Editor Library" default>
    
    Lets create a custom Code Editor Widget with the [Ace Code Editor Library](https://ace.c9.io/).

1. In the **srcDoc** property, add the following code:

```html
<head>
<style type="text/css" media="screen">
 #editor{ 
        position: absolute;
        top: 40px;
        right: 0;
        bottom: 0;
        left: 0;
}
</style>
</head>
<body>
<div id="editor">function foo(items) {
    var x = "All this is syntax highlighted";
    return x;
}</div>
<script src="https://cdn.jsdelivr.net/npm/ace-builds@1.19.0/src-min-noconflict/ace.min.js" type="text/javascript" charset="utf-8"></script>
<script>
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/javascript");
    editor.on("change", function() {
        // Get the value of the editor and send it to the parent window
        var code = editor.getValue();
        window.parent.postMessage(code, "*");
    });
</script>
```
This code creates a code editor widget using the Ace code editor library and sends the entered code to the [parent window](#communication-between-app-and-iframe) when the "Submit Code" button is clicked.


2. Next, add Text widget and sets its **Text** property to:

```js
{{Iframe1.message}}
```
This retrieves the entered code from the editor and displays it in a Text widget using the `message` reference property. 

With this setup, users can edit the code in the code editor, and when the submit button is clicked, the entered code would be processed or displayed as desired.


<figure>
  <img src="/img/custom-widget-code.png" style= {{width:"800px", height:"auto"}} alt="Display images on table row selection"/>
  <figcaption align = "center"><i>Custom Code Editor</i></figcaption>
</figure>


  </TabItem>
  <TabItem value="Accordion" label="Accordion Widget">
    This is an orange 🍊
  </TabItem>
  <TabItem value="banana" label="Banana">
    This is a banana 🍌
  </TabItem>
</Tabs>

