# Custom Widget Builder

This page provides information on the Custom Widget Code Editor, which allows you to edit HTML, JS, and CSS code for your custom widgets. Accessible only when **Edit Source** is clicked from the [Custom widget](/reference/widgets/custom/custom-widget).


<figure>
  <img src="/img/Custom Widget Builder.png" style= {{width:"700px", height:"auto"}} alt="Camera widget"/>
  <figcaption align = "center"><i></i></figcaption>
</figure>


## Content properties

These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.

#### Templates

<dd>

Templates button allows you to select predefined configurations like React, Vue, etc. Use these templates to initiate your project swiftly, with the option to revert back to the original setup when necessary.

</dd>

#### Layouts

<dd>

Allows you to change the viewing arrangement in the editor.


*Options:*

* **Split View:** HTML, CSS, and JavaScript are displayed one on top of the other.

* **Tabs View:** HTML, CSS, and JavaScript editors are arranged in tabs.


</dd>

#### Preview

<dd>

You can preview the custom widget in the left panel, and it automatically updates with every change made. 

</dd>



## Reference properties

Reference properties are properties that are not available in the property pane but can be accessed using the dot operator in other widgets or JavaScript functions. They provide additional information or allow interaction with the widget programmatically. 

#### model


<dd>

The `model` property retrieves the value passed in the **Default Model** property of the Custom widget.

```js
// Access the entire model
appsmith.model

// Access a specific property in the model
appsmith.model.propertyname
```
</dd>


#### updateModel

<dd>

The `updateModel` property allows you to dynamically update the model properties. This enables real-time synchronization between the Custom widget and the model.

*Example*: If you want to save a signature upon button click, use the following code:

```js
document.getElementById('saveBtn').addEventListener('click', function () {
    var dataURL = signaturePad.toDataURL();
    // Implement logic to save the signature data (e.g., send to server)
    appsmith.updateModel({"signatureImage": dataURL});
});

```
</dd>


#### triggerEvent

<dd>

You can execute custom events by specifying the event name and providing optional data.

*Example*: 

```js
function onClick() {
    appsmith.triggerEvent("onClick", { itemId: 1 });
}
```
</dd>

#### onModelChange

<dd>

The `onModelChange` property allows you to implement a handler function, triggering updates whenever changes occur in the platform-induced model.


*Example*: 

```js
useEffect(() => {
    appsmith.onModelChange((model) => {
        setSomething(model.something);
    });
}, []);
```
</dd>


#### ui

<dd>

Provides access to the UI elements of the widget, such as width and height, in pixels.


```js
appsmith.ui
```

</dd>


#### onUiChange

<dd>

Allows a handler function to be called whenever the UI changes, providing a useful mechanism for updating components affected by UI changes from the platform.


```js
useEffect(() => {
    appsmith.onUiChange((ui) => {
        setComponentWidth(ui.width);
    });
}, []);
```

</dd>

#### onReady

<dd>

Use a handler function invoked when the Custom widget is prepared for rendering. Execute the entry point of your component within this function.



```js
useEffect(() => {
    appsmith.onReady(() => {
        /* Trigger the entry point of your component, e.g., reactDom.render(<App />, document.getElementById("root")); */
    });
}, []);
```

</dd>