# Custom Widget

This page provides information on using the Custom Widget widget, which allows you to integrate React, HTML, and JavaScript components for additional functionality. 

To embed web pages or applications, use the IFrame widget.


## Content properties

These properties are customizable options present in the property pane of the widget, allowing users to modify the widget according to their preferences.



#### Edit Source

Allows you to customize the code for the custom widget. When clicked, it opens a dedicated page where you can conveniently modify and update the widget's code to suit your requirements.


#### Default Model

<dd>


This property allows you to pass data to the custom widget's code editor. 


* To access the data in the javascript editor use `appsmith.model`.

* To access data in CSS use `var(--appsmith-model-{property-name}`

* Create events in the widget and trigger them in the javascript file using `appsmith.triggerEvent('eventName')`

*Example:* if you want to pass 



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


Allows you to configure one or multiple actions (Framework functions, queries, or JS functions) tailored to your specific requirements. 

For example, if your custom widget necessitates a reset functionality, you can create an **onReset** event and specify the corresponding action to be executed. 

</dd>





