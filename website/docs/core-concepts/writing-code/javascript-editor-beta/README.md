# JS Objects

JSObjects in Appsmith are powerful tools that enable developers to encapsulate JavaScript code, including functions and variables, to enhance the capability of their applications. They serve the purpose of segregating business logic, performing complex data manipulations, and interacting seamlessly with Appsmith's widgets and backend services. This updated document will provide a detailed understanding of JSObjects in Appsmith, focusing on the aspect of exporting a single default object and the behavior of variables within it.

## Defining a JS Object

To define a JSObject in Appsmith, you create a JavaScript module that contains an object that exports specific functions and variables. It's important to note that a JSObject can only export one default object. Here's the general structure of a JSObject:

```javascript
export default {
  // Exported functions and variables go here
};
```

Within this default object, you can define all your reusable code and state that can be accessed throughout the application.

## Functions in JS Objects

JSObjects can contain different types of function definitions.

### Arrow function example

```javascript
export default {
  calculateArea: (length, width) => length * width,
};
```

### Traditional function syntax

```javascript
export default {
  calculateArea: function (length, width) {
    return length * width;
  },
};
```

### ES6 function syntax

```javascript
export default {
  calculateArea(length, width) {
    return length * width;
  },
};
```

## Variables in JS Objects

Variables declared in a JSObject are assigned by value. This means that if you assign a changeable object or a primitive value to a variable within the JSObject, it will not automatically update if the original source changes. To update a variable in the object, you must explicitly re-assign it.

```javascript
export default {
  colorValue: "#4A90E2", // The color value is set when the JSObject is defined
};

// Example of re-assigning the variable
setColorValue: (newColor) => {
  jsObjectName.colorValue = newColor;
};
```

In this example, `colorValue` is initially assigned a hex color code. If later in the application, you want to change this color based on user interaction or some other event, you will have to explicitly call a function like `setColorValue` and pass the new color value as an argument to update `colorValue`.

## Summary

JSObjects in Appsmith are critical for developers who want cleaner code and modular application logic. By limiting JSObjects to a single default export, Appsmith ensures code encapsulation and modularity. Use JSObjects to centralize your application's logic and data manipulations in a secure and organized manner, facilitating both individual productivity and teamwork in building sophisticated applications on the Appsmith platform.
