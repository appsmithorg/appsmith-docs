# Widget Errors

This section helps you troubleshoot common widget errors on the Appsmith platform.

## Binding errors
You may see below errors when binding data to widgets from an [API](/core-concepts/connecting-to-data-sources/authentication/), [Query](/core-concepts/data-access-and-binding/querying-a-database/), [JS object](/core-concepts/writing-code/javascript-editor-beta/).

### Sync field error

You may see this error when executing an API, Query, JS Object in a widget property that expects data, and can't be used to trigger an action. 

![Error action can't be triggered](/img/Troubleshooting-Widget-errors-action-cannot-be-triggered.png)

#### Error message

<Message
messageContainerClassName="error" 
messageContent="Found a reference to {{action}} during evaluation. Sync fields cannot execute async framework actions. Please remove any direct/indirect references to {{action}} and try again."></Message>

<p align="center">Or </p>


<Message
messageContainerClassName="error" 
messageContent="Found a Promise() during evaluation. Sync fields cannot execute asynchronous code."></Message>


#### Cause
Action refers to the execution of an API, Query, or JS object. You can only perform an action by binding it to an [async](/core-concepts/writing-code/workflows#async-fields) field. When you bind an action to a [sync](/core-concepts/writing-code/workflows#sync-fields) field that only expects data, it throws an error.

Example: if you are executing a `storeValue()` function in a `TableData` property of a table. The `TableData` property expects data and can't execute a function, and results in an error. Similarly, if you try to execute a JS Object function `<JSOBJECT_NAME.FUNCTION_NAME>` in the `TableData` property, it throws an error.


#### Solution
Invoke the [data property](/core-concepts/writing-code/workflows#use-an-async-function-response-in-a-sync-field) of an API, Query or JS object.

For example, you have a JS Object `getLoggedInUserInfo`, which has a function ```getFullNameOfLoggedInUser```. The function returns the full name of the logged-in user. You wish to add the full name and create a welcome text, `Welcome! <LOGGED_IN_USER_NAME>`. Bind the response of ```getFullNameOfLoggedInUser``` function to a text widget by calling the `.data` property. To bind the response, add the below code snippet in a mustache (`{{}}`) sign.

```
 getLoggedInUserInfo.getFullNameOfLoggedInUser.data
```

## JSON form errors

You may see the below errors when working with a [JSON Form ](../../reference/widgets/json-form)widget.

### Source data exceeds 50 fields

You may see an error message when you try to bind a large query/API response to the [source data ](../../reference/widgets/json-form#source-data)property of the JSON Form widget.

#### Error message

<Message
messageContainerClassName="error" 
messageContent="Source data exceeds 50 fields. Please update the source data."></Message>

#### Cause

The problem can be caused when you are trying to bind:

* A large array of multiple JSON objects
* A huge JSON object which has a lot of fields
* The whole query data rather than a selected row or triggered row in a table

![When the data had more than 50 fields](</img/Troubleshooting__Widget_Errors__JSON_Form_Errors__Source_Exceeds_50_Fields.png>)


#### Solution

To determine if the problem is caused due to:

* **A large array or a huge JSON object** - You can re-look at the data and evaluate the need to display all the data on UI, as it would be painful for your users to navigate more than 50 fields.
* **The whole query response that you bound to the source data** - You recheck the source data field you are trying to bind and select either the selected row / triggered row to bind.

Once you have figured out the new structure for the data, head to the [source data](../../reference/widgets/json-form#source-data) field to make changes.

If you still need help debugging an error, please raise a request on [Discord Server](https://discord.com/invite/rBTTVJp) or email support@appsmith.com.

## Default value is missing in options 

You may encounter an error message "Default value is missing in options. Please update the value." while using the Select widget.

#### Error message

<Message
messageContainerClassName="error" 
messageContent="Default value is missing in options. Please update the value."></Message>

#### Cause

This error occurs when the Default Selected Value doesn't match any of the values specified in the options property of the widget.

#### Solution

To fix this error, either change the value in the options property to match the selected value, or change the selected value to match an option listed in the options property. This ensures that the value selected is valid and prevents the error from appearing.


## Duplicate values found

You may encounter an error message "Duplicate values found for the following properties" while using the Select widget.

#### Error message

<Message
messageContainerClassName="error" 
messageContent="Duplicate values found for the following properties, in the array entries, that must be unique -- value."></Message>

#### Cause

This error occurs when there are duplicate values in the options property of the Select widget. For example,
```js
 {
    "label": "Blue",
    "value": "BLUE"
  },
  {
    "label": "Green",
    "value": "BLUE"
  },
```

#### Solution

To resolve this error, ensure that each value in the options property of the Select widget is unique. You can do this by checking the values and making sure that there are no duplicates. 