---
sidebar_position: 2
description: The console object provides a way to log messages to the logs tab.
---

# console

The `console` object provides a way to output messages for code debugging. This page gives information about the `console` object and its methods.

<ZoomImage src="/img/global-objects-console-logs-tab.png" alt="The Logs tab" caption="Logged messages" />

## Methods
The methods log the messages in the **Logs** tab of the JavaScript, API, and query editors. The messages are not saved and are only available for the current session. The console methods do not support string substitutions.

### console.log() `...args`

The console.log() method is used for logging informational messages. It accepts one or more arguments, including strings, numbers, objects, or expressions. For example:

```javascript
// Logs the given string message.
console.log('This is an informational message');

// Logs the value of `param1` after 'parameter:', with 'param1' being appended to the message.
console.log('Value of parameter:', param1);

// Logs the value of an evaluated expression.
console.log('Value of evaluated expression', 1 + 2);

// Logs the object property.
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

// Logs the value of 'actual_page_size' after 'is:'. 
// The value of 'actual_page_size' being appended to the message. 
console.warn('The recommended page size is 5, whereas the actual is: ', actual_page_size);
```
