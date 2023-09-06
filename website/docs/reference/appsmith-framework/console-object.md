---
sidebar_position: 2
---

# console

The `console` object provides a way to log messages to the logs tab and helps in debugging and monitoring code. This page provides information about the console object and its methods.


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

The `console.log()` method logs informational messages. It can take one or more arguments, such as strings, numbers, objects, or expressions. For example:

```javascript
// logs the given string message
console.log('This is an informational message');

// logs the value of parameters, where param1 is an argument to a method
console.log('Value of parameter:', param1);

// logs the value of an expression
console.log('Value of evaluated expression', 1+2);

//logs the object properties
console.log('Value of a property', appsmith.user.email);
```

### console.error() `...args`

The `console.error()` method logs error messages. It helps in reporting unexpected or critical issues in the code. It can take one or more arguments, such as strings, numbers, objects, or expressions. For example:

```javascript
// logs the given string message 
console.error('This is an error message');

//logs the error
try{

    //some code that throws error

}catch(err){
    // logs the err object
    console.error('In catch block: ', err);
}
```

### console.warn() `...args`

The `console.warn()` method logs warning messages. It indicates potential issues or situations that might lead to errors. It can take one or more arguments, such as strings, numbers, objects, or expressions.

```javascript
// logs the given string message
console.warn('This is a warning message');

// logs a warning message
console.warn('The recommended page size is 5, whereas the actual is: ', actual_page_size);
```
