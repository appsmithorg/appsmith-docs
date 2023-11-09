# Validate Form

This page shows you how to validate Form fields based on specific criteria using regular expressions and validation properties. 
When it comes to validating form fields, it's essential to understand that different widgets may have different validation properties. 

*  Each widget type may have its specific validation properties. For example, Input widgets can make use of regex or valid properties to validate user input.
*  Enabling the **Required** property on a widget within a form ensures the submit button on the form widget remains disabled until the field contains a value.
*  If the **Regex** or **Valid** properties are used and the input provided doesn't match the specified criteria, the submit button remains disabled until the correct value is entered.


## Prerequisites

A [Form widget](/reference/widgets/form) with all the relevant fields.



## Validation in Form Widget


1. If you want to make an Input field mandatory, enable the **Required property** from the property pane. This ensures that the submit button on the form widget remains disabled until the field contains a value.

2. Configure the **Regex** property to add specific validation patterns using regular expressions. Regex is available for all Input widgets, including Currency input, and Phone input.

<dd>

*Example:* To validate whether an entered email is correct, use the following regular expression code inside the [**Regex**](/reference/widgets/input#regex-string) property of an Input widget:

```js
//regex
^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$
```

See more [Regex examples](/reference/widgets/input#regex-string).

</dd>

3. To set up custom validation rules based on other widgets or query data,  configure **Valid** property.

<dd>

*Example:* If you want users to enter a 10-digit phone number, use the following code within the **Valid** property of an Input widget:

```js
//Valid
{{Input1.text.length == 10}}
```


</dd>

4. To disable input fields or buttons based on previous input fields or specific conditions, configure the Disabled or Visible property.


<dd>

*Example 1:* If the first input is not valid, and you want to hide the second input, you can add the following code within the **Visible** property of Input 2.

```js
//Visible
{{Input1.isValid}}
```


</dd>


5. To display error messages corresponding to your validation rules, configure the **Error message** property.


<dd>

*Example:*  If you want to add password validation, ensuring it is greater than 10 characters and contains at least one digit, you can use the following code in the **Error message** property.

```js
//Valid property
{{Input1.text.length > 10 && /\d/.test(Input1.text) ? true : false}}


//Error message property
{{Input1.text.length > 10 || !/\d/.test(Input1.text) ? "Error: Length should be at least 10 characters and contain at least one digit" : ""}}
```

This code checks the length of Input is exactly 10 characters and if it contains at least one digit. If not, it returns the error message

</dd>






## Dynamic Validation

Dynamic validation involves real-time validation or validation that adapts to the user's input, providing immediate feedback based on changing conditions or data.











## Validation in Containers

When working with containers instead of forms, it's important to note that the automatic enabling of submit buttons and required field checks won't occur by default. Here's how you can achieve validation in containers.

1. Drag a Input widget to get user details.

1. Drag a Button widget, and configure the **Visible** property.

<dd>

```js
{{Input1.isValid}}
```

</dd>

With this


## Using regular expressions

The Regex property, short for Regular Expression, enables you to apply custom validations on user input by defining specific constraints using regular expressions. If the user enters a value that does not adhere to the specified pattern, the widget displays an error message indicating `invalid input`. Regex is available for all Input widgets, including Currency input, and Phone input.

<dd>

#### Email validation

To validate whether an entered email is correct, use the following regular expression code inside the [**Regex**](/reference/widgets/input#regex-string) property of an Input widget:



```js
//regex
^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$
```

#### Phone number validation

To get phone number in a specific format or length, you can use the following codes:

*Example:* if you want to validate international phone numbers starting with a plus sign (+) and a total length between 6 and 14 digits, use the following code inside the **Regex** property:


```js
//regex
^\+(?:[0-9]●?){6,14}[0-9]$
```


#### Number validation

If you need to add number validation for fields like currency or prices, you can use the following regular expression code inside the **Regex** property of any Input widget:


```js
//Regex

//Range Validation - 0 to 100:  
^(0*100(\.0*)?)$|^([1-9]?[0-9](\.\d*)?)$

//Positive Number Validation:  
^[1-9][0-9]*$

//Decimal Number Validation:  
^-?\d+(\.\d{2})?$

//Minimum and Maximum Value Validation(1000 and 10,000):
Regex: ^(10000|[1-9][0-9]{3,4})$ 
```

#### URL validation

This validation is used to ensure that URLs provided by users for files or images adhere to the required format.

```js
//Regex
(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?
```


</dd>




