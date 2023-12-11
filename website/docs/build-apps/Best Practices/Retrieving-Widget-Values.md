# Handle Widget Data 

This guide explains best practices for retrieving and managing widget property data in Appsmith.



## Understanding the issue with storeValue

The [storeValue](/reference/appsmith-framework/widget-actions/store-value) function in Appsmith is typically used to store and retrieve specific values within the application. While it serves its purpose in scenarios requiring persistence or reuse of a value across different parts of the application, it becomes less efficient when dealing with real-time data. 

When accessing or updating widget properties, relying on `storeValue` may introduce inefficiencies and potential delays in retrieving or manipulating real-time information. 


## Using widget properties

Instead of using the `storeValue` function, it's recommended to use widget properties for direct access or updating of widget properties in real-time. 

Appsmith's widget reference properties offer a straightforward way to access and use widget data. You can use mustache binding `{{}}` to access the widget properties. For example, you can add the following code within any widget, JSObject, or API URL to retrieve and pass the selected value of a Select widget:

```js
{{Select1.selectedOptionValue}}
```



To update widget data dynamically, consider using [Setter methods](/core-concepts/building-ui/dynamic-ui#using-setters-methods) available for various widgets in Appsmith. Setter methods allow you to programmatically update the properties of widgets, ensuring a dynamic and responsive user interface without relying on `storeValue` for every data change. For example, if you want to change the options of a Select widget, you can use:

```js
Select1.setOptions([{ label: 'Option 1', value: 'option1' }, { label: 'Option 2', value: 'option2' }])
```


