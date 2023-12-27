# Custom

This page provides information on using the Custom widget, which allows you to integrate React, HTML, and JavaScript components for additional functionality. 

To embed web pages or applications, use the [IFrame widget](/reference/widgets/iframe).


## Content properties

These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.


### Widget 

#### Edit Source

<dd>

Allows you to customize the code for the custom widget. When clicked, it opens a dedicated page where you can conveniently modify and update the widget's code to suit your requirements.

Learn more about [Custom Widget Builder](/reference/widgets/custom-widget-builder).

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


<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/FCh9XryZ3ymHeOdFnE7x?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>


Allows you to configure one or multiple actions (Framework functions, queries, or JS functions) tailored to your specific requirements. Create events in the widget and trigger them in the javascript file using `appsmith.triggerEvent('eventName')`


*Example*: To reset the widget upon a button click, create a new event named **onResetClick** and add the following in the JavaScript code:

```js
const handleReset = () => {
  setCurrentIndex(0);
  appsmith.triggerEvent("onResetClick");
};
```




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
