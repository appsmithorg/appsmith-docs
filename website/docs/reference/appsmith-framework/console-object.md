---
sidebar_position: 2
---

# console

The `console` object provides a way to log messages to the console, and helps in debugging and monitoring code. This page provides information about console object and its methods.


## Methods
The messages logged are not persistently stored and are only accessible during the ongoing session. In Appsmith, you can use the following methods for logging messages:

:::note
Console methods do not support string substitutions.
:::

* [log](#consolelog-args)
* [error](#error)
* [warn](#warn)

### console.log() `...args`

The `console.log()` method is used to log informational messages to the logs tab. It can take one or more arguments, such as strings, numbers, objects, or expressions. For example:

```javascript
// prints the given string message to the Logs tab
console.log('This is an informational message');

// prints the value of parameters, where param1 is a passed as argument to a method
console.log('Value of parameter:', param1);

// prints the value of an expression to the Logs tab
console.log('Value of evaluated expression', 1+2);

//prints the object properties
console.log('Value of a property', appsmith.user.email);

```

### console.error() `...args`

The console.error() method is used to log error messages to the logs tab. It is often used to report unexpected or critical issues in the code. It can take one or more arguments, such as strings, numbers, objects, or expressions.

For example:

```javascript

// prints the given string message to the Logs tab
console.error('This is an error message');

// prints the new Error object to the Logs tab
console.error('A nullpointer exception is caught', new Error());

```

### console.warn() `...args`

The console.warn() method is used to log warning messages to the console. It indicates potential issues or situations that might lead to errors. It can take one or more arguments, such as strings, numbers, objects, or expressions.

```javascript

// prints the given string message to the Logs tab
console.warn('This is a warning message');

// prints a warning message to the Logs tab
console.warn('The recommended page size is 5 records per page, whereas the actual is: ', actual_page_size);

```