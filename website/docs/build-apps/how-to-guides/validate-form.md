# Validate Form

This page shows you how to validate Form fields based on specific criteria using regular expressions and validation properties. When it comes to validating form fields, it's essential to understand that different widgets may have different validation properties. 

*  Each widget type may have its specific validation properties. For example, Input widgets can make use of regex or valid properties to validate user input.
*  Enabling the **Required** property on a widget within a form ensures the submit button on the form widget remains disabled until the field contains a value.
*  If the **Regex** or **Valid** properties are used and the input provided doesn't match the specified criteria, the submit button remains disabled until the correct value is entered.


## Prerequisites

A [Form widget](/reference/widgets/form) with all the relevant fields.

## Validation mechanism


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

*Example 1:* if you want to validate international phone numbers starting with a plus sign (+) and a total length between 6 and 14 digits, use the following code inside the **Regex** property:


```js
//regex
^\+(?:[0-9]●?){6,14}[0-9]$
```

*Example 2:* If you want users to enter a 10-digit phone number, use the following code within the **Valid** property of an Input widget:

```js
//Valid
{{Input1.text.length == 10}}
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

#### Date validation

</dd>