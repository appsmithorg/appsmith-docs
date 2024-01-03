---
description: Best practices for Writing Functions using JavaScript
---

# JavaScript Function Best Practices
When working with data in Appsmith, it is common to manipulate objects and arrays to render user interfaces, implement business logic, and communicate with APIs. These operations can, however, become performance bottlenecks without carefully considered practices. This document outlines best practices for object and array evaluations with Lodash and native JavaScript methods. These guidelines will help maintain a responsive and performant application.

## Avoid nested operations

Using Lodash or native JavaScript functions around objects and arrays requires caution.
Arrays and objects nested within each other can reduce performance. Using nested functions such as map, filter, and find can cause performance issues similar to nested loops.

Example:
```jsx
const result = arrayValues.map(item => item.filter(value => value.find(() => {})));
```
Binding complex logical functions directly to widget properties such as `Visible`, `Disabled`, or color attributes like `Text color` or `Background color` can affect the app's performance adversely.

Appsmith recommends clubbing array and object-related functions instead of deep nesting for improved performance.

Example:
```jsx
const result = arrayValues.map(() => {}).find(() => {});
```

## Utilize the Appsmith store
To prevent performance bottlenecks, compute heavy logic once and store the result in the Appsmith store. Widgets can then refer to this stored value.

Example:
```jsx
const computeValue = () => { // Compute value };
Appsmith.store.setValue('computedValue', computeValue());
```
You can then refer to the stored computed value in widgets.

Example:
```jsx
{{Appsmith.store.computedValue}}
```