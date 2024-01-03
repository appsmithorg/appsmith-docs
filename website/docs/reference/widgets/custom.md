# Custom

This page provides information on using the Custom widget, which allows you to integrate CSS, HTML, and JavaScript components for additional functionality. 

To embed web pages or applications, use the [IFrame widget](/reference/widgets/iframe).


## Content properties

These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.


### Widget 

#### Edit Source

<dd>

Allows you to customize the code for the custom widget. When clicked, it opens a dedicated page where you can conveniently modify and update the widget's code to suit your requirements.

Learn more about [Custom Widget Builder](#custom-widget-builder).

</dd>

#### Default Model

<dd>


This property allows you to pass data to the custom widget's code editor. You can use mustache binding `{{}}` to pass data from queries or other widgets.

*Example:* If you want to pass the name from a Table widget to the custom widget, use the following code:

```js
{
  "name": "{{Table1.selectedRow.name}}"
}
```



* To access the data in the javascript editor use `appsmith.model.property-name`.

* To access data in CSS use `var(--appsmith-model-{property-name}`

</dd>






### General

#### Visible `boolean`

<dd>

Controls the visibility of the widget. If you turn off this property, the widget would not be visible in View Mode. Additionally, you can use JavaScript by clicking on **JS** next to the **Visible** property to conditionally control the widget's visibility. The default value for the property is `true`.

For example, if you want to make the widget visible only when the user selects "Yes" from a Select widget, you can use the following JavaScript expression: 
```js
{{Select1.selectedOptionValue === "Yes"}}
```



</dd>



### Events

#### Custom Events	

<dd>


Allows you to configure one or multiple actions (Framework functions, queries, or JS functions) tailored to your specific requirements. Create events in the widget and trigger them in the javascript file using `appsmith.triggerEvent("eventName")`


*Example*: To reset the widget upon a button click, create a new event named **onResetClick** and add the following in the JavaScript code:

```js
const handleReset = () => {
  setCurrentIndex(0);
  appsmith.triggerEvent("onResetClick");
};
```


<div style={{ position: "relative", paddingBottom: "45.52%", height: "0", width: "82%" }}>
  <iframe src="https://demo.arcade.software/xiVATpXaTSOokxAncvLS?embed" frameBorder="0" loading="lazy" allowFullScreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data"></iframe>
</div>


</dd>





## Reference properties

Reference properties are properties that are not available in the property pane but can be accessed using the dot operator in other widgets or JavaScript functions. They provide additional information or allow interaction with the widget programmatically. For instance, to get the visibility status, you can use `Custom1.isVisible`.

#### model `string`

<dd>

The `model` property retrieves the value from the Custom widget and **Default Model** property. 

*Example*:

```js
{{Custom1.model}}

// Accessing a specific property 
{{Custom1.model.signatureImage}}
```

</dd>

#### isVisible `boolean`

<dd>

The `isVisible` property indicates the visibility state of a widget, with true indicating it is visible and false indicating it is hidden.

*Example*:

```js
{{Custom1.isVisible}}
```

</dd>

## Custom Widget Builder

This section provides information on the Custom Widget Code Editor, which allows you to edit HTML, JS, and CSS code for your custom widgets. These properties are accessible within the code editor.

:::info
- When creating your custom component, skip `<html>` and `<body>` tags. Instead, directly write the tags essential for your app.
- When importing libraries, opt for ESM (ECMAScript Module) or UMD (Universal Module Definition) method. Use trusted CDN providers like [jsDelivr](https://www.jsdelivr.com/) or [UNPKG](https://unpkg.com/) for library imports.
:::

### Javascript API

These properties are accessible within the JavaScript editor, providing specific functionalities and customization options.


#### model `object`


<dd>

The `model` property retrieves the value passed in the **Default Model** property of the Custom widget.

```js
// Access the entire model
appsmith.model

// Access a specific property in the model
appsmith.model.propertyname
```
</dd>

#### mode `string`


<dd>

The `mode` property represents the current render context of the Custom widget. 

```js
appsmith.mode

// Value: EDITOR | BUILDER | DEPLOYED
```
</dd>

#### theme `object`

<dd>

The `theme` object reflects the current theme of the Appsmith application.

- `primaryColor` (`string`): Represents the primary color of the application theme.
- `backgroundColor` (`string`): Represents the background color of the application theme.
- `borderRadius` (`string`): Specifies the border radius used in the application theme.
- `boxShadow` (`string`): Represents the box shadow applied in the application theme.

```js
appsmith.theme
```

</dd>


#### ui `object`

<dd>

Provides access to the UI elements of the widget, such as width and height, in pixels.


```js
appsmith.ui
```

</dd>



### CSS API

These properties are accessible within the CSS editor, providing specific functionalities and customization options.

#### model


<dd>

The `model` property retrieves the value passed in the **Default Model** property of the Custom widget.

```js
// Access the entire model
--appsmith-model

// Access a specific property in the model
--appsmith-model-color
```
</dd>

#### UI and theme

<dd>

These CSS variables are available to control widget size and define the theme.

```js
//Widget size
--appsmith-ui-width
--appsmith-ui-height

//Application theme
--appsmith-theme-primaryColor
--appsmith-theme-backgroundColor
--appsmith-theme-borderRadius
--appsmith-theme-boxShadow
```

</dd>

### Methods

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

#### onThemeChange

<dd>

Subscribe to theme changes and execute a callback function.

```js
// Set the primaryColor of your component using a function.
const unlisten = appsmith.onThemeChange((theme, oldTheme) => {
	setPrimaryColor(theme.primaryColor);
});

// Unsubscribe when no longer interested in updates.
unlisten();
```

</dd>