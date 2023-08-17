# Display Data from Functions

Functions in a JS Object can be _Synchronous_ or _Asynchronous_.

Widgets have fields/properties where you can bind data or trigger actions.

_Async fields_ are properties that can trigger an [action](/reference/appsmith-framework/widget-actions) or perform an operation. For example, the properties like `OnTextChanged` and `OnSubmit` of an input widget are async fields. **You can call or execute the JS functions in async fields(event listeners)**.

_Sync fields_ are properties that expect data. For example, for an Input widget, properties such as **Default Value**, **Required**, **Text** expect data and are sync fields. **You can display the response from JS functions in sync fields**.

### Synchronous functions

As the name suggests, synchronous means to run in a particular sequence. It means that every statement of the code gets executed one by one. So, a statement must wait for the earlier statement to complete its execution.
To display the response from a synchronous JS function in a sync widget field, call the function inside the JS Object as shown below:

```javascript
{
  {
    JS_OBJECT_NAME.FUNCTION_NAME();
  }
}
```

### Asynchronous functions

The word asynchronous means not occurring at the same time. You may need to fetch data from the server or execute a function with a delay, something you don't want happening at the current time. Asynchronous functions can be specified using the keyword `async`. See Asynchronous JavaScript Function Settings for more information.

To display the response from an asynchronous JS function in a sync widget field, you need to retrieve it using the `.data` property, as shown below:

```javascript
{
  {
    JS_OBJECT_NAME.FUNCTION_NAME.data;
  }
}
```

<VideoEmbed host="youtube" videoId="yn_8gs5w04g" title="Display response from async function in widget field" caption="Display response from async function in widget field"/>
