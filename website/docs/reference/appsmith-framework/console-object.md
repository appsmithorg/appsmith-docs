---
sidebar_position: 2
description: The console object provides a way to log messages to the logs tab.
---

# console

The `console` object provides a way to log messages to the Logs tab, aiding in code debugging and monitoring. This page gives comprehensive information about the console object and its methods.


## Methods
The methods log the messages to the logs tab. The logged messages are only accessible during the ongoing session. 

<figure>
  <img src="/img/global-objects-console-logs-tab.png" style= {{width:"700px", height:"auto"}} alt="The Logs tab"/>
  <figcaption align = "center"><i>Logged messages</i></figcaption>
</figure>

In Appsmith, you can use the following methods for logging messages:

:::note
Console methods do not support string substitutions.
:::

* [log](#consolelog-args)
* [error](#error)
* [warn](#warn)

### console.log() `...args`

The console.log() method is used for logging informational messages. It accepts one or more arguments, including strings, numbers, objects, or expressions. For example:

```javascript
// Logs the given string message.
console.log('This is an informational message');

// Logs the value of parameters, where param1 is an argument to a method.
console.log('Value of parameter:', param1);

// Logs the value of an evaluated expression.
console.log('Value of evaluated expression', 1 + 2);

// Logs object property.
console.log('Value of a property', appsmith.user.email);
```

### console.error() `...args`

The `console.error()` method logs error messages and helps in reporting unexpected or critical issues in the code. It can take one or more arguments, such as strings, numbers, objects, or expressions. For example:
```javascript
// Logs the given error message.
console.error('This is an error message');

// Logs errors within a try-catch block.
try {
    // Some code that throws an error.
} catch (err) {
    // Logs the err object.
    console.error('In the catch block:', err);
}
```

### console.warn() `...args`

The `console.warn()` method logs warning messages, indicating potential issues or situations that might lead to errors. It can take one or more arguments, such as strings, numbers, objects, or expressions. For example:

```javascript
// Logs the given string message
console.warn('This is a warning message');

// Logs a warning message
console.warn('The recommended page size is 5, whereas the actual is: ', actual_page_size);
```
